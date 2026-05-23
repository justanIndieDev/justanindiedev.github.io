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
<div class="line">
> PROJECT DATABASE
</div>

<div class="line">
[FILE_001] TOTAL MAYHEM
</div>

<div class="line">
[FILE_002] RAGDOLL CORE
</div>

<div class="line">
[FILE_003] AI ANIMATION TOOL
</div>
`,

  about: `
<div class="line">
> PROFILE
</div>

<div class="line">
Game developer focused on:
</div>

<div class="line">
- physics systems
</div>

<div class="line">
- multiplayer chaos
</div>

<div class="line">
- immersive gameplay
</div>
`,

  skills: `
<div class="line">
> SKILLS
</div>

<div class="line">
Engineering: 87%
</div>

<div class="line">
Lua: 82%
</div>

<div class="line">
Game Design: 74%
</div>

<div class="line">
Physics: 68%
</div>

<div class="line">
UI/UX: 55%
</div>
`,

  contact: `
<div class="line">
> CONTACT
</div>

<div class="line">
EMAIL:
</div>

<div class="line">
floridaman417@proton.me
</div>

<div class="line">
YOUTUBE:
</div>

<div class="line">
youtube.com/@Ac3Pr06uctions
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
