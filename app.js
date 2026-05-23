let devUnlocked = false;

/* =========================
   SFX
========================= */
const sfxBoot = document.getElementById("sfxBoot");
const sfxKey = document.getElementById("sfxKey");
const sfxError = document.getElementById("sfxError");
const sfxGlitch = document.getElementById("sfxGlitch");

function play(sfx) {
  if (!sfx) return;
  sfx.currentTime = 0;
  sfx.play().catch(()=>{});
}

/* =========================
   BOOT SEQUENCE
========================= */
const bootLines = [
"ACE_OS V12 INITIALIZING...",
"CHECKING SYSTEM CORE........ OK",
"LOADING MODULES............ OK",
"SECURITY LAYER............. OK",
"GRAPHICS PIPELINE......... OK",
"DEV NODE................... STANDBY",
"",
"BOOT COMPLETE"
];

let i = 0;

function runBoot() {
  const bootText = document.getElementById("bootText");
  const bootScreen = document.getElementById("bootScreen");
  const mainApp = document.getElementById("mainApp");

  play(sfxBoot);

  if (i < bootLines.length) {
    bootText.innerText += bootLines[i] + "\n";
    i++;
    setTimeout(runBoot, 250);
  } else {
    setTimeout(() => {
      bootScreen.style.opacity = "0";
      setTimeout(() => {
        bootScreen.style.display = "none";
        mainApp.style.display = "block";
      }, 600);
    }, 800);
  }
}

window.onload = runBoot;

/* =========================
   LOGIN SYSTEM
========================= */
function tryUnlockDev() {
  const input = document.getElementById("devPass");
  const msg = document.getElementById("loginMsg");

  const code = input.value.trim();

  if (code === "AC30F5@D35") {
    devUnlocked = true;
    msg.innerText = "> ACCESS GRANTED — DEV MODE ENABLED";
    play(sfxKey);
    runCmd("dev");
  } else {
    msg.innerText = "> ACCESS DENIED";
    play(sfxError);
    input.value = "";
  }
}

/* =========================
   TERMINAL
========================= */
const output = document.getElementById("output");
const input = document.getElementById("cmdInput");

function print(text) {
  output.innerText = text;
}

function runCmd(cmdRaw) {
  let cmd = cmdRaw.toLowerCase().trim();
  let response = "";

  switch(cmd) {

    case "help":
      response = `
COMMANDS:
projects
about
skills
contact
dev
decrypt
clear
      `;
      break;

    case "projects":
      response = `
[FILE_001] TOTAL MAYHEM
[FILE_002] RAGDOLL CORE
[FILE_003] AI ANIMATION TOOL
      `;
      break;

    case "about":
      response = `
Game dev + systems engineering.
Focus: physics + chaos + multiplayer systems.
      `;
      break;

    case "skills":
      response = `
Engineering     : 87%
Lua             : 82%
Game Design     : 74%
Physics         : 68%
UI/UX           : 55%
      `;
      break;

    case "contact":
      response = `
EMAIL: floridaman417@proton.me
YOUTUBE: youtube.com/@Ac3Pr06uctions
      `;
      break;

    case "clear":
      response = "> CLEARED";
      break;

    /* DEV MODE */
    case "dev":
      if (!devUnlocked) {
        response = "> ENTER SECURITY KEY ABOVE";
      } else {
        response = `
DEV MODE ACTIVE

TOOLS:
system_overclock
glitch_ui
spawn_noise
reset_system
        `;
      }
      break;

    case "system_overclock":
      if (devUnlocked) {
        document.body.style.filter = "hue-rotate(140deg)";
        play(sfxGlitch);
        response = "> OVERCLOCK ACTIVE";
      } else {
        play(sfxError);
        response = "> ACCESS DENIED";
      }
      break;

    case "glitch_ui":
      if (devUnlocked) {
        document.body.style.transform = "skewX(2deg)";
        setTimeout(()=>document.body.style.transform="none",200);
        play(sfxGlitch);
        response = "> GLITCH TRIGGERED";
      } else {
        play(sfxError);
        response = "> ACCESS DENIED";
      }
      break;

    case "spawn_noise":
      if (devUnlocked) {
        document.body.style.background = "#000";
        setTimeout(()=>document.body.style.background="#05010a",300);
        play(sfxGlitch);
        response = "> NOISE BURST";
      } else {
        play(sfxError);
        response = "> ACCESS DENIED";
      }
      break;

    case "reset_system":
      if (devUnlocked) {
        document.body.style.filter = "none";
        document.body.style.transform = "none";
        play(sfxKey);
        response = "> SYSTEM RESET";
      } else {
        play(sfxError);
        response = "> ACCESS DENIED";
      }
      break;

    case "decrypt":
      response = `
FTQ DAMP IUXX GZHQUX UFEQXR EAAZ QZAGST
      `;
      break;

    default:
      play(sfxError);
      response = "> UNKNOWN COMMAND";
  }

  print(response);
}

/* ENTER */
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    runCmd(input.value);
    input.value = "";
  }
});
