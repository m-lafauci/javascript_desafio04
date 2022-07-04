let articulos = [
    {nombreProducto: "REMERA FELI", categoria: "REMERAS", temporada: "INVIERNO", precio: 8600},
    {nombreProducto: "REMERA MONACO", categoria: "REMERAS", temporada: "INVIERNO", precio: 7900},
    {nombreProducto: "REMERA CHILD", categoria: "REMERAS", temporada: "INVIERNO", precio: 5500},
    {nombreProducto: "CAMISA MARGARITA", categoria: "CAMISAS", temporada: "INVIERNO", precio: 20000},
    {nombreProducto: "CAMISA PHIL", categoria: "CAMISAS", temporada: "INVIERNO", precio: 17500},
    {nombreProducto: "CAMISA SOHO", categoria: "CAMISAS", temporada: "INVIERNO", precio: 16800},
    {nombreProducto: "CAMISA MARKLE", categoria: "CAMISAS", temporada: "INVIERNO", precio: 12000},
    {nombreProducto: "CAMISA BRIANA", categoria: "CAMISAS", temporada: "VERANO", precio: 11800},
    {nombreProducto: "BUZO LIAM", categoria: "BUZOS", temporada: "INVIERNO", precio: 13900},
    {nombreProducto: "BUZO ROSE", categoria: "BUZOS", temporada: "INVIERNO", precio: 16500},
    {nombreProducto: "HOODIE DEAN", categoria: "BUZOS", temporada: "INVIERNO", precio: 11000},
    {nombreProducto: "HOODIE LUCIEN", categoria: "BUZOS", temporada: "VERANO", precio: 9900},
    {nombreProducto: "BUZO BLOOM ", categoria: "BUZOS", temporada: "VERANO", precio: 10700},
    {nombreProducto: "VESTIDO IMMA", categoria: "VESTIDOS", temporada: "INVIERNO", precio: 14400},
    {nombreProducto: "VESTIDO ANUSH", categoria: "VESTIDOS", temporada: "INVIERNO", precio: 13900},
    {nombreProducto: "VESTIDO CROWN ", categoria: "VESTIDOS", temporada: "INVIERNO", precio: 15900},
    {nombreProducto: "VESTIDO JANICE", categoria: "VESTIDOS", temporada: "INVIERNO", precio: 37500},
    {nombreProducto: "JOGGER WAFLE", categoria: "CALZAS", temporada: "INVIERNO", precio: 9700},
    {nombreProducto: "JOGGER JERRY", categoria: "CALZAS", temporada: "INVIERNO", precio: 11000},
    {nombreProducto: "JOGGER JOSIE", categoria: "CALZAS", temporada: "INVIERNO", precio: 7300},
    {nombreProducto: "JOGGER LUCIEN", categoria: "CALZAS", temporada: "VERANO", precio: 9900},
    {nombreProducto: "JOGGER COMFY", categoria: "CALZAS", temporada: "VERANO", precio: 7600},
    {nombreProducto: "PANTALON MARGARET", categoria: "PANTALONES", temporada: "INVIERNO", precio: 13900},
    {nombreProducto: "PANTALON ELENA", categoria: "PANTALONES", temporada: "INVIERNO", precio: 16500},
    {nombreProducto: "DENIM ROSE", categoria: "PANTALONES", temporada: "INVIERNO", precio: 13000},
    {nombreProducto: "DENIM PAUL", categoria: "PANTALONES", temporada: "VERANO", precio: 12600},
    {nombreProducto: "CAMPERA FOWLER", categoria: "CAMPERAS", temporada: "INVIERNO", precio: 38000},
    {nombreProducto: "CAMPERA MADISON", categoria: "CAMPERAS", temporada: "INVIERNO", precio: 47000},
    {nombreProducto: "CAMPERA BIKER", categoria: "CAMPERAS", temporada: "INVIERNO", precio: 39000},
    {nombreProducto: "CAMPERA PUFFER", categoria: "CAMPERAS", temporada: "INVIERNO", precio: 44000},
    {nombreProducto: "PARKA SABBATH", categoria: "CAMPERAS", temporada: "VERANO", precio: 45000},
    {nombreProducto: "CARDIGAN MONZON", categoria: "SWEATERS", temporada: "INVIERNO", precio: 20000},
    {nombreProducto: "CARDIGAN CAPE", categoria: "SWEATERS", temporada: "INVIERNO", precio: 22000},
    {nombreProducto: "CARDIGAN JANDIRA", categoria: "SWEATERS", temporada: "INVIERNO", precio: 12000},
    {nombreProducto: "REMERA FAIRY", categoria: "REMERAS", temporada: "VERANO", precio: 8300},
    {nombreProducto: "REMERA JUSTINA", categoria: "REMERAS", temporada: "VERANO", precio: 7600},
    {nombreProducto: "REMERA WASH", categoria: "REMERAS", temporada: "VERANO", precio: 5200},
    {nombreProducto: "CAMISA MORNING", categoria: "CAMISAS", temporada: "VERANO", precio: 16000},
    {nombreProducto: "VESTIDO CAROL", categoria: "VESTIDOS", temporada: "VERANO", precio: 18800},
    {nombreProducto: "JEAN BASTIAN", categoria: "PANTALONES", temporada: "VERANO", precio: 13300},
    {nombreProducto: "CAMPERA SMITH", categoria: "CAMPERAS", temporada: "VERANO", precio: 41000},
    {nombreProducto: "CARDIGAN SUNRAY", categoria: "SWEATERS", temporada: "VERANO", precio: 14000},
    {nombreProducto: "CARDIGAN STRIPES", categoria: "SWEATERS", temporada: "VERANO", precio: 12300},
];

