import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { loadCartFavs, loadProducts } from "../../redux/actions";
import { loadFromLocalStorage, saveToLocalStorage } from "../../helpers";

import Cards from "../../components/cards/Cards";
import Filter from "../../components/filter/Filter";
import SearchBar from "../../components/searchbar/SearchBar";
import Pagination from "../../components/pagination/Pagination";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { favourites } = useSelector((state) => state.cartFavs);
  const { products, totalItems, loading } = useSelector((state) => state.products);

  const [filters, setFilters] = useState({
    page: 1,
    perPage: 54,
    name: "",
    category: "",
    sort: "newest",
    price: { min: "", max: "" },
    ...loadFromLocalStorage("filters"),
  });

  const updateFilters = (newFilters) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    const urlFilters = (({ name, page }) => ({ name, page }))(updatedFilters);
    const filteredUrlFilters = Object.fromEntries(
      Object.entries(urlFilters).filter(
        ([, value]) => value !== "" && value !== null && value !== undefined
      )
    );

    const queryParams = new URLSearchParams(filteredUrlFilters);
    navigate({
      pathname: location.pathname,
      search: queryParams.toString(),
    });
  };

  useEffect(() => {
    dispatch(loadProducts(filters));
    dispatch(loadCartFavs("favorites"));
    saveToLocalStorage("filters", filters);
  }, [dispatch, filters]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setFilters((prev) => ({
      ...prev,
      name: queryParams.get("name") || "",
      page: parseInt(queryParams.get("page")) || 1,
    }));
  }, [location.search]);

  return (
    <div className="container">
      <SearchBar value={filters.name} onSearch={(e) => updateFilters({ name: e.target.value })} />
      <div className="flex">
        <aside>
          <Filter updateFilters={updateFilters} filters={filters} />
        </aside>
        <main>
          {loading ? (
            <p>Cargando productos...</p>
          ) : products.length === 0 ? (
            <p>No se encontraron productos.</p>
          ) : (
            <>
              <Cards products={products} favourites={favourites} />
              <Pagination
                currentPage={filters.page}
                totalPages={Math.ceil(totalItems / filters.perPage)}
                onPageChange={(newPage) => updateFilters({ page: newPage })}
              />
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProductsPage;
