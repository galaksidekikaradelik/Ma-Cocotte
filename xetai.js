const translations = {
    az: {
        title: "Ma Cocotte | Xətai filialı",
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
        branchTitle: "Xətai filialı",
        branchDesc: "Xətai filialımız bir mərtəbəli, cozy kafe tərzindədir. Ümumi sahəsi 90 m² təşkil edir. Burada 9 ədəd 2 nəfərlik və 10 ədəd 4 nəfərlik masa yerləşir. 35–40 nəfərlik tutumu ilə Xətai filialımız, rahat atmosferi və diqqətli heyəti ilə qonaqların xidmətindədir.",
        copyright: "© 2025 Ma Cocotte"
    },
    en: {
        title: "Ma Cocotte | Xetai Branch",
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
        branchTitle: "Xetai Branch",
        branchDesc: "Our Xetai branch is a one-story, cozy cafe style. It has a total area of 90 m². There are 9 tables for 2 people and 10 tables for 4 people. With a capacity of 35–40 guests, our Xetai branch is at your service with its comfortable atmosphere and attentive staff.",
        copyright: "© 2025 Ma Cocotte"
    },
    fr: {
        title: "Ma Cocotte | Succursale Xetai",
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
        branchTitle: "Succursale Xetai",
        branchDesc: "Notre succursale Xetai est un café confortable d'un seul étage. Elle a une superficie totale de 90 m². Il y a 9 tables pour 2 personnes et 10 tables pour 4 personnes. Avec une capacité de 35 à 40 clients, notre succursale Xetai est à votre service avec son atmosphère confortable et son personnel attentif.",
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
    
    document.querySelector('.azadliq h2').textContent = translations[lang].branchTitle;
    document.querySelector('.azadliq p').textContent = translations[lang].branchDesc;
    
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