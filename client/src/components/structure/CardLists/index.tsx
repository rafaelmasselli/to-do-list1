import { Link } from "react-router-dom";

import { IList } from "../../../interface";

import "./styles.scss";

import circleStyle from "../../../assets/icon.png";

export function CardLists({ _id, status, title }: IList) {
  return (
    <Link
      to={`/details/${_id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="card" key={_id}>
        <div className="header__card">
          <div className="container__circle__card">
            <div className="circle__card"></div>
            <div className="circle__card"></div>
            <div className="circle__card"></div>
          </div>
          <img src={circleStyle} alt="icon" />
        </div>
        <div className="box__card">
          <h1> {title}</h1>
        </div>
      </div>
    </Link>
  );
}
