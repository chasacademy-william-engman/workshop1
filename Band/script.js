const bands = [
    {id: "gunsnrose", 
        title: "Guns N' Roses", 
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quos blanditiis saepe nobis dicta eaque?!", 
        img: "https://cdn.britannica.com/34/265634-050-F82CE0A4/guns-n-roses-at-uic-pavillion-chicago-illinois-august-21-1987.jpg",
    alt: "Guns and Roses"},
    {id: "abba", 
        title: "ABBA", 
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quos blanditiis saepe nobis dicta eaque?!", 
        img: "https://upload.wikimedia.org/wikipedia/commons/c/cb/ABBA_-_TopPop_1974_5.png?utm_source=sv.wikipedia.org&utm_campaign=index&utm_content=thumbnail_unscaled",
    alt: "Abba som uppträder"},
    {id: "shm", 
        title: "Swedish House Maffia", 
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quos blanditiis saepe nobis dicta eaque?!", 
        img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Swedish_house_mafia_2.jpg/250px-Swedish_house_mafia_2.jpg?utm_source=sv.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    alt: "Swedish hpuse maffia"},
    {id: "av", 
        title: "Alphaville", 
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quos blanditiis saepe nobis dicta eaque?!", 
        img: "https://media.artistscandinavia.se/2017/12/alphaville.jpg",
    alt: "Alphaville"},
]

const article = document.querySelector("article");
const title = document.querySelector("#band-title");
const text = document.querySelector("p");
const img = document.querySelector("img");

function render(){
    const id = location.hash.slice(1);
    const band = bands.find((b) => b.id === id) ?? bands[0];

    title.textContent = band.title;
    text.textContent = band.text;
    img.src = band.img;
    img.alt = band.alt;
}

window.addEventListener("hashchange", render);
render();