

const minimizedWindows = new Map(); //this is to track the windows which have been minimized
// Window controls
function closeWindow(id) {
  const win = document.getElementById(id);
  if (win) win.style.display = "none";
}


// To do .. minimize it do it goes to the buttom
function minimizeWindow(id) {
  const win = document.getElementById(id);
  if (!win || minimizedWindows.has(id)) return;

  // hide window
  win.style.display = "none";


  // create taskbar icon container
  const iconBox = document.createElement("div");
  iconBox.className = "taskbar-icon";

  // create image
  const img = document.createElement("img");
  img.src = win.dataset.icon || "../assets/images/taskicon.png";
  img.alt = "Minimized window";

  iconBox.appendChild(img);

  iconBox.onclick = () => restoreWindow(id);

  document.querySelector(".taskbar-windows").appendChild(iconBox);

  minimizedWindows.set(id, iconBox);
}

function restoreWindow(id) {
  const win = document.getElementById(id);
  if (!win) return;

  win.style.display = "block";

  const icon = minimizedWindows.get(id);
  if (icon) {
    icon.remove();
    minimizedWindows.delete(id);
  }
}

function maximizeWindow(id) {
  const win = document.getElementById(id);
  if (!win) return;

  win.classList.toggle("maximized");
}

// Next button: ask level

// Show Level
function showLevelModal() {
  document.getElementById('level-modal').classList.remove('hidden');
}

// Select Level
function selectLevel(level) {
  document.getElementById('level-modal').classList.add('hidden');
  closeWindow('welcome-window');   // close welcome
  openFolder('level1');             // open Level 1 automatically
  alert(`You selected ${level}. Level 1 is now open!`);
}



function openFolder(folderId) {
  document.getElementById(`${folderId}-window`).classList.remove('hidden');
}

function closeFolder(folderId) {
  document.getElementById(`${folderId}-window`).classList.add('hidden');
}
//thes functionalties are to be implemented soon .. I just did it so i can finish the desktop
function openFeature(feature) {
  switch(feature) {
    case 'phishing':
      alert("Opening Phishing Test...");
      break;
    case 'password':
      alert("Opening Password Check...");
      break;
    case 'social':
      alert("Opening Social Engineering...");
      break;
    case 'about':
      alert("Showing About info...");
      break;
  }
}


function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  clock.textContent = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });
}

setInterval(updateClock, 1000);
updateClock();
