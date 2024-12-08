import { useState } from "react";
import "./Fund.css";

export const Funds = () => {
  const [funds, setFunds] = useState(0);

  const handleAddFunds = () => {
    setFunds(funds + 10); // Añade 10 al estado actual de fondos
  };

  return (
    <div className="container">
      <h1>Funds</h1>
      <p className="funds-display">Current Funds: ${funds}</p>
      <button className="add-funds-btn" onClick={handleAddFunds}>
        Insert Funds
      </button>
    </div>
  );
};

export default Funds;
