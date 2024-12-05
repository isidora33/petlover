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

//Dinamicko ispisivanje Services
const services = [
  {
    iconClass: "flaticon-house",
    title: "Pet Boarding",
    description: "Your pet will stay in a safe and cozy space with plenty of care and attention while you’re away.",
    linkText: "Read More",
    extendedDescription: "Our boarding includes daily walks, playtime, and regular updates for your peace of mind.",
  },
  {
    iconClass: "flaticon-food",
    title: "Pet Feeding",
    description: "We prepare and serve healthy, balanced meals tailored to your pet’s specific dietary needs.",
    linkText: "Read More",
    extendedDescription: "We use high-quality ingredients and follow specific feeding schedules.",
  },
  {
    iconClass: "flaticon-grooming",
    title: "Pet Grooming",
    description: "Keep your pet looking great with our gentle grooming services, including bathing and trimming.",
    linkText: "Read More",
    extendedDescription: "Our grooming also includes nail trimming and ear cleaning.",
  },
  {
    iconClass: "flaticon-cat",
    title: "Pet Training",
    description: "Help your pet learn new skills and good behavior with our expert training sessions.",
    linkText: "Read More",
    extendedDescription: "We offer obedience training, agility, and behavior correction.",
  },
  {
    iconClass: "flaticon-dog",
    title: "Pet Exercise",
    description: "Keep your pet active and healthy with our fun and tailored exercise routines.",
    linkText: "Read More",
    extendedDescription: "Daily exercise includes structured play and fitness activities.",
  },
  {
    iconClass: "flaticon-vaccine",
    title: "Pet Treatment",
    description: "Ensure your pet’s health with our professional care and treatment services.",
    linkText: "Read More",
    extendedDescription: "Our services include vaccinations, checkups, and emergency care.",
  },
];
  
  const serviceContainer = document.getElementById("service-container");
  
  services.forEach((service, index) => {
    const colDiv = document.createElement("div");
    colDiv.className = "col-md-6 col-lg-4 mb-4";
  
    const cardDiv = document.createElement("div");
    cardDiv.className =
      "d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5 hiddenDiv";
  
    const icon = document.createElement("h3");
    icon.className = `${service.iconClass} display-3 font-weight-normal text-secondary mb-3`;
  
    const title = document.createElement("h3");
    title.className = "mb-3";
    title.textContent = service.title;
  
    const description = document.createElement("p");
    description.className = "description"; 
    description.textContent = service.description;
  
    const extendedText = document.createElement("span");
    extendedText.className = `extended-text extended-text-${index}`; 
    extendedText.style.display = "none"; 
    extendedText.textContent = ` ${service.extendedDescription}`; 
  
    description.appendChild(extendedText);
  
    const toggleLink = document.createElement("a");
    toggleLink.className = "text-uppercase font-weight-bold toggle-link";
    toggleLink.href = "#"; 
    toggleLink.textContent = "Read More"; 
  
    // jQuery Read more/Read less
    $(toggleLink).on("click", function (e) {
      e.preventDefault(); 
  
      $(extendedText).toggle();
  
      if ($(this).text() === "Read More") {
        $(this).text("Read Less");
      } else {
        $(this).text("Read More");
      }
    });
  
    cardDiv.appendChild(icon);
    cardDiv.appendChild(title);
    cardDiv.appendChild(description); 
    cardDiv.appendChild(toggleLink); 
    colDiv.appendChild(cardDiv);
  
    serviceContainer.appendChild(colDiv);
  });
  
  

//Dinamicko ispisivanje Features

const features = [
  { icon: "flaticon-cat", text: "Best In Industry" },
  { icon: "flaticon-doctor", text: "Emergency Services" },
  { icon: "flaticon-care", text: "Special Care" },
  { icon: "flaticon-dog", text: "Customer Support" }
];

const featureRow = document.getElementById('featureRow');

features.forEach(feature => {
  const colDiv = document.createElement('div');
  colDiv.classList.add('col-6','hiddenDiv');

  const dFlexDiv = document.createElement('div');
  dFlexDiv.classList.add('d-flex', 'align-items-center', 'mb-4');

  const iconElement = document.createElement('h1');
  iconElement.classList.add(feature.icon, 'font-weight-normal', 'text-secondary', 'm-0', 'mr-3');

  const textElement = document.createElement('h5');
  textElement.classList.add('text-truncate', 'm-0');
  textElement.textContent = feature.text;

  dFlexDiv.appendChild(iconElement);
  dFlexDiv.appendChild(textElement);

  colDiv.appendChild(dFlexDiv);

  featureRow.appendChild(colDiv);
});

