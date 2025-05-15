console.log("Hi Welcome Terminal Quick View")

function copyLink() {
  const link = `<script defer src="https://hlord-g.github.io/cqv.github.io/tqv.js"></script>`;

  // Create temporary input para sa pag-copy
  const tempInput = document.createElement("input");
  tempInput.value = link;
  document.body.appendChild(tempInput);
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // For mobile compatibility
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  // Optional: notify user
  console.log("");
  console.log("");
  console.log("✔️ Link copied to clipboard!");
  console.log("Make sure to put this code in the header (<head>) of your website for it to work correctly.");
  
}



