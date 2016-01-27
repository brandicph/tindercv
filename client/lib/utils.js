(function(window) {

    "use strict";

    var AppUtils = {
        DetectBrowser: function(){
            // Opera 8.0+
            var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
            // Firefox 1.0+
            var isFirefox = typeof InstallTrigger !== 'undefined' || navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
            // At least Safari 3+: "[object HTMLElementConstructor]"
            var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
            // Internet Explorer 6-11
            var isIE = /*@cc_on!@*/false || !!document.documentMode;
            // Edge 20+
            var isEdge = !isIE && !!window.StyleMedia;
            // Chrome 1+
            var isChrome = (!!window.chrome && !!window.chrome.webstore) || navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
            // Blink engine detection
            var isBlink = (isChrome || isOpera) && !!window.CSS;

            return {
                opera: isOpera,
                firefox: isFirefox,
                safari: isSafari,
                ie: isIE,
                edge: isEdge,
                chrome: isChrome,
                blink: isBlink
            };
        },
        TallestWidestElement: function(selector, calcWidth) {
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
        ChunkArray: function(arr, len) {
            var chunks = [],
                i = 0,
                n = arr.length;
            while (i < n) {
                chunks.push(arr.slice(i, i += len));
            }
            return chunks;
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
            // POKÉBALL: GOOOO BLAAAZE!!!!
            Blaze.renderWithData(template, params, parentNode);
        },
        ShowBrowserInfo: function() {
            AppUtils.OpenModal({
                modal: {
                    template: 'modalBrowserInfo',
                    classes: 'small basic browserInfo',
                    context: 'body',
                    onApprove: function($element) {
                        return true;
                    },
                    onDeny: function($element) {
                        // just go back to the stack if 'Keep on Playing'
                        return true;
                    },
                    onHide: function() {

                    }
                },
                data: null
            });
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
                    },
                    onHide: function() {

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
                    },
                    onHide: function() {

                    }
                },
                data: {
                    info: data,
                    image: imageid
                }
            });
        },
        ShowPortfolio: function(data) {
            $('.modal.profile').removeClass('active visible').hide();
            AppUtils.OpenModal({
                modal: {
                    template: 'modalPortfolio',
                    classes: 'tiny portfolio',
                    context: '#container',
                    onApprove: function($element) {
                        // not much here since we dont use the actions
                        return true;
                    },
                    onDeny: function($element) {
                        // not much here since we dont use the actions
                        return true;
                    },
                    onHide: function() {
                        $('.modal.profile').addClass('active visible').show();
                        $('.modal.profile').modal('show').modal('refresh');
                    }
                },
                data: data
            });
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
            .css({
                '-webkit-touch-callout': 'none',
                '-webkit-user-select': 'none',
                '-khtml-user-select': 'none',
                '-moz-user-select': 'none',
                '-ms-user-select': 'none',
                'user-select': 'none',
                '-webkit-tap-highlight-color': 'rgba(0,0,0,0)'
            })
            .on('selectstart', false);
    };
})(jQuery);
