const btn = document.querySelector(".btnDark");
const container = document.querySelector(".containerDark");

btn.onclick = function(){
    this.classList.toggle('active')
    container.classList.toggle('active')
}












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



function nome()
{
    let input = document.getElementById("formNome").value;

    input = input.charAt(0).toUpperCase() + input.slice(1);

    let texto = input.split(' ');


    for(let i = 0;i<texto.length;i++){

        if(texto[i] != ' '){

            texto[i] = texto[i][0].toUpperCase() + texto[i].slice(1);
        }
    }

    let textoCapitalizado = texto.join(' ');
    document.getElementById("formNome").value = textoCapitalizado;
   
}

