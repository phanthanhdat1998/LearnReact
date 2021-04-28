import React, { useState } from 'react';
import './counter.scss';
import PropTypes from "prop-types";

const Counter = ({initialNumber}) => {
    const [counter, setcounter] = useState(initialNumber);
    const Increment = ()=>{
        setcounter(counter + 1);
    }
    const Descrement =()=>{
        if(counter > 0){
            setcounter(counter -1 );
        }
    }
    return (
        <div className="counter">
            <button onClick={Descrement}>Descrement</button>
            <span className="number">{counter}</span>
            <button onClick={Increment}>Increment</button>
        </div>
    )
}

Counter.propTypes = {
    initialNumber : PropTypes.number,
}
Counter.defaultProps = {
    initialNumber: 0,
};

export default Counter
