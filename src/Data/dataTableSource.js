export const addProductData = {
  title: "Add Product",
  data: [
    {
      label: "Brand",
      type: "text",
    },
    {
      label: "Category",
      type: "text",
    },
    {
      label: "Product model",
      type: "text",
    },
    {
      label: "Purchase Rate",
      type: "text",
    },
    {
      label: "Sale Rate",
      type: "text",
    },
  ],
  buttonType: "Submit",
};

const createUser = {
  title: "Create User",
  data: [
    {
      label: "Name",
      type: "text",
    },
    {
      label: "Email",
      type: "text",
    },
    {
      label: "Address",
      type: "text",
    },
    {
      label: "Phone number",
      type: "text",
    },
    {
      label: "Role",
      type: "text",
      option: ["Admin", "Sales Person"],
    },
    {
      label: "Password",
      type: "Password",
    },
  ],
};

const formValue = {
  name: "",
  email: "",
  "phone number": "",
  address: "",
  role: "",
  password: "",
};
