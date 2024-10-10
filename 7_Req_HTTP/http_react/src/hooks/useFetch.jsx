import { useState, useEffect } from "react";

// 4 - custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false); // Corrigido o erro de digitação

  // 5 - Fetching data
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json(); // Corrigido para chamar a função
      setData(json);
    };

    fetchData();
  }, [url]); // Apenas url como dependência

  // 5 - Refatorando o post
  useEffect(() => {
    const postData = async () => {
      const httpRequest = async () => {
        if (method === "POST") {
          let fetchOptions = [url, config];

          const res = await fetch(...fetchOptions);

          const json = await res.json();

          setCallFetch(json);
        }
      };
    };

    postData();
  }, [method, config]); // Adicionadas dependências corretas

  return { data, setConfig, setMethod, setCallFetch }; // Retornando funções para uso externo
};
