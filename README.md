
# +MAR: Eccomerce de productos sustentables

## Desarrollo:
La estructura principal se encuentra dentro del componente App.js quien llama a los correspondientes:
Navbar.jsx, ItemContainer.jsx e ItemDetailContiner a travez de sus respectivas rutas.

### App.js:
Navbar + ItemListContainer + ItemDetailContainer

### Navbar.jsx:
Logo con componente Link que rediecciona a landing page.

Componentes Link a categorias filtradas de ItemListContainer con el uso del hook useParams():
* Categoria 1 (cocina)
* Categoria 2 (baño)
* Categoria 3 (personal)

Componente CartWidget: solo muestra la imagen de un carrito de compras.

### ItemListContainer.jsx:
Contiene la promesa que captura el array de objetos: productos.
Envia el array productos a traves de un prop al componente ItemList 

### ItemList.jsx:
Mediente la prop que recibe de ItemListContainer realiza un map() de productos y envia las propiedades al componente Item.

### Item.jsx:
Con las propiedes recibidas de ItemList desarrolla la estructura de la card.
La card tiene dos componentes Link que redireccionan a ItemDetailContainer.

### ItemDetailContainer.jsx:
Contiene la promesa que captura el array de objetos: productos, y filtra el array utilizando el metodo find() y el hook useParams para identificar
el producto que previamente selecciono el user. 
Luego envia por prop el producto al componente ItemDetail para luego renderizarlo..

### ItemDetail.jsx:
Con el producto traido de ItemDetailContainer genera la estructura para mostrar el detalle del producto seleccionado.
En este tambien se encuentra el componente ItemCount el cual suma o resta una unidad teniendo en cuenta stock del producto.


