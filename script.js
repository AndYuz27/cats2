/*{
"id": 1,
"name": "Лара",
"favourite": false,
"rate": 7,
"age": 8,
"description": "описание",
"img_link": "ссылка на картинку в интернете"
} */

/*
Отобразить всех котов
GET http://sb-cats.herokuapp.com/api/2/<name>/show

Отобразить все id котов
GET http://sb-cats.herokuapp.com/api/2/<name>/ids

Получить информацию об одном котике по id
GET http://sb-cats.herokuapp.com/api/2/<name>/show/<id кота>

Добавить нового кота в БД (id, name - обязательно!)
POST http://sb-cats.herokuapp.com/api/2/<name>/add
* */
let api = "andtop" // старый API с ExpoJS
api = "andy1337" // Новый API
const box = document.querySelector(".container");
const ddd = window.location
console.log(ddd)


const getCats = function(){ //IIFE
    fetch(`https://sb-cats.herokuapp.com/api/2/${api}/show`)
    .then(res => res.json())
    .then(data => {
        data.data.forEach(el => {
            if(el.id && el.name) {

let card = `
    <div class="card">
    <div class="card-img" style="${el.img_link && `background-image: url(${el.img_link})`}"></div>
        <h4>${el.name}</h4>
        <br>
        <span>Возраст ${el.age} лет/года</span>
        <br>
        <span>${el.rate}/10</span>
        <span>ID: ${el.id}</span>
        <p>${el.description}</p>
        <a href="/pageofcat.html?${el.id}">see more</a>
        <br>
    </div>`;
box.innerHTML += card;


            }
        });
    })
    
};
getCats();

const form = document.forms.addCat;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const body = {}
    for (let i = 0; i < form.elements.length; i++) {
        const el = form.elements[i];
        if (el.name && el.value) {
            body[el.name] =el.value
        }
        console.log(body)
    }
    fetch(`https://sb-cats.herokuapp.com/api/2/${api}/add`,{
        method: "POST",
        headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(body)

}
    ).then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.message === "ok"){
            box.innerHTML = ""
            alert('кот добавлен')
            window.location.replace("/"); // для Localhost
        }
    })
})




function info_create(){
    alert("Чтобы добавить, введите имя*, далее id*, рейтинг, возраст, описание и картинку, учтите, картинку нужно брать с интернета (URL-ссылкой), если хотите свою, то заливайте на Яндекс диск либо на другой фотохостинг")
    console.log('Вызвана инфа')
}
