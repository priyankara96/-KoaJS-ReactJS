import React from "react";

export default function Home() {
    return (
        <div>
            <a  href="/" style={{marginRight:15, marginLeft:50}}>Home Page</a>
            <a  href="/Customer" style={{marginRight:15}}>Customer</a>
            <a  href="/Trader" style={{marginRight:15}}>Trader</a>

            <br/><br/>
            <h1 style={{marginLeft:50}}> Welcome to Home Page </h1>

            {/* <from>
                <label style={{marginRight:10}}>First Name</label>
                <input type="text" name="fname" />
            </from> */}
        </div>
    );
}