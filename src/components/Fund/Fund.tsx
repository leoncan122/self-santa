import { useEffect, useState } from "react";
import "./Fund.css";
import { useModalContext } from "../../context/ModalContext/modal.context";
import { Modal } from "../Layout/Modal/Modal";
import { AddFunds } from "../Forms/AddFunds/AddFunds";
import { MessagingObservable } from "../../services/messaging.service";
import { concatMap, delay, mapTo, observeOn, range, take, timer } from "rxjs";
import { set } from "zod";
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
];

export const Funds = () => {
  const [funds, setFunds] = useState(154);
  const { isModalOpen, setIsModalOpen } = useModalContext();

  const handleAddFunds = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
      range(funds,150 + 1)
      .pipe(
        concatMap(value => timer(20).pipe(mapTo(value)))
      )
      .subscribe({
        next: (fund) => setFunds(fund),
        error: (error) => console.error("Error updating funds", error),
        complete: () => console.log("Funds updated"),
      });
  }, []);

  return (
    <div className="container">
      <div className="funds-total">${funds}</div>
      {/* <p className="funds-display">Current Funds: ${funds}</p> */}
      <div className="">
        <button className="add-funds-btn" onClick={handleAddFunds}>
          Help this person get
          <br /> his dream gift
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
