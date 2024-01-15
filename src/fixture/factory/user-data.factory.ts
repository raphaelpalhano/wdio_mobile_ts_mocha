import { Users } from '../../core/types/Users.ts';
import { getArgumentValue } from '../../utils/arguments.utils.ts';
import { objectToJSONArrayWithoutKey } from '../../utils/json.utils.ts';

let environment: any = await getArgumentValue('env');
console.log('Environment: ' + environment);

const userdata = await import(`../../tests/fixture/static/user_data.json`, {
  assert: { type: 'json' }
});

export async function getUserByType (usertype: string): Promise<Users> {
  const jsonArray = await objectToJSONArrayWithoutKey(userdata);
  const user: Users = await jsonArray.find((user) => {
    return user.userType === usertype;
  });
  return user;
}
