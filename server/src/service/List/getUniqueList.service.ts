import { List } from "../../model/schema";

class getUniqueListService {
  async handle(id: string) {
    return await List.findOne({ _id: id });
  }
}

export { getUniqueListService };
