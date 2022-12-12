// ==UserScript==
// @name     MIA++
// @version  1
// @grant    none
// ==/UserScript==
if (window.location.host != "www.mathe-im-advent.de") return;

let CONFIG = {
  language: "german",
  nav: {
    show_task_today: true,
  },
  dark_mode: false
};

const LANGUAGE_BUNDLE = {
  german: {
    "nav.task_today": "Heutige Aufgabe",

    "settings.show_task_today": "Zeige Heutige Aufgabe Button",
    "settings.dark_mode": "Dunkel Modus"
  },
  english: {
    "nav.task_today": "Todays task",

    "settings.show_task_today": "Shows todays task button",
    "settings.dark_mode": "Dark mode"
  }
};

loadConfig();

// Navigationsleiste
const navbarElement = document.getElementById("MainMenu");
if (CONFIG.nav.show_task_today) {
  navbarElement.innerHTML += `<li><a id="mod-nav-task-today">${t("nav.task_today")}</a></li>`;

  document.getElementById("mod-nav-task-today").onclick = () => {
    window.location.href = "/de/kalender/7-9/" + new Date().getDate()
  };
}

// Dunkel Modus
if (CONFIG.dark_mode) {
  var style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = `
  :root {
    --mod-dark-card: #111;
    --mod-dark-card-shadow: #111;

    --mod-color: #ddd;
    --mod-dark: #000;

    --mod-nav: #111;

    --mod-button: #00a3da;
    --mod-button-hover: #0090c1;
    --mod-button-disabled: #777777;
    --mod-button-disabled-hover: #777777;

    --mod-solution-bg: #111;
    --mod-solution-shadow: #222;
    --mod-solution-selected: #aac4cf;
  }

  /* Card */
  .paper { background-color: var(--mod-dark-card); }
  .paper:hover { box-shadow: .5em .5em .5em var(--mod-dark-card-shadow); }
  .message { background-color: var(--mod-card-dark) !important; }
  .message:hover { box-shadow: .5em .5em .5em var(--mod-dark-card-shadow); }

  /* Pages */
  .infomessages * { background-color: var(--mod-dark) !important; }
  #article, #page { background-color: var(--mod-dark) !important; }

  /* Navbar */
  #nav * { background-color: var(--mod-nav) !important; }
  .dropdown-menu * { background-color: var(--mod-nav) !important; }

  /* Buttons */
  .button { background-color: var(--mod-button) !important; }
  .button:hover { background-color: var(--mod-button-hover) !important; }

  .button-inept { background-color: var(--mod-button-disabled) !important; }
  .button-inept:hover { background-color: var(--mod-button-disabled-hover) !important; }
  .button-solve-inactive { background-color: var(--mod-button-disabled) !important; }
  .button-solve-inactive:hover { background-color: var(--mod-button-disabled-hover) !important; }

  /* Solutions */
  .solution {
    background-color: var(--mod-solution-bg) !important;
    box-shadow: inset 1px 1px 3px var(--mod-solution-shadow) !important;
  }
  .solutions-selected { background-color: var(--mod-solution-selected) !important; }
  `;
  document.getElementsByTagName('head')[0].appendChild(style);
}

// Einstellungen
if (window.location.href.includes("einstellungen")) {
  document.getElementById("article").innerHTML += `
  <h1>Mod Einstellungen</h1>

  <input type="checkbox" id="mod-settings-show-task-today"><label>${t("settings.show_task_today")}</label/><br/>

  <input type="checkbox" id="mod-settings-dark-mode"><label>${t("settings.dark_mode")}</label/>
  `;
  const showTaskToday = document.getElementById("mod-settings-show-task-today"), darkMode = document.getElementById("mod-settings-dark-mode");

  showTaskToday.checked = CONFIG.nav.show_task_today;
  showTaskToday.onchange = (e) => {
    CONFIG.nav.show_task_today = e.target.checked;
    saveConfig();
  };

  darkMode.checked = CONFIG.dark_mode;
  darkMode.onchange = (e) => {
    CONFIG.dark_mode = e.target.checked;
    saveConfig();
  };
}

function saveConfig() {
  localStorage.setItem("mod.config", JSON.stringify(CONFIG));
}

function loadConfig() {
  if (localStorage.getItem("mod.config") != null)
    CONFIG = Object.assign(CONFIG, JSON.parse(localStorage.getItem("mod.config")));
}

function t(key) {
  if (LANGUAGE_BUNDLE[CONFIG.language][key]) return LANGUAGE_BUNDLE[CONFIG.language][key];
  else "missing translation: " + key;
}