const poemas = import.meta.glob('../../src/content/poemas/*.md'); // Cambia esta ruta según la ubicación de tus archivos


// Mapeamos los archivos para extraer los metadatos y el contenido
const listaPoemas = Object.entries(poemas).map(([path, resolver]) => {
  return resolver().then((mod) => ({
    slug: path.split('/').pop().replace('.md', ''),  // Generar un slug a partir del nombre del archivo
    nombre: mod.frontmatter.titulo,
    autor: mod.frontmatter.autor,
    fecha: mod.frontmatter.fecha,
    imagen: mod.frontmatter.imagen,
    fondo: mod.frontmatter.fondo,
    texto: mod.frontmatter.texto,
    poema: mod.compiledContent,  // Contenido procesado del archivo Markdown
  }));
});

 

 // Esperamos a que se resuelvan todas las promesas para obtener la lista completa de poemas
const poemasDetails = await Promise.all(listaPoemas);
 



export {poemasDetails}