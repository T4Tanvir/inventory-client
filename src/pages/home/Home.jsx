import Dashboard from "../../component/dashboard/Dashboard";
import FormDialog from "../../component/Model/FormDialog";
import Navbar from "../../component/navbar/Navbar";
import InputForm from "../../component/shared/inputForm/InputForm";
import Sidebar from "../../component/sidebar/Sidebar";
import TableList from "../../component/table/TableList";
import { addProductData } from "../../Data/dataTableSource";
import "./home.scss";



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
  buttonType: "Submit",
};

const Home = () => {
  console.log(addProductData)
  return (
    <div>
  
    </div>
  );
};

export default Home;
