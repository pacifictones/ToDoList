import { add } from 'date-fns';
import './style.css';

export default function loadPage() {
    // Create Elements

    const content = document.createElement('div');
    const topBar = document.createElement('div');
    const container = document.createElement('div');
    const sideBar = document.createElement('div');
    const main = document.createElement('div');
    const addButton = document.createElement('button');
   
   //Add class to Elements
    content.classList.add('content');
    container.classList.add('container');
    sideBar.classList.add('sideBar');
    sideBar.setAttribute('id', 'sideBar');
    topBar.classList.add('topBar');
    main.classList.add('main');
    addButton.classList.add('addButton');

    //Append Elements
    // document.body.appendChild(content);
    content.appendChild(topBar);
    content.appendChild(container);
    container.appendChild(sideBar);
    container.appendChild(main);
    sideBar.appendChild(addButton);

    //Add content
    // content.innerHTML = "projectLibrary[0].title";
    addButton.innerHTML = "New Project";
    main.innerHTML = "what the heck";


    
return content;
}


