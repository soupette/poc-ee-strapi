import React from 'react';
import { Label, Toggle } from '@buffetjs/core';

import useApp from '../../hooks/useApp';

const RedirectToggle = () => {
  const { isRedirectEnabled, toggleRedirect } = useApp();

  return (
    <section style={{ marginTop: 30 }}>
      <div>
        <div style={{ marginBottom: 10 }}>
          <Label htmlFor="toggle">Disable redirection to see the default behaviour</Label>
        </div>
        <Toggle name="toggle" onChange={toggleRedirect} value={isRedirectEnabled} />
      </div>
    </section>
  );
};

export default RedirectToggle;
