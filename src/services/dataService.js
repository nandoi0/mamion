import axios from 'axios'

var catalog = [
    {
        _id: "sdjfkljsd",
        title: "Birra Tacos",
        price: 8.99,
        stock: 3,
        image: "birra tacos.jpeg",
    },
    {
        _id: "dfgdfg",
        title: "tacos",
        price: 8.99,
        stock: 3,
        image: "tacos.jpg",
    },
    {
        _id: "hrtyhrthd",
        title: "Carne Asada Quesadilla",
        price: 8.99,
        stock: 3,
        image: "carne asada ques.jpeg",
    },
    {
        _id: "werrewtgb",
        title: "Tacos Gobernador",
        price: 8.99,
        stock: 3,
        image: "tacos gobernador.jpeg",
    },
    {   _id: "cbcvnb",
        title: "Grilled Fish Tacos",
         price: 8.99,
        stock: 3,
        image: "Grilled-Fish-Tacos-8.jpeg",
    },
];

class DataService{
    async getCatalog(){
        // retriece data from server
        // var catalog = request();
        let resp = await axios.get("http://127.0.0.1:5000/api/catalog");
        return resp.data;
        //return catalog;
    }

    async getCoupons() {
        let resp = await axios.get("http://127.0.0.1:5000/api/couponCode");
        return resp.data;
    }

    saveProduct(prod){
    console.log("sending prod to server");
    }

    async saveCouponCode(code) {
        let resp = await axios.get("http://127.0.0.1:5000/api/couponCode", code);
    }
}

export default DataService;