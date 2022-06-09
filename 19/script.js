const draggleList = document.getElementById("draggable-list");
const check = document.getElementById("check");

const richestPeople = [
    "Jeff Bezos",
    "Bill Gates",
    "Warren Buffett",
    "Bernard Arnault",
    "Carlos Slim",
    "Amancio Ortega",
    "Larry Ellison",
    "Mark Zuckerberg",
    "Michael Bloomberg",
    "Larry Page"
];

// Store list items
const listItems = [];

let dragStartIndex;

createList();


// Insert list items into DOM
function createList() { 
    [...richestPeople] // richestPeople also works
        .map(a => ({ value: a, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
        .forEach((person, index) => {
        const listItem = document.createElement("li");
        
        listItem.setAttribute("data-index", index);
        
        listItem.innerHTML = `
            <span class="number">${index + 1}</span>
            <div class="draggable" draggable="true">
                <p class="person-name">${person}</p>
                <i class="fas fa-grip-lines"></i>
            </div>
        `;

        listItems.push(listItem);
        draggleList.appendChild(listItem);
    });

    addEventListeners();
}

function dragStart() {
    
}
function dragEnter() {
    this.classList.add("over");
}
function dragLeave() {
    this.classList.remove("over");
}
function dragOver() {
   
}
function dragDrop() {

}

function addEventListeners() {
    const draggables = document.querySelectorAll(".draggable");
    const dragListItems = document.querySelectorAll(".draggable-list li");

    draggables.forEach(draggable => {
        draggable.addEventListener("dragstart", dragStart);
    })

    dragListItems.forEach(item => {
        item.addEventListener("dragover", dragOver);
        item.addEventListener("drop", dragDrop);
        item.addEventListener("dragenter", dragEnter);
        item.addEventListener("dragleave", dragLeave);
    })
}