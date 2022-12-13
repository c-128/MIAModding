import Config, { ConfigValue } from "../config";

export default function SettingsMod() {
  const configDom: HTMLDivElement = document.getElementById("article") as HTMLDivElement;
  configDom.innerHTML += `<h1>Mod Einstellungen</h1>`;

  Object.keys(Config.INSTANCE).forEach((key) => {
    if (Config.INSTANCE[key]?.name == null) return;
    const config: ConfigValue = Config.INSTANCE[key];

    if (config.type == "boolean") {
      configDom.innerHTML += `<input type="checkbox" id="mod-config-${config.key}"/><label>${config.name}</label><br/>`;
    } else if (config.type == "string") {
      configDom.innerHTML += `<label>${config.name}</label><input type="text" id="mod-config-${config.key}"/><br/>`;
    } else if (config.type == "text") {
      configDom.innerHTML += `<label>${config.name}</label><br/><textarea cols="100" rows="20" id="mod-config-${config.key}"></textarea><br/>`;
    }
  });

  Object.keys(Config.INSTANCE).forEach((key) => {
    if (Config.INSTANCE[key]?.name == null) return;
    const config: ConfigValue = Config.INSTANCE[key];
    const el = document.getElementById("mod-config-" + config.key) as HTMLInputElement;

    if (config.type == "boolean") {
      el.checked = config.value;
      el.addEventListener("click", (e) => {
        console.log(el.checked)
        Config.INSTANCE[key].value = el.checked;
        Config.saveConfig();
      });
    } else if (config.type == "string") {
      el.value = config.value;
      el.addEventListener("change", (e) => {
        Config.INSTANCE[key].value = el.value;
        Config.saveConfig();
      });
    } else if (config.type == "text") {
      el.value = config.value;
      el.addEventListener("keyup", (e) => {
        Config.INSTANCE[key].value = el.value;
        Config.saveConfig();
      });
    } 
  });
}