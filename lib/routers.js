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


var data = {
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
            city: 'Copenhagen',
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
        description: 'Nerd Alert: Entrepreneur, civil engineer, drone scientist with mad skills regarding numbers and languages /programming languages.<br/><br/>' +
                     'Ni hao, hen gaoxing renshi ni! Wo jiao Bu Ran Di he wo shi Danmai. Wo hui yidainr Zhongwen :)',
        experience: [{
            period: 'January 15 - present',
            title: 'Developer',
            place: 'Technical University of Denmark'
        }],
        skills: [
            AppUtils.Constants.Skills.ANDROID,
            AppUtils.Constants.Skills.ANGULAR,
            AppUtils.Constants.Skills.ASM,
            AppUtils.Constants.Skills.CCPP,
            AppUtils.Constants.Skills.DOTNET,
            AppUtils.Constants.Skills.HTML5,
            AppUtils.Constants.Skills.JAVA,
            AppUtils.Constants.Skills.JAVASCRIPT,
            AppUtils.Constants.Skills.MAINFRAME,
            AppUtils.Constants.Skills.METEOR,
            AppUtils.Constants.Skills.MONGODB,
            AppUtils.Constants.Skills.NODEJS,
            AppUtils.Constants.Skills.OPNET,
            AppUtils.Constants.Skills.PHP,
            AppUtils.Constants.Skills.PROLOG,
            AppUtils.Constants.Skills.RUBY,
            AppUtils.Constants.Skills.RAILS,
            AppUtils.Constants.Skills.SUBVERSION,
            AppUtils.Constants.Skills.TFS,
            AppUtils.Constants.Skills.UNITY,
            AppUtils.Constants.Skills.VHDL
        ],
        fields: [
            'Analysis',
            'Databases',
            'Drones/UAV',
            'Hardware',
            'Mobile Development',
            'Network Technology',
            'Performance',
            'Programming',
            'Protocols',
            'Security/Resilience',
            'Signaling Processing',
            'Software',
            'Telecommunication'
        ],
        languages: [
            'Danish',
            'English',
            'German',
            'Mandarin Chinese',
            'Norwegian',
            'Swedish'
        ],
        portfolio: [{
            title: 'Geek Run',
            description: 'Bla bla bla',
            images: [
                '/assets/img/portfolio/geekrun/1.png',
                '/assets/img/portfolio/geekrun/2.png',
                '/assets/img/portfolio/geekrun/3.png',
                '/assets/img/portfolio/geekrun/4.png'
            ]
        }, {
            title: 'Super Piggy',
            description: 'Bla bla bla',
            images: [
                '/assets/img/portfolio/superpiggy/1.png',
                '/assets/img/portfolio/superpiggy/2.png'
            ]
        }, {
            title: 'Byke App',
            description: 'Bla bla bla',
            images: [
                '/assets/img/portfolio/bykeapp/1.png',
                '/assets/img/portfolio/bykeapp/2.png'
            ]
        }, {
            title: 'Sportsta',
            description: 'Bla bla bla',
            images: [
                '/assets/img/portfolio/sportsta/1.png',
                '/assets/img/portfolio/sportsta/2.png',
                '/assets/img/portfolio/sportsta/3.png',
                '/assets/img/portfolio/sportsta/4.png'
            ]
        }, {
            title: 'Examplex',
            description: 'Bla bla bla',
            images: [
                '/assets/img/portfolio/examplex/1.png',
                '/assets/img/portfolio/examplex/2.png'
            ]
        }, {
            title: 'Retouch and Compression',
            description: 'Bla bla bla',
            images: [
                '/assets/img/portfolio/retouch/1.png',
                '/assets/img/portfolio/retouch/2.jpg'
            ]
        }, {
            title: 'UAV through Mobile Networks',
            description: 'Bla bla bla',
            images: [
                '/assets/img/portfolio/uav/1.png',
                '/assets/img/portfolio/uav/2.png',
                '/assets/img/portfolio/uav/3.png',
                '/assets/img/portfolio/uav/4.png',
                '/assets/img/portfolio/uav/5.png'
            ]
        }, {
            title: 'Mobilityspot',
            description: 'Bla bla bla',
            images: [
                '/assets/img/portfolio/mobilityspot/1.png',
                '/assets/img/portfolio/mobilityspot/2.png',
                '/assets/img/portfolio/mobilityspot/3.png',
                '/assets/img/portfolio/mobilityspot/4.png'
            ]
        }, {
            title: 'SKAT Forskud',
            description: 'Bla bla bla',
            images: [
                '/assets/img/portfolio/forskud/1.png'
            ]
        }, {
            title: 'Kapitalministeriet',
            description: 'Bla bla bla',
            images: [
                '/assets/img/portfolio/kapitalministeriet/1.png'
            ]
        }, {
            title: 'CPU from Scratch',
            description: 'Bla bla bla',
            images: [
                '/assets/img/portfolio/cpu/1.png',
                '/assets/img/portfolio/cpu/2.png',
                '/assets/img/portfolio/cpu/3.png',
                '/assets/img/portfolio/cpu/4.png'
            ]
        }, {
            title: 'LTE-A 4G EVM Analyzer',
            description: 'Bla bla bla',
            images: [
                '/assets/img/portfolio/evm/1.jpg',
                '/assets/img/portfolio/evm/2.png',
                '/assets/img/portfolio/evm/3.png',
                '/assets/img/portfolio/evm/4.png'
            ]
        }]
    }
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
        return data;
    },
    action: function() {
        this.render();
    }
});
