import { onBackPress, onUnload } from "@dcloudio/uni-app";

export default function (callback: () => any) {
  // #ifdef MP-WEIXIN
  onUnload(() => {
    return callback();
  });
  // #endif
  // #ifndef MP-WEIXIN
  onBackPress(() => {
    return callback();
  });
  // #endif
}
