    /* juqery code of section no 4 */

    /* Explanation(click event is applied on right arrow. After click on right arrow class will be toggled(code is present in css file to make it visible) and color will be changed) */
    $(document).ready(function() {
    $('.bx-chevron-right').on('click', function() {
        $(this).toggleClass('collapsed');
        $(this).siblings('.colorChangeJs').toggleClass('collapsed'); // Toggle color change class on the corresponding paragraph
    });
    });
    /*  javascript code of section no 7 */
    document.addEventListener('DOMContentLoaded', function () {  
    const boxes = document.querySelectorAll('[id^="box"]');
    const carousel = new bootstrap.Carousel(document.querySelector('#carouselExampleFade'));

    // Activate the first box and icon on page load
    boxes[0].classList.add('active-box');
    boxes[0].querySelector('i').classList.add('active-icon');

    boxes.forEach((box, index) => {
    box.addEventListener('click', function () {
    // Reset all boxes and icons to their default state
    boxes.forEach(b => {
        b.classList.remove('active-box');
        b.querySelector('i').classList.remove('active-icon');
    });

    // Activate the clicked box and icon
    this.classList.add('active-box');
    this.querySelector('i').classList.add('active-icon');

    // Show the corresponding slide
    carousel.to(index);
    });
    });
    });




    /* --------------------------------Section no 9 ----------------------------- */
    const tabItems = document.querySelectorAll('.tab-item');
        const tabContentItems = document.querySelectorAll('.tab-content-item');
        //select tab content item
        function selectItem(e){
            // phly waly borders ko remove krny k lya ye code use ho ga
            removeBorder();
        // Add border to current tab
        removeShow();
        this.classList.add('tab-border');
        const tabContentItem = document.querySelector(`#${this.id}-content`);
        // Add show class
        tabContentItem.classList.add('show');
        }
        function removeBorder(){
            tabItems.forEach(item => item.classList.remove('tab-border'));
        }
        // Ye wala function content ko remove kry ga
        function removeShow(){
            tabContentItems.forEach(item => item.classList.remove('show'));
        }
        tabItems.forEach(item=> item.addEventListener('click',selectItem));


        /* ------------------------------------Reveal elements on scroll--------------- */
        window.addEventListener('scroll', reveal);               /* when user scroll reveal function will call */
        function reveal() {
            var reveals = document.querySelectorAll('.reveal');       /* This line selects all elements with class reveal */
            for (var i = 0; i < reveals.length; i++) {                /* This for loop will iterate through all the elments with class reveal(Two in this case) */
                var windowheight = window.innerHeight;                 /* This line stores the height of the window */
                var revealtop = reveals[i].getBoundingClientRect().top;  /* Current container ka top se distance stroe kry ga */
                var revealpoint = 150;         /* Value of height at which all the elements should start revealing */
                if (revealtop < windowheight - revealpoint) {
                    reveals[i].classList.add('active');                     /* windowheight - revealpoint calculates the position within the viewport where the reveal effect should start. For example, if windowheight is 800px and revealpoint is 150px, the reveal effect will start when the element is 650px (800px - 150px) from the top of the viewport. */
                } else {
                    reveals[i].classList.remove('active');                  
                }
            }
        }

                