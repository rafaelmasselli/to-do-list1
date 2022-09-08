import { List } from "../../model/schema";

class deleteListService {
  async handle(id: string) {
    return await List.remove({ _id: id });
  }
}

export { deleteListService };
