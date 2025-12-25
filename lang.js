// Language translations for MyLirc website
const translations = {
    es: {
        // Header
        tagline: "Cliente IRC Moderno para Android",

        // Main page
        chooseVersion: "Elige Tu Versión",
        free: "Gratis",
        pro: "Pago único",
        recommended: "RECOMENDADO",

        // Features
        features: {
            basicIRC: "Conexiones IRC básicas",
            ssl: "SSL/TLS encryption",
            notifications: "Notificaciones",
            materialDesign: "Interfaz Material Design",
            darkMode: "Modo oscuro",
            multiLanguage: "Multi-idioma (EN/ES)",
            multipleServers: "Múltiples servidores simultáneos",
            unlimitedLogs: "Registro de chat ilimitado",
            advancedSearch: "Búsqueda avanzada",
            customThemes: "Temas personalizados",
            noAds: "Sin anuncios",
            prioritySupport: "Soporte prioritario",
            earlyUpdates: "Actualizaciones anticipadas",
            exportImport: "Exportar/Importar configuración",
            customCommands: "Comandos personalizados",
            allFree: "Todo de Free +"
        },

        // Download buttons
        downloadFree: "Descargar Free (Próximamente)",
        downloadPro: "Descargar Pro (Próximamente)",

        // Main features section
        mainFeatures: "Características Principales",
        security: "Seguridad",
        securityDesc: "Encriptación AES-256 para contraseñas, soporte SSL/TLS, y almacenamiento seguro local.",
        modernUI: "Interfaz Moderna",
        modernUIDesc: "Diseño Material Design con modo oscuro, animaciones fluidas y navegación intuitiva.",
        smartNotifications: "Notificaciones Inteligentes",
        smartNotificationsDesc: "Recibe alertas de menciones, mensajes privados y palabras clave personalizadas.",
        performance: "Rendimiento",
        performanceDesc: "Optimizado para bajo consumo de batería y uso eficiente de recursos.",
        multiLang: "Multi-idioma",
        multiLangDesc: "Disponible en inglés y español, con más idiomas en desarrollo.",
        privacy: "Privacidad",
        privacyDesc: "Sin seguimiento, sin analytics, sin compartir datos. Todo permanece en tu dispositivo.",

        // Footer
        privacyPolicy: "Política de Privacidad",
        contact: "Contacto",
        rights: "Todos los derechos reservados"
    },

    en: {
        // Header
        tagline: "Modern IRC Client for Android",

        // Main page
        chooseVersion: "Choose Your Version",
        free: "Free",
        pro: "One-time payment",
        recommended: "RECOMMENDED",

        // Features
        features: {
            basicIRC: "Basic IRC connections",
            ssl: "SSL/TLS encryption",
            notifications: "Notifications",
            materialDesign: "Material Design interface",
            darkMode: "Dark mode",
            multiLanguage: "Multi-language (EN/ES)",
            multipleServers: "Multiple simultaneous servers",
            unlimitedLogs: "Unlimited chat logging",
            advancedSearch: "Advanced search",
            customThemes: "Custom themes",
            noAds: "No ads",
            prioritySupport: "Priority support",
            earlyUpdates: "Early updates",
            exportImport: "Export/Import configuration",
            customCommands: "Custom commands",
            allFree: "All Free features +"
        },

        // Download buttons
        downloadFree: "Download Free (Coming Soon)",
        downloadPro: "Download Pro (Coming Soon)",

        // Main features section
        mainFeatures: "Main Features",
        security: "Security",
        securityDesc: "AES-256 encryption for passwords, SSL/TLS support, and secure local storage.",
        modernUI: "Modern UI",
        modernUIDesc: "Material Design interface with dark mode, smooth animations, and intuitive navigation.",
        smartNotifications: "Smart Notifications",
        smartNotificationsDesc: "Get alerts for mentions, private messages, and custom keyword highlights.",
        performance: "Performance",
        performanceDesc: "Optimized for low battery consumption and efficient resource usage.",
        multiLang: "Multi-language",
        multiLangDesc: "Available in English and Spanish, with more languages in development.",
        privacy: "Privacy",
        privacyDesc: "No tracking, no analytics, no data sharing. Everything stays on your device.",

        // Footer
        privacyPolicy: "Privacy Policy",
        contact: "Contact",
        rights: "All rights reserved"
    }
};

// Language switcher functionality
function setLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    updateContent(lang);
    updateLanguageSelector(lang);
}

function updateContent(lang) {
    const t = translations[lang];

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = t;

        for (const k of keys) {
            value = value[k];
        }

        if (value) {
            element.textContent = value;
        }
    });
}

function updateLanguageSelector(lang) {
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-lang') === lang) {
            option.classList.add('active');
        }
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    setLanguage(savedLang);
});
