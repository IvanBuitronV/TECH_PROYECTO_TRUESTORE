
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

productos = {

    // Categoria Electrónica y tecnología
    "101-001": {
        codigo: "101-001", nombre: "Smartphone X", descripcion: "Teléfono con pantalla HD y doble cámara.", categoria_codigo: "101", imagen: "img/img_productos/celular.jpg", unidades: 5, duracion: "30 días", clasificacion: "Usado"
    },
    "101-002": {
        codigo: "101-002", nombre: "Laptop Pro", descripcion: "Computador portátil con gran rendimiento, ideal para trabajo y estudio.", categoria_codigo: "101", imagen: "img/img_productos/laptop.png", unidades: 5, duracion: "45 días", clasificacion: "Usado"
    },
    "101-003": {
        codigo: "101-003", nombre: "Auriculares SoundMax", descripcion: "Audífonos inalámbricos con cancelación de ruido.", categoria_codigo: "101", imagen: "img/img_productos/auriculares.jpg", unidades: 5, duracion: "20 días", clasificacion: "Nuevo"
    },

    // Categoria Hogar y Ropa
    "102-001": {
        codigo: "102-001", nombre: "Sofá Comfort", descripcion: "Sofá de tres plazas, color gris, cómodo y elegante.", categoria_codigo: "102", imagen: "img/img_productos/sofa.png", unidades: 5, duracion: "60 días", clasificacion: "Usado"
    },
    "102-002": {
        codigo: "102-002", nombre: "Juego de cortinas", descripcion: "Cortinas color beige, ideales para cualquier ambiente.", categoria_codigo: "102", imagen: "img/img_productos/cortinas.jpeg", unidades: 5, duracion: "30 días", clasificacion: "Nuevo"
    },
    "102-003": {
        codigo: "102-003", nombre: "Chaqueta de cuero", descripcion: "Chaqueta negra, talla M, estilo clásico.", categoria_codigo: "102", imagen: "img/img_productos/chaqueta.png", unidades: 5, duracion: "40 días", clasificacion: "Usado"
    },

    // Categoria Educacion y Herramientas
    "103-001": {
        codigo: "103-001", nombre: "Libro de crecimiento personal", descripcion: "Guía sobre desarrollo personal y éxito.", categoria_codigo: "103", imagen: "img/img_productos/libro.jpg", unidades: 5, duracion: "25 días", clasificacion: "Nuevo"
    },
    "103-002": {
        codigo: "103-002", nombre: "Kit de herramientas básicas", descripcion: "Set de herramientas esenciales para el hogar.", categoria_codigo: "103", imagen: "img/img_productos/herramientas.png", unidades: 5, duracion: "50 días", clasificacion: "Usado"
    },
    "103-003": {
        codigo: "103-003", nombre: "Cuaderno de dibujo", descripcion: "Cuaderno con hojas especiales para artistas.", categoria_codigo: "103", imagen: "img/img_productos/cuaderno.png", unidades: 5, duracion: "30 días", clasificacion: "Nuevo"
    },

    // Categoria Donaciones
    "104-001": {
        codigo: "104-001", nombre: "Ropa de invierno", descripcion: "Varias tallas disponibles, en buen estado.", categoria_codigo: "104", imagen: "img/img_productos/ropa.jpg", unidades: 5, duracion: "Indefinido", clasificacion: "Donación"
    },
    "104-002": {
        codigo: "104-002", nombre: "Alimentos no perecederos", descripcion: "Productos básicos para ayudar a familias necesitadas.", categoria_codigo: "104", imagen: "img/img_productos/alimentos.jpg", unidades: 5, duracion: "Indefinido", clasificacion: "Donación"
    },
    "104-003": {
        codigo: "104-003", nombre: "Mochilas escolares", descripcion: "Incluyen útiles básicos para estudiantes.", categoria_codigo: "104", imagen: "img/img_productos/mochilas.jpg", unidades: 5, duracion: "Indefinido", clasificacion: "Donación"
    },
};

localStorage.setItem("productos", JSON.stringify(productos));
console.log("Productos guardados:", localStorage.getItem("productos"));

