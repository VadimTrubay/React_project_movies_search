import customStyles from "../StylesModal";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ modalIsOpen, selectedImage, closeModal }) => {


  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Modal"
      style={customStyles}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <div>
        <img src={selectedImage} alt="Image modal" />
      </div>
    </Modal>
  );
};

export default ImageModal;
