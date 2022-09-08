import { List, IList } from "../../model/schema";

class updateListService {
  async handle(id: string, { text, deadline, priority, status, title }: IList) {
    return await List.updateOne(
      { _id: id },
      { text, deadline, priority, status, title }
    );
  }
}

export { updateListService };
