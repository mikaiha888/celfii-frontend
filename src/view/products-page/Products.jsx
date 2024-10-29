import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { loadProducts } from "../../redux/actions";
import Cards from "../../components/cards/Cards";
import Filter from "../../components/filter/Filter";
import Pagination from "../../components/pagination/Pagination";
import SearchBar from "../../components/filter/SearchBar";
import { debounce } from "lodash";

const Products = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { products, totalItems, loading } = useSelector((state) => state.products);

  const [searchParams, setSearchParams] = useState({
    page: 1,
    perPage: 54,
    name: "",
    category: new URLSearchParams(location.search).get("category") || "",
    sort: "newest",
  });

  const debouncedUpdateProducts = debounce((params) => {
    dispatch(loadProducts(params));
  }, 300);

  const updateSearchParams = (newParams) => {
    setSearchParams((prevParams) => {
      const resetPage = "page" in newParams ? newParams.page : 1;
      const updatedParams = { ...prevParams, page: resetPage, ...newParams };
      debouncedUpdateProducts(updatedParams);
      return updatedParams;
    });
  };

  useEffect(() => {
    dispatch(loadProducts(searchParams));
  }, [dispatch, searchParams]);

  const totalPages = Math.ceil(totalItems / searchParams.perPage);

  const handlePageChange = (newPage) => {
    updateSearchParams({ page: newPage });
  };

  return (
    <div className="container mx-auto">
      <SearchBar
        value={searchParams.name}
        onChange={(e) => updateSearchParams({ name: e.target.value })}
      />
      <div className="flex">
        <aside>
          <Filter updateSearchParams={updateSearchParams} />
        </aside>
        <main>
          {loading ? (
            <p>Cargando productos...</p>
          ) : products.length === 0 ? (
            <p>No se encontraron productos.</p>
          ) : (
            <>
              <Cards products={products} />
              <Pagination
                currentPage={searchParams.page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Products;
