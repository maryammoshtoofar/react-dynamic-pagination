import { useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/features/product/product-slice";

const BSPagination = ({
  count,
  params,
  active,
  setActive,
  setSearchParams,
}) => {
  const dispatch = useDispatch();

  const changePage = (e) => {
    // if this is the active page do nothing
    if (e.target.tagName === "SPAN") return;

    // if the target is a pageButton
    if (e.target.className == "page-link") {
      const pageNum = e.target.innerHTML;
      setActive(pageNum);
      dispatch(fetchProducts(`_page=${pageNum}&_limit=5`));
    }
  };

  useEffect(() => {
    setActive(params.get("_page"));
  }, []);

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
