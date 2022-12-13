export default function RemoveSocialMediaMod() {
  const el = document.getElementById("social-media") as HTMLDivElement;
  if (el == null) return;
  el.remove();
}