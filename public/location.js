console.log("Location public File Executed");


function getLocation(){
    if(navigator.geolocation) navigator.geolocation.getCurrentPosition(showPositionFunction)
    else x.innerHTML = "Geolocation is not supported by this Browser."
}

function showPositionFunction(position){

    console.log("Rinkesh Current Location",position);
}


getLocation()