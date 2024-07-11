document.addEventListener("DOMContentLoaded", () => {
  const tareas = [];
  const nuevaTareaInput = document.getElementById("nueva_tarea");
  const agregarTareaBtn = document.getElementById("agregar_tarea");
  const listaTareas = document.getElementById("lista_tareas");
  const contadorTotal = document.querySelector(".contador_total");
  const contadorRealizadas = document.querySelector(".contador_realizadas");

  const actualizarContadores = () => {
    contadorTotal.textContent = tareas.length;
    contadorRealizadas.textContent = tareas.filter(
      (tarea) => tarea.realizada
    ).length;
  };

  const agregarTarea = () => {
    const descripcion = nuevaTareaInput.value.trim();
    if (descripcion !== "") {
      const nuevaTarea = {
        id: Date.now(),
        descripcion,
        realizada: false,
      };
      tareas.push(nuevaTarea);
      nuevaTareaInput.value = "";
      actualizarLista();
      actualizarContadores();
    }
  };

  const borrarTarea = (id) => {
    const index = tareas.findIndex((tarea) => tarea.id === id);
    if (index !== -1) {
      tareas.splice(index, 1);
      actualizarLista();
      actualizarContadores();
    }
  };

  const cambiarEstadoTarea = (id) => {
    const tarea = tareas.find((tarea) => tarea.id === id);
    if (tarea) {
      tarea.realizada = !tarea.realizada;
      actualizarLista();
      actualizarContadores();
    }
  };

  const actualizarLista = () => {
    listaTareas.innerHTML = "";
    tareas.forEach((tarea) => {
      const li = document.createElement("li");
      li.textContent = tarea.descripcion;
      li.className = tarea.realizada ? "tarea-realizada" : "";
      const borrarBtn = document.createElement("button");
      borrarBtn.textContent = "Borrar";
      borrarBtn.onclick = () => borrarTarea(tarea.id);
      const cambiarEstadoBtn = document.createElement("button");
      cambiarEstadoBtn.textContent = "Cambiar Estado";
      cambiarEstadoBtn.onclick = () => cambiarEstadoTarea(tarea.id);
      li.appendChild(borrarBtn);
      li.appendChild(cambiarEstadoBtn);
      listaTareas.appendChild(li);
    });
  };

  agregarTareaBtn.addEventListener("click", agregarTarea);
});

document.addEventListener("DOMContentLoaded", () => {
  const tareas = [
    {
      id: Date.now() + 1,
      descripcion: "Revisar el material de estudio de Desafío LATAM",
      realizada: false,
    },
    {
      id: Date.now() + 2,
      descripcion: "Realizar la guía de la unidad de Desafío LATAM",
      realizada: true,
    },
    {
      id: Date.now() + 3,
      descripcion: "Realizar el Desafío de la unidad de Desafío LATAM",
      realizada: false,
    },
  ];

  const nuevaTareaInput = document.getElementById("nueva_tarea");
  const agregarTareaBtn = document.getElementById("agregar_tarea");
  const listaTareas = document.getElementById("lista_tareas");
  const contadorTotal = document.querySelector(".contador_total");
  const contadorRealizadas = document.querySelector(".contador_realizadas");

  const actualizarContadores = () => {
    contadorTotal.textContent = tareas.length;
    contadorRealizadas.textContent = tareas.filter(
      (tarea) => tarea.realizada
    ).length;
  };

  const agregarTarea = () => {
    const descripcion = nuevaTareaInput.value.trim();
    if (descripcion !== "") {
      const nuevaTarea = {
        id: Date.now(),
        descripcion,
        realizada: false,
      };
      tareas.push(nuevaTarea);
      nuevaTareaInput.value = "";
      actualizarLista();
      actualizarContadores();
    }
  };

  const borrarTarea = (id) => {
    const index = tareas.findIndex((tarea) => tarea.id === id);
    if (index !== -1) {
      tareas.splice(index, 1);
      actualizarLista();
      actualizarContadores();
    }
  };

  const cambiarEstadoTarea = (id) => {
    const tarea = tareas.find((tarea) => tarea.id === id);
    if (tarea) {
      tarea.realizada = !tarea.realizada;
      actualizarLista();
      actualizarContadores();
    }
  };

  const actualizarLista = () => {
    listaTareas.innerHTML = "";
    tareas.forEach((tarea) => {
      const li = document.createElement("li");
      li.textContent = tarea.descripcion;
      li.className = tarea.realizada ? "tarea-realizada" : "";
      const borrarBtn = document.createElement("button");
      borrarBtn.textContent = "Borrar";
      borrarBtn.onclick = () => borrarTarea(tarea.id);
      const cambiarEstadoBtn = document.createElement("button");
      cambiarEstadoBtn.textContent = "Cambiar Estado";
      cambiarEstadoBtn.onclick = () => cambiarEstadoTarea(tarea.id);
      li.appendChild(borrarBtn);
      li.appendChild(cambiarEstadoBtn);
      listaTareas.appendChild(li);
    });
  };

  agregarTareaBtn.addEventListener("click", agregarTarea);

  // Inicializar lista con tareas iniciales
  actualizarLista();
  actualizarContadores();
});
