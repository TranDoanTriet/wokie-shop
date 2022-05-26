const homeArr = [
    {
        name: 'Home — Demo 1',
        marked: 'Popular'
    },
    {
        name: 'Home — Demo 2',
        marked: 'New'
    },
    {
        name: 'Home — Demo 3',
        marked: 'Popular'
    },
    {
        name: 'Home — Demo 4',
        marked: 'Popular'
    },
    {
        name: 'Home — Demo 5',
        marked: ''
    },
    {
        name: 'Home — Demo 6',
        marked: ''
    },
    {
        name: 'Home — Demo 7',
        marked: ''
    },
    {
        name: 'Home — Demo 8',
        marked: ''
    },
    {
        name: 'Home — Demo 9',
        marked: ''
    },
    {
        name: 'Home — Demo 10',
        marked: ''
    },
    {
        name: 'Home — Demo 11',
        marked: ''
    },
    {
        name: 'Home — Demo 12',
        marked: ''
    },
    {
        name: 'Home — Demo 13',
        marked: ''
    },
    {
        name: 'Home — Demo 14',
        marked: ''
    },
    {
        name: 'Home — Demo 15',
        marked: ''
    },
    {
        name: 'Home — Demo 16',
        marked: ''
    },
    {
        name: 'Home — Demo 17',
        marked: ''
    },
    {
        name: 'Home — Demo 18',
        marked: ''
    },
    {
        name: 'Home — Demo 19',
        marked: ''
    }, {
        name: 'Home — Demo 20',
        marked: ''
    },
    {
        name: 'Home — Demo 21',
        marked: ''
    }, {
        name: 'Home — Demo 22',
        marked: ''
    },
    {
        name: 'American Gear Football Store',
        marked: 'Popular'
    },
    {
        name: 'Baby Care Store',
        marked: ''
    },
    {
        name: 'Baseball Gear Store',
        marked: ''
    },
    {
        name: 'Basketball Gear Store',
        marked: ''
    },
    {
        name: 'Beers Store',
        marked: ''
    },
    {
        name: 'Bicycle Store #1',
        marked: 'Popular'
    },
    {
        name: 'Bicycle Store #2',
        marked: ''
    },
    {
        name: 'Books Store #1',
        marked: ''
    },
    {
        name: 'Books Store #2',
        marked: ''
    },
    {
        name: 'Cakes & Pastries Store (Catalog)',
        marked: ''
    },
    {
        name: 'Cars Store',
        marked: 'Popular'
    },
    {
        name: 'Christmas Store',
        marked: ''
    },
    {
        name: 'Clothes Store',
        marked: ''
    },
    {
        name: 'Coffee Store',
        marked: ''
    },
    {
        name: 'Comic Books Store',
        marked: ''
    },
    {
        name: 'Cookware Store',
        marked: ''
    },
    {
        name: 'Cosmetics Store',
        marked: ''
    },
    {
        name: 'Drones Store',
        marked: ''
    },
    {
        name: 'Eco Food Store',
        marked: ''
    },
    {
        name: 'Electronics Store #1',
        marked: ''
    },
    {
        name: 'Flowers Store',
        marked: ''
    },
    {
        name: 'Food Delivery Store (Restaurant)',
        marked: ''
    },
    {
        name: 'Furniture Store #1',
        marked: ''
    },
    {
        name: 'Furniture Store #2',
        marked: ''
    },
    {
        name: 'Glasses Store',
        marked: ''
    },
    {
        name: 'Gothic and Rock Clothing',
        marked: ''
    },
    {
        name: 'Handmade Store (Sculptor)',
        marked: ''
    },
    {
        name: 'Jewelry Store',
        marked: ''
    },
    {
        name: 'Kids Clothes Store',
        marked: ''
    },
    {
        name: 'Kids Toys Store',
        marked: ''
    },
    {
        name: 'LifeStyle Store',
        marked: ''
    },
    {
        name: 'Lingerie Store',
        marked: ''
    },
    {
        name: 'Medical Store',
        marked: ''
    },
    {
        name: 'Olives Store',
        marked: ''
    },
    {
        name: 'Phone Cases Store',
        marked: ''
    },
    {
        name: 'Phones Store',
        marked: ''
    },
    {
        name: 'Plants Store',
        marked: 'Popular'
    },
    {
        name: 'Single Product Store #1',
        marked: ''
    },
    {
        name: 'Single Product Store #2',
        marked: ''
    },
    {
        name: 'Single Product Store #3',
        marked: ''
    },
    {
        name: 'Skin Care Store',
        marked: ''
    },
    {
        name: 'Snowboards Store',
        marked: ''
    },
    {
        name: 'T-Shirt Store',
        marked: ''
    },
    {
        name: 'Tea Store',
        marked: ''
    },
    {
        name: 'Antiques Store ',
        marked: 'New'
    },
    {
        name: 'Electronics Store #2',
        marked: 'New'
    },
    {
        name: 'Food & Drinks Store',
        marked: 'New'
    },
    {
        name: 'Food & Drinks Store',
        marked: 'New'
    },
    {
        name: 'Food Delivery Store',
        marked: 'New'
    },
    {
        name: 'Hookah Store',
        marked: 'New'
    },
    {
        name: 'Pets Supplies #2',
        marked: 'New'
    },
    {
        name: 'Shoes Store',
        marked: 'New'
    },
    {
        name: 'Sport Nutrition Store',
        marked: 'New'
    },
    {
        name: 'Start Up Store',
        marked: 'New'
    },
    {
        name: 'Tattoo Store',
        marked: 'New'
    },


]

