const textBox = document.querySelector('input');
const errorMessage = document.querySelector('.error');
const submit = document.querySelector('form');
const button = document.querySelector('#button1');
button.style.pointerEvents = 'none';
button.style.opacity = '50%';
var value;
function parsed()
{
    
    if(textBox.value.length === 0)
    {
        errorMessage.textContent = "Can't be left empty";
    }
    else if(textBox.value.length !== 0)
    {
        if(textBox.value.includes('@') && textBox.value.endsWith('.com'))
        {
            errorMessage.textContent = "You're good to go!";
            errorMessage.style.color = 'green';
            button.style.pointerEvents = 'all';
            button.style.opacity = '100%';
            
        }
        else
        {
            errorMessage.textContent = "Valid email required";
            errorMessage.style.color = 'hsl(4, 100%, 67%)';
            button.style.pointerEvents = 'none';
            button.style.opacity = '50%';
        }
        value = textBox.value;
    }

}



textBox.addEventListener('keyup', parsed);
submit.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name1 = textBox.value;
    sessionStorage.setItem('names', name1);
    window.location.href = 'preceedingPages/index2.html';
});


 