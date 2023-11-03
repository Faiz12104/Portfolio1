function promptAndNavigate() {
    // Prompt the user for their name
    const name = prompt("Faiz Ali Raza");
    
    if (name) {
        // Use the name to personalize a welcome message
        const welcomeMessage = `Welcome, ${name}!`;
        alert(welcomeMessage);

        // Navigate to a specific section on the page (e.g., "portfolio")
        const sectionIdToNavigateTo = "portfolio";
        const section = document.getElementById(sectionIdToNavigateTo);

        if (section) {
            // Scroll smoothly to the section
            section.scrollIntoView({ behavior: "smooth" });
        } else {
            // Handle the case where the section doesn't exist
            alert("Section not found.");
        }
    } else {
        // Handle the case where the user canceled the prompt
        alert("You canceled the prompt.");
    }
}

// Call the function when a button is clicked, for example
const navigateButton = document.getElementById("navigate-button");
if (navigateButton) {
    navigateButton.addEventListener("click", promptAndNavigate);
}
