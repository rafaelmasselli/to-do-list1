import { List, IList } from "../../model/schema";

class createListService {
  async handle({ deadline, priority, states, text, title }: IList) {
    await List.create({ deadline, priority, states, text, title });
  }
}

export { createListService };
