const express = require("express")      //importando a biblioteca do express
const nunjucks = require("nunjucks")    //importando a biblioteca do nunjucks

const server = express()                                //a const server instancia o express
const dataCourses = require('./data/data_courses')      //importando o arquivo com os dados dos cursos
const dataLinks = require('./data/data_links')          //importando o arquivo com os dados das redes sociais

server.use(express.static("public"))    //o express irá observar a pasta Public para servir os arq. estáticos (CSS)

server.set("view engine", "njk")       //setar qual é o motor de views da app, qual é a extensão dos arquivos para abrir 

nunjucks.configure('views', {
    express: server,                    //indica ao nunjucks que vamos usar o Express com a var Server
    autoescape: false,                  //impede que o nunjucks mostre o codigo html em variaveis
    noCache: true                       //bloqueando o cache do nunjucks                         
})

server.get("/", function(req, res){     //request(req) é o que o usuário escreve e response(res) é a resposta da app
    const about = {
        logo_url: "https://pbs.twimg.com/profile_images/953595371875422210/0pWsfSSp_400x400.jpg",
        company: "Rocketseat",
        description: "Mais do que uma plataforma de educação em tecnologia, uma comunidade incrível de programadores em busca do próximo nível",
        techs: [
            {name: "Javascript"},
            {name: "Javascript ES6+"},
            {name: "NodeJS"},
            {name: "ReactJS"},
            {name: "React Native"}            
        ]
    }

    return res.render("about", {about: about, dataLinks})          //render indica qual é a view que será renderizada
})

server.get("/courses", function(req, res){
    return res.render("courses", {items: dataCourses, dataLinks})       //enviando o arquivo de dados para o portifolio dentro da variavel items
})

server.get("/courses/:id", function(req,res){           //passando o id do curso pela rota 
    const id = req.params.id;                           //pegando o id da rota

    const course = dataCourses.find(function(course){   //fazemos uma iteração com cada item do array dataCourse
        return course.id == id                          //verificamos se o id da rota é igual ao id de algum item no array
    })

    if(!course){
        return res.render("not-found")
    }

    return res.render("course", { item: course })

})

server.use(function(req, res) {
    res.status(404).render("not-found");    //renderizar a pag 404
  });

server.listen(5000, function(){             //server escuta a porta 5000, e executa a função
    console.log("Server is running")
})