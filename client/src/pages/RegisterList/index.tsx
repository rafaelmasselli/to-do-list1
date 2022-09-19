import Modal from "react-modal";

import { api } from "../../lib/api";
import { useState, FormEvent } from "react";

import { Button } from "../../components/structure/Button";

import "./styles.scss";
import React from "react";

const customStyles = {
  content: {
    top: "50%",
    width: "350px",
    height: "200px",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export function RegisterList() {
  const [titleModal, setTitleModal] = useState("");
  const [descriptionModal, setDescriptionModal] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [states, setStates] = useState("");
  const [priority, setPriority] = useState("");
  const [deadline, setDeadline] = useState("");

  const data = {
    title: title,
    text: text,
    states: states,
    priority: priority,
    deadline: deadline,
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function handleSubmit(event: FormEvent) {
    console.log(deadline);
    event.preventDefault();
    if (!title) {
      openModal();
      setTitleModal("Erro");
      setDescriptionModal("O campo titulo nao pode estar vazia");
    } else if (!deadline) {
      openModal();
      setTitleModal("Erro");
      setDescriptionModal("O campo data nao pode estar vazia");
    } else if (!priority) {
      openModal();
      setTitleModal("Erro");
      setDescriptionModal("O campo prioridade nao pode estar vazia");
    } else if (!states) {
      openModal();
      setTitleModal("Erro");
      setDescriptionModal("O campo status nao pode estar vazia");
    } else {
      await api
        .post("/list/create", data)
        .then(() => {
          openModal();
          setTitleModal("Sucesso");
          setDescriptionModal("Tarefa criada com sucesso");
        })
        .catch((err: any) => {
          console.log(err);
          openModal();
          setTitleModal("Erro");
          setDescriptionModal("O campo data nao pode estar vazia");
        });
    }
  }

  return (
    <div className="container__register">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="container__modal">
          <h2>{titleModal}</h2>
          <p>{descriptionModal}</p>
          <button onClick={closeModal}>Sair</button>
        </div>
      </Modal>
      <form onSubmit={handleSubmit}>
        <h1>Nova tarefa</h1>
        <div className="box__form">
          <div className="container__input">
            <label htmlFor="title">Titulo</label>
            <input
              onChange={(event) => setTitle(event.target.value)}
              id="title"
              type="text"
              placeholder="titulo da tarefa"
            />
          </div>
          <div className="container__input">
            <label htmlFor="States">Status</label>
            <input
              placeholder="Fazendo"
              onChange={(event) => setStates(event.target.value)}
              id="States"
              type="text"
            />
          </div>
          <div className="container__input">
            <label htmlFor="priority">Prioridades</label>
            <input
              placeholder="Prioridade alta"
              onChange={(event) => setPriority(event.target.value)}
              id="priority"
              type="text"
            />
          </div>
          <div className="container__input">
            <label htmlFor="date">Data para termina a tarefa</label>
            <input
              onChange={(event) => setDeadline(event.target.value)}
              id="date"
              type="date"
            />
          </div>

          <div className="input__description">
            <label htmlFor="description">Descrição</label>
            <textarea
              onChange={(event) => setText(event.target.value)}
              className="input__texterea"
              id="description"
            />
          </div>
        </div>
        <Button title="Cadastrar" />
      </form>
    </div>
  );
}
