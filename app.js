const bootText = document.getElementById("bootText");
const bootScreen = document.getElementById("bootScreen");
const mainOS = document.getElementById("mainOS");
const output = document.getElementById("output");

const bootSfx = document.getElementById("bootSfx");

/* BOOT */
const bootLines = [
"ACE_OS V12 BOOTING...",
"CHECKING SYSTEM OK",
"LOADING UI OK",
"STARTING TERMINAL OK",
"BOOT COMPLETE"
];

let i = 0;

function playBoot() {
  if (i === 0) {
    bootSfx.play().catch(()=>{});
  }

  if (i < bootLines.length) {
    bootText.innerText += bootLines[i] + "\n";
    i++;
    setTimeout(playBoot, 400);
  } else {
    setTimeout(() => {
      bootScreen.style.display = "none";
      mainOS.style.display = "block";
    }, 800);
  }
}

window.onload = playBoot;

/* =========================
   IMPORTANT FIX HERE
========================= */
window.runCommand = function(cmd) {

  let response = "";

  switch(cmd) {

    case "projects":
      response = `
<div class="line">TOTAL MAYHEM — W.I.P</div>
<div class="line">RAGDOLL CORE — COMPLETE</div>
<div class="line">AI ANIMATION TOOL — CONCEPT</div>
`;
      break;

    case "about":
      response = `<div class="line">Game dev focused on systems & physics</div>`;
      break;

    case "skills":
      response = `
<div class="line">Engineering: 87%</div>
<div class="line">Lua: 82%</div>
<div class="line">Design: 74%</div>
`;
      break;

    case "contact":
      response = `
<div class="line">Email: floridaman417@proton.me</div>
<div class="line">YouTube: youtube.com/@Ac3Pr06uctions</div>
`;
      break;

    case "clear":
      response = `<div class="line">> CLEARED</div>`;
      break;

    default:
      response = `<div class="line">> UNKNOWN COMMAND</div>`;
  }

  output.innerHTML = response;
};
