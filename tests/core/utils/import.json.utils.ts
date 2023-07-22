import jsonUtils from './json.utils.ts';

export async function jsonImport(path: string) {
  const data = await import(`${path}`, {
    assert: { type: 'json' }
  });

  const json = jsonUtils.objectToJSONArrayWithKeys(data);

  return json;
}

