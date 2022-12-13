import Config, { ConfigValue } from "../config";

export default function SettingsMod() {
  const configDom: HTMLDivElement = document.getElementById("article") as HTMLDivElement;
  configDom.innerHTML += `<h1>Mod Einstellungen</h1>`;

  Object.keys(Config.INSTANCE).forEach((key) => {
    if (Config.INSTANCE[key]?.name == null) return;
    const config: ConfigValue = Config.INSTANCE[key];

    if (config.type == "boolean") {
      configDom.innerHTML += `<input type="checkbox" id="mod-config-${config.key}"/><label>${config.name}</label><br/>`;
    }
  });

  Object.keys(Config.INSTANCE).forEach((key) => {
    if (Config.INSTANCE[key]?.name == null) return;
    const config: ConfigValue = Config.INSTANCE[key];

    if (config.type == "boolean") {
      const el = document.getElementById("mod-config-" + config.key) as HTMLInputElement;
      el.checked = config.value;
      el.addEventListener("click", (e) => {
        console.log(el.checked)
        Config.INSTANCE[key].value = el.checked;
        Config.saveConfig();
      });
    }
  });
}