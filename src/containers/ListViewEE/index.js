import React from 'react';
import { useHistory } from 'react-router-dom';
import List from '../../components/List';

const ListViewEE = () => {
  const { push } = useHistory();

  const handleClick = (id) => {
    push(`/roles-ee/${id}`);
  };

  return (
    <section style={{ marginTop: 30 }}>
      <List onClick={handleClick} title="EE" />
    </section>
  );
};

export default ListViewEE;
