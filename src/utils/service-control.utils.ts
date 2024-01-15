export async function serviceControl() {
  const firefox = process.argv.includes('--firefox') ? 'FIREFOX' : '';
  const docker = process.argv.includes('--docker') ? 'DOCKER' : '';
  const selenoid = process.argv.includes('--selenoid') ? 'SELENOID' : '';
  const edge = process.argv.includes('--edge') ? 'EDGE' : '';
  const crossbrowser = process.argv.includes('--crossbrowser') ? 'CROSSBROWSER' : '';
  const standalone = process.argv.includes('--standalone') ? 'STANDALONE' : '';
  const safari = process.argv.includes('--safari') ? 'SAFARI' : '';
  const appium = process.argv.includes('--appium') ? 'APPIUM' : '';
  const browserstack = process.argv.includes('--browserstack') ? 'BROWSERSTACK' : '';
  const saucelabs = process.argv.includes('--saucelabs') ? 'SAUCELABS' : '';
  const serviceType = firefox || edge || docker || selenoid || crossbrowser || safari || standalone || appium || browserstack || saucelabs || 'CHROME';
  console.log(`Service type: ${serviceType}`);
  const dynamicConfig = await import(`../../../config/wdio.${serviceType}.conf.ts`);
  return dynamicConfig;
}