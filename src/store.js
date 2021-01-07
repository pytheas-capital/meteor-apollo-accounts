const onChangeCallbacks = [];

const LOGIN_TOKEN_KEY = "authToken";
const LOGIN_TOKEN_EXPIRES_KEY = "authTokenExpires";
const USER_ID_KEY = "userId";

const LOCAL_STORAGE_KEYS = [
  LOGIN_TOKEN_KEY,
  LOGIN_TOKEN_EXPIRES_KEY,
  USER_ID_KEY,
];

let tokenStore = {
  set: async function ({ userId, token, tokenExpires }) {
    global.localStorage["userId"] = userId;
    global.localStorage["authToken"] = token;
    global.localStorage["authTokenExpires"] = tokenExpires.toString();
  },
  get: async function () {
    return {
      userId: global.localStorage["userId"],
      token: global.localStorage["authToken"],
      tokenExpires: global.localStorage["authTokenExpires"],
    };
  },
};

export const setTokenStore = function (newStore) {
  tokenStore = newStore;
};

export const storeLoginToken = async function (userId, token, tokenExpires) {
  await tokenStore.set({ userId, token, tokenExpires });
  await tokenDidChange();
};

export const getLoginToken = async function () {
  const { token } = await tokenStore.get();
  return token;
};

export const getUserId = async function () {
  const { userId } = await tokenStore.get();
  return userId;
};

const tokenDidChange = async function () {
  const newData = await tokenStore.get();
  for (const callback of onChangeCallbacks) {
    callback(newData);
  }
};

export const onTokenChange = function (callback) {
  onChangeCallbacks.push(callback);
};

export const resetStore = async function () {
  clearMeteorOldTokens();
  await storeLoginToken("", "", "");
};

const clearMeteorOldTokens = () => {
  if (!global.localStorage) {
    return;
  }
  LOCAL_STORAGE_KEYS.forEach((key) => global.localStorage.removeItem(key));
};
