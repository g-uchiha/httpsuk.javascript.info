const product = {
    name: "Ноутбук",
    price: 0
};

while (true) {
    const askProperty = prompt("Ask any property");
    if (askProperty === null) break;

    if (askProperty in product) {
        alert(product[askProperty]);
        continue;
    }

    alert("Такої властивості не існує");
}