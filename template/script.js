import { getListNationalHolidays } from "./api.js";

const tplRaw = document.querySelector("[data-template-id='hello-message']");
const tpl = tplRaw.content.cloneNode(true);

document.querySelector(".Titre").append(tpl);
document.querySelector("[data-template-id='mess']").textContent = "Texte changé";
document.querySelector("[data-template-id='mess']").classList.add("test", "test1");
document.querySelector("[data-template-id='image1']").setAttribute("src", "https://avatars.githubusercontent.com/u/188966379?v=4");


// partie 3

const bouton = document.querySelector("[data-template-id='bouton']");
const listeFeries = document.querySelector("[data-template-id='liste']");

bouton.addEventListener("click", async (event) =>{
    const res = await getListNationalHolidays();

    for (let i= 0; i < res.length; i++ ) {
        const item = res[i];

        const li = document.createElement("li");
        li.textContent = `${item.date} : ${item.name}`;
        listeFeries.appendChild(li)
    }
});
