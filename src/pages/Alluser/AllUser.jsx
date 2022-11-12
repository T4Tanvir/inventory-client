import { useEffect, useState } from "react";
import TableList from "../../component/table/TableList";
import { userColumnData } from "../../Data/userFormData";

const AllUser = () => {
  const [data, setData] = useState([]);
  const [btnData, setBtnData] = useState({
    link: "/user/register",
    title: "Add User",
  });
  useEffect(() => {
    fetch("http://localhost:4000/user/all", {
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
          columnsData={userColumnData}
        ></TableList>
      )}
    </div>
  );
};
export default AllUser;
