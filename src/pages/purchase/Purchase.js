import { Button } from "@mui/material";
import { useState } from "react";
import LivePos from "../../component/livePos/LivePos";
import PurchaseDialog from "../../component/Model/PurchaseDialog";
const purchaseData = {
  products: [],
  // id,quanity,price
  phn_number: "",
  name: "",
  total_price: 0,
  payment: 0,
  due: 0,
};
const inputName = {
  title: "Sales Man Information",
  phn_number: "phn_number",
  name: "name",
  total_price: "",
  payment: "",
  due: "",
};
const Purchase = () => {
  const [productDetail, setProductDetail] = useState([]);
  const [inputState, setInputState] = useState({ ...purchaseData });
  const [open, setOpen] = useState(false);

  let purchaseState = {
    productDetail,
    setProductDetail,
    inputState,
    setInputState,
  };
  const handleOpenModal = async () => {
    console.log("done");
    setOpen((prev) => !prev);
  };
  return (
    <div style={{ marginTop: "70px" }}>
      <div>
        <LivePos data={purchaseState} inputName={inputName} />
      </div>
      <div style={{ width: "50%", margin: "auto" }}>
        <Button
          sx={{ height: "55px", width: "100%", margin: "auto" }}
          variant="outlined"
          onClick={handleOpenModal}
        >
          Check Out
        </Button>
      </div>
      {open && (
        <PurchaseDialog
          handleOpenModal={handleOpenModal}
          open={open}
          purchaseState={purchaseState}
        ></PurchaseDialog>
      )}
    </div>
  );
};

export default Purchase;
