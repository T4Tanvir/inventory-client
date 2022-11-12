import { AiOutlineDashboard } from "react-icons/ai";
import { Link } from "react-router-dom";
import { data } from "../../Data/sidebarConent";
import "./sidebar.scss";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <AiOutlineDashboard className="icon" />
            <span>Dashboard</span>
          </li>
          {data.map((item) => (
            <>
              <p className="title">{item.title}</p>
              {item.others.map((data) => (
                <Link key={data.name}to={data.to} style={{ textDecoration: "none" }}>
                  <li>
                    {data.icon}
                    <span>{data.name}</span>
                  </li>
                </Link>
              ))}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
