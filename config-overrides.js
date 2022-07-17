// eslint-disable-next-line @typescript-eslint/no-var-requires
const {override, useBabelRc, removeModuleScopePlugin} = require('customize-cra');

// eslint-disable-next-line react-hooks/rules-of-hooks
module.exports = override(useBabelRc(), removeModuleScopePlugin());
