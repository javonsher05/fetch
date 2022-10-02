let posts = [];
let data = 
{
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
        {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
                "Radiation resistance",
                "Turning tiny",
                "Radiation blast"
            ]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
                "Million tonne punch",
                "Damage resistance",
                "Superhuman reflexes"
            ]
        },
        {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
                "Immortality",
                "Heat Immunity",
                "Inferno",
                "Teleportation",
                "Interdimensional travel"
            ]
        }
    ]
}
posts.push(data)
console.log(posts);
let text = ""
for (let i = 5; i < posts.length; i++) {
    const element = posts[i];
    console.log(element.posts);
    text;
    document.getElementById("salom").innerHTML=posts.name;
}






fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then(rasm => rasm.json())
    .then(res => {
        console.log(res);
        let cards = "";
        for (let i = 0; i < res.length; i++) {
            cards += `<p>${res[i].id}</p><img src=${res[i].thumbnailUrl}<p>${res[i].title}</p><img src="${res[i].url}">`
        }
        document.getElementById("cards").innerHTML = cards
    })