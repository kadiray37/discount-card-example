class cardBase {
    discountRate = 50;
    constructor(firstName,lastName,haveCard,products) {
        this.firstName=firstName;
        this.lastName=lastName;
        this.haveCard=haveCard;
        this.products=products;
    }
    calculate() {
        let totalPrice = 0;
        if (this.checkProducts(this.products)) {
            //sepet dolu
            if (this.haveCard) {
                this.products.forEach((product) => {
                    totalPrice += (product.price * (100 - this.discountRate)/100);
                })
            } else {
                this.products.forEach((product) => {
                    totalPrice += product.price;
                })
            }
        } else {
            alert("en az bir tane ürün ekleyiniz.")
        }
        return totalPrice;
        
    }
    checkProducts(products) {
        if (products != null && products.length > 0) {
            return true;
        } else {
            return false;
        }
    }
     getfirstName(){
        return this.firstName;
    }

    getlastName(){
        return this.lastName;
    }
}