import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/features/product/product-slice";
import "./style.css";
const CustomPagination = ({ count, params, active, setActive }) => {
  const styles = {
    listStyleType: "none",
    border: "1px solid grey",
    width: "50px",
    textAlign: "center",
    color: "green",
    backgroundColor: "#ececec",
    cursor: "pointer",
    fontSize: "22px",
    fontWeight: "500",
  };

  const activeStyles = {
    listStyleType: "none",
    border: "1px solid grey",
    width: "50px",
    textAlign: "center",
    color: "#ececec",
    backgroundColor: "green",
    cursor: "pointer",
    fontSize: "22px",
    fontWeight: "500",
  };

  const ulStyle = {
    display: "flex",
    padding: "5px",
  };

  const dispatch = useDispatch();

  const changePage = (e) => {
    if (e.target.tagName === "UL") return;
    const pageNum = e.target.innerHTML;
    setActive(pageNum);
    dispatch(fetchProducts(`_page=${pageNum}&_limit=5`));
  };

  useEffect(() => {
    setActive("1");
  }, []);

  let items = [];

  for (let number = 1; number <= count / params.get("_limit"); number++) {
    items.push(
      <li style={active == number ? activeStyles : styles} key={number}>
        {number}
      </li>
    );
  }

  return (
    <ul style={ulStyle} onClick={changePage}>
      {items}
    </ul>
  );
};

export default CustomPagination;
