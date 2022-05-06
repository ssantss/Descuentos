function calculo_descuento (precio, descuento, cupon_value){

    const porcentaje_del_precio_con_descuento = 100 - (descuento + cupon_value);
    const precio_con_descuento = (precio * porcentaje_del_precio_con_descuento)/100    

    return precio_con_descuento;


}
function calculo(){
    const input = document.getElementById("Inputprecio");
    const precio = parseInt(input.value);
    const input2 = document.getElementById("Inputdescuento");
    const descuento = parseInt(input2.value);
    const input3 = document.getElementById("Inputcupon");
    const cupon = input3.value;
    const cupon_value = validar_cupon(cupon);
    let resultado = "";
    

    if (cupon_value === undefined){
        resultado = "CUPON INVALIDO"
    }
    else if (cupon_value>0){
        resultado = "El precio de $" + precio + " con un descuento de "+ descuento + "% y un cupon de " + cupon_value + "% es de $" + calculo_descuento(precio,descuento,cupon_value)  

    }
    else {
        resultado = "El precio de $" + precio + " con un descuento de "+ descuento + "% es de $" + calculo_descuento(precio,descuento,cupon_value)
        }

    document.getElementById('resultado').innerHTML = resultado;



}

function validar_cupon(cupon){
    const coupons = [
        "",
        "cupon 1",
        "cupon 2",
        "cupon 3",
    ];

    if (!coupons.includes(cupon)) {
        return; 
    }  else if (cupon === "cupon 1") {
        return descuento = 15;
     } else if (cupon === "cupon 2") {
        return descuento = 30;
     } else if (cupon === "cupon 3") {
        return descuento = 25;
     } else if (cupon === "") {
        return descuento = 0;
     }


}



function enter_calculo (ele) {
    if(event.key === 'Enter') {
        calculo();        
    }
}