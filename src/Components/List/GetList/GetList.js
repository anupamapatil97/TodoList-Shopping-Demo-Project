import React, { Fragment, useRef,useEffect } from 'react';
import "./GetList.css"

export default function GetList(props) {
    const inputElement=useRef(null);
   
 const pstyle={
     color:"#000080"
 }
 const inputStyle={
     border:"none",
     width:"50%",
     height:"40px",
     margin:"10px",
     backgroundColor:"#BC8F8F"
 }
 useEffect(() => {
    inputElement.current.focus();
 }, [])
    return (
        <Fragment>
        <div className="card" >
            <h2>Welcome</h2>
                <p>Name: {props.name}</p>
                <p>Price: {props.price}</p>
                <p>Quantity: <span style={pstyle}>{props.quanty}</span></p>
                <input style={inputStyle} type='text' onChange={props.editClick} ref={inputElement}/>
              <button className="delete-product" onClick={props.deleteClick}>Delete</button>
              {/* <button onClick={props.editClick}>Edit</button> */}
              
            </div>
        {/* <div>
            <form>
                <input type="text" onChange={props.handleChange}/>
            </form>
        </div> */}
            </Fragment>
    )
}
