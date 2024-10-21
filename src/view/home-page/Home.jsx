import { useDispatch, useSelector } from "react-redux";
import Cards from "../../components/cards/Cards";
import Filter from "../../components/filter/Filter";
import CreateProductForm from "../../components/form/CreateProductForm";
import { useEffect, useState } from "react";
import { loadProducts } from "../../redux/actions";
import { debounce } from "lodash";
import Pagination from "../../components/pagination/Pagination";

const Home = () => {
  const dispatch = useDispatch();
  const { products, totalItems, loading } = useSelector((state) => state.products);
  const [searchParams, setSearchParams] = useState({
    page: 1,
    pagination: 15,
    name: "",
    category: "",
    sort: "newest",
  });

  const debouncedUpdateProducts = debounce((params) => {
    dispatch(loadProducts(params));
  }, 300);

  const updateSearchParams = (newParams) => {
    setSearchParams((prevParams) => {
      const updatedParams = {
        ...prevParams,
        ...newParams,
      };
      debouncedUpdateProducts(updatedParams);
      return updatedParams;
    });
  };

  useEffect(() => {
    dispatch(loadProducts(searchParams));
  }, [dispatch]);

  const totalPages = Math.ceil(totalItems / searchParams.pagination);

  const handlePageChange = (newPage) => {
    updateSearchParams({ page: newPage });
  };

  return (
    <div className="container py-10 mx-auto">
      <Filter updateSearchParams={updateSearchParams} />
      <h1 className="mb-8 text-3xl font-bold text-center">Accesorios para Celulares</h1>
      {loading ? (
        <p>Cargando productos...</p>
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
      <CreateProductForm />
    </div>
  );
};

export default Home;
