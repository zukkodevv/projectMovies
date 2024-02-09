class CarritoCompra {
  constructor() {
    this.carrito = [];
  }

  agregarProducto(producto) {
    this.carrito.push(producto);
  }

  calcularTotal() {
    let suma = 0;
    for (let i = 0; i < this.carrito.length; i++) {
      suma += this.carrito[i].precio;
    }
    return suma;
  }

  aplicarDescuento(porcentaje) {
    const total = this.calcularTotal();
    return total * (1 - porcentaje / 100);
  }
}
module.exports = CarritoCompra;
