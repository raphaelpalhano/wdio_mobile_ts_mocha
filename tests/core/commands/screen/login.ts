import { Login } from '../../types/Login.ts';

export async function login() {
  driver.addCommand('browserLogin', async (input: Login) => {
    await driver.url('/');
    await  $('.header > span[class="action nav-toggle"]').click();
    await $('div[role="tab"] > a[href="#store.links"]').click();
    await $('//div[@id="store.links"]/descendant::a[contains(text(), "Sign In")]').click();
    await $('input[name="login[username]"]').setValue(input.email);
    await $('input[name="login[password]"]').setValue(input.password);
    await $('div[class="login-container"] button[id="send2"]').click();

  }); 
}

