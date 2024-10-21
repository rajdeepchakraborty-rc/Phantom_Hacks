// Initialize counters for candies and tricks
let candyCount = 0;
let trickCount = 0;

// Array of Halloween dares
const halloweenDares = [
    "Do your best zombie walk for 30 seconds! 🧟",
    "Howl like a werewolf for 10 seconds! 🐺",
    "Dance like a ghost floating in the wind! 👻",
    "Pretend to ride a broomstick like a witch for 15 seconds! 🧙‍♀️",
    "Speak in a spooky voice until your next turn! 🎃",
    "Imitate a creepy doll until someone laughs! 🤖",
    "Do your best vampire laugh! 🧛‍♂️",
    "Act like a mummy and shuffle across the room! 🧟‍♂️",
    "Tell a spooky story in the dark using a flashlight! 🔦",
    "Pretend you're stuck in a spider's web for 20 seconds! 🕸️"
];

// Function that handles door clicking
function knockDoor(doorId) {
    // Change the door image to an opened door
    let messageElement = document.getElementById('message');
    let candyElement = document.getElementById('candyCount');
    let trickElement = document.getElementById('trickCount');
    let doorImg = document.getElementById(`${doorId}-img`);

    // Randomly decide if it's a treat (candy) or a trick
    let isTreat = Math.random() > 0.35; // 35% chance for treat

    doorImg.src = "/Assets/open-door.png";

    if (isTreat) {
        // Player gets candy
        candyCount++;
        messageElement.innerText = `Lucky! ${doorId} gave you candy! 🍬`;
    } else {
        // Player encounters a trick
        trickCount++;
        messageElement.innerText = `Uh-oh! ${doorId} gave you a trick! 🎃`;
        showTrick(); // Call the new showTrick function to give a dare
    }


    // Set a timeout to change the door back to closed after 1 seconds
    setTimeout(() => {
        doorImg.src = "/Assets/closed-door.png";
    }, 1000); // 1 seconds

    // Update the score display
    candyElement.innerText = candyCount;
    trickElement.innerText = trickCount;
}

// Function to show a random Halloween dare (trick)
function showTrick() {
    // Select a random dare from the halloweenDares array
    const randomDare = halloweenDares[Math.floor(Math.random() * halloweenDares.length)];
    
    // Display the dare as an alert
    alert(`Trick Time! Your dare is: ${randomDare}`);
}
