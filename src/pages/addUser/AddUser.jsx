import { useState } from "react";
import InputForm from "../../component/shared/inputForm/InputForm";
import {createUser,formValue} from '../../Data/userFormData'




const Adduser = () => {
  const [inputState, setInputState] = useState(formValue);
  const [formData, setFormData] = useState(createUser);
  const handleInputChange = (e) => {
    const { name } = e.target;
    console.log(name);
    console.log("change", e.target.value, e.target.name);
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
    });
  };

  const checkValidity = () => {
    let val = JSON.parse(JSON.stringify(createUser));
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
      fetch("http://localhost:4000/register", {
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
            console.log(data)
            setInputState(formValue);
            setFormData(createUser);
        })
        .catch((error) => {
          console.log(error);
        });
  
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        inputState={inputState}
        handleInputChange={handleInputChange}
        data={formData}
      />
    </form>
  );
};

export default Adduser;
