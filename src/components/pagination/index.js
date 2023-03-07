import { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/features/product/product-slice";

const BSPagination = ({ count, params }) => {
  const [active, setActive] = useState(1);
  const dispatch = useDispatch();

  const changePage = (e) => {
    const pageNum = e.target.innerHTML;
    setActive(pageNum);
    dispatch(fetchProducts(`_page=${pageNum}&_limit=5`));
  };

  useEffect(() => {
    setActive(params.get("_page"));
    console.log(active);
  }, []);
  useEffect(() => {
    console.log(active);
  }, [active]);

  let items = [];

  for (let number = 1; number <= count / params.get("_limit"); number++) {
    items.push(
      <Pagination.Item key={number} active={number == active}>
        {number}
      </Pagination.Item>
    );
  }

  return <Pagination onClick={changePage}>{items}</Pagination>;
};

export default BSPagination;
