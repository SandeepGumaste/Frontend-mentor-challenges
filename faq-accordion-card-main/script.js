const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click',()=>{
        removeActiveClasses();
        faq.classList.toggle('active');
    })
});
function removeActiveClasses(){
    faqs.forEach(faq => {
        faq.classList.remove('active') ;  
    })
}

