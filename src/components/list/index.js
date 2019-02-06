import List from "./List";

import { use, registerComponent } from "@/utils/plugins";

const Plugin = {
  install(Vue) {
    registerComponent(Vue, List);
  }
};

use(Plugin);

export default Plugin;

export { List };
