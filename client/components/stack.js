/**************************
- GLOCAL VARIABLES (YEAH GLOCAL = GLOBAL + LOCAL) 
***************************/
var _STACKBUILDER;



/**************************
- TEMPLATE ONRENDERED 
***************************/
Template.stack.onRendered(function() {

    // hide the stack for radar effect
    $('.tinder.stack').css({
        visibility: 'hidden'
    });

    // disable selection to prevent crazy blue highlights all over the place
    $('.tinder.viewport').disableSelection();

    // onresize event trigger
    $(window).resize(function(event) {
        $('.tinder .card').trigger("onresize", event);
    });

    // onload trigger (Meteor.defer ensures to trigger the event when done rendering)
    Meteor.defer(function(event) {
        $('.tinder .card').trigger("onload", event);

        // make the stack/match interaction
        _STACKBUILDER = new StackBuilder('.tinder.stack', '.tinder.card');

        // show the 'finding full-stacker' loader for some time, before showing stack
        setTimeout(function() {
            $('.tinder.stack').css({
                visibility: 'visible'
            });
        }, 3000);

        var browser = AppUtils.DetectBrowser();
        if (!browser.chrome && !browser.firefox)
            AppUtils.ShowBrowserInfo();
        
    });


});



/**************************
- TEMPLATE EVENTS 
***************************/
Template.stack.events({
    'click .tinder.actions .button .revert': function(event, template) {
        _STACKBUILDER.revert();
    },
    'click .tinder.actions .button .super-like': function(event, template){
        _STACKBUILDER.superlike();
    },
    'click .tinder.actions .button .like': function(event, template) {
        _STACKBUILDER.like();
    },
    'click .tinder.actions .button .remove': function(event, template) {
        _STACKBUILDER.dislike();
    },
    'throwout': function(event, template, card) {
        if (!card.like)
            return;

        var data = Template.currentData();
        // IT'S DEFINITELY A MATCH!!
        // just wait a little to give a real-life experience
        // ... and to prevent the swing effect to collide with the modal effect (=lagging)
        setTimeout(function() {
            AppUtils.ShowMatch(card.id, data, card.superlike);
        }, 500);
    },
    'onresize .tinder .card, onload .tinder .card': function(event, template) {
        // MMM... delicious width/height calculations
        var maxCardPhotoWidth = AppUtils.WidestElement('.tinder .card .photo');
        $('.tinder .card .photo').css('height', maxCardPhotoWidth - 2 * 15);

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
        var data = Template.currentData();
        AppUtils.ShowProfile(imageId, data);
    }
});



/**************************
- TEMPLATE ONDESTROYED 
***************************/
Template.stack.onDestroyed(function() {
    // remove the onresize event when template is destroyed
    $(window).off('resize');
});