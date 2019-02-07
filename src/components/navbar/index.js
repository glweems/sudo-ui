import Navbar from "#/navbar/Navbar";
import { use, registerComponent } from "@/utils/plugins";
const Plugin = {
  install(Vue) {
    registerComponent(Vue, Navbar);
  }
};
use(Plugin);
export default Plugin;
export { Navbar };
