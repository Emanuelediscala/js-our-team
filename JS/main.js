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
    // for (const key in Team) {
    // let infoGeneriche = Team[key]
    // console.log(infoGeneriche);
    // let FirstPerson = infoGeneriche[0]
    // let contenitore = document.querySelector(".container").innerHTML = FirstPerson;

// }

 for (let i = 0; i < Team.length; i++) {
    const elements = Team[i];
    console.log(elements.nome);
    let contenitore;
    contenitore = document.querySelector(".container").innerHTML = elements[i].nome;

}

