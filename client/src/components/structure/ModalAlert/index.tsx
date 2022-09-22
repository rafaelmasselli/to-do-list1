import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { IModal } from "../../../interface";
import { api } from "../../../lib/api";
import { ModalErr } from "../ModalErr";

import "./style.scss";

export function ModalAlert({
  closeModal,
  modalIsOpen,
  titleModal,
  handleModal,
  btnTitle,
  Height,
  Width,
  Form,
  Id,
  Top,
}: IModal) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [states, setStates] = useState("");
  const [priority, setPriority] = useState("");
  const [deadline, setDeadline] = useState("");

  const [titleModalErr, setTitleModalErr] = useState("");
  const [descriptionModalErr, setDescriptionModalErr] = useState("");

  const [showErr, setShowErr] = useState(false);

  const handleShowErr = () => setShowErr(true);
  const handleCloseErr = () => setShowErr(false);

  const data = {
    title: title,
    text: text,
    states: states,
    priority: priority,
    deadline: deadline,
  };

  function AlertModal(title: string, description: string) {
    handleShowErr();
    setTitleModalErr(title);
    setDescriptionModalErr(description);
  }

  async function handlePatchList(event: FormEvent) {
    event.preventDefault();

    console.log(data);

    if (!title) {
      return AlertModal("Erro", "O campo titulo nao pode estar vazia");
    } else if (!deadline) {
      return AlertModal("Erro", "O campo data nao pode estar vazia");
    } else if (!priority) {
      return AlertModal("Erro", "O campo prioridade nao pode estar vazia");
    } else if (!states) {
      return AlertModal("Erro", "O campo status nao pode estar vazia");
    } else {
      await api
        .patch(`/list/update/${Id}`, data)
        .then(() => {
          return AlertModal("Sucesso", "Tarefa atualizada com sucesso");
        })
        .catch(() => {
          return AlertModal(
            "Erro",
            "Erro inesperado tente novamente mais tarde"
          );
        });
    }
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={{
        content: {
          color: "black",
          top: Top,
          width: Width,
          height: Height,
          left: "50%",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
      contentLabel="Example Modal"
    >
      <ModalErr
        closeModal={handleCloseErr}
        descriptionModal={descriptionModalErr}
        modalIsOpen={showErr}
        titleModal={titleModalErr}
      />
      <div className="container__modal__info">
        <div className="container__text__model">
          <h2>{titleModal}</h2>
        </div>
        <div className="container__btn__description">
          {Form ? (
            <form onSubmit={handlePatchList}>
              <div>
                <div className="form__patch__list">
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
                  <div className="btn__form__container">
                    <button type="submit">Editar tarefa</button>
                    <button onClick={closeModal}>Sair</button>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            <button onClick={handleModal}>{btnTitle}</button>
          )}
          {Form ? null : <button onClick={closeModal}>Sair</button>}
        </div>
      </div>
    </Modal>
  );
}
