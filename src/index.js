import './style.css';
import ToDo from './createToDo.js';
import Project from './newProject.js';
import loadPage from './loadPage.js';
import addToDom from './addProject.js';


document.body.appendChild(loadPage());

const toDo = new ToDo('Shop', 'Groceries', 'Tomorrow', 'Urgent');
// console.log(toDo);

const toDo1 = new ToDo("Eat", 'some food', "today", "urgent");
// console.log (toDo1);

const projectLibrary = [];

const project1 = new Project("shopping");
project1.list = [];
project1.list.push(toDo);
project1.list.push(toDo1);
projectLibrary.push(project1);
// console.log(projectLibrary);

const project2 = new Project('eating');
projectLibrary.push(project2);
// console.log(projectLibrary);

// console.log(projectLibrary[0].title);
// console.log(projectLibrary[0].list[0].description);

// console.log(projectLibrary[1].title);
 addToDom(projectLibrary);

