import React from 'react';
import { List } from '@buffetjs/custom';
import { useHistory } from 'react-router-dom';
import Row from '../../components/Row';

const ListView = () => {
  const { push } = useHistory();

  const handleClick = (id) => {
    push(`/roles/${id}`);
  };

  const rows = [
    {
      id: 1,
      name: 'Admin',
      description: 'Bacon ipsum dolor amet boudin shankle picanha shoulder bacon.',
    },
    {
      id: 2,
      name: 'Author',
      description: 'Tenderloin drumstick cupim cow.',
    },
    {
      id: 3,
      name: 'Intern',
      description: 'Pancetta pig buffalo bresaola.',
    },
  ].map((row) => ({ ...row, onClick: handleClick }));

  return (
    <section style={{ marginTop: 30 }}>
      <List title="Roles" items={rows} customRowComponent={Row} />
    </section>
  );
};

export default ListView;
