import "./Fund.css";
import { useModalContext } from "../../context/ModalContext/modal.context";
import { Modal } from "../Layout/Modal/Modal";
import { AddFunds } from "../Forms/AddFunds/AddFunds";
import ProgresiveCounter from "./ProgresiveCounter/ProgresiveCounter";
// import { MessagingObservable } from "../../services/messaging.service";
import { FUNDS_LIST } from "../../mocks/funds";
import BlockColorPrimary from "../Layout/Buttons/BlockColorPrimary/BlockColorPrimary";
import PageViewWrapper from "../Layout/PageViewWrapper/PageViewWrapper";

export const Funds = () => {
  const { isModalOpen, setIsModalOpen } = useModalContext();

  const handleAddFunds = () => {
    setIsModalOpen(!isModalOpen);
  };

 

  return (
    <PageViewWrapper>
      <ProgresiveCounter start={23} end={324} />
      <div className="add-funds-container">
            <BlockColorPrimary>
            <button className="add-funds-btn" onClick={handleAddFunds}>
              Help this person<br/> get
              his<br />  dream gift
            </button>
          </BlockColorPrimary>
            <Modal>
              <h2 className="fund-greeting">Thank you for supporting me!</h2>
              <AddFunds />
            </Modal>
      </div>
      <div className="funds-list-container">
        <h2>Last supports </h2>
        <ul className="funds-list">
          {FUNDS_LIST.map((fund) => (
               <li key={fund.id} className="funds-item">
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
    </PageViewWrapper>
  );
};

export default Funds;
