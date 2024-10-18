import { useState, useEffect } from 'react';
import CustomModal from './Modal';
import CreateProductForm from '../form/CreateProductForm';

const ProductModal = ({ isOpen, onClose, product }) => {
  const [modalTitle, setModalTitle] = useState('Agregar Producto');

  useEffect(() => {
    if (product) {
      setModalTitle('Editar Producto');
    } else {
      setModalTitle('Agregar Producto');
    }
  }, [product]);

  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title={modalTitle}>
      <CreateProductForm product={product} />
    </CustomModal>
  );
};

export default ProductModal;
