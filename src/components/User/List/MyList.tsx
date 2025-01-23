import { useState } from "react";
import { emptyGift, Gift } from "../../../models/gift.model";
import { mockGifts } from "../../../mocks/gifts.mock";
import './MyList.css'
import { Link } from "react-router-dom";


export const MyList = () => {
  const [gifts, setGifts] = useState<Gift[]>(mockGifts);


    return (
      <div className="my-list-container">
      <h1>Lista de Regalos</h1>
      <button >
        <Link to={'/add-gift'} >Add new gift</Link>
      </button>
      <ul className="gift-list custom-scrollbar">
        {gifts.map((gift, index) => (
          <li key={index} className="gift-item">
            {/* <img src={gift.image} alt={gift.name} className="gift-image" /> */}
            <div className="gift-details">
              <h3 className="gift-name">{gift.name}</h3>
              <p className="gift-description">{gift.description}</p>
              <p className="gift-price">${gift.price.toFixed(2)}</p>
            </div>
            <a href={gift.link} className="gift-link" target="_blank" rel="noopener noreferrer">Ver más</a>

          </li>
        ))}
      </ul>
    </div>
      );

 
};
