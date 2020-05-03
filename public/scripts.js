const modalOverlay = document.querySelector(".modal-overlay")
const cursos = document.querySelectorAll('.curso')
const modal = document.querySelector(".modal")

for(let curso of cursos){
    curso.addEventListener("click", function(){
        const urlID = curso.getAttribute("id")
        window.location.href = `/courses/${urlID}`
        
        // window.location.href = `https://rocketseat.com.br/${urlID}`

    })
}