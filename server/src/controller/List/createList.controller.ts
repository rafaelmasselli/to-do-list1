import { Request, Response } from "express";
import { createListService } from "../../service/List/createList.service";

class createListController {
  async handle(request: Request, response: Response) {
    const { text, title, states, priority, deadline } = request.body;
    return await new createListService()
      .handle({ deadline, priority, states, text, title })
      .then((res) => {
        return response.status(201).json({
          message: "Tarefa criada com sucesso",
          res,
        });
      })
      .catch((err) => {
        console.log(err);
        return response.status(500).json({
          message: "Erro inesperado tente novamente mais tarde",
        });
      });
  }
}

export { createListController };
