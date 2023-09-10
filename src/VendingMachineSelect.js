import React from "react";
import "./VendingMachineSelect.css"
import { Link } from "react-router-dom";

const VendingMachineSelect = () => {
    return (
        <div className="VendingMachineSelect">
            <h1 className="VendingMachineSelect-title">Vending Machine</h1>
            <h2>What would you like to order?</h2>
            <div className="VendingMachineSelect-options">
                <p><Link className="VendingMachineSelect-link" to="/chips">Chips</Link></p>
                <p><Link className="VendingMachineSelect-link" to="/water">Water</Link></p>
                <p><Link className="VendingMachineSelect-link" to="/candy">Candy</Link></p>
            </div>
        </div>
    )
}

export default VendingMachineSelect;