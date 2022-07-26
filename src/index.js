import './style.css';
import ToDo from './createToDo.js';
import Project from './newProject.js';
import loadPage from './loadPage.js';
import addProjectToDom, {displayProject} from './addProject.js';
import { createHeader } from './addProject.js';

document.body.appendChild(loadPage());

const toDo = new ToDo('Shop', 'Groceries', 'Tomorrow', 'Urgent');


const toDo1 = new ToDo("Eat", 'some food', "today", "urgent");

const toDo3 = new ToDo("Read", "Books", "Now", "Not important");


const projectLibrary = [];

const project1 = new Project("shopping");
project1.list.push(toDo);
project1.list.push(toDo1);
projectLibrary.push(project1);
console.log(projectLibrary);

const project2 = new Project('eating');
project2.list.push(toDo);
projectLibrary.push(project2);

const project3 = new Project('yoyoing');
project3.list.push(toDo3);
projectLibrary.push(project3);

export function handleAddButton () {
    const projectList = document.getElementById('projectList');
    const getNewProject = document.getElementById('addProjectInput');
    const newProjectName = getNewProject.value;
    if (getNewProject && getNewProject.value) {
    const newProject = new Project(newProjectName);
    getNewProject.value = '';
    projectLibrary.push(newProject);
    projectList.remove();
    addProjectToDom(projectLibrary);
    console.log(projectLibrary);
    }
}

export function handleAddTodo (dataNum) {
    let title = document.getElementById('titleInput');
    let newTitle = title.value;

    let description = document.getElementById('description');
    let newDescription = description.value;

    let date = document.getElementById('date');
    let newDate = date.value;

    let newToDo = new ToDo(newTitle, newDescription, newDate, "Options");
    projectLibrary[dataNum].list.push(newToDo);
    displayProject(projectLibrary[dataNum].list);
}

export function handleToDoDisplay(dataNum) {
    displayProject(projectLibrary[dataNum].list);
}


 console.log(projectLibrary[0].list);



 console.log(projectLibrary[0].list);
createHeader(projectLibrary[0].title, 0);
 addProjectToDom(projectLibrary);




displayProject(projectLibrary[0].list);
// console.log(projectLibrary);

// console.log(projectLibrary[0].title);
// console.log(projectLibrary[0].list[0].description);

// console.log(projectLibrary[1].title);