import { updateUser } from "../Data/userFormData";
import { createProduct } from "../Data/userFormData";

export const FormMetaData = () => {
  const url = window.location.href;
  if (url.includes("user") > 0) return { data: updateUser, link: "userupdate" };
  else if (url.includes("product") > 0)
    return { data: createProduct, link: "updateProduct" };
  else return "please add the data";
};
