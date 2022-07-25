import './style.css';

//This module adds and updates the DOM with project titles in the side bar. 


export default function addProjectToDom(projectLibrary) {
    const projectList = document.createElement('div');
    projectList.setAttribute('id', 'projectList');
    
    const sideBar = document.getElementById('sideBar'); 
    sideBar.appendChild(projectList);

    for (let i = 0; i < projectLibrary.length; i++) {
      
    const projectTitle = document.createElement('div');
    addClick(projectTitle);
    addClass(projectTitle, "projectTitle");
    projectTitle.setAttribute('data-num', i);
    projectTitle.innerHTML = projectLibrary[i].title;
    
    projectList.appendChild(projectTitle);
    console.log(projectLibrary[i].title)
}
}

function addClick(element) {
    return element.addEventListener('click', displayProject);
}

 export function displayProject (project) {
    const list = document.getElementById('list');

    for (let i = 0; i < project.length; i ++ ){

    const listRow = document.createElement('li');
    addClass(listRow, "listRow");

    const status = document.createElement('div');
    addClass(status, "status");
    const toDoTitle = document.createElement('div');
    addClass(toDoTitle, "toDoTitle");
    const toDoDate = document.createElement('div');
    addClass(toDoDate, "toDoDate");
    const toDoMenu = document.createElement('div');
    addClass(toDoMenu, "toDoMenue");
    
    list.appendChild(listRow);
    listRow.appendChild(status);
    listRow.appendChild(toDoTitle);
    listRow.appendChild(toDoDate);
    listRow.appendChild(toDoMenu);

    
toDoTitle.innerHTML = project[i].title + project[i].description;
status.innerHTML = project[i].priority;
toDoDate.innerHTML = project[i].dueDate;
toDoMenu.innerHTML = 'options';

}
    
}

 function addClass(element, classword) {
    return element.classList.add(classword);
}