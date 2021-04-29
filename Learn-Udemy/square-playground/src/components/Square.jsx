import React, { useState } from "react";
import PropTypes from "prop-types";

const Square = ({ initialColor }) => {
  const [color, setColor] = useState(initialColor);
  const [isHidden, setisHidden] = useState(false)
  const [screens, setScreen] = useState({
    x:0,y:0
  })
  const handleColor = (e) => {
    setColor(e.target.value);
  };
  const style = {
    width: "100px",
    height: "100px",
    backgroundColor: color,
    color:"white",
    
    display: isHidden?"none":"block"
  };
  const showColor =()=>{
    setisHidden(!isHidden)
  }
  const handleScreen = (e)=>{
    // ScreenX = e.;
    // ScreenY = e.screenY;
    const {
      clientX,clientY
    } = e
    setScreen({x:clientX,y:clientY})
  }
  return (
    <div className="square">
      <div style={style}></div
      >
      <br/>
      <div className="squareControls">
        <input onChange={handleColor} type="text" placeholder="Color ..." />
        <br/>
        <div className="clear"></div>
        <br/>
        <button onClick={showColor}>{isHidden?"Show":"Hide"}</button>
        <div style={style} onMouseMove={handleScreen}>{`${screens.x},${screens.y}`}</div>
      </div>
    </div>
  );
};

Square.propsType = {
  initialColor: PropTypes.string,
};
Square.defaultProps = {
  initialColor: "yellow",
};

export default Square;
