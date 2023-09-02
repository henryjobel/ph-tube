const allCategory = async () => {
    const response = await fetch ("https://openapi.programming-hero.com/api/videos/categories");

    const data = await response.json();
    console.log(data)

    const tabContainer = document.getElementById("tab-container");
    tabContainer.innerHTML = "";
    
    data.data.forEach(category => {
        const div = document.createElement("div")
        
        div.innerHTML =`
        <a onclick="allLoadVideos('${category.category_id}')"
            class="tab hover:bg-red-500 hover:text-white"
            >${category.category}</a> 
        `
        tabContainer.appendChild(div)
    }); 
    
}

const allLoadVideos = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await response.json();
    console.log(categoryId)
    

    const cardContainer = document.getElementById("card-container")
    cardContainer.innerHTML = "";
    data.data.forEach(video => {
    console.log(video);
    const div = document.createElement('div');
    div.innerHTML = `
            <div class="card h-[350px] bg-base-100 shadow-xl">
            <figure><img src=${video.thumbnail} /></figure>
            <div class="card-body">
                <div class="flex items-center space-x-2">
                    <div class="rounded-full overflow-hidden h-12 w-12">
                        <img src=${video.authors[0].profile_picture} alt="Profile Picture" class="h-full w-full object-cover">
                    </div>
                    <h2 class="text-xl font-semibold">${video.title}</h2>
                    
                </div>
                <p class="text-gray-700">
                    ${video.authors[0].profile_name}
                    ${video.authors[0].verified ? '<span class="text-blue-500 ml-1"><i class="fas fa-check-circle text-blue-500"></i></span>' : ''}
                </p>
                <p class="text-gray-700">${video.others.views}</p>
                <div class="card-actions justify-end">
                </div>
            </div>
        </div>
    `;
        cardContainer.appendChild(div)

    });
    
}
const noVideoshow = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await response.json();
    console.log(categoryId);

    const heroContainer = document.getElementById("hero-container");
    heroContainer.innerHTML = "";

    if (data.data.length === 0) {
        
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 class="text-5xl font-bold">No Videos Found</h1>
                        <p class="py-6">Sorry, there are no videos available in this category.</p>
                        <button class="btn btn-primary">Return to Categories</button>
                    </div>
                </div>
            </div>
        `;
        heroContainer.appendChild(div);
    } else {
        
        data.data.forEach(video => {
            console.log(video);
            
        });
    }
}

noVideoshow("1005");
allCategory();
allLoadVideos("1000");