const imagem = $('#imagem')
const video = $('#video')
const titulo = $('#nome-img')
const erro = $('#erro')
const descricao = $('#descricao')
let date = $('#date')

const requisicao = (date) => {
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=c1KBfL1ufPTGeP9VXEPI1i6NaBQMSxG34BO9qMhC&date=${date}`,
        type: `GET`,
        success: (requestAPI)=>{
            titulo.css('display', 'block')
            titulo.html(`${requestAPI.title}`)
            
            erro.css('display', 'none')

            if (requestAPI.media_type == 'image'){
                imagem.attr('src', `${requestAPI.url}`)
                imagem.css('display', 'flex')
                video.css('display', 'none')
            } else {
                video.css('display', 'flex')
                video.attr('src', `${requestAPI.url}`)
                imagem.css('display', 'none')
            }



            descricao.css('display', 'block')
            descricao.html(`${requestAPI.explanation}`)
        },

        error:(requestAPI, status) => {
                erro.css('display', 'block')
                imagem.css('display', 'none')
                titulo.css('display', 'none')
                descricao.css('display', 'none')
                video.css('display', 'none')
        }
    })
}

$('#form').submit((event) => {
    event.preventDefault()
    date = $(`#date`).val()
    requisicao(date)

})

