// Create the #consolelogs textarea dynamically
const consoleLogsContainer = document.createElement('textarea');
consoleLogsContainer.id = 'consolelogs';
document.body.appendChild(consoleLogsContainer);

// Apply CSS styles to position it and style it
consoleLogsContainer.style.position = 'fixed';
consoleLogsContainer.style.top = '0';
consoleLogsContainer.style.left = '0';  // Position at the left side
consoleLogsContainer.style.width = '300px';  // Initial width (resizable)
consoleLogsContainer.style.height = '100vh';  // Full height of the screen
consoleLogsContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
consoleLogsContainer.style.color = 'white';
consoleLogsContainer.style.fontFamily = 'Consolas';
consoleLogsContainer.style.fontSize = '10px';
consoleLogsContainer.style.padding = '20px';
consoleLogsContainer.style.border = 'none';
consoleLogsContainer.style.zIndex = '999999999999999999';
consoleLogsContainer.style.resize = 'horizontal'; // Only allow horizontal (width) resize
consoleLogsContainer.style.display = 'none'; // Initially hidden

// Make the textarea non-editable (optional)
consoleLogsContainer.readOnly = true;

// Create a custom console.log method
const originalLog = console.log;
console.log = function(message) {
  // Call the original console.log
  originalLog(message);

  // Append the log message to the textarea
  consoleLogsContainer.value += message + '\n';
  // Scroll to the bottom to show the latest message
  consoleLogsContainer.scrollTop = consoleLogsContainer.scrollHeight;
};

// Add an event listener to toggle visibility with Alt + T
document.addEventListener('keydown', function(event) {
  if (event.altKey && event.key === 't') {
    // Toggle the visibility of #consolelogs
    consoleLogsContainer.style.display = consoleLogsContainer.style.display === 'none' ? 'block' : 'none';
  }
});



const toggleBtn = document.getElementById('consoleLogsBtn');
document.addEventListener('click', function(event) {
    if (event.target === toggleBtn) {
        // Toggle visibility
        consoleLogsContainer.style.display = consoleLogsContainer.style.display === 'none' ? 'block' : 'none';
    }
});



console.log("Hi Welcome Terminal Quick View")


