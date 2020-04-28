const modalOverlay = document.querySelector(".modal-overlay")
const cursos = document.querySelectorAll('.curso')
const modal = document.querySelector(".modal")

for(let curso of cursos){
    curso.addEventListener("click", function(){
        const urlID = curso.getAttribute("id")
        modalOverlay.classList.add('active')   
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${urlID}`
    })
}

document.querySelector(".maximize-modal").addEventListener("click", function(){
    if(modal.classList.contains("maximize")){
        modal.classList.remove("maximize")
    }else{
        modal.classList.add("maximize")
    }
})

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active") 
    modal.classList.remove("maximize")
})