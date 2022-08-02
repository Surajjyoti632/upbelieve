import "./home.scss";
import Widget from "../../components/widget/Widget";
import AllIncident from "../../components/incident/AllIncident"
import AllZones from "../../components/zone/AllZones";
const Home = () => {
  return (
    <div className="home">
     
      <div className="homeContainer">

      <div className="widgets">
         
          <Widget title="Total Incident" />
          <Widget title="Total Zone" />
          <Widget title="Pending Incident" />
        </div> 
        <AllIncident/>
        <AllZones/>
        
        
      </div>
    </div>
  );
};

export default Home;