//Dinamicki ispis Pricing Plan

const pricingPlans = [
  {
    title: "Basic",
    price: 49,
    services: [
      { name: "Feeding", available: true },
      { name: "Boarding", available: true },
      { name: "Spa & Grooming", available: false },
      { name: "Veterinary Medicine", available: false }
    ],
    imgSrc: "img/price-1.jpg",
    priceClass: "text-primary",
    btnClass: "btn-primary"
  },
  {
    title: "Standard",
    price: 99,
    services: [
      { name: "Feeding", available: true },
      { name: "Boarding", available: true },
      { name: "Spa & Grooming", available: true },
      { name: "Veterinary Medicine", available: false }
    ],
    imgSrc: "img/price-2.jpg",
    priceClass: "text-secondary",
    btnClass: "btn-secondary"
  },
  {
    title: "Premium",
    price: 149,
    services: [
      { name: "Feeding", available: true },
      { name: "Boarding", available: true },
      { name: "Spa & Grooming", available: true },
      { name: "Veterinary Medicine", available: true }
    ],
    imgSrc: "img/price-3.jpg",
    priceClass: "text-primary",
    btnClass: "btn-primary"
  }
];

const pricingRow = document.getElementById('pricingRow');

pricingPlans.forEach(plan => {
  const colDiv = document.createElement('div');
  colDiv.classList.add('col-lg-4', 'mb-4','hiddenDiv');

  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card', 'border-0');

  const cardHeaderDiv = document.createElement('div');
  cardHeaderDiv.classList.add('card-header', 'position-relative', 'border-0', 'p-0', 'mb-4');
  
  const imgElement = document.createElement('img');
  imgElement.classList.add('card-img-top');
  imgElement.src = plan.imgSrc;
  imgElement.alt = `${plan.title} plan`;

  const overlayDiv = document.createElement('div');
  overlayDiv.classList.add('overlay');
  
  const titleElement = document.createElement('h3');
  titleElement.classList.add(plan.priceClass, 'mb-3');
  titleElement.textContent = plan.title;

  const priceElement = document.createElement('h1');
  priceElement.classList.add('display-4', 'text-white', 'mb-0');
  priceElement.innerHTML = `<small class="align-top" style="font-size: 22px; line-height: 45px">$</small>${plan.price}<small class="align-bottom" style="font-size: 16px; line-height: 40px">/ Mo</small>`;

  overlayDiv.appendChild(titleElement);
  overlayDiv.appendChild(priceElement);

  cardHeaderDiv.appendChild(imgElement);
  cardHeaderDiv.appendChild(overlayDiv);

  const cardBodyDiv = document.createElement('div');
  cardBodyDiv.classList.add('card-body', 'text-center', 'p-0');

  const ulElement = document.createElement('ul');
  ulElement.classList.add('list-group', 'list-group-flush', 'mb-4');

  plan.services.forEach(service => {
    const liElement = document.createElement('li');
    liElement.classList.add('list-group-item', 'p-2');

    const iconElement = document.createElement('i');
    if (service.available) {
      iconElement.classList.add('fa', 'fa-check', 'text-secondary', 'mr-2');
    } else {
      iconElement.classList.add('fa', 'fa-times', 'text-primary', 'mr-2');
    }
    
    liElement.appendChild(iconElement);
    liElement.appendChild(document.createTextNode(service.name));
    ulElement.appendChild(liElement);
  });

  cardBodyDiv.appendChild(ulElement);

  const cardFooterDiv = document.createElement('div');
  cardFooterDiv.classList.add('card-footer', 'border-0', 'p-0');

  const btnElement = document.createElement('a');
  btnElement.href = '#';
  btnElement.classList.add('btn', plan.btnClass, 'btn-block', 'p-3','sign-up-btn');
  btnElement.textContent = 'Signup Now';

  cardFooterDiv.appendChild(btnElement);

  cardDiv.appendChild(cardHeaderDiv);
  cardDiv.appendChild(cardBodyDiv);
  cardDiv.appendChild(cardFooterDiv);

  colDiv.appendChild(cardDiv);
  pricingRow.appendChild(colDiv);
});


  
//Obrada forme

