"use strict"
// fetching elements
const submitTodo = document.getElementById('form');
const myul = document.getElementById('list');
const search = document.querySelector('input');

// adding event listeners
submitTodo.addEventListener('submit',addlist);
myul.addEventListener('click',removeobject);
search.addEventListener('keyup',searchTodo);

// function that adds a todo
function addlist(e){
    e.preventDefault();
    //creating li tag for displaying todo and adding bootstrap classes to it
    var listitem = document.createElement('li');
    listitem.className = "list-group-item mt-1 font-weight-bold text-capitalize text-break";
    // taking text value of a todo and appending a text node of that value to li tag
    var input = document.querySelector('input[type="text"]').value;
    listitem.appendChild(document.createTextNode(input));
    // adding li tag to ul
    myul.appendChild(listitem);
    //creating delete button and adding bootstrap classes to it
    var delbtn = document.createElement('button');
    delbtn.className = "btn btn-danger float-right";
    // adding delete button to li tag
    delbtn.appendChild(document.createTextNode('X'))
    listitem.appendChild(delbtn);
    // making todo adder have no value after adding a todo
    document.querySelector('input[type="text"]').value = " ";
}

// functions that removes a todo
function removeobject(e){
    // cheching that we select the delete button only to apply remove function on it
    if(e.target.classList.contains('btn-danger')){
        if(confirm('Are you sure ?')){
            var li = e.target.parentElement ;
            //removing delete button 
            myul.removeChild(li);
        }
    }
}

// function that search's for a todo
function searchTodo(){
    // creating list of all li tags in ul
    var items = myul.getElementsByTagName('li');
    // taking value in search and coverting it to lowercase
    var searchVal = search.value.toLowerCase();
    // creating array of text elements of li's
    Array.from(items).forEach( item => {
        var text = item.firstChild.textContent;
        // searching letter by letter to match if there is a todo or not
        if( text.toLowerCase().indexOf(searchVal) != -1 ){
            item.style.display = "block" ;
        }
        else {
            item.style.display = "none" ;
        }
    })
}