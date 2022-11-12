import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url, {
      method: "get",
    })
      .then((res) => res.json())
      .then((data) => {
        for (let index in data) {
          data[index].id = data[index]._id;
          delete data[index]._id;
        }
        setData(data);
      });
  }, []);
  return { data };
}
