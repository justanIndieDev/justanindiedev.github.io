let devUnlocked = false;
let secretUnlocked = false;

function flash() {
  document.body.style.filter = "contrast(1.2)";
  setTimeout(() => document.body.style.filter = "none", 150);
}

function runCmd(cmd) {
  flash();

  const output = document.getElementById("output");
  let response = "";

  switch(cmd) {

    case "projects":
      response = `
> PROJECT DATABASE

[FILE_001] TOTAL MAYHEM
[FILE_002] RAGDOLL CORE
[FILE_003] AI ANIMATION TOOL
      `;
      break;

    case "about":
      response = `
> ACE PROFILE

Game dev + systems engineer.
Focus: chaos mechanics, physics, multiplayer design.
      `;
      break;

    case "skills":
      response = `
> STATS

Lua: 82%
Game Design: 74%
Physics: 68%
UI/UX: 55%
      `;
      break;

    case "contact":
      response = `
> CONTACT NODE

EMAIL: floridaman417@proton.me
YOUTUBE: youtube.com/@Ac3Pr06uctions
      `;
      break;

    case "dev":
      devUnlocked = true;
      response = `
> DEV MODE ENABLED

Commands unlocked:
system_overclock
glitch_ui
spawn_noise
reset_system
ace_root
      `;
      break;

    case "system_overclock":
      if (devUnlocked) {
        document.body.style.filter = "hue-rotate(140deg)";
        response = "> OVERCLOCK ACTIVE";
      } else response = "> ACCESS DENIED";
      break;

    case "glitch_ui":
      if (devUnlocked) {
        document.body.style.transform = "skewX(2deg)";
        setTimeout(() => document.body.style.transform = "none", 200);
        response = "> GLITCH TRIGGERED";
      } else response = "> ACCESS DENIED";
      break;

    case "spawn_noise":
      if (devUnlocked) {
        document.body.style.background = "#000";
        setTimeout(() => document.body.style.background = "#05010a", 300);
        response = "> NOISE BURST";
      } else response = "> ACCESS DENIED";
      break;

    case "reset_system":
      if (devUnlocked) {
        document.body.style.filter = "none";
        response = "> SYSTEM RESET";
      } else response = "> ACCESS DENIED";
      break;

    case "ace_root":
      if (!devUnlocked) {
        response = "> ACCESS DENIED";
        break;
      }

      secretUnlocked = true;
      response = `
> ███ ROOT NODE ███

HIDDEN SYSTEMS:
- /core/ghost_process
- /dev/unstable_builds
- /projects/deleted_assets

TOOLS:
reality_break()
ghost_mode()
memory_edit()
      `;
      break;

    default:
      response = "> UNKNOWN COMMAND";
  }

  output.innerText = response;
}
