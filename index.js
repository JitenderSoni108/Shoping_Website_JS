let products = {
    data: [
        {
            productName: "Regular White T-shirt",
            category: "TopWear",
            price: "300",
            image: "./images/top1.avif",
        },
        {
            productName: "Its Bottomwear",
            category: "BottomWear",
            price: "199",
            image: "./images/bottom1.jpg",
        },
        {
            productName: "Sporty Smartwatch",
            category: "Watch",
            price: "99",
            image: "./images/watch1.avif",
        },
        {
            productName: "Basic Knitted Top",
            category: "TopWear",
            price: "19",
            image: "./images/top2.avif",
        },
        {
            productName: "Black Leather-jacket",
            category: "Jacket",
            price: "1999",
            image: "./images/jacket1.avif",
        },
        {
            productName: "Stylish bottom",
            category: "BottomWear",
            price: "89",
            image: "./images/bottom2.jpg",
        },
        {
            productName: "Its Jacket",
            category: "Jacket",
            price: "2999",
            image: "./images/jacket2.avif",
        },
        {
            productName: "wear",
            category: "BottomWear",
            price: "499",
            image: "./images/bottom1.jpg",
        },
    ]
};

// Function to generate product cards
function generateProductCards() {
    for (let i of products.data) {
        // create card
        let card = document.createElement("div");
        card.classList.add("card", i.category, "hide");

        // image div
        let imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");

        // image tag
        let image = document.createElement("img");
        image.setAttribute("src", i.image);
        imageContainer.appendChild(image);
        card.appendChild(imageContainer);

        // container
        let container = document.createElement("div");
        container.classList.add("container");

        // product name
        let name = document.createElement("h5");
        name.classList.add("product-name");
        name.innerText = i.productName.toUpperCase();
        container.appendChild(name);

        // price
        let price = document.createElement("h6");
        price.innerText = "$" + i.price;
        container.appendChild(price);

        card.appendChild(container);
        document.getElementById("products").appendChild(card);
    }
}

// Generate product cards on page load
generateProductCards();

// Function to filter products
function filterProduct(value) {
    // Get all buttons
    let buttons = document.querySelectorAll(".button_value");
    buttons.forEach(button => {
        if (value.toUpperCase() === button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    // Get all cards
    let elements = document.querySelectorAll(".card");
    elements.forEach(element => {
        if (value === "All") {
            element.classList.remove("hide");
        } else {
            if (element.classList.contains(value)) {
                element.classList.remove("hide");
            } else {
                element.classList.add("hide");
            }
        }
    });
}

// Add event listener for search button
document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search_input").value.toUpperCase();
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    elements.forEach((element, index) => {
        if (element.innerText.includes(searchInput)) {
            cards[index].classList.remove("hide");
        } else {
            cards[index].classList.add("hide");
        }
    });
});

// Display all products initially
window.onload = () => {
    filterProduct("All");
};
