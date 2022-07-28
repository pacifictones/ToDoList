import './style.css';
import { handleToDoDisplay, handleCheckBox, setCheckBox } from './index.js';



//This module adds and updates the DOM with project titles in the side bar. 
export default function addProjectToDom(projectLibrary) {
    const projectList = document.createElement('div');
    projectList.setAttribute('id', 'projectList');
    
    const sideBar = document.getElementById('sideBar'); 
    sideBar.appendChild(projectList);

    for (let i = 0; i < projectLibrary.length; i++) {
      
    const projectTitle = document.createElement('div');
    
    addClass(projectTitle, "projectTitle");
    projectTitle.setAttribute('data-num', i);
    const dataNum = projectTitle.dataset.num;
    addClick(projectTitle);
    projectTitle.innerHTML = projectLibrary[i].title;
    
    projectList.appendChild(projectTitle, dataNum);
    
}
}



function addClick(element, dataNum) {
    
element.addEventListener('click', () => {
    let dataNum = element.dataset.num;
    let header = element.innerHTML;
    clearHeader();
    createHeader(header, dataNum);
    handleToDoDisplay(dataNum);
})
}



function clearHeader() {
    const headerContainer = document.getElementById('headerContainer');
    headerContainer.remove();
}



 export function createHeader (title, datanum) {
    const listTitle = document.getElementById('listTitle');
    
    const headerContainer = document.createElement('div');
    headerContainer.setAttribute('id', 'headerContainer');

    const listHeader = document.createElement('div');
    listHeader.setAttribute('id', 'listHeader');
    listHeader.innerHTML = title;

    const addToDoButton = document.createElement('button');
    addToDoButton.setAttribute('id', 'addToDoButton');
    addToDoButton.setAttribute('data-num', datanum);
    addToDoButton.innerHTML = 'Add a ToDo';
    addToDoButton.type = 'button';
    addToDoClick(addToDoButton);

    document.getElementById('submitFormButton').setAttribute('data-num', datanum);


    listTitle.appendChild(headerContainer);
    headerContainer.appendChild(listHeader);
    headerContainer.appendChild(addToDoButton);
}


function addToDoClick (element) {
    element.addEventListener('click', () => {
    document.getElementById('formPopUp').style.display = "block";

    })
}

//This function displays all the ToDos for a project to the list ul element in the "main" div.
 export function displayProject (project, dataNum) {
   
    const list = document.getElementById('list');
    list.innerHTML = '';
    
    const projectNumber = dataNum;
    for (let i = 0; i < project.length; i ++ ){
    
    console.log(projectNumber);    
    const listRow = document.createElement('li');
    addClass(listRow, "listRow");
    listRow.setAttribute('data-num', i);

    const status = document.createElement('input');
    addClass(status, "status");
    status.setAttribute('data-num', i);
    status.setAttribute('data-project', projectNumber);
    status.setAttribute('type', 'checkbox')
    addClickToCheckbox(status);
    setCheckBox(status, projectNumber, i);
    

    const toDoTitle = document.createElement('div');
    addClass(toDoTitle, "toDoTitle");
    const toDoDate = document.createElement('div');
    addClass(toDoDate, "toDoDate");

    

    const toDoMenu = document.createElement('button');
    addClass(toDoMenu, "toDoMenue");
    toDoMenu.setAttribute('data-num', i);
    toDoMenu.setAttribute('data-project', projectNumber);
    toDoMenu.innerHTML = 'edit';
    // addMenuClick(toDoMenu, projectNumber, i);
    
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

function addMenuClick(element, p, d){
    element.addEventListener('click', () => {

    })
}

//This function adds a class to an element. I really just did this for fun and practice but also i think it saves a bit of time.
 function addClass(element, classword) {
    return element.classList.add(classword);
}

function addClickToCheckbox(element) {
    element.addEventListener('change', () => {
    let dataNum = element.dataset.num;
    let project = element.dataset.project;
    
    handleCheckBox(element, project, dataNum);
    })
}

