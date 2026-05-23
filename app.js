// app.js

const bootText = document.getElementById("bootText");
const bootScreen = document.getElementById("bootScreen");
const mainOS = document.getElementById("mainOS");

const output = document.getElementById("output");

/* AUDIO */
const bootSfx = document.getElementById("bootSfx");
const keySfx = document.getElementById("keySfx");
const openSfx = document.getElementById("openSfx");

function play(sound) {
  if (!sound) return;

  sound.currentTime = 0;

  sound.play().catch(() => {});
}

/* BOOT SEQUENCE */
const bootLines = [
"ACE_OS V12 INITIALIZING...",
"CHECKING MEMORY BANKS.......... OK",
"LOADING GRAPHICS PIPELINE...... OK",
"VERIFYING USER INTERFACE....... OK",
"CONNECTING TERMINAL NODE....... OK",
"",
"BOOT COMPLETE"
];

let bootIndex = 0;

function runBoot() {

  if (bootIndex === 0) {
    play(bootSfx);
  }

  if (bootIndex < bootLines.length) {

    bootText.innerText += bootLines[bootIndex] + "\n";

    bootIndex++;

    setTimeout(runBoot, 350);

  } else {

    setTimeout(() => {

      bootScreen.style.transition = "0.8s";
      bootScreen.style.opacity = "0";

      setTimeout(() => {

        bootScreen.style.display = "none";
        mainOS.style.display = "block";

      }, 800);

    }, 700);

  }
}

window.onload = runBoot;

/* CONTENT */
const pages = {

  projects: `
<div class="line">> PROJECT DATABASE</div>

<div class="line">
TOTAL MAYHEM
</div>
<div class="line">
Round-based chaos arena game built around randomized weapons, fast movement, and PvP unpredictability.
</div>
<div class="line">
Focus: gameplay feel, physics chaos, replayability systems.
</div>

<div class="line">
RAGDOLL CORE
</div>
<div class="line">
Experimental ragdoll physics system designed for Roblox character interaction and movement feel.
</div>

<div class="line">
AI ANIMATION TOOL
</div>
<div class="line">
AI-assisted animation workflow concept for generating base keyframes and motion logic.
</div>
`,

  about: `
<div class="line">> PROFILE</div>

<div class="line">
Game developer focused on building systems that feel alive rather than static.
</div>

<div class="line">
I design gameplay around physics, movement, and player unpredictability.
</div>

<div class="line">
Currently exploring multiplayer mechanics, animation systems, and interactive game logic.
</div>
`,

  skills: `
<div class="line">> TECHNICAL PROFILE</div>

<div class="line">
ENGINEERING — 87%
System design, gameplay logic, mechanics architecture
</div>

<div class="line">
LUA — 82%
Roblox scripting, gameplay systems, tools
</div>

<div class="line">
GAME DESIGN — 74%
Mechanics, pacing, player engagement loops
</div>

<div class="line">
PHYSICS SYSTEMS — 68%
Ragdoll behavior, movement feel, interaction systems
</div>

<div class="line">
UI / UX — 55%
Interface layout, readability, player flow
</div>
`,

  contact: `
<div class="line">> CONTACT NODE</div>

<div class="line">
PRIMARY EMAIL:
floridaman417@proton.me
</div>

<div class="line">
YOUTUBE:
youtube.com/@Ac3Pr06uctions
</div>

<div class="line">
STATUS:
Available for collaboration / dev work
</div>
`
};
/* COMMAND SYSTEM */
function runCommand(cmd) {

  play(keySfx);
  play(openSfx);

  output.style.opacity = "0";

  setTimeout(() => {

    if (cmd === "clear") {

      output.innerHTML = `
      <div class="line">
      > TERMINAL CLEARED
      </div>
      `;

    } else {

      output.innerHTML = pages[cmd];

    }

    output.style.opacity = "1";

  }, 150);

}
