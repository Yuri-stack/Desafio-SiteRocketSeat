const cursos = document.querySelectorAll('.curso')

for(let curso of cursos){
    curso.addEventListener("click", function(){

        const urlID = curso.getAttribute("id")
        
        window.location.href = `/courses/${urlID}`
        
    })
}