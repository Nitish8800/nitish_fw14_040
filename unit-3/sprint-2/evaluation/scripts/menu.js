var cartItems = JSON.parse(localStorage.getItem("cartDatas")) || []; //   geting data from local storage

let tempDiv = document.querySelector("#container");

// < -------------------------------------------------------------------------------->

/*               Catch Data From Api                        */


async function allMealCategories() {
    try {
        var response = await fetch(
            "https://www.themealdb.com/api/json/v1/1/categories.php"
        );

        var cartData = await response.json();
        var categories = cartData.categories;
        console.log(cartData);

        categories.forEach(function (elem) {
            appendCategories(elem); // getting fetch data with dishes in display.
        });
    } catch (err) {
        console.log(err);
    }
}
allMealCategories();
// < -------------------------------------------------------------------------------->
function appendCategories(data) {
    let box = document.createElement("div"); // making box for every dish
    box.id = "boxes";

    var image = document.createElement("img");
    image.src = data.strCategoryThumb;

    var mealName = document.createElement("h3");
    mealName.textContent = data.strCategory;

    var cartButton = document.createElement("button");
    cartButton.textContent = "Add To Cart";
    cartButton.addEventListener("click", function () {
        addCart(data); // for send data to localStorage
    });

    data.price = randomPrice();
    var priceData = document.createElement("h3");
    priceData.textContent = `Price: ₹. ${data.price} `;

    box.append(image, mealName, priceData, cartButton);

    tempDiv.append(box);
}

// <      ADD to CArt in Local localStorage   function          >

function addCart(data) {
    cartItems.push(data);
    var count = JSON.parse(localStorage.getItem("cartDatas")) || [];

    document.getElementById("countValue").innerText = `COUNT : ${count.length + 1
        }`;

    localStorage.setItem("cartDatas", JSON.stringify(cartItems));
}
// < -------------------------------------------------------------------------------->

//   Price Key Value Added here

function randomPrice() {
    return Math.floor(Math.random() * 400 + 100);
}

// < -------------------------------------------------------------------------------->