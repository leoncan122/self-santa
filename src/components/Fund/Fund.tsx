import "./Fund.css";
import { useModalContext } from "../../context/ModalContext/modal.context";
import { Modal } from "../Layout/Modal/Modal";
import { AddFunds } from "../Forms/AddFunds/AddFunds";
import ProgresiveCounter from "./ProgresiveCounter/ProgresiveCounter";
// import { MessagingObservable } from "../../services/messaging.service";
import { FUNDS_LIST } from "../../mocks/funds";
import BlockColorPrimary from "../Layout/Buttons/BlockColorPrimary/BlockColorPrimary";
import PageViewWrapper from "../Layout/PageViewWrapper/PageViewWrapper";
import FundsListItem from "./FundsListItem/FundsListItem";
import FundsItemDetails from "./FundsListItem/FundsItemDetails";
import FundsItemInfo from "./FundsListItem/FundsItemInfo";
export const Funds = () => {
  const { isModalOpen, setIsModalOpen } = useModalContext();

  const handleAddFunds = () => {
    setIsModalOpen(!isModalOpen);
  };

 if (isModalOpen) {
    return (
         <Modal>
          <h2 className="fund-greeting">Thank you for supporting me!</h2>
          <AddFunds />
        </Modal>
    );
  }

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
            
      </div>
      <div className="funds-list-container">
        <h2>Last supports </h2>
        <ul className="funds-list">
          {FUNDS_LIST.map(({id, name, amount, date, text}) => (
               <FundsListItem key={id} >
                    <FundsItemDetails>
                        <p className="fund-name">{name}</p>
                        <p className="fund-text">{text}</p>
                  </FundsItemDetails>
                  <FundsItemInfo>
                    <p className="fund-amount">${amount}</p>
                    <p className="fund-date">{date ? new Date(date).toLocaleDateString('en-US', {day: 'numeric', month: 'short',hour: 'numeric'}) : '-'}</p>
                  </FundsItemInfo>
            </FundsListItem>
        ))}
        </ul>
      </div>
    </PageViewWrapper>
  );
};

export default Funds;
