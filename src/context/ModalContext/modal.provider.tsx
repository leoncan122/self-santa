import { ModalContext } from "./modal.context";
import { useState } from "react";

interface ModalProviderProps {
    children: React.ReactNode;
}

const initialState: boolean = false;

export const ModalProvider = ({ children }: ModalProviderProps) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(initialState);

    return (
        <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
            {children}
        </ModalContext.Provider>
    )
}