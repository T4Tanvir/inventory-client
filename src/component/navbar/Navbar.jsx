import { AiOutlineMenu, AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import "../navbar/navbar.scss";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="container">
        <div className="menulogo">
          <div className="menu">
            <p>
              <AiOutlineMenu></AiOutlineMenu>
            </p>
          </div>
          <div>
            <p>
              <Link to="/" style={{ textDecoration: "none" }}>
                <span className="logo">Inventory</span>
              </Link>
            </p>
          </div>
        </div>

        <div className="items">
          <div className="item">
            <IoMdNotificationsOutline className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <AiOutlineMessage className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
         
            <p className="item">
              <Link to="/" style={{ textDecoration: "none" }}>
                <span style={{color:'#03C9D7'}}>Log Out</span>
              </Link>
            </p>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
