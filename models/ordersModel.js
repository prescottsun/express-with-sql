const db = require('./conn');

class OrdersList {
    constructor(customer, product, date) {
        this.customer = customer;
        this.product = product;
        this.date = date;
    }

    static async getAll() {
            try {
                const response = await db.any(`SELECT * FROM orders;`);
                // console.log('response', response);
                return response;
            } catch(error) {
                return error.message
            }
    }
}

module.exports = OrdersList;