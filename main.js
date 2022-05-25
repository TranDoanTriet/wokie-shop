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
        $('header').addClass('fixed-header').fadeIn()
    } else {
        $('header').removeClass('fixed-header')
    }
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
