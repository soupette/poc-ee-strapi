// import React, { useState, useEffect, lazy, Suspense } from 'react';
// import { Redirect } from 'react-router-dom';
// import path from 'path';

// const importEECompo = (filePath) =>
//   lazy(() =>
//     import(`${filePath}`).catch((err) => {
//       console.log(err);
//     }),
//   );
// const importDefaultCompo = (filePath) => lazy(() => import(`${filePath}`));

// const importView = (f) =>
//   lazy(() => {
//     // console.log('llel', path.join(process.cwd(), f));
//     // console.log('kkk', path.join('..', 'Edit'));
//     const p = '..';
//     return import(`../${f}`).catch((err) => {
//       console.log(err);
//       return import(`../DefaultCompo`);
//     });
//   });

// const useSmartImport = ({ defaultComponentPath, filePateh, redirectStatement }) => {
//   const [Module, setModule] = useState(null);
//   const [shouldRedirect, setShouldRedirect] = useState(false);
//   const filePath = '../../containers/EEPage';

//   useEffect(() => {
//     const loadCompo = async () => {
//       const Compo = await importView(filePath);
//       // console.log(process.cwd());
//       console.log('lll', Compo);

//       setModule(Compo);
//       // try {
//       //   // const Compo = await importEECompo(filePath);
//       // } catch (err) {
//       //   console.log(err);
//       //   const Compo = await importDefaultCompo(defaultComponentPath);

//       //   setModule(Compo);
//       //   setShouldRedirect(true);
//       // }
//       // // const Compo = await importView(filePath);

//       // console.log(Compo);
//     };

//     loadCompo();
//     // if (filePath) {
//     //   // console.log('ooo', filePath);

//     //   import(`${filePath}`)
//     //     .then((module) => setModule(module.default))
//     //     .catch((err) => {
//     //       console.log(err);

//     //       if (defaultComponentPath) {
//     //         return import(defaultComponentPath).then((module) => {
//     //           setModule(module.default);
//     //           setShouldRedirect(true);
//     //         });
//     //       }

//     //       setShouldRedirect(true);
//     //     });
//     // }
//   }, []);

//   if (shouldRedirect && redirectStatement && redirectStatement()) {
//     return <Redirect to="/entreprise-edition" />;
//   }

//   console.log(Module);
//   // return { module, shouldRedirect };

//   return (
//     <Suspense fallback="....">
//       <div>{Module && <Module />}</div>;
//     </Suspense>
//   );
// };

// useSmartImport.defaultProps = {
//   defaultComponentPath: '../DefaultCompo',
//   redirectStatement: null,
// };

// export default useSmartImport;
