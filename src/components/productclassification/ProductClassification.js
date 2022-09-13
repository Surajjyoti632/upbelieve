import React from "react";
import Webcam from "react-webcam";
import { useState } from "react";
import axios from "axios";
//import { WriteFile } from "./WriteFile";

const getPackage = (height, width) => {
  const area = width * height;

  let packaging = "";

  if (area <= 100) {
    packaging = "small";
  }

  if (area > 100 && area < 500) {
    packaging = "medium";
  }

  if (area >= 500) {
    packaging = "large";
  }

  return packaging;
};

export default function ProductClassification() {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const [dimension, setDimension] = React.useState({
    height: 0,
    width: 0,
  });

  const [loading, setLoading] = useState(false);
  const [packageSize, setPackageSize] = useState("");

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let imageData = {
      base64Image: imgSrc,
      fileName: "test.jpg",
    };

    let { base64Image, fileName } = imageData;

    try {
      let res = await axios.post(
        "http://localhost:5001/upload/get-dimension",
        {
          base64Image,
          fileName,
        },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      setDimension({
        height: res.data.height,
        width: res.data.width,
      });
      const packaging = getPackage(res.data.height, res.data.width);
      setPackageSize(packaging);
      setLoading(false);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(imgSrc);
  return (
    <>
      {loading === false ? (
        <>
          <div className="productClassification">
            <>
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
              />
              <button onClick={capture}>Capture photo</button>
              <button onClick={onSubmit}>Send</button>
              {imgSrc && <img src={imgSrc} />}
            </>
          </div>
          <p>Height: {dimension.height}</p>
          <p>Width: {dimension.width}</p>
          <p>Packaging: {packageSize}</p>
        </>
      ) : (
        <p>Loading... | Please wait</p>
      )}
    </>
  );
}
