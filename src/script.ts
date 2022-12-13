import Config from "./config";
import RemoveInfoMessagesMod from "./mods/removeInfoMessages";
import RemoveSocialMediaMod from "./mods/removeSocialMediaMod";
import RemoveTaskHeaderMod from "./mods/removeTaskHeaderMod";
import RemoveTaskSuggesterMod from "./mods/removeTaskSuggesterMod";
import SettingsMod from "./mods/settingsMod";
import ShowTodaysTaskMod from "./mods/showTodaysTaskMod";
import Theme from "./theme";

Config.loadConfig();
Theme.loadThemes();

if (window.location.href.includes("einstellungen")) SettingsMod();

if (Config.INSTANCE.removeInfoMessages.value) RemoveInfoMessagesMod();
if (Config.INSTANCE.removeSocialMedia.value) RemoveSocialMediaMod();
if (Config.INSTANCE.removeTaskHeader.value) RemoveTaskHeaderMod();
if (Config.INSTANCE.removeTaskSuggester.value) RemoveTaskSuggesterMod();
if (Config.INSTANCE.showTodaysTask.value) ShowTodaysTaskMod();

const style = document.createElement("style");
style.type = "text/css";
style.innerHTML = Theme.THEMES[Theme.SELECTED_THEME].css;
document.getElementsByTagName('head')[0].appendChild(style);

