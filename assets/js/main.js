(function($) {
    $(document).ready(function() {
        //Slick slider
        $(".js-hero-slider").slick({
            arrows: true,
            draggable: false
        });

        const $list = $(".js-works").isotope({
            itemSelector: ".works__item",
            layoutMode: "masonry",
            percentPosition: true,
            masonry: {
                columnWidth: ".grid-sizer"
            }
        });
        $(".filter").on("click", ".filter__item", function() {
            const $this = $(this);
            const $filterValue = $this.data("filter");
            $list.isotope({
                filter: $filterValue
            });
        });

        const filterItemClassName = "filter__item";
        const $filterItem = $(`.${filterItemClassName}`);
        $filterItem.first().addClass(`${filterItemClassName}--active`);
        $filterItem.click(function(e) {
            $filterItem
                .removeClass(`${filterItemClassName}--active`)
                .eq($(this).index())
                .addClass(`${filterItemClassName}--active`);
        });
    });
})(jQuery);
