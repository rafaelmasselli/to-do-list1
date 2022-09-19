import { Request, Response } from "express";
import { getUniqueListService } from "../../service/List/getUniqueList.service";

class getUniqueListController {
  async handle(request: Request, response: Response) {
    return await new getUniqueListService()
      .handle(request.params.id)
      .then((result) => {
        return response.status(200).send(result);
      })
      .catch((err) => {
        console.log(err);
        return response.json({
          message: "Tarefa nao encontrada",
        });
      });
  }
}

export { getUniqueListController };
