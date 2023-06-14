import { defineStore } from "pinia";
import { ref } from "vue";
import { USER } from "./constants";
import { tokenStorage, userStorage } from "@/utils/storage";

export default defineStore(USER, () => {
  const user = ref<any>(userStorage.get());
  const token = ref<string>(tokenStorage.get());

  const setUserInfo = ({ user: userVal, token: tokenVal }) => {
    user.value = userVal;
    token.value = tokenVal;
    userStorage.set(userVal);
    tokenStorage.set(tokenVal);
  };

  return { user, token, setUserInfo };
});
