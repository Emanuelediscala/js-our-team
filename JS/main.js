// Definisco Team Array
const Team = [
    {
        nome:"Wayne Barnett",
        role:"Founder & CEO",
        profile:"wayne-barnett-founder-ceo.jpg"
    },
    {
        nome:"Angela Caroll",
        role:"Chief Editor",
        profile:"angela-caroll-chief-editor.jpg"
    },
    {
        nome:"Walter Gordon",
        role:"Office Manager",
        profile:"walter-gordon-office-manager.jpg"
    },
    {
        nome:"Angela Lopez",
        role:"Social Media Manager",
        profile:"angela-lopez-social-media-manager.jpg"
    },
    {
        nome:"Scott Estrada",
        role:"Developer",
        profile:"scott-estrada-developer.jpg"
    },
    {
        nome:"Barbara Ramos",
        role:"Graphic Designer",
        profile:"barbara-ramos-graphic-designer.jpg"
    }
]
// Definisco ciclo
for (let i = 0; i < Team.length; i++) {
    const elements = Team[i];
    // CREAZIONE CATEGORIA NOMI
    let contenitoreNomi = document.querySelector(".Names");
    let pName = document.createElement("p");
    pName.innerText += elements.nome;
    contenitoreNomi.append(pName);
    // CREAZIONE CATEGORIA RUOLI
    let contenitoreRuoli = document.querySelector(".Roles");
    let roleP = document.createElement("p");
    roleP.innerText += elements.role;
    contenitoreRuoli.appendChild(roleP);
    // CREAZIONE CATEGORIA PICS
    let contenitoreFoto = document.querySelector(".Profiles");
    let pics = document.createElement("img")
    pics.src += "./img/" + elements.profile;
    pics.classList.add("img-fluid","d-block", "py-2");
    contenitoreFoto.appendChild(pics);
}

