let massage =
    `
indirimli kartınız var mı ?
1-evet
2-hayır

`;

const products = [
    { productName: "milk", price: 15 },
    { productName: "bread", price: 10 },
    { productName: "eggs", price: 5 }
]

let result = confirm(massage);
let totalPrice;

if (result) { 
    // indirim kartı vardır
    let firstName = prompt("isminizi giriniz: ");
    let lastName = prompt("soyisminizi giriniz: ");
    const costumer = new Customer(firstName,lastName,result,products);
    totalPrice = costumer.calculate();

    alert(` Müsteri Bilgileri: ${firstName} ${lastName}
        Ödenecek Tutar: ${totalPrice}`);
} else {
    const costumer = new Customer(null, null, result, products);
    totalPrice = costumer.calculate();
    alert(`Ödenecek Tutar: ${totalPrice}`);
}