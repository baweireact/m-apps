export default {
  name: 'm-app2',
  version: '1.0.2',
  extra: {
    REACT_APP_MODE: process.env.REACT_APP_MODE,
  },
  "android": {
    "package": "com.yourcompany.yourappname",
    "versionCode": 1
  },
  "ios": {
    "bundleIdentifier": "com.yourcompany.yourappname"
  }
};
