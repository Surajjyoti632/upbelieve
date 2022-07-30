import "./allzone.scss";
import axios from "axios"
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";



const AllZones = () => {
const [data, setData] = useState();
const [loading, setLoading] = useState(true);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  useEffect(()=> {
    setLoading(true);
    const token = localStorage.getItem("token");
    axios.get("http://localhost:5000/zone/all-zones", {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
    }).then((res)=> {
      let dta = res.data;
      
      dta.forEach((ele, index ) => {
          ele.id = index
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
                All Incident
                <Link to="/create-incident" className="link">
                  Add New
                </Link>
              </div>
              <DataGrid
                className="datagrid"
                rows={data}
                columns={columns}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
              />
          </>
        )
      }
      <p>Working</p>
      
    </div>
  );
};

export default AllZones;
