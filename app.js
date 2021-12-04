
//Declared my global Variables
var redFlag, greenFlag, collection;
redFlag = document.querySelector('.alert-warning');
greenFlag = document.querySelector('.alert-info');
collection = document.querySelector('.collection');
//add an EventListener to the buttons
document.querySelector('.btn').addEventListener('click', function(e){  
    // create local variable for the task
    var task = document.querySelector('#task').value;
    if ( task === ''){
        //warning for empty input
        //set for 2seconds
        redFlag.style.display = 'block';
         setTimeout(function(){ redFlag.style.display = 'none'}, 1000);
    } else {
        // create tast li
        var list = document.createElement('li');
        //added class names
        list.classList.add('list-group-item', 'd-flex', 'bg-transparent', 'justify-content-between', 'align-items-center');
        //appeded task title to it
        list.textContent = task;
        //create delete task key
        var delKey = document.createElement('span');
        //added bootstrap styling classnames
        delKey.classList.add('badge', 'bg-dark', 'rounded-pill', 'p-2');
        //added delete sign
        delKey.textContent = 'X';
        delKey.style.cursor = 'pointer';
        //append delete button to the li
        list.appendChild(delKey);
        //append li to the collection ol
        collection.appendChild(list);
        //clear input
        document.querySelector('#task').value = '';
        //show success for 2seconds
        greenFlag.style.display = 'block';
        setTimeout(function(){ greenFlag.style.display = 'none'}, 1000);
    };
    e.preventDefault();
})
//add an event listener to the delete key
//single delete button
document.querySelector('.collection').addEventListener('click', function(e){
   if (e.target.parentElement.classList.contains('list-group-item')){
    e.target.parentElement.remove();
   }
})
    //add event listener to the clear task button
document.querySelector('.clear-task').addEventListener('click', function(e){
    if (collection.firstChild){
        while(collection.firstChild){
            collection.removeChild(collection.firstChild);
          }
    } else {
        redFlag.style.display = 'block';
         setTimeout(function(){ redFlag.style.display = 'none'}, 1000);
    }
    e.preventDefault();
})