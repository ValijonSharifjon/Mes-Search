export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Домой' },
    { href: '/services', key: 'services', label: 'Услуги' },
    { href: '/clinics', key: 'clinics', label: 'Клиники' },
    { href: '/doctors', key: 'doctors ', label: 'Докторы ' },
    { href: '/about_us', key: 'about_us', label: 'О нас' },
];

export const WE_OFFER = [
    {icon: '/WhiteSearchIcon.svg', key: 'search', label: 'Удобный поиск'},
    {icon: '/DoctorsIcon.png', key: 'doctors', label: 'Врачи высшей квалификации'},
    {icon: '/BookingIcon.svg', key: 'booking', label: 'Бронирование очереди'},
    {icon: '/ConsultationIcon.svg', key: 'consultation', label: 'Онлайн консультации'},
]



export const CLINICS = [
    {
        logo: '/akfa.png',
        key: 'akfa',
        grade_quantity: '4.9 (120)',
        name: 'Akfa Medline',
        working_hours: '9:00 - 19:00 Пн-Пт',
        address: 'г.Ташкент, Алмазарский район, ул. Кичик Халка йули, 5А',
        tel: '+998 71 203-30-03, 1141',
        href: '/',
        width: 138,
        height: 64
    },
    {
        logo: '/nano.png',
        key: 'nano',
        grade_quantity: '4.7 (100)',
        name: 'Nano Medical Clinic',
        working_hours: '9:00 - 19:00 Пн-Пт',
        address: 'г.Ташкент, Алмазарский район, ул. Кичик Халка йули, 5А',
        tel: '+998 71 203-30-03, 1141',
        href: '/',
        width: 131,
        height: 64
    },
    {
        logo: '/prof.png',
        key: 'nano',
        grade_quantity: '4.5 (70)',
        name: 'Prof Med Service',
        working_hours: '9:00 - 19:00 Пн-Пт',
        address: 'г.Ташкент, Алмазарский район, ул. Кичик Халка йули, 5А',
        tel: '+998 71 203-30-03, 1141',
        href: '/',
        width: 78,
        height: 64
    },
    {
        logo: '/city.png',
        key: 'nano',
        grade_quantity: '4.6 (55)',
        name: 'Citymed clinic',
        working_hours: '9:00 - 19:00 Пн-Пт',
        address: 'г.Ташкент, Алмазарский район, ул. Кичик Халка йули, 5А',
        tel: '+998 71 203-30-03, 1141',
        href: '/',
        width: 176,
        height: 51
    }
]

export const DOCTORS = [
    {image: "/doctor1.png",name: "Алексей Петров",specialization: "Кардиолог",grade_quantity: '4.9 (120)'},
    {image: "/doctor2.png",name: "Анна Михайлова",specialization: "Отоларинголог",grade_quantity: '4.5 (70)'},
    {image: "/doctor3.png",name: "Максим Соколов",specialization: "Ортопед",grade_quantity: '4.7 (92)'},
    {image: "/doctor4.png",name: "Екатерина Иванова",specialization: "Педиатр",grade_quantity: '4.7 (150)'},
]

export const REVIEWS = [
    {
        icon: "/reviewer1.png",
        full_name: "Валижон Шарифжонов",
        location:"Ташкент",
        comment:"Я недавно пользовалась вашим сайтом для поиска педиатра для своего ребенка." +
            " Очень довольна результатом! Сайт легко найти подходящего врача," +
            " и процесс бронирования был быстрым и простым. Врач, которого мы выбрали," +
            " оказался замечательным профессионалом с добрым и понимающим отношением к детям."
    }
]

export const NEWS = [
    {image:"/newImage1.png",date:"26.10.2023",title:"Секреты Здоровья: Как Поддерживать Оптимальный Вес"},
    {image:"/newImage2.png",date:"24.10.2023",title:"Мать и Ребенок: Забота о Здоровье в Раннем Детстве"},
    {image:"/newImage3.png",date:"22.10.2023",title:"Поддержание Здоровья: Стратегии и Советы"},
    {image:"/newImage4.png",date:"20.10.2023",title:"Важность Профилактики"}
]

export const FOOTER_LINKS = [
    {
        title: "Меню",
        href: "/",
        links: [
            {name:"Домой", href: "/"},
            {name:"Услуги", href: "/"},
            {name:"Клиники", href: "/"},
            {name:"Докторы", href: "/"},
            {name:"О нас", href: "/"}
        ]
    },
    {
        title: "Поддержка",
        href: "/",
        links: [
            {name:"Условия использования", href: "/"},
            {name:"Политика конфиденциальности", href: "/"},
            {name:"Часто задаваемые вопросы", href: "/"},
        ]
    },
]

export const INSTRUCTION = [
    {index: '1', description: 'Найдите врача, которого вы хотите посетить'},
    {index: '2', description: 'Нажмите кнопку "Записаться на врача"'},
    {index: '3', description: 'Введите свои контактные данные'},
    {index: '4', description: 'Выберите дату и время приема'},
    {index: '5', description: 'Нажмите кнопку "Записаться"'},
]