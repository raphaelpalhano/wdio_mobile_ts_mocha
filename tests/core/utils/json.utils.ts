export function  objectToJSONArrayWithoutKey (userdata: Object) {
  const jsonArray = JSON.parse(JSON.stringify(userdata));
  return jsonArray;
}

export function objectToJSONArrayWithKeys  (userdata: Object)  {
  const jsonArray = Object.keys(userdata).map((key) => userdata[key]);
  return jsonArray;
}

