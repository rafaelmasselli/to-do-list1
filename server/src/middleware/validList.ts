import { Request, Response, NextFunction } from "express";

class validBodyList {
  handle(request: Request, response: Response, nextFunction: NextFunction) {
    const { priority, states, text, title } = request.body;
    if (!priority) {
      response.status(400).json({
        message: "O campo prioridade não pode estar vazia",
      });
    }

    if (!states) {
      response.status(400).json({
        message: "O campo status não pode estar vazia",
      });
    }

    if (!text) {
      response.status(400).json({
        message: "O campo text não pode estar vazia",
      });
    }

    if (!title) {
      response.status(400).json({
        message: "O campo titulo não pode estar vazia",
      });
    }

    nextFunction();
  }
}

export { validBodyList };
