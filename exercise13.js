function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewsStr
    if (views < 1000000) {
        viewsStr = views / 1000 + "k";
    }
    else if (views > 1000000) {
        viewsStr = views / 1000000 + "M";
    }
    else {
        viewsStr = views / 1000 + "k";
    }
    let html = `<div class="card">
    <div>
        <img src="${thumbnail}" alt="sd">
        <div class="durationtime">
        ${duration}
    </div>
    </div>
    
    <div class="title1">
        <h2>${title}</h2>
        <div class="channel">
            <span>${cName}</span>
            <span>. ${viewsStr} views</span>
            <span>. ${monthsOld} months old</span>
        </div>
    </div>
</div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}
createCard("Installing VS code & how it works | Sigma web devlopment course | Tutorial #1", "CodeWithHarry", "595000", "7", "27:14", "https://i.ytimg.com/vi/9H-Ieq6zjIY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAq1g4Q6opar3DOZ0sbJrvgCZZB-A")
createCard("Introduction to CSS | Sigma web devlopment course | Tutorial #6", "CodeWithHarry", "5950000", "4", "32:44", "https://i.ytimg.com/vi/9H-Ieq6zjIY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAq1g4Q6opar3DOZ0sbJrvgCZZB-A")
