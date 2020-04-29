import React, { Suspense } from 'react';
import { useRouteMatch } from 'react-router-dom';
import useApp from '../../hooks/useApp';
import RedirectToggle from '../../components/RedirectToggle';
import SmartImport from '../../SmartImport';
import EditView from '../EditView';

const RolesFormView = () => {
  const {
    params: { id },
  } = useRouteMatch('/roles-ce/:id');
  const { isRedirectEnabled } = useApp();
  const isCreating = id === 'new';

  const shouldRedirect = () => {
    if (isRedirectEnabled) {
      return isCreating;
    }

    return false;
  };

  return (
    <Suspense fallback="...loading">
      {isCreating ? (
        <>
          <RedirectToggle />
          <SmartImport
            filePath="ee/containers/CreateViewCE" // This file does not exist
            redirectStatement={shouldRedirect}
            id={id}
          />
        </>
      ) : (
        <EditView id={id} />
      )}
    </Suspense>
  );
};

export default RolesFormView;
