//Dinamicko ispisivanje menija
let links = [
   
    {
        path : "index.html",
        text: "Home",
        isActive: true
    },
    {
        path : "index.html#divBooking",
        text: "Booking",
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
    
]

function createLink(link) {
    let html = `<a href="${link.path}" class="nav-item nav-link ${link.isActive ? 'active' : ''}">${link.text}</a>`;
    return html
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
      description:
        "Your pet will stay in a safe and cozy space with plenty of care and attention while you’re away.",
      linkText: "Read More",
    },
    {
      iconClass: "flaticon-food",
      title: "Pet Feeding",
      description:
        "We prepare and serve healthy, balanced meals tailored to your pet’s specific dietary needs.",   
     linkText: "Read More",
    },
    {
      iconClass: "flaticon-grooming",
      title: "Pet Grooming",
      description:
        "Keep your pet looking great with our gentle grooming services, including bathing and trimming.",    
      linkText: "Read More",
    },
    {
      iconClass: "flaticon-cat",
      title: "Pet Training",
      description:
        "Help your pet learn new skills and good behavior with our expert training sessions.",
      linkText: "Read More",
    },
    {
      iconClass: "flaticon-dog",
      title: "Pet Exercise",
      description:
        "Keep your pet active and healthy with our fun and tailored exercise routines.",
      linkText: "Read More",
    },
    {
      iconClass: "flaticon-vaccine",
      title: "Pet Treatment",
      description:
        "Ensure your pet’s health with our professional care and treatment services.",
      linkText: "Read More",
    },
  ];
  
  const serviceContainer = document.getElementById("service-container");
  
  services.forEach((service) => {
    const colDiv = document.createElement("div");
    colDiv.className = "col-md-6 col-lg-4 mb-4";
  
    const cardDiv = document.createElement("div");
    cardDiv.className =
      "d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5";
  
    const icon = document.createElement("h3");
    icon.className = `${service.iconClass} display-3 font-weight-normal text-secondary mb-3`;
  
    const title = document.createElement("h3");
    title.className = "mb-3";
    title.textContent = service.title;
  
    const description = document.createElement("p");
    description.textContent = service.description;
  
    const link = document.createElement("a");
    link.className = "text-uppercase font-weight-bold";
    link.href = "#divAbout";
    link.textContent = service.linkText;
  
    cardDiv.appendChild(icon);
    cardDiv.appendChild(title);
    cardDiv.appendChild(description);
    cardDiv.appendChild(link);
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
  colDiv.classList.add('col-6');

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
  colDiv.classList.add('col-lg-4', 'mb-4');

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
  btnElement.classList.add('btn', plan.btnClass, 'btn-block', 'p-3');
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


var regUserName = /^[A-Z][a-z]{2,14}(\s[A-Z][a-z]{2,24})*$/;
var regUserEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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

function validateForm(event) {
  event.preventDefault(); 

  let isValid = true;

  document.querySelectorAll('.error').forEach((span) => (span.textContent = ''));

  if (!validateName()) {
    userName.nextElementSibling.textContent =
      'Invalid name.';
    isValid = false;
  }

  if (!validateEmail()) {
    email.nextElementSibling.textContent =
      'Invalid email.';
    isValid = false;
  }

  if (!selectedDateTime()) {
    reservationTime.nextElementSibling.textContent =
      'Select date and time.';
    isValid = false;
  }

  if (!validateRadio()) {
    document
      .getElementById('radio-pet-care')
      .nextElementSibling.textContent = 'Choose an option.';
    isValid = false;
  }

  if (!validateTerms()) {
  terms.closest('.form-group').querySelector('.error').textContent =
    'You must accept the terms and conditions.';
  isValid = false;
}

  if (isValid) {
    alert('Form submitted successfully!');
  }
}

bookingBtn.addEventListener('click', validateForm);

userName.addEventListener("blur", () => {
  if (validateName()) {
    userName.nextElementSibling.textContent = "";
  } else {
    userName.nextElementSibling.textContent = "Invalid name.";
  }
});

email.addEventListener("blur", () => {
  if (validateEmail()) {
    email.nextElementSibling.textContent = ""; 
  } else {
    email.nextElementSibling.textContent = "Invalid email.";
  }
});

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

// Selektuj dugme
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


//jQuery
(function($){
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 2000,  
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
})(jQuery);
