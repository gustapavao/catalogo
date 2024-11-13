// Lista de produtos
const products = [
    {
        id: 11,
        title: "Cookie Alpino",
        price: "R$4,00",
        image: "img/alpino.jpeg"
    },
    {
        id: 12,
        title: "Cookie Caribe",
        price: "R$4,00",
        image: "img/caribe.jpg"
    },
    {
        id: 13,
        title: "Cookie Galak",
        price: "R$4,00",
        image: "img/galak.png"
    },
    {
        id: 14,
        title: "Cookie Gotas de Chocolate",
        price: "R$4,00",
        image: "img/gotas.jpg"
    },
    {
        id: 15,
        title: "Cookie Negresco",
        price: "R$4,00",
        image: "img/negresco.png"
    },
    {
        id: 16,
        title: "Cookie Nescau Duo",
        price: "R$4,00",
        image: "img/nescau.png"
    },
    {
        id: 17,
        title: "Cookie Prestígio",
        price: "R$4,00",
        image: "img/prest.jpg"
    },
    {
        id: 1,
        title: "Natural Perfect Black",
        price: "R$5,00",
        image: "img/zomo1.webp"
    },
    {
        id: 2,
        title: "Zomo Perfect Pink",
        price: "R$5,00",
        image: "img/zomo-pink.webp"
    },
    {
        id: 3,
        title: "Seda Papelito Brown King Size",
        price: "R$5,50",
        image: "img/papelito.jpg"
    },
    {
        id: 4,
        title: "Seda Smoking",
        price: "R$5,00",
        image: "img/smoking.webp"
    },
    {
        id: 5,
        title: "Filtro para Cigarro Hi C/130",
        price: "R$9,50",
        image: "img/filtro.webp"
    },
    {
        id: 6,
        title: "Piteira Bem Bolado",
        price: "R$6,00",
        image: "img/bem-bolado.webp"
    },
    {
        id: 7,
        title: "Camel Kretec",
        price: "R$1,30",
        image: "img/camel.png"
    },
    {
        id: 8,
        title: "Black",
        price: "R$1,80",
        image: "img/black.jpg"
    },
    {
        id: 9,
        title: "Rothamans Melão",
        price: "R$1,00",
        image: "img/rothmans-melao.jpg"
    },
    {
        id: 10,
        title: "Rothamans Melancia",
        price: "R$0,80",
        image: "img/rothmans-melancia.png"
    },


];
// URL para redirecionamento
const redirectUrl = "https://wa.link/wzyql3"; // Substitua pelo link desejado

// Função para renderizar os produtos na página
function renderProducts() {
    const productList = document.getElementById("product-list");
    products.forEach(product => {
        const productCard = document.createElement("a");
        productCard.classList.add("product-card");
        productCard.href = redirectUrl;
        productCard.target = "_blank"; // Abre o link em uma nova aba

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="product-info">
                <h2 class="product-title">${product.title}</h2>
                <p class="product-price">${product.price}</p>
            </div>
        `;

        productList.appendChild(productCard);
    });
}

// Função para exibir um alerta com detalhes do produto
function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        alert(`Produto: ${product.title}\nPreço: ${product.price}`);
    }
}

// Carregar os produtos ao carregar a página
window.onload = renderProducts;
