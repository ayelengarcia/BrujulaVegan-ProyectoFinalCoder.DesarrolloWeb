const contenedorMain = document.querySelector(".cont-main");
const inputSearch = document.querySelector(".buscador");

function filtrarRecetas() {
  let encontrados = PRINCIPALES.filter((receta) =>
    receta.title.toUpperCase().includes(inputSearch.value.toUpperCase().trim())
  );
  let encontrados2 = DULCES.filter((receta) =>
    receta.title.toUpperCase().includes(inputSearch.value.toUpperCase().trim())
  );
  let encontrados3 = LECHES.filter((receta) =>
    receta.title.toUpperCase().includes(inputSearch.value.toUpperCase().trim())
  );
  let encontrados4 = QUESOS.filter((receta) =>
    receta.title.toUpperCase().includes(inputSearch.value.toUpperCase().trim())
  );
  let encontrados5 = SNACKS.filter((receta) =>
    receta.title.toUpperCase().includes(inputSearch.value.toUpperCase().trim())
  );

  if (encontrados.length > 0) {
    recorrerObjetos(encontrados, returnReceta, contenedorMain);
  } else if (encontrados2.length > 0) {
    recorrerObjetos(encontrados2, returnReceta, contenedorMain);
  } else if (encontrados3.length > 0) {
    recorrerObjetos(encontrados3, returnReceta, contenedorMain);
  } else if (encontrados4.length > 0) {
    recorrerObjetos(encontrados4, returnReceta, contenedorMain);
  } else if (encontrados5.length > 0) {
    recorrerObjetos(encontrados5, returnReceta, contenedorMain);
  } else {
    contenedorMain.innerHTML = `<div class="p-5 d-flex justify-content-center align-items-center" style="background:#e4dac2; height:60vh">No se encontraron recetas que coincidan con su búsqueda</div>`;
  }
}

inputSearch.addEventListener("input", filtrarRecetas);
