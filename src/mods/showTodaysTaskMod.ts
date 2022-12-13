export default function ShowTodaysTaskMod() {
  const navbarElement = document.getElementById("MainMenu") as HTMLDivElement;
  navbarElement.innerHTML += `<li><a id="mod-nav-task-today">Heutige Aufgabe</a></li>`;

  (document.getElementById("mod-nav-task-today") as HTMLAnchorElement).onclick = () => {
    window.location.href = "/de/kalender/7-9/" + new Date().getDate()
  };
}