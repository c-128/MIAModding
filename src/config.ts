export class ConfigValue {

  key: string;
  name: string;
  type: "boolean" | "string" | "text";
  value: any;

  constructor(key: string, name: string, type: "boolean" | "string" | "text", defaultValue: any) {
    this.key = key;
    this.name = name;
    this.type = type;
    this.value = defaultValue;
  }
}

export default class Config {

  static LOCALSTORAGE_KEY = "miapp.config";
  static INSTANCE = new Config();

  darkmode = new ConfigValue("darkmode", "Darkmode", "boolean", true);
  removeInfoMessages = new ConfigValue("remove-info-messages", "Verstecke \"Wichtige Informationen\"", "boolean", false);
  removeSocialMedia = new ConfigValue("remove-social-media", "Verstecke Social Media Werbung", "boolean", false);
  removeTaskHeader = new ConfigValue("remove-task-header", "Verstecke den Aufgabenkopf (Aufgabe bewerten, Als PDF herunterladen,...)", "boolean", false);
  removeTaskSuggester = new ConfigValue("remove-task-suggester", "Verstecke Aufgabe Vorschläger", "boolean", true);
  showTodaysTask = new ConfigValue("show-todays-task", "Zeige heutige Aufgabe in Navigationsleiste", "boolean", true);
  customCss = new ConfigValue("custom-css", "Eigenes CSS", "text", "");

  static loadConfig() {
    if (localStorage.getItem(this.LOCALSTORAGE_KEY) != null) {
      const json = JSON.parse(localStorage.getItem(this.LOCALSTORAGE_KEY) as string);
      console.log(json);
      Object.keys(this.INSTANCE).forEach((key) => {
        if (this.INSTANCE[key]?.name == null) return;
        this.INSTANCE[key].value = json[key];
      });
    }
  }

  static saveConfig() {
    const toSave = {};
    Object.keys(this.INSTANCE).forEach((key) => {
      if (this.INSTANCE[key]?.name == null) return;
      toSave[key] = this.INSTANCE[key].value;
    });
    localStorage.setItem(this.LOCALSTORAGE_KEY, JSON.stringify(toSave));
  }
}

