const CarritoCompra = require("../index");

describe("CarritoCompra", () => {
  let carrito;

  beforeEach(() => {
    carrito = new CarritoCompra();
  });

  test("Agregar producto al carrito", () => {
    carrito.agregarProducto({ nombre: "Producto 1", precio: 20 });
    expect(carrito.carrito.length).toBe(1);
  });

  test("Calcular total de la compra", () => {
    carrito.agregarProducto({ nombre: "Producto 1", precio: 20 });
    carrito.agregarProducto({ nombre: "Producto 2", precio: 30 });
    expect(carrito.calcularTotal()).toBe(50);
  });

  test("Aplicar descuento al total de la compra", () => {
    carrito.agregarProducto({ nombre: "Producto 1", precio: 20 });
    carrito.agregarProducto({ nombre: "Producto 2", precio: 30 });
    expect(carrito.aplicarDescuento(10)).toBe(45);
  });
});
