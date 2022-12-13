(()=>{var r=class{constructor(e,t,n,c){this.key=e,this.name=t,this.type=n,this.value=c}},d=class{constructor(){this.darkmode=new r("darkmode","Darkmode","boolean",!0);this.showTodaysTask=new r("show-todays-task","Zeige heutige Aufgabe in Navigationsleiste","boolean",!0)}static loadConfig(){if(localStorage.getItem(this.LOCALSTORAGE_KEY)!=null){let e=JSON.parse(localStorage.getItem(this.LOCALSTORAGE_KEY));console.log(e),Object.keys(this.INSTANCE).forEach(t=>{this.INSTANCE[t]?.name!=null&&(this.INSTANCE[t].value=e[t])})}}static saveConfig(){let e={};Object.keys(this.INSTANCE).forEach(t=>{this.INSTANCE[t]?.name!=null&&(e[t]=this.INSTANCE[t].value)}),localStorage.setItem(this.LOCALSTORAGE_KEY,JSON.stringify(e))}},o=d;o.LOCALSTORAGE_KEY="miapp.config",o.INSTANCE=new d;function i(){var a=document.createElement("style");a.type="text/css",a.innerHTML=`
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
  `,document.getElementsByTagName("head")[0].appendChild(a)}function s(){let a=document.getElementById("article");a.innerHTML+="<h1>Mod Einstellungen</h1>",Object.keys(o.INSTANCE).forEach(e=>{if(o.INSTANCE[e]?.name==null)return;let t=o.INSTANCE[e];t.type=="boolean"&&(a.innerHTML+=`<input type="checkbox" id="mod-config-${t.key}"/><label>${t.name}</label><br/>`)}),Object.keys(o.INSTANCE).forEach(e=>{if(o.INSTANCE[e]?.name==null)return;let t=o.INSTANCE[e];if(t.type=="boolean"){let n=document.getElementById("mod-config-"+t.key);n.checked=t.value,n.addEventListener("click",c=>{console.log(n.checked),o.INSTANCE[e].value=n.checked,o.saveConfig()})}})}function l(){let a=document.getElementById("MainMenu");a.innerHTML+='<li><a id="mod-nav-task-today">Heutige Aufgabe</a></li>',document.getElementById("mod-nav-task-today").onclick=()=>{window.location.href="/de/kalender/7-9/"+new Date().getDate()}}o.loadConfig();window.location.href.includes("einstellungen")&&s();o.INSTANCE.darkmode.value&&i();o.INSTANCE.showTodaysTask.value&&l();})();
