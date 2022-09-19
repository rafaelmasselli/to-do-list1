import { Request, Response } from "express";
import { deleteListService } from "../../service/List/deleteList.service";

class deleteListController {
  async handle(request: Request, response: Response) {
    return await new deleteListService()
      .handle(request.params.id)
      .then(() => {
        return response.status(200).json({
          message: "Tarefa deletada com sucesso!",
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

export { deleteListController };
