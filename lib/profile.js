var tinderCvProfile = Meteor.settings.public.tinderCvProfile;
Profile = {
    _id: 'xy',
    profile: {
        firstname: tinderCvProfile.firstname || 'John',
        middlename: tinderCvProfile.middlename || 'Johnny',
        lastname: tinderCvProfile.lastname || 'Johnson',
        age: tinderCvProfile.age || 101,
        phone: tinderCvProfile.phone || '+00 123 456 789',
        email: tinderCvProfile.email || 'john@jjjohnson.com',
        website: tinderCvProfile.website || 'https://jjjohnson.com',
        social: tinderCvProfile.social || [{
            "title": "LinkedIn profile",
            "label": "linkedin.com/in/johnjohnson",
            "url": "https://linkedin.com/in/johnjohnson"
        }],
        address: tinderCvProfile.address || {
            street: 'Awesome Street 101',
            city: 'Awesome Ville',
            zipcode: '10101',
            country: {
                name: 'Funland',
                code: 'FL'
            },
            coordinates: {
                latitude: 90.0000,
                longitude: 0.0000
            }
        },
        work: tinderCvProfile.work || [
            'Ninja Inc.'
        ],
        studies: tinderCvProfile.studies || [
            'Ninja University'
        ],
        education: tinderCvProfile.education || [{
            title: 'M.Sc. Ninja',
            specialization: 'Kick and Punches',
            institution: 'Ninja University'
        }],
        images: [
            '/assets/img/profile/bike.jpg',
            '/assets/img/profile/handstand.jpg',
            '/assets/img/profile/boat.jpg'
        ],
        description: 'Nerd Alert: Entrepreneur, civil engineer and drone scientist with mad algebra and (programming) language skills.<br/><br/>' +
            'Ni hao, hen gaoxing renshi ni! Wo jiao Bu Ran Di he wo shi Danmai. Wo hui yidainr Zhongwen :)',
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
            Technologies.DTHREE,
            Technologies.GIT,
            Technologies.HANDLEBARS,
            Technologies.HEROKU,
            Technologies.HTML5,
            Technologies.IOS,
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
            Technologies.RAILS,
            Technologies.RUBY,
            Technologies.SEMANTICUI,
            Technologies.STRIPE,
            Technologies.SUBVERSION,
            Technologies.REDIS,
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
                'Drop and find packages on the real world locations and prepare yourself for a virtual battle against your friends.<br/><br/>' +
                'Explore the world and collect items to help defeat your friends in a Geek Run.',
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
            description: 'Fly like a boss as Super Piggy, or end up as fried bacon.<br/><br/>' +
                'A weekend project and simple game created in Unity with inspiration from Flappy Bird.',
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
            description: 'Rent, or lease, out any unused bikes you have collecting dust in your shed.<br/><br/>' +
                'Byke App gives you the opportunity to earn some extra money for your vacation, dream-bag or jewellery.<br/><br/>' +
                'Share your Bike and receive an extra income... Or rent someone else\'s Bike, even in foreign countries.',
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
            description: 'New platform where you can find and share your favorite sport locations.<br/><br/>' +
                'A social media platform for sport enthusiasts, enabling fast sharing of activities.<br/><br/>' +
                'Explore new sport locations and follow users with the same interests.',
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
            description: 'Crowd knowledge media that enabling online collaboration with your fellow students.<br/><br/>' +
                'Ask questions online and get answers in real-time with Examplex.<br/><br/>' +
                'A centralized media that helps eliminate redundant questions leaving the students to focus on the important ones.',
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
            description: 'Bachelor thesis defining a new system used to control UAV through mobile networks. ' +
                'It redefines the original generic UAV system using the same terminology. ' +
                'The new system architecture, and its different components describes a concept able to be used by others<br/><br/>' +
                'A sophisticated air vehicle, including an autopilot, is constructured to validate and create a proof of concept. ' +
                'The proof of concept is a practical implementation used to validate the correctness of the system.<br/><br/>' +
                'The system is tested using a live mobile network with the ability to operate over long distances. ' +
                'The results show great potential and capability to function even under poor conditions and across borders.',
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
            description: 'Various projects working with Photoshop to illustrate and manipulate images.<br/><br/>' +
                'Some projects also includes the implementation of compression and detection algorithms.',
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
            description: 'Simple webshop design made for friends hosted on Shopify.<br/><br/>' +
                'Buy mobility equipment that eases the muscular restitution process.',
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
            description: 'Extensive project for the Danish Government/Tax Department that allow Danish citizens to declare any self-assessments.<br/><br/>' +
                'Worked on the project as a developer improving the build and deployment process.<br/><br/>' +
                'The results showed a 500% efficiency gain to the build and deployment process, reducing it to 3 minutes.',
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
            subtitle: 'Danish Tax system to register the income of citizens',
            description: 'Complex system registering salary earned by citizens living in Denmark. ' +
                'This implies requirements to the performance and reliability of the system.<br/><br/>' +
                'Worked as a developer with the primary tasks of testing and verifying the system by creating automated stress-, load- and regressiontests.',
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
            subtitle: 'Administration System managing unemployed Danish citizens',
            description: 'Extensive system with multiple governmental bodies interfacing with KMD Momentum.<br/><br/>' +
                'The system collects job offers from multiple company databases. ' +
                'The system give the municipalities/social workers the oppertunity to find available jobs.<br/><br/>' +
                'By Danish Law, all unemployed citizens currently receiving wellfare from the government should actively pursue employment, or receive education.<br/><br/>' +
                'Figuring as a full-stack developer, improving the overall performance, design by in-depth analysis and so forth.',
            technologies: [
                Technologies.ANGULAR,
                Technologies.BIZTALK,
                Technologies.BOOTSTRAP,
                Technologies.DOTNET,
                Technologies.DTHREE,
                Technologies.MAINFRAME,
                Technologies.MSSQL,
                Technologies.NODEJS,
                Technologies.REDIS,
                Technologies.TFS
            ],
            images: [
                '/assets/img/portfolio/momentum/1.png',
                '/assets/img/portfolio/momentum/2.png'
            ]
        }, {
            title: 'Kapitalministeriet',
            subtitle: 'Quick Overview of Available Governmental Services',
            description: 'Fun private project providing a transparent collection of economic services available to DK/EU citizens in Denmark.',
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
            subtitle: 'Embedded system with a MIPS processor created from scratch',
            description: 'Specification and implementation of a subset of the MIPS architecture. ' +
                'The processor is developed as the backbone to a ECG scanner handling a set of instructions describing the Pan-Thompkins QRS detection algorithm.<br/><br/>' +
                'The Pan-Thompkins QRS detection algorithm was initially implemented in C to be analyzed and tested for performance. ' +
                'Optimized and analyzed, the algorithm was later translated to assembler instructions for the processor to handle.<br/><br/>' +
                'The processor was implemented and tested using Gezel.',
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
                'The main goal of the project was to create a LTE data generator that analyze and verifies the system.<br/><br/>' +
                'Data is generated using a Gold Sequence Generator (multi pseudo random generator) that repeats every N\'th periods. ' +
                'The data is passed to an I/Q mapper, which maps bit sequences to their corresponding I/Q values. ' +
                'Sequential transmitted through an Inverse Fast Fourier Transformation and finally adding a cyclic prefix.<br/><br/>' +
                'The cyclic prefixed data is sent into a FIFO, which is monitored by a Tx controller. ' +
                'When the FIFO is full, the Tx controller will pause the system until additional room is made available (this is done by waiting a set number of clock cycles). ' +
                'The outgoing data is sent through a noisifier, providing the analyzer with something to analyze.',
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
            description: 'Created a forward error correction encoder and decoder in a large system with purpose of transmitting audio through an optical fiber.<br/><br/>' +
                'The encoder calculates parity bits from the data, enabling the decoder to later detect and correct errors.<br/><br/>' +
                'This is implemented with the Hamming(63,57) error correcting product code at mind.',
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
