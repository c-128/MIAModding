import Config from "./config";
import DarkmodeMod from "./mods/darkmodeMod";
import RemoveSocialMediaMod from "./mods/removeSocialMediaMod";
import RemoveTaskHeaderMod from "./mods/removeTaskHeaderMod";
import RemoveTaskSuggesterMod from "./mods/removeTaskSuggesterMod";
import SettingsMod from "./mods/settingsMod";
import ShowTodaysTaskMod from "./mods/showTodaysTaskMod";

Config.loadConfig();

if (window.location.href.includes("einstellungen")) SettingsMod();

if (Config.INSTANCE.darkmode.value) DarkmodeMod();
if (Config.INSTANCE.removeSocialMedia.value) RemoveSocialMediaMod();
if (Config.INSTANCE.removeTaskHeader.value) RemoveTaskHeaderMod();
if (Config.INSTANCE.removeTaskSuggester.value) RemoveTaskSuggesterMod();
if (Config.INSTANCE.showTodaysTask.value) ShowTodaysTaskMod();
