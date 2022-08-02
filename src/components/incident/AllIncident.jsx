import "./allincident.scss";
import axios from "axios"
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";



const Datatable = () => {
const [data, setData] = useState();
const [loading, setLoading] = useState(true);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  useEffect(()=> {
    setLoading(true);
    const token = localStorage.getItem("token");
    axios.get("http://localhost:5001/incident/all-incident", {
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
     { field: "incidentName", headerName: "Incident Name", width: 135 },
    {
      field: "description",
      headerName: "Description",
      width: 150,
      
    },
  { field: "pointOfOccurance", headerName: "Point of Occurance", width: 200 },
  { field: "item", headerName: "Item", width: 200 },
   
    {
      field: "location",
      headerName: "Location",
      width: 200,
    },

    {
        field: "pinCode",
        headerName: "Pincode",
        width: 200,
    },

      {
        field: "isResolved",
        headerName: "Is Resolved",
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
            <Link to={"/view-incident/" + params.row._id } style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <Link to={"/edit-incident/" + params.row._id + "/" + params.row.pinCode}>
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
      
    </div>
  );
};

export default Datatable;
