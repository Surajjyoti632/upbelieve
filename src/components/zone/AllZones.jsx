import "./allzone.scss";
import axios from "axios"
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";



const AllZones = () => {
const [data, setData] = useState();
const [greenZone, setGreenZone] = useState([])
const [orangeZone, setOrangeZone] = useState([])
const [redZone, setRedZone] = useState([])
const [loading, setLoading] = useState(true);

  useEffect(()=> {
    const token = localStorage.getItem("token");
    axios.get("http://43.205.221.186:5001/zone/all-zones", {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
    }).then((res)=> {
      let dta = res.data;
      let green = [];
      let red = [];
      let orange = [];

      dta.forEach((ele, index ) => {
        ele.id = index
        if(ele.currZoneStatus === "green"){
          green.push(ele)
        }
        else if(ele.currZoneStatus === "red"){
          red.push(ele)
        }
        else if(ele.currZoneStatus === "orange"){
          orange.push(ele)
        } 

        setGreenZone(green);
        setOrangeZone(orange);
        setRedZone(red);
      }) 
      
      setData(dta);
      setLoading(false);
    })
  }, [])

  console.log(data);
  const columns = [
     {field: "id", headerName: "ID", width: 135 },
     { field: "location", headerName: "Location", width: 135 },
     { field: "currZoneStatus", headerName: "Zone Status", width: 135 },
    {
      field: "pinCode",
      headerName: "Pin Code",
      width: 150,
      
    },
    { field: "totalIncidentOccured", headerName: "Total Incident", width: 200 },
    { field: "fullAddress", headerName: "Full Address", width: 200 },
    {
      field: "phNo",
      headerName: "Ph No",
      width: 200,
    },
    {
        field: "email",
        headerName: "email",
        width: 200,
    },
      {
        field: "updatedAt",
        headerName: "Last Modified",
        width: 200,
      },


    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
           <div className="cellAction">
            <Link to={"/view-zone/" + params.row._id} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <Link to={"/edit-zone/" + params.row._id}>
              <button className="deleteButton">Edit</button>
            </Link>
          </div>
          </>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      {
        loading ? <p>Loading... | Please Wait</p>: (
          <>
              <div className="datatableTitle">
                Green Zones
              </div>
              {
                greenZone.length === 0 ? <></> : (
                  <DataGrid
                className="datagrid"
                rows={greenZone}
                columns={columns}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
              />
                )
              }

           
              {
                orangeZone.length === 0 ? <></> : (
                  <>
                   <div className="datatableTitle">
                Orange Zones
              </div>
                  <DataGrid
                className="datagrid"
                rows={orangeZone}
                columns={columns}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
              />
              </>
                )
              }

            
              {
                redZone.length === 0 ? <></> : (
                  <>
                  <div className="datatableTitle">
                Red Zones
              </div>
                  <DataGrid
                className="datagrid"
                rows={redZone}
                columns={columns}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
              />
              </>
                )
              }
              
          </>
        )
      }
    </div>
  );
};

export default AllZones;
