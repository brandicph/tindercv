/**************************
- PARENT TEMPLATE ONRENDERED 
***************************/
Template.modal.onRendered(function() {
    var _self = this;
    var modal = $(this.firstNode);

    modal.modal({
        context: _self.data.modal.context,
        autofocus: false,
        observeChanges: true,
        detachable: true,
        onApprove: _self.data.modal.onApprove,
        onDeny: _self.data.modal.onDeny,
        onShow: function() {

        },
        onVisible: function() {
            // hotfix to fix scroll issues
            $(_self.data.modal.context).addClass('dimmed');
            modal.modal('refresh');
        },
        onHide: function() {

        },
        onHidden: function() {
            // Destroy modal after hide transition
            Blaze.remove(_self.view);
        }
    });

    // Show modal immediately upon rendering the template
    modal.modal('show');
});


/**************************
- CHILD TEMPLATE ONRENDERED 
***************************/
Template.modalProfile.onRendered(function() {
    Meteor.defer(function(){
        var swiperCover = new Swiper('.swiper-container', {
            observer: true,
            autoHeight: true,
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 'auto',
            paginationClickable: true,
            spaceBetween: 0,
            keyboardControl: true,
            initialSlide: 0
        });

        var swiperPortfolio = new Swiper('.swiper-container-portfolio', {
            observer: true,
            autoHeight: true,
            pagination: '.swiper-pagination-portfolio',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 'auto',
            paginationClickable: true,
            spaceBetween: 0,
            keyboardControl: true,
            initialSlide: 0
        });
    });
});


/**************************
- CHILD TEMPLATE EVENTS 
***************************/
Template.modalProfile.events({
    'click .swiper-container': function(event, template){
        $('.modal.profile').modal('hide');
    }
});


/**************************
- IT'S A MATCH TEMPLATE HELPERS 
***************************/
Template.modalItsAMatch.helpers({
    currentImage: function(){
        return this.info.profile.images[this.image];
    }
});


/**************************
- PROFILE TEMPLATE HELPERS 
***************************/
Template.modalProfile.helpers({
    orderedImages: function(){
        var clone = this.info.profile.images.slice(0);
        var arr = AppUtils.MoveElement(clone, this.image, 0);
        return arr;
    },
    chunkedPortfolio: function(){
        var portfolio = this.info.profile.portfolio;
        var chunks = [], i = 0, n = portfolio.length, len = 6;
        while (i < n) {
            chunks.push(portfolio.slice(i, i += len));
        }
        return chunks;
    }
});