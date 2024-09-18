const searchInput  = document.getElementById('search-input');
const searchButton = document.getElementById('button-search');
const searchFrom   = document.getElementById('search-form');

function createLink() {
    const hrefSearch  = 'search?q=';
    const valueSearch = searchInput.value;
    console.log(valueSearch)
    const linkSearch  = document.createElement('a');
    linkSearch.href   = `${hrefSearch}${valueSearch}`;
    linkSearch.textContent = 'Pesquisar Google';
   
    searchButton.innerHTML = '';
    searchButton.appendChild(linkSearch);
    
    document.title = `${valueSearch} - searchGoogle`;
}

searchFrom.addEventListener('submit', function(e) {
    e.preventDefault()

    createLink()
});