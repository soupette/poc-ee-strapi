# POC EE vs CE Strapi

## Resources

- https://gitlab.com/soupette/gitlab/-/blob/master/config/webpack.config.js

## Usage

So how to play with the example?

EE: don't change the boilerplate
CE: Delete the `./src/ee/` folder.

In this example, the webpack config has been ejecting to use aliases.

Check out the `./config/is_ee_env.js` and the `./config/alias.js` files

IMO, we will need to forbid customising the `SmartImport` component for the generated apps. This can be easily done by modifying the `.cache` creation in this [file](https://github.com/strapi/strapi/blob/e79daadb5a9857e25e14d53d9a94dcfe4994e949/packages/strapi-admin/index.js#L130-L150).
