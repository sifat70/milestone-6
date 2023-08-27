const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${ searchText }`)
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones, isShowAll);
}


const displayPhones = (phones, isShowAll) => {
    // phone container id
    const phoneContainer = document.getElementById('phone-container');
    //  clear phone container cards before adding new cards
    phoneContainer.textContent = '';

    // display show all button if there are more than 12 phones
    const showAllContainer = document.getElementById('show-all-container')
    if (phones.length > 12 && !isShowAll) {
        showAllContainer.classList.remove('hidden')
    }else{
        showAllContainer.classList.add('hidden')
    }
    console.log('is show all', isShowAll)

    // display only first 12 phones if not show all
    if (!isShowAll) {
        phones = phones.slice(0, 12);
    }

    phones.forEach(phone => {
        console.log(phone);
        // 1. create a div
        const phoneCard = document.createElement('div');
        // 2. added class 
        phoneCard.classList = `card p-5 bg-base-100 shadow-xl`;
        // 3. set inner HTML 
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `;
        // 4. appent phone card in phoneContainer
        phoneContainer.appendChild(phoneCard)
    });

    // hide loading spinner
    toggleLodingSpiner(false)
}


const handleSearch = (isShowAll) =>{
    toggleLodingSpiner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText)
    loadPhone(searchText, isShowAll)
}

const toggleLodingSpiner = (isLoading) =>{
    const loadingSpiner = document.getElementById('loading-spiner');
    if (isLoading) {
        loadingSpiner.classList.remove('hidden')
    }else{
        loadingSpiner.classList.add('hidden')
    }
}

// handle show all
const handleShowAll = () => {
    handleSearch(true)
}

// loadPhone()