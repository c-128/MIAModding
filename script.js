(()=>{var s=class{constructor(a,r,n,t){this.key=a,this.name=r,this.type=n,this.value=t}},m=class{constructor(){this.removeInfoMessages=new s("remove-info-messages",'Verstecke "Wichtige Informationen"',"boolean",!1);this.removeSocialMedia=new s("remove-social-media","Verstecke Social Media Werbung","boolean",!1);this.removeTaskHeader=new s("remove-task-header","Verstecke den Aufgabenkopf (Aufgabe bewerten, Als PDF herunterladen,...)","boolean",!1);this.removeTaskSuggester=new s("remove-task-suggester","Verstecke Aufgabe Vorschl\xE4ger","boolean",!0);this.showTodaysTask=new s("show-todays-task","Zeige heutige Aufgabe in Navigationsleiste","boolean",!0)}static loadConfig(){Object.keys(this.INSTANCE).forEach(a=>{this.INSTANCE[a]?.name!=null&&(this.INSTANCE[a].value=JSON.parse(localStorage.getItem("miapp.config."+this.INSTANCE[a].key))?.value)})}static saveConfig(){Object.keys(this.INSTANCE).forEach(a=>{this.INSTANCE[a]?.name!=null&&localStorage.setItem("miapp.config."+this.INSTANCE[a].key,JSON.stringify({value:this.INSTANCE[a].value}))})}},o=m;o.LOCALSTORAGE_KEY="miapp.config",o.INSTANCE=new m;function c(){window.location.href=="https://www.mathe-im-advent.de/de/konto/"&&document.querySelector("#article > div.article-header-wrapper > div > div > div.col-xs-12.col-md-5")?.remove()}function u(){let d=document.getElementById("social-media");d?.remove()}function v(){document.querySelector("#article > div:nth-child(2) > h1")!=null&&(document.querySelector("#article > div:nth-child(2) > div > div.notification")?.remove(),document.querySelector("#article > div:nth-child(2) > div > p:nth-child(1)")?.remove(),document.querySelector("#article > div:nth-child(2) > div > h2")?.remove(),document.querySelector("#article > div:nth-child(2) > div > p:nth-child(1)")?.remove(),document.querySelector("#article > div:nth-child(2) > div > p")?.remove())}function E(){document.querySelector("#article > div:nth-child(2) > h1")!=null&&(document.querySelector("#article > div:nth-child(2) > div > div > h4")?.remove(),document.querySelector("#article > div:nth-child(2) > div > div > p:nth-child(12)")?.remove())}var f=`:root {
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
}`,l=class{constructor(a,r){this.name=a,this.css=r}static loadThemes(){if(localStorage.getItem("miapp.themes")==null)return;let a=JSON.parse(localStorage.getItem("miapp.themes"));this.THEMES=[...this.THEMES,...a],this.SELECTED_THEME=parseInt(localStorage.getItem("miapp.themes.selected"))}static saveThemes(){localStorage.setItem("miapp.themes",JSON.stringify(this.THEMES.filter((a,r)=>r!=0&&r!=1))),localStorage.setItem("miapp.themes.selected",this.SELECTED_THEME.toString())}},e=l;e.SELECTED_THEME=0,e.THEMES=[new l("Light",""),new l("Dark",f)];function h(){let d=document.getElementById("article");d.innerHTML+="<h1>Mod Einstellungen</h1><h3>Generelle Einstellungen</h3>",Object.keys(o.INSTANCE).forEach(n=>{if(o.INSTANCE[n]?.name==null)return;let t=o.INSTANCE[n];t.type=="boolean"?d.innerHTML+=`<input type="checkbox" id="mod-config-${t.key}"/><label>${t.name}</label><br/>`:t.type=="string"?d.innerHTML+=`<label>${t.name}</label><input type="text" id="mod-config-${t.key}"/><br/>`:t.type=="text"&&(d.innerHTML+=`<label>${t.name}</label><br/><textarea cols="100" rows="20" id="mod-config-${t.key}"></textarea><br/>`)}),d.innerHTML+=`<h3>Visuelles</h3>
  <span>Theme:</span>
  <select id="mod-set-theme">
    ${e.THEMES.map((n,t)=>(console.log(t+":"+n.name+":"+e.SELECTED_THEME),`<option ${t==e.SELECTED_THEME?'selected="selected"':""}>${n.name}</option>`))}
  </select><br/>

  <span>Theme hinzuf\xFCen</span><br/>
  <textarea id="mod-add-theme-css" rows="50" cols="200"></textarea/><br/>
  <input type="text" id="mod-add-theme-name" placeholder="Name" /><br/>
  <input type="button" id="mod-add-theme-save" value="Save" />
  <input type="button" id="mod-add-theme" value="+" />
  `;let a=document.getElementById("mod-add-theme-css"),r=document.getElementById("mod-add-theme-name");a.value=e.THEMES[e.SELECTED_THEME].css,r.value=e.THEMES[e.SELECTED_THEME].name,document.getElementById("mod-set-theme").onchange=n=>{e.SELECTED_THEME=n?.target?.selectedIndex,e.saveThemes(),a.value=e.THEMES[e.SELECTED_THEME].css,r.value=e.THEMES[e.SELECTED_THEME].name},document.getElementById("mod-add-theme").onclick=n=>{if(e.THEMES.filter(t=>t.name==r.value).length>0){alert("Theme with name already exists!");return}e.THEMES.push(new e(r.value,a.value)),e.saveThemes()},document.getElementById("mod-add-theme-save").onclick=n=>{e.THEMES.forEach((t,i)=>{t.name==r.value&&(e.THEMES[i].css=a.value)}),e.saveThemes()},Object.keys(o.INSTANCE).forEach(n=>{if(o.INSTANCE[n]?.name==null)return;let t=o.INSTANCE[n],i=document.getElementById("mod-config-"+t.key);t.type=="boolean"?(i.checked=t.value,i.addEventListener("click",T=>{console.log(i.checked),o.INSTANCE[n].value=i.checked,o.saveConfig()})):t.type=="string"?(i.value=t.value,i.addEventListener("change",T=>{o.INSTANCE[n].value=i.value,o.saveConfig()})):t.type=="text"&&(i.value=t.value,i.addEventListener("keyup",T=>{o.INSTANCE[n].value=i.value,o.saveConfig()}))})}function g(){let d=document.getElementById("MainMenu");d.innerHTML+='<li><a id="mod-nav-task-today">Heutige Aufgabe</a></li>',document.getElementById("mod-nav-task-today").onclick=()=>{window.location.href="/de/kalender/7-9/"+new Date().getDate()}}o.loadConfig();e.loadThemes();window.location.href.includes("einstellungen")&&h();o.INSTANCE.removeInfoMessages.value&&c();o.INSTANCE.removeSocialMedia.value&&u();o.INSTANCE.removeTaskHeader.value&&v();o.INSTANCE.removeTaskSuggester.value&&E();o.INSTANCE.showTodaysTask.value&&g();var p=document.createElement("style");p.type="text/css";p.innerHTML=e.THEMES[e.SELECTED_THEME].css;document.getElementsByTagName("head")[0].appendChild(p);})();
