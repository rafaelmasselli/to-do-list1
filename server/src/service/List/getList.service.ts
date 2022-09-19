import { List } from "../../model/schema";

class getListService {
  async handle() {
    return await List.find();
  }
}

export { getListService };
