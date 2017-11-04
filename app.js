function onReady() {
  //Allows us to assign an id to each item in the toDos array
  let toDoId = 0;
  // Our state is an array of to-dos
  // Changed from const to var so it could be modified later
  var toDos = [];
  //Stores the getElementById of the form
  const addToDoForm = document.getElementById('addToDoForm');


  // This function will add new to-dos to our arrays.
  function createNewToDo() {
    //Allows us to access the text input for the title of our created to-do
    const newToDoText = document.getElementById('newToDoText');
    //Prevents the form from submitting a blank list item. Returns if the
    //newToDoText value is falsy
    if(!newToDoText.value) { return; }
    //Pushes an object into our array, containing the title and whether it is
    //complete
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: toDoId
    });
    //Resets the text input to blank
    newToDoText.value = '';

    toDoId++;
    //Calls on the renderTheUI function and 
    //Renders the updated UI with the new list item, checkbox, and delete button
    renderTheUI();
  }

  //Takes our current state (toDos array) and renders the UI
  function renderTheUI() {
    //Stores the getElementById of the ul
    const toDoList = document.getElementById('toDoList');
    //Sets the newLi to an empty string
    toDoList.textContent = '';
    //The forEach will apply the following function to each item is the toDos
    //array
    toDos.forEach(function(toDo) {
      //Creates a new li
      const newLi = document.createElement('li');
      //Creates a new input
      const checkbox = document.createElement('input');
      //sets the input type to checkbox
      checkbox.type = 'checkbox';
      //creates a new button
      const deleteBtn = document.createElement('button');
      //Adds text to the delete button
      deleteBtn.textContent = 'Delete Button';
      //Sets the text that will display in the li to the value of the title key
      //in the object in the toDo array
      newLi.textContent = toDo.title;
      //Nests each li created by the function in the ul: toDoList
      toDoList.appendChild(newLi);
      //Nests each input created by the function in the li that was also created
      newLi.appendChild(checkbox);
      //Nests the delete button created by the function in the li that
      //was also created
      newLi.appendChild(deleteBtn);
      //Adds an event listener for when the delete button is clicked
      deleteBtn.addEventListener('click', event => {
        //Sets a new variable that allows us to change the the array.
        //Filters the toDos array. Since toDo.id == toDos.id the function
        //returns false thus removing the object from the array
        let arr = toDos.filter(toDos => toDo.id != toDos.id);
        //Modifies the toDos array to reflect the filter array
        toDos = arr;
        //Re-renders the UI
        renderTheUI();
      });
    });
  }

  //Adds an event listener for the submit button in our form: addToDoForm
  addToDoForm.addEventListener('submit', event => {
    //preventDefault prevents the page from reloading
    event.preventDefault();
    //Calls on the function createToDo
    createNewToDo();
  });

  //Calls on the function: renderTheUI. This will render a blank list when the
  //page first loads
  renderTheUI();
};

//Waits for the window to load
window.onload = function() {
  onReady();
};
