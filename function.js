function Save() {
    localStorage.setItem('litstPlace', JSON.stringify(tour));
}
function Load() {
    tour = JSON.parse(localStorage.getItem('listPlace'));
}

Load();
Save();

var showPopulorTour = function() {
    var listroutes = '';
    for (var j in tour) {
        var data = JSON.parse(JSON.stringify(tour[j]));
        if (data.id > 40) {
            var listroutes = '<div class="col-sm-4 col-xs-12 col-ms-12 col-md-6 item-routes ">';
            listroutes += '<button class="btn-items">';
            listroutes += '<img src="' + data.img + '" class="image" style="min-width: 160px; min-height:76px">';
            listroutes += '<div class="body-items">';
            listroutes += '<p class="title">' + data.orign + ' ⇒ ' + data.destination + '</p>';
            listroutes += '<div class="details-item">';
            listroutes += '<div class="details">';
            listroutes += '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-coin" viewBox="0 0 16 16">';
            listroutes += '<path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"/>';
            listroutes += '<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>';
            listroutes += '<path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>';
            listroutes += '</svg>';
            listroutes += '<span class="item-price">' + data.price + ' đ </span>';
            listroutes += '</div>';
            listroutes += '<div class="details">';
            listroutes += '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">';
            listroutes += '<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>';
            listroutes += '<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>';
            listroutes += '</svg>';
            listroutes += '<span class="item-time">' + data.duration + '</span>';
            listroutes += '</div>';
            listroutes += '<div class="details">';
            listroutes += '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">';
            listroutes += '<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>';
            listroutes += '</svg>';
            listroutes += '<span class="item-time">' + data.distance + ' km </span>';
            listroutes += '</div>';
            listroutes += '</div>';
            listroutes += '</div>';
            listroutes += '</button>';
            listroutes += '</div>';

            document.getElementById("list-popular-routes").innerHTML += listroutes;
        }
    }
};
showPopulorTour();


function selectPlace() {
    var listplace = '';
    for (var i in tour) {
        var data = JSON.parse(JSON.stringify(tour[i]));
        listplace += '<button type="button" class="list-group-item list-group-item-action" onclick="selectItem(' + data.orign + ')" >' + data.orign + '</button>';
    }
    document.getElementById("listData").innerHTML = listplace;
};

function selectItem(i) {
    console.log(i);
    document.getElementById("select-origin").innerHTML=i;
};

function selectDestination() {
    var destination = '' ;
    var start = document.getElementById("select-origin").value; 
    for (var i in tour) {
        var data = JSON.parse(JSON.stringify(tour[i]));
        if (start == data.orign) {
            destination += '<button type="button" class="list-group-item list-group-item-action" onclick="selectItem('+ data.destination +')" >' + data.destination + '</button>';
        }
        document.getElementById("listDestination").innerHTML = destination;
    }
}

function procedure() {
    window.location.href="http://127.0.0.1:3000/procedure.html";
}
