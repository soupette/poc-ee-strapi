import data from './data';

const api = {
  get: (id) => {
    return data[id];
  },
};

export default api;
