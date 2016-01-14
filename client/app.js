var _IN_DECK = [];
var _COUNTER = 0;
Template.hello.onRendered(function() {
    // Just to ensure that we only process the data from the latests rendering
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

    // hide the stack for radar effect
    $('.tinder.stack').css({
        visibility: 'hidden'
    });

    // disable selection to prevent crazy blue highlights all over the place
    $('.tinder.viewport').disableSelection();


    /** STACK EVENT TRIGGERS **/

    // throw the card out of stack event trigger
    stack.on('throwout', function(e) {
        $(e.target).removeClass('in-deck');

        // trigger the swipe events using jquery to trigger the template events
        var like = e.throwDirection == gajus.Swing.Card.DIRECTION_RIGHT;
        $(e.target).trigger(like ? "likeswipe" : "removeswipe", like);
    });

    // throw the card into the stack event trigger
    stack.on('throwin', function(e) {
        $(e.target).addClass('in-deck');

        // Ugly hack to keep track of the correct order when reverting
        // Otherwise the cards will overlap incorrectly
        var res = $('.tinder .card.in-deck').sort(function(a, b) {
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

        // show the 'finding full-stacker' loader for some time, before showing stack
        setTimeout(function() {
            $('.tinder.stack').css({
                visibility: 'visible'
            });
        }, 3000);
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
};

(function($) {
    $.fn.disableSelection = function() {
        return this
            .attr('unselectable', 'on')
            .css('user-select', 'none')
            .on('selectstart', false);
    };
})(jQuery);

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

        // IT'S DEFINITELY A MATCH!!
        setTimeout(function(){
            $('.modal.itsAMatch').modal({
                observeChanges: true,
                detachable: false,
                context: '#container',
                closable: false,
                onApprove: function($element){
                    console.log('Go the the message section...');
                    return false;
                },
                onDeny: function($element){
                    console.log('Going back to the stack');
                    return true;
                }
            }).modal('show');
        }, 750);

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

        var maxLargeButtonSize = maxContainerWidth / 3;
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