import React from 'react';
import { useHistory } from 'react-router-dom';
import List from '../../components/List';

const ListView = () => {
  const { push } = useHistory();

  const handleClick = (id) => {
    push(`/roles/${id}`);
  };

  return (
    <section style={{ marginTop: 30 }}>
      <List onClick={handleClick} title="" />
    </section>
  );
};

export default ListView;
