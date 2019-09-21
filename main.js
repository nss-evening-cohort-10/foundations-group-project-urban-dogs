

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



const printToDom = (divId, textToPrint) => {
    document.getElementById(divId).innerHTML = textToPrint
}

printToDom("albumCards", 'hi');

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

buildAlbums(albums);