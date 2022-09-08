import { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

class validId {
  handle(request: Request, response: Response, nextFunction: NextFunction) {
    const id = request.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response.status(400).send({ message: "ID invalido" });
    }

    nextFunction();
  }
}

export { validId };
