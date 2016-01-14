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

Template.modal.onDestroyed(function() {

});