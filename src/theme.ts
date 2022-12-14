const DARK_MODE_CSS = `:root {
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

input {
  background-color: var(--mod-dark) !important;
  color: var(--mod-color);
}`

export default class Theme {
  static SELECTED_THEME: number = 0;
  static THEMES: Theme[] = [
    new Theme("Light", ""),
    new Theme("Dark", DARK_MODE_CSS)
  ];

  name: string;
  css: string;

  constructor(name: string, css: string) {
    this.name = name;
    this.css = css;
  }

  static loadThemes() {
    if (localStorage.getItem("miapp.themes") == null) return;
    const themes = JSON.parse(localStorage.getItem("miapp.themes") as string);

    this.THEMES = [...this.THEMES, ...themes];
    this.SELECTED_THEME = parseInt(localStorage.getItem("miapp.themes.selected") as string);
  }

  static saveThemes() {
    localStorage.setItem("miapp.themes", JSON.stringify(this.THEMES.filter((t, i) => i != 0 && i != 1)));
    localStorage.setItem("miapp.themes.selected", this.SELECTED_THEME.toString());
  }
}