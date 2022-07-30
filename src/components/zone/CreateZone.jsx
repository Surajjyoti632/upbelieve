import "./createzone.scss";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { useState } from "react";
import axios from "axios";

const CreateZone = () => {
  const [zoneData, setZoneData] = useState({
    location: "", pinCode: "", fullAddress: "", phNo: "", email: ""
  });


  

  console.log(zoneData);

  const onChangeFullAddress = (e) => {
    setZoneData({
      ...zoneData,
      fullAddress: e.target.value,
    });
  };

  const onChangePhNo = (e) => {
    setZoneData({
      ...zoneData,
      phNo: e.target.value,
    });
  };

  const onChangePincode = (e) => {
    setZoneData({
      ...zoneData,
      pinCode: e.target.value,
    });
  };

  const onChangeEmail = (e) => {
    setZoneData({
      ...zoneData,
      email: e.target.value,
    });
  };

  const onChangeLocation = (e) => {
    setZoneData({
      ...zoneData,
      location: e.target.value,
    });
  };


  const onSubmit = async (e) =>{
    e.preventDefault();

    try {
      const {
        location, pinCode, fullAddress, phNo, email
      } = zoneData;

      const token = localStorage.getItem("token")
      let res = await axios.post("http://localhost:5000/zone/create-zone", {
        location, pinCode, fullAddress, phNo, email
    },
    {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      },
      )

      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  } 
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Create an Incident</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div className="formInput">
              <div className="formInput">
                <label>Email</label>
                <input type="text" placeholder="" onChange={onChangeEmail} />
              </div>
              <div className="formInput">
                <label>Ph No</label>
                <input type="text" placeholder="" onChange={onChangePhNo} />
              </div>
                <label>Full Address</label>
                <input
                  type="text"
                  placeholder=""
                  onChange={onChangeFullAddress}
                />
              </div>

              <div className="formInput">
                <label>Location</label>
                <input
                  type="text"
                  placeholder=""
                  onChange={onChangeLocation}
                />
              </div>

              <div className="formInput">
                <label>Pincode</label>
                <input
                  type="text"
                  placeholder=""
                  onChange={onChangePincode}
                />
              </div>
            </form>
            <button onClick={onSubmit}>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateZone;
