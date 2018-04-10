// function askGeolocation(){  
//     // check if browser support geolocation
//     if (navigator.geolocation) {
//         // ask permission and take positions    
//         navigator.geolocation.getCurrentPosition(setLatLong);
//     } else { 
//         alert("Geolocation is not supported by your browser.");
//     }
// };

// function setLatLong(position){  
//     alert('Thanks for accepting geolocation! :)');

//     // save position
//     _userLat = position.coords.latitude;
//     _userLng = position.coords.longitude;

//     // we will check this function later
//     centerMap(_userLat, _userLng);    
// };

geocoder = new google.maps.Geocoder(); 

var win= function(position){ 
    userLat= position.coords.latitude; 
    userLong= position.coords.longitude; 
    var userLatLong = new google.maps.userLatLng(userLat, userLong); 
    geocoder.geocode({'userLatLong': userLatLong}, function(results, status) { 
        if (status == google.maps.GeocoderStatus.OK) { 
            alert("The user's zipcode is "+results[0].address_components.postal_code); }}); }; 
var fail= function(e){alert("GPS Failed");}; 
