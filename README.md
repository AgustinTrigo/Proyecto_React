
# Eccomerce de productos sustentables:

## Desarrollo:
La estructura principal se encuentra dentro del componente App.js quien llama a los correspondientes:
Navbar.jsx, ItemContainer.jsx e ItemDetailContiner a travez de sus respectivas rutas.

### App.js:
Navbar + ItemListContainer + ItemDetailContainer

### Navbar:
Logo con componente Link que rediecciona a landing page.

Componentes Link a categorias filtradas de ItemListContainer con el uso del metodo useParams():
* Categoria 1 (cocina)
* Categoria 2 (baño)
* Categoria 3 (personal)

### ItemListContainer:
Contiene la promesa que captura el array de objetos: productos.
Envia el array productos a traves de prop al componente ItemList

### ItemList:
Mediente la prop que recibe de ItemListContainer realiza un map() de productos y envia las propiedades al componente Item.

### Item:
Con las propiedes recibidas de ItemList desarrolla la estructura de la card.
La card tiene dos componentes Link que redireccionan a ItemDetailContainer.

### ItemDetailContainer:
Promesa que trae el array de objetos productos y filtra utilizando el metodo useParams para identificar
el producto que previamente selecciono el user. 
Luego envia por prop el producto al componente ItemDetail.
