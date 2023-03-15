import axios from "./http";

export const PagedProductReq = async (params) => {
  let count;
  try {
    const response = await axios.get(`/products?${params}`);
    const countRes = await axios.get(`/products`);
    const allData = await countRes.data;
    count = await allData.length;
    return {
      products: response.data,
      count: count,
      queryParams: params.toString(),
    };
  } catch (e) {
    console.log(e.message);
  }
};
