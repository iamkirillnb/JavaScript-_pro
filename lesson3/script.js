const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'


class GoodsItem {
    constructor(product_name, price) {
        this.product_name = product_name;
        this.price = price;
    }
    render() {
        return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price}</p></div>`;
    }

    add_to_basket() {
        
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        let url = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json'
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.goods = data;
                this.render();
                this.get_total();
            })
            .catch((err) => {
                console.log(err.text);
            });
    }
    render() {
        let listHtml = "";
        this.goods.forEach((good) => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            listHtml += goodItem.render();
        });
        document
            .querySelector(".goods-list")
            .insertAdjacentHTML("afterbegin", listHtml);
    }
    get_total() {
        let total = 0;
        this.goods.forEach((item) => (total += (+item.price)));
        document.querySelector("#basket_total_price").insertAdjacentHTML("beforeend", total);
    }
}

class Basket {
    constructor(items) {
        this.items = items;
    }
    get_total_price() {
        pass;
    }
}

class BasketItem {
    constructor(item) {
        this.item = item;
    }
    get_price() {
        pass;
    }
    add_discount() {
        pass;
    }
}

const list = new GoodsList();
list.fetchGoods()








// Задание со ***

// class Hamburger {
//     constructor(size, stuffing) {
//         this.size = size;
//         this.stuffing = stuffing;
//         this.humberger = {big: {price: 100, call: 40 }, small: {price: 50, call: 20 }}
//         this.topping = []
//         this.tops = []
//         this.stuffing = []
//     }
//     fetchGoods() {
//         this.tops = [
//             { cheese: { price: 10, cal: 20 }},
//             { salat: { price: 20, cal: 5 }},
//             { potato: { price: 15, cal: 10 }},
//             { dressing: { price: 15, cal: 0 }},
//             { mayonnaise: { price: 20, cal: 10 }},
//         ];
//     }

//     addTopping(topping) {
//         this.tops.filter(top => {
//             if (topping in top) {
//                  this.topping.push(top)
//                 }
//             })
//     } // Добавить добавку
//     removeTopping(topping) {
//         this.tops.filter(top => {
//             if (topping in top) {
//                  this.topping.pop(top)
//                 }
//             })
//     } // Убрать добавку }
//     getToppings(topping) {
//         console.log(this.topping)
//     }
//     // Получить список добавок
//     getSize() {
//         console.log(`Humburger size is ${this.size}`)
//     } // Узнать размер гамбургера
//     getStuffing() {
//         this.topping.forEach(top => {
//             this.stuffing.push(Object.keys(top).join())
//         })
//         console.log(`this.stuffing=${this.stuffing}`);
//     } // Узнать начинку гамбургера
//     calculatePrice() {
//         let total_price  = 0;
//         this.topping.forEach(top => {
//             total_price += +Object.values(top)[0].price
//         })
//         console.log(`total_price=${total_price}`);
//     } // Узнать цену
//     calculateCalories() {
//         let total_cal  = 0;
//         this.topping.forEach(top => {
//             total_cal += Object.values(top)[0].cal
//         })
//         console.log(`total_cal=${total_cal}`);
//     } // Узнать калорийность
// }

// let hum = new Hamburger('big', '')
// hum.getSize();
// hum.fetchGoods();
// hum.addTopping('cheese');
// hum.addTopping('dressing');
// hum.addTopping('potato');
// hum.removeTopping('potato');
// hum.getToppings();
// hum.getStuffing();
// hum.calculatePrice();
// hum.calculateCalories();

