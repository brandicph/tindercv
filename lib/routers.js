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

var Technologies = {
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
    BOOTSTRAP: {
        name: "Bootstrap",
        image: "/assets/img/skills/stencils/bootstrap.png"
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
    HANDLEBARS: {
        name: "Handlebars",
        image: "/assets/img/skills/stencils/handlebars.png"
    },
    HEROKU: {
        name: "Heroku",
        image: "/assets/img/skills/stencils/heroku.png"
    },
    HTML5: {
        name: "HTML/HTML5",
        image: "/assets/img/skills/stencils/html5.png"
    },
    JAVA: {
        name: "Java/Java EE",
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
    JQUERY: {
        name: "jQuery",
        image: "/assets/img/skills/stencils/jquery.png"
    },
    LINQ: {
        name: "Linq",
        image: "/assets/img/skills/stencils/linq.png"
    },
    MAINFRAME: {
        name: "Mainframe/DB2",
        image: "/assets/img/skills/stencils/ibm.png"
    },
    MATLAB: {
        name: "MATLAB",
        image: "/assets/img/skills/stencils/matlab.png"
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
    MYSQL: {
        name: "MySQL/SQL",
        image: "/assets/img/skills/stencils/mysql.png"
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
    PYTHON: {
        name: "Python",
        image: "/assets/img/skills/stencils/python.png"
    },
    RAILS: {
        name: "Rails",
        image: "/assets/img/skills/stencils/rails.png"
    },
    REDIS: {
        name: "Redis",
        image: "/assets/img/skills/stencils/redis.png"
    },
    SEMANTICUI: {
        name: "Semantic UI",
        image: "/assets/img/skills/stencils/semanticui.png"
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
    UNDERSCORE: {
        name: "Underscore",
        image: "/assets/img/skills/stencils/underscore.png"
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
        technologies: [
            Technologies.ANDROID,
            Technologies.ANGULAR,
            Technologies.ARDUINO,
            Technologies.ASM,
            Technologies.AWS,
            Technologies.BOOTSTRAP,
            Technologies.CCPP,
            Technologies.DIGITALOCEAN,
            Technologies.DOTNET,
            Technologies.GIT,
            Technologies.HANDLEBARS,
            Technologies.HEROKU,
            Technologies.HTML5,
            Technologies.JAVA,
            Technologies.JAVASCRIPT,
            Technologies.JSON,
            Technologies.JQUERY,
            Technologies.LINQ,
            Technologies.MAINFRAME,
            Technologies.MATLAB,
            Technologies.METEOR,
            Technologies.MONGODB,
            Technologies.MSSQL,
            Technologies.NODEJS,
            Technologies.OPNET,
            Technologies.PHOTOSHOP,
            Technologies.PHP,
            Technologies.PROLOG,
            Technologies.PYTHON,
            Technologies.RUBY,
            Technologies.RAILS,
            Technologies.SEMANTICUI,
            Technologies.STRIPE,
            Technologies.SUBVERSION,
            Technologies.TFS,
            Technologies.UNDERSCORE,
            Technologies.UNITY,
            Technologies.VHDL,
            Technologies.XML
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
            subtitle: 'Geolocation Game for Android',
            description: 'Run like a Geek and fight with your friends in this geolocation game.<br/><br/>' +
                         'Drop and find new packages in the real world to prepare yourself against a virtual battle with your friends.<br/><br/>' +
                         'Explore the world and find the best item to beat your friends in a Geek Run.',
            technologies: [
                Technologies.ANDROID,
                Technologies.MONGODB,
                Technologies.MYSQL,
                Technologies.NODEJS,
                Technologies.PHP,
                Technologies.PHOTOSHOP
            ],
            images: [
                '/assets/img/portfolio/geekrun/1.png',
                '/assets/img/portfolio/geekrun/2.png',
                '/assets/img/portfolio/geekrun/3.png',
                '/assets/img/portfolio/geekrun/4.png'
            ]
        }, {
            title: 'Super Piggy',
            subtitle: 'Simple Game for Android/iOS/Windows',
            description: 'Fly like a boss as the Super Pig, or end up being fried bacon as Super Piggy.<br/><br/>' +
                         'A weekend project and simple game created in Uinity with inspiration from Flappy Bird.',
            technologies: [
                Technologies.ANDROID,
                Technologies.UNITY,
                Technologies.PHOTOSHOP
            ],
            images: [
                '/assets/img/portfolio/superpiggy/1.png',
                '/assets/img/portfolio/superpiggy/2.png'
            ]
        }, {
            title: 'Byke App',
            subtitle: 'Social Bike Rental for Android/iOS',
            description: 'Rent your Bike when you are not using it.<br/><br/>' +
                         'Byke App gives you the oppertunity to earn some extra money for your vacation, dream-bag or jewellery.<br/><br/>' +
                         'Share your Bike and start earning money now... Or rent someone elses Bike, even in another country.',
            technologies: [
                Technologies.ANDROID,
                Technologies.METEOR,
                Technologies.MYSQL,
                Technologies.PHP,
                Technologies.PHOTOSHOP
            ],
            images: [
                '/assets/img/portfolio/bykeapp/1.png',
                '/assets/img/portfolio/bykeapp/2.png'
            ]
        }, {
            title: 'Sportsta',
            subtitle: 'Social Media for Sport Nerds',
            description: 'Bla bla bla',
            technologies: [
                Technologies.ANDROID,
                Technologies.AWS,
                Technologies.DIGITALOCEAN,
                Technologies.METEOR,
                Technologies.MONGODB,
                Technologies.PHOTOSHOP,
                Technologies.RUBY,
                Technologies.SEMANTICUI,
                Technologies.STRIPE
            ],
            images: [
                '/assets/img/portfolio/sportsta/1.png',
                '/assets/img/portfolio/sportsta/2.png',
                '/assets/img/portfolio/sportsta/3.png',
                '/assets/img/portfolio/sportsta/4.png'
            ]
        }, {
            title: 'Examplex',
            subtitle: 'Social Learning Media',
            description: 'Bla bla bla',
            technologies: [
                Technologies.AWS,
                Technologies.DIGITALOCEAN,
                Technologies.METEOR,
                Technologies.MONGODB,
                Technologies.SEMANTICUI,
                Technologies.PHOTOSHOP
            ],
            images: [
                '/assets/img/portfolio/examplex/1.png',
                '/assets/img/portfolio/examplex/2.png',
                '/assets/img/portfolio/examplex/3.png',
                '/assets/img/portfolio/examplex/4.png'
            ]
        }, {
            title: 'UAV through Mobile Networks',
            subtitle: 'Autonomous Aerial Vehicle using 2G, 3G, 4G',
            description: 'Bachelor thesis that defines a new system used to control UAV through mobile networks. ' +
                         'It redefines the original generic UAV system using the same terminology. ' +
                         'The new system architecture and different components is described in details as a concept able to be used by others.<br/><br/>' +
                         'A sophisticated air vehicle including an autopilot is build to finally create and confirm a proof of concept. ' +
                         'The proof of concept is a practical implementation used to successfully confirm that the system works.<br/><br/>' +
                         'The system is tested using a live mobile network with the ability to operate over long distances. ' +
                         'The results shows great potential to work under bad conditions and capability to be controlled across borders.',
            technologies: [
                Technologies.ANDROID,
                Technologies.ARDUINO,
                Technologies.ASM,
                Technologies.BOOTSTRAP,
                Technologies.CCPP,
                Technologies.HEROKU,
                Technologies.JAVA,
                Technologies.MONGODB,
                Technologies.NODEJS
            ],
            images: [
                '/assets/img/portfolio/uav/1.png',
                '/assets/img/portfolio/uav/2.png',
                '/assets/img/portfolio/uav/3.png',
                '/assets/img/portfolio/uav/4.png',
                '/assets/img/portfolio/uav/5.png'
            ]
        }, {
            title: 'Retouch and Compression',
            subtitle: 'Drawing, Design and Image Compression',
            description: 'Various project working with Photoshop to create illustration and retouch images.<br/><br/>' +
                         'Not only have I retouched various images, but Ive also implemented compression and detection algorithms.',
            technologies: [
                Technologies.MATLAB,
                Technologies.PHOTOSHOP,
                Technologies.VHDL
            ],
            images: [
                '/assets/img/portfolio/retouch/1.png',
                '/assets/img/portfolio/retouch/2.png',
                '/assets/img/portfolio/retouch/3.png',
                '/assets/img/portfolio/retouch/4.png',
                '/assets/img/portfolio/retouch/5.png',
                '/assets/img/portfolio/retouch/6.png'
            ]
        }, {
            title: 'Mobilityspot',
            subtitle: 'Fitness Shop selling Mobility Equipment',
            description: 'Bla bla bla',
            technologies: [
                Technologies.BOOTSTRAP,
                Technologies.MYSQL,
                Technologies.PHP
            ],
            images: [
                '/assets/img/portfolio/mobilityspot/1.png',
                '/assets/img/portfolio/mobilityspot/2.png',
                '/assets/img/portfolio/mobilityspot/3.png',
                '/assets/img/portfolio/mobilityspot/4.png'
            ]
        }, {
            title: 'SKAT Forskud',
            subtitle: 'Danish Tax system to declare Self-Assessments',
            description: 'Bla bla bla',
            technologies: [
                Technologies.ANGULAR,
                Technologies.BOOTSTRAP,
                Technologies.DOTNET,
                Technologies.MAINFRAME,
                Technologies.MSSQL,
                Technologies.TFS
            ],
            images: [
                '/assets/img/portfolio/forskud/1.png',
                '/assets/img/portfolio/forskud/2.png'
            ]
        }, {
            title: 'SKAT eIndkomst',
            subtitle: 'Danish Tax system to register all Citizents income',
            description: 'Bla bla bla',
            technologies: [
                Technologies.JAVA,
                Technologies.MAINFRAME,
                Technologies.MYSQL,
                Technologies.RUBY,
                Technologies.RAILS,
                Technologies.SUBVERSION
            ],
            images: [
                '/assets/img/portfolio/eindkomst/1.png'
            ]
        }, {
            title: 'KMD Momentum',
            subtitle: 'Danish Administration System managing Citizents without a Job',
            description: 'Bla bla bla',
            technologies: [
                Technologies.ANGULAR,
                Technologies.BOOTSTRAP,
                Technologies.DOTNET,
                Technologies.MAINFRAME,
                Technologies.MSSQL,
                Technologies.TFS
            ],
            images: [
                '/assets/img/portfolio/momentum/1.png'
            ]
        }, {
            title: 'Kapitalministeriet',
            subtitle: 'Quick Overview of Available Governmental Services',
            description: 'Bla bla bla',
            technologies: [
                Technologies.HTML,
                Technologies.JAVASCRIPT,
                Technologies.JSON
            ],
            images: [
                '/assets/img/portfolio/kapitalministeriet/1.png',
                '/assets/img/portfolio/kapitalministeriet/2.png',
                '/assets/img/portfolio/kapitalministeriet/3.png'
            ]
        }, {
            title: 'ECG Scanner',
            subtitle: 'Embedded system with a MIPS processer from scratch',
            description: 'Specification and implementation of a CPU using a MIPS architecture excluding interrupts. ' +
                         'The processor is developed to be used in a ECG scanner that performs Pan-Thompkins QRS detection algorithm.<br/><br/>' +
                         'The Pan-Thompkins QRS detection algorithm is implemented in C to be analyzed and tested for performance. ' +
                         'Optimized and analyzed, the program is translated into Assembler to create an instruction set.<br/><br/>' +
                         'Based on the instruction set, a simple MIPS processor is constructed to perform the calculations. ' +
                         'The processor is implemented and tested using VHDL and Gezel.',
            technologies: [
                Technologies.ASM,
                Technologies.CCPP,
                Technologies.MATLAB
            ],
            images: [
                '/assets/img/portfolio/cpu/1.png',
                '/assets/img/portfolio/cpu/2.png',
                '/assets/img/portfolio/cpu/3.png',
                '/assets/img/portfolio/cpu/4.png'
            ]
        }, {
            title: 'LTE-A 4G EVM Analyzer',
            subtitle: '4G transmitter/receiver with I/Q mapper and EVM analyzer',
            description: 'Covers the specification/implementation of a LTE data generator and error vector magnitude (EVM) analyzer. ' +
                         'The main goal of the project is to create a LTE data generator and analyzer and to simulate and verify the system.<br/><br/>' +
                         'Data is generated using a Gold Sequence Generator (multi pseudo random generator) that repeats every N period. ' +
                         'This data is then given to an I/Q mapper, which maps the bit sequences to their corresponding I/Q values. ' +
                         'This is in turn sent through an Inverse Fast Fourier Transformation and then finally a cyclic prefix is added.<br/><br/>' +
                         'The cyclic prefixed data is sent into a FIFO, which is monitored by the Tx controller. ' +
                         'When this FIFO is full, the Tx controller will pause the system until there is room in the FIFO again (this is done by waiting a set number of clock cycles). ' +
                         'The data in the FIFO is sent through a noisifier, which adds noise to the data, so the analyzer will have something to actually analyze. ',
            technologies: [
                Technologies.ALTERA,
                Technologies.ASM,
                Technologies.CCPP,
                Technologies.MATLAB,
                Technologies.PYTHON,
                Technologies.VHDL
            ],
            images: [
                '/assets/img/portfolio/evm/1.png',
                '/assets/img/portfolio/evm/2.png',
                '/assets/img/portfolio/evm/3.png',
                '/assets/img/portfolio/evm/4.png',
                '/assets/img/portfolio/evm/5.png',
                '/assets/img/portfolio/evm/6.png',
                '/assets/img/portfolio/evm/7.png'
            ]
        }, {
            title: '63,57-Hamming Product Code',
            subtitle: 'Forward Error Correcting Code for Communication Networks',
            description: 'Created a forward error correction encoder and decoder in a larger system which purpose is to transmit audio from one end of a network to another via optical fiber.<br/>' +
                         'The encoder calculates parity bits from the data, so that the decoder can, later on, try to detect and correct the errors.<br/><br/>' +
                         'For this, the Hamming(63,57) error correcting code and product codes are used and implemented.',
            technologies: [
                Technologies.ALTERA,
                Technologies.ASM,
                Technologies.CCPP,
                Technologies.MATLAB,
                Technologies.PYTHON,
                Technologies.VHDL
            ],
            images: [
                '/assets/img/portfolio/hamming/1.png',
                '/assets/img/portfolio/hamming/2.png',
                '/assets/img/portfolio/hamming/3.png',
                '/assets/img/portfolio/hamming/4.png',
                '/assets/img/portfolio/hamming/5.png',
                '/assets/img/portfolio/hamming/6.png'
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
