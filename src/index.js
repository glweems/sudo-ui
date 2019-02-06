import "./scss/sudo-ui.scss";

import * as components from "./components";

import config, { setOptions } from "./utils/config";
import { use, registerComponentProgrammatic } from "./utils/plugins";

const SudoUi = {
  install(Vue, options = {}) {
    // Options
    setOptions(Object.assign(config, options));
    // Components
    for (let componentKey in components) {
      Vue.use(components[componentKey]);
    }
    // Config component
    const SudoUiProgrammatic = {
      setOptions(options) {
        setOptions(Object.assign(config, options));
      }
    };
    registerComponentProgrammatic(Vue, "$sudoui", SudoUiProgrammatic);
  }
};

use(SudoUi);

export default SudoUi;
