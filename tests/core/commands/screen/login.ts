import { Login } from '../../types/Login.ts';


export async function login() {
  const nav = await $('.header > span[class="action nav-toggle"]');
  const accountMenu = await $('//div[@aria-controls="store.links"]/descendant::a[contains(text(), "Account")]');
  const signinMenu = await $('//div[@id="store.links"]/descendant::a[contains(text(), "Sign In")]');
  const inputEmail = await $('input[name="login[username]"]');
  const inputPass =  await $('input[name="login[password]"]');
  const submitButton = await $('div[class="login-container"] button[id="send2"]');


  driver.addCommand('browserLogin', async (input: Login) => {
    await driver.url('/');
    await nav.waitForDisplayed();
    await nav.click();
    await accountMenu.click(); 
    await signinMenu.click();
    await inputEmail.setValue(input.email);
    await inputPass.setValue(input.password);
    await submitButton.click();

  }); 
}

