

function extractSiteContent(url, callback) {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.responseText);
            callback(json['img'] + "\n" + json['text']);
        }
    };
    xhttp.open("POST", "https://denizdaum.de/gtp3/crawl.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("token=pduxfw45e7xc3lqf5p9itz&url=" + url);
}


export default extractSiteContent;