$(document).ready(function() {
    $.ajax({
        method: 'GET',
        url: 'api/hotels',
        success: function(hotels) {
            hotels.forEach(function(hotel) {
                $('#hotel-choices').append('<option>' + hotel.name + '</option>');
            });
        },

        error: function(err) {
            console.log('!!! ¯\_(シ)_/¯ !!!');
        }
    });

    $.ajax({
        method: 'GET',
        url: 'api/restaurants',
        success: function(restaurants) {
            restaurants.forEach(function(restaurant) {
                $('#restaurant-choices').append('<option>' + restaurant.name + '</option>');

            });
        },

        error: function(err) {
            console.log('!!! ¯\_(シ)_/¯ !!!');
        }
    });

    $.ajax({
        method: 'GET',
        url: 'api/activities',
        success: function(activities) {
            activities.forEach(function(activity) {
                $('#activity-choices').append('<option>' + activity.name + '</option>');

            });
        },

        error: function(err) {
            console.log('!!! ¯\_(シ)_/¯ !!!');
        }
    });
});
