import './style.css';
import ToDo from './createToDo.js';
import Project from './newProject.js';
import loadPage, {createEditBox} from './loadPage.js';
import addProjectToDom, {clearHeader, displayProject} from './addProject.js';
import { createHeader } from './addProject.js';

document.body.appendChild(loadPage());

// const toDo = new ToDo('Shop', 'Groceries', 'Today');


// const toDo1 = new ToDo("Eat", 'some food', "Today");

// const toDo3 = new ToDo("Read", "Books", "Now");


const projectLibrary = JSON.parse(localStorage.getItem('projectLibrary')) || [];

// const project1 = new Project("Quick List");
// project1.list.push(toDo);
// project1.list.push(toDo1);
// projectLibrary.push(project1);

// console.log(projectLibrary);

// const project2 = new Project('eating');
// project2.list.push(toDo);
// project2.list.push(toDo);
// projectLibrary.push(project2);

// const project3 = new Project('yoyoing');
// project3.list.push(toDo3);
// projectLibrary.push(project3);

export function handleAddButton () {
    const projectList = document.getElementById('projectList');
    const getNewProject = document.getElementById('addProjectInput');
    const newProjectName = getNewProject.value;
    if (getNewProject && getNewProject.value) {
    const newProject = new Project(newProjectName);
    getNewProject.value = '';
    projectLibrary.push(newProject);
    
    if(projectLibrary && projectList){
        
    projectList.remove();
    addProjectToDom(projectLibrary);
    console.log(projectLibrary);
    } else {
        addProjectToDom(projectLibrary)
    }
    }
    localStorage.setItem('projectLibrary', JSON.stringify(projectLibrary));
}

export function handleAddTodo (dataNum) {
    let title = document.getElementById('titleInput');
    let newTitle = title.value;
    if (newTitle === '') {
        alert('Please enter a title!');
        return;
    }

    let description = document.getElementById('description');
    let newDescription = description.value;

    let date = document.getElementById('date');
    let newDate = date.value;
    if (newDate === '') {
        newDate = "No due date"; 
    }

    

    let newToDo = new ToDo(newTitle, newDescription, newDate, false);
    projectLibrary[dataNum].list.push(newToDo);
    
    displayProject(projectLibrary[dataNum].list, dataNum);

    title.value = '';
    description.value = '';
    date.value = '';
    document.getElementById('formPopUp').style.display = "none";
    localStorage.setItem('projectLibrary', JSON.stringify(projectLibrary));
}

export function handleDeleteTodo(projectNumber, dataNum) {
        projectLibrary[projectNumber].list.splice(dataNum,1);
        console.log(projectLibrary)
        displayProject(projectLibrary[projectNumber].list, projectNumber);
        localStorage.setItem('projectLibrary', JSON.stringify(projectLibrary));
    }


export function handleToDoDisplay(dataNum) {
    displayProject(projectLibrary[dataNum].list, dataNum);
}

export function handleCheckBox(element, p,d) {
       
    if(element.checked) {
        projectLibrary[p].list[d].status = true;
    } else {
        projectLibrary[p].list[d].status = false;
    }
    console.log(p + " " + d);
    console.log(projectLibrary[p].list[d].status);
    localStorage.setItem('projectLibrary', JSON.stringify(projectLibrary));
}

export function setCheckBox(element, p, d) {

    if(projectLibrary[p]) {
    if(projectLibrary[p].list[d].status === true) {
        element.checked = true;
    } else if (projectLibrary[p].list[d].status === false){
         element.checked = false;
    } 

    } return;
 }

 console.log(projectLibrary[0].list);



 console.log(projectLibrary[0].list);
createHeader(projectLibrary[0].title, 0);
 addProjectToDom(projectLibrary);
displayProject(projectLibrary[0].list, 0);

export function handleEditButton(projectNumber, dataNum) {
    const title = projectLibrary[projectNumber].list[dataNum].title;

    const description = projectLibrary[projectNumber].list[dataNum].description;

    const date = projectLibrary[projectNumber].list[dataNum].dueDate;

    document.body.appendChild(createEditBox(title, description, date, projectNumber, dataNum));
    
}

export function handleEditSubmitButton(projectNumber, dataNum){

    let title = document.getElementById('editTitle');
    let newTitle = title.value;

    let description = document.getElementById('editDescription');
    let newDescription = description.value;

    let date = document.getElementById('editDate');
    let newDate = date.value;
    if (newDate === '') {
        newDate = "No due date"; 
    }
    
    let editBox = document.getElementById('editBox');

    projectLibrary[projectNumber].list[dataNum].title = newTitle;

    projectLibrary[projectNumber].list[dataNum].description = newDescription;

    projectLibrary[projectNumber].list[dataNum].dueDate = newDate;

    editBox.remove();
    displayProject(projectLibrary[projectNumber].list, dataNum)
    localStorage.setItem('projectLibrary', JSON.stringify(projectLibrary));
}

export function handleDeleteProject(dataNum) {
    const projectList = document.getElementById('projectList');
    projectLibrary.splice(dataNum, 1);
    if(projectLibrary[0]) {
    displayProject(projectLibrary[0].list, 0);
    projectList.remove();
    addProjectToDom(projectLibrary);
    
    clearHeader();
    
        createHeader(projectLibrary[0].title, 0);
        return;
    }
    clearHeader()
    projectList.remove()
    displayProject();
    localStorage.setItem('projectLibrary', JSON.stringify(projectLibrary));

    
}

// console.log(projectLibrary);

// console.log(projectLibrary[0].title);
// console.log(projectLibrary[0].list[0].description);

// console.log(projectLibrary[1].title);