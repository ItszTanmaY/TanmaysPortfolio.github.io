const products = [
    { name: 'T-Shirt', url: 'product1.html' },
    { name: 'Jeans', url: 'product2.html' },
    { name: 'Jacket', url: 'product3.html' },
    { name: 'Sneakers', url: 'product4.html' },
    { name: 'Hat', url: 'product5.html' }
];

document.getElementById('search-bar').addEventListener('keyup', function() {
    var searchTerm = this.value.toLowerCase();
    var autocompleteList = document.getElementById('autocomplete-list');
    autocompleteList.innerHTML = '';

    if (searchTerm) {
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm)
        );

        filteredProducts.forEach(product => {
            var listItem = document.createElement('li');
            var linkItem = document.createElement('a');
            linkItem.href = product.url;
            linkItem.textContent = product.name;
            listItem.appendChild(linkItem);
            autocompleteList.appendChild(listItem);
        });

        autocompleteList.style.display = filteredProducts.length ? 'block' : 'none';
    } else {
        autocompleteList.style.display = 'none';
    }
});

document.addEventListener('click', function(e) {
    if (!document.getElementById('search-bar').contains(e.target)) {
        document.getElementById('autocomplete-list').style.display = 'none';
    }
});

document.getElementById('nav-toggle').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
});
