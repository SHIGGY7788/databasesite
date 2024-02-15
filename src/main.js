let dbdropdown = document.getElementById('db-dropdown');

//db lists
let db1list = document.getElementById('db1-list');

//db list array
let dblist = [db1list];


function GetDBInfo() {
    
}

dbdropdown.addEventListener('click', function() {
    // On click rotate the svg inside the button to 270 degrees and make the list visible
    console.log('clicked');
    if (dbdropdown.classList.contains('untoggled')) {
        dbdropdown.classList.remove('untoggled');

        dbdropdown.classList.add('toggled');

        db1list.classList.remove('hidden');
        db1list.classList.add('visible');
    }
    else {
        dbdropdown.classList.remove('toggled');
        dbdropdown.classList.add('untoggled');

        db1list.classList.remove('visible');
        db1list.classList.add('hidden');

    }
});