import request, { MethodsEnum } from "@/utils/request";

export const postAuthSignUp = (data) => {
  return request({
    url: "/auth/sign-up",
    method: MethodsEnum.POST,
    data,
  });
};

export const postAuthSignIn = (data) => {
  return request({
    url: "/auth/sign-in",
    method: MethodsEnum.POST,
    data,
  });
};

export const postAuthSignInWeixin = (data) => {
  return request({
    url: "/auth/sign-in-weixin",
    method: MethodsEnum.POST,
    data,
  });
};

export const postSignInAndAutoSignUp = (data) => {
  return request({
    url: "/auth/sign-in-and-auto-sign-up",
    method: MethodsEnum.POST,
    data,
  });
};
