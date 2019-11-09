module.exports = {
  platform: 'github',
  logFileLevel: 'warn',
  logLevel: 'info',
  onboarding: true,
  onboardingConfig: {
    extends: ['config:base'],
  },
  autodiscover: true,
  autodiscoverFilter: 'rvillane/renovate-pinning',
  requireConfig: true,
  automerge: false,
  extends: ['group:allNonMajor'],
  enabledManagers: ['npm','gradle'],
  rangeStrategy: 'pin',
  recreateClosed: true,
  stabilityDays: 7,
  prCreation:'not-pending',
  labels: [
    'renovate'
  ],
  ignoreDeps: ['eslint','coverify','eslint-plugin-security','eslint-plugin-node','eslint-config-airbnb', 'eslint-plugin-import','eslint-plugin-promise', 'eslint-plugin-jsx-a11y', 'eslint-plugin-react','es6-plato','minimatch','tap-colorize']
};
