export default function RemoveInfoMessagesMod() {
  if (window.location.href != "https://www.mathe-im-advent.de/de/konto/") return;

  document.querySelector("#article > div.article-header-wrapper > div > div > div.col-xs-12.col-md-5")?.remove();
}