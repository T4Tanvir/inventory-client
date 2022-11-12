import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import InputForm from "../shared/inputForm/InputForm";
import { MdOutlineCancel } from "react-icons/md";

function PurchaseDialog({ handleOpenModal, open, purchaseState }) {
  console.log("i am purchase dialog component");
  const { productDetail, setProductDetail, inputState, setInputState } =
    purchaseState;
  const formMetaData = {
    title: "Confirm Payment",
    data: [
      {
        label: "Totall Payable",
        name: "total_price",
        disabled: true,
        type: "text",
      },
      {
        label: "Payment",
        name: "payment",
        type: "text",
      },
      {
        label: "Due",
        name: "due",
        disabled: true,
        type: "number",
      },
    ],
    buttonType: "submit",
  };

  const getSumarizeData = () => {
    let productData = productDetail.map((product) => {
      let newProduct = {};
      newProduct.id = product._id;
      newProduct.quantity = product.quantity;
      newProduct.price = product.purchase_rate;
      return newProduct;
    });
    return productData;
  };

  const handleInputChange = (e) => {
    let due = inputState.total_price - e.ta;
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
      due: inputState.total_price - e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let sumarizeData = getSumarizeData();
    setInputState({
      ...inputState,
      products: [...sumarizeData],
    });
    fetch(`http://localhost:4000/createPurchase`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...inputState,
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
              data={formMetaData}
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

export default PurchaseDialog;
