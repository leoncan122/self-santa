import "./Fund.css";
import { useModalContext } from "../../context/ModalContext/modal.context";
import { Modal } from "../Layout/Modal/Modal";
import { AddFunds } from "../Forms/AddFunds/AddFunds";
import ProgresiveCounter from "./ProgresiveCounter/ProgresiveCounter";
// import { MessagingObservable } from "../../services/messaging.service";
import { FUNDS_LIST } from "../../mocks/funds";

export const Funds = () => {
  const { isModalOpen, setIsModalOpen } = useModalContext();

  const handleAddFunds = () => {
    setIsModalOpen(!isModalOpen);
  };

 

  return (
    <div className="funds-page">
      {/* <p className="funds-display">Current Funds: ${funds}</p> */}
      <ProgresiveCounter start={23} end={324} />
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
