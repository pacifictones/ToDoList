import './style.css';
import { handleToDoDisplay, handleCheckBox, setCheckBox, handleDeleteTodo, handleEditButton, handleDeleteProject } from './index.js';
import Trash from './icons/trash.svg';
import Plus from './icons/plus.svg';
import More from './icons/more.svg';

const myTrash = new Image();
myTrash.src = Trash;

const myPlus = new Image();
myPlus.src = Plus;

const myMore = new Image();
myMore.src = More;

//This module adds and updates the DOM with project titles in the side bar. 
export default function addProjectToDom(projectLibrary) {
    const projectList = document.createElement('div');
    projectList.setAttribute('id', 'projectList');
    
    const sideBar = document.getElementById('sideBar'); 
    sideBar.appendChild(projectList);
if(projectLibrary.length > 0) {
    for (let i = 0; i < projectLibrary.length; i++) {
      
    const projectTitle = document.createElement('div');
    
    addClass(projectTitle, "projectTitle");
    projectTitle.setAttribute('data-num', i);
    const dataNum = projectTitle.dataset.num;
    addClick(projectTitle);
    projectTitle.innerHTML = projectLibrary[i].title;
    
    projectList.appendChild(projectTitle, dataNum);
    }
} return;
}



function addClick(element, dataNum) {
    
element.addEventListener('click', () => {
    let dataNum = element.dataset.num;
    let header = element.innerHTML;
    const headerContainer = document.getElementById('headerContainer');
    if (headerContainer) {
    clearHeader();
    }
    createHeader(header, dataNum);
    handleToDoDisplay(dataNum);
})
}



export function clearHeader() {
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

    const headerButtons = document.createElement('div');
    headerButtons.classList.add('headerButtons');
    const addToDoContainer = document.createElement('div');
    addToDoContainer.classList.add('addToDoContainer');
    const trashToDoContainer = document.createElement('div');
    trashToDoContainer.classList.add('trashToDoContainer');
    const addToDoTitle = document.createElement('div');
    addToDoTitle.classList.add('addToDoTitle');
    const trashToDoTitle = document.createElement('div');
    trashToDoTitle.classList.add('trashToDoTitle');
    const addToDoButton = myPlus;
    addToDoButton.setAttribute('id', 'addToDoButton');
    addToDoButton.setAttribute('data-num', datanum);
    addToDoButton.innerHTML = 'Add a ToDo';
    addToDoButton.type = 'button';
    addToDoClick(addToDoContainer);

    const deleteProjectButton = myTrash;
    deleteProjectButton.setAttribute('id', 'deleteProjectButton');
    deleteProjectButton.setAttribute('type', 'button');
    deleteProjectButton.innerHTML = 'delete project';
    deleteProjectButton.setAttribute('data-num', datanum)
    trashToDoContainer.addEventListener('click', () => {
        handleDeleteProject(datanum);
    });

    document.getElementById('submitFormButton').setAttribute('data-num', datanum);


    listTitle.appendChild(headerContainer);
    headerContainer.appendChild(listHeader);
    headerContainer.appendChild(addToDoContainer);
    
    addToDoContainer.appendChild(addToDoButton);
    addToDoContainer.appendChild(addToDoTitle);
    headerContainer.appendChild(trashToDoContainer);
    trashToDoContainer.appendChild(deleteProjectButton);
    trashToDoContainer.appendChild(trashToDoTitle);

    trashToDoTitle.innerHTML = 'Delete Project';
    addToDoTitle.innerHTML = 'Add todo';
    
}


 function addToDoClick (element) {

    element.addEventListener('click', () => {
    document.getElementById('formPopUp').style.display = "block";

    })
}

//This function displays all the ToDos for a project to the list ul element in the "main" div.
 export function displayProject (project, dataNum) {
   
    const list = document.getElementById('list');
   
   if (project){ 
     list.innerHTML = '';
    const projectNumber = dataNum;
    for (let i = 0; i < project.length; i ++ ){

    const projectString = String(projectNumber);    
    const dataCombined = projectString + i;

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
    
    const toDoInfo = document.createElement('div');
    toDoInfo.classList.add('toDoInfo');
    const toDoTitle = document.createElement('div');
    const toDoDescription = document.createElement('div');
    toDoDescription.classList.add('toDoDescription');
    addClass(toDoTitle, "toDoTitle");
    const toDoDate = document.createElement('div');
    addClass(toDoDate, "toDoDate");

    const toDoMenu = document.createElement('div');
    addClass(toDoMenu, "toDoMenu");
    // addMenuClick(toDoMenu, projectNumber, i);

    const toDoButton = document.createElement('button');
    addClass(toDoButton, "toDoButton");
    toDoButton.setAttribute('data-num', i);
    toDoButton.setAttribute('data-project', projectNumber);
    // toDoButton.setAttribute('data-combined', dataCombined);
    addMenuClick(toDoButton, dataCombined);
    

    const popUpMenu = document.createElement('div');
    addClass(popUpMenu, 'popUpMenu');
    popUpMenu.setAttribute('id', dataCombined);
    
    // popUpMenu.setAttribute('data-combined', dataCombined);
    const editButton = document.createElement('button');
    addClass(editButton, "editButton");
    
    
    editButton.innerHTML = 'edit';
    const deleteButton = document.createElement('button');
    addClass(deleteButton, "deleteButton");
    editButton.setAttribute('data-num', i);
    editButton.setAttribute('data-project', projectNumber);
    addEditClick(editButton, projectNumber, i);
    deleteButton.innerHTML = 'delete';
    deleteButton.setAttribute('data-num', i);
    addDeleteClick(deleteButton, projectNumber, i);
    
    

    list.appendChild(listRow);
    listRow.appendChild(status);
    listRow.appendChild(toDoInfo);
    toDoInfo.appendChild(toDoTitle);
    toDoInfo.appendChild(toDoDescription);
    listRow.appendChild(toDoDate);
    listRow.appendChild(toDoMenu);
    toDoMenu.appendChild(popUpMenu);
    popUpMenu.appendChild(editButton);
    popUpMenu.appendChild(deleteButton);
    toDoMenu.appendChild(toDoButton);

    
toDoTitle.innerHTML = project[i].title;
toDoDescription.innerHTML = project[i].description;
status.innerHTML = project[i].priority;
toDoDate.innerHTML = project[i].dueDate;
toDoButton.innerHTML = 'Options';


}    
} else{
list.innerHTML = '';
return;}
}

function addDeleteClick(element, projectNumber, dataNum) {
    element.addEventListener('click', () => {
        handleDeleteTodo(projectNumber, dataNum);
    })
}


function addMenuClick(element, dataCombined){
    
    element.addEventListener('click', () => {
       const overlay = document.getElementById('overlay');
       const popUp = document.getElementById(dataCombined);
       if(popUp.classList == 'open') {
        popUp.classList.remove('open');
       }
       popUp.classList.add('open');
       overlay.classList.add('active');
       

       overlay.addEventListener('click', () => {
        popUp.classList.remove('open');
        overlay.classList.remove('active');
       })
       
   
    
    
    })
}



//This function adds a class to an element. I really just did this for fun and practice but also i think it saves a bit of time.
 function addClass(element, classword) {
    return element.classList.add(classword);
}

function addClickToCheckbox(element) {
    if(element){
    element.addEventListener('change', () => {
    let dataNum = element.dataset.num;
    let project = element.dataset.project;
    
    handleCheckBox(element, project, dataNum);
    })
    } return;
}

function addEditClick(element, projectNumber, dataNum) {
    element.addEventListener('click', () => {
        handleEditButton(projectNumber, dataNum);
    })
}
