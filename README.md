# webdriverio-web-mobile-boilerplate

This boilerplate project has WebdriverIO 8 tests with cucumber and typescript, followed by the page objects pattern.

## Frameworks:

- WebdriverIO v8
- Cucumber v8

## Features:

- Typescript v5
- Commands actions
- Prettier
- Multi browser support
  - Chrome
  - Firefox
  - Edge
  - Safari
  - Standalone
- Crossbrowser parallel execution
- Appium
- Cloud testing Integration with BrowserStack & Sauce Labs
- Docker service
- Share data serice
- Separate config files for each service
- Testdata management & read by user type
- Reporting
  - Dot
  - Spec
  - Multiple cucumber html report with failure screenshots
- Gitlab pipelines for Gitlab repository
- Github actions for Github repository
- Docker compose for setting up the docker hub

## Test execution:

- Checkout the codebase
- Install the packages using npm install
- Run the tests by using npm run wdio-\* (local/chrome/docker/appium/.......) Please refer the package.json scripts.



## Execute emulator without android studio

~\Android\Sdk\emulator> ./emulator list avds

 ~\Android\Sdk\emulator> ./emulator -avd Pixel_3a_API_28

 
 ## browser error version

execute

appium server --allow-insecure chromedriver_autodownload



deepmerge-ts
    "yargs": "^17.7.1"
