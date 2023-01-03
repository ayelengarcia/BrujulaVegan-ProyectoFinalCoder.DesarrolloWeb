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

const URL_PRINCIPALES = "bbdd/principales.json";
const URL_DULCES = "bbdd/dulces.json";
const URL_LECHES = "bbdd/leches.json";
const URL_QUESOS = "bbdd/quesos.json";
const URL_SNACKS = "bbdd/snacks.json";

async function cargarDatos() {
  const respuestaPrincipales = await fetch(URL_PRINCIPALES);
  const datosPrincipales = await respuestaPrincipales.json();
  recorrerObjetos(datosPrincipales, returnReceta, contenedorPrincipales);
  
  const respuestaDulces = await fetch(URL_DULCES);
  const datosDulces = await respuestaDulces.json();
  recorrerObjetos(datosDulces, returnReceta, contenedorDulces);
  
  const respuestaLeches = await fetch(URL_LECHES);
  const datosLeches = await respuestaLeches.json();
  recorrerObjetos(datosLeches, returnReceta, contenedorLeches);
  
  const respuestaQuesos = await fetch(URL_QUESOS);
  const datosQuesos = await respuestaQuesos.json();
  recorrerObjetos(datosQuesos, returnReceta, contenedorQuesos);
  
  const respuestaSnacks = await fetch(URL_SNACKS);
  const datosSnacks = await respuestaSnacks.json();
  recorrerObjetos(datosSnacks, returnReceta, contenedorSnacks);
}

cargarDatos();

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
