import { jsonImport } from '../../core/utils/import.json.utils.ts';

describe('Given I access app firs time and make login', () => {
  
  it('When acces app and see login', async () => {
    const user = await jsonImport('../../fixture/static/user_data.json');
    await driver.browserLogin({email: user[0].email,  password: user[0].password});
  });
});