const translations = {
    az: {
        title: "Ma Cocotte | Nərimanov filialı",
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
        branchTitle: "Nərimanov filialı",
        branchDesc: "Nərimanov filialımız sadə, lakin şık bir kafe olaraq dizayn edilib. Bir mərtəbədən ibarət olan filialın sahəsi 100 m²-dir. Burada 10 ədəd 2 nəfərlik və 12 ədəd 4 nəfərlik masa mövcuddur. 40–45 nəfərlik qonaq tutumu ilə Nərimanov filialımız, rahat oturma sahələri və səmimi atmosferi ilə xidmətinizdədir.",
        copyright: "© 2025 Ma Cocotte"
    },
    en: {
        title: "Ma Cocotte | Nerimanov Branch",
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
        branchTitle: "Nerimanov Branch",
        branchDesc: "Our Nerimanov branch is designed as a simple yet elegant cafe. The one-story branch has an area of 100 m². There are 10 tables for 2 people and 12 tables for 4 people. With a capacity of 40–45 guests, our Nerimanov branch is at your service with its comfortable seating areas and warm atmosphere.",
        copyright: "© 2025 Ma Cocotte"
    },
    fr: {
        title: "Ma Cocotte | Succursale Nerimanov",
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
        branchTitle: "Succursale Nerimanov",
        branchDesc: "Notre succursale Nerimanov est conçue comme un café simple mais élégant. La succursale d'un étage a une superficie de 100 m². Il y a 10 tables pour 2 personnes et 12 tables pour 4 personnes. Avec une capacité de 40 à 45 clients, notre succursale Nerimanov est à votre service avec ses espaces de détente confortables et son atmosphère chaleureuse.",
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
    
    document.querySelector('.nerimanov h2').textContent = translations[lang].branchTitle;
    document.querySelector('.nerimanov p').textContent = translations[lang].branchDesc;
    
    const footerParagraphs = document.querySelectorAll('.footer p');
    if (footerParagraphs[1]) footerParagraphs[1].textContent = translations[lang].copyright;
    
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