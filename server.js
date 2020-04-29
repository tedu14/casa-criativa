const express = require('express');
const nunjucks = require('nunjucks');

//Vars
const ideias = require('./vars');
const ideiasReverce = [...ideias].reverse();

//Init
const port = 3000;
const server = express();

//Estatic
server.use(express.static("public"));

//Nunjucks
nunjucks.configure('views', {
    express: server,
    noCache: true,
})

//Rotas
server.get('/', (req, res, next) => {
    try {

        let lastideias = [];

        for (let idea of ideiasReverce) {
            if (lastideias.length === 2) {
                break;
            } else {
                lastideias.push(idea);
            }
        }

        return res.render('index.html', { ideias: lastideias });

    } catch (e) {
        return next(e);
    }
});

server.get('/ideias', (req, res, next) => {
    try {
        return res.render('ideas.html', { ideias: ideiasReverce });
    } catch (e) {
        return next(e);
    }
});

//Start
server.listen(port);