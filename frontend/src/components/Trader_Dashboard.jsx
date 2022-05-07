import React from "react";

export default function Trader_Dashboard () {
    return (
        <div>
            <a  href="/" style={{marginRight:15, marginLeft:50}}>Home Page</a>

            <br/><br/> <h2 style={{marginLeft:50}}> Welcome to Trader Dashboard </h2> <br/>

            <a  href="/TraderProfile" style={{marginLeft:100}}>01. Profile</a> <br/> 
            <a  href="/AddItems" style={{marginLeft:100}}>02. Add Items</a> <br/> 
            <a  href="/promotion" style={{marginLeft:100}}>03. Promotions</a> <br/>
            
            {/* <from>
                <label style={{marginRight:10}}>First Name</label>
                <input type="text" name="fname" />
            </from> */}

        </div>
    );
}