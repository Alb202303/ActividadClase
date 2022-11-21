

function llenarTabla(data) {
    var table = "<tr><th>UserID</th><th>ID</th><th>Title</th><th>Completed</th></tr>";
    var obj = data;
    for (i = 0; i < obj.length; i++) {
        table += "<tr><td>" +
            obj[i].userId +
            "</td><td>" +
            obj[i].id +
            "</td><td>" +
            obj[i].title +
            "</td><td>" +
            obj[i].completed +
            "</td></tr>";
    }
    document.getElementById("tabla").innerHTML = table;
}
Rx.Observable.fromEvent(button, 'click')
    .subscribe(function () { return console.log('Haz hecho click!'); });
function loadTabla() {
    var options = {
        method: "GET"
    };
    fetch("https://jsonplaceholder.typicode.com/todos", options)
        .then(function (response) { return response.json(); })
        .then(function (data) { return llenarTabla(data); });
}
