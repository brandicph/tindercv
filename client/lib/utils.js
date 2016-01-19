(function(window) {

    "use strict";

    var AppUtils = {
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
        ShowMatch: function(imageid, data, superlike) {
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
                    image: imageid,
                    superlike: !!superlike
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
        },
        Constants: {
            Skills: {
                ALTERA: {
                    name: "ALTERA/VHDL", 
                    image: "/assets/img/skills/altera.png"
                },
                ANDROID: {
                    name: "Android", 
                    image: "/assets/img/skills/android.png"
                },
                ANGULAR: {
                    name: "Angular", 
                    image: "/assets/img/skills/angular.png"
                },
                ASM: {
                    name: "Assembler", 
                    image: "/assets/img/skills/asm.png"
                },
                CSS: {
                    name: "CSS/CSS3", 
                    image: "/assets/img/skills/css.png"
                },
                GIT: {
                    name: "Git", 
                    image: "/assets/img/skills/git.png"
                },
                HTML5: {
                    name: "HTML/HTML5", 
                    image: "/assets/img/skills/html5.png"
                },
                JAVA: {
                    name: "Java", 
                    image: "/assets/img/skills/java.png"
                },
                JAVASCRIPT: {
                    name: "Javascript", 
                    image: "/assets/img/skills/javascript.png"
                },
                MAINFRAME: {
                    name: "Mainframe/DB2", 
                    image: "/assets/img/skills/ibm.png"
                },
                METEOR: {
                    name: "Meteor", 
                    image: "/assets/img/skills/meteor.png"
                },
                MONGODB: {
                    name: "MongoDB/NoSQL", 
                    image: "/assets/img/skills/mongodb.png"
                },
                CCPP: {
                    name: "C/C++", 
                    image: "/assets/img/skills/ccpp.png"
                },
                DOTNET: {
                    name: "C#/.NET", 
                    image: "/assets/img/skills/dotnet.png"
                },
                NODEJS: {
                    name: "NodeJS", 
                    image: "/assets/img/skills/nodejs.png"
                },
                OPNET: {
                    name: "OPNET", 
                    image: "/assets/img/skills/opnet.png"
                },
                PHP: {
                    name: "PHP", 
                    image: "/assets/img/skills/php.png"
                },
                PROLOG: {
                    name: "Prolog", 
                    image: "/assets/img/skills/prolog.png"
                },
                RAILS: {
                    name: "Rails", 
                    image: "/assets/img/skills/rails.png"
                },
                RUBY: {
                    name: "Ruby", 
                    image: "/assets/img/skills/ruby.png"
                },
                MSSQL: {
                    name: "MSSQL/SQL", 
                    image: "/assets/img/skills/mssql.png"
                },
                SUBVERSION: {
                    name: "Subversion", 
                    image: "/assets/img/skills/subversion.png"
                },
                UNITY: {
                    name: "Unity", 
                    image: "/assets/img/skills/unity.png"
                },
                TFS: {
                    name: "TFS/Visual Studio", 
                    image: "/assets/img/skills/vs.png"
                },
                REDIS: {
                    name: "Redis", 
                    image: "/assets/img/skills/redis.png"
                },
                XILINX: {
                    name: "Xilinx/Altera/VHDL", 
                    image: "/assets/img/skills/vhdl.png"
                }
            }
        }
    };

    window.AppUtils = AppUtils;

})(window);




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