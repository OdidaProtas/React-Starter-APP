import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAxios } from "../constants";

export default function Home() {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading((p) => !p);
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(({ data }) => {
        setLoading((p) => !p);
        console.log(data);
        setState(data);
      })
      .catch((e) => {
        setLoading((p) => !p);
        console.log(e);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Fetching data...</p>
      ) : ( 
        <div>
          {state?.map((todo: any, i: number) => (
            <p>{todo.title}</p>
          ))}
        </div>
      )}
    </div>
  );
}
