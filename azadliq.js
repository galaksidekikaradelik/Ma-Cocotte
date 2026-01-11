// Tərcümələr obyekti
const translations = {
    az: {
        title: "Ma Cocotte | Azadlıq filialı",
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
        branchTitle: "Azadlıq filialı",
        branchDesc: "Azadlıq filialımız kiçik və rahat bir kafe şəklində dizayn edilib. Ümumi sahəsi 80 m² təşkil edir və yalnız bir mərtəbədən ibarətdir. Burada 8 ədəd 2 nəfərlik və 6 ədəd 4 nəfərlik masa mövcuddur. 30–35 nəfərlik qonaq tutumu ilə Azadlıq filialımız, rahat atmosferi və diqqətli heyəti ilə xidmətinizdədir.",
        copyright: "© 2025 Ma Cocotte"
    },
    en: {
        title: "Ma Cocotte | Azadliq Branch",
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
        branchTitle: "Azadliq Branch",
        branchDesc: "Our Azadliq branch is designed as a small and cozy cafe. It has a total area of 80 m² and consists of only one floor. There are 8 tables for 2 people and 6 tables for 4 people. With a capacity of 30–35 guests, our Azadliq branch is at your service with its comfortable atmosphere and attentive staff.",
        copyright: "© 2025 Ma Cocotte"
    },
    fr: {
        title: "Ma Cocotte | Succursale Azadliq",
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
        branchTitle: "Succursale Azadliq",
        branchDesc: "Notre succursale Azadliq est conçue comme un petit café confortable. Elle a une superficie totale de 80 m² et se compose d'un seul étage. Il y a 8 tables pour 2 personnes et 6 tables pour 4 personnes. Avec une capacité de 30 à 35 clients, notre succursale Azadliq est à votre service avec son atmosphère confortable et son personnel attentif.",
        copyright: "© 2025 Ma Cocotte"
    }
};

// Hazırkı dili saxlayan dəyişən
let currentLang = 'az';

// Dil dəyişdirmə funksiyası
function changeLanguage(lang) {
    currentLang = lang;
    
    // Səhifə başlığını dəyişdir
    document.title = translations[lang].title;
    
    // Menyu elementlərini dəyişdir
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
    
    // Filial məlumatlarını dəyişdir
    document.querySelector('.azadliq h2').textContent = translations[lang].branchTitle;
    document.querySelector('.azadliq p').textContent = translations[lang].branchDesc;
    
    // Footer mətnini dəyişdir
    const footerParagraphs = document.querySelectorAll('.footer p');
    if (footerParagraphs[1]) {
        footerParagraphs[1].textContent = translations[lang].copyright;
    }
    
    // Aktiv düyməni vurğula
    document.querySelectorAll('.language button').forEach(btn => {
        btn.style.background = 'rgba(255, 255, 255, 0.2)';
        btn.style.color = '#FFF8C9';
    });
    
    const activeBtn = document.querySelector(`button[data-lang="${lang}"]`);
    if (activeBtn) {
        activeBtn.style.background = '#FFF8C9';
        activeBtn.style.color = '#BEADFA';
    }
    
    // Dili localStorage-də saxla
    localStorage.setItem('selectedLanguage', lang);
}

// Səhifə yükləndikdə
document.addEventListener('DOMContentLoaded', function() {
    // Əvvəlki seçilmiş dili yüklə
    const savedLang = localStorage.getItem('selectedLanguage') || 'az';
    changeLanguage(savedLang);
    
    // Dil düymələrinə event listener əlavə et
    document.querySelectorAll('.language button').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
});