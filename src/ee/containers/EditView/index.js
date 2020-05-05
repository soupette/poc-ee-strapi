import React, { useEffect, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import Edit from '../../../components/Edit';
import api from '../../../utils/api';

const EditView = () => {
  const {
    params: { id },
  } = useRouteMatch('/roles/:id');
  const { push } = useHistory();
  const [{ data, isLoading }, setState] = useState({ data: null, isLoading: true });

  useEffect(() => {
    const getData = () => {
      const data = api.get(id);

      setState({ data, isLoading: false });
    };

    getData();
  }, [id]);

  const isCreating = id === 'new';

  const handleChange = ({ target: { name, value } }) => {
    setState((prevState) => ({ ...prevState, data: { ...prevState.data, [name]: value } }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const confirm = window.confirm('Do you want to confirm');

    if (confirm) {
      push('/roles');
    }
  };

  return (
    <Edit
      id={isCreating ? '' : id}
      title={isCreating ? 'Create new' : 'Edit'}
      data={data}
      isLoading={isLoading}
      onChange={handleChange}
      onSubmit={handleSubmit}
      disabled={false}
    />
  );
};

export default EditView;
