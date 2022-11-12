import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./livePos.scss";

function LivePos({ data, inputName }) {
  const [productName, setProductName] = useState("");
  const { productDetail, setProductDetail, inputState, setInputState } = data;
  const deleteData = (e) => {
    let productId = e.target.id;
    for (const product of productDetail) {
      if (product._id === productId) {
        let productTotalPrice =
          product.quantity * parseInt(product.purchase_rate);
        console.log(productTotalPrice);
        setInputState({
          ...inputState,
          total_price: inputState.total_price - productTotalPrice,
        });
      }
    }
    let newData = productDetail.filter((product) => product._id !== productId);
    setProductDetail([...newData]);
  };
  const handleInputChange = (e) => {
    console.log(e.target.name);
    switch (e.target.name) {
      case "productName":
        setProductName(e.target.value);
        break;
      case "quantity":
        const newData = productDetail.map((product) => {
          let newProduct = { ...product };
          if (product._id === e.target.id) {
            if (e.target.value > 0) {
              newProduct.quantity = e.target.value;
              let previousTotal =
                product.quantity * parseInt(product.purchase_rate);
              let presentTotall =
                e.target.value * parseInt(product.purchase_rate);
              let difference = presentTotall - previousTotal;
              let totalPrice = inputState.total_price + difference;
              setInputState({
                ...inputState,
                total_price: totalPrice,
              });
            }
          }
          return newProduct;
        });
        setProductDetail([...newData]);
        break;
      default:
        setInputState({
          ...inputState,
          [e.target.name]: e.target.value,
        });
    }
  };

  const fetchProduct = () => {
    let isProductExist = productDetail.find(
      (product) => product.name === productName
    );
    if (!isProductExist) {
      fetch(`http://localhost:4000/productByName/${productName}`, {
        method: "get",
      })
        .then((res) => res.json())
        .then((data) => {
          data.quantity = 1;
          console.log(data);
          setInputState({
            ...inputState,
            total_price: inputState.total_price + parseInt(data.purchase_rate),
          });
          setProductDetail((previous) => [...previous, data]);
        });
    }
  };

  return (
    <div>
      <div className="livePoseUserInformation">
        <p>{inputName.title}</p>
        <div className="livePosInputField">
          <TextField
            id="outlined-basic"
            label="Name"
            name={inputName.name}
            value={inputState.value}
            variant="outlined"
            onChange={handleInputChange}
          />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            name={inputName.phn_number}
            variant="outlined"
            value={inputState.phn_number}
            onChange={handleInputChange}
          />
          <Button sx={{ height: "55px" }} variant="outlined">
            Search
          </Button>
        </div>
      </div>
      <div className="smallContainerCartPage">
        <table>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          {productDetail.length > 0 &&
            productDetail.map((product) => (
              <tr key={product._id}>
                <td>
                  <div class="cartInfo">
                    <div>
                      <p>{product.name}</p>
                      <small>Price: ${product.purchase_rate}.00</small>
                      <br />
                      <button id={product._id} onClick={deleteData}>
                        Remove
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <input
                    name="quantity"
                    id={product._id}
                    type="number"
                    value={product.quantity}
                    onChange={handleInputChange}
                  />
                </td>
                <td>${parseInt(product.purchase_rate) * product.quantity}</td>
              </tr>
            ))}
        </table>
      </div>
      <div className="livePosFooter">
        <div>
          <TextField
            id="outlined-basic"
            label="Model Name"
            name="productName"
            variant="outlined"
            value={productName}
            onChange={handleInputChange}
          />
          <Button
            onClick={fetchProduct}
            sx={{ height: "55px" }}
            variant="outlined"
          >
            Add Item
          </Button>
        </div>
        <div class="totalPrice">
          <table>
            <tr>
              <td>Subtotal</td>
              <td>$200.00</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>$200.00</td>
            </tr>
            <tr>
              <td> total</td>
              <td>${inputState.total_price}.00</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default LivePos;
