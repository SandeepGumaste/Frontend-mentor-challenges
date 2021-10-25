const lefArrow = document.getElementById('left-arrow')
const rigArrow = document.getElementById('right-arrow')
const hero = document.getElementById('hero');
const pgraph = document.getElementById('pgraph');
const headCount = document.getElementById('headCount');
const open = document.getElementById('open');
const heroImagesDes = ["url('./images/desktop-image-hero-1.jpg')", "url('./images/desktop-image-hero-2.jpg')", "url('./images/desktop-image-hero-3.jpg')"]
const heroImagesMob = ["url('./images/mobile-image-hero-1.jpg')","url('./images/mobile-image-hero-2.jpg')","url('./images/mobile-image-hero-3.jpg')"];
const headings = ['Discover innovative ways to decorate', 'We are available all across the globe', 'Manufactured with the best materials']
const para = ["We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love." ,"With stores all over the world, it's easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.", "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."]

let count=0
let heroImgs = window.innerWidth<600? heroImagesMob: heroImagesDes;

function heroChangeRight(){
    count = count>=2? 0: count+1;
    let heroImgs = window.innerWidth<600? heroImagesMob: heroImagesDes;
    hero.style.backgroundImage = heroImgs[count];
    headCount.innerHTML = headings[count];
    pgraph.innerHTML = para[count];
    console.log(heroImgs[count])
}
function heroChangeLeft(){
    count = count<=0? 2: count-1;
    let heroImgs = window.innerWidth<600? heroImagesMob: heroImagesDes;
    hero.style.backgroundImage = heroImgs[count];
    headCount.innerHTML = headings[count];
    pgraph.innerHTML = para[count];
}

function hamClick(){
    open.style.display = 'block';
}

function closeClick(){
    open.style.display = 'none';
}