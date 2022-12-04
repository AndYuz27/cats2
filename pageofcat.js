let loc = window.location.search
loc = loc.substring(1)
console.log(loc)
let api = "andtop" // старый API с ExpoJS
api = "andy1337" // Новый API
const box = document.querySelector(".eeee");


const getCat = function(){ //IIFE
    fetch(`https://sb-cats.herokuapp.com/api/2/${api}/show/${loc}`)
//     .then(res => res.json())
//     .then(data => {
//         data.data.forEach(el => {
//             if(el.id && el.name) {

// let card = `
//     <div class="card">
//     <div class="card-img" style="${el.img_link && `background-image: url(${el.img_link})`}"></div>
//         <h4>${el.name}</h4>
//         <br>
//         <span>Возраст ${el.age} лет/года</span>
//         <br>
//         <span>${el.rate}/10</span>
//         <span>ID: ${el.id}</span>
//         <p>${el.description}</p>
//         <a href="/pageofcat.html?${el._id}">see more</a>
//         <br>
//     </div>`;
// box.innerHTML += card;


//             }
//         });
//     }).then(res => res.json())
.then(res => res.json())
.then(data => {
    console.log(data)
    let card = `
    <div class="card_of_cat">
    <div class="card-img_b" style="${data.data.img_link && `background-image: url(${data.data.img_link})`}"></div>
        <h4>${data.data.name}</h4>
        <br>
        <span>Возраст ${data.data.age} лет/года</span>
        <br>
        <span>${data.data.rate}/10</span>
        <span>ID: ${data.data.id}</span>
        <p>${data.data.description}</p>
        <br>
    </div>`;
box.innerHTML += card;

})
    
};getCat()