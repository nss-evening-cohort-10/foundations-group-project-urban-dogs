

const albums =
[
{
albumTitle: 'Bonefield',
albumArt: './albumPhotos/UDbonefield.jpg',
songs: [ 'Warhead' , 'Hobo Lullaby' , 'Summertime' ],
},
{
albumTitle: 'Attack',
albumArt: './albumPhotos/UDattack.jpg',
songs: [ 'The Little Song' , 'Sidewalk Baby' , 'Trick or Treat' ],
},
{
albumTitle: 'Wipeout Beach',
albumArt: './albumPhotos/UDwipeoutBeach.jpg',
songs: [ 'Police State' , 'Rare Disease' , 'Destroy' ],
},
{
albumTitle: 'No Pedigree',
albumArt: './albumPhotos/UDnoPedigree.jpg',
songs: [ 'No Pity' , 'The Word' , 'Ghost' ],
},
{
albumTitle: 'Urban Dogs',
albumArt: './albumPhotos/UDurbanDogs.jpg',
songs: [ 'Be Friends' , 'Limo Life' , 'Dragnet' ],
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
        <div class="col-sm-4">
            <div class="card" style="width: 300px;">
                <img src="${album.albumArt}" class="card-img-top" alt="Image of ${album.albumTitle}">
                    <div class="card-body" >
                        <h5 class="card-title">${album.albumTitle}</h5>
                        <p class="card-text">Top 3 songs</p>
                        <p class="card-text">1. ${album.songs[0]}</p>
                        <p class="card-text">2. ${album.songs[1]}</p>
                        <p class="card-text">3. ${album.songs[2]}</p>
                    </div>
            </div>
        </div>
        `
    }
    printToDom("albumCards", domString)
};

buildAlbums(albums);