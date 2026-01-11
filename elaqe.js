// Tərcümələr obyekti
const translations = {
    az: {
        title: "Ma Cocotte | Əlaqə",
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
        viewDetails: "Ətraflı bax",
        contactTitle: "Bizimlə əlaqə saxlayın",
        nameLabel: "Adınız:",
        namePlaceholder: "Adınızı daxil edin...",
        emailLabel: "E-mailiniz:",
        emailPlaceholder: "Emailinizi daxil edin...",
        phoneLabel: "Telefon nömrəniz:",
        phonePlaceholder: "Telefon nömrənizi daxil edin...",
        messageLabel: "Mesajınız:",
        messagePlaceholder: "Mesajınız...",
        sendButton: "Göndər",
        copyright: "© 2025 Ma Cocotte"
    },
    en: {
        title: "Ma Cocotte | Contact",
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
        viewDetails: "View Details",
        contactTitle: "Contact Us",
        nameLabel: "Your Name:",
        namePlaceholder: "Enter your name...",
        emailLabel: "Your Email:",
        emailPlaceholder: "Enter your email...",
        phoneLabel: "Your Phone Number:",
        phonePlaceholder: "Enter your phone number...",
        messageLabel: "Your Message:",
        messagePlaceholder: "Your message...",
        sendButton: "Send",
        copyright: "© 2025 Ma Cocotte"
    },
    fr: {
        title: "Ma Cocotte | Contact",
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
        viewDetails: "Voir les détails",
        contactTitle: "Contactez-nous",
        nameLabel: "Votre Nom:",
        namePlaceholder: "Entrez votre nom...",
        emailLabel: "Votre Email:",
        emailPlaceholder: "Entrez votre email...",
        phoneLabel: "Votre Numéro de Téléphone:",
        phonePlaceholder: "Entrez votre numéro...",
        messageLabel: "Votre Message:",
        messagePlaceholder: "Votre message...",
        sendButton: "Envoyer",
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
    
    // Sol tərəfdəki kartlardakı düymələri dəyişdir
    const cardButtons = document.querySelectorAll('.left .card button a');
    cardButtons.forEach(btn => {
        btn.textContent = translations[lang].viewDetails;
    });
    
    // Sağ tərəfdəki forma elementlərini dəyişdir
    document.querySelector('.right h2').textContent = translations[lang].contactTitle;
    document.querySelector('label[for="ad"]').textContent = translations[lang].nameLabel;
    document.querySelector('#ad').placeholder = translations[lang].namePlaceholder;
    document.querySelector('label[for="email"]').textContent = translations[lang].emailLabel;
    document.querySelector('#email').placeholder = translations[lang].emailPlaceholder;
    document.querySelector('label[for="tel"]').textContent = translations[lang].phoneLabel;
    document.querySelector('#tel').placeholder = translations[lang].phonePlaceholder;
    document.querySelector('label[for="mesaj"]').textContent = translations[lang].messageLabel;
    document.querySelector('#mesaj').placeholder = translations[lang].messagePlaceholder;
    document.querySelector('.right button').textContent = translations[lang].sendButton;
    
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