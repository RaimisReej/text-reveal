const tl = gsap.timeline({defaults: {duration: 0.75, ease: 'power3.out'}})

tl.fromTo('.hero-img', {scale: 1.3 ,borderRadius: '0rem'}, {scale: 1, borderRadius:'2rem', delay: 0.35, duration: 2.5, ease: 'elastic.out(1.5,1)'})
tl.fromTo('.cta1', {x:'100%', opacity: 0.5}, {x:0, opacity: 1}, '<20%')
tl.fromTo('.cta3', {x:'-100%', opacity: 0.5}, {x:0, opacity: 1}, '<20%')
tl.fromTo('.cta2', {y:'100%', opacity: 0.5}, {y:0, opacity: 1}, '<20%')
tl.fromTo('.cta4', {x:'100%', opacity: 0.5}, {x:0, opacity: 1}, '<20%')
tl.fromTo('.cta6', {y:'100%', opacity: 0.5}, {y:0, opacity: 1}, '<20%')
tl.fromTo('.cta5', {x:'100%', opacity: 0.5}, {x:0, opacity: 1}, '<20%')
tl.fromTo('.cta-btn', {y: 20, opacity: 0}, {y:0, opacity: 1}, '<')

//'split text' altternative for paid gsap
const logo = document.querySelector('.logo');
const letters = logo.textContent.split(''); //splits letters into array
//removes original logo
logo.textContent = ''

//creates logo with individual letters
letters.forEach(letter => {
    logo.innerHTML += '<span class="letter">' + letter + '<span/>'
})
gsap.set('.letter', {display: 'inline-block'})
gsap.fromTo('.letter', {y:-30}, {y:0, delay: 0.2, stagger: 0.1, ease:'back.out(3)'})