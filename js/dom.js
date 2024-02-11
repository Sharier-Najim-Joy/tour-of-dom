// console.log('welcome');
// console.log(document);
// console.log(document.body);
const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border="2px solid yellow";
    section.style.marginTop="10px";
    section.style.borderRadius="16px";
    section.style.padding="10px";
    section.style.backgroundColor="lightgray";
    

}



// const placesContainer = document.getElementById('places-container');
// placesContainer.style.backgroundColor='red'

const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('text');
placesContainer.classList.remove('text-size');

