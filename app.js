/* =========================
   ACE_OS BOOT SYSTEM
========================= */

const bootText = document.getElementById("bootText");
const bootScreen = document.getElementById("bootScreen");
const mainOS = document.getElementById("mainOS");
const output = document.getElementById("output");

const bootSfx = document.getElementById("bootSfx");

/* =========================
   BOOT SEQUENCE
========================= */

const bootLines = [
  "ACE_OS V12 BOOTING...",
  "INITIALIZING SYSTEM CORE..... OK",
  "LOADING UI MODULES.......... OK",
  "SYNCING TERMINAL NODE....... OK",
  "OPTIMIZING DISPLAY.......... OK",
  "",
  "BOOT COMPLETE"
];

let i = 0;

function playBoot() {
  if (i === 0) {
    bootSfx.play().catch(() => {});
  }

  if (i < bootLines.length) {
    bootText.innerText += bootLines[i] + "\n";
    i++;
    setTimeout(playBoot, 350);
  } else {
    setTimeout(() => {
      bootScreen.style.opacity = "0";

      setTimeout(() => {
        bootScreen.style.display = "none";
        mainOS.style.display = "block";
      }, 700);

    }, 500);
  }
}

window.onload = playBoot;

/* =========================
   GLOBAL COMMAND SYSTEM
   (THIS FIXES YOUR ERROR)
========================= */

window.runCommand = function(cmd) {

  let response = "";

  switch(cmd) {

    /* ================= PROJECTS ================= */
    case "projects":
      response = `
<div class="line">> PROJECT DATABASE</div>

<div class="line">
TOTAL MAYHEM — W.I.P
</div>
<div class="line">
Fast-paced chaos arena game focused on randomized weapons, physics-based combat, and replayable match design. Built to create unpredictable gameplay loops where no two rounds feel the same.
</div>
<div class="line">
Status: Active development | Core systems being refined
</div>

<br>

<div class="line">
RAGDOLL CORE — COMPLETE
</div>
<div class="line">
Custom ragdoll physics system designed to improve movement feel and character interaction. Focused on making physics-driven gameplay more responsive and immersive.
</div>
<div class="line">
Status: Stable release | Fully completed system
</div>

<br>

<div class="line">
AI ANIMATION TOOL — CONCEPT
</div>
<div class="line">
Experimental idea for AI-assisted animation generation to speed up keyframe creation and improve prototyping workflow for game development.
</div>
<div class="line">
Status: Concept phase | Not implemented
</div>
`;
      break;

    /* ================= ABOUT ================= */
    case "about":
      response = `
<div class="line">> PROFILE NODE</div>

<div class="line">
I’m a game developer focused on building systems that feel responsive, dynamic, and unpredictable. I enjoy designing mechanics that create emergent gameplay rather than scripted outcomes.
</div>

<div class="line">
Most of my work revolves around physics systems, movement design, and multiplayer gameplay loops. I like experimenting with how players interact with environments and how simple mechanics combine into complex behavior.
</div>

<div class="line">
My long-term goal is to become a systems-focused developer, building games that feel alive, replayable, and technically interesting under the hood.
</div>
`;
      break;

    /* ================= SKILLS ================= */
    case "skills":
      response = `
<div class="line">> TECH PROFILE</div>

<div class="line">Engineering: 87% — system architecture, mechanics design</div>
<div class="line">Lua: 82% — Roblox scripting, gameplay systems</div>
<div class="line">Game Design: 74% — loops, pacing, engagement</div>
<div class="line">Physics Systems: 68% — ragdolls, movement, interaction</div>
<div class="line">UI/UX: 55% — layout, flow, usability</div>
`;
      break;

    /* ================= CONTACT ================= */
    case "contact":
      response = `
<div class="line">> CONTACT NODE</div>

<div class="line">Email: floridaman417@proton.me</div>
<div class="line">YouTube: youtube.com/@Ac3Pr06uctions</div>
<div class="line">Status: Available for collaboration / dev work</div>
`;
      break;

    /* ================= CLEAR ================= */
    case "clear":
      response = `<div class="line">> TERMINAL CLEARED</div>`;
      break;

    /* ================= DEFAULT ================= */
    default:
      response = `<div class="line">> UNKNOWN COMMAND</div>`;
      break;
  }

  output.innerHTML = response;
};
