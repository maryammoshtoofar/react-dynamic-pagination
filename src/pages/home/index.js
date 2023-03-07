import React, { useEffect } from "react";
import BSPagination from "../../components/pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/features/product/product-slice";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams("");
  const products = useSelector((state) => state.products.data);
  const productsCount = useSelector((state) => state.products.productsCount);
  const params = useSelector((state) => state.products.params);

  const dispatch = useDispatch();

  useEffect(() => {
    setSearchParams(params);
  }, []);

  
  useEffect(() => {
    dispatch(fetchProducts(searchParams));
  }, [dispatch, productsCount]);

  return (
    <>
      <p className="bg-primary text-light">Products With Pagination</p>
      {products.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
      <BSPagination count={productsCount} params={searchParams} />
    </>
  );
};

export default Home;
