import "./Header.css";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <div>
      <header>
        <div className="header__nav-bar">
          <div className="header__logo header__edge-item">
            <img src={logo} alt="Logo" width={40} />
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">CSS Transitions</NavLink>
              </li>
              <li>
                <NavLink to="/css-animations">CSS Animations</NavLink>
              </li>
              <li>
                <NavLink to="/basics">FM Basics</NavLink>
              </li>
              {/* <li>
                <NavLink to="/types">FM Animation Types</NavLink>
              </li> */}
              <li>
                <NavLink to="/variants">FM Variants</NavLink>
              </li>
              {/* <li>
                <NavLink to="/scrolling">Scrolling</NavLink>
              </li> */}
            </ul>
          </nav>
          <div className="header__edge-item"></div>
        </div>
        <hr />
      </header>
    </div>
  );
}
