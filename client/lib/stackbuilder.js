/*!
 * # StackBuilder
 *
 * based on gajus swing
 * https://github.com/gajus/swing
 *
 * to create a interactive tinder look-alike
 * stack of cards to like, dislike and even super-like
 *
 * Author: Alexander Brandi
 *
 */

(function(window) {

    "use strict";

    var StackBuilder = function(stack, cards) {
        var _deck = [];
        var _counter = 0;
        var $stack = $(stack);
        var $cards = $(cards);

        var $swing = gajus.Swing.Stack({
            minThrowOutDistance: 750,
            throwOutConfidence: function(offset, element) {
                return Math.min(Math.abs(offset) / element.offsetWidth * 2, 1);
            }
        });

        var _self = this;

        var onThrowOut = function(e) {
            if (_counter <= 0)
                return;

            $(e.target).removeClass('in-deck');

            // trigger the swipe events using jquery to trigger the template events
            var like = e.throwDirection == gajus.Swing.Card.DIRECTION_RIGHT;

            var card = _deck[_counter - 1];
            card.like = like;
            _counter--;

            _self.refill();

            $(e.target).trigger("throwout", card);
        };

        var onThrowIn = function(e) {
            if (_counter >= _deck.length)
                return;

            _counter++;

            $(e.target).addClass('in-deck');
            // Ugly hack to keep track of the correct order when reverting
            // Otherwise the cards will overlap incorrectly
            // I might make sense to add the class '.in-deck' but no.. swing is messy
            var res = $cards.sort(function(a, b) {
                var contentA = $(a).attr('data-sort');
                var contentB = $(b).attr('data-sort');
                return (contentA < contentB) ? -1 : (contentA > contentB) ? 1 : 0;
            });
            // replace cards with the sorted cards
            $stack.html(res);

            $(e.target).trigger("throwin");
        };

        this.superlike = function() {
            if (_counter <= 0)
                return;

            _deck[_counter - 1].superlike = true;
            _deck[_counter - 1].$card.throwOut(gajus.Swing.Card.DIRECTION_RIGHT, 0);
        };

        this.like = function() {
            if (_counter <= 0)
                return;

            _deck[_counter - 1].$card.throwOut(gajus.Swing.Card.DIRECTION_RIGHT, 0);
        };

        this.dislike = function() {
            if (_counter <= 0)
                return;

            _deck[_counter - 1].$card.throwOut(gajus.Swing.Card.DIRECTION_LEFT, 0);
        };

        this.revert = function() {
            if (_counter >= _deck.length)
                return;

            _deck[_counter].$card.throwIn(_deck[_counter].like ? gajus.Swing.Card.DIRECTION_RIGHT : gajus.Swing.Card.DIRECTION_LEFT, 0);
        };

        this.refill = function() {
            // check if no more cards
            if (_counter == 0) {
                // wait and check again, just like the MAC algorithm used in 802.11 standards
                setTimeout(function() {
                    // if still no cards, add every card again
                    if (_counter == 0) {
                        for (var i = 0; i < _deck.length; i++) {
                            _deck[i].$card.throwIn(_deck[i].like ? gajus.Swing.Card.DIRECTION_RIGHT : gajus.Swing.Card.DIRECTION_LEFT, 0);
                        }
                    }
                }, 3000);
            }
        };

        this.init = function() {
            $cards.each(function() {
                var elm = $(this);
                var card = $swing.createCard(elm[0]);
                elm.addClass('in-deck');

                // Add the nasty data-sort attribute to perform the hack
                elm.attr('data-sort', _counter);
                var id = _counter;
                _deck.push({
                    id: id,
                    $card: card,
                    like: false,
                    superlike: false
                });
                _counter++;
            });

            $swing.on('throwout', onThrowOut);
            $swing.on('throwin', onThrowIn);

            return _self;
        };

        return this.init();
    };

    window.StackBuilder = StackBuilder;

})(window);
