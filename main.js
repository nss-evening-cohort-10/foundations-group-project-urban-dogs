
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



// Array of objects
const bandGear = [
    {
    TShirt: 'Classic Rock',
    Picture: 'UDtshirts/ClassicRockT.jpg',
    Price: '$29.99',
    Size: 'S, M, L, XL, XXL',
    Availability: 'Available',
    },

    {
    TShirt: 'Dog Band',
    Picture: 'UDtshirts/DogBandT.jpg',
    Price: '$19.99',
    Size: 'S, M, L, XL, XXL',
    Availability: 'Available',
    },

    {
    TShirt: 'Jeruselum',
    Picture: 'UDtshirts/JerusalemT.jpg',
    Price: '$29.99',
    Size: 'S, M, L, XL, XXL',
    Availability: 'Limited Availability',
    },

    {
    TShirt: 'Pug Life',
    Picture: 'UDtshirts/PugLifeT.jpg',
    Price: '$17.99',
    Size: 'S, M, L, XL, XXL',
    Availability: 'Limited Availability',
    },

    {
    TShirt: 'Crazy Dog',
    Picture: 'UDtshirts/CrazyDogT.jpeg',
    Price: '$12.99',
    Size: 'S, M, L, XL, XXL',
    Availability: 'Available',
},

{
    TShirt: 'Wild Thing',
    Picture: 'UDtshirts/WildThingT.jpg',
    Price: '$14.99',
    Size: 'S, M, L, XL, XXL',
    Availability: 'Available',
}
]

const bioArr = [
{
Image: 'images/band-pics_0000s_0000_Layer-4.png',
Name: "Chris Rat",
Instrument: "Guitar",
Born: "Nashville, Tn",
Bio: "Chris grew up in a musical family . And started playing piano at an early age after seeing his musical idol  in person, he decided that he wanted to play guitar. Chris connected with his childhood friend  John Kilgore and started playing small venues in their home towns and soon after met up with drummer Ben Pain.",
},

{
Image: 'images/band-pics_0000s_0001_Layer-3.png',
Name:"John Kilgore",
Instrument:"Bass",
Born:"Nashville. Tn",
Bio: "John Kilgore and friend Chris Rat played music together for years. John learned bass from his father, renowned jazz bassist Mit Kilgore. He started playing at the age of 2. By the time the 2 had meet they where both very accoplished musicians. I love the way the sound of the bass rolls out of the amp it's so soothing",
},

{
Image: 'images/band-pics_0000s_0002_Layer-2.png',    
Name :"Ben Pain",
Instrument: "Drums",
Born: "Miami. Fla",
Bio: "Ben Pain has been banging on things for as long as he could remember. He got his first set of drums at the age of 10 and never looked back. After connecting with friends in college, it was a perfect match to begin building the band in it's current form. Drums are the best way for me to release my frustration. The kick is all I need the bass is the best",
},

{
Image: 'images/band-pics_0000s_0003_Layer-1.png',    
Name :"Mike Z",
Instrument:"Turn Tables",
Born: "Bronx, NY",
Bio: "Hip Hop is life where Mike comes from turn tables are used to create a unique sound to the band. Being introduced to Hip Hop by his dad Imidiatly gravitated to the turn tables. Mike has Dj’ed for numbs groups before connecting  with Urban dogs. After being heard at an event in southern Cal. Mike was added to the group to complete the sound.",
},
]

// Album Array Data Start
const albums =
[
{
albumTitle: 'Bonefield',
albumArt: './albumPhotos/UDbonefield.jpg',
songs: [ 'Warhead' , 'Hobo Lullaby' , 'Summertime' ],
playSong: './Music/song1.mp3',
},
{
albumTitle: 'Attack',
albumArt: './albumPhotos/UDattack.jpg',
songs: [ 'The Little Song' , 'Sidewalk Baby' , 'Trick or Treat' ],
playSong: './Music/song2.mp3',
},
{
albumTitle: 'Wipeout Beach',
albumArt: './albumPhotos/UDwipeoutBeach.jpg',
songs: [ 'Police State' , 'Rare Disease' , 'Destroy' ],
playSong: './Music/song3.mp3',
},
{
albumTitle: 'No Pedigree',
albumArt: './albumPhotos/UDnoPedigree.jpg',
songs: [ 'No Pity' , 'The Word' , 'Ghost' ],
playSong: './Music/song4.mp3',
},
{
albumTitle: 'Urban Dogs',
albumArt: './albumPhotos/UDurbanDogs.jpg',
songs: [ 'Be Friends' , 'Limo Life' , 'Dragnet' ],
playSong: './Music/song5.mp3',
}
]
// Album Array Data End



