import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Переводы для Navbar
      navbar: {
        home: 'Home',
        destinations: 'Destinations',
        blog: 'Blog',
        about: 'About',
        reviews: 'Reviews',
        contact: 'Contact',
      },

      // Переводы для Home
      home: {
        title: 'Welcome to CEO Travel',
        subtitle: 'Discover the Best Travel Experiences',
        latestNews: 'Latest News',
        news: {
          egypt: 'Explore the Pyramids of Egypt',
          maldives: 'Relax on the Beaches of Maldives',
          china: 'Discover the Great Wall of China',
          thailand: 'Experience the Culture of Thailand',
          vietnam: 'Adventure in Vietnam',
          turkey: 'Visit Historic Istanbul',
          uae: 'Discover Modern Dubai',
          czechia: 'Explore Prague’s Charm',
          montenegro: 'Enjoy Montenegro’s Coast',
          malaysia: 'Experience Malaysia’s Diversity',
          azerbaijan: 'Discover Baku’s Heritage',
          georgia: 'Explore the Caucasus in Georgia',
        },
      },

      // Переводы для Blog
      blog: {
        title: 'Travel Blog',
        subtitle: 'Stories, Tips, and Insights from Our Travelers',
        posts: {
          samarkand: {
            title: 'A Journey Through Samarkand',
            description: 'Discover the ancient city of Samarkand, a gem on the Silk Road.',
          },
          uzbekCuisine: {
            title: 'Tasting Uzbek Cuisine',
            description: 'A guide to the delicious flavors of Uzbekistan.',
          },
          chimgan: {
            title: 'Hiking in Chimgan Mountains',
            description: 'Explore the stunning landscapes of Chimgan.',
          },
          bukhara: {
            title: 'Bukhara: A Historical Treasure',
            description: 'Uncover the history of Bukhara, a UNESCO World Heritage site.',
          },
        },
      },

      // Переводы для About
      about: {
        title: 'About Us',
        description: 'We are a travel agency dedicated to providing unforgettable experiences.',
        destinations: 'Our Destinations',
        destinationsList: {
          egypt: 'Egypt',
          maldives: 'Maldives',
          china: 'China',
          thailand: 'Thailand',
          vietnam: 'Vietnam',
          turkey: 'Turkey',
          uae: 'UAE',
          czechia: 'Czechia',
          montenegro: 'Montenegro',
          malaysia: 'Malaysia',
          azerbaijan: 'Azerbaijan',
          georgia: 'Georgia',
          samarkand: 'Samarkand',
          bukhara: 'Bukhara',
          khiva: 'Khiva',
          tashkent: 'Tashkent',
        },
      },

      // Переводы для Reviews
      reviews: {
        title: 'Traveler Reviews',
        subtitle: 'Hear from Our Happy Travelers',
        reviewsList: {
          ali: {
            name: 'Ali',
            comment: 'Amazing trip to Samarkand! Highly recommend CEO Travel.',
          },
          zara: {
            name: 'Zara',
            comment: 'The Maldives package was perfect. Thank you!',
          },
          jamshid: {
            name: 'Jamshid',
            comment: 'Great experience in Bukhara. Everything was well-organized.',
          },
          nodira: {
            name: 'Nodira',
            comment: 'Loved the Chimgan hiking tour. Fantastic service!',
          },
          kamola: {
            name: 'Kamola',
            comment: 'Tashkent was beautiful. I’ll book again with CEO Travel.',
          },
        },
      },

      // Переводы для Destinations
      destinations: {
        title: 'Explore Our Destinations',
        continents: 'Continents',
        popularDestinations: 'Popular Destinations',
      },

      // Переводы для DestinationDetails
      destinationDetails: {
        travelRequirements: 'Travel Requirements',
        visa: 'Visa Information',
        luggage: 'Luggage Tips',
        documents: 'Required Documents',
        travelTips: 'Travel Tips',
        culture: 'Cultural Insights',
        destinations: 'Top Destinations',
        packages: 'Available Packages',
        standard: 'Standard Package',
        luxury: 'Luxury Package',
        adventure: 'Adventure Package',
        bookNow: 'Book Now',
      },

      // Переводы для Contact
      contact: {
        title: 'Contact Us',
        subtitle: 'Get in Touch with Us',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
      },

      // Переводы для Footer
      footer: {
        about: 'About Us',
        description: 'We are a travel agency dedicated to providing the best travel experiences.',
        contact: 'Contact Us',
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        followUs: 'Follow Us',
        rights: 'All rights reserved.',
      },
    },
  },
  ru: {
    translation: {
      // Переводы для Navbar
      navbar: {
        home: 'Главная',
        destinations: 'Направления',
        blog: 'Блог',
        about: 'О нас',
        reviews: 'Отзывы',
        contact: 'Контакты',
      },

      // Переводы для Home
      home: {
        title: 'Добро пожаловать в CEO Travel',
        subtitle: 'Откройте для себя лучшие путешествия',
        latestNews: 'Последние новости',
        news: {
          egypt: 'Исследуйте пирамиды Египта',
          maldives: 'Отдых на пляжах Мальдив',
          china: 'Откройте Великую Китайскую стену',
          thailand: 'Познакомьтесь с культурой Таиланда',
          vietnam: 'Приключения во Вьетнаме',
          turkey: 'Посетите исторический Стамбул',
          uae: 'Откройте современный Дубай',
          czechia: 'Исследуйте очарование Праги',
          montenegro: 'Насладитесь побережьем Черногории',
          malaysia: 'Испытайте разнообразие Малайзии',
          azerbaijan: 'Откройте наследие Баку',
          georgia: 'Исследуйте Кавказ в Грузии',
        },
      },

      // Переводы для Blog
      blog: {
        title: 'Путешественнический блог',
        subtitle: 'Истории, советы и впечатления от наших путешественников',
        posts: {
          samarkand: {
            title: 'Путешествие по Самарканду',
            description: 'Откройте для себя древний город Самарканд, жемчужину Шелкового пути.',
          },
          uzbekCuisine: {
            title: 'Попробуйте узбекскую кухню',
            description: 'Руководство по восхитительным вкусам Узбекистана.',
          },
          chimgan: {
            title: 'Поход в горах Чимгана',
            description: 'Исследуйте потрясающие пейзажи Чимгана.',
          },
          bukhara: {
            title: 'Бухара: Историческое сокровище',
            description: 'Раскройте историю Бухары, объекта Всемирного наследия ЮНЕСКО.',
          },
        },
      },

      // Переводы для About
      about: {
        title: 'О нас',
        description: 'Мы - туристическое агентство, стремящееся предоставить незабываемые впечатления.',
        destinations: 'Наши направления',
        destinationsList: {
          egypt: 'Египет',
          maldives: 'Мальдивы',
          china: 'Китай',
          thailand: 'Таиланд',
          vietnam: 'Вьетнам',
          turkey: 'Турция',
          uae: 'ОАЭ',
          czechia: 'Чехия',
          montenegro: 'Черногория',
          malaysia: 'Малайзия',
          azerbaijan: 'Азербайджан',
          georgia: 'Грузия',
          samarkand: 'Самарканд',
          bukhara: 'Бухара',
          khiva: 'Хива',
          tashkent: 'Ташкент',
        },
      },

      // Переводы для Reviews
      reviews: {
        title: 'Отзывы путешественников',
        subtitle: 'Узнайте мнение наших довольных клиентов',
        reviewsList: {
          ali: {
            name: 'Али',
            comment: 'Удивительная поездка в Самарканд! Очень рекомендую CEO Travel.',
          },
          zara: {
            name: 'Зара',
            comment: 'Пакет на Мальдивы был идеальным. Спасибо!',
          },
          jamshid: {
            name: 'Джамшид',
            comment: 'Отличный опыт в Бухаре. Все было хорошо организовано.',
          },
          nodira: {
            name: 'Нодира',
            comment: 'Понравился поход в Чимгане. Отличный сервис!',
          },
          kamola: {
            name: 'Камола',
            comment: 'Ташкент был прекрасен. Забронирую снова через CEO Travel.',
          },
        },
      },

      // Переводы для Destinations
      destinations: {
        title: 'Исследуйте наши направления',
        continents: 'Континенты',
        popularDestinations: 'Популярные направления',
      },

      // Переводы для DestinationDetails
      destinationDetails: {
        travelRequirements: 'Требования для путешествия',
        visa: 'Информация о визе',
        luggage: 'Советы по багажу',
        documents: 'Необходимые документы',
        travelTips: 'Советы путешественникам',
        culture: 'Культурные особенности',
        destinations: 'Лучшие направления',
        packages: 'Доступные пакеты',
        standard: 'Стандартный пакет',
        luxury: 'Люксовый пакет',
        adventure: 'Приключенческий пакет',
        bookNow: 'Забронировать сейчас',
      },

      // Переводы для Contact
      contact: {
        title: 'Свяжитесь с нами',
        subtitle: 'Будем рады вашему сообщению',
        name: 'Имя',
        email: 'Электронная почта',
        message: 'Сообщение',
        send: 'Отправить сообщение',
      },

      // Переводы для Footer
      footer: {
        about: 'О нас',
        description: 'Мы - туристическое агентство, стремящееся предоставить лучшие впечатления от путешествий.',
        contact: 'Контакты',
        address: 'Адрес',
        phone: 'Телефон',
        email: 'Электронная почта',
        followUs: 'Следите за нами',
        rights: 'Все права защищены.',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Язык по умолчанию
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

