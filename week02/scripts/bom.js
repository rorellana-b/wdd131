const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');
const li = document.createElement('li');
const deleteButton = document.createElement('button');




button.addEventListener('click', function(){
    if (input.value.trim() !== ''){
        
        li.textContent = input.value;
        deleteButton.textContent = 'X';
        li.append(deleteButton);
        li.append(list);
        input.value = '';
        input.focus();
    }
});


deleteButton.addEventListener('click', function(){
    list.removeChild(li);
    input.focus();
});




