import "./createincident.scss";
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { GlobalState } from "../../GlobalState";
import Button from '@mui/material/Button';
import axios from "axios";

const EditIncident = () => {
  const {id, pinCode} = useParams();
  const state = useContext(GlobalState);
  const [role] = state.role;
  const [isLoggedIn] = state.isLoggedIn;

  const [incidentData, setIncidentData] = useState({
    pinCode: pinCode, 
    isResolved: false, 
    resolveSummary: "",
    incidentStatus: ""
  });

 // pinCode, isResolved, resolveSummary
  

  console.log({
    id, pinCode
  });

  const onChangeIsResolved = (e) => {
    setIncidentData({
      ...incidentData,
      isResolved: e.target.value,
    });
  };


  const onChangeResolveSummary = (e) => {
    setIncidentData({
      ...incidentData,
      resolveSummary: e.target.value,
    });
  };

  const onChangeIncidentStatus = (e) => {
    setIncidentData({
      ...incidentData,
      incidentStatus: e.target.value,
    });
  }

  const onSubmit = (e) =>{
    e.preventDefault();

    try {
      const {
        pinCode,
        isResolved,
        resolveSummary,
        incidentStatus
      } = incidentData;

      const token = localStorage.getItem("token")
       axios.post("http://43.205.221.186:5001/incident/update-incident/" + id, {
        pinCode,
        isResolved,
        resolveSummary,
        incidentData,
        incidentStatus
    },
    {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      },
      ).then((res) => {
        console.log(res.data);
        if(role === "admin"){
          window.location.href = "/all-incident"
        }

        if(role === "user"){
          window.location.href = "/my-incident"
        }
        
      })

    } catch (err) {
      console.log(err);
    }
  } 
  return (
    <>
      <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>Edit Incident</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div className="formInput">
                <label>Resolved Summary</label>
                <input
                  type="text"
                  placeholder=""
                  onChange={onChangeResolveSummary}
                />
              </div>
              <div className="formInput">
                <label>Pincode</label>
                <input
                  type="text"
                  value={incidentData.pinCode}
                  placeholder=""
                />
              </div>
              <div className="formInput">
                <label>Is Resolved</label>
                <select onChange={onChangeIsResolved}>
                  <option>select </option>
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>
              <div className="formInput">
                <label>Incident Status</label>
                <select onChange={onChangeIncidentStatus}>
                  <option>select </option>
                  <option value="pending">Pending</option>
                  <option value="resolved">Resolved</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <Button variant="contained" onClick={onSubmit} style={{marginLeft : "auto", marginRight : "auto"}}>Update</Button>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default EditIncident;
