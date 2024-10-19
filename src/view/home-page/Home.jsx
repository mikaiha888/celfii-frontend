import { useDispatch, useSelector } from "react-redux";
import Cards from "../../components/cards/Cards";
import Filter from "../../components/filter/Filter";
import CreateProductForm from "../../components/form/CreateProductForm";
import { useEffect, useState } from "react";
import { loadProducts } from "../../redux/actions";
import { debounce } from "lodash";
// import Pagination from "../../components/pagination/Pagination";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
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

  const handlePageChange = (newPage) => {
    updateSearchParams({ page: newPage });
  };

  return (
    <div className="container py-10 mx-auto">
      <Filter updateSearchParams={updateSearchParams} />
      <h1 className="mb-8 text-3xl font-bold text-center">Accesorios para Celulares</h1>
      <Cards products={products} />
      {/* <Pagination
        totalItems={totalItems}
        itemsPerPage={searchParams.pagination}
        currentPage={searchParams.page}
        onPageChange={handlePageChange}
      /> */}
      <CreateProductForm />
    </div>
  );
};

export default Home;
