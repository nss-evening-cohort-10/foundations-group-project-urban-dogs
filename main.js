console.log("hey guys"
);

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


const printToDom = (divId, textToPrint) => {
document.getElementById(divId).innerHTML= textToPrint

}
const bandBuilder = (bioInfo) => {
    let domString ='';
    for(let i=0; i <bioArr.length; i++) {
        const bio = bioInfo[i];
        domString += `
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
       

        `;

    }
printToDom("theband", domString);

};


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



const init = () => {
    if (document.URL.includes ('about')) {
        bandBuilder(bioArr);
        } else if(document.URL.includes('album')){
        buildAlbums(albums);
        // } else if(document.URL.includes('album')){
        // buildAlbums(albums);
        // } else if(document.URL.includes('album')){
        // buildAlbums(albums);
    
}
}
 

init(); 