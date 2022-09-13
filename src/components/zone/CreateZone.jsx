import "./createzone.scss";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { useState } from "react";
import Button from '@mui/material/Button';
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
     if(
      location===""||
      pinCode ===""|| 
      fullAddress ===""||
      phNo ===""||
      email === ""){
        alert("Please fill all the fields")
        return;
      }
      const token = localStorage.getItem("token")
      let res = await axios.post("http://43.205.221.186:5001/zone/create-zone", {
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
      window.location.href = "/all-zone"
    } catch (err) {
      alert("Zone already created or problem at server side")
      console.log(err);
    }
  } 
  return (
    <>
    <div className="new">
      
      <div className="newContainer">
        
        <div className="top">
          <h1 style={{color: "black"}}>Create a Zone</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
             
              <div className="formInput">
                <label>Email</label>
                <input type="text" placeholder="" onChange={onChangeEmail} />
              </div>
              <div className="formInput">
                <label>Ph No</label>
                <input type="text" placeholder="" onChange={onChangePhNo} />
              </div>
              <div className="formInput">
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
          </div>
        </div>
      </div>
    </div>
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <Button variant="contained" onClick={onSubmit} style={{marginLeft : "auto", marginRight : "auto"}}>Create Zone</Button>
        </div>
      </div>
    </div>
    </>
  );
};

export default CreateZone;
