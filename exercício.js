const arroz = 30.00;
const feijao = 10.00;
const fuba = 7.20;
const leite = 6.33;
const valorNaCarteira = 46.00

function compraMercado (arroz, feijao, fuba, leite) {
    return (arroz + feijao + fuba + leite);
}

let totalDaCompra = compraMercado (arroz, feijao, fuba, leite)
let trocoNaCarteira = valorNaCarteira - totalDaCompra

if 
    (totalDaCompra <= valorNaCarteira && trocoNaCarteira) {
        console.log (`total da compra R$ ${totalDaCompra}, Compra autorizada. Seu troco R$ ${trocoNaCarteira}`);   
    }
    else {
        console.log (`total da compra R$ ${totalDaCompra}, valor não autorizado`)
    }
    