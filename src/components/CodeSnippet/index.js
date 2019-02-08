import CodeSnippet from "./CodeSnippet";
import { use, registerComponent } from "../../utils/plugins";
const Plugin = {
  install(Vue) {
    registerComponent(Vue, CodeSnippet);
  }
};
use(Plugin);
export default Plugin;
export { CodeSnippet };
