const $gifArea = $("#gif-area");
const $searchInput = $("#search");

$("form").on("submit", async function (e) {
    e.preventDefault();

    let query = $searchInput.val();
    $searchInput.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: query,
            api_key: "Ao6z9YdVRCLOFk7BaZzkGSohq2IU1ixu"
        }
    });

    const res = response.data.data

    let numResults  = res.length;
    console.log(numResults)
    
    if (numResults) {
        let index = Math.floor(Math.random() * numResults);
        let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
        let $newGif = $("<img>", {
        src: res[index].images.original.url,
        class: "w-100"
        });
        $newCol.append($newGif);
        $gifArea.append($newCol);
    }


});

/* remove gif */

$("#remove").on("click", function() {
  $gifArea.empty();
});