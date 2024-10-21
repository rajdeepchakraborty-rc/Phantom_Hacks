function closeEnvelope() {
    const envelope = document.getElementById('envelope');
    const nameInput = document.getElementById('nameInput');
    const replyMessage = document.getElementById('replyMessage');

    if (nameInput.value.trim() !== "") {
        // Change the envelope's background color
        envelope.style.backgroundColor = "#8A0000"; // Blood red color

        // Update the reply message text
        replyMessage.innerText = `Behold ${nameInput.value}! Your Soul has been accepted!\n You may Rest In Peace`;

        // Show the reply message and fade it in
        setTimeout(() => {
            replyMessage.style.display = 'block'; // Shows the reply message
        }, 500); // Delay added to show the reply message after color change
    } else {
        alert("Please write a name!");
    }
}
