import Config, { ConfigValue } from "../config";
import Theme from "../theme";

export default function SettingsMod() {
  const configDom: HTMLDivElement = document.getElementById("article") as HTMLDivElement;
  configDom.innerHTML += `<h1>Mod Einstellungen</h1><h3>Generelle Einstellungen</h3>`;

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

  configDom.innerHTML += `<h3>Visuelles</h3>
  <span>Theme:</span>
  <select id="mod-set-theme">
    ${Theme.THEMES.map((t, i) => {
      console.log(i + ":" + t.name + ":" + Theme.SELECTED_THEME)
      return `<option ${i == Theme.SELECTED_THEME ? 'selected="selected"' : ""}>${t.name}</option>`
    })}
  </select><br/>

  <span>Theme hinzufüen</span><br/>
  <textarea id="mod-add-theme-css" rows="50" cols="200"></textarea/><br/>
  <input type="text" id="mod-add-theme-name" placeholder="Name" /><br/>
  <input type="button" id="mod-add-theme-save" value="Save" />
  <input type="button" id="mod-add-theme" value="+" />
  `;
  const addThemeCss = document.getElementById("mod-add-theme-css") as HTMLTextAreaElement;
  const addThemeName = document.getElementById("mod-add-theme-name") as HTMLInputElement;

  addThemeCss.value = Theme.THEMES[Theme.SELECTED_THEME].css;
  addThemeName.value = Theme.THEMES[Theme.SELECTED_THEME].name;

  (document.getElementById("mod-set-theme") as HTMLSelectElement).onchange = (e) => {
    Theme.SELECTED_THEME = e?.target?.selectedIndex;
    Theme.saveThemes();

    addThemeCss.value = Theme.THEMES[Theme.SELECTED_THEME].css;
    addThemeName.value = Theme.THEMES[Theme.SELECTED_THEME].name;
  }

  (document.getElementById("mod-add-theme") as HTMLInputElement).onclick = (e) => {
    if (Theme.THEMES.filter((t) => t.name == addThemeName.value).length > 0) {
      alert("Theme with name already exists!");
      return;
    }
    Theme.THEMES.push(new Theme(addThemeName.value, addThemeCss.value));
    Theme.saveThemes();
  };

  (document.getElementById("mod-add-theme-save") as HTMLInputElement).onclick = (e) => {
    Theme.THEMES.forEach((t, i) => {
      if (t.name == addThemeName.value) {
        Theme.THEMES[i].css = addThemeCss.value;
      }
    });
    Theme.saveThemes();
  };

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