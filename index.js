function askGeolocation(){  
    // check if browser support geolocation
    if (navigator.geolocation) {
        // ask permission and take positions    
        navigator.geolocation.getCurrentPosition(setLatLong);
    } else { 
        alert("Geolocation is not supported by your browser.");
    }
};

function setLatLong(position){  
    alert('Thanks for accepting geolocation! :)');

    // save position
    _userLat = position.coords.latitude;
    _userLng = position.coords.longitude;

    // we will check this function later
    centerMap(_userLat, _userLng);    
};
