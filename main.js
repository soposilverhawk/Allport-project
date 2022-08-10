let data = [
    {
        img: 'https://images.unsplash.com/photo-1616832880699-8541b04005ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW1lcmljYW58ZW58MHx8MHx8&w=1000&q=80',
        txt1: 'Capital Confidential: ‘Big Short’ author contemplates taking on Brexit',
        txt2: 'Oct. 29, 2019 at 6:06 a.m. ET '

    },
    {
        img: 'https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        txt1: 'U.K. assets are too hot to handle right now, top investors say',
        txt2: 'Oct. 29, 2019 at 6:06 a.m. ET '

    },
    {
        img: 'https://images.unsplash.com/photo-1556474688-479399d655d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW1lcmljYW4lMjBjaXR5fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        txt1: 'Europe’s largest money manager warns of an investment industry liquidity crisis',
        txt2: 'Oct. 25, 2019 at 4:17 a.m. ET'

    },
    {
        img: 'https://thumbs.dreamstime.com/b/st-louis-united-states-america-14026911.jpg',
        txt1: 'Short-seller Muddy Waters attacks litigation fund Burford',
        txt2: 'Oct. 23, 2019 at 3:55 a.m. ET '

    },

    {
        img: 'https://oec.world/api/image?slug=partner&memberSlug=usa&size=splash',
        txt1: 'Wall Street falls on stalling economic rebound, stimulus impasse',
        txt2: 'Oct. 29, 2019 at 6:06 a.m. ET '

    },
    {
        img: 'https://www.voyanyc.com/viajar-a-estados-unidos/wp-content/uploads/2019/01/Visitar-Estados-Unidos-Nueva-York-@Voy-a-USA-e1546360282652.jpg',
        txt1: 'Exclusive: U.S. offers tariff truce if Airbus repays billions in aid, sources say',
        txt2: 'Oct. 29, 2019 at 6:06 a.m. ET '

    },
    {
        img: 'https://transporteca.de/wp-content/uploads/2018/03/USA-IMPORT.jpg',
        txt1: 'New York could emerge the winner from Brexit derivatives clash',
        txt2: 'Oct. 25, 2019 at 4:17 a.m. ET'

    },
    {
        img: 'https://media.istockphoto.com/photos/times-square-in-nyc-picture-id1070531042?k=20&m=1070531042&s=612x612&w=0&h=F4JVYzCuPFkIJ66iGCFC9imrLOY6CO5D42uqEltg75M=',
        txt1: 'Analysis: Imported tortillas? Big Mexican farmers fear cuts will hit harvests',
        txt2: 'Oct. 23, 2019 at 3:55 a.m. ET '

    },
]

let cardsCont = document.querySelector("#cards-cont")
for (i = 0; i < data.length; i++){
    let section2Cards = document.createElement("div");
    section2Cards.classList.add("card-boxes")
    cardsCont.appendChild(section2Cards)
    let cardImg = document.createElement("img");
    cardImg.src = data[i].img;
    section2Cards.appendChild(cardImg);
    cardImg.classList.add("cards-imgs");
    let cardDescr = document.createElement("p");
    cardDescr.classList.add("cards-descrip")
    section2Cards.appendChild(cardDescr);
    cardDescr.innerHTML = data[i].txt1;
    let date = document.createElement("p");
    section2Cards.appendChild(date);
    date.innerHTML = data[i].txt2;
    date.classList.add('date')
}