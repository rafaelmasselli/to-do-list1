import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { api } from "../../lib/api";

import "./style.scss";

import { ModalAlert } from "../../components/structure/ModalAlert";

export function View() {
  const [list, setList] = useState<any>([]);

  const [titleModal, setTitleModal] = useState("");

  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [btnTitle, setBtnTitle] = useState("");

  const [top, setTop] = useState("");

  const navigation = useNavigate();
  const Id = useParams().id;

  const [modalPatch, setModalPatch] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShowPatch = () => {
    setTitleModal(`Editando a tarefa ${list.title}`);
    setWidth("450px");
    setHeight("650px");
    setTop("45%");
    setModalPatch(true);
    setShow(true);
  };

  const handleShowDelete = () => {
    setTitleModal("Deseja excluir essa tarefa?");
    setBtnTitle("Deletar");
    setWidth("300px");
    setHeight("190px");
    setTop("40%");
    setModalPatch(false);
    setShow(true);
  };

  async function handleDeleteList() {
    await api
      .delete(`/list/delete/${Id}`)
      .then(() => {
        navigation("/");
      })
      .catch(() => {
        alert("nao deu");
      });
  }

  useEffect(() => {
    api.get(`/list/${Id}`).then((response) => {
      setList(response.data);
    });
  }, []);
  return (
    <div className="container__view">
      <ModalAlert
        modalIsOpen={show}
        closeModal={handleClose}
        handleModal={modalPatch ? null : handleDeleteList}
        titleModal={titleModal}
        Height={height}
        Width={width}
        btnTitle={btnTitle}
        Form={modalPatch}
        Top={top}
        Id={Id}
        descriptionModal={undefined}
      />

      <div className="card__view">
        <div className="header__card">
          <div className="container__circle__card">
            <div className="circle__card"></div>
            <div className="circle__card"></div>
            <div className="circle__card"></div>
          </div>
          <div className="button__closed">
            <button className="close" onClick={handleShowDelete}></button>
          </div>
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
          <div className="container__btn">
            <button onClick={handleShowDelete}>Excluir</button>
            <button onClick={handleShowPatch}>Editar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
