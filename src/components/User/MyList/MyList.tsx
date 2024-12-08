import { useEffect, useState } from "react";
import { emptyGift, Gift } from "../../../models/gift.model";
import { Layout } from "../../Forms";
const initialGifts: {id:string;name:string;description:string;}[] = [
    { id: '1', name: "Bicycle", description: "A mountain bike" },
    { id: '2', name: "Book", description: "A mystery novel" },
    { id: '3', name: "Watch", description: "A wristwatch" }
  ];
  
export const MyList = () => {
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [newGift, setNewGift] = useState<Gift>(emptyGift);

  const addGift = () => {
      setGifts([...gifts, newGift]);
      setNewGift(emptyGift);
    }
    useEffect(() => { 
      
    }, [gifts]);

    return (
        <>
          <h2>Lista de Regalos</h2>
          <button onClick={addGift}>Agregar</button> 
          <ul>
            {initialGifts.map((gift, index) => (
              <li key={index}>{JSON.stringify(gift)}</li>
            ))}
          </ul>
        </>
      );

 
};
