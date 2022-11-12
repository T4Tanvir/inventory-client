import { useState } from "react";

export default function useForm({ formValue, formMetaData, url }) {
  const [inputState, setInputState] = useState(formValue);
  const [formData, setFormData] = useState(formMetaData);

  const handleInputChange = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
    });
  };

  const checkValidity = () => {
    let val = JSON.parse(JSON.stringify(formMetaData));
    let isValid = true;
    for (const index in val.data) {
      if (inputState[val.data[index].name] === "") {
        isValid = false;
        val.data[
          index
        ].error = `please insert the ${val.data[index].name} field `;
      } else {
        val.data[index].error = "";
      }
    }
    return {
      val,
      isValid,
    };
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let check = checkValidity();
    if (!check.isValid) {
      setFormData(check.val);
    } else {
      fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...inputState,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setInputState(formValue);
          setFormData(formMetaData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return {
    inputState,
    formData,
    handleInputChange,
    handleSubmit,
  };
}
