
function changeClr(cor){
    document.getElementById('anime').style.backgroundColor = cor

}

function changeRadius(px){
        document.getElementById('anime').style.borderRadius = `${px}%`
}

function changeLarg(l){
    if(l > 50){
        alert('O valor não pode ser maior que 50.')
    }else{
        document.getElementById('anime').style.border = `solid ${l}px`
    }
}

function changeBorClr(cor){
    document.getElementById('anime').style.borderColor = cor
}

function iniciar(){
let typeani = document.getElementsByName('typeani')

        if(typeani[0].checked){
            document.getElementById('anime').style.animation = 'opacity 3s infinite alternate'
        }else if(typeani[1].checked){
            document.getElementById('anime').style.animation = 'rotate 3s infinite alternate'
        }else{
            document.getElementById('anime').style.animation = 'escala 3s alternate infinite ease-in'
        }
}