import { Users } from '../../core/types/Users.ts';
import { getArgumentValue } from '../../core/utils/arguments.utils.ts';
import { objectToJSONArrayWithoutKey } from '../../core/utils/json.utils.ts';

let environment: any = await getArgumentValue('env');
console.log('Environment: ' + environment);

const userdata = await import(`../static/user_data.json`, {
  assert: { type: 'json' }
});

export async function getUserByType (usertype: string): Promise<Users> {
  const jsonArray = await objectToJSONArrayWithoutKey(userdata);
  const user: Users = await jsonArray.find((user) => {
    return user.userType === usertype;
  });
  return user;
}
