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
