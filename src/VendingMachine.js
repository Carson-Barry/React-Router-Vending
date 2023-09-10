import React from "react";
import machinePicture from "./vending-machine.jpg"; //Image AI generated using https://www.fotor.com/
import "./VendingMachine.css";
import VendingMachineSelect from "./VendingMachineSelect"

const VendingMachine = () => {

    return (
        <div className="VendingMachine">
            <img className="VendingMachine-img" src={machinePicture} alt="Vending machine"></img>
            <VendingMachineSelect />
        </div>
    );
}

export default VendingMachine;