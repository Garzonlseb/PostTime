const categorias = ["Gastronomía", "Deporte", "Moda", "Tecnología"];

const recomendaciones = {
    "Gastronomía": {
    dias: ["Lunes", "Miércoles", "Viernes"],
    horas: ["12:00 pm", "8:00 pm"],
    red: ["Instagram", "TikTok"]
    },
    "Deporte": {
    dias: ["Martes", "Jueves", "Sábado"],
    horas: ["7:00 am", "6:00 pm"],
    red: "TikTok"
    },
    "Moda": {
    dias: ["Miércoles", "Viernes", "Domingo"],
    horas: ["5:00 pm", "9:00 pm"],
    red: "Instagram"
    },
    "Tecnología": {
    dias: ["Lunes", "Jueves"],
    horas: ["10:00 am", "8:00 pm"],
    red: ["Facebook", "TikTok"]
    }
};

function mostrarCategorias() {
    console.log("Categorías disponibles:");
    categorias.forEach((cat, index) => {
    console.log(index + 1 + ". " + cat);
    });
}

function seleccionarCategoria() {
    let seleccion = prompt(
    "Selecciona la categoría correspondiente a tu empresa:\n1. Gastronomía\n2. Deporte\n3. Moda\n4. Tecnología"
    );
    let indice = parseInt(seleccion) - 1;

    if (indice >= 0 && indice < categorias.length) {
    return categorias[indice];
    } else {
    alert("Opción inválida. Intenta nuevamente.");
    return seleccionarCategoria();
    }
}

function mostrarRecomendacion(categoria) {
    let datos = recomendaciones[categoria];
    let mensaje = `📊 Recomendaciones para ${categoria}:\n
👉 Días ideales: ${datos.dias.join(", ")}\n
🕑 Horarios recomendados: ${datos.horas.join(", ")}\n
📱 Red social sugerida: ${datos.red}`;

    console.log(mensaje);
    alert(mensaje);
}

alert("¡Conoce los mejores horarios y Redes Sociales para publicar! 🎯");

let repetir = true;

while (repetir) {
    mostrarCategorias();
    let categoriaSeleccionada = seleccionarCategoria();
    mostrarRecomendacion(categoriaSeleccionada);
    repetir = confirm("¿Quieres probar con otra categoría?");
}

alert("¡Gracias por usar el simulador! 🚀");
