import { LoginScreen } from '../screen/login.screen.ts';

describe('Quando estou fazendo login no Zap agentes com Admin, Seller, Supervisor, invalido', () => {
  
  it('Logando com admin com sucesso', async () => {
    await LoginScreen.login('admin');
    
  });
});
