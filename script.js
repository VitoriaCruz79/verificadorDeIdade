

function verificar(){
    
    // data
    var data = new Date()
    var ano = data.getFullYear()

    // ligação
    var fano = document.getElementById('txtano')

    // tratamento de dados
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else{
        // ligação
            var fsex = document.getElementsByName('radsex')

        // criando elemento html
            var img = document.createElement('img')
            img.style.width = '200px'
            img.style.height = '200px'
            img.setAttribute('id', 'foto')


        // verifica a idade
            var idade = ano - Number(fano.value)

        // define um genero 
            var gênero = ''
       
    
        if(fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10){
            //CRIANÇA
            img.setAttribute('src','1menino.png')

            }else if ( idade < 21){
            //JOVEM
            img.setAttribute('src','2jovem menino.png')

            }else if (idade < 50){
            //ADULTO
            img.setAttribute('src','3homem.png')

            }else {
            //IDOSO
            img.setAttribute('src', '4idoso.png')
            }
        
        }else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src','1menina.png')

                }else if ( idade < 21){
                //JOVEM
                img.setAttribute('src','2jovem menina.png')

                }else if (idade < 50){
                //ADULTO
                img.setAttribute('src', '3mulher.png')

                }else {
                //IDOSA
                img.setAttribute('src', '4idosa.png')
            }
        }


        // ligação
        var res = document.getElementById('res')

        res.style.textAlign = 'center'
        res.innerText = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }


}


document.addEventListener('keydown', function(event){
    if(event.keyCode == 13){
        verificar()
    }
})

