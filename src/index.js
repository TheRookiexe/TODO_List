import "./style.css";
import { ProjectDiaBox } from "./components/projDialogBox";
import { LocalStorageMgr } from "./components/localStorageMgr";
import { Todo } from "./components/ProjectCreate"; 

const sideBarDiv = document.getElementById('sideBar');
const contentDiv = document.getElementById('content');

const projectDialog = new ProjectDiaBox('content');
const storage = new LocalStorageMgr();

function renderProjects() {
  sideBarDiv.querySelectorAll('.project-item').forEach(el => el.remove());

  const projects = storage.getAllProjects();
  Object.keys(projects).forEach(name => {

    const projSh = document.createElement('div');
    projSh.classList.add('prSh');

    const p = document.createElement('div');
    p.textContent = `📁 ${name}`;
    p.classList.add('project-item');

    const delBtn = document.createElement('button');
    delBtn.textContent=`🗑️`;
    delBtn.id = "del-btn";

    delBtn.addEventListener('click', ()=>{
      storage.deleteProject(name);
      delBtn.parentElement.remove();
    })

    projSh.appendChild(p);
    projSh.appendChild(delBtn);
    sideBarDiv.appendChild(projSh);

    p.addEventListener('click', () => {
      renderProjectContent(name);
    });
  });
}

function renderProjectContent(projectName) {
  contentDiv.innerHTML = '';

  const header = document.createElement('h2');
  header.textContent = `Project: ${projectName}`;

  const addTodoBtn = document.createElement('button');
  addTodoBtn.textContent = '+ Add Task';
  addTodoBtn.id = 'addTodoBtn';

  const todoContainer = document.createElement('div');
  todoContainer.id = 'todoContainer';

  addTodoBtn.addEventListener('click', () => {
    const title = prompt('Enter Task Title:');
    const desc = prompt('Enter Task Description:');
    const priority = prompt('Priority (High, Medium, Low):', 'Normal');

    if (title) {
      const todo = new Todo(title, desc, priority);
      todoContainer.appendChild(todo.render());

      const projects = storage.getAllProjects();
      projects[projectName].push(todo);
      storage.saveAllProjects(projects);
    }
  });

  const projects = storage.getAllProjects();
  const todos = projects[projectName] || [];
  todos.forEach(t => {
    const todo = new Todo(t.title, t.description, t.priority);
    todoContainer.appendChild(todo.render());
  });

  contentDiv.append(header, addTodoBtn, todoContainer);
}

const addProjectBtn = document.createElement('button');
addProjectBtn.id = "addProjBtn";
addProjectBtn.textContent = `+ Add New Project`;
sideBarDiv.appendChild(addProjectBtn);

const barDiv = document.createElement('div');
barDiv.id = "divisor";
sideBarDiv.appendChild(barDiv);

addProjectBtn.addEventListener('click', async () => {
  const name = await projectDialog.open();
  if (name) {
    storage.addProject(name);
    renderProjects();
  }
});

renderProjects();
