import { setValue } from '@wdio/shared-store-service';
import argumentsUtils from './arguments.utils.ts';
import { ENVIRONMENT } from '../context/context.keys.ts';


const urls = {
  dev: 'https://magento.softwaretestingboard.com/',
};

export async function envControl() {
  let baseUrl: string;
  let environment: any = argumentsUtils.getArgumentValue('Env');
  await setValue(ENVIRONMENT, environment);
  
  baseUrl = urls[environment];

  return baseUrl;
}