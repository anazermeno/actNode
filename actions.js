var app = new Vue({
    el: '#app',
    data(){
        return {
            lapices: 0,
            pluma: 0,
            borrador: 0,
            sacapuntas: 0,
            libreta: 0,
            lapicesIn: 0,
            plumaIn: 0,
            borradorIn: 0,
            sacapuntasIn: 0,
            libretasIn: 0,
            imag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/UNO_Logo.svg/1200px-UNO_Logo.svg.png",
            name: 'Ana Lizbeth Zermeno Torres',
            matricula: 'A00824913',
            titulo: 'Actividad Instalar NodeJs 2'
        }
    },
    methods: {
        agregarLapices(){
            this.lapices += 1;
            this.lapicesIn -= 1;
            this.$refs.lapicesIn.textContent = this.lapicesIn;
            this.$refs.lapices.textContent = this.lapices;
            this.$refs.imag = "https://http2.mlstatic.com/D_NQ_NP_780707-MLM44633984001_012021-O.jpg";
        },
        agregarPluma(){
            this.pluma += 1;
            this.plumaIn -= 1;
            this.$refs.plumaIn.textContent = this.plumaIn;
            this.$refs.pluma.textContent = this.pluma;
            this.$refs.imag = "http://papeleria.regislasalle.edu.mx/wp-content/uploads/2019/07/plumanegra010.jpg";
        },
        agregarBorrador(){
            this.borrador += 1;
            this.borradorIn -= 1;
            this.$refs.borradorIn.textContent = this.borradorIn;
            this.$refs.borrador.textContent = this.borrador;
            this.$refs.imag = "https://www.comercializadoralumar.com/wp-content/uploads/2021/01/borrador-pelika-m20.jpg";
        },
        agregarSacapuntas(){
            this.sacapuntas += 1;
            this.sacapuntasIn -= 1;
            this.$refs.sacapuntasIn.textContent = this.sacapuntasIn;
            this.$refs.sacapuntas.textContent = this.sacapuntas;
            this.$refs.imag = "https://upload.wikimedia.org/wikipedia/commons/d/d0/Sacapuntametalico.gif";
        },
        agregarLibreta(){
            this.libreta += 1;
            this.libretasIn -= 1;
            this.$refs.libretasIn.textContent = this.libretasIn;
            this.$refs.libreta.textContent = this.libreta;
            this.$refs.imag = "https://unionpapelera.com.mx/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/1/2/12786.png";
        },

        autoLapices(){
            this.lapicesIn+=this.lapicesSec;
            this.$refs.lapicesIn.textContent = this.lapicesIn;
        },
        autoPluma(){
            this.plumaIn+=this.plumaSec;
            this.$refs.plumaIn.textContent = this.plumaIn;
        },
        autoBorrador(){
            this.borradorIn+=this.borradorSec;
            this.$refs.borradorIn.textContent = this.borradorIn;
        },
        autoSacapuntas(){
            this.sacapuntasIn+=this.sacapuntasSec;
            this.$refs.sacapuntasIn.textContent = this.sacapuntasIn;
        },
        autoLibretas(){
            this.libretasIn+=this.libretasSec;
            this.$refs.libretasIn.textContent = this.libretasIn;
        }
    },
    computed: {
        lapicesSec() {
            return this.lapicesIn + 1;
        },
        plumaSec() {
            return this.plumaIn + 1;
        },
        borradorSec() {
            return this.borradorIn + 1
        },
        sacapuntasSec() {
            return this.sacapuntasIn + 1;
        },
        libretasSec() {
            return this.libretasIn + 1;
        }
    },
    mounted() {
        setInterval(this.autoLapices, 5000);
        setInterval(this.autoPluma, 5000);
        setInterval(this.autoBorrador, 5000);
        setInterval(this.autoSacapuntas, 5000);
        setInterval(this.autoLibretas, 5000);      
    }
});