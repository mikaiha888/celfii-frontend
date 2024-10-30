import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeCartFavs, updateCart } from "../../redux/actions";

import QuantityCounter from "../../components/counter/QuantityCounter";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);  
  
  return (
    <li key={item.id}>
      <img src={item.images[0].url} alt={item.images[0].altText} />
      <h4>{item.name}</h4>
      <QuantityCounter
        initialQuantity={quantity}
        maxQuantity={item.stock}
        onChange={(newQuantity) => {
          setQuantity(newQuantity);
          dispatch(updateCart("cart", {...item, quantity: newQuantity}));
        }}
      />
      <button onClick={() => dispatch(removeCartFavs("cart", item))}>Eliminar</button>
    </li>
  );
};
export default CartItem;
