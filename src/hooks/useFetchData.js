import { useEffect, useState } from 'react';
import api from '../utils/api';

function useFetchData(id) {
  const [state, setState] = useState({ data: null, isLoading: true });

  useEffect(() => {
    const getData = () => {
      const data = api.get(id);

      setState({ data, isLoading: false });
    };

    getData();
  }, [id]);

  return [state];
}

export default useFetchData;
