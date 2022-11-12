import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import InputForm from "../shared/inputForm/InputForm";
import { MdOutlineCancel } from "react-icons/md";
import { FormMetaData } from "../../util/formMetaData";

function FormDialog({ open, handleOpenModal, individualData }) {
  console.log(individualData);
  const [inputState, setInputState] = useState(individualData);
  const { data, link } = FormMetaData();
  const [formData, setFormData] = useState(data);

  const handleInputChange = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
    });
  };

  const checkValidity = () => {
    let val = JSON.parse(JSON.stringify(formData));
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
    const finalValue = { ...inputState };
    delete finalValue.id;
    if (!check.isValid) {
      setFormData(check.val);
    } else {
      fetch(`http://localhost:4000/${link}/${individualData.id}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...finalValue,
        }),
      })
        .then((res) => res.json())
        .then((responseData) => {
          console.log(responseData);
          handleOpenModal();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <Dialog fullWidth open={open} onClose={handleOpenModal}>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <InputForm
              inputState={inputState}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              data={data}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleOpenModal}>
            <MdOutlineCancel />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default FormDialog;
