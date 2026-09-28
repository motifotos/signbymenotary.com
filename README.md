# Sign By Me

Web estática de Sign By Me. Sin framework, compilación ni dependencias de desarrollo.

## Dónde modificar cada cosa

- `index.html`: textos, precios, enlaces y secciones, en el orden en que aparecen.
- `styles.css`: todos los estilos de la página, organizados por secciones.
- `script.js`: apertura y cierre del menú móvil y año del pie de página.
- `assets/`: las imágenes que usa la página y el favicon.
- `CNAME`: dominio de GitHub Pages. No cambiar al editar el diseño.

## Una sola paleta y una sola hoja de estilos

Los colores están al principio de `styles.css`, dentro de `:root`. No hay temas alternativos, selector de color, CSS antiguo ni estilos en línea. El favicon usa el mismo azul de marca.

Los bloques `@media` del final adaptan la misma página a escritorio, tablet y teléfono. Son necesarios para el diseño responsive; no son versiones diferentes del sitio.

Los enlaces a CSS, JavaScript y favicon llevan `?v=clean` para evitar la caché de la versión anterior. No generan archivos adicionales. Cambia ese valor al publicar una nueva revisión si necesitas invalidar la caché.

## Contenido y accesibilidad

El texto principal es de 18 px; los secundarios no bajan de 16 px con el tamaño de letra predeterminado del navegador. El menú admite teclado y Escape. Su estado depende únicamente de `aria-expanded`, sin clases duplicadas. Tarifas y preguntas usan `<details>` nativo, sin JavaScript. El contenido y los enlaces siguen disponibles si JavaScript está desactivado.

## Vista previa local

Desde esta carpeta:

```sh
python3 -m http.server 4174 --bind 127.0.0.1
```

Abrir `http://127.0.0.1:4174/`. No hace falta instalar ni compilar nada.

## Antes del lanzamiento público

Los testimonios y retratos de muestra son ficticios y están identificados en un bloque separado. No presentarlos como reseñas reales: eliminar el bloque o sustituirlo por testimonios verificados y autorizados antes del lanzamiento definitivo.

Se mantiene `noindex, nofollow` durante la presentación. Antes de permitir la indexación, confirmar datos, tarifas, disponibilidad, requisitos del servicio y HTTPS. Sign By Me presta servicios notariales; no es un despacho de abogados.

Los cambios locales solo llegan al dominio cuando se publican en GitHub Pages.
