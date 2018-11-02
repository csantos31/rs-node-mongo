const express = require('express');
const mongose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o app
const app = express();

//iniciando o db
mongose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
requireDir('./src/models');

const Product = mongose.model('Product');

//primeira rota
app.get('/',(req, res) => {

    Product.create({title: 'React native',
                     description: 'Build Native Apps with React',
                        url: 'http://github.com/facebook/react-native'
                    });

    return res.send('Hello Rocketsea    t!');
});

app.listen(3001);