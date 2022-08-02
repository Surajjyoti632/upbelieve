import React from "react";
import Webcam from "react-webcam";
import axios from "axios";
//import { WriteFile } from "./WriteFile";

export default function ProductClassification() {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);
  const [dimension, setDimension] = React.useState({
    height: 0,
    width: 0,
  });

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  const onSubmit = async (e) => {
    e.preventDefault();

    let imageData = {
      base64Image: imgSrc,
      fileName: "test.jpg",
    };

    let { base64Image, fileName } = imageData;

    try {
      let res = await axios.post(
        "http://localhost:5001/upload",
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
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(imgSrc);
  return (
    <>
      <div className="productClassification">
        <>
          <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
          <button onClick={capture}>Capture photo</button>
          <button onClick={onSubmit}>Send</button>
          {imgSrc && <img src={imgSrc} />}
        </>
      </div>
      <p>Height: {dimension.height}</p>
      <p>Width: {dimension.width}</p>
    </>
  );
}
