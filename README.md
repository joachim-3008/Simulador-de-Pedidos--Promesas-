# 🍕 Async Pizza.Co - Simulador de Pedidos

Proyecto práctico para aplicar conceptos de asincronía en JavaScript, simulando el flujo de trabajo de una pizzería mediante el uso de Promesas y Async/Await.

## 🚀 Funcionalidades

- **Simulación Realista:** Uso de `setTimeout` para replicar los tiempos de espera en cocina.
- **Lógica Asíncrona:** Implementación de `async/await` para gestionar la entrega secuencial de productos.
- **Manejo de Errores:** Control de excepciones con `try/catch` para gestionar fallos aleatorios en la toma de pedidos (probabilidad de éxito del 80%).
- **UI Dinámica:** Manipulación del DOM para mostrar estados y loaders en tiempo real.

## 🛠️ Tecnologías

- **HTML5 / CSS3** (Animaciones de carga y diseño responsivo).
- **JavaScript Vanilla** (ES6+).

## 📂 Estructura de la Lógica

El proceso sigue un flujo lineal para garantizar el orden de entrega:

1. `realizarPedido()`: Valida si la orden entra a cocina.
2. `entregarPizza()`: 3 segundos de espera.
3. `entregarBebida()`: 3 segundos de espera.
4. `entregarPostre()`: 3 segundos de espera.

```javascript
try {
  const status = await realizarPedido();
  // ... entrega de productos secuencial
} catch (error) {
  // Manejo de error si el pedido falla
}