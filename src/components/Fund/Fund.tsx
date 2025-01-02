import { useState } from "react";
import "./Fund.css";
import { useModalContext } from "../../context/ModalContext/modal.context";
import { Modal } from "../Modal/Modal";
import { AddFunds } from "../Forms/AddFunds/AddFunds";

export const FUNDS_LIST = [
  {
    id: 1,
    name: "Anonymus 1",
    amount: 100,
  },
  {
    id: 2,
    name: "Marcos",
    amount: 200,
  },
  {
    id: 3,
    name: "John",
    amount: 300,
  },
]

export const Funds = () => {
  const [funds, setFunds] = useState(154);
  const { isModalOpen, setIsModalOpen } = useModalContext();
  const handleAddFunds = () => {
    console.log("Adding funds",isModalOpen);
    // setFunds(funds + 10); // Añade 10 al estado actual de fondos
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="container">
      <div className="funds-total">${funds}</div>
      {/* <p className="funds-display">Current Funds: ${funds}</p> */}
     <div className="">
      <button className="add-funds-btn" onClick={handleAddFunds}>
          Help user get<br/> his dream gift
        </button>
      <Modal>
        <h2>Thank you for supporting me!</h2>
        <AddFunds />
      </Modal>
     </div>
      <div className="funds-list-container">
        <h2>Last supports </h2>
        <ul className="funds-list">
          {FUNDS_LIST.map((fund) => (
            <li key={fund.id}>
              <p>{fund.name}</p>
              <p>${fund.amount}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Funds;
