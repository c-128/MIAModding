export default function DarkmodeMod() {
  const style = document.createElement("style");
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