fetch('https://techcrunch.com/wp-json/wp/v2/posts?per_page=50&context=embed').then((data)=>{
    return data.json();
}).then((completedata)=>{
    // console.log(completedata[2].title.rendered);
    let data1="";
    completedata.map((values)=>{
        data1+=`<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${values.jetpack_featured_media_url}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${values.title.rendered}</h5>
        <p class="card-text">${values.excerpt.rendered}</p>
        <a href="${values.link}" class="btn btn-primary">Full Article</a>
        </div>
    </div>`
    });
    document.getElementById("cards").innerHTML=data1;
}).catch((err=>{
    console.log(err)
}))