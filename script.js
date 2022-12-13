(()=>{var r=class{constructor(t,e,n,d){this.key=t,this.name=e,this.type=n,this.value=d}},i=class{constructor(){this.darkmode=new r("darkmode","Darkmode","boolean",!0);this.removeSocialMedia=new r("remove-social-media","Verstecke Social Media Werbung","boolean",!1);this.removeTaskHeader=new r("remove-task-header","Verstecke den Aufgabenkopf (Aufgabe bewerten, Als PDF herunterladen,...)","boolean",!1);this.removeTaskSuggester=new r("remove-task-suggester","Verstecke Aufgabe Vorschl\xE4ger","boolean",!0);this.showTodaysTask=new r("show-todays-task","Zeige heutige Aufgabe in Navigationsleiste","boolean",!0);this.customCss=new r("custom-css","Eigenes CSS","text","")}static loadConfig(){if(localStorage.getItem(this.LOCALSTORAGE_KEY)!=null){let t=JSON.parse(localStorage.getItem(this.LOCALSTORAGE_KEY));console.log(t),Object.keys(this.INSTANCE).forEach(e=>{this.INSTANCE[e]?.name!=null&&(this.INSTANCE[e].value=t[e])})}}static saveConfig(){let t={};Object.keys(this.INSTANCE).forEach(e=>{this.INSTANCE[e]?.name!=null&&(t[e]=this.INSTANCE[e].value)}),localStorage.setItem(this.LOCALSTORAGE_KEY,JSON.stringify(t))}},o=i;o.LOCALSTORAGE_KEY="miapp.config",o.INSTANCE=new i;function l(){let a=document.createElement("style");a.type="text/css",a.innerHTML=`
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
  `,document.getElementsByTagName("head")[0].appendChild(a)}function c(){let a=document.getElementById("social-media");a?.remove()}function s(){document.querySelector("#article > div:nth-child(2) > h1")!=null&&(document.querySelector("#article > div:nth-child(2) > div > div.notification")?.remove(),document.querySelector("#article > div:nth-child(2) > div > p:nth-child(1)")?.remove(),document.querySelector("#article > div:nth-child(2) > div > h2")?.remove(),document.querySelector("#article > div:nth-child(2) > div > p:nth-child(1)")?.remove(),document.querySelector("#article > div:nth-child(2) > div > p")?.remove())}function m(){document.querySelector("#article > div:nth-child(2) > h1")!=null&&(document.querySelector("#article > div:nth-child(2) > div > div > h4")?.remove(),document.querySelector("#article > div:nth-child(2) > div > div > p:nth-child(12)")?.remove())}function u(){let a=document.getElementById("article");a.innerHTML+="<h1>Mod Einstellungen</h1>",Object.keys(o.INSTANCE).forEach(t=>{if(o.INSTANCE[t]?.name==null)return;let e=o.INSTANCE[t];e.type=="boolean"?a.innerHTML+=`<input type="checkbox" id="mod-config-${e.key}"/><label>${e.name}</label><br/>`:e.type=="string"?a.innerHTML+=`<label>${e.name}</label><input type="text" id="mod-config-${e.key}"/><br/>`:e.type=="text"&&(a.innerHTML+=`<label>${e.name}</label><br/><textarea cols="100" rows="20" id="mod-config-${e.key}"></textarea><br/>`)}),Object.keys(o.INSTANCE).forEach(t=>{if(o.INSTANCE[t]?.name==null)return;let e=o.INSTANCE[t],n=document.getElementById("mod-config-"+e.key);e.type=="boolean"?(n.checked=e.value,n.addEventListener("click",d=>{console.log(n.checked),o.INSTANCE[t].value=n.checked,o.saveConfig()})):e.type=="string"?(n.value=e.value,n.addEventListener("change",d=>{o.INSTANCE[t].value=n.value,o.saveConfig()})):e.type=="text"&&(n.value=e.value,n.addEventListener("keyup",d=>{o.INSTANCE[t].value=n.value,o.saveConfig()}))})}function v(){let a=document.getElementById("MainMenu");a.innerHTML+='<li><a id="mod-nav-task-today">Heutige Aufgabe</a></li>',document.getElementById("mod-nav-task-today").onclick=()=>{window.location.href="/de/kalender/7-9/"+new Date().getDate()}}o.loadConfig();window.location.href.includes("einstellungen")&&u();o.INSTANCE.darkmode.value&&l();o.INSTANCE.removeSocialMedia.value&&c();o.INSTANCE.removeTaskHeader.value&&s();o.INSTANCE.removeTaskSuggester.value&&m();o.INSTANCE.showTodaysTask.value&&v();var g=document.createElement("style");g.type="text/css";g.innerHTML=o.INSTANCE.customCss.value;document.getElementsByTagName("head")[0].appendChild(g);})();
