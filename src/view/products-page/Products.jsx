import { useDispatch, useSelector } from "react-redux";
import Cards from "../../components/cards/Cards";
import Filter from "../../components/filter/Filter";
import SearchBar from "../../components/filter/SearchBar";
import { useEffect, useState } from "react";
import { loadProducts } from "../../redux/actions";
import { debounce } from "lodash";
import Pagination from "../../components/pagination/Pagination";

const Products = () => {
  const dispatch = useDispatch();
  const { products, totalItems, loading } = useSelector((state) => state.products);
  const [searchParams, setSearchParams] = useState({
    page: 1,
    perPage: 54,
    name: "",
    category: "",
    sort: "newest",
  });

  const debouncedUpdateProducts = debounce((params) => {
    dispatch(loadProducts(params));
  }, 300);

  const updateSearchParams = (newParams) => {
    setSearchParams((prevParams) => {
      const resetPage = "page" in newParams ? newParams.page : 1;
      const updatedParams = {
        ...prevParams,
        page: resetPage,
        ...newParams,
      };
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
    <div className="flex container mx-auto py-10">
      <div className="flex flex-col w-full">
        <h1 className="mb-8 text-3xl font-bold text-center">Accesorios para Celulares</h1>

        <SearchBar
          value={searchParams.name}
          onChange={(e) => updateSearchParams({ name: e.target.value })}
        />

        <div className="flex">
          <aside className="w-1/4 p-4">
            <Filter updateSearchParams={updateSearchParams} />
          </aside>
          <main className="flex-1 p-4">
            {loading ? (
              <p>Cargando productos...</p>
            ) : products.length === 0 ? (
              <div className="flex justify-center items-center text-gray-500 mt-10">
                <p className="text-lg font-semibold">
                  No se encontraron productos que coincidan con la búsqueda o filtros aplicados.
                </p>
              </div>
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
    </div>
  );
};

export default Products;
