import { jsonImport } from '../../core/utils/import.json.utils.ts';

describe('Given I access app firs time and make login', () => {
  
  it('When acces app and see login', async () => {
    const user = await jsonImport('../../fixture/static/user_data.json');
    const userDAta = user[0][0];
    console.log(userDAta);
    await driver.browserLogin(userDAta);
   
  });
});