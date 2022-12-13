export class ConfigValue {

  key: string;
  name: string;
  type: "boolean" | "string";
  value: any;

  constructor(key: string, name: string, type: "boolean" | "string", defaultValue: any) {
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
  showTodaysTask = new ConfigValue("show-todays-task", "Zeige heutige Aufgabe in Navigationsleiste", "boolean", true);

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

