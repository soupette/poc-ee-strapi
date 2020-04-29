import React, { Suspense } from 'react';
import { useRouteMatch } from 'react-router-dom';
import SmartImport from '../../SmartImport';
import EditView from '../EditView';

const RolesFormView = () => {
  const {
    params: { id },
  } = useRouteMatch('/roles/:id');
  const isCreating = id === 'new';

  const shouldRedirect = () => isCreating;

  return (
    <Suspense fallback="...loading">
      {isCreating ? (
        <SmartImport
          filePath="ee/containers/CreateView"
          redirectStatement={shouldRedirect}
          id={id}
        />
      ) : (
        <EditView id={id} />
      )}
    </Suspense>
  );
};

export default RolesFormView;
