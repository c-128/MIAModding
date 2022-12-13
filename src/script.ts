import Config from "./config";
import DarkmodeMod from "./mods/darkmodeMod";
import SettingsMod from "./mods/settingsMod";
import ShowTodaysTaskMod from "./mods/showTodaysTaskMod";

Config.loadConfig();

if (window.location.href.includes("einstellungen")) SettingsMod();
if (Config.INSTANCE.darkmode.value) DarkmodeMod();
if (Config.INSTANCE.showTodaysTask.value) ShowTodaysTaskMod();
console.log(Config.INSTANCE)