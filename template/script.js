const tplRaw = document.querySelector("[data-template-id='hello-message']");
const tpl = tplRaw.content.cloneNode(true);

document.querySelector(".Titre").append(tpl);
document.querySelector("[data-template-id='mess']").textContent = "Texte changé";
document.querySelector("[data-template-id='mess']").classList.add("test", "test1");
document.querySelector("[data-template-id='image1']").setAttribute("src", "https://avatars.githubusercontent.com/u/188966379?v=4");