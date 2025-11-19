document.getElementById("generateBtn").addEventListener("click", async () => {
  const tone = document.getElementById("tone").value;
  const scenario = document.getElementById("scenario").value;
  const desc = document.getElementById("description").value.trim();

  if (!desc) {
    alert("Please provide a description for the excuse.");
    return;
  }

  await generateExcuse({ tone, scenario, desc });
});

async function generateExcuse(payload) {
  try {
    generateBtn.disabled = true;
    generateBtn.innerText = "Generating...";

    const res = await fetch("/api/excuse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error("Failed to generate excuse");
    }
    const excuse = await res.json();
    console.log(excuse);
  } catch (error) {
    console.error("Error generating excuse:", error);
    alert("There was an error generating the excuse. Please try again.");
  } finally {
    generateBtn.disabled = false;
    generateBtn.innerText = "Generate Excuse";
  }
}
