import React from 'react';

import AppContext from '../../contexts/AppContext';

function AppProvider({ children, ...rest }) {
  return <AppContext.Provider value={rest}>{children}</AppContext.Provider>;
}

export default AppProvider;
