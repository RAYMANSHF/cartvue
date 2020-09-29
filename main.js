const app = new Vue({
    el: '#app',
    data: {
        books: [{
                id: 1,
                name: '《算法导论》 ',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《UNIX编程艺术》',
                date: '2006-2',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                date: '2008-10',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '《代码大全》',
                date: '2006-3',
                price: 128.00,
                count: 1
            },
        ]
    },
    methods: {
        // getFinalPrice(price) {
        //     return '￥' + price.toFixed(2)
        // }
        increment(index) {
            // console.log('increment', index);
            this.books[index].count++
        },
        decrement(index) {
            console.log('decrement', index);
            this.books[index].count--
        },
        removeHandle(index) {
            this.books.splice(index, 1);
        }
    },
    computed: {
        totalPrice() {
            // let totalPrice = 0
            //     //1. 普通的for循环
            //     // for (let i = 0; i < this.books.length; i++) {
            //     //     totalPrice += this.books[i].price * this.books[i].count
            //     // }
            //     // 2.let i in this.books方法
            //     // for (let i in this.books) {
            //     //     totalPrice += this.books[i].price * this.books[i].count
            //     // }
            //     // 3.let i of this.books方法
            //     // for (let i of this.books) {
            //     //     totalPrice += i.price * i.count
            //     // }
            //     // 4.高阶函数reduce方法

            // return totalPrice
            return this.books.reduce(function(prevalue, book) {
                return prevalue + book.price * book.count
            }, 0)
        }
    },
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2)
        }
    }

})