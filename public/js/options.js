$(document).ready(function () {
    let $hotelChoices = $('#hotel-choices'),
        $restaurantChoices = $('#restaurant-choices'),
        $activityChoices = $('#activity-choices'),
        $optionsPanel = $('#options-panel');


    hotels.forEach(function (val) {
        $hotelChoices.append(`<option id="${val.id}">${val.name}</option>`);
    });

    restaurants.forEach(function (val) {
        $restaurantChoices.append(`<option id="${val.id}">${val.name}</option>`);
    });

    activities.forEach(function (val) {
        $activityChoices.append(`<option id="${val.id}">${val.name}</option>`);
    });

    $optionsPanel.on('click', 'button[data-action=add]', function() {
        //let r = $('<input type="button" value="new button" />');
        // let removeButton = $(`<button class="btn btn-xs btn-danger remove btn-circle">x</button>-`);
        // fetch data
        // alert( $('[data-type]').text() );
        // let select = $($(this)[0].previousElementSibling);
        // let select = $('#hotel-choices');
        // let select = $('#hotel-choices');
        let $type = $(this).siblings('select').data('type');
        let $id = $(this).siblings('select').find(':selected').val();
    });


});
