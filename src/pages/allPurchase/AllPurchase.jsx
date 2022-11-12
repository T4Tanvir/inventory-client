import { useEffect, useState } from "react";
import TableList from "../../component/table/TableList";
import { puchaseColunData } from "../../Data/userFormData";

function AllPurchase() {
  const [data, setData] = useState([]);
  const [btnData, setBtnData] = useState({
    link: "/purchase",
    title: "New Purchase",
  });

  useEffect(() => {
    fetch("http://localhost:4000/getAllPurchases", {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        for (let index in data) {
          data[index].id = data[index]._id;
          delete data[index]._id;
        }
        console.log(data);
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {data.length > 0 && (
        <TableList
          data={data}
          btnData={btnData}
          columnsData={puchaseColunData}
          isPurchaseTable={true}
        ></TableList>
      )}
    </div>
  );
}

export default AllPurchase;
