import React, { useState } from "react";
import useFetch from "../../hook/useFetch";
import TableList from "../../component/table/TableList";
import { productColumnData } from "../../Data/userFormData";

const ProductStock = () => {
  const url = "http://localhost:4000/getProduct";
  const [btnData, setBtnData] = useState({
    link: "/product/add",
    title: "Add Product",
  });
  const { data } = useFetch(url);
  console.log(data);
  return (
    <div>
      {data.length > 0 && <TableList columnsData={productColumnData} data={data} btnData={btnData}></TableList>}
    </div>
  );
};

export default ProductStock;
