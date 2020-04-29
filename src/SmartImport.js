/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, lazy } from 'react';
import { Redirect } from 'react-router-dom';

const importCompo = (f, defaultComponentPath, cb) =>
  lazy(() =>
    import(`./${f}`).catch((err) => {
      console.log(err);

      // Simulate behaviour in Strapi
      // Lazy only support default export so there's a trick to do here
      if (defaultComponentPath === 'strapi-helper-plugin') {
        return import('strapi-helper-plugin').then((module) => {
          if (cb) {
            cb();
          }

          const { Button } = module;

          return {
            default: () => (
              <section style={{ textAlign: 'center' }}>
                <Button primary> Simulate common default component</Button>
              </section>
            ),
          };
        });
      }

      return import(`${defaultComponentPath}`).then((module) => {
        if (cb) {
          cb();
        }

        return module;
      });
    }),
  );

const UseSmartImport = ({ filePath, defaultComponentPath, redirectStatement, ...rest }) => {
  const [modules, setModule] = useState([]);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    const loadCompo = () => {
      const cb = () => setShouldRedirect(true);

      const Compo = importCompo(filePath, defaultComponentPath, cb);

      setModule(<Compo {...rest} />);
    };

    loadCompo();
  }, []);

  if (shouldRedirect && redirectStatement && redirectStatement()) {
    return <Redirect to="/entreprise-edition" />;
  }

  return modules;
};

UseSmartImport.defaultProps = {
  // defaultComponentPath: './components/DefaultCompo',
  defaultComponentPath: 'strapi-helper-plugin',
};

export default UseSmartImport;
