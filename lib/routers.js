Router.configure({
    // we use the  appBody template to define the layout for the entire app
    layoutTemplate: 'appBody',

    // the appNotFound template is used for unknown routes and missing lists
    notFoundTemplate: 'appNotFound',

    // show the appLoading template whilst the subscriptions below load their data
    loadingTemplate: 'appLoading'
});

if (Meteor.isClient) {
    // Show the loading screen on desktop
    Router.onBeforeAction('loading', {
        except: ['']
    });
    Router.onBeforeAction('dataNotFound', {
        except: ['']
    });
}


Router.route('home', {
    path: '/',
    template: 'stack',
    onBeforeAction: function() {
        if (this.ready()) {
            this.next();
        }
    },
    data: function() {
        return Profile;
    },
    action: function() {
        this.render();
    }
});
