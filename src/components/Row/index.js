import React from 'react';
import { CustomRow } from '@buffetjs/styles';

const Row = ({ description, id, name, onClick }) => {
  const styles = {
    name: {
      textTransform: 'capitalize',
    },
  };

  return (
    <CustomRow onClick={() => onClick(id)}>
      <td>
        <p style={styles.name}>{name}</p>
      </td>
      <td>
        <p>{description}</p>
      </td>
    </CustomRow>
  );
};

export default Row;
