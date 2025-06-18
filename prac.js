function createCustomElement(){
    let elementType = document.getElementById('elementType').value;
    let content = document.getElementById('elementContent').value;
    document.getElementById('elementContent').value = "";
    //alert(elementType);

    let newElement = document.createElement(elementType);

    switch(elementType){
        case 'img':
            newElement.src= content;

            newElement.style.width = "100px";
        default:
            newElement.textContent = content;
    }
    let playground = document.getElementById("element-playground");
    playground.appendChild(newElement);
}

function clearPlayground(){
    let playground = document.getElementById("element-playground");
    playground.innerHTML = "";
    playground.innerHTML = "<p>Elements will be created here dynamically!</p>";
}

function createState() {
    let state = document.getElementById('state-input').value;
    document.getElementById('state-input').value = "";

    let newState = document.createElement('li');
    newState.textContent = state;

    let stateList = document.getElementById('states-list');
    stateList.appendChild(newState);
}

function removeLastState(){
    let stateList = document.getElementById("states-list");
    let lastItem = stateList.lastElementChild;

    if(lastItem){
        lastItem.style.background = "white";
        lastItem.style.color = "black";
        setTimeout(function(){
            lastItem.remove();
        }, 500);
    } else{
        alert("State list is already empty")
    }
}

function sortStates(){
     let stateList = document.getElementById("states-list");
     let items =  Array.from(stateList.children);
     items.sort(function(item1, item2){
        return item1.textContent.localeCompare(item2.textContent);
     });
     console.log(items)

     stateList.innerHTML ="";
     for(let i=0;i<items.length;i++){
        items[i].classList.add("fade-in")
        stateList.appendChild(items[i]);
     }
}

function highlightStates(){
    let stateList = document.getElementById("states-list");
    let items = Array.from(stateList.children);
    items.forEach(item => {
        item.style.background= "pink";
        item.style.color= "black";
    });
}
