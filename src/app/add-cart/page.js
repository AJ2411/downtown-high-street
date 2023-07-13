"use client"
import React from "react";
import ReactDOM from "react-dom";
import { Container } from "react-bootstrap";
import SubTotal from "@/component/SubTotal";
import TaxesFees from "@/component/TaxesFees";
import EstimatedTotal from "@/component/EstimatedTotal";
import ItemDetails from "@/component/ItemDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/component/style.css";
import PickupSavings from "@/component/PickupSavings";

export default function Page() {
  return (
    <div className="d-flex justify-content-center">
 <div className="purchase-card"  > 
      <Container >
        <SubTotal />
        <br />
        <PickupSavings />
        <br />
        <TaxesFees />
        <hr />
        <EstimatedTotal />
        <br />
        <ItemDetails />
      </Container>
      
      
    </div>
    </div>
   

  );
}

//   const rootElement = document.getElementById("root");
//  ReactDOM.render(<App/>, rootElement);
