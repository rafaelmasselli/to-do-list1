interface IList {
  _id: string;
  title: string;
  text: string;
  priority?: string;
  states: string;
  createList?: string;
}

interface IModal {
  modalIsOpen: boolean;
  closeModal: () => void;
  titleModal: string;
  descriptionModal: any;
  handleModal?: any;
  Width?: string;
  Height?: string;
  Top?: string;
  btnTitle?: string;
  Form?: boolean;
  HandleSubmit?: any;
  Id?: string
}

export type { IList, IModal };
