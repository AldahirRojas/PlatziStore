import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios(API);
      setProducts(response.data);
    })();
  }, [API]); // incluir API en el array de dependencias

  return products;
};

export default useGetProducts;
