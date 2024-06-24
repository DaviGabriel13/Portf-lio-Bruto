const observador = new IntersectionObserver((info) => {
    info.forEach((teste) => {
        if(teste.isIntersecting){
            teste.target.classList.add('opacidade')
        }
        else{
            teste.target.classList.remove('opacidade')
        }
    })
})

const elementos = document.querySelectorAll('.scroll')

elementos.forEach((objeto) =>{
    observador.observe(objeto)
})

function cell(){
    
    let tel = document.getElementById("tel").value;
    if(tel[0]!= "("){
        if(tel[0]!= undefined){
            document.getElementById("tel").value = "("+tel[0]
        }
    }


    if(tel[3]!= ")"){
        if(tel[3]!= undefined){
            document.getElementById("tel").value = tel.slice(0,3) + ")"+" "+tel[3]+" "
        }
    }

    if(tel[11]!= "-"){
        if(tel[11]!= undefined){
            document.getElementById("tel").value = tel.slice(0,11) + "-"+tel[11]
        }
    }
    
    if(tel[16!=""]){
        document.getElementById("tel").value = tel.slice(0,16)+""
    }


   
}
