Router.configure({
    // we use the  appBody template to define the layout for the entire app
    layoutTemplate: 'appBody',

    // the appNotFound template is used for unknown routes and missing lists
    notFoundTemplate: 'appNotFound',

    // show the appLoading template whilst the subscriptions below load their data
    loadingTemplate: 'appLoading'
});


if (Meteor.isClient) {

    Meteor.startup(function() {

    });

    // Show the loading screen on desktop
    Router.onBeforeAction('loading', {
        except: ['']
    });
    Router.onBeforeAction('dataNotFound', {
        except: ['']
    });

}

var profile = {
    _id: 'xy',
    profile: {
        firstname: 'Alexander',
        middlename: 'Gregaard',
        lastname: 'Brandi',
        age: 27,
        phone: '+45 22 12 39 59',
        email: 'ab@abrandi.dk',
        website: 'https://abrandi.dk',
        social: {
            linkedin: 'https://linkedin.com/in/alexanderbrandi'
        },
        address: {
            street: 'Korsørgade 5, 3.th.',
            zipcode: '2100',
            country: {
                name: 'Denmark',
                code: 'DK'
            },
            coordinates: {
                latitude: 55.707416,
                longitude: 12.580948
            }
        },
        work: [
            'KMD A/S'
        ],
        studies: [
            'Technical University of Denmark',
            'IT University of Copenhagen'
        ],
        images: [
            '/assets/img/profile/bike.jpg',
            '/assets/img/profile/handstand.jpg',
            '/assets/img/profile/boat.jpg'
        ],
        description: 'Nerd Alert: Entrepreneur, civil engineer, drone scientist with mad skills regarding numbers and languages /programming languages.<br/><br/>Ni hao, hen gaoxing renshi ni! Wo jiao Bu Ran Di he wo shi Danmai. Wo hui yidainr Zhongwen :)'
    }
}

Router.route('home', {
    path: '/',
    template: 'hello',
    onBeforeAction: function() {
        if (this.ready()) {
            this.next();
        }
    },
    data: function() {
        return profile;
    },
    action: function() {
        this.render();
    }
});
