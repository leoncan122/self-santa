import { useEffect, useState } from "react";
import "./Fund.css";
import { useModalContext } from "../../context/ModalContext/modal.context";
import { Modal } from "../Layout/Modal/Modal";
import { AddFunds } from "../Forms/AddFunds/AddFunds";
// import { MessagingObservable } from "../../services/messaging.service";
import { concatMap, mapTo, range, timer } from "rxjs";
export const FUNDS_LIST = [
  {
    id: 1,
    name: "Anonymus 1",
    amount: 100,
    date: "2021-10-10T13:42:00",
    text: "you do it great",
  },
  {
    id: 2,
    name: "Marcos",
    amount: 200,
    date: "2021-10-10T13:42:00",
    text: "you do it great",
  },
  {
    id: 3,
    name: "John",
    amount: 300,
    date: "2021-10-10T13:42:00",
    text: "you do it great",
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
    <div className="funds-page">
      <div className="funds-total">${funds}</div>
      {/* <p className="funds-display">Current Funds: ${funds}</p> */}
      <div className="add-funds-container">
        <button className="add-funds-btn" onClick={handleAddFunds}>
          Help this person<br/> get
          his<br />  dream gift
        </button>
        <Modal>
          <h2 className="fund-greeting">Thank you for supporting me!</h2>
          <AddFunds />
        </Modal>
      </div>
      <div className="funds-list-container">
        <h2>Last supports </h2>
        <ul className="funds-list">
          {FUNDS_LIST.map((fund) => (
            <li key={fund.id}>
              <div className="funds-details">
                <p className="fund-name">{fund.name}</p>
                <p className="fund-text">{fund.text}</p>

              </div>
              <div className="funds-info">
                <p className="fund-amount">${fund.amount}</p>
                <p className="fund-date">{fund.date ? new Date(fund?.date).toLocaleDateString('en-US', {day: 'numeric', month: 'short',hour: 'numeric'}) : '-'}</p>

              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Funds;
