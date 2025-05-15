// ===== Create and Style Console Logs Textarea =====
const consoleLogsContainer = Object.assign(document.createElement('textarea'), {
  id: 'consolelogs',
  readOnly: true
});

Object.assign(consoleLogsContainer.style, {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '300px',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  color: 'white',
  fontFamily: 'Consolas',
  fontSize: '10px',
  padding: '20px',
  border: 'none',
  zIndex: '999999999',
  resize: 'horizontal',
  display: 'none'
});

document.body.appendChild(consoleLogsContainer);

// ===== Toggle with Alt+T =====
document.addEventListener('keydown', (event) => {
  if (event.altKey && event.key.toLowerCase() === 't') {
    consoleLogsContainer.style.display =
      consoleLogsContainer.style.display === 'none' ? 'block' : 'none';
  }
});

// ===== Toggle with Button (if exists) =====
document.addEventListener('click', (event) => {
  const toggleBtn = document.getElementById('consoleLogsBtn');
  if (event.target === toggleBtn) {
    consoleLogsContainer.style.display =
      consoleLogsContainer.style.display === 'none' ? 'block' : 'none';
  }
});

// ===== Override console.log and Output to Textarea =====
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const originalLog = console.log;

    console.log = function (...args) {
      originalLog(...args);

      const textarea = document.getElementById('consolelogs');
      if (textarea) {
        textarea.value += args.join(' ') + '\n';
        textarea.scrollTop = textarea.scrollHeight;
      }
    };

    console.log("Console log capture initialized.");
  }, 100);
});
