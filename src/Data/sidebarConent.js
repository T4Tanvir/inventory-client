import {
  AiOutlineUserAdd,
  AiOutlineOrderedList,
  AiOutlineFileAdd,
} from "react-icons/ai";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { HiDocumentReport } from "react-icons/hi";
import { GiEntryDoor } from "react-icons/gi";
export const data = [
  {
    title:"CRM",
    others: [
      {
        name: "Add new Client",
        icon: <AiOutlineUserAdd className="icon"></AiOutlineUserAdd>,
        to: "",
      },
      {
        name: "Add new User",
        icon: <AiOutlineUserAdd className="icon"></AiOutlineUserAdd>,
        to: "user/register",
      },
      {
        name: "All User",
        icon: <AiOutlineUserAdd className="icon"></AiOutlineUserAdd>,
        to: "user/all",
      },
    ],
  },
  {
    title:'Sales',
    others: [
      {
        name: "New invoice",
        icon: <FaFileInvoiceDollar className="icon" />,
        to: "/purchase",
      },
      {
        name: "Invoice list",
        icon: <AiOutlineOrderedList className="icon" />,
        to: "",
      },
      {
        name: "Invoice Item List",
        icon: <AiOutlineOrderedList className="icon" />,
        to: "",
      },
    ],
  },
  {
    title:'Products',
    others: [
      {
        name: "New Products",
        icon: <AiOutlineFileAdd className="icon" />,
        to: "/product/add",
      },
      {
        name: "Product List",
        icon: <AiOutlineOrderedList className="icon" />,
        to: "",
      },
      {
        name: "Stock Report",
        icon: <HiDocumentReport className="icon" />,
        to: "/product/stock",
      },
      {
        name: "Product Purchase",
        icon: <GiEntryDoor className="icon" />,
        to: "/product/purchase",
      },
    ],
  },
  {
    title:"Due Reports",
    others: [
      {
        name: "All Due Reports",
        icon: <HiDocumentReport className="icon" />,
        to: "",
      },
      {
        name: "Customer Wise Due Reports",
        icon: <HiDocumentReport className="icon" />,
        to: "",
      },
    ],
  },
  {
    title:"Sales Report",
    others: [
      {
        name: "Daily Sales Report",
        icon: <HiDocumentReport className="icon" />,
        to: "",
      },
      {
        name: "Customer wise sales report",
        icon: <HiDocumentReport className="icon" />,
        to: "",
      },
      {
        name: "Product wise Sales Report",
        icon: <HiDocumentReport className="icon" />,
        to: "",
      },
    ],
  },
];


