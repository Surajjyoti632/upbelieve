import "./createincident.scss";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const EditIncident = () => {
  const {id} = useParams();
  const [incidentData, setIncidentData] = useState({
    pinCode: "", 
    isResolved: false, 
    resolveSummary: ""
  });

 // pinCode, isResolved, resolveSummary
  

  console.log(incidentData);

  const onChangeIsResolved = (e) => {
    setIncidentData({
      ...incidentData,
      isResolved: e.target.value,
    });
  };

  const onChangePincode = (e) => {
    setIncidentData({
      ...incidentData,
      pinCode: e.target.value,
    });
  };

  const onChangeResolveSummary = (e) => {
    setIncidentData({
      ...incidentData,
      resolveSummary: e.target.value,
    });
  };

  const onSubmit = async (e) =>{
    e.preventDefault();

    try {
      const {
        pinCode,
        isResolved,
        resolveSummary
      } = incidentData;

      const token = localStorage.getItem("token")
      let res = await axios.post("http://localhost:5000/incident/update-incident/" + id, {
        pinCode,
        isResolved,
        resolveSummary
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
                  placeholder=""
                  onChange={onChangePincode}
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
            </form>
            <button onClick={onSubmit}>Create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditIncident;