var userName = document.querySelector('#userName');
var email = document.querySelector('#userEmail');
var reservationDate = document.querySelector('#reservation-date');
var reservationTime = document.querySelector('#reservation-time');
var radioButtons = document.getElementsByName('petCareOption');
var terms = document.querySelector('#termsConditions');
var bookingBtn = document.querySelector('#bookBtn');
var divCareOptions = document.getElementById('radio-pet-care');


var regUserName = /^[A-Z][a-z]{2,14}(\s[A-Z][a-z]{2,24})*$/;
var regUserEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//Funkcije za proveru svakog elementa forme
function validateName() {
  return regUserName.test(userName.value);
}

function validateEmail() {
  return regUserEmail.test(email.value);
}

function selectedDateTime() {
  return reservationDate.selectedIndex !== 0 && reservationTime.selectedIndex !== 0;
}

function validateRadio() {
  for (let radioButton of radioButtons) {
    if (radioButton.checked) {
      return true;
    }
  }
  return false;
}

function validateTerms() {
  return terms.checked;
}

//Funkcija za proveru cele forme
function validateForm(event) {
  event.preventDefault(); 

  let isValid = true;

  document.querySelectorAll('.error').forEach((span) => (span.textContent = ''));

  if (!validateName()) {
    userName.classList.add('invalid-input')
    userName.nextElementSibling.textContent =
      'Invalid name.';
    isValid = false;
  }else{
    userName.classList.remove('invalid-input')
  }

  if (!validateEmail()) {
    email.classList.add('invalid-input')
    email.nextElementSibling.textContent =
      'Invalid email.';
    isValid = false;
  }else{
    email.classList.remove('invalid-input')

  }

  if (!selectedDateTime()) {
    reservationTime.nextElementSibling.textContent =
      'Select date and time.';
    isValid = false;
  }

  if (!validateRadio()) {
    divCareOptions.nextElementSibling.textContent = 'Choose an option.';
    isValid = false;
  }

  if (!validateTerms()) {
  terms.closest('.form-group').querySelector('.error').textContent = 'You must accept the terms and conditions.';
  isValid = false;
}

if (isValid) {
  bookingBtn.previousElementSibling.classList.remove('error');
  bookingBtn.previousElementSibling.classList.add('success');
  bookingBtn.previousElementSibling.textContent = 'Your appointment has been successfully booked!';
}else{

  bookingBtn.previousElementSibling.classList.remove('success');
  bookingBtn.previousElementSibling.classList.add('error')
  bookingBtn.previousElementSibling.textContent = 'Please make sure all fields are filled out correctly.';
}
}

//Sta se desava klikom na dugme 
bookingBtn.addEventListener('click', validateForm);

//Hvatanje gresaka u trenutku popunjavanja elemenata forme

//Validacija imena tokom unosa
userName.addEventListener("keyup", () => {
  if (validateName()) {
    userName.nextElementSibling.textContent = "";
    userName.classList.remove('invalid-input');
  } else {
    userName.nextElementSibling.textContent = "Invalid name.";
  }
});

//Validacija email-a tokom unosa
email.addEventListener("keyup", () => {
  if (validateEmail()) {
    email.nextElementSibling.textContent = ""; 
    email.classList.remove('invalid-input');
  } else {
    email.nextElementSibling.textContent = "Invalid email.";
  }
});

//Provera da li je opcija izabrana
divCareOptions.addEventListener('click', () => {
  if(validateRadio()){
    divCareOptions.nextElementSibling.textContent = '';
  }
})

//Da li su izabrani i datum i vreme
function validateDateTime() {
  if (reservationDate.selectedIndex === 0 || reservationTime.selectedIndex === 0) {
    reservationTime.nextElementSibling.textContent =
      "Please select both a reservation date and time.";
  } else {
    reservationTime.nextElementSibling.textContent = ""; 
  }
}
reservationDate.addEventListener("change", validateDateTime);
reservationTime.addEventListener("change", validateDateTime);

//Da li je terms checked
terms.addEventListener('click', () =>{
  if(validateTerms()){
    terms.closest('.form-group').querySelector('.error').textContent = '';
  } else{
    terms.closest('.form-group').querySelector('.error').textContent = 'You must accept the terms and conditions.';    ;
  }
})

//Validacija pop up forme
var userNamePlan = document.querySelector('#nameForPlan');
var emailPlan = document.querySelector('#emailForPlan');
var submitPlan = document.querySelector('#submitPlan');
var pricingPlan = document.querySelector('#pricing-plan')

function validateNamePlan() {
  return regUserName.test(userNamePlan.value);
}

