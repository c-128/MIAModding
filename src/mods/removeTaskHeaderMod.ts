export default function RemoveTaskHeaderMod() {
  if (document.querySelector("#article > div:nth-child(2) > h1") == null) return;
  
  document.querySelector("#article > div:nth-child(2) > div > div.notification")?.remove();
  document.querySelector("#article > div:nth-child(2) > div > p:nth-child(1)")?.remove();
  document.querySelector("#article > div:nth-child(2) > div > h2")?.remove();
  document.querySelector("#article > div:nth-child(2) > div > p:nth-child(1)")?.remove();
  document.querySelector("#article > div:nth-child(2) > div > p")?.remove();
}