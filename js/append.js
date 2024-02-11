// 1 where to add
const placesItems = document.getElementById('places-items');
// 2 what to be added
const li =document.createElement('li');
li.innerText = 'kuakata';

// 3 add the child
placesItems.appendChild(li)

// 1 where to add
const mainItems = document.getElementById('main-container');
// 2 what to be added
const section =document.createElement('section');
const h1 =document.createElement('h1');
h1.innerText = 'my food items';
section.appendChild(h1)

const ul =document.createElement('ul');
section.appendChild(ul);

const li1 = document.createElement('li');
li1.innerText='biriany';
ul.appendChild(li1)

const li2 = document.createElement('li');
li2.innerText='laccih';
ul.appendChild(li2)

const li3 = document.createElement('li');
li3.innerText='coca-cola';
ul.appendChild(li3)
mainItems.appendChild(section)

// set inner html directly

const sectionDress =document.createElement('section');
sectionDress.innerHTML=`
<h1>my dress</h1>
<ul>
<li>shirt</li>
<li>pant</li>
<li>t-shirt</li>
</ul>
`
mainItems.appendChild(sectionDress)

const items = document.getElementsByTagName('ul');
for (const item of items){
    item.style.display='flex'
    item.style.gap='30px'
    item.style.listStyle='none'
}