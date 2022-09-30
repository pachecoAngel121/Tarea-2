var input = document.getElementsByClassName('Formulario__input');
for (var i = 0; i < input.length; i++){
    input[i].addEventListener('keyup', function(){
        if(this.value.length>=1) {
            this.nextElementSibling.classList.add('nueva');
        }else{
            this.nextElementSibling.classList.remove('nueva');
        }
    })
}