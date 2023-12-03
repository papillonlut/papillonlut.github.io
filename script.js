let url = ("https://api.npoint.io/4de9c07a8b7bda2817a2")

fetch(url)
    .then(response => {
        response.json().then(result => {
            let news = JSON.stringify(result.news);
            document.getElementById("news").textContent = news;
        });
    });