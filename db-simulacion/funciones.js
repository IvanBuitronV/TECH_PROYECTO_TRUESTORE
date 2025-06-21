
// Obtener un objeto de tipo Map almacenado en localStorage
function obtenerMap(nombre) {
        const str = localStorage.getItem(nombre);
        if (!str) {
            throw new Error(`No se encontró el objeto con el nombre: ${nombre}`);
        }
        const json = JSON.parse(str);
        const map = new Map(Object.entries(json));
        return map;
}

// Devolver la lista de categorias almacenadas 
function  obtenerCategorias() {
    const map = obtenerMap("categorias");
    return map.values();
}

// Devolver la lista de banners almacenados
function  obtenerBanners() {
    const map = obtenerMap("banners");
    return map.values();
}

// Devolver la lista de productos almacenados
function obtenerProductos(categoria = "todos") {
    const map = obtenerMap("productos");
    //return map.values();
    let productos = [];
    if (categoria == null || categoria === "todos") {
        productos = map.values();
    } else {
        productos = map.values().filter(prod => prod.categoria_codigo === categoria);
    }
    return productos;
}

// Obtener el carrito de compras almacenado en sessionStorage
function obtenerCarrito() {
    const str = sessionStorage.getItem('carrito');
    const carrito = str ? JSON.parse(str) : [];
    return carrito;
}
   
// Mostrar el carrito de compras en la página

    function mostrarCarrito() {
        const carrito = obtenerCarrito();
        const carritoContainer = document.getElementById('carrito');
        carritoContainer.innerHTML = "";
    
        carrito.forEach((producto, posicion) => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between mb-2';
            li.innerHTML = `
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h6 class="my-0">${producto.nombre}</h6>
                        <small>Clasificación: ${producto.clasificacion}</small>
                    </div>
                    <a class="btn btn-danger text-decoration-none text-white" href="#" onclick="eliminarProducto(${posicion})">
                        <i class="fas fa-times"></i>
                    </a>
                </div>`;
            carritoContainer.appendChild(li);
        });
    
        // Mostrar la cantidad total de ítems (opcional)
        const totalElement = document.getElementById('total');
        totalElement.textContent = carrito.length;
    }

// Agregar un producto al carrito de compras
        function agregarProducto(producto) {
            if (producto.unidades <= 0) {
                alert("No hay unidades disponibles de este producto.");
                return;
            }
        
            const map = obtenerMap("productos");
            const prodActual = structuredClone(map.get(producto.codigo)); // copia segura
        
            if (prodActual.unidades <= 0) {
                alert("Este producto ya está agotado.");
                return;
            }
        
            // Restar unidad y guardar el cambio en localStorage
            prodActual.unidades -= 1;
            map.set(producto.codigo, prodActual);
            localStorage.setItem("productos", JSON.stringify(Object.fromEntries(map)));
        
            // Agregar al carrito la copia ya actualizada
            let carrito = obtenerCarrito();
            carrito.push(prodActual);
            sessionStorage.setItem("carrito", JSON.stringify(carrito));
        
            mostrarCarrito();
            actualizarBotonTruequear();
            actualizarContadorCarrito();

        
            // Actualizar unidades en pantalla 
            const tarjeta = document.querySelector(`[data-codigo="${producto.codigo}"]`);
            if (tarjeta) {
                const unidadesTexto = tarjeta.querySelector(".unidades");
                if (unidadesTexto) {
                    unidadesTexto.textContent = `Unidades disponibles: ${prodActual.unidades}`;
                }
                if (prodActual.unidades === 0) {
                    tarjeta.querySelector(".btn-add").classList.add("disabled");
                }
            }
        }
 
// Eliminar un producto del carrito de compras
    function eliminarProducto(index) {
        let carrito = obtenerCarrito();
        const productoEliminado = carrito[index]; // 👈 obtenemos el producto
    
        // Eliminar del carrito
        carrito.splice(index, 1);
        sessionStorage.setItem("carrito", JSON.stringify(carrito));
        mostrarCarrito();
        actualizarBotonTruequear();
        actualizarContadorCarrito();

    
        // Recuperar stock en localStorage
        const map = obtenerMap("productos");
        const original = map.get(productoEliminado.codigo);
        if (original) {
            original.unidades += 1;
            map.set(productoEliminado.codigo, original);
            localStorage.setItem("productos", JSON.stringify(Object.fromEntries(map)));
    
            // Actualizar la vista directamente
            const tarjeta = document.querySelector(`[data-codigo="${productoEliminado.codigo}"]`);
            if (tarjeta) {
                const unidadesTexto = tarjeta.querySelector(".unidades");
                if (unidadesTexto) {
                    unidadesTexto.textContent = `Unidades disponibles: ${original.unidades}`;
                }
    
                const boton = tarjeta.querySelector(".btn-add");
                if (boton) {
                    boton.classList.remove("disabled");
                }
            }
        }
    }
 
// Vaciar el carrito de compras y devolver las unidades a los productos

    function vaciarCarrito() {
        const carrito = obtenerCarrito();
        const map = obtenerMap("productos");
    
        // Contar cuántas veces aparece cada producto
        const contador = {};
        carrito.forEach(prod => {
            contador[prod.codigo] = (contador[prod.codigo] || 0) + 1;
        });
    
        // Devolver unidades y actualizar vista
        for (const codigo in contador) {
            const original = map.get(codigo);
            if (original) {
                original.unidades += contador[codigo];
                map.set(codigo, original);
    
                const tarjeta = document.querySelector(`[data-codigo="${codigo}"]`);
                if (tarjeta) {
                    const unidadesTexto = tarjeta.querySelector(".unidades");
                    if (unidadesTexto) {
                        unidadesTexto.textContent = `Unidades disponibles: ${original.unidades}`;
                    }
                    const boton = tarjeta.querySelector(".btn-add");
                    if (boton) {
                        boton.classList.remove("disabled");
                    }
                }
            }
        }
    
        // Guardar cambios
        localStorage.setItem("productos", JSON.stringify(Object.fromEntries(map)));
    
        // Vaciar carrito y actualizar vista + botón
        sessionStorage.setItem("carrito", JSON.stringify([]));
        mostrarCarrito();
        actualizarBotonTruequear();
        actualizarContadorCarrito();// Esto ya se encarga de activar/desactivar y cambiar texto
    }

// Actualizar el botón de truequear según el estado del carrito
    function actualizarBotonTruequear() {
        const boton = document.querySelector("#boton-pagar a");
        const carrito = obtenerCarrito();
    
        if (boton) {
            if (carrito.length === 0) {
                boton.classList.add("disabled");
                boton.style.pointerEvents = "none";
                boton.textContent = "Agrega productos primero";
            } else {
                boton.classList.remove("disabled");
                boton.style.pointerEvents = "auto";
                boton.textContent = "Truequear";
            }
        }
    }

//Funcion obtener producto por codigo
function obtenerProductoPorCodigo(codigoProducto) {
    const productos = obtenerMap("productos");
    const respuesta = productos.get(codigoProducto);
    if (!respuesta) {
        throw new Error(`Producto con código ${codigoProducto} no encontrado.`);
    }
    return respuesta;
}
// Actualizar el contador del carrito en la interfaz
function actualizarContadorCarrito() {
    const contador = document.getElementById("contador-carrito");
    const carrito = obtenerCarrito();
    if (contador) {
        contador.textContent = carrito.length;
    }
}