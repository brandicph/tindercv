var _DECK = [];
var _COUNTER = 0;
Template.hello.onRendered(function() {
    // Just to ensure that we only process the data from the latests rendering
    _DECK = [];
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

        _DECK.push({
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
        // I might make sense to add the class '.in-deck' but no.. swing is messy
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



AppUtils = {
    TallestWidestElement: function(selector, calcWidth){
        // Get an array of all element heights/widths
        var elmsWH = $(selector).map(function() {
            return calcWidth ? $(this).width() : $(this).height();
        }).get();

        // Math.max takes a variable number of arguments
        // `apply` is equivalent to passing each height/width as an argument
        return Math.max.apply(null, elmsWH);
    },
    TallestElement: function(selector) {
        return AppUtils.TallestWidestElement(selector, false);
    },
    WidestElement: function(selector) {
        return AppUtils.TallestWidestElement(selector, true);
    },
    RefillStack: function() {
        // check if no more cards
        if (_COUNTER == 0) {
            // wait and check again, just like the MAC algorithm used in 802.11 standards
            setTimeout(function() {
                // if still no cards, add every card again
                if (_COUNTER == 0) {
                    for (var i = 0; i < _DECK.length; i++) {
                        _DECK[i].card.throwIn(_DECK[i].like ? gajus.Swing.Card.DIRECTION_RIGHT : gajus.Swing.Card.DIRECTION_LEFT, 0);
                        _COUNTER++;
                    }
                }
            }, 3000);
        }
    },
    MoveElement: function(arr, fromIndex, toIndex) {
        // takes one array element x and moves it to y position
        // some awesome array haxx to fiddle with the order of images
        var element = arr[fromIndex];
        arr.splice(fromIndex, 1);
        arr.splice(toIndex, 0, element);
        return arr;
    },
    OpenModal: function(params) {
        // find the modal template
        var template = Template['modal'];
        // extend the params with the template
        // we use this field in the modal.onRendered  for Blaze to remove it on modal.hide
        _.extend({}, params, {
            template: template
        });

        // #container is our parent node in most cases
        var parentNode = $(params.modal.context)[0];
        // POKEMON: GOOOO BLAAAZE!!!!
        Blaze.renderWithData(template, params, parentNode);
    },
    ShowMatch: function(imageid, data) {
        AppUtils.OpenModal({
            modal: {
                template: 'modalItsAMatch',
                classes: 'tiny basic itsAMatch',
                context: '#container',
                onApprove: function($element) {
                    // imageId is collected from the attribute data-id
                    // since we dont have 'this'/data-context like in Meteor helpers
                    var imageId = $element.data('id');
                    // Show the profile if 'Send a Message'
                    AppUtils.ShowProfile(imageId, data);
                    return true;
                },
                onDeny: function($element) {
                    // just go back to the stack if 'Keep on Playing'
                    return true;
                }
            },
            data: {
                info: data,
                image: imageid
            }
        });
    },
    ShowProfile: function(imageid, data) {
        AppUtils.OpenModal({
            modal: {
                template: 'modalProfile',
                classes: 'tiny profile',
                context: '#container',
                onApprove: function($element) {
                    // not much here since we dont use the actions
                    return true;
                },
                onDeny: function($element) {
                    // not much here since we dont use the actions
                    return true;
                }
            },
            data: {
                info: data,
                image: imageid
            }
        });
    }
};

(function($) {
    // jquery extension function, that disables selection
    // keeps everything from getting that ugly blue highlight color
    $.fn.disableSelection = function() {
        return this
            .attr('unselectable', 'on')
            .css('user-select', 'none')
            .on('selectstart', false);
    };
})(jQuery);


Template.hello.events({
    'click .tinder.actions .button .revert': function(event, template) {
        if (_COUNTER >= _DECK.length)
            return;

        _DECK[_COUNTER].card.throwIn(_DECK[_COUNTER].like ? gajus.Swing.Card.DIRECTION_RIGHT : gajus.Swing.Card.DIRECTION_LEFT, 0);
        _COUNTER++;
    },
    'click .tinder.actions .button .like': function(event, template) {
        if (_COUNTER == 0)
            return;

        _DECK[_COUNTER - 1].card.throwOut(gajus.Swing.Card.DIRECTION_RIGHT, 0);
    },
    'likeswipe': function(event, template) {
        if (_COUNTER == 0)
            return;

        _DECK[_COUNTER - 1].like = true;

        var _self = this;
        var imageId = _COUNTER - 1;

        // IT'S DEFINITELY A MATCH!!
        // just wait a little to give a real-life experience
        // ... and to prevent the swing effect to collide with the modal effect (=lagging)
        setTimeout(function() {
            AppUtils.ShowMatch(imageId, _self);
        }, 500);

        _COUNTER--;

        AppUtils.RefillStack();
    },
    'click .tinder.actions .button .remove': function(event, template) {
        if (_COUNTER == 0)
            return;

        _DECK[_COUNTER - 1].card.throwOut(gajus.Swing.Card.DIRECTION_LEFT, 0);
    },
    'removeswipe': function(event, template) {
        if (_COUNTER == 0)
            return;

        _DECK[_COUNTER - 1].like = false;
        _COUNTER--;

        AppUtils.RefillStack();
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
    },
    'click .tinder.card .photo': function(event, template) {
        var target = $(event.currentTarget);
        var imageId = target.data('id');
        AppUtils.ShowProfile(imageId, this);
    }
});


Template.hello.helpers({

});