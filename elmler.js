// Tərcümələr obyekti
const translations = {
    az: {
        title: "Ma Cocotte | Elmlər filialı",
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
        branchTitle: "Elmlər filialı",
        branchDesc: "Elmlər filialımız iki mərtəbədən ibarət geniş restoran tipidir. Birinci mərtəbədə açıq salon və iki kabinet yerləşir, ikinci mərtəbədə isə VIP otaq və mənzərəli salon mövcuddur. Ümumi sahəsi 220 m² təşkil edir. 12 ədəd 2 nəfərlik və 25 ədəd 4 nəfərlik masa ilə 120–130 nəfərlik tutum təmin edilir. Elmlər filialımız tam heyəti ilə qonaqların xidmətindədir.",
        copyright: "© 2025 Ma Cocotte"
    },
    en: {
        title: "Ma Cocotte | Elmler Branch",
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
        branchTitle: "Elmler Branch",
        branchDesc: "Our Elmler branch is a spacious two-story restaurant. The first floor features an open hall and two private rooms, while the second floor has a VIP room and a scenic hall. It has a total area of 220 m². With 12 tables for 2 people and 25 tables for 4 people, it provides a capacity of 120–130 guests. Our Elmler branch is at your service with its full staff.",
        copyright: "© 2025 Ma Cocotte"
    },
    fr: {
        title: "Ma Cocotte | Succursale Elmler",
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
        branchTitle: "Succursale Elmler",
        branchDesc: "Notre succursale Elmler est un restaurant spacieux de deux étages. Le premier étage comprend une salle ouverte et deux salons privés, tandis que le deuxième étage dispose d'une salle VIP et d'une salle panoramique. Elle a une superficie totale de 220 m². Avec 12 tables pour 2 personnes et 25 tables pour 4 personnes, elle offre une capacité de 120 à 130 clients. Notre succursale Elmler est à votre service avec son personnel complet.",
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
    document.querySelector('.elmler h2').textContent = translations[lang].branchTitle;
    document.querySelector('.elmler p').textContent = translations[lang].branchDesc;
    
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