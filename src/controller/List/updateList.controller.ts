import { Request, Response } from "express";
import { updateListService } from "../../service/List/updateList.service";

class updateListController {
  async handle(request: Request, response: Response) {
    const { text, deadline, priority, status, title } = request.body;
    await new updateListService()
      .handle(request.params.id, {
        text,
        deadline,
        priority,
        status,
        title,
      })
      .then((result) => {
        return response.status(201).json({
          message: "Tarefa atualizada com sucesso",
          result,
        });
      })
      .catch((err) => {
        console.log(err);
        return response.status(500).json({
          message: "ocorreu um erro inesperado tente novamente mais tarde",
        });
      });
  }
}

export { updateListController };
