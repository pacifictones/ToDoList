

export default function addToDom(projectLibrary) {
    const sideBar = document.getElementById('sideBar');
    console.log(projectLibrary.length);
    for (let i = 0; i < projectLibrary.length; i++){
    const info = document.createElement('div');
    info.classList.add('info');
    info.innerHTML = projectLibrary[i].title; 
    sideBar.appendChild(info);
    console.log(projectLibrary[i].title)
}
    console.log("add to dom test")
   
}