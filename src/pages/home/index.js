import React, { useEffect, useState } from "react";
import BSPagination from "../../components/pagination";
import CustomPagination from "../../components/custom-pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/features/product/product-slice";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [active, setActive] = useState("1");
  const [searchParams, setSearchParams] = useSearchParams({
    _page: 1,
    _limit: 5,
  });
  const products = useSelector((state) => state.products.data);
  const productsCount = useSelector((state) => state.products.productsCount);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(searchParams));
  }, []);

  return (
    <>
      <p className="bg-primary text-light">Products With Pagination</p>
      {products.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
      <BSPagination
        count={productsCount}
        params={searchParams}
        active={active}
        setActive={setActive}
      />
      <CustomPagination
        params={searchParams}
        count={productsCount}
        active={active}
        setActive={setActive}
      />
    </>
  );
};

export default Home;
