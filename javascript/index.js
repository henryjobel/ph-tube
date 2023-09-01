const allCategory = async () => {
    const response = await fetch ("https://openapi.programming-hero.com/api/videos/categories");

    const data = await response.json();
    // console.log(data)

    const tabContainer = document.getElementById("tab-container");
    data.data.forEach(category => {
        const div = document.createElement("div")
        div.innerHTML =`
        <a onclick="allLoadVideos('${category.category_id}')" class="tab">${category.category }</a> 
        `
        tabContainer.appendChild(div)
    }); 
    
}

const allLoadVideos = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await response.json();
    console.log(categoryId)
    

    const cardContainer = document.getElementById("card-container")
    data.data.forEach(video => {
    console.log(video);
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card  bg-base-100 shadow-xl">
        <figure><img src=${video.thumbnail} /></figure>
        <div class="card-body">
            <div class="flex">
                <div class="w-80">
                    <div class="flex items-center space-x-2">
                        <div class="rounded-full overflow-hidden h-12 w-12">
                            <img src=${video.authors[0].profile_picture} alt="Profile Picture" class="h-full w-full object-cover">
                        </div>
                        <h2 class="text-xl font-semibold">${video.title}</h2>
                    </div>
                </div>
            </div>
            <p class="text-gray-700">${video.authors[0].profile_name}</p>
            <p class="text-gray-700">${video.others.views}</p>
            <div class="card-actions justify-end">
            </div>
        </div>
    </div>
    `;
        cardContainer.appendChild(div)

    });
    
}

allCategory();
allLoadVideos("1000")