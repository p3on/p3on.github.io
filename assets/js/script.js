function queryHandler(query) {
    if (query.startsWith("+")) {
        filterTags(query);
    } else {
        filterTools(query);
    }
}


function filterTools(query) {
    var filter, table, i, toolName, tr;

    filter = query.toUpperCase();
    table = document.getElementById('toolTime');

    tr = table.getElementsByTagName('tr');
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[1];
        if (td) {
            toolName = td.getContent || td.innerText;
            if (toolName.toUpperCase().indexOf(filter) > -1) {
                tr[i].classList.remove('hidden');
            } else {
                tr[i].classList.add('hidden');

            }
        }
    }
}

function filterTags(query) {
    var filter, table, i, tagName, tr, searchBar;
    filter = query.slice(1,).toUpperCase();
    table = document.getElementById('toolTime');
    searchBar = document.getElementById('searchTools');
    searchBar.value = '+' + filter.toLowerCase();

    tr = table.getElementsByTagName('tr');
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[2];
        if (td) {
            tagName = td.getContent || td.innerHTML
            if (tagName.toUpperCase().indexOf(filter) > -1) {
                tr[i].classList.remove('hidden');
            } else {
                tr[i].classList.add('hidden');
            }
        }
    }
}

function resetFilter() {
    var table, searchbox;

    table = document.getElementById('toolTime');
    tr = table.getElementsByTagName('tr');
    for (i = 0; i < tr.length; i++) {
        tr[i].classList.remove('hidden');
    }
    searchbox = document.getElementById('searchTools');
    searchbox.value = '';
}

function clickSearch() {
    var searchquery = decodeURI(window.location.hash.substring(1));

    if (searchquery != null && searchquery != undefined) {
        var src = document.getElementById('searchTools');
        src.value = searchquery;
        queryHandler(searchquery);
    }
}

document.addEventListener("DOMContentLoaded", function(event) { 
    let h1s = document.body.querySelectorAll('h1');
    let h2s = document.body.querySelectorAll('h2');
    
    h1s.forEach(function(h) {
        h.classList.add('title');
    })

    h2s.forEach(function(h) {
        h.classList.add('subtitle');
    })
});