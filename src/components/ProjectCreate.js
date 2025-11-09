class ProjectCreate{
    constructor(name){
        this.name = name;
    }
}

class Todo {
  constructor(title, description, priority = "Normal") {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.createdAt = new Date().toLocaleString();
  }

  render() {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-item');

    const titleEl = document.createElement('h3');
    titleEl.textContent = this.title;

    const descEl = document.createElement('p');
    descEl.textContent = this.description;

    const priorityEl = document.createElement('span');
    priorityEl.textContent = `Priority: ${this.priority}`;
    priorityEl.classList.add(`priority-${this.priority.toLowerCase()}`);

    const dateEl = document.createElement('small');
    dateEl.textContent = `  | Added on: ${this.createdAt}`;

    todoDiv.append(titleEl, descEl, priorityEl, dateEl);
    return todoDiv;
  }
}

export { Todo, ProjectCreate };
