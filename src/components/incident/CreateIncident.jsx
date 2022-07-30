import "./createincident.scss";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { useState } from "react";
import axios from "axios";

const CreateIncident = ({ inputs, title }) => {
  const [incidentData, setIncidentData] = useState({
    incidentName: "",
    description: "",
    pinCode: "",
    location: "",
    customerName: "",
    item: "",
    hasComplaint: false,
    price: 0,
    pointOfOccurance: "",
  });

  // incidentName: String,/
  // description: String,/
  // location: String,/
  // pinCode: String,/
  // customerName: String,/
  // hasComplaint: {/
  //   type: Boolean,
  //   defualt: false,
  // },
  // item: String,/
  // price: String,/
  // pointOfOccurance: String,/
  

  console.log(incidentData);

  const onChangeIncidentName = (e) => {
    setIncidentData({
      ...incidentData,
      incidentName: e.target.value,
    });
  };

  const onChangeDesc = (e) => {
    setIncidentData({
      ...incidentData,
      description: e.target.value,
    });
  };

  const onChangePincode = (e) => {
    setIncidentData({
      ...incidentData,
      pinCode: e.target.value,
    });
  };

  const onChangeCustomerName = (e) => {
    setIncidentData({
      ...incidentData,
      customerName: e.target.value,
    });
  };

  const onChangeItem = (e) => {
    setIncidentData({
      ...incidentData,
      item: e.target.value,
    });
  };

  const onChangePrice = (e) => {

    //console.log(e.target.value);
    setIncidentData({
      ...incidentData,
      price: e.target.value,
    });
  };

  const onChangePointOfOccurance = (e) => {
    setIncidentData({
      ...incidentData,
      pointOfOccurance: e.target.value,
    });
  };

  const onChangeLocation = (e) => {
    setIncidentData({
      ...incidentData,
      location: e.target.value,
    });
  };

  const onChangeComplaint = (e) => {
    setIncidentData({
      ...incidentData,
      hasComplaint: e.target.value,
    });
  };

  const onSubmit = async (e) =>{
    e.preventDefault();

    try {
      const {
        incidentName,
        description,
        pinCode,
        location,
        customerName,
        item,
        hasComplaint,
        price,
        pointOfOccurance
      } = incidentData;

      const token = localStorage.getItem("token")
      let res = await axios.post("http://localhost:5000/incident/create-incident", {
        incidentName,
        description,
        pinCode,
        location,
        customerName,
        item,
        hasComplaint,
        price,
        pointOfOccurance
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
                <label>Incident Name</label>
                <input
                  type="text"
                  placeholder=""
                  onChange={onChangeIncidentName}
                />
              </div>

              <div className="formInput">
                <label>Description</label>
                <input type="text" placeholder="" onChange={onChangeDesc} />
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

              <div className="formInput">
                <label>Customer Name</label>
                <input
                  type="text"
                  placeholder=""
                  onChange={onChangeCustomerName}
                />
              </div>

              <div className="formInput">
                <label>Item</label>
                <input type="text" placeholder="" onChange={onChangeItem} />
              </div>

              <div className="formInput">
                <label>Price</label>
                <input
                  type="number"
                  placeholder=""
                  onChange={onChangePrice}
                />
              </div>

              <div className="formInput">
                <label>Has Complaint</label>

                <select onChange={onChangeComplaint}>
                  <option>select </option>
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </select>
              </div>

              <div className="formInput">
                <label>Point of Occurance</label>
                <input
                  type="text"
                  placeholder=""
                  onChange={onChangePointOfOccurance}
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

export default CreateIncident;
