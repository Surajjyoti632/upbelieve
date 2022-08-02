import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Widget = (props) => {




  return (
    <div className="widget">
      <div className="left">
        <span className="title">{props.title}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          5 %
        </div>
        <div>
          <p>100</p>
        </div>
        
      </div>
    </div>
  );
};

export default Widget;
