console.log("hey guys");

// Array of objects
const bandGear = [
    {
    TShirt: 'Classic Rock',
    Picture: 'UDtshirts/Classic Rock T.jpg',
    Price: '$29.99',
    Size: 'S, M, L, XL, XXL',
    Availability: 'Available',
    },

    {
    TShirt: 'Dog Band',
    Picture: 'UDtshirts/Dog Band T.jpg',
    Price: '$19.99',
    Size: 'S, M, L, XL, XXL',
    Availability: 'Available',
    },

    {
    TShirt: 'Jeruselum',
    Picture: 'UDtshirts/Jerusalem T.jpg',
    Price: '$29.99',
    Size: 'S, M, L, XL, XXL',
    Availability: 'Sold Out',
    },

    {
    TShirt: 'Pug Life',
    Picture: 'UDtshirts/Pug Life T.jpg',
    Price: '$17.99',
    Size: 'S, M, L, XL, XXL',
    Availability: 'Sold Out',
    },

    {
    TShirt: 'Pug',
    Picture: 'UDtshirts/Pug T.jpg',
    Price: '$12.99',
    Size: 'S, M, L, XL, XXL',
    Availability: 'Available',
    },

    {
    TShirt: 'Wild Thing',
    Picture: 'UDtshirts/Wild Thing T.jpg',
    Price: '$14.99',
    Size: 'S, M, L, XL, XXL',
    Availability: 'Available',
    }
]

// create printToDom
printToDom = (divId, textToPrint) => {
    const divContainer = document.getElementById(divId)
    divContainer.innerHTML = textToPrint
};

// create function to iterate through cards/array
const printGear = (arr) => {
    let domString = '<div class="row">';
    for (let i = 0; i < arr.length; i++) {
        domString += `
        <div class="col">
            <h5 class="card-title">${arr[i].TShirt}</h5>
            <div class="card" style="width: 18rem;">
                <img src="${arr[i].Picture}" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">${arr[i].Price}</p>
                    <p class="card-text">${arr[i].Size}</p>
                    <p class="card-text">${arr[i].Availability}</p>
                </div>
            </div>
        </div>
        `
    } 
    domString += '</div>'
    console.log(domString);
    printToDom('bandMerch', domString);
}
printGear(bandGear);
