//import general from './selectors/general.ts';

import { login } from './screen/login.ts';

export async function commands() {
  await login();
  

}
