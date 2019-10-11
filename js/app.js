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
            const url = `https://localhost:5001/api/CodigoPostal`
            const res = await fetch(url)
            const json = await res.json()
            if(res.status !== 200)
                throw Error('Algo malo ha sucedido!!!')
            else
                this.datos = json;
        }
    },
    created: async function () {
        try {
            await this.getData();
        } catch (error) {
            console.log(`Error: ${error}`);
            
        }
        
    }
})