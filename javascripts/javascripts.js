window.onload = function () {
    var p = document.createElement("p");
    var script = document.createElement("script");
    var head = document.getElementsByTagName("head")[0];
    script.src = "http://localhost:8888/index.html?jsonp=test&name=xiong&sex=boy&age=22";
    p.innerHTML = "This is dynamic";
    head.appendChild(script);
    document.body.appendChild(p);
}
