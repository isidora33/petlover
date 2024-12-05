//Dinamicko ispisivanje menija
let links = [
   
    {
        path : "index.html",
        text: "Home",
        isActive: true
    },
    {
        path : "index.html#divBooking",
        text: "Book Now",
        isActive: false
    },
    {
        path : "index.html#divAbout",
        text: "About",
        isActive: false
    },

    {
        path : "index.html#divService",
        text: "Services",
        isActive: false
    },
    {
        path : "index.html#divFeatures",
        text: "Features",
        isActive: false
    },
    {
        path : "index.html#divPricing",
        text: "Pricing",
        isActive: false
    },
    {
      path : "index.html#divTeam",
      text: "Our Team",
      isActive: false
  },
  {
    path : "index.html#divFAQ",
    text: "FAQ",
    isActive: false
  },
  {
  path : "author.html",
  text: "Author",
  isActive: false,
  },
    
]

function createLink(link) {
    let additionalClass = link.text === "Author" ? "d-md-none" : ""; 
    let html = `<a href="${link.path}" class="nav-item nav-link ${additionalClass} ${link.isActive ? 'active' : ''}">${link.text}</a>`;
    return html;
  }
  
  let menu = ""
  
  for(let link of links) {
      menu += createLink(link)
  }
  
  
  
  let navMenu = document.querySelector("#menu")
  
  if(navMenu) {
      navMenu.innerHTML = menu
  }

  $(document).ready(function () {var isBouncing = false;  
   
    $('.back-to-top').hide();
  
    let bounceTimeout;
  
    function startBounce() {
      if ($('.back-to-top').is(':visible')) {
        $('.back-to-top')
          .animate({ bottom: '30px' }, 1000)  
          .animate({ bottom: '20px' }, 1000, function() {  
            if ($('.back-to-top').is(':visible') && isBouncing) {
              startBounce();  
            }
          });
      }
    }
    
    $(window).on('scroll', function() {
      if ($(this).scrollTop() > 100) { 
        if (!$('.back-to-top').is(':visible')) {
          $('.back-to-top').fadeIn(300);  
          isBouncing = true;  
          startBounce();  
        }
    
        clearTimeout(bounceTimeout);  
        bounceTimeout = setTimeout(function() {
          isBouncing = false;  
        }, 5000);  
      } else {
        $('.back-to-top').fadeOut(300);  
        isBouncing = false;  
      }
    });
  
  });