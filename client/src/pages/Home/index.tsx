import { useState, useEffect } from "react";
import { IList } from "../../interface";
import { api } from "../../lib/api";
import "./styles.scss";

import { CardLists } from "../../components/structure/CardLists";

export function Home() {
  const [lists, setLists] = useState<IList[]>([]);

  useEffect(() => {
    api
      .get("/list")
      .then((res: any) => {
        setLists(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="container">
        {lists.map((res: any) => (
          <CardLists
            key={res._id}
            _id={res._id}
            states={res.status}
            text={res.text}
            title={res.title}
            createList={res.createList}
            priority={res.priority}
          />
        ))}
      </div>
    </div>
  );
}
