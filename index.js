
document.getElementById('scroll-down').addEventListener('click', function () {
    var table = document.getElementById('table');
    table.scrollIntoView({ behavior: 'smooth' });
});


function start() {
    setTimeout(function () {
        if (!document.getElementById('scroll-down').clicked) {
            document.getElementById('table').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
            // Call the function to start cycling through dialogues
            setTimeout(function () {
                cycleDialogues();
            }, 5000)
        }
    }, 5000);



}


start();

function cycleDialogues() {
    // Array to store the order of dialogues
    let dialoguesOrder = Array.from({ length: 15 }, (_, i) => i + 1);

    // Shuffle the order of dialogues randomly
    dialoguesOrder.sort(() => Math.random() - 0.5);
    console.log(dialoguesOrder)

    // Function to open and close dialogues
    let index = 0;
    function openCloseDialogues() {
        setTimeout(function () {
            let currentDialogue = document.querySelector('#dialog-' + dialoguesOrder[index + 1]);
            currentDialogue.setAttribute('open', '');
            setTimeout(function () {
                currentDialogue.removeAttribute('open');
                index = (index + 1) % 15; // Cycle through dialogues
                openCloseDialogues(); // Call the function recursively for the next dialogue
            }, 5000); // 5 seconds
        }, 5000);

    }

    // Start cycling through dialogues
    openCloseDialogues();
}





