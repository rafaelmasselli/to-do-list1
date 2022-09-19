import { Link } from "react-router-dom";

import LogoHeader from "../../../assets/logoHeader.png";

import "./styles.scss";

export function Header() {
  return (
    <header className="header">
      <div className="container-header">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <img src={LogoHeader} alt="Logo" />
        </Link>
        <div>
          <ul>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <li>Home</li>
            </Link>
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "black" }}
            >
              <li>Criar</li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}
