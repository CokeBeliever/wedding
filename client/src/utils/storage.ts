const createStorage = (key: string) => {
  return {
    get: () => uni.getStorageSync(key),
    set: (value) => uni.setStorageSync(key, value),
    remove: () => uni.removeStorageSync(key),
  };
};

export const tokenStorage = createStorage("token");
export const userStorage = createStorage("user");
