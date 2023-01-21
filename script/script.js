const food = [
    {
        foodName: 'Burger',
        foodCategory: 'Lunch',
        isJunkFood: true,
        calories: 295,
        foodImage: 'https://s7d1.scene7.com/is/image/mcdonalds/DC_202006_0003_Cheeseburger_StraightBun_832x472:product-header-desktop?wid=830&hei=458&dpr=off'
    },
    {
        foodName: 'Pizza',
        foodCategory: 'Lunch',
        isJunkFood: true,
        calories: 270,
        foodImage: 'https://images.indianexpress.com/2022/08/pizza1200.jpg'
    },
    {
        foodName: 'Sandwich',
        foodCategory: 'Breakfast',
        isJunkFood: false,
        calories: 304,
        foodImage: 'https://www.newidea.com.au/media/105559/crips.jpg?width=909&height=0&mode=crop&center=0.5,0.5'
    },
    {
        foodName: 'Omlet',
        foodCategory: 'Breakfast',
        isJunkFood: false,
        calories: 154,
        foodImage: 'https://ik.bebodywise.com/mosaic-wellness/image/upload/f_auto,w_1000,c_limit/v1645195020/BW%20BLOG/Untitled-design---2022-02-18T200613.051_11zon.jpg'
    },

]

let allBtn = document.getElementById('all');
let breakfast = document.getElementById('breakfast');
let lessCal = document.getElementById('lessCal');
let junkFood = document.getElementById('junkFood');
let cardGroup = document.getElementById('card-group')
let all = '';
let text;
food.map((items) => (
    all += `
        <div class="card border border-2 border-warning rounded-5 overflow-hidden bg-transparent d-flex mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img src=${items.foodImage} class="img-fluid">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${items.foodName}</h5>
                    <p class="card-text">Category: ${items.foodCategory}</p>
                    <p class="card-text">Is Junk: ${items.isJunkFood ? 'Yes' : 'No'}</p>
                    <p class="card-text">Calories: ${items.calories}</p>
                </div>
                </div>
            </div>
        </div>`
))
cardGroup.innerHTML = all;

allBtn.addEventListener('click', () => {
    text = '';
    food.map((items) => (
        text += `
        <div class="card border border-2 border-warning rounded-5 overflow-hidden bg-transparent d-flex mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img src=${items.foodImage} class="img-fluid">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${items.foodName}</h5>
                    <p class="card-text">Category: ${items.foodCategory}</p>
                    <p class="card-text">Is Junk: ${items.isJunkFood ? 'Yes' : 'No'}</p>
                    <p class="card-text">Calories: ${items.calories}</p>
                </div>
                </div>
            </div>
        </div>`
    ))
    cardGroup.innerHTML = text;
})

breakfast.addEventListener('click', () => {
    text = '';
    food.filter(item => (
        item.foodCategory === 'Breakfast'
    )).map(items => (
        text += `
        <div class="card border border-2 border-warning rounded-5 overflow-hidden bg-transparent d-flex mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img src=${items.foodImage} class="img-fluid">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${items.foodName}</h5>
                    <p class="card-text">Category: ${items.foodCategory}</p>
                    <p class="card-text">Is Junk: ${items.isJunkFood ? 'Yes' : 'No'}</p>
                    <p class="card-text">Calories: ${items.calories}</p>
                </div>
                </div>
            </div>
        </div>
        `
    ))
    cardGroup.innerHTML = text;
})

lessCal.addEventListener('click', () => {
    text = '';
    food.filter(item => (
        item.calories < 300
    )).map(items => (
        text += `
        <div class="card border border-2 border-warning rounded-5 overflow-hidden bg-transparent d-flex mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img src=${items.foodImage} class="img-fluid">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${items.foodName}</h5>
                    <p class="card-text">Category: ${items.foodCategory}</p>
                    <p class="card-text">Is Junk: ${items.isJunkFood ? 'Yes' : 'No'}</p>
                    <p class="card-text">Calories: ${items.calories}</p>
                </div>
                </div>
            </div>
        </div>
        `
    ))
    cardGroup.innerHTML = text;

})

junkFood.addEventListener('click', () => {
    text = '';
    food.filter(item => (
        item.isJunkFood === true
    )).map(items => (
        text += `
        <div class="card border border-2 border-warning rounded-5 overflow-hidden bg-transparent d-flex mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                <img src=${items.foodImage} class="img-fluid">
                </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${items.foodName}</h5>
                    <p class="card-text">Category: ${items.foodCategory}</p>
                    <p class="card-text">Is Junk: ${items.isJunkFood ? 'Yes' : 'No'}</p>
                    <p class="card-text">Calories: ${items.calories}</p>
                </div>
                </div>
            </div>
        </div>
        `
    ))
    cardGroup.innerHTML = text;
})