import { setValue } from '@wdio/shared-store-service';
import { getArgumentValue } from '../utils/arguments.utils.ts';


const urls = {
  dev: 'https://magento.softwaretestingboard.com/',
};

export async function envControl() {
  let baseUrl: string;
  let environment: any = getArgumentValue('env');
  await setValue('environment', environment);
  
  baseUrl = urls[environment];

  return baseUrl;
}