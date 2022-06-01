
//add o scroll em toda página.
window.addEventListener('scroll', onScroll)

const navigation = document.querySelector('#navigation')
const menu = document.querySelector('.menu')
const backToTopButtonOnScroll = document.querySelector('#backToTopButton')

onScroll()

//Gerenciar os diversos Scrolls da página
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()
    
    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
    //linha alvo
    const targetLine = scrollY + innerHeight / 2
    
    //verificar se a seção passou da linha
    //Quais dados vou precisar ?
    
    //O topo da seção
    const sectionTop = section.offsetTop
    
    // A altura da seção
    const sectionHeight = section.offsetHeight

    // O topo da seção chegou ou ultrapassou a linha alvo.
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
    
    //Informações dos dados e da lógica
    console.log('O topo da seção chegou ou passou da linha ?', sectionTopReachOrPassedTargetLine)

    //Verificar se a base está abaixo da linha alvo
    //Quais dados vou precisar?

    //A seção termina onde ?
    const sectionEndsAt = sectionTop + sectionHeight

    // O final da seção passou da linha alvo
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    console.log('O fundo da seção passou da linha?', sectionEndPassedTargetLine)

    // Limites da seção
    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine 

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
    
    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }

}

//Mostrar o navigation ao fazer o scroll
function showNavOnScroll() {
    if(scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
    navigation.classList.remove('scroll')
    }
}

//Mostrar o botão backToTop ao fazer o scroll
function showBackToTopButtonOnScroll() {
    if(scrollY > 500) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
 #home,
 #home img, 
 #home .stats, 
 #services,
 #services header,
 #services .card,
 #about,
 #about header,
 #about .content`)


