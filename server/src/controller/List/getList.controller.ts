import { Request, Response } from "express";
import { getListService } from "../../service/List/getList.service";

class getListController {
  async handle(request: Request, response: Response) {
    return await new getListService()
      .handle()
      .then((result) => {
       return response.status(200).json({
        result,
        });
      })
      .catch((err) => {
        console.log(err);
        return response.status(500).json({
          message: "Erro inesperado tente novamente mais tarde ",
        });
      });
  }
}

export { getListController };
