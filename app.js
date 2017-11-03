function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const deleteToDo = document.getElementById('deleteToDo');


  addToDoForm.addEventListener('submit', ()=> {
    event.preventDefault();
    // get the text
    let title = newToDoText.value;
    // create a new li
    let newLi = document.createElement('li');
    // create a new input
    let checkbox = document.createElement('input');
    // set the input's type to checkbox
    checkbox.type = 'checkbox';
    // set the title
    newLi.textContent = title;
    // attach the checkbox to the li
    newLi.appendChild(checkbox);
    // attach the li to the ul
    toDoList.appendChild(newLi);
    //empty the input
    newToDoText.value = '';
  });

  deleteToDo.addEventListener('click', ()=> {
    event.preventDefault();
    var input = document.querySelectorAll("INPUT");
    for(var i = 0; i < input.length; i++) {
      if(input[i].checked === true) {
        input[i].parentNode.remove();
      }
    }
  });
};

window.onload = function() {
  alert('The window has loaded');
  onReady();
};
