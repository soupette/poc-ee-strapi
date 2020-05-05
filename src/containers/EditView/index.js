import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import Edit from '../../components/Edit';
import useFetchData from '../../hooks/useFetchData';

const EditView = () => {
  const {
    params: { id },
  } = useRouteMatch('/roles/:id');
  const [{ isLoading, data }] = useFetchData(id);

  return <Edit id={id} title="See" data={data} isLoading={isLoading} />;
};

export default EditView;
