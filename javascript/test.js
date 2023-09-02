const allCategory = async () => {
    const response = await fetch ("https://openapi.programming-hero.com/api/videos/categories");

    const data = await response.json();
    // console.log(data)

    const tabContainer = document.getElementById("tab-container");
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

allCategory();
allLoadVideos("1000")