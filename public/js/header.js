/* menu button */

const nav = document.querySelector('#nav')
const abrir = document.querySelector('#abrir')
const cerrar = document.querySelector('#cerrar')
const main = document.querySelector('body')

/* functionality buttons */

/* formations */

const formations = document.querySelector('#formations')
const formation = document.querySelector('#formation')

/* sections */

const section = document.querySelector('#section')
const sections = document.querySelector('#sections')

/* resources */

const resource = document.querySelector('#resource')
const resources = document.querySelector('#resources')


/* menu button */

abrir.addEventListener('click', () => {
    nav.classList.toggle('visible')
    cerrar.classList.toggle('ver')

})
cerrar.addEventListener('click', () => {
    nav.classList.remove('visible')
    cerrar.classList.remove('ver')

})


window.addEventListener('scroll', () =>{
    nav.classList.remove('visible')
    cerrar.classList.remove('ver')
})


/* functionality buttons */

/* formations */

formations.addEventListener('click', () => {
    formation.classList.toggle('formar')
})

/* sections */


section.addEventListener('click', () => {
    sections.classList.toggle('secti')
})

/* resources */

resource.addEventListener('click', () => {
    resources.classList.toggle('recur')
})
