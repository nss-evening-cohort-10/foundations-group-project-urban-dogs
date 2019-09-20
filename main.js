// console.log("hey guys"
// );



const upcomingConcert = [
    {   image: 'image/concert1.jpg',
        date: 'SEP 20, 2019',
        venue: 'Famous Saloon',
        review: '<span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span><span class="fa fa-star"></span>',
    },

    {
        image: 'image/concert2.jpg',
        date: 'OCT 15,2019',
        venue: 'Mercy Lounge',
        review: '<span class="fa fa-star checked"><span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span>',

    },

    {
        image: 'image/concert3.jpeg',
        date: 'NOV 25,2019',
        venue: 'The Bluebird Cafe',
        review: '<span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>',

     },

     {  image: 'image/concer4.jpeg',
        date: 'OCT 18, 2019',
        venue: 'Ryman Auditorium',
        review: '<span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>',

    },

    {
        image: 'image/concer5.jpg',
        date: 'DEC 12, 2019',
        venue: 'The Basement East',
        review: '<span class="fa fa-star checked"></span> <span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>',

    },

    {
        image: 'image/concer6.jpg',
        date: 'NOV 28, 2019',
        venue: 'Legends Corner',
        review: '<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span> <span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>',

     }
];

//creating pri- to-dom fun
// const printToDom = (domString, divId)=>{  
//     document.getElementById(divId).innerHTML = domString;
// }


const printToDom = (divId,textToPrint) => {
    const divContainer = document.getElementById(divId)
    divContainer.innerHTML = textToPrint
};

const upcomingConcertBuilder = (myArr)=> {
    let domString = '';
    for (let i=0; i < myArr.length; i++) {
        domString += `
     
     <div class="heni">
        <div class="card" style="width: 350px;">
                <img src="${myArr[i].image}" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-title">${myArr[i].date}</p>
                <p class="card-text">${myArr[i].venue}</p>
                <h3>Rating</h3>
                <p class="card-text">${myArr[i].review}</p>
                <a href="https://www.google.com/search?q=concertthicket+for+sale&rlz=1C5CHFA_enUS860US863&oq=concertthicket+for+sale&aqs=chrome..69i57.7744j0j4&sourceid=chrome&ie=UTF-8&ibp=htl;events&rciv=evn&sa=X&ved=2ahUKEwjr3snm3N3kAhUCCawKHdmsCDQQ5rwDKAF6BAgSEAw#fpstate=tldetail&htidocid=pfQmZUVQKTbYCx3VJpA8-A%3D%3D&htivrt=events" class="btn btn-primary">Concert Tickets</a>
            </div>
        </div>
    </div>
        `
    
    }
    printToDom('concert-card', domString);
}
upcomingConcertBuilder(upcomingConcert); 

