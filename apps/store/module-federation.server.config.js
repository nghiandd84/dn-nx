// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'store',
  remotes: ['product', 'checkout'],
};

module.exports = moduleFederationConfig;
