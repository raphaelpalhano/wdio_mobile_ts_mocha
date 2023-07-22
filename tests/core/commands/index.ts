//import general from './selectors/general.ts';

import { login } from './screen/login.ts';
import { general } from './selectors/general.ts';

export async function commands() {
  await general();
  await login();
  

}