let filtroSeleccionado = prompt(`Ingrese el filtro de búsqueda: NOMBRE, CATEGORIA, TEMPORADA o PRECIO.
Presione la tecla L si desea ver la lista de precios.
Presione la tecla C si desea ver las categorías de los artículos.
Presione la tecla T si desea ver las temporadas de los artículos.
Escriba ESC para salir.`)

while (filtroSeleccionado.toLowerCase() != "esc") {
    let filtro;
    let resultado;
    switch (filtroSeleccionado.toLowerCase()) {
    case "nombre":
        filtro = prompt("Ingrese el NOMBRE del producto");
        resultado = articulos.filter((elemento) => elemento.nombreProducto.includes(filtro.toUpperCase()));
        console.log(resultado);
        break;
    case "categoria":
        filtro = prompt("Ingrese la CATEGORIA del producto");
        resultado = articulos.filter((elemento) => elemento.categoria.includes(filtro.toUpperCase()));
        console.log(resultado);
        break;
    case "temporada":
        filtro = prompt("Ingrese la TEMPORADA del producto");
        resultado = articulos.filter((elemento) => elemento.temporada.includes(filtro.toUpperCase()));
        console.log(resultado);
        break;
    case "precio":
        filtro = parseInt(prompt("Ingrese el PRECIO MAXIMO del producto"));
        resultado = articulos.filter((elemento) => elemento.precio <= filtro);
        console.log(resultado);
        break;
    case "l":
        articulos.forEach((elemento) => {console.log(elemento.nombreProducto, elemento.precio)})
        break;
    case "c":
        const listadoCategorias = articulos.map((elemento) => elemento.categoria);
        console.log([...new Set(listadoCategorias)]);
        break;
    case "t":
        const listadoTemporadas = articulos.map((elemento) => elemento.temporada);
        console.log([...new Set(listadoTemporadas)]);
        break;
    default:
        alert("Ingrese una operación válida");
        break;
    }
    filtroSeleccionado = prompt(`Ingrese el filtro de búsqueda: NOMBRE, CATEGORIA, TEMPORADA o PRECIO.
Presione la tecla L si desea ver la lista de precios.
Presione la tecla C si desea ver las categorías de los artículos.
Presione la tecla T si desea ver las temporadas de los artículos.
Escriba ESC para salir.`)
}