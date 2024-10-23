import { useSelector } from "react-redux";
import Card from "../../components/card/Card";

const FavouritePage = () => {
    const favourites = useSelector(state => state.favourites)
   return (
     <div>
       <h1 className="text-2xl font-bold">Mis productos favoritos</h1>
       {favourites.length === 0 ? (
         <p>No tienes productos favoritos.</p>
       ) : (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           {favourites.map((product) => (
             <Card key={product.id} product={product} />
           ))}
         </div>
       )}
     </div>
   );
};

export default FavouritePage;
