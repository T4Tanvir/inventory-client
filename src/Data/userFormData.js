export const createUser = {
  title: "Add User",
  data: [
    {
      label: "Name",
      name: "name",
      type: "text",
      error: "",
    },
    {
      label: "Email",
      name: "email",
      type: "text",
      error: "",
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      error: "",
    },
    {
      label: "Phone number",
      name: "phoneNumber",
      type: "text",
      error: "",
    },
    {
      label: "Role",
      name: "role",
      type: "text",
      error: "",
      option: ["Admin", "Employee"],
    },
    {
      label: "Password",
      name: "password",
      type: "Password",
      error: "",
    },
  ],
  buttonType: "submit",
};
export const updateUser = {
  title: "Update User",
  data: [
    {
      label: "Name",
      name: "name",
      type: "text",
      error: "",
    },
    {
      label: "Email",
      name: "email",
      type: "text",
      error: "",
    },
    {
      label: "Address",
      name: "address",
      type: "text",
      error: "",
    },
    {
      label: "Phone number",
      name: "phnNumber",
      type: "text",
      error: "",
    },
    {
      label: "Role",
      name: "role",
      type: "text",
      error: "",
      option: ["Admin", "Employee"],
    },
  ],
  buttonType: "submit",
};

export const formValue = {
  name: "",
  email: "",
  phoneNumber: "",
  address: "",
  role: "",
  password: "",
};

export const createProduct = {
  title: "Add Product",
  data: [
    {
      label: "Brand",
      name: "brand",
      type: "text",
      error: "",
    },
    {
      label: "Category",
      name: "category",
      type: "text",
      error: "",
    },
    {
      label: "Model",
      name: "name",
      type: "text",
      error: "",
    },

    {
      label: "Purchase rate",
      name: "purchase_rate",
      type: "number",
      error: "",
    },
    {
      label: "Selling rate",
      name: "selling_rate",
      type: "text",
      error: "",
    },
  ],
  buttonType: "submit",
};
export const productColumnData = [
  {
    field: "brand",
    headerName: "Brand",
    width: 90,
  },
  {
    field: "category",
    headerName: "Category",
    width: 150,
  },
  {
    field: "name",
    headerName: "Model",
    width: 200,
  },
  {
    field: "purchase_rate",
    headerName: "Purchase Rate",
    width: 150,
  },
  {
    field: "selling_rate",
    headerName: "Selling Rate",
    width: 150,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 150,
  },
];

export const productformValue = {
  name: "",
  brand: "",
  category: "",
  purchase_rate: "",
  selling_rate: "",
};

export const userColumnData = [
  {
    field: "name",
    headerName: "Name",
    width: "150",
  },
  {
    field: "email",
    headerName: "Email",
    width: "150",
  },
  {
    field: "phnNumber",
    headerName: "Phone Number",
    width: "150",
  },
  {
    field: "address",
    headerName: "Address",
    width: "150",
  },
  {
    field: "role",
    headerName: "Role",
    width: "150",
  },
];

export const puchaseColunData = [
  {
    field: "name",
    headerName: "Name",
    width: "150",
  },
  {
    field: "phnNumber",
    headerName: "Phone Number",
    width: "150",
  },
  {
    field: "total_price",
    headerName: "Total Price",
    width: "100",
  },
  {
    field: "payment",
    headerName: "Payment",
    width: "100",
  },
  {
    field: "due",
    headerName: "Due",
    width: "100",
  },
];
