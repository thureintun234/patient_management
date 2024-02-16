import React from "react";
import { Modal } from "./../../components/Modal";
import { TelegramPhoto } from "../../pages/dashboard/purchase/types";
import { TelegramImageViewer } from ".";

type PropsType = {
    isModalOpen: boolean;
    toggle: () => void;
    image: TelegramPhoto[];
};

export const ImageViewModal: React.FC<PropsType> = ({ isModalOpen,image, toggle }) => {


    return (
        <Modal title="Payment Slip" open={isModalOpen} onClose={toggle}>
           <TelegramImageViewer image={image}/>
        </Modal>
    );
};