function validateEmailPlan() {
  return regUserEmail.test(emailPlan.value);
}

function selectedPlan() {
  return pricingPlan.selectedIndex !== 0;
}

function validateFormPlan(event) {
  event.preventDefault(); 

  let isValid = true;

  document.querySelectorAll('.error').forEach((span) => (span.textContent = ''));

  if (!validateNamePlan()) {
    userNamePlan.classList.add('invalid-input')
    userNamePlan.nextElementSibling.textContent =
      'Invalid name.';
    isValid = false;
  }else{
    userNamePlan.classList.remove('invalid-input')
  }

  if (!validateEmailPlan()) {
    emailPlan.classList.add('invalid-input')
    emailPlan.nextElementSibling.textContent =
      'Invalid email.';
    isValid = false;
  }else{
    emailPlan.classList.remove('invalid-input')

  }

  if (!selectedPlan()) {
    pricingPlan.nextElementSibling.textContent =
      'Select a pricing plan.';
    isValid = false;
  }


  if (isValid) {
    submitPlan.previousElementSibling.classList.remove('error');
    submitPlan.previousElementSibling.classList.add('success');
    submitPlan.previousElementSibling.textContent = 'You’ve successfully signed up for our plan!';
  }else{
    submitPlan.previousElementSibling.classList.remove('success');
    submitPlan.previousElementSibling.textContent = '';
  }
}

submitPlan.addEventListener('click', validateFormPlan);

//Hvatanje gresaka u trenutku popunjavanja elemenata forme

//Validacija imena tokom unosa
userNamePlan.addEventListener("keyup", () => {
  if (validateNamePlan()) {
    userNamePlan.nextElementSibling.textContent = "";
    userNamePlan.classList.remove('invalid-input');
  } else {
    userNamePlan.nextElementSibling.textContent = "Invalid name.";
  }
});

//Validacija email-a tokom unosa
emailPlan.addEventListener("keyup", () => {
  if (validateEmailPlan()) {
    emailPlan.nextElementSibling.textContent = ""; 
    emailPlan.classList.remove('invalid-input');
  } else {
    emailPlan.nextElementSibling.textContent = "Invalid email.";
  }
});

//Da li je plan selektovan

pricingPlan.addEventListener("change",()=>{
  if(!selectedPlan()){
    pricingPlan.nextElementSibling.textContent =
      'Please select a plan.';
  }else{
    pricingPlan.nextElementSibling.textContent =
      '';
  }
})

const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) { 
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', (event) => {
  event.preventDefault(); 
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
});

const dateSelect = document.getElementById("reservation-date");

const today = new Date();

for (let i = 1; i <= 5; i++) {
  const futureDate = new Date(today); 
  futureDate.setDate(today.getDate() + i); 
  
  const month = ("0" + (futureDate.getMonth() + 1)).slice(-2); 
  const day = ("0" + futureDate.getDate()).slice(-2); 
  const year = futureDate.getFullYear();
  const formattedDate = `${month}/${day}/${year}`;

  const option = document.createElement("option");
  option.value = formattedDate; 
  option.textContent = formattedDate; 

  dateSelect.appendChild(option);
}


//jQuery 
$(document).ready(function () {
  //Animacija za pojavljivanje odredjenih delova stranice tokom skrolovanja
  function animateOnScroll() {
    $('.hiddenDiv').each(function () {
      const elementTop = $(this).offset().top;
      const windowBottom = $(window).scrollTop() + $(window).height();

      if (elementTop < windowBottom - 50) {
        $(this).addClass('visible');
      }
    });
  }
  animateOnScroll();
  $(window).on('scroll', animateOnScroll);

  //Sign up popup
  $(".sign-up-btn").on("click", function (e) {
    e.preventDefault();

    $("#popup").addClass("visible");
    $("body").addClass("popup-open"); 
  });

  
  $(".close").on("click", function () {
    $("#popup").removeClass("visible");
    $("body").removeClass("popup-open"); 
  });

  $("#popup").on("click", function (e) {
    if (e.target === this) {
      $(this).removeClass("visible");
      $("body").removeClass("popup-open");
    }
  });

  //FAQ dropdown
  $(".faq-question").click(function() {
    var $answer = $(this).next(".faq-answer");

    $answer.stop().slideToggle();
  
    $(this).toggleClass("active");

    $(".faq-answer").not($answer).slideUp();  
    $(".faq-question").not(this).removeClass("active");  
  });

  //Back-to-top
  var isBouncing = false;  
   
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
  







