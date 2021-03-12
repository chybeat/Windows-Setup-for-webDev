let andy;

andy = {
    nombre: 'Camilo Andrés Salazar Reyes',
    nacimiento: 377326800,
    edad: edadActual(this.nacimiento),
};

function edadActual(timestamp) {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    //var hours = date.getHours();
    // Minutes part from the timestamp
    //var minutes = '0' + date.getMinutes();
    // Seconds part from the timestamp
    //var seconds = '0' + date.getSeconds();

    // Will display time in 10:30:23 format
    //var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    formattedTime = date.getFullYear;
    return formattedTime;
}
