# POC EE vs CE Strapi

## Resources

- https://codesandbox.io/s/01-loading-components-dynamically-without-switch-statement-3v0lp?file=/src/index.js
- https://codesandbox.io/s/03-loading-components-on-demand-ydwjn?file=/src/App.js
- https://codesandbox.io/s/react-dynamic-import-hooks-demo-108-kuf3u?file=/src/components.js

## Usage

So how to play with the example?

To simulate the EE you can set then `filePath` prop of the `SmartImport` component from `RolesFormView` container to `filePath="ee/containers/CreateView"`. If you change it a path that does not exist it will redirect the user to the `EEPage` when clicking on the `Add New` button from the role page.
In this POC the roles are still editable only creation is locked.
