export default function RemoveTaskSuggesterMod() {
  if (document.querySelector("#article > div:nth-child(2) > h1") == null) return;
  
  document.querySelector("#article > div:nth-child(2) > div > div > h4")?.remove();
  document.querySelector("#article > div:nth-child(2) > div > div > p:nth-child(12)")?.remove();
}