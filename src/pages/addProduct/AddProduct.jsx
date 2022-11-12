import useForm from "../../hook/useForm";
import InputForm from "../../component/shared/inputForm/InputForm";
import { createProduct, productformValue } from "../../Data/userFormData";
function AddProduct() {
  const url = "http://localhost:4000/createProduct";
  const { inputState, formData, handleInputChange, handleSubmit } = useForm({
    formValue: productformValue,
    formMetaData: createProduct,
    url,
  });

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        inputState={inputState}
        handleInputChange={handleInputChange}
        data={formData}
      />
    </form>
  )
}
export default AddProduct;
