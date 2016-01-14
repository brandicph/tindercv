var _IN_DECK = [];
var _COUNTER = 0;
Template.hello.onRendered(function() {
    // Just to ensure that we get the data from the latests rendering
    _IN_DECK = [];
    _COUNTER = 0;


    /*** STACK SETUP/CONFIGURATION **/

    // init the stack object
    var stack = gajus.Swing.Stack({
        minThrowOutDistance: 750,
        throwOutConfidence: function(offset, element) {
            return Math.min(Math.abs(offset) / element.offsetWidth * 2, 1);
        }
    });

    // find all the card elements and add the swing effect
    $('.tinder .card').each(function() {
        var elm = $(this);
        var card = stack.createCard(elm[0]);
        elm.addClass('in-deck');

        // Add the nasty data-sort attribute to perform the hack
        elm.attr('data-sort', _COUNTER);

        _IN_DECK.push({
            card: card,
            like: true
        });
        _COUNTER++;
    });



    /** STACK EVENT TRIGGERS **/

    // throw the card out of stack event trigger
    stack.on('throwout', function(e) {
        // left = 0, right = 1
        var like = e.throwDirection == 1;
        if (like) {
            $(e.target).trigger("likeswipe", like);
        } else {
            $(e.target).trigger("removeswipe", like);
        }

        $(e.target).removeClass('in-deck');
    });

    // throw the card into the stack event trigger
    stack.on('throwin', function(e) {
        // left = 0, right = 1
        //var like = e.throwDirection == 1;

        $(e.target).addClass('in-deck');

        // Ugly hack to keep track of the correct order when reverting
        // Otherwise the cards will overlap incorrectly
        var res = $('.tinder .card').sort(function(a, b) {
            var contentA = $(a).attr('data-sort');
            var contentB = $(b).attr('data-sort');
            return (contentA < contentB) ? -1 : (contentA > contentB) ? 1 : 0;
        });
        $('.tinder.stack').html(res);
    });




    /** WINDOW EVENT TRIGGERS **/

    // onresize event trigger
    $(window).resize(function(event) {
        $('.tinder .card').trigger("onresize", event);
    });

    // onload trigger (Meteor.defer ensures to trigger the event when done rendering)
    Meteor.defer(function(event) {
        $('.tinder .card').trigger("onload", event);
    });


});



Template.hello.onDestroyed(function() {
    // remove the onresize event when template is destroyed
    $(window).off('resize');
});



var AppUtils = {
    TallestElement: function(selector) {
        // Get an array of all element heights
        var elementHeights = $(selector).map(function() {
            return $(this).height();
        }).get();

        // Math.max takes a variable number of arguments
        // `apply` is equivalent to passing each height as an argument
        var maxHeight = Math.max.apply(null, elementHeights);

        return maxHeight;
    },
    WidestElement: function(selector) {
        // Get an array of all element widths
        var elementWidths = $(selector).map(function() {
            return $(this).width();
        }).get();

        // Math.max takes a variable number of arguments
        // `apply` is equivalent to passing each height as an argument
        var maxWidth = Math.max.apply(null, elementWidths);

        return maxWidth;
    }
}

Template.hello.helpers({

});

Template.hello.events({
    'click .tinder.actions .button .revert': function(event, template) {
        if (_COUNTER >= _IN_DECK.length)
            return;

        _IN_DECK[_COUNTER].card.throwIn(_IN_DECK[_COUNTER].like ? gajus.Swing.Card.DIRECTION_RIGHT : gajus.Swing.Card.DIRECTION_LEFT, 0);
        _COUNTER++;
    },
    'click .tinder.actions .button .like': function(event, template) {
        if (_COUNTER == 0)
            return;

        _IN_DECK[_COUNTER - 1].card.throwOut(gajus.Swing.Card.DIRECTION_RIGHT, 0);
    },
    'likeswipe': function(event, template) {
        if (_COUNTER == 0)
            return;

        _IN_DECK[_COUNTER - 1].like = true;
        _COUNTER--;
    },
    'click .tinder.actions .button .remove': function(event, template) {
        if (_COUNTER == 0)
            return;

        _IN_DECK[_COUNTER - 1].card.throwOut(gajus.Swing.Card.DIRECTION_LEFT, 0);
    },
    'removeswipe': function(event, template) {
        if (_COUNTER == 0)
            return;

        _IN_DECK[_COUNTER - 1].like = false;
        _COUNTER--;
    },
    'onresize .tinder .card, onload .tinder .card': function(event, template) {
        // MMM... delicious width/height calculations
        var maxCardPhotoWidth = AppUtils.WidestElement('.tinder .card .photo');
        $('.tinder .card .photo').css('height', maxCardPhotoWidth);

        var maxCardHeight = AppUtils.TallestElement('.tinder .card');
        $('.tinder .stack').css('height', maxCardHeight);

        var maxContainerWidth = AppUtils.WidestElement('#container') - 2 * 15;
        $('.tinder.viewport').css('width', maxContainerWidth);

        var maxLargeButtonSize = maxContainerWidth / 4.5;
        var maxSmallButtonSize = maxLargeButtonSize / 2;
        $('.tinder .actions .button.large').css({
            width: maxLargeButtonSize,
            height: maxLargeButtonSize
        });
        $('.tinder .actions .button.small').css({
            width: maxSmallButtonSize,
            height: maxSmallButtonSize
        });
    }
});
