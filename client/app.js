Template.appBody.events({
    'click .description-welcome .link': function(event, template){
        var target = $(event.currentTarget);
        analytics.trackLink(target, 'Clicked on Welcome Description Link', {
          plan: 'Social Media'
        });
        analytics.track('Welcome Description Link', {
            plan: 'Social Media',
            label: target.attr('href')
        });
    }
});