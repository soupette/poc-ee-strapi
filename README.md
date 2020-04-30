# POC EE vs CE Strapi

## Resources

- https://codesandbox.io/s/01-loading-components-dynamically-without-switch-statement-3v0lp?file=/src/index.js
- https://codesandbox.io/s/03-loading-components-on-demand-ydwjn?file=/src/App.js
- https://codesandbox.io/s/react-dynamic-import-hooks-demo-108-kuf3u?file=/src/components.js

## Usage

So how to play with the example?

EE:

- Click on Roles EE you can:
  - Add a role
  - Edit a role

CE:

- Click on Roles CE
- Edit a role

Play with the CE Container:

When clicking on add new you will be redirected to the `EEPage` to upgrade your plan.
If you change the `shouldRedirect` method to `const shouldRedirect = () => false` you will see a default component that also simulates the `EEPage`so the create role page is "kind of" protected. Or you can disable the redirection direction in the UI.

IMO, we will need to forbid customising the `SmartImport` component for the generated apps. This can be easily done by modifying the `.cache` creation in this [file](https://github.com/strapi/strapi/blob/e79daadb5a9857e25e14d53d9a94dcfe4994e949/packages/strapi-admin/index.js#L130-L150).
