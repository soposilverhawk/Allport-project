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
for (i = 0; i < data.length; i++) {
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

let search = document.querySelector("#search-icon");
let searchBar = document.querySelector("#search-bar")
let searchBckgrnd = document.getElementById("search-background")
search.addEventListener("click", function () {
    searchBar.classList.toggle("active")
    search.classList.toggle("active-img")
    searchBckgrnd.classList.toggle("active-img")
})

let navLi = document.querySelectorAll(".header-2 ul li")
let navLiSelect = document.querySelector(".header-2 ul li select")
for (let i = 0; i < navLi.length; i++) {
    navLi[i].addEventListener("mouseover", function () {
        navLi[i].style.color = "red"
    })
    navLi[i].addEventListener("mouseout", function () {
        navLi[i].style.color = "#8172D5";
    })
}

let dropDown2 = document.querySelector(".drop-down-2");
let jobTools = document.querySelector("#job-tools")
dropDown2.addEventListener("click", function(){
    let selectMenu = document.createElement("div");
    jobTools.appendChild(selectMenu);
    selectMenu.classList.add("menu-2")
    let item1 = document.createElement("p")
    item1.innerHTML = "Tool 1";
    selectMenu.appendChild(item1)
    let item2 = document.createElement("p")
    item2.innerHTML = "Tool 2";
    selectMenu.appendChild(item2)
    let item3 = document.createElement("p")
    item3.innerHTML = "Tool 3";
    selectMenu.appendChild(item3)
})

let dropDown3 = document.querySelector(".drop-down-3");
let whoWeAre = document.querySelector("#who-we-are")
dropDown3.addEventListener("click", function(){
    let selectMenu = document.createElement("div");
    whoWeAre.appendChild(selectMenu);
    selectMenu.classList.add("menu-3")
    let item1 = document.createElement("p")
    item1.innerHTML = "About us";
    selectMenu.appendChild(item1)
    let item2 = document.createElement("p")
    item2.innerHTML = "Projects";
    selectMenu.appendChild(item2)
    let item3 = document.createElement("p")
    item3.innerHTML = "Events";
    selectMenu.appendChild(item3)
    let item4 = document.createElement("p")
    item4.innerHTML = "Contact us";
    selectMenu.appendChild(item3);
})



let dropDown1Arrow = document.querySelector(".drop-down-1");
let dropDownMenu1 = document.querySelector(".lang-drop-down")
dropDown1Arrow.addEventListener("click", function(){
    dropDownMenu1.classList.toggle("display")
})

let FAQtxt = [
    {
        txt3: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur quam, nemo excepturi modi"
    },
    {
        txt3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nisi maxime vero maiores sunt voluptatum quisquam veniam mollitia aperiam suscipit perspiciatis non ex aspernatur aliquam, eos eligendi? Repellat, voluptatem aperiam."
    },
    {
        txt3: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Nam nisi maxime vero maiores sunt voluptatum quisquam veniam"
    },
    {
        txt3: "Nam nisi maxime vero maiores sunt voluptatum quisquam veniam voluptatum quisquam veniam"
    },
    {
        txt3: "Nam nisi maxime vero maiores sunt voluptatum quisquam veniam voluptatum quisquam veniam"
    },
    {
        txt3: "Nam nisi maxime vero maiores sunt voluptatum quisquam veniam voluptatum quisquam veniam"
    }
]

let registerButton = document.querySelector(".event-cont button");
let registerDiv = document.querySelector(".register-div")
let backButton = document.querySelector("#back")
registerButton.addEventListener("click", function(){
    registerButton.classList.toggle("register-disappear");
    registerDiv.classList.toggle("register-form-appear");
})

let FAQDropDowns = document.querySelectorAll("#FAQ-cont div img");
let FAQDiv = document.querySelectorAll("#FAQ-cont div");
for (let i = 0; i < FAQDropDowns.length; i++){
    FAQDropDowns[i].addEventListener("click", function(){
        let FAQDescTxt = document.createElement("p");
        FAQDescTxt.innerHTML = FAQtxt[i].txt3;
        FAQDiv[i].appendChild(FAQDescTxt)
    })
}

let slider = document.querySelector(".slider");
let sliderImgs = document.querySelectorAll(".slider img");
let previousImg = document.querySelector("#slider-arrow-left");
let nextImg = document.querySelector("#slider-arrow-right")

let counter = 1;
const size = sliderImgs[0].clientWidth;

slider.style.transform = 'translateX(' + (-size * counter) + 'px)'

previousImg.addEventListener("click", ()=>{
    if(counter <= 0) return
    slider.style.transition = "transform 0.4s ease-in-out";
    counter--
    slider.style.transform = 'translateX(' + (-size * counter * 1.5) + 'px)'
})
nextImg.addEventListener("click", ()=>{
    if(counter >= sliderImgs.length - 1) return;
    slider.style.transition = "transform 0.4s ease-in-out";
    counter++
    slider.style.transform = 'translateX(' + (-size * counter * 1.5) + 'px)'
})
slider.addEventListener("transitionend", ()=>{
    if(sliderImgs[counter].id === "last-clone"){
        slider.style.transition = "none";
        counter = sliderImgs.length - 2;
        slider.style.transform = 'translateX(' + (-size * counter * 1.5) + 'px)'
    }
    if(sliderImgs[counter].id === "first-clone"){
        slider.style.transition = "none";
        counter = sliderImgs.length - counter;
        slider.style.transform = 'translateX(' + (-size * counter * 1.5) + 'px)'
    }
})

let contactPic = document.querySelectorAll("#contacts-cont div img");
let contactPicBackground = document.querySelectorAll("#contacts-cont div")
let contactsInfo = [
    {
        text1: "Jessie Williams promoted to chief of staff",
        text2: "Oct. 29, 2019 at 6:06 a.m. ET"
    },
    {
        text1: "Peter Ryan promoted to head of human resources",
        text2: "Oct. 29, 2019 at 6:06 a.m. ET"
    },
    {
        text1: "Rachel Stevens promoted to VP of sales",
        text2: "Oct. 29, 2019 at 6:06 a.m. ET"
    }
]
for (let i = 0; i < contactPic.length; i++) {
    let PicText1 = document.createElement("p");
    let PicText2 = document.createElement("p");
    contactPicBackground[i].appendChild(PicText1);
    contactPicBackground[i].appendChild(PicText2);
    contactPic[i].addEventListener("mouseover", function () {
        if (PicText1.innerText == "" && PicText2.innerText == "") {
            PicText1.innerHTML = contactsInfo[i].text1
            PicText2.innerHTML = contactsInfo[i].text2
            contactPicBackground[i].style.backgroundColor = "white"
            contactPicBackground[i].style.marginRight = "20px";
        }
    })
}