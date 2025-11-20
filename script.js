const card = document.querySelector(".card");
const generateBtn = document.getElementById("generateBtn");
const backBtn = document.getElementById("backBtn");
const copyBtn = document.getElementById("copyBtn");
const excuseOutput = document.getElementById("excuseOutput");

generateBtn.addEventListener("click", async () => {
  const tone = document.getElementById("tone").value;
  const scenario = document.getElementById("scenario").value;
  const desc = document.getElementById("description").value.trim();

  if (!desc) {
    alert("Please provide a description for the excuse.");
    return;
  }

  await generateExcuse({ tone, scenario, desc });
});

backBtn.addEventListener("click", () => {
  card.classList.remove("flipped");
  // Clear the form
  document.getElementById("description").value = "";
});

copyBtn.addEventListener("click", () => {
  const excuseText = excuseOutput.textContent;
  navigator.clipboard
    .writeText(excuseText)
    .then(() => {
      const originalText = copyBtn.textContent;
      copyBtn.textContent = "Copied!";
      setTimeout(() => {
        copyBtn.textContent = originalText;
      }, 2000);
    })
    .catch((err) => {
      console.error("Failed to copy:", err);
      alert("Failed to copy to clipboard");
    });
});

async function generateExcuse(payload) {
  try {
    generateBtn.disabled = true;
    generateBtn.innerText = "Generating...";

    // Use Vercel API URL when deployed, localhost for local dev
    const API_URL =
      window.location.hostname === "localhost"
        ? "/api/excuse"
        : "https://excuse-generator-9uk47prph-vamsi-kanakams-projects.vercel.app/api/excuse";

    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error("Failed to generate excuse");
    }

    const data = await res.json();

    // Display the excuse and flip the card
    excuseOutput.textContent = data.excuse;
    card.classList.add("flipped");
  } catch (error) {
    console.error("Error generating excuse:", error);
    alert("There was an error generating the excuse. Please try again.");
  } finally {
    generateBtn.disabled = false;
    generateBtn.innerText = "Generate Excuse";
  }
}
