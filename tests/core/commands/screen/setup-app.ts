

export default function() {
  driver.addCommand('setupApp', async function () {
    await driver.launchApp();
    await driver.switchContext('NATIVE_APP');
  });
  
}