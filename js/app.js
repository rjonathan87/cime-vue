const app = new Vue({
    el: "#app",
    data: {
        datos: []
    },
    methods: {
        async getData() {
            try {
                const url = `https://localhost:5001/api/CodigoPostal`
                const res = await fetch(url)
                const json = await res.json()
                this.datos = json;
            } catch (error) {
                console.log(`Error: ${error}`);
            }
        },
        getDetails(id) {
            // console.log(this.datos[id].dcodigo);


            document.getElementById('Dcodigo').innerHTML = this.datos[id].dcodigo;
            document.getElementById('Dasenta').innerHTML = this.datos[id].dasenta;
            document.getElementById('Dmnpio').innerHTML = this.datos[id].dmnpio;
            document.getElementById('Destado').innerHTML = this.datos[id].destado;
            document.getElementById('Dciudad').innerHTML = this.datos[id].dciudad;

        }
    },
    created: async function () {
        this.getData();
    }
})