import DocsSection from "./DocsSection";

import { use, registerComponent } from "../../utils/plugins";

const Plugin = {
  install(Vue) {
    registerComponent(Vue, DocsSection);
  }
};

use(Plugin);

export default Plugin;

export { DocsSection };
