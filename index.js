const express = require('express')
const os = require("os")
const app = express()
const port = 80

const pokemon = [
    {
        "ID": 0,
        "name": "Neachu",
        "height": "0.4m",
        "skill": "Ser Nea",
        "sentence": "Soy Neachu, el pokémon más chévere del Parque Lleras. Si me buscas, te voy a dar un choque de realidades.",
        "image": "https://storage.cloud.google.com/taller2-bucket/image_2023-04-26_080652999.png"
    },
    {
        "ID": 1,
        "name": "Jigglypaf",
        "height": "0.5m",
        "skill": "Cantar en Nea",
        "sentence": "Soy Jigglypaf, el pokémon más paila del Valle de Aburrá. Siempre canto en Nea para alegrar a la gente.",
        "image": "https://storage.cloud.google.com/taller2-bucket/image_2023-04-26_080723765.png"
    },
    {
        "ID": 2,
        "name": "Squirtear",
        "height": "0.5m",
        "skill": "Ser más pilo que el Nea",
        "sentence": "Soy Squirtear, el pokémon más pilo del Poblado. Siempre ando pendiente de todo para no dejar que los Neas me ganen.",
        "image": "https://storage.cloud.google.com/taller2-bucket/image_2023-04-26_080736408.png"
    },
    {
        "ID": 3,
        "name": "Ñorlax",
        "height": "2.1m",
        "skill": "Dormir en el bus",
        "sentence": "Soy Ñorlax, el pokémon más perezoso de Itagüí. Me encanta dormir en el bus, pero siempre llego a tiempo a mi destino.",
        "image": "https://storage.cloud.google.com/taller2-bucket/image_2023-04-26_080748909.png"
    },
    {
        "ID": 4,
        "name": "Busbasour",
        "height": "0.7m",
        "skill": "Saberse todas las rutas",
        "sentence": "Soy Busbasour, el pokémon más viajero de Sabaneta. Me sé todas las rutas de buses, así que nunca me pierdo.",
        "image": "https://storage.cloud.google.com/taller2-bucket/image_2023-04-26_080825542.png"
    },
    {
        "ID": 5,
        "name": "Charinegro",
        "height": "1.7m",
        "skill": "Ser el más nea del barrio",
        "sentence": "Soy Charinegro, el pokémon más nea de Envigado. Siempre ando con mi combo, buscando la vuelta más chévere.",
        "image": "https://storage.cloud.google.com/taller2-bucket/image_2023-04-26_080842519.png"
    },
    {
        "ID": 6,
        "name": "Paliwacho",
        "height": "0.6 m",
        "skill": "Sapear",
        "sentence": "La vida es como un rio, a veces esta duro el parche y hay que buscarle la vuelta, parcero.",
        "image": "https://storage.cloud.google.com/taller2-bucket/image_2023-04-26_080855208.png"
    },
    {
        "ID": 7,
        "name": "Togepila",
        "height": "0.3 m",
        "skill": "Trampear",
        "sentence": "Si quieres volar alto, tienes que aprender a caer, ñero.",
        "image": "https://storage.cloud.google.com/taller2-bucket/image_2023-04-26_080939044.png"
    },
    {
        "ID": 8,
        "name": "Oddichurro",
        "height": "0.5 m",
        "skill": "Requechear",
        "sentence": "La vida es un tumbao, hay que seguir el ritmo y echar pa' lante, parce.",
        "image": "https://storage.cloud.google.com/taller2-bucket/image_2023-04-26_080955092.png"
    },
    {
        "ID": 9,
        "name": "Koffigato",
        "height": "0.6 m",
        "skill": "Mañosear",
        "sentence": "La felicidad no se encuentra, se construye con neas y la buena vibra, ñero.",
        "image": "https://storage.cloud.google.com/taller2-bucket/image_2023-04-26_081035490.png"
    }
];

app.get('/', (req, res) => {
    const number = Math.floor(Math.random() * pokemon.length);
    res.send(pokemon[number].image + "<br>" + pokemon[number].sentence + " - Container Id: " + os.hostname());
});

app.get('/:id', (req, res) => {
    const id = req.params.id;
    if (id < 0 || id >= pokemon.length) {
        res.send("Pokemon no encontrado")
    }
    res.send(JSON.stringify(pokemon[id]));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});