var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Lista de categorías en la tienda'
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        bucl: getDataDB,
        showList: false,
    }
});

function GetRandomImage(){
    let picturePath = ''
    let imageBank = ['https://m.media-amazon.com/images/I/81u8guV501L._AC_SL1500_.jpg','https://m.media-amazon.com/images/I/61dKhgEaCiL._AC_SL1500_.jpg', 'https://m.media-amazon.com/images/I/813j-GmBawL._AC_SL1500_.jpg']
    picturePath += imageBank[Math.floor(Math.random()* imageBank.length)]
    return picturePath
}


var app4 = new Vue({
    el:'#app-4',
    data: {
        showImage: false,
        imag: GetRandomImage()
    },
});

var app5 = new Vue({
    el:'#app-5',
    data: {
        name: 'Ana Lizbeth Zermeno Torres',
        matricula: 'A00824913',
        titulo: 'Actividad individual: Node js'
    }
});

function getDataDB(){
    // Paquete necesario para conectar a bases de datos MySQL.
    var mysql = require('mysql');
    // Consulta SQL.
    var sql = 'SELECT * FROM category LIMIT 10';
    var cat = [];

    // Parámetros de conexión a la base de datos.
    var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database : 'eshop'
    });

    // Funcion que nos devolverá resultados de la base de datos.
    con.connect(function(err) {
    if (err) throw err;
    con.query(sql, function (err, result) {
        if (err) throw err;

        // Bucle que recore los resultados y pinta en consola.
        for(i=0; i<result.length; i++){
            cat[i] = result[i].name;
        }

    });
    });

    return cat;
}

var app2 = new Vue({
    el: '#app-2',
    data: {
        bucl:[
            { message: "TV e Vídeo" },
            { message: "Televisores" },
            { message: "DVD e Blu-Ray Players" },
            { message: "Home Theater" },
            { message: "Som Automotivo" },
            { message: "MP3 e MP4 Players" },
            { message: "Conversores Digitais" },
            { message: "Acessórios para TVs" },
            { message: "Outros Consoles" },
            { message: "Eletrodomésticos" },
        ],
        showList: false,
    }
});

