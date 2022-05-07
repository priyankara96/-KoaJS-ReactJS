import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Customer from "./components/Customer_Dashboard";
import Trader from "./components/Trader_Dashboard";


// Customer
import Profile_Create from "./components/Customer_Pages/Profile_Create";
import Add_Cart_Item from "./components/Customer_Pages/Add_Cart_Item";

// Trader
import AddItems from "./components/Trader_Pages/AddItem";
import T_Profile_Create from "./components/Trader_Pages/Profile_Create";
import Create_Promotions from "./components/Trader_Pages/Create_Promotion"; 

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Customer" element={<Customer />} />
            <Route path="/ProfileCreate" element={<Profile_Create />} />
            <Route path="/Cart_Item" element={<Add_Cart_Item />} />

            <Route path="/Trader" element={<Trader />} />
            <Route path="/AddItems" element={<AddItems />} />
            <Route path="/promotion" element={<Create_Promotions />} />
            <Route path="/TraderProfile" element={<T_Profile_Create />} />
            
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;