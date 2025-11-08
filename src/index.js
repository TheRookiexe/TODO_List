import "./style.css";

const contentDiv = document.getElementById('content');
const sideBarDiv = document.getElementById('sideBar');

const addProjectBtn = document.createElement('button');
addProjectBtn.id = "addProjBtn";
addProjectBtn.textContent = `+   Add New Project`;
sideBarDiv.appendChild(addProjectBtn);

const barDiv = document.createElement('div');
barDiv.id = "divisor";
sideBarDiv.appendChild(barDiv);