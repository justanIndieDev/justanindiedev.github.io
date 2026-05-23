const output = document.getElementById("output");
const input = document.getElementById("cmdInput");

/* =========================
   SFX ENGINE
========================= */
const sfxBoot = document.getElementById("sfxBoot");
const sfxKey = document.getElementById("sfxKey");
const sfxError = document.getElementById("sfxError");
const sfxGlitch = document.getElementById("sfxGlitch");

function play(sfx) {
  if (!sfx) return;
  sfx.currentTime = 0;
  sfx.play().catch(() => {});
}

/* =========================
   TERMINAL ENGINE
========================= */
function print(text) {
  output.innerText = text;
}

function runCmd(cmdRaw) {
  let cmd = cmdRaw.toLowerCase().trim();

  play(sfxKey);

  let response = "";

  switch(cmd) {

    case "help":
      response = `
COMMANDS:
help
decrypt
log
trace
override
reset
      `;
      break;

    case "decrypt":
      response = `
CIPHER DETECTED:
FTQ DAMP IUXX GZHQUX UFEQXR EAAZ QZAGST
      `;
      break;

    case "log":
      response = `
SYSTEM LOG:
- kernel stable
- ARG anomaly detected
      `;
      break;

    case "trace":
      response = `
TRACE:
/ace/root/sequence/locked
      `;
      break;

    case "override":
      play(sfxGlitch);
      response = `
OVERRIDE ACTIVE
ARG LAYER ENABLED
      `;
      break;

    case "reset":
      response = "> SYSTEM RESET";
      break;

    default:
      play(sfxError);
      response = "> UNKNOWN COMMAND";
  }

  print(response);
}

/* =========================
   INPUT HANDLER
========================= */
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    runCmd(input.value);
    input.value = "";
  }
});
