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
    { "content-type": "application/json" },
    options.header
  );

  return uni.request(options).then((res) => {
    if (res.statusCode === 200) {
      return res.data;
    } else {
      return Promise.reject();
    }
  });
}
