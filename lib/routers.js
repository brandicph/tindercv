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

var Languages = {
    CHINESE: {
        name: "Chinese/Mandarin",
        image: "/assets/img/languages/chinese.png"
    },
    DANISH: {
        name: "Danish",
        image: "/assets/img/languages/danish.png"
    },
    ENGLISH: {
        name: "English",
        image: "/assets/img/languages/english.png"
    },
    GERMAN: {
        name: "German",
        image: "/assets/img/languages/german.png"
    },
    NORWEGIAN: {
        name: "Norwegian",
        image: "/assets/img/languages/norwegian.png"
    },
    SWEDISH: {
        name: "Swedish",
        image: "/assets/img/languages/swedish.png"
    }
}

var Skills = {
    ALTERA: {
        name: "ALTERA/VHDL",
        image: "/assets/img/skills/stencils/altera.png"
    },
    ANDROID: {
        name: "Android",
        image: "/assets/img/skills/stencils/android.png"
    },
    ANGULAR: {
        name: "Angular",
        image: "/assets/img/skills/stencils/angular.png"
    },
    ARDUINO: {
        name: "Arduino",
        image: "/assets/img/skills/stencils/arduino.png"
    },
    ASM: {
        name: "Assembler",
        image: "/assets/img/skills/stencils/asm.png"
    },
    AWS: {
        name: "Amazon AWS",
        image: "/assets/img/skills/stencils/aws.png"
    },
    BIZTALK: {
        name: "BizTalk",
        image: "/assets/img/skills/stencils/mssql.png"
    },
    CCPP: {
        name: "C/C++",
        image: "/assets/img/skills/stencils/ccpp.png"
    },
    CSS: {
        name: "CSS/CSS3",
        image: "/assets/img/skills/stencils/css.png"
    },
    DIGITALOCEAN: {
        name: "Digital Ocean",
        image: "/assets/img/skills/stencils/digitalocean.png"
    },
    DOTNET: {
        name: "C#/.NET",
        image: "/assets/img/skills/stencils/dotnet.png"
    },
    GIT: {
        name: "Git",
        image: "/assets/img/skills/stencils/git.png"
    },
    HTML5: {
        name: "HTML/HTML5",
        image: "/assets/img/skills/stencils/html5.png"
    },
    JAVA: {
        name: "Java",
        image: "/assets/img/skills/stencils/java.png"
    },
    JAVASCRIPT: {
        name: "Javascript",
        image: "/assets/img/skills/stencils/javascript.png"
    },
    JSON: {
        name: "JSON",
        image: "/assets/img/skills/stencils/json.png"
    },
    MAINFRAME: {
        name: "Mainframe/DB2",
        image: "/assets/img/skills/stencils/ibm.png"
    },
    METEOR: {
        name: "Meteor",
        image: "/assets/img/skills/stencils/meteor.png"
    },
    MONGODB: {
        name: "MongoDB/NoSQL",
        image: "/assets/img/skills/stencils/mongodb.png"
    },
    MSSQL: {
        name: "MSSQL/SQL",
        image: "/assets/img/skills/stencils/mssql.png"
    },
    NODEJS: {
        name: "NodeJS",
        image: "/assets/img/skills/stencils/nodejs.png"
    },
    OPNET: {
        name: "OPNET",
        image: "/assets/img/skills/stencils/opnet.png"
    },
    PHOTOSHOP: {
        name: "Photoshop",
        image: "/assets/img/skills/stencils/photoshop.png"
    },
    PHP: {
        name: "PHP",
        image: "/assets/img/skills/stencils/php.png"
    },
    PROLOG: {
        name: "Prolog",
        image: "/assets/img/skills/stencils/prolog.png"
    },
    RAILS: {
        name: "Rails",
        image: "/assets/img/skills/stencils/rails.png"
    },
    REDIS: {
        name: "Redis",
        image: "/assets/img/skills/stencils/redis.png"
    },
    RUBY: {
        name: "Ruby",
        image: "/assets/img/skills/stencils/ruby.png"
    },
    STRIPE: {
        name: "Stripe",
        image: "/assets/img/skills/stencils/stripe.png"
    },
    SUBVERSION: {
        name: "Subversion",
        image: "/assets/img/skills/stencils/subversion.png"
    },
    TFS: {
        name: "TFS/Visual Studio",
        image: "/assets/img/skills/stencils/vs.png"
    },
    UNITY: {
        name: "Unity",
        image: "/assets/img/skills/stencils/unity.png"
    },
    VHDL: {
        name: "VHDL/FPGA",
        image: "/assets/img/skills/stencils/vhdl.png"
    },
    XILINX: {
        name: "Xilinx/VHDL",
        image: "/assets/img/skills/stencils/vhdl.png"
    },
    XML: {
        name: "XML",
        image: "/assets/img/skills/stencils/xml.png"
    }
};


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
        education: [{
            title: 'M.Sc. Telecommunication',
            specialization: 'Signals and Transmission Technologies',
            institution: 'Technical University of Denmark'
        }, {
            title: 'B.Sc. Networktechnology and IT',
            specialization: 'UAV through Mobile Networks',
            institution: 'Technical University of Denmark'
        }, {
            title: 'B.Sc. Digital Media and Design (1 year)',
            specialization: 'Digital Media Culture',
            institution: 'IT University of Copenhagen'
        }],
        skills: [
            Skills.ANDROID,
            Skills.ANGULAR,
            Skills.ARDUINO,
            Skills.ASM,
            Skills.AWS,
            Skills.CCPP,
            Skills.DIGITALOCEAN,
            Skills.DOTNET,
            Skills.GIT,
            Skills.HTML5,
            Skills.JAVA,
            Skills.JAVASCRIPT,
            Skills.JSON,
            Skills.MAINFRAME,
            Skills.METEOR,
            Skills.MONGODB,
            Skills.MSSQL,
            Skills.NODEJS,
            Skills.OPNET,
            Skills.PHOTOSHOP,
            Skills.PHP,
            Skills.PROLOG,
            Skills.RUBY,
            Skills.RAILS,
            Skills.STRIPE,
            Skills.SUBVERSION,
            Skills.TFS,
            Skills.UNITY,
            Skills.VHDL,
            Skills.XML
        ],
        fields: [
            'Algorithms',
            'Analysis',
            'Databases',
            'Design/UX',
            'Drones/UAV',
            'Hardware',
            'Math/Physics',
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
            Languages.DANISH,
            Languages.SWEDISH,
            Languages.NORWEGIAN,
            Languages.ENGLISH,
            Languages.GERMAN,
            Languages.CHINESE
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
