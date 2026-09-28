# Sign By Me

Web estática, sin framework, compilación ni dependencias de desarrollo.

## Dos páginas independientes

- `index.html`: página principal verde petróleo y dorado, con el logo transparente, la foto al inicio, las cinco tarifas visibles y el pie claro.
- `index01.html`: versión secundaria azul, conservada con su diseño y contenido anterior.

Cada HTML contiene su propio CSS en `<style>` y su JavaScript al final en `<script>`. No hay archivos CSS o JavaScript separados, selector de temas ni capas de versiones antiguas. Los colores se modifican en `:root` dentro de cada HTML.

La secundaria conserva su fuente DM Sans de Google Fonts. La principal usa fuentes del sistema y no requiere servicios externos para mostrar su diseño.

## Archivos necesarios

- `assets/logo-transparent.png`: logo usado por la principal.
- `assets/susana-profile.jpg`: fotografía usada por ambas páginas.
- `assets/favicon.svg`: icono azul usado por la secundaria; la principal incorpora su icono en el HTML.
- `assets/testimonials/`: tres retratos de muestra usados únicamente por el bloque de testimonios ficticios de la secundaria.
- `CNAME`: dominio de GitHub Pages (`signbymenotary.com`). No modificar al editar el diseño.

Las imágenes siguen separadas del código para facilitar su reemplazo. Todos los archivos de `assets/` tienen una referencia activa en alguna de las dos páginas.

## Edición y comprobación

1. Editar `index.html` para cambiar la web principal; `index01.html` solo para modificar la secundaria.
2. Revisar escritorio, tablet y móvil. El menú admite teclado y Escape.
3. Comprobar precios, teléfono, correo y enlace de reservas.
4. Publicar el cambio en GitHub para actualizar GitHub Pages.

La principal no contiene testimonios ficticios. La secundaria conserva un bloque claramente identificado como ficticio: no presentarlo como reseñas reales. Ambas páginas mantienen su configuración `noindex, nofollow`; cualquier cambio de indexación debe ser deliberado.

## Vista local

```sh
python3 -m http.server 4174 --bind 127.0.0.1
```

- Principal: `http://127.0.0.1:4174/`
- Secundaria: `http://127.0.0.1:4174/index01.html`

El historial de Git conserva las revisiones anteriores. Los archivos obsoletos no forman parte de la versión actual del repositorio.
