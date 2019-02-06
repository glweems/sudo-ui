import Hero from "./Hero";

import { use, registerComponent } from "@/utils/plugins";

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Hero);
  }
};

use(Plugin);

export default Plugin;

export { Hero };
