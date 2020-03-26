window.spinnerInit =
    function () {

        let $wheel = $('.wheel'),
            $spinner = $('.spin-button'),
            degree = 1005,
            angle = 360 / $('li.item').length,
            minimum = 360;

        // select wheel
        $spinner.click(function () {
            // keep track of random number of rotation
            degree = degree + Math.random() * 1000;
            degree = degree + minimum - (degree % angle);


            // on click call a spin function
            // rotate to a number higher than the last one
            $wheel.css({
                'transform': 'rotate(' + degree + 'deg)'
            });

            // delay MUST match transition duration on the .wheel
            let delay = 1000;
            setTimeout(function () {
                getTheChosenOne();
            }, delay);
        });

        // get the topmost item from the wheel
        function getTheChosenOne() {
            let $chosenOne;

            // use the wheelOffset when calculating the top position of any item
            // this is needed because our "wheel" is a square, so the top value changes based on rotation
            let wheelOffset = $wheel.position().top;

            // loop through items, checking their position
            for (let item of $('.item')) {
                let $item = $(item),
                    position = $item.position(),
                    notOnTop = position.top + wheelOffset > 1;

                // if this item isn't on top, skip to the next one
                if (notOnTop) {
                    continue;
                }

                // get "previous" element (or last if no prev exists)
                let $prev = $(item).prev();
                $prev = $prev.length ? $prev : $('.item').last();

                // get "next" element (or first if no next exists)
                let $next = $(item).next();
                $next = $next.length ? $next : $('.item').first();

                // find out if previous and next elements are also on top
                let isPrevOnTop = $prev.position().top + wheelOffset < 1,
                    isNextOnTop = $next.position().top + wheelOffset < 1,
                    isInMiddle = isPrevOnTop && isNextOnTop;

                // if the current item is in the middle...
                // - set the text
                // - break out of the loop
                if (isInMiddle) {
                    setSelectedItem($(item));
                    break;
                }
            }
        }

        // sets the selected item text
        function setSelectedItem($item) {
            $('h2').text($item.prop('title'));
        }
    };