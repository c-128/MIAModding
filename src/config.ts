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

  removeInfoMessages = new ConfigValue("remove-info-messages", "Verstecke \"Wichtige Informationen\"", "boolean", false);
  removeSocialMedia = new ConfigValue("remove-social-media", "Verstecke Social Media Werbung", "boolean", false);
  removeTaskHeader = new ConfigValue("remove-task-header", "Verstecke den Aufgabenkopf (Aufgabe bewerten, Als PDF herunterladen,...)", "boolean", false);
  removeTaskSuggester = new ConfigValue("remove-task-suggester", "Verstecke Aufgabe Vorschläger", "boolean", true);
  showTodaysTask = new ConfigValue("show-todays-task", "Zeige heutige Aufgabe in Navigationsleiste", "boolean", true);

  static loadConfig() {
    Object.keys(this.INSTANCE).forEach((key) => {
      if (this.INSTANCE[key]?.name == null) return;
      this.INSTANCE[key].value = JSON.parse(localStorage.getItem("miapp.config." + this.INSTANCE[key].key) as string)?.value;
    });
  }

  static saveConfig() {
    Object.keys(this.INSTANCE).forEach((key) => {
      if (this.INSTANCE[key]?.name == null) return;
      localStorage.setItem("miapp.config." + this.INSTANCE[key].key, JSON.stringify({
        value: this.INSTANCE[key].value
      }));
    });
  }
}

