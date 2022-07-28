import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const New = ({ inputs, title }) => {
 const [incidentData, setIncidentData] = useState({
        incidentName: "",
        description: "",
        location: "",
        item: "",
        price: 0,
        pointOfOccurance: "",
 })

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          
          <div className="right">
            <form>
              
                <div className="formInput" >
                  <label>Incident Name</label>
                  <input type="text" placeholder="" />
                </div>

                <div className="formInput" >
                  <label>Description</label>
                  <input type="text" placeholder="" />
                </div>

                <div className="formInput" >
                  <label>Location</label>
                  <input type="text" placeholder="" />
                </div>

                <div className="formInput" >
                  <label>Item</label>
                  <input type="text" placeholder="" />
                </div>

                <div className="formInput" >
                  <label>Price</label>
                  <input type="number" placeholder="" />
                </div>

                <div className="formInput" >
                  <label>Point of Occurance</label>
                  <input type="text" placeholder="" />
                </div>
             
              
            </form>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
