// Tərcümələr obyekti
const translations = {
    az: {
        title: "Ma Cocotte | Haqqımızda",
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
        whyTitle: "Niyə Ma Cocotte?",
        whyDesc: "Ma Cocotte olaraq qonaqlarımıza sadəcə yemək deyil, əsl fransız mətbəxi təcrübəsi təqdim edirik. Hər detal — istifadə etdiyimiz məhsullardan tutmuş, servisin keyfiyyətinə qədər — xüsusi diqqətlə seçilir. Peşəkar aşpaz komandamız klassik fransız reseptlərini müasir toxunuşlarla hazırlayaraq hər zövqə uyğun dadlar yaradır. Rahat və zövqlü interyerimiz, səmimi atmosferimiz və diqqətli heyətimiz sayəsində Ma Cocotte ailəvi görüşlər, dostlarla xoş anlar və xüsusi günlər üçün ideal məkandır.",
        teamTitle: "Bizim komandamız",
        teamDesc: "Bizim komandamız peşəkarlıq, məsuliyyət və qonaqpərvərlik dəyərləri üzərində formalaşıb. Hər bir üzvümüz detallara diqqət edərək qonaqlarımıza rahat, səmimi və yüksək keyfiyyətli xidmət təqdim etməyə çalışır. Sizin məmnuniyyətiniz bizim üçün ən böyük motivasiyadır.",
        card1: "Peşəkar və gülərüz komandamız hər zaman rahat və səmimi atmosfer yaratmaq üçün çalışır.",
        card2: "Ma Cocotte fransız mətbəxinin zərifliyini müasir üslubla birləşdirən restoran konseptidir. Burada hər detal dad və rahatlıq üzərində qurulub.",
        card3: "Qonaqlarımıza keyfiyyətli məhsullar, diqqətli xidmət və unudulmaz dad təcrübəsi təqdim etmək.",
        copyright: "© 2025 Ma Cocotte"
    },
    en: {
        title: "Ma Cocotte | About Us",
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
        whyTitle: "Why Ma Cocotte?",
        whyDesc: "At Ma Cocotte, we offer our guests not just food, but a true French culinary experience. Every detail — from the ingredients we use to the quality of service — is carefully selected. Our professional chef team creates flavors for every taste by preparing classic French recipes with modern touches. With our comfortable and stylish interior, warm atmosphere, and attentive staff, Ma Cocotte is the ideal place for family gatherings, pleasant moments with friends, and special occasions.",
        teamTitle: "Our Team",
        teamDesc: "Our team is built on values of professionalism, responsibility, and hospitality. Each member strives to provide our guests with comfortable, warm, and high-quality service by paying attention to details. Your satisfaction is our greatest motivation.",
        card1: "Our professional and friendly team always works to create a comfortable and warm atmosphere.",
        card2: "Ma Cocotte is a restaurant concept that combines the elegance of French cuisine with modern style. Every detail here is built on taste and comfort.",
        card3: "To offer our guests quality products, attentive service, and an unforgettable taste experience.",
        copyright: "© 2025 Ma Cocotte"
    },
    fr: {
        title: "Ma Cocotte | À Propos",
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
        whyTitle: "Pourquoi Ma Cocotte?",
        whyDesc: "Chez Ma Cocotte, nous offrons à nos clients non seulement de la nourriture, mais une véritable expérience culinaire française. Chaque détail — des ingrédients que nous utilisons à la qualité du service — est soigneusement sélectionné. Notre équipe de chefs professionnels crée des saveurs pour tous les goûts en préparant des recettes françaises classiques avec des touches modernes. Avec notre intérieur confortable et élégant, notre atmosphère chaleureuse et notre personnel attentif, Ma Cocotte est l'endroit idéal pour les réunions de famille, les moments agréables entre amis et les occasions spéciales.",
        teamTitle: "Notre Équipe",
        teamDesc: "Notre équipe est construite sur des valeurs de professionnalisme, de responsabilité et d'hospitalité. Chaque membre s'efforce de fournir à nos clients un service confortable, chaleureux et de haute qualité en prêtant attention aux détails. Votre satisfaction est notre plus grande motivation.",
        card1: "Notre équipe professionnelle et sympathique travaille toujours pour créer une atmosphère confortable et chaleureuse.",
        card2: "Ma Cocotte est un concept de restaurant qui combine l'élégance de la cuisine française avec un style moderne. Chaque détail ici est construit sur le goût et le confort.",
        card3: "Offrir à nos clients des produits de qualité, un service attentif et une expérience gustative inoubliable.",
        copyright: "© 2025 Ma Cocotte"
    }
};

let currentLang = 'az';

function changeLanguage(lang) {
    currentLang = lang;
    
    document.title = translations[lang].title;
    
    // Menyu
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
    
    // Haqqımızda məzmunu
    document.querySelector('.haqqimizda .right h3').textContent = translations[lang].whyTitle;
    document.querySelector('.haqqimizda .right p').textContent = translations[lang].whyDesc;
    document.querySelector('.haqqimizda2 .right h3').textContent = translations[lang].teamTitle;
    document.querySelector('.haqqimizda2 .right p').textContent = translations[lang].teamDesc;
    
    // Kartlar
    const cards = document.querySelectorAll('.haqqimizda-card .card p');
    if (cards[0]) cards[0].textContent = translations[lang].card1;
    if (cards[1]) cards[1].textContent = translations[lang].card2;
    if (cards[2]) cards[2].textContent = translations[lang].card3;
    
    // Footer
    const footerParagraphs = document.querySelectorAll('.footer p');
    if (footerParagraphs[1]) footerParagraphs[1].textContent = translations[lang].copyright;
    
    // Aktiv düymə
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