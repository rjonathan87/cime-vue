const app = new Vue({
    el: "#app",
    data: {
        datos: []
    },
    methods: {
        async getData() {
            // var that = this;
            // axios.get('https://localhost:5001/api/CodigoPostal')
            //     .then(function (response) {
            //         // console.log(response.data);
            //         that.datos = response.data;
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //     });
            // await fetch('https://localhost:5001/api/CodigoPostal')
            //     .then(res => {
            //         return res.json()
            //     })
            //     .then(data => {
            //         this.datos = data;
            //     })
            //     .catch(err => {
            //         console.log(err);
            //     })
            try {
                const url = `https://localhost:5001/api/CodigoPostal`
                const res = await fetch(url)
                const json = await res.json()
                this.datos = json;
            } catch (error) {
                console.log(`Error: ${error}`);
                
            }
        }
    },
    created: async function () {
        this.getData();
    }
})