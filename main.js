console.log("hey guys");

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

// create printToDom
printToDom = (divId, textToPrint) => {
    const divContainer = document.getElementById(divId)
    divContainer.innerHTML = textToPrint
};

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
}
printGear(bandGear);


