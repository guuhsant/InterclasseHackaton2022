/* Data dos jogos */
    const btnInit = document.querySelector('#form-jogos').addEventListener('click', ()=>{
    const formJogos = document.querySelector('.link-jogos');
    formJogos.classList.add('active')
})

    const btnExit = document.querySelector('#close-icon').addEventListener('click', ()=>{
        const formJogos = document.querySelector('.link-jogos');
        formJogos.classList.remove('active')
    })

    /* Data dos treinos */

    const btnTreinos = document.querySelector('#form-treinos');
    btnTreinos.addEventListener('click', ()=>{
        const formTreinos = document.querySelector('.link-treinos');
        formTreinos.classList.add('teste');
    })
    const btnSairTreinos = document.querySelector('#close-icon-2').addEventListener('click', ()=>{
        const formTreinos = document.querySelector('.link-treinos');
        formTreinos.classList.remove('teste')
    })


    /* Times */

    const btnTimes = document.querySelector('#form-times');
    btnTimes.addEventListener('click', ()=>{
        const formTimes = document.querySelector('.link-times');
        formTimes.classList.add('teste');
    })
    const btnSairTimes = document.querySelector('#close-icon-3').addEventListener('click', ()=>{
        const formTimes = document.querySelector('.link-times');
        formTimes.classList.remove('teste')
    })

    /* Chaveamento */

   const btnChaveamento = document.querySelector('#form-chave').addEventListener('click', ()=>{
       const formChave = document.querySelector('.link-chave')
       formChave.classList.add('teste')
   })

   const btnSairChaveamento = document.querySelector('#close-icon-4').addEventListener('click', ()=>{
    const formChave = document.querySelector('.link-chave')
    formChave.classList.remove('teste')
   })