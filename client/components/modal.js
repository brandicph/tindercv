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
        allowMultiple: true,
        onApprove: _self.data.modal.onApprove,
        onDeny: _self.data.modal.onDeny,
        onShow: function() {

        },
        onVisible: function() {
            // hotfix to fix scroll issues
            $(_self.data.modal.context).addClass('dimmed');
            modal.modal('refresh');
        },
        onHide: _self.data.modal.onHide,
        onHidden: function() {
            // Destroy modal after hide transition
            Blaze.remove(_self.view);
        }
    });

    // Show modal immediately upon rendering the template
    modal.modal('show');
});


/**************************
- PROFILE TEMPLATE ONRENDERED 
***************************/
Template.modalProfile.onRendered(function() {

    // Meteor.defer will ensure that the DOM is ready-ready
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

        var swiperSkills = new Swiper('.swiper-container-skills', {
            observer: true,
            autoHeight: true,
            pagination: '.swiper-pagination-skills',
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
- PROFILE TEMPLATE EVENTS 
***************************/
Template.modalProfile.events({
    'click .swiper-container .swiper-slide': function(event, template){
        $('.modal.profile').modal('hide');
    },
    'click .portfolio .item': function(event, template){
        AppUtils.ShowPortfolio(this);
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
    chunkedTechnologies: function(){
        return AppUtils.ChunkArray(this.info.profile.technologies, 6);
    }, 
    chunkedPortfolio: function(){
        return AppUtils.ChunkArray(this.info.profile.portfolio, 6);
    }
});


/**************************
- PORTFOLIO TEMPLATE ONRENDERED 
***************************/
Template.modalPortfolio.onRendered(function() {

    // Meteor.defer will ensure that the DOM is ready-ready
    Meteor.defer(function(){
        var swiperCover = new Swiper('.swiper-container-contain', {
            observer: true,
            autoHeight: true,
            pagination: '.swiper-pagination-contain',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 'auto',
            paginationClickable: true,
            spaceBetween: 0,
            keyboardControl: true,
            initialSlide: 0
        });

        var swiperSkills = new Swiper('.swiper-container-technologies', {
            observer: true,
            autoHeight: true,
            pagination: '.swiper-pagination-technologies',
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
- PORTFOLIO TEMPLATE EVENTS 
***************************/
Template.modalPortfolio.events({
    'click .swiper-container-contain .swiper-slide': function(event, template){
        $('.modal.portfolio').modal('hide');
    }
});


/**************************
- PORTFOLIO TEMPLATE HELPERS 
***************************/
Template.modalPortfolio.helpers({
    chunkedTechnologies: function(){
        return AppUtils.ChunkArray(this.technologies, 6);
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

