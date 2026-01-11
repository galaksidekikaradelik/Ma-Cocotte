const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-track img');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const dotsContainer = document.querySelector('.carousel-dots');

let index = 0;


function createDots() {
    dotsContainer.innerHTML = ''; 
    slides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
            index = i;
            updateCarousel();
        });
        dotsContainer.appendChild(dot);
    });
}


function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;
            

    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}


nextBtn.addEventListener('click', () => {
    index++;
    if (index >= slides.length) {
        index = 0;
    }
    updateCarousel();
});


prevBtn.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    updateCarousel();
});


document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevBtn.click();
    } else if (e.key === 'ArrowRight') {
        nextBtn.click();
    }
});

createDots();



const translations = {
    az: {
        title: "Ma Cocotte | Əsas səhifə",
        home: "Əsas səhifə",
        branches: "Filiallarımız",
        azadliq: "Azadlıq filialı",
        elmler: "Elmlər filialı",
        nerimanov: "Nərimanov filialı",
        nizami: "Nizami filialı",
        xetai: "Xətai filialı",
        menu: "Menyu",
        about: "Haqqımızda",
        contact: "Əlaqə",
        price: "Qiymət",
        order: "Sifariş et",
        copyright: "© 2025 Ma Cocotte"
    },
    en: {
        title: "Ma Cocotte | Home",
        home: "Home",
        branches: "Our Branches",
        azadliq: "Azadliq Branch",
        elmler: "Elmler Branch",
        nerimanov: "Nerimanov Branch",
        nizami: "Nizami Branch",
        xetai: "Xetai Branch",
        menu: "Menu",
        about: "About Us",
        contact: "Contact",
        price: "Price",
        order: "Order Now",
        copyright: "© 2025 Ma Cocotte"
    },
    fr: {
        title: "Ma Cocotte | Accueil",
        home: "Accueil",
        branches: "Nos Succursales",
        azadliq: "Succursale Azadliq",
        elmler: "Succursale Elmler",
        nerimanov: "Succursale Nerimanov",
        nizami: "Succursale Nizami",
        xetai: "Succursale Xetai",
        menu: "Menu",
        about: "À Propos",
        contact: "Contact",
        price: "Prix",
        order: "Commander",
        copyright: "© 2025 Ma Cocotte"
    }
};


let currentLang = 'az';


function changeLanguage(lang) {
    currentLang = lang;
    

    document.title = translations[lang].title;
    

    document.querySelector('.main-menu a[href="index.html"]').textContent = translations[lang].home;
    document.querySelector('.dropdown-title').textContent = translations[lang].branches;
    document.querySelector('a[href="azadliq.html"]').textContent = translations[lang].azadliq;
    document.querySelector('a[href="elmler.html"]').textContent = translations[lang].elmler;
    document.querySelector('a[href="nerimanov.html"]').textContent = translations[lang].nerimanov;
    document.querySelector('a[href="nizami.html"]').textContent = translations[lang].nizami;
    document.querySelector('a[href="xetai.html"]').textContent = translations[lang].xetai;
    document.querySelector('a[href="menyu.html"]').textContent = translations[lang].menu;
    document.querySelector('a[href="haqqimizda.html"]').textContent = translations[lang].about;
    document.querySelector('a[href="elaqe.html"]').textContent = translations[lang].contact;
    

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const priceText = card.querySelector('p');
        const button = card.querySelector('button');
        
        if (priceText) {
            const price = priceText.textContent.match(/\d+€/)[0];
            priceText.textContent = `${translations[lang].price}: ${price}`;
        }
        
        if (button) {
            button.textContent = translations[lang].order;
        }
    });
    

    const footerParagraphs = document.querySelectorAll('.footer p');
    if (footerParagraphs[1]) {
        footerParagraphs[1].textContent = translations[lang].copyright;
    }
    

    document.querySelectorAll('.language button').forEach(btn => {
        btn.style.background = 'rgba(255, 255, 255, 0.2)';
        btn.style.color = '#FFF8C9';
    });
    
    const activeBtn = document.querySelector(`button[data-lang="${lang}"]`);
    if (activeBtn) {
        activeBtn.style.background = '#FFF8C9';
        activeBtn.style.color = '#BEADFA';
    }
    

    localStorage.setItem('selectedLanguage', lang);
}

document.addEventListener('DOMContentLoaded', function() {

    const savedLang = localStorage.getItem('selectedLanguage') || 'az';
    changeLanguage(savedLang);
    

    document.querySelectorAll('.language button').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
});


const modal = document.getElementById("orderModal");
const modalProductName = document.getElementById("modalProductName");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".card button").forEach(button => {
    button.addEventListener("click", () => {
        const card = button.closest(".card");
        const productName = card.querySelector("h3").textContent;

        modalProductName.textContent = productName;
        modal.style.display = "flex";
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

document.getElementById("confirmOrder").addEventListener("click", () => {
    const quantity = document.getElementById("quantity").value;
    const delivery = document.getElementById("delivery").value;
    const product = modalProductName.textContent;

    alert(
        `Sifariş alındı!\n\nMəhsul: ${product}\nƏdəd: ${quantity}\nFilial: ${delivery}`
    );

    modal.style.display = "none";
});
