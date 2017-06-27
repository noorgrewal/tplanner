$(document).ready(function () {
    let $hotelChoices = $('#hotel-choices'),
        $restaurantChoices = $('#restaurant-choices'),
        $activityChoices = $('#activity-choices');

    hotels.forEach(function (val) {
        $hotelChoices.append(`<option>${val.name}</option>`);
    });

    restaurants.forEach(function (val) {
        $restaurantChoices.append(`<option>${val.name}</option>`);
    });

    activities.forEach(function (val) {
        $activityChoices.append(`<option>${val.name}</option>`);
    });

    $('button').on('click', function() {
        //let r = $('<input type="button" value="new button" />');
        // let removeButton = $(`<button class="btn btn-xs btn-danger remove btn-circle">x</button>-`);
        // fetch data
        alert( $('[data-type]').text() );
    });


});
