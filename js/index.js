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

const URL = "/bbdd/principales.json";
const PRINCIPALES = [];
const URL2 = "/bbdd/dulces.json";
const DULCES = [];
const URL3 = "/bbdd/leches.json";
const LECHES = [];
const URL4 = "/bbdd/quesos.json";
const QUESOS = [];
const URL5 = "/bbdd/snacks.json";
const SNACKS = [];


fetch(URL)
   .then((response) => (data = response.json()))
   .then((data) => PRINCIPALES.push(...data))
   .then(() =>
      recorrerObjetos(PRINCIPALES, returnReceta, contenedorPrincipales)
   );
fetch(URL2)
   .then((response) => (data = response.json()))
   .then((data) => DULCES.push(...data))
   .then(() =>
      recorrerObjetos(DULCES, returnReceta, contenedorDulces),
   );
fetch(URL3)
   .then((response) => (data = response.json()))
   .then((data) => LECHES.push(...data))
   .then(() =>
      recorrerObjetos(LECHES, returnReceta, contenedorLeches),
   );
fetch(URL4)
   .then((response) => (data = response.json()))
   .then((data) => QUESOS.push(...data))
   .then(() =>
      recorrerObjetos(QUESOS, returnReceta, contenedorQuesos),
   );
fetch(URL5)
   .then((response) => (data = response.json()))
   .then((data) => SNACKS.push(...data))
   .then(() =>
      recorrerObjetos(SNACKS, returnReceta, contenedorSnacks),
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
