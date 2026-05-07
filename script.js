const btnPedido = document.getElementById("btnPedido");
const statusContainer = document.getElementById("statusContainer");

const statusPedido = () =>
  Math.random() < 0.8 ? "Pedido recibido ✅" : "Error al recibir el pedido";
const realizarPedido = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const status = statusPedido();
      status === "Pedido recibido ✅" ? resolve(status) : reject(status);
    }, 5000);
  });

const entregarPizza = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve("Pizza entregada 🍕"), 3000),
  );
const entregarBebida = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve("Bebida entregada 🥤"), 3000),
  );
const entregarPostre = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve("Postre entregado 🍰"), 3000),
  );

// funcion para mostrar mensajes en la pantalla
const agregarEstado = (mensaje, esError) => {
  const div = document.createElement("div");
  div.className = `status-item ${esError ? "error" : "success"}`;
  div.innerHTML = `<span>${mensaje}</span>`;
  statusContainer.appendChild(div);
};

// funcion para mostrar el spinner de carga
const mostrarCargando = () => {
  const div = document.createElement("div");
  div.id = "temp-loader";
  div.className = "status-item";
  div.innerHTML = `<span>Procesando...</span> <div class="loader"></div>`;
  statusContainer.appendChild(div);
};

const quitarCargando = () => {
  const loader = document.getElementById("temp-loader");
  if (loader) loader.remove();
};

const completarPedido = async () => {
  // Resetear interfaz
  statusContainer.innerHTML = "";
  btnPedido.disabled = true;

  try {
    mostrarCargando();
    const status = await realizarPedido();
    quitarCargando();
    agregarEstado(status);

    mostrarCargando();
    const pizza = await entregarPizza();
    quitarCargando();
    agregarEstado(pizza);

    mostrarCargando();
    const bebida = await entregarBebida();
    quitarCargando();
    agregarEstado(bebida);

    mostrarCargando();
    const postre = await entregarPostre();
    quitarCargando();
    agregarEstado(postre);

    agregarEstado("¡Disfrute su comida! ✨");
  } catch (error) {
    quitarCargando();
    agregarEstado("❌ " + error, true);
  } finally {
    btnPedido.disabled = false;
  }
};

btnPedido.addEventListener("click", completarPedido);
