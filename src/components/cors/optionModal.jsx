import React from "react";
import Modal from "react-modal";
import TransButton from "./TransButton";

const customStyles = {
  content: {
    top: "200px",
    height: "50px",
    display: "flex",
    zIndex: "100000000000000000"
  }
};

const OptionModal = props => (
  <Modal
    isOpen={props.alertUser.modalIsOpen}
    onRequestClose={props}
    style={customStyles}
    contentLabel="Alert Message"
  >
    <h6>Good news</h6>
    {props.alertUser.isAuth && <p>You are now logged in !</p>}
    <TransButton onClick={props.closeModal.closeModal}>x</TransButton>
  </Modal>
);

export default OptionModal;
