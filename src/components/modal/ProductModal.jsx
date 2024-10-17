import Modal from 'react-modal';
import { useState } from 'react';
import CreateProductForm from '../form/CreateProductForm';

Modal.setAppElement('#root');

const ProductModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Agregar Producto</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Agregar Producto"
        className="ReactModal__Content"
        overlayClassName="ReactModal__Overlay"
      >
        <h2>Agregar Nuevo Producto</h2>
        <CreateProductForm />
        <button onClick={closeModal}>Cerrar</button>
      </Modal>
    </>
  );
};

export default ProductModal;
