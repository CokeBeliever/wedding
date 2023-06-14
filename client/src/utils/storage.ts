const createStorage = (key: string) => {
  return {
    get: () => uni.getStorageSync(key),
    set: (value) => uni.setStorageSync(key, value),
  };
};

export const tokenStorage = createStorage("token");
export const userStorage = createStorage("user");