function checkMarked(check) {
    const checked = check.toLowerCase()
    if (checked == 'new') {
        return 'tt-n'
    }
    if (checked == 'popular' || check == 'featured') {
        return 'tt-p'
    }
    if (checked == 'sale') {
        return 'tt-s'
    }
}

console.log(homeArr.length)
$(".load").each(function (idx) {
    const check = homeArr[idx].marked
    $(this).append(`
        <a href="">
            <span class="active-smaller hcblue">
            ${homeArr[idx].name}
            </span>
            <span class="tt-badge ${checkMarked(check)}">${check}</span>
            <img class="lazy-picture" src="./img/home-demo/home-demo${idx + 1}.png" alt="">
        </a>
    `);
})

$(document).scroll(function () {
    var $height = $(document).scrollTop();
    if ($height > 150) {
        $('header').addClass('fixed-header').a
    } else {
        $('header').removeClass('fixed-header')
    }
});

//set slide fit the screen
const header_height = $("header").innerHeight();
const convert_pixel_slide = $(window).height() - header_height;
$('.slide_img img').css('height', convert_pixel_slide);
$('.slide_video video').css('height', convert_pixel_slide);

//slide
$('.owl-carousel:first').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: 20,
    autoplay: true,
    autoplaySpeed: 1000,
})
var owl = $('.slide_base').owlCarousel({
    items: 1,
    dots: true,
    loop: true,
    autoplay: true,
    nav: true,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
})

//show looking form
$('.off-looking').click(function (e) {
    e.preventDefault();
    $('.search-form').fadeOut();
});
$('.icon-search').click(function (e) {
    e.preventDefault();
    $('.search-form').fadeIn();
});


//amount of products
let amount_products = Number($('.amount-products').text());
function showAmountProduct(amount) {
    if (amount > 0) {
        $('.amount-products').show();
    }
    else {
        $('.amount-products').hide();
    }
}
showAmountProduct(amount_products)
console.log(amount_products)
$('.addcart').click(function (e) {
    e.preventDefault();
    amount_products += 1
    // document.querySelector('.amount-products').textContent = amount_products
    $('.amount-products').text(amount_products);
    console.log(amount_products)
    showAmountProduct(amount_products)
});












// function randomId() {
//     const date = new Date()
//     return date.getTime()
// }


//load lazy picture
// homeArr.forEach((val, idx) => {
//     $(".sub-list").each(function (idx) {
//         $(this).append(`
//             <li>
//                 <a href="">
//                     <span class="active-smaller hcblue">
//                         Home — Demo 1
//                     </span>
//                     <span class="tt-badge tt-new">New</span>
//                     <img class="lazy-picture" src="./img/home-demo/home-demo01.png" alt="">
//                 </a>
//             </li>
//         `);
//     })
// })

// $(".load").each(function (idx) {
//     let lc = headArr[idx].status.toLowerCase()
//     let bc = () => {
//         if (lc == 'n') {
//             return 'tt-new'
//         }
//         if (lc == 'p' || lc == 'f') {
//             return "tt-featured"
//         }
//         if (lc == 's') {
//             return "tt-sale"
//         }
//     }
//     console.log(bc())
//     $(this).text(headArr[idx].name);
//     $(this).append(`<span class="tt-badge ${bc()}">${headArr[idx].badge}</span>`);
//     $(this).append(`<img class="lazy-picture" src="./img/home-demo/home-demo-${idx + 1}.png" alt="">`);
// })
