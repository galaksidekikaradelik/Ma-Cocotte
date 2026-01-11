const translations = {
    az: {
        title: "Ma Cocotte | Nizami filialı",
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
        branchTitle: "Nizami filialı",
        branchDesc: "Nizami filialımız iki mərtəbədən ibarət geniş restoran tipidir. Birinci mərtəbədə salon və iki kabinet, ikinci mərtəbədə isə VIP otaq və mənzərəli iki otaq yerləşir. Ümumi sahəsi 300 m² təşkil edir. 15 ədəd 2 nəfərlik və 33 ədəd 4 nəfərlik masa ilə 150–160 nəfərlik qonaq tutumu mövcuddur. Nizami filialımız tam heyəti ilə sizlərin xidmətindədir.",
        copyright: "© 2025 Ma Cocotte"
    },
    en: {
        title: "Ma Cocotte | Nizami Branch",
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
        branchTitle: "Nizami Branch",
        branchDesc: "Our Nizami branch is a spacious two-story restaurant. The first floor has a hall and two private rooms, while the second floor features a VIP room and two scenic rooms. It has a total area of 300 m². With 15 tables for 2 people and 33 tables for 4 people, it offers a capacity of 150–160 guests. Our Nizami branch is at your service with its full staff.",
        copyright: "© 2025 Ma Cocotte"
    },
    fr: {
        title: "Ma Cocotte | Succursale Nizami",
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
        branchTitle: "Succursale Nizami",
        branchDesc: "Notre succursale Nizami est un restaurant spacieux de deux étages. Le premier étage comprend une salle et deux salons privés, tandis que le deuxième étage dispose d'une salle VIP et de deux salles panoramiques. Elle a une superficie totale de 300 m². Avec 15 tables pour 2 personnes et 33 tables pour 4 personnes, elle offre une capacité de 150 à 160 clients. Notre succursale Nizami est à votre service avec son personnel complet.",
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
    
    document.querySelector('.nizami h2').textContent = translations[lang].branchTitle;
    document.querySelector('.nizami p').textContent = translations[lang].branchDesc;
    
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