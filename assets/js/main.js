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

        // Select all links with hashes
        $('a[href*="#"]')
            // Remove links that don't actually link to anything
            .not('[href="#"]')
            .not('[href="#0"]')
            .click(function(e) {
                // On-page links
                if (
                    location.pathname.replace(/^\//, "") ==
                        this.pathname.replace(/^\//, "") &&
                    location.hostname == this.hostname
                ) {
                    // Figure out element to scroll to;
                    let target = $(this.hash);
                    target = target.length
                        ? target
                        : $("[name=" + this.hash.slice(1) + "]");
                    // Does a scroll target exist?
                    if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        e.preventDefault();
                        $("html, body").animate(
                            {
                                scrollTop: target.offset().top
                            },
                            1000,
                            function() {
                                // Callback after animation
                                // Must change focus!
                                let $target = $(target);
                                $target.focus();
                                if ($target.is(":focus")) {
                                    // Checking if the target was focused
                                    return false;
                                } else {
                                    $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                                    $target.focus(); // Set focus again
                                }
                            }
                        );
                    }
                }
            });
    });
})(jQuery);
