import { useRef } from "react";
import { createPortal } from "react-dom";
import { useModalContext } from "../../../context/ModalContext/modal.context";
import "./Modal.css";

interface ModalProps {
    children: React.ReactNode;
}

export const Modal = ({ children }: ModalProps) => {


    const modalRef = useRef<HTMLDivElement | null>(null);
    const { isModalOpen, setIsModalOpen } = useModalContext();
    const modalRoot = document.getElementById('modal-root') as HTMLElement;

    const closeModal = () => {
        setIsModalOpen(false);
    }
    const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
      };

      if (!isModalOpen || !modalRoot) return null;

      
    return createPortal(
        <div className="overlay" onClick={closeModal}>
            <div className="modal" ref={modalRef} onClick={handleContentClick} >
                <button className="close-button" onClick={closeModal}>x</button>
                {children}
            </div>
        </div> ,
        modalRoot
    )
}