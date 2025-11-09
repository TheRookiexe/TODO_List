const contentDiv = document.getElementById('content');
function projDiaBox() {
    const dialogBox = document.createElement('dialog');
    dialogBox.id = "pDiaBox";

    const form = document.createElement('form');
    form.id = "form";
    form.method = "dialog";

    const boxTitle = document.createElement('label');
    boxTitle.id = "box-title";
    boxTitle.textContent = "Create New Project";
    
    const Divisor = document.createElement('div');
    Divisor.id = "divisor";

    const projName = document.createElement('label');
    projName.id = "p-title";
    projName.setAttribute("for", "title");
    projName.textContent = "Project Name";
    
    const input = document.createElement('input');
    input.id = "title";
    input.placeholder = "Enter Project name";
    input.type = "text";
    input.name = "Project Name";
    input.required = true;

    const buttonContainer = document.createElement('div');
    buttonContainer.id = "btnContainer";

    const submitBtn = document.createElement('button');
    submitBtn.id = "diaBtn";
    submitBtn.textContent = "Create";
    submitBtn.type = "submit";

    const cancelBtn = document.createElement('button');
    cancelBtn.id = "diaBtn";
    cancelBtn.textContent = "Cancel";
    cancelBtn.type = "button"
    cancelBtn.addEventListener('click', ()=> dialogBox.close());

    buttonContainer.appendChild(submitBtn);
    buttonContainer.appendChild(cancelBtn);

    form.appendChild(boxTitle);
    form.appendChild(Divisor);
    form.appendChild(projName);
    form.appendChild(input);
    form.appendChild(buttonContainer);
    dialogBox.appendChild(form);
    contentDiv.appendChild(dialogBox);
    dialogBox.showModal();
}

export {projDiaBox};