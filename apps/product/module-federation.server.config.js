module.exports = {
  name: 'product',
  exposes: {
    './Module': 'apps/product/src/remote-entry.ts',
  },
};
