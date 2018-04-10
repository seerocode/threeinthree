$(function() {
    if(navigator.geolocation) {
        var fallback = setTimeout(function() { fail('10 seconds expired'); }, 10000);
        navigator.geolocation.getCurrentPosition(
            function (pos) {
                clearTimeout(fallback);
                console.log('pos', pos);
                var point = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
                new google.maps.Geocoder().geocode({'latLng': point}, function (res, status) {
                    if(status == google.maps.GeocoderStatus.OK && typeof res[0] !== 'undefined') {
                        var zip = res[0].formatted_address.match(/,\s\w{2}\s(\d{5})/);
                        if(zip) {
                            $("#user_location").val(zip[1]);
                        } else fail('Failed to parse');
                    } else {
                        fail('Failed to reverse');
                    }
                });
            }, function(err) {
                fail(err.message);
            }
        );
    } else {
        $("#user_location").val('Geolocation is unsupported');
    }
    function fail(err) {
        console.log('err', err);
        alert('Error ' + err);
    }
  });
