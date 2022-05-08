var app = new Vue({
    data(){
        return {
            urlBase: 'http://localhost:5000',
            categories: [],
            imag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/UNO_Logo.svg/1200px-UNO_Logo.svg.png",
            name: 'Ana Lizbeth Zermeno Torres',
            matricula: 'A00824913',
            titulo: 'Actividad Instalar NodeJs 2'
        }
    },
    methods: {
        async CallApi(url, method, data) {
            const header = data == null? { method: method,
                                          headers: {'Content-Type': 'application/json'}} :
                                        { method: method,
                                          body: JSON.stringify(data),
                                          headers: {'Content-Type': 'application/json'}}
            try {
                const response = await fetch(url, header);
                return await response.json();
            }
            catch(error) {
                alert('Error.')
            }
        }
    },
    mounted() {
        fetch('http://localhost:5000/category')
          .then(res => res.json())
          .then(data => this.categories = data)
          .catch(err => console.log(err.message))
    }
});
application.mount('#app')

var app4 = new Vue({
    el:'#app-4',
    data: {
        showImage: false,
        imag: GetRandomImage()
    },
});

function GetRandomImage(){
    let picturePath = ''
    let imageBank = ['https://lauraemprende.com/wp-content/uploads/2020/01/joel-muniz-XqXJJhK-c08-unsplash-1080x675.jpg','https://static2.abc.es/media/bienestar/2020/05/26/natacion-koQB--620x349@abc.jpg','https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/styles/bi_570/public/media/image/2021/02/peliculas-online-gratis-2245511.jpg?itok=8ezMNcJY','https://musicopolix.com/blog/wp-content/uploads/2021/04/que-ukelele-comprar-tocando.jpg','https://okdiario.com/img/2019/02/14/afinar-voz-655x368.jpg']
    picturePath += imageBank[Math.floor(Math.random()* imageBank.length)]
    return picturePath
}
