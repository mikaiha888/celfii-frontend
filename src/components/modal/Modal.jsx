import Modal from 'react-modal';
import PropTypes from 'prop-types';

Modal.setAppElement('#root');

const CustomModal = ({ isOpen, onClose, title, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={title}
      className="ReactModal__Content"
      overlayClassName="ReactModal__Overlay"
    >
      <div className="modal-header">
        <h2>{title}</h2>
        <button onClick={onClose} className="close-button">
          X
        </button>
      </div>
      <div className="modal-body">{children}</div>
    </Modal>
  );
};

CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

CustomModal.defaultProps = {
  title: '',
};

export default CustomModal;
