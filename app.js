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
- anomaly detected in ARG layer
      `;
      break;

    case "trace":
      response = `
TRACE:
/ace/root/sequence/locked
      `;
      break;

    case "override":
      response = `
OVERRIDE ACTIVE
ARG LAYER ENABLED
      `;
      break;

    case "reset":
      response = "> SYSTEM RESET";
      break;

    default:
      response = "> UNKNOWN COMMAND";
  }

  print(response);
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    runCmd(input.value);
    input.value = "";
  }
});
