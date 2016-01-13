Template.hello.onRendered(function() {

    /*** STACK SETUP/CONFIGURATION **/

    // init the stack object
    var stack = gajus.Swing.Stack({
        minThrowOutDistance: 750
    });

    // find all the card elements and add the swing effect
    [].forEach.call(document.querySelectorAll('.stack .card'), function(targetElement) {
        stack.createCard(targetElement);

        // additional style for extra style
        targetElement.classList.add('in-deck');
    });



    /** STACK EVENT TRIGGERS **/

    // throw the card out of stack event trigger
    stack.on('throwout', function(e) {
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



var tallestDiv = function(selector) {
    // Get an array of all element heights
    var elementHeights = $(selector).map(function() {
        return $(this).height();
    }).get();

    // Math.max takes a variable number of arguments
    // `apply` is equivalent to passing each height as an argument
    var maxHeight = Math.max.apply(null, elementHeights);

    return maxHeight;
}

Template.hello.helpers({
    profile: function() {
        return this.profile;
    }
});

Template.hello.events({
    'click .tinder.actions .button .like, likeswipe': function(event, template) {
        console.log('like', event, template);
    },
    'click .tinder.actions .button .remove, removeswipe': function(event, template) {
        console.log('remove', event, template);
    },
    'onresize .tinder .card, onload .tinder .card': function(event, template) {
        console.log(event, template);
    }
});
