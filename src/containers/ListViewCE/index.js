import React from 'react';
import { useHistory } from 'react-router-dom';
import RedirectToggle from '../../components/RedirectToggle';
import List from '../../components/List';

const ListViewCE = () => {
  const { push } = useHistory();

  const handleClick = (id) => {
    push(`/roles-ce/${id}`);
  };

  return (
    <>
      <RedirectToggle />
      <section style={{ marginTop: 30 }}>
        <List onClick={handleClick} title="CE" />
      </section>
    </>
  );
};

export default ListViewCE;
