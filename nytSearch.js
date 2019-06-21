$(document).ready(function() { //  Beginning of jQuery
    $("#go").on("click", function () {
      var searchTerm = $("#searchTerm").val().trim();

    //   https://api.nytimes.com/svc/search/v2/articlesearch.json?q=egypt&api-key=iSKIa7a5O8ZOHG0wadAPGt769u4oOkgw
    
    var newsURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm +
                "&api-key=iSKIa7a5O8ZOHG0wadAPGt769u4oOkgw" ;

    console.log(newsURL) ;           
    
    $.ajax( {
        url: newsURL,
        method: "GET"
    }).then( function (response) {
        console.log(response);
        var news = response.response.docs;
        $("#news-area").empty();
        news.forEach(function(e) {
            var headline = $("<h4>").text(e.headline.main);
            var abstract = $("<p>").text(e.abstract);
            
            $("#news-area").append(headline, abstract);

        })
   
    })

    })
})