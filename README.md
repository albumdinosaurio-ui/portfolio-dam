# Portafolio académico · DAM

Primera versión del portafolio personal. Está hecho con HTML semántico, CSS y JavaScript nativo, sin frameworks ni dependencias externas.

## Cómo abrirlo en Visual Studio Code

1. Descomprime `portfolio_dam.zip`.
2. Abre la carpeta `portfolio_dam` desde Visual Studio Code.
3. Abre `index.html` con Live Server (o utiliza la extensión que estés usando en clase).

## Antes de entregar

Busca en `index.html` los comentarios `Sustituye` y `Reemplaza` y actualiza:

- `[Tu nombre]` por tu nombre.
- El enlace `https://github.com/` de la portada por tu perfil de GitHub.
- Los dos enlaces de los proyectos por las direcciones reales de tus repositorios o páginas publicadas.

## Organización

- `index.html`: contenido y estructura de la página.
- `css/styles.css`: colores, distribución, tipografía y adaptación a móviles.
- `js/main.js`: menú móvil, sección activa de navegación y año automático del pie.
- `img/campus-fondo.jpg`: fotografía de fondo optimizada a partir de la imagen proporcionada.
- `proyectos/zoologico/`: carpeta reservada para los archivos de tu web del zoológico.
- `proyectos/ejercicios/`: carpeta reservada para organizar ejercicios, si decides alojarlos dentro del mismo repositorio.

## Personalización rápida

La paleta principal está al principio de `css/styles.css`, dentro de `:root`. Puedes modificar las variables `--navy`, `--cream`, `--gold` y `--wine` para ajustar la identidad visual sin tener que buscar cada color por todo el documento.
