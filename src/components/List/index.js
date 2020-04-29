import React from 'react';
import { List as ListCompo } from '@buffetjs/custom';
import Row from '../Row';

const List = ({ onClick }) => {
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
  ].map((row) => ({ ...row, onClick }));

  const buttonProps = {
    color: 'secondary',
    icon: true,
    label: 'New',
    onClick: () => onClick('new'),
    type: 'button',
  };

  return (
    <section style={{ marginTop: 30 }}>
      <ListCompo button={buttonProps} title="Roles" items={rows} customRowComponent={Row} />
    </section>
  );
};

export default List;
