/**
 * Gold Live Calculator JS
 * 
 * @since 1.0.0
 */

(function($) {
    function refreshValues() {
        var timespan = $('.gold-live-calculator-timespan-control').slider('value'),
            duration = $('.gold-live-calculator-duration-control').slider('value');

        $('.gold-live-calculator-timespan-control')
            .closest('.gold-live-calculator-slider-wrapper')
            .find('.gold-live-calculator-value span')
            .html(timespan);

        $('.gold-live-calculator-duration-control')
            .closest('.gold-live-calculator-slider-wrapper')
            .find('.gold-live-calculator-value span')
            .html(duration);

        var net = timespan * 100 * ( duration / 10 ),
            discount = ( timespan > 1 || duration > 10 ) ? ( ( ( ( timespan - 1 ) * 0.05 + ( duration / 10 - 1 ) * 0.05 ) < 0.4 ) ? ( ( timespan - 1 ) * 0.05 + ( duration / 10 - 1 ) * 0.05 ) * net: 0.4 * net ) : 0;
            percent = ( ( timespan > 1 || duration > 10 ) ? ( ( ( ( timespan - 1 ) * 0.05 + ( duration / 10 - 1 ) * 0.05 ) < 0.4 ) ? ( ( timespan - 1 ) * 0.05 + ( duration / 10 - 1 ) * 0.05 ) : 0.4 ) : 0 ) * 100;
            vat = ( net - discount ) * 0.19,
            total = net - discount + vat;

        $('.gold-live-calculator-net .value span').html(net.toFixed(2).replace('.', ','));
        $('.gold-live-calculator-discount .value span').html(discount.toFixed(2).replace('.', ','));
        $('.gold-live-calculator-discount label span').html(percent.toFixed(2).replace('.', ','));
        $('.gold-live-calculator-vat .value span').html(vat.toFixed(2).replace('.', ','));
        $('.gold-live-calculator-total .value span').html(total.toFixed(2).replace('.', ','));
    }

    $(document).ready(function() {
        $('.gold-live-calculator-timespan-control').slider({
            orientation: "horizontal",
            range: "min",
            max: 12,
            min: 1,
            slide: refreshValues,
            change: refreshValues
        });
        
        $('.gold-live-calculator-duration-control').slider({
            orientation: "horizontal",
            range: "min",
            max: 120,
            min: 10,
            step: 10,
            slide: refreshValues,
            change: refreshValues
        });

        refreshValues();
    });
}) (jQuery);