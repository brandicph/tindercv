
var _IN_DECK = [];
var _OUT_OF_DECK = [];
Template.hello.onRendered(function() {

    /*** STACK SETUP/CONFIGURATION **/

    // init the stack object
    var stack = gajus.Swing.Stack({
        minThrowOutDistance: 750,
        throwOutConfidence: function (offset, element) {
            return Math.min(Math.abs(offset) / element.offsetWidth * 2, 1);
        }
    });

    _IN_DECK = [];
    _OUT_OF_DECK = [];

    // find all the card elements and add the swing effect
    [].forEach.call(document.querySelectorAll('.stack .card'), function(targetElement) {
        var card = stack.createCard(targetElement);
        _IN_DECK.push(card);
        // additional style for extra style
        targetElement.classList.add('in-deck');
    });



    /** STACK EVENT TRIGGERS **/

    // throw the card out of stack event trigger
    stack.on('throwout', function(e) {
        console.log(e);
        // left = 0, right = 1
        var like = e.throwDirection == 1;
        if (like) {
            $('.tinder.actions .button .like').trigger("likeswipe", like);
        } else {
            $('.tinder.actions .button .remove').trigger("removeswipe", like);
        }

        e.target.classList.remove('in-deck');
    });

    // throw the card into the stack event trigger
    stack.on('throwin', function(e) {
        // left = 0, right = 1
        //var like = e.throwDirection == 1;

        e.target.classList.add('in-deck');
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
    WidestElement: function(selector){
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
        var card = _OUT_OF_DECK[_OUT_OF_DECK.length - 1];
        if (!!card){
            _OUT_OF_DECK.pop();
            var state = card.like ? gajus.Swing.Card.DIRECTION_RIGHT : gajus.Swing.Card.DIRECTION_LEFT;
            card.card.throwIn(state, 0);
            _IN_DECK.push(card.card);
        }
        console.log(_OUT_OF_DECK, _IN_DECK);
    },
    'click .tinder.actions .button .like': function(event, template) {
        var card = _IN_DECK[_IN_DECK.length - 1];
        if (!!card){
            card.throwOut(gajus.Swing.Card.DIRECTION_RIGHT, 0);
        }
    },
    'likeswipe': function(event, template) {
        var card = _IN_DECK[_IN_DECK.length - 1];
        if (!!card){
            _OUT_OF_DECK.push({
                card: _IN_DECK.pop(),
                like: true
            });
        }
        console.log(_OUT_OF_DECK, _IN_DECK);
    },
    'click .tinder.actions .button .remove': function(event, template) {
        var card = _IN_DECK[_IN_DECK.length - 1];
        if (!!card){
            card.throwOut(gajus.Swing.Card.DIRECTION_LEFT, 0);
        }
    },
    'removeswipe': function(event, template){
        var card = _IN_DECK[_IN_DECK.length - 1];
        if (!!card){
            _OUT_OF_DECK.push({
                card: _IN_DECK.pop(),
                like: false
            });
        }
        console.log(_OUT_OF_DECK, _IN_DECK);
    },
    'onresize .tinder .card, onload .tinder .card': function(event, template) {
        var maxCardPhotoWidth = AppUtils.WidestElement('.tinder .card .photo');
        $('.tinder .card .photo').css('height', maxCardPhotoWidth);

        var maxCardHeight = AppUtils.TallestElement('.tinder .card');
        $('.tinder .stack').css('height', maxCardHeight);

        var maxContainerWidth = AppUtils.WidestElement('#container') - 2*15;
        $('.tinder.viewport').css('width', maxContainerWidth);

        var maxLargeButtonSize = maxContainerWidth / 4.5;
        var maxSmallButtonSize = maxLargeButtonSize / 2;
        $('.tinder .actions .button.large').css({width: maxLargeButtonSize, height: maxLargeButtonSize});
        $('.tinder .actions .button.small').css({width: maxSmallButtonSize, height: maxSmallButtonSize});
    }
});
