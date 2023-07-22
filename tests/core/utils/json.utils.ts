class JsonUtils {
  objectToJSONArrayWithoutKey = (userdata: Object) => {
    let jsonArray = JSON.parse(JSON.stringify(userdata));
    return jsonArray;
  };

  objectToJSONArrayWithKeys =  (userdata: Object) => {
    const jsonArray = Object.keys(userdata).map((key) => userdata[key]);
    return jsonArray;
  };
}
export default new JsonUtils();
