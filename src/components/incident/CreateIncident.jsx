import "./createincident.scss";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {GlobalState} from "../../GlobalState"


const CreateIncident = () => {

  const state = useContext(GlobalState);
  const [role] = state.role;
  const [isLoggedIn] = state.isLoggedIn;
  

  const [loading, setLoading] = useState(true);
  const [zones, setZones] = useState([]);


   useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:5001/zone/all-zones", {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
    }).then((res)=> {
      setZones(res.data);
      setLoading(false);
      }) .catch((err)=> {
        console.log("Can not fetch zone details")
      })
    
  }, [])

  console.log(zones);
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

      if(incidentName === "" ||
        description === "" ||
        pinCode === ""||
        location === ""||
        customerName === ""||
        item === 0||
        hasComplaint === ""||
        price === 0||
        pointOfOccurance === ""){
          alert("Please fill all the fields")
          return;
        }

        if(pinCode.length !== 6){
          alert("Please enter a valid Pincode");
          return;
        }

      const token = localStorage.getItem("token")
      let res = await axios.post("http://localhost:5001/incident/create-incident", {
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
      if(role === "admin"){
        window.location.href = "/all-incident"  
      }

      if(role === "user"){
        window.location.href = "/my-incident"
      }
      
    } catch (err) {
      alert("Problem in server side")
      console.log(err);
    }
  } 
  return (
    <>
    {loading ? <p>Loading... | Please Wait</p> : (
      <>
        <div className="new">
      
      <div className="newContainer">
       
        <div className="top">
          <h1 style={{color: "black"}}>Create an Incident</h1>
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

                <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={incidentData.pinCode}
                      label="pincode"
                      onChange={onChangePincode}
                    >
                      <MenuItem default>Select</MenuItem>
                  {
                    zones.map((ele, idx)=> {
                      return (
                        <MenuItem value={ele.pinCode} id = {idx}>{ele.pinCode}</MenuItem>
                      )
                    })
                  }
                 </Select>
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
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={incidentData.hasComplaint}
                      label="hasComplaint"
                      onChange={onChangeComplaint}
                    >
                      <MenuItem >Select</MenuItem>
                      <MenuItem value={true}>Yes</MenuItem>
                      <MenuItem value={false}>No</MenuItem>
                    </Select>
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
          </div>
        </div>
      </div>
    
       
    
    </div>
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <Button variant="contained" onClick={onSubmit} style={{marginLeft : "auto", marginRight : "auto"}}>Create</Button>
        </div>
      </div>
    </div>
      </>
    )}
    
    </>
  );
};

export default CreateIncident;
