const app = new Vue({
    el: "#app",
    data: {
        datos: []
    },
    methods: {
        getData() {
            var that = this;
            axios.get('https://localhost:5001/api/CodigoPostal')
                .then(function (response) {
                    // console.log(response.data);
                    that.datos = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    created: function () {
        // var that = this;
        // axios.get('https://localhost:5001/api/CodigoPostal')
        //     .then(function (response) {
        //         that.datos = response.data;
        //     })
        //     .catch(function (error) {
        //         console.log('Error: ' + error);
        //     });
        this.getData();
    }
})