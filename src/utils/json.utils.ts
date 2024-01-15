export function  objectToJSONArrayWithoutKey (userdata: Object) {
  const jsonArray = JSON.parse(JSON.stringify(userdata));
  return jsonArray;
}

export function objectToJSONArrayWithKeys  (userdata: Object)  {
  const jsonArray = Object.keys(userdata).map((key) => userdata[key]);
  return jsonArray;
}



import fs from 'fs';

export async function jsonImport(path: string) {
  const data = await import(`${path}`, {
    assert: { type: 'json' }
  });

  const json = objectToJSONArrayWithKeys(data);

  return json;
}


export function readerJson(path: string) {
  const read = fs.readFileSync(path, 'utf8');
  const json = JSON.parse(read);
  return json;
}