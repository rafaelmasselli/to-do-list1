import { useState } from "react";
import { useParams } from "react-router-dom";

import circleStyle from "../../assets/icon.png";
import { api } from "../../lib/api";

import "./style.scss";

interface IList {
  title: string;
  text: string;
  states: string;
  priority: string;
  deadline: string;
}

export function View() {
  const [list, setList] = useState<IList[]>([]);

  const Id = useParams().id;

  api.get(`/list/${Id}`).then((response) => {
    setList(response.data);
  });

  return (
    <div className="container__view">
      <div className="card__view">
        <div className="header__card">
          <div className="container__circle__card">
            <div className="circle__card"></div>
            <div className="circle__card"></div>
            <div className="circle__card"></div>
          </div>
          <img src={circleStyle} alt="icon" />
        </div>
        <div className="container__box__card">
          <div className="box__info">
            <h2>Titulo</h2>
            <h3> {list.title}</h3>
          </div>

          <div className="box__info">
            <h2>Status</h2>
            <h3> {list.states}</h3>
          </div>
          <div className="box__info">
            <h2>Prioridade</h2>
            <h3> {list.priority}</h3>
          </div>
          <div className="box__info">
            <h2>Data</h2>
            <h3> {list.deadline}</h3>
          </div>
          <div className="box__info">
            <h2>Descrição</h2>
            <h3> {list.text}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
