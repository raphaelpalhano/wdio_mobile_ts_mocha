import { config as sharedConfig } from './wdio.shared.conf.ts';
import path from 'path';

const headless: boolean = process.env.HEADLESS as unknown as boolean;


const androidWebCap = {
  maxInstances: 1, // change based on local parallel device's availability
  platformName: 'Android',
  'appium:deviceName': 'Pixel_7_API_30',
  'appium:platformVersion': '11',
  'appium:orientation': 'PORTRAIT',
  'appium:automationName': 'UiAutomator2', 
  'appium:newCommandTimeout': 240,
  'appium:noReset': false,
  timeouts: { implicit: 60000, pageLoad: 60000, script: 60000 },
  'appium:app': path.join(process.cwd() , './app/app-release3.apk'),
}; 

const iOSWebCap = {
  maxInstances: 1, // change based on local parallel device's availability
  platformName: 'iOS',
  browserName: 'safari',
  'appium:platformName': 'iOS',
  'appium:deviceName': 'iPhone 11 Pro',
  'appium:platformVersion': '15.2',
  'appium:automationName': 'XCUITest',
  acceptInsecureCerts: false,
  timeouts: { implicit: 60000, pageLoad: 60000, script: 60000 }
};

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  ...{
    services: [
      [
        'appium',
        {
          command: 'appium',
          args: {
            debugLogSpacing: true,
            sessionOverride: true,
            port: 4723,
            //allowInsecure: 'chromedriver_autodownload'
          }
        }
      ],
      'shared-store'
    ],
  
    path: '/wd/hub',
    capabilities: [androidWebCap],

    // // For Android bases mobile device
    // capabilities: [{
    //     appiumVersion: '1.6.5',
    //     automationName: 'Appium',
    //     platformName: 'Android',
    //     //platformVersion: '9.0',
    //     deviceName: 'Android Emulator',
    //     //deviceName: 'iPhone 6s',
    //     browserName: 'chrome',
    //     // chromeOptions: {
    //     //   androidPackage: 'com.android.chrome',
    //     // },
    //     //setDebugApp: '--persistent com.android.chrome',
    //     chromeOptions: {args: ['--no-managed-user-acknowledgment-check', '--no-user-gesture-required', '--oobe-force-show-screen ⊗']},
    //     //orientation: 'PORTRAIT',
    //     //nativeInstrumentsLib: true,
    //     //isolateSimDevice: true,
    //     //clearSystemFiles: true,
    //     //app: APP_PATH
    //     commandTimeout: '7200',
    //     noReset: false,
    //     //show_on_first_run_allowed: false,
    //     dontStopAppOnReset: false,
    //     show_on_first_run_allowed : false,
    //     show_welcome_page: false,
    //     appActivity: '.MainActivity',
    //     appWaitActivity: 'SplashActivity',
    //     noSign: true,
    //     // intentCategory: 'android.intent.category.APP_CONTACTS',
    //     // intentAction: 'android.intent.action.MAIN',
    // }],
  }
};
