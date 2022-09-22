import { api } from "../../lib/api";
import { useState, FormEvent } from "react";

import { Button } from "../../components/structure/Button";

import "./styles.scss";
import { ModalErr } from "../../components/structure/ModalErr";

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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function AlertModal(title: string, description: string) {
    handleShow();
    setTitleModal(title);
    setDescriptionModal(description);
  }

  async function handleSubmit(event: FormEvent) {
    console.log(deadline);
    event.preventDefault();
    if (!title) {
      AlertModal("Erro", "O campo titulo não pode estar vazia");
    } else if (!deadline) {
      AlertModal("Erro", "O campo data não pode estar vazia");
    } else if (!priority) {
      AlertModal("Erro", "o campo prioridade não pode estar vazia");
    } else if (!states) {
      AlertModal("Erro", "O campo status não pode estar vazia");
    } else {
      await api
        .post("/list/create", data)
        .then(() => {
          AlertModal("Sucesso", "Tarefa criada com sucesso");
        })
        .catch((err) => {
          console.log(err);
          AlertModal("Erro", "Erro inesperado tente novamente mais tarde");
        });
    }
  }

  return (
    <div className="container__register">
      <ModalErr
        closeModal={handleClose}
        descriptionModal={descriptionModal}
        modalIsOpen={show}
        titleModal={titleModal}
      />
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
