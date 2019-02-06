import Example from "./Example";

import { use, registerComponent } from "@/utils/plugins";

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Example);
  }
};

use(Plugin);

export default Plugin;

export { Example };
