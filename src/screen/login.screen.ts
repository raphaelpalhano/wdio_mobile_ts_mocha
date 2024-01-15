import { readerJson } from '../utils/json.utils.ts';

export class LoginScreen {

  public static async login(typeUser: string) {
    const json = readerJson('./src/fixture/static/usuarios.json');
    const user = json[typeUser];
    await $(locators.login.username).addValue(user.username);
    await $(locators.login.password).addValue(user.password);
    await $(locators.login.loginButton).click();
    
  }

  public static async assertSuccessLogin() {
    const element = $('');
    await expect(element).toBeDisplayed();
  }

}


