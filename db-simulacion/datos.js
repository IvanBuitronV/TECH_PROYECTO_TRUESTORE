
// Inicialización de categorías en localStorage
categorias = {
    "101" : { codigo: "101", nombre: "Electrónica y tecnología", descripcion: "Encuentra celulares, computadoras, accesorios y gadgets listos para intercambiar.", imagen: "img/1Ele.png" },
    "102" : { codigo: "102", nombre: "Hogar y Ropa", descripcion: "Trueca muebles, decoración, ropa y accesorios para renovar tu estilo y tu espacio.", imagen: "img/2Hog.png"  },
    "103":  { codigo: "103", nombre: "Educación y Herramientas", descripcion: "Libros, material educativo y herramientas que te ayudan a aprender y crear.", imagen: "img/3Edu.png" },
    "104":  { codigo: "104", nombre: "Donaciones", descripcion: "Artículos gratuitos disponibles para quienes los necesiten. ¡Comparte y ayuda!", imagen: "img/4Don.png"  }
};

localStorage.setItem("categorias", JSON.stringify(categorias));

// Inicialización los banners en localStorage
banners = {
    "101": {
        codigo: "101", titulo: "Bienvenido a TruStore", subtitulo: "Intercambia lo que no usas por lo que necesitas, sin dinero.",
        descripcion: "Fomentamos la sostenibilidad y la solidaridad a través del intercambio de productos. Descubre artículos únicos, comparte lo que ya no necesitas y forma parte de una comunidad conectada.",
        imagen: "img/bienvenida.png"
    },
    "102": {
        codigo: "102", titulo: "Trueque Verde: Cambia y Siembra", subtitulo: "Cada trueque cuenta. ¡Haz el cambio y deja huella!",
        descripcion: "¿Sabías que por cada 3 donaciones que realices, sembramos un árbol? Contribuye al medioambiente mientras disfrutas de los beneficios del trueque. Juntos, hacemos crecer el futuro.",
        imagen: "img/sembrar.jpg"
    },
    "103": {
        codigo: "103", titulo: "Este Domingo es Especial: ¡Trueque por un Viaje!", subtitulo: "Intercambia y gana la oportunidad de viajar a San Andrés",
        descripcion: "Este domingo, cada trueque que realices te dará una entrada para participar en el sorteo de un increíble viaje a San Andrés. ¡Cuantos más intercambios hagas, más oportunidades tendrás de ganar!",
        imagen: "img/Viaje.png"
    },
};

localStorage.setItem("banners", JSON.stringify(banners));

