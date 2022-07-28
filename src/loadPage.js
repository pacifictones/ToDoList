import { add } from 'date-fns';
import './style.css';
import { handleAddButton } from './index.js';
import addProjectToDom from './addProject.js';
import { handleAddTodo } from './index.js';

export default function loadPage() {
    // Create Elements

    const content = document.createElement('div');
    const topBar = document.createElement('div');
    const container = document.createElement('div');
    const sideBar = document.createElement('div');
    // const projectList = document.createElement('div');
    const main = document.createElement('div');
    const addButton = document.createElement('button');
    const listTitle = document.createElement('div');
    const list = document.createElement('ul');
    const input = document.createElement('input');

    //create the pop-up form
    const formPopUp = document.createElement('div');
    formPopUp.setAttribute('id', 'formPopUp');

    const formInput = document.createElement('form');
    formInput.classList.add('formInput');

    const titleInput = document.createElement('input');
    titleInput.setAttribute('id', 'titleInput');
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'titleInput');
    titleLabel.innerHTML = "Title:";

    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('id', 'description');
    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'description');
    descriptionLabel.innerHTML = "Description:";

    const dateInput = document.createElement('input');
    dateInput.setAttribute('id', 'date');
    dateInput.setAttribute('type', 'date');
    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'date');
    dateLabel.innerHTML = 'Date:';

     

    const closeFormButton = document.createElement('button');
    closeFormButton.setAttribute('id', 'closeFormButton');
    closeFormButton.type = 'button';
    addCloseClick(closeFormButton);
    closeFormButton.innerHTML = 'Cancel';

    const submitFormButton = document.createElement('button');
    submitFormButton.setAttribute('id', 'submitFormButton');
    submitFormButton.type = 'button';
    submitFormButton.setAttribute('data-num', 0);
    submitFormButton.innerHTML = 'Add';

    submitFormButton.addEventListener('click', () => {
    const dataNum = submitFormButton.dataset.num;
        handleAddTodo(dataNum);
    })


    
    
   
   //Add class to Elements
    content.classList.add('content');
    container.classList.add('container');
    sideBar.classList.add('sideBar');
    sideBar.setAttribute('id', 'sideBar');

    // projectList.setAttribute('id', 'projectList')
    topBar.classList.add('topBar');
    main.classList.add('main');
    main.setAttribute('id', 'main');
    listTitle.setAttribute('id', 'listTitle');
    list.setAttribute('id', 'list');
    addButton.classList.add('addButton');
    addClick(addButton);
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'addProjectInput');

    //Append Elements
    
    content.appendChild(topBar);
    content.appendChild(container);
    container.appendChild(sideBar);
    container.appendChild(main);
    main.appendChild(listTitle);
    main.appendChild(formPopUp);

    formPopUp.appendChild(formInput);
    formInput.appendChild(titleLabel);
    formInput.appendChild(titleInput);
    formInput.appendChild(descriptionLabel);
    formInput.appendChild(descriptionInput);
    formInput.appendChild(dateLabel);
    formInput.appendChild(dateInput);
    
    
    formInput.appendChild(submitFormButton);
    formInput.appendChild(closeFormButton);

    main.appendChild(list);
    sideBar.appendChild(input);
    sideBar.appendChild(addButton);
    // sideBar.appendChild(projectList);

    //Add content
   
    addButton.innerHTML = "Add Project";
   

    
return content;
}

function addClick(element) {
    return element.addEventListener('click', handleAddButton);
}

function addCloseClick(element) {
    element.addEventListener('click', () => {
        document.getElementById('formPopUp').style.display = "none";
    })
}