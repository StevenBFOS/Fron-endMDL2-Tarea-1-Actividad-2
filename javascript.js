/** Una tienda de pantalones tiene en promoción sus productos. Por eso, se requiere realizar una disminución en el precio
 * de los artículos que vende, según la siguiente tabla de precios:
 * 
 * De 10 000 a 20 000 colones = 5%
 * De 20 001 a 30 000    = 10%
 * De 30 001 en adelante = 15%
 * 
 * Cree un script que solicite el precio del pantalón y muestre el nuevo precio con el descuento.
 */

function aplicarDescuento (){
    let precioPantalon, descuento, precioFinal;
    precioPantalon = parseInt(prompt("¿Cuál es el precio del pantalón?"));

    if (precioPantalon <= 9999){
        document.getElementById("descuentoAplicado").textContent = "NO APLICA DESCUENTO"
    }
    else if (precioPantalon >= 10000 && precioPantalon <= 20000){
        descuento = precioPantalon*0.05;
        precioFinal = precioPantalon - descuento;
        document.getElementById("descuentoAplicado").textContent = "El precio final es: " + "¢" + precioFinal
    }
    else if (precioPantalon >= 20001 && precioPantalon <= 30000){
        descuento = precioPantalon*0.1;
        precioFinal = precioPantalon - descuento;
        document.getElementById("descuentoAplicado").textContent = "El precio final es: " + "¢" + precioFinal
    }
    else {
        descuento = precioPantalon*0.15;
        precioFinal = precioPantalon - descuento;
        document.getElementById("descuentoAplicado").textContent = "El precio final es: " + "¢" + precioFinal
    }
}