import './style.css';
import ToDo from './createToDo.js';
import Project from './newProject.js';
import loadPage from './loadPage.js';
import addProjectToDom, {displayProject} from './addProject.js';
import { createHeader } from './addProject.js';

document.body.appendChild(loadPage());

const toDo = new ToDo('Shop', 'Groceries', 'Tomorrow');


const toDo1 = new ToDo("Eat", 'some food', "today");

const toDo3 = new ToDo("Read", "Books", "Now");


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
    displayProject(projectLibrary[dataNum].list);

    title.value = '';
    description.value = '';
    date.value = '';
    document.getElementById('formPopUp').style.display = "none";
}

export function handleToDoDisplay(dataNum) {
    displayProject(projectLibrary[dataNum].list, dataNum);
}

export function handleCheckBox(element, p,d) {
    const status = projectLibrary[p].list[d].status;
    
    if(element.checked) {
        console.log("boom");
    } else {
        console.log('oops');
    }
    console.log(p + " " + d);
    console.log(projectLibrary[p].list[d]);

}


 console.log(projectLibrary[0].list);



 console.log(projectLibrary[0].list);
createHeader(projectLibrary[0].title, 0);
 addProjectToDom(projectLibrary);




displayProject(projectLibrary[0].list, 0);
// console.log(projectLibrary);

// console.log(projectLibrary[0].title);
// console.log(projectLibrary[0].list[0].description);

// console.log(projectLibrary[1].title);