async function loadPage(page) {
    console.log("Loading ${page}")
    contentbox = document.getElementById("content-box")
    const response = await fetch(`pages/${page}.html`);
    const data = await response.text();
    // Debug purposes
    console.log(data);

    contentbox.innerHTML = data;
}

