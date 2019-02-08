import ExampleSection from "./ExampleSection";
import { use, registerComponent } from "../../utils/plugins";
const Plugin = {
  install(Vue) {
    registerComponent(Vue, ExampleSection);
  }
};
use(Plugin);
export default Plugin;
export { ExampleSection };
