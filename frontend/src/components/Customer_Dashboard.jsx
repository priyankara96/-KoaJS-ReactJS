import React from "react";

export default function Customer() {
    return (
        <div>
            <a  href="/" style={{marginRight:15, marginLeft:50}}>Home Page</a>

            <br/><br/> <h2 style={{marginLeft:50}}> Welcome to Customer Dashboard </h2> <br/>

            <a  href="/ProfileCreate" style={{marginLeft:100}}>01. Profile Create</a> <br/>
            <a  href="/Cart_Item" style={{marginLeft:100}}>02. Add Cart Item</a> <br/>

            {/* <from>
                <label style={{marginRight:10}}>First Name</label>
                <input type="text" name="fname" />
            </from> */}
        </div>
    );
}