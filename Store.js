import AsyncStorage from "@react-native-async-storage/async-storage";

export const Save = async (key, value) => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};
export const Get = async (key, setValue) => {
  try {
    const res = JSON.parse(await AsyncStorage.getItem(key));
    setValue(res);
    return;
  } catch (e) {
    console.log(e);
    return 0;
  }
};
export const Merge = async (key, value) => {
  await AsyncStorage.mergeItem(key, JSON.stringify(value));
};
export const Del = async (key) => {
  await AsyncStorage.removeItem(key);
  console.log("deleted " + key);
};
export const GetAll = async (setValue) => {
  const all = await AsyncStorage.getAllKeys();
  setValue(all);
  console.log(all);
  return;
};
