import { tokenStorage } from "@/utils/storage";

export enum MethodsEnum {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

interface Options extends UniNamespace.RequestOptions {
  /**
   * 可以是：GET，POST，PUT，DELETE
   */
  method: MethodsEnum;
  header?: AnyObject;
}

export default function request(options: Options) {
  options.url = `/api${options.url}`;
  options.header = Object.assign(
    {
      "content-type": "application/json",
      authorization: tokenStorage.get(),
    },
    options.header
  );

  return uni.request(options).then((res) => {
    const { statusCode } = res;
    if (statusCode === 200 || statusCode === 201) {
      return res.data as any;
    } else {
      return Promise.reject(res.data);
    }
  });
}