const addToCart = (e) => {
    alert("Cart is Full")
};

const attachEvents = () => {
// get elements by class name and store in a variable
const buttons = document.getElementsByClassName('full')
// then loop over the elements and attach event listener to each element in collection
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', addToCart)
}
}

// create function to iterate through cards/array
const printGear = (arr) => {
    let domString = '<div class="row gear-row">';
    for (let i = 0; i < arr.length; i++) {
        domString += `
        <div>
            <h5 class="card-title gear-card-title">${arr[i].TShirt}</h5>
            <div class="card gear-card" style="width: 300px">
                <img src="${arr[i].Picture}" class="card-img-top gear-card-img-top" alt="...">
                <div class="card-body gear-card-body">
                    <p class="card-text">${arr[i].Price}</p>
                    <p class="card-text">${arr[i].Size}</p>
                    <p class="card-text">${arr[i].Availability}</p>
                    <button type="button" class="btn btn-danger full">Add to Cart</button>
                </div>
            </div>
        </div>    
        `
    }
    domString += '</div>'
    printToDom('bandMerch', domString);
    attachEvents();           
};
            
            

const printToDom = (divId, textToPrint) => {
    document.getElementById(divId).innerHTML= textToPrint
    
}
const bandBuilder = (bioInfo) => {
    let domString ='';
    for(let i=0; i <bioArr.length; i++) {
        const bio = bioInfo[i];
        domString += 
        `
        <div class= "domStuff">
        <div class="card aboutCard" style="width: 340px;">
        <img src="${bio.Image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h3 class="card-title">${bio.Name}</h3>
        <p class="card-text">${bio.Instrument}</p>
        <h4 class="card-text">${bio.Born}</h4>
        <p class="card-text">${bio.Bio}</p>
        </div>
        </div>
        </div>
        `       
    } 
    printToDom("theband", domString);
}



// Album card builder Function START
const buildAlbums = (albumArray) => {
    let domString = '';
    for(let i = 0; i < albums.length; i++) {
        const album = albumArray[i];
        domString += 
        `
        <div>
            <div class="card album-card" style="width: 340px;">
                <img src="${album.albumArt}" class="card-img-top album-card-img-top" alt="Image of ${album.albumTitle}">
                <div class="card-body" >
                    <div style="margin: 0 auto; display: table;">
                        <audio controls preload>
                        <source src="${album.playSong}" type="audio/mpeg">
                        Your browser does not support the audio element.
                        </audio>
                    </div>
                <h4 class="card-title album-card-title">${album.albumTitle}</h5>
                
                
                <div class="card-header album-card-header">Top 3 songs</div>
                    
                <ul class="list-group list-group-flush">
                        <li class="list-group-item">1. ${album.songs[0]}</li>
                        <li class="list-group-item">2. ${album.songs[1]}</li>
                        <li class="list-group-item">3. ${album.songs[2]}</li>
                        
                    </ul>
                </div>
            </div>
        </div>
        `
}
    printToDom("albumCards", domString)
};
// Album card builder Function END


const upcomingConcertBuilder = (myArr)=> {
    let domString = '';
    for (let i=0; i < myArr.length; i++) {
        domString += 
        `
        <div class="main-container1">
            <div class="card" style="width: 350px;">
                <img src="${myArr[i].image}" class="dates-card-img-top" alt="...">
                    <div class="card-body dates-card-body">
                        <p class="card-title dates-card-title">${myArr[i].date}</p>
                        <p class="card-text dates-card-text">${myArr[i].venue}</p>
                        <h4>Rating</h4>
                        <p class="card-review">${myArr[i].review}</p>
                        <a href="https://www.google.com/search?q=concertthicket+for+sale&rlz=1C5CHFA_enUS860US863&oq=concertthicket+for+sale&aqs=chrome..69i57.7744j0j4&sourceid=chrome&ie=UTF-8&ibp=htl;events&rciv=evn&sa=X&ved=2ahUKEwjr3snm3N3kAhUCCawKHdmsCDQQ5rwDKAF6BAgSEAw#fpstate=tldetail&htidocid=pfQmZUVQKTbYCx3VJpA8-A%3D%3D&htivrt=events" class="btn btn-primary">Concert Tickets</a>
                    </div>
            </div>
        </div>
        `
    }
    printToDom('concert-card', domString);
}

const init = () => {
    if (document.URL.includes ('about')) {
        bandBuilder(bioArr);
        } else if(document.URL.includes('album')){
        buildAlbums(albums);
        } else if(document.URL.includes('gear')){
        printGear(bandGear);
        } else if(document.URL.includes('dates')){
        upcomingConcertBuilder(upcomingConcert); 
    };
};

init(); 
