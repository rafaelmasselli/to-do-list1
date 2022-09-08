import { List, IList } from "../../model/schema";

class createListService {
  async handle({ deadline, priority, status, text, title }: IList) {
    await List.create({ deadline, priority, status, text, title });
  }
}

export { createListService };
