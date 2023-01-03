const returnReceta = (receta) => {

   return `<div>
                  <div class="img-rece ${receta.img} d-flex flex-column justify-content-end">
                    <h2 class="accordion-header style-h3" type="button" data-bs-toggle="collapse"
                      data-bs-target="${receta.dataTarget}" aria-expanded="false" aria-controls="${receta.ariaControls}" id="${receta.id}"> <i class="bi bi-caret-down-fill"></i>${receta.title}
                    </h2>
                  </div>

                  <div id="${receta.id2}" class="accordion-collapse collapse ${receta.show}"
                    aria-labelledby="${receta.labelledby}" data-bs-parent="${receta.dataParent}">

                    <div class="accordion-body">

                      <article class=" ingredientes my-3">

                        <p><i>🥬Ingredientes:</i></p>
                        <ul>
                          ${li(receta.ingredient)}
                        </ul>

                        <p><i>🙌Preparación:</i></p>
                        <p class="${receta.classDescription}"> ${p (receta.description)}</p>
                        
                      </article>

                    </div>
                  </div>
                </div>`;
};

const recorrerObjetos = (array, template, contenedor) => {
   contenedor.innerHTML = "";
   if (array.length > 0) {
      array.forEach((elemento) => {
         contenedor.innerHTML += template(elemento);
      });
   }
};

const contenedorPrincipales = document.querySelector("#accordionFlushExample");
const contenedorDulces = document.querySelector("#accordionFlushExample2");
const contenedorLeches = document.querySelector("#accordionFlushExample3");
const contenedorQuesos = document.querySelector("#accordionFlushExample4");
const contenedorSnacks = document.querySelector("#accordionFlushExample5");

const URL = "/principales.json";
const PRINCIPALES = [];
const URL2 = "/dulces.json";
const DULCES = [];
const URL3 = "/leches.json";
const LECHES = [];
const URL4 = "/quesos.json";
const QUESOS = [];
const URL5 = "/snacks.json";
const SNACKS = [];


fetch(URL)
  .then((response) => (data = response.json()))
  .then((data) => PRINCIPALES.push(...data))
  .then(
    () => recorrerObjetos(PRINCIPALES, returnReceta, contenedorPrincipales)
);
  
fetch(URL2)
  .then((response) => (data = response.json()))
  .then((data) => DULCES.push(...data))
  .then(
    () => recorrerObjetos(DULCES, returnReceta, contenedorDulces)
  );
fetch(URL3)
  .then((response) => (data = response.json()))
  .then((data) => LECHES.push(...data))
  .then(
    () => recorrerObjetos(LECHES, returnReceta, contenedorLeches)
);
  
fetch(URL4)
  .then((response) => (data = response.json()))
  .then((data) => QUESOS.push(...data))
  .then(
    () => recorrerObjetos(QUESOS, returnReceta, contenedorQuesos)
);
  
fetch(URL5)
  .then((response) => (data = response.json()))
  .then((data) => SNACKS.push(...data))
  .then(
    () => recorrerObjetos(SNACKS, returnReceta, contenedorSnacks)
  );


const li = (array) => {
   let innerHTML = "";
   array.forEach((element) => {
      innerHTML += `<li>${element}</li>`;
   });
   return innerHTML;
};

const p = (array) => {
   let innerHTML = "";
   array.forEach((element) => {
      innerHTML += `<p>${element}</p>`;
   });
   return innerHTML;
};


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