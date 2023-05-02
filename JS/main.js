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
for (const key in Team) {
    console.log(`${key} con valore:`, Team[key]);
}

