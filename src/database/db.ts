import { Continent } from '@/types'
import { v4 as uuidv4 } from 'uuid'

export const mostVisitedCities = [
  'Hong Kong',
  'Bangkok',
  'Londres',
  'Macau',
  'Cingapura',
  'Paris',
  'Dubai',
  'Cidade de Nova York',
  'Kuala Lumpur',
  'Istambul',
  'Délhi',
  'Antália',
  'Shenzhen',
  'Mumbai',
  'Puket',
  'Roma',
  'Tóquio',
  'Pattaya',
  'Taipei',
  'Meca',
  'Guangzhou',
  'Praga',
  'Medina',
  'Seul',
  'Amsterdã',
  'Agra',
  'Miami',
  'Osaca',
  'Los Angeles',
  'Xangai',
  'Cidade de Ho Chi Minh',
  'Denpasar',
  'Barcelona',
  'Las Vegas',
  'Milão',
  'Chenai',
  'Viena',
  'Johor Bahru',
  'Jaipur',
  'Cancún',
  'Berlim',
  'Cairo',
  'Atenas',
  'Orlando',
  'Moscou',
  'Veneza',
  'Madrid',
  'Halong',
  'Riyadh',
  'Dublin',
  'Florença',
  'Hanói',
  'Toronto',
  'Joanesburgo',
  'Sydney',
  'Munique',
  'Jacarta',
  'Pequim',
  'São Petersburgo',
  'Bruxelas',
  'Jerusalém',
  'Budapeste',
  'Lisboa',
  'Damã',
  'Ilha de Penang',
  'Iráklio',
  'Quioto',
  'Zhuhai',
  'Vancouver',
  'Chiang Mai',
  'Copenhage',
  'São Francisco',
  'Melbourne',
  'Cracóvia',
  'Marrakech',
  'Calcutá',
  'Cebu',
  'Auckland',
  'Tel Aviv',
  'Guilin',
  'Honolulu',
  'Hurghada',
  'Varsóvia',
  'Mugla',
  'Cidade de Buenos Aires',
  'Chiba',
  'Frankfurt',
  'Estocolmo',
  'Lima',
  'Da Nang',
  'Batam',
  'Nice',
  'Fukuoka',
  'Abu Dhabi',
  'Jeju',
  'Porto',
  'Rhodes',
  'Rio de Janeiro',
  'Krabi',
  'Bangalore',
]

export const citiesByCountry: Continent[] = [
  {
    id: uuidv4(),
    slug: 'america-do-norte',
    name: 'América do Norte',
    description:
      'A América do Norte é um subcontinente que compreende a porção setentrional do continente americano.',
    imageUrl:
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=1240&q=80',
    numberOfCountries: 3,
    totalLanguages: 37,
    countries: [
      {
        id: uuidv4(),
        name: 'EUA',
        flag: 'US',
        cities: [
          {
            id: uuidv4(),
            name: 'Nova York',
            imageUrl:
              'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            id: uuidv4(),
            name: 'Miami',
            imageUrl:
              'https://images.unsplash.com/photo-1589083130544-0d6a2926e519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            id: uuidv4(),
            name: 'Los Angeles',
            imageUrl:
              'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            id: uuidv4(),
            name: 'Las Vegas',
            imageUrl:
              'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80',
          },
          {
            id: uuidv4(),
            name: 'Orlando',
            imageUrl:
              'https://images.unsplash.com/photo-1618945372420-2470ece5277c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            id: uuidv4(),
            name: 'São Francisco',
            imageUrl:
              'https://images.unsplash.com/photo-1521464302861-ce943915d1c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
          },
          {
            id: uuidv4(),
            name: 'Honolulu',
            imageUrl:
              'https://images.unsplash.com/photo-1581720488341-a02fe8d6575d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'México',
        flag: 'MX',
        cities: [
          {
            id: uuidv4(),
            name: 'Cancún',
            imageUrl:
              'https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Canadá',
        flag: 'CA',
        cities: [
          {
            id: uuidv4(),
            name: 'Toronto',
            imageUrl:
              'https://images.unsplash.com/photo-1542704792-e30dac463c90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            id: uuidv4(),
            name: 'Vancouver',
            imageUrl:
              'https://images.unsplash.com/photo-1560814304-4f05b62af116?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
          },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    slug: 'america-do-sul',
    name: 'América do Sul',
    description:
      'A América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano. A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial.',
    imageUrl:
      'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5vcnRoZXJuJTIwYW1lcmljYXxlbnwwfHwwfHw%3D&auto=format&w=1240&q=60',
    numberOfCountries: 13,
    totalLanguages: 37,
    countries: [
      {
        id: uuidv4(),
        name: 'Brasil',
        flag: 'BR',
        cities: [
          {
            id: uuidv4(),
            name: 'Rio de Janeiro',
            imageUrl:
              'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Argentina',
        flag: 'AR',
        cities: [
          {
            id: uuidv4(),
            name: 'Cidade de Buenos Aires',
            imageUrl:
              'https://images.unsplash.com/photo-1561816646-b5b12a9b92ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Peru',
        flag: 'PE',
        cities: [
          {
            id: uuidv4(),
            name: 'Lima',
            imageUrl:
              'https://images.unsplash.com/photo-1585318822499-a5a2aa250b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80',
          },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    slug: 'asia',
    name: 'Ásia',
    description:
      'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial.',
    imageUrl:
      'https://images.unsplash.com/photo-1513415564515-763d91423bdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8QXNpYXxlbnwwfHwwfHw%3D&auto=format&w=1240&q=60',
    numberOfCountries: 49,
    totalLanguages: 199,
    countries: [
      {
        id: uuidv4(),
        name: 'Arábia Saudita',
        flag: 'SA',
        cities: [
          {
            id: uuidv4(),
            name: 'Meca',
            imageUrl:
              'https://images.unsplash.com/photo-1513072064285-240f87fa81e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
          },
          {
            id: uuidv4(),
            name: 'Medina',
            imageUrl:
              'https://images.unsplash.com/photo-1504900385349-4cd5a6ac2874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
          },
          {
            id: uuidv4(),
            name: 'Riyadh',
            imageUrl:
              'https://images.unsplash.com/photo-1609321599814-e3a55183568d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
          },
          {
            id: uuidv4(),
            name: 'Damã',
            imageUrl:
              'https://images.unsplash.com/photo-1656498933234-fcfbd7f46eca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1028&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'China',
        flag: 'CN',
        cities: [
          {
            id: uuidv4(),
            name: 'Hong Kong',
            imageUrl:
              'https://images.unsplash.com/photo-1518599807935-37015b9cefcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            id: uuidv4(),
            name: 'Macau',
            imageUrl:
              'https://images.unsplash.com/photo-1556629538-fc3eba61504e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8TWFjYXV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          },
          {
            id: uuidv4(),
            name: 'Shenzhen',
            imageUrl:
              'https://images.unsplash.com/photo-1522614288668-a697127e9b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            id: uuidv4(),
            name: 'Guangzhou',
            imageUrl:
              'https://images.unsplash.com/photo-1553826059-7a090c4a3447?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
          },
          {
            id: uuidv4(),
            name: 'Xangai',
            imageUrl:
              'https://images.unsplash.com/photo-1578495959700-a617c3600026?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
          },
          {
            id: uuidv4(),
            name: 'Pequim',
            imageUrl:
              'https://images.unsplash.com/photo-1584872589930-e99fe5bf4408?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80',
          },
          {
            id: uuidv4(),
            name: 'Zhuhai',
            imageUrl:
              'https://images.unsplash.com/photo-1568947577887-1bcb41962122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            id: uuidv4(),
            name: 'Guilin',
            imageUrl:
              'https://images.unsplash.com/photo-1587421324987-3449402f6f57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Cingapura',
        flag: 'SG',
        cities: [
          {
            id: uuidv4(),
            name: 'Cidade de Cingapura',
            imageUrl:
              'https://images.unsplash.com/photo-1555217851-6141535bd771?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Coreia do Sul',
        flag: 'KR',
        cities: [
          {
            id: uuidv4(),
            name: 'Seul',
            imageUrl:
              'https://images.unsplash.com/photo-1601621915196-2621bfb0cd6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
          },
          {
            id: uuidv4(),
            name: 'Jeju',
            imageUrl:
              'https://images.unsplash.com/photo-1562680802-9cf8b15f419d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Emirados Árabes',
        flag: 'AE',
        cities: [
          {
            id: uuidv4(),
            name: 'Dubai',
            imageUrl:
              'https://images.unsplash.com/photo-1546412414-e1885259563a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          },
          {
            id: uuidv4(),
            name: 'Abu Dhabi',
            imageUrl:
              'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Filipinas',
        flag: 'PH',
        cities: [
          {
            id: uuidv4(),
            name: 'Cebu',
            imageUrl:
              'https://images.unsplash.com/photo-1582078306176-63f6eeb5e846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Índia',
        flag: 'IN',
        cities: [
          {
            id: uuidv4(),
            name: 'Délhi',
            imageUrl:
              'https://images.unsplash.com/photo-1583585176735-382ef456f966?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            id: uuidv4(),
            name: 'Mumbai',
            imageUrl:
              'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
          },
          {
            id: uuidv4(),
            name: 'Agra',
            imageUrl:
              'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
          },
          {
            id: uuidv4(),
            name: 'Chennai',
            imageUrl:
              'https://images.unsplash.com/photo-1593253767414-d58f6e2342ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80',
          },
          {
            id: uuidv4(),
            name: 'Jaipur',
            imageUrl:
              'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
          },
          {
            id: uuidv4(),
            name: 'Calcutá',
            imageUrl:
              'https://images.unsplash.com/photo-1626198226928-617fc6c6203e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            id: uuidv4(),
            name: 'Bangalore',
            imageUrl:
              'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Indonésia',
        flag: 'ID',
        cities: [
          {
            id: uuidv4(),
            name: 'Denpasar',
            imageUrl:
              'https://images.unsplash.com/photo-1543055932-84b75bfd3a77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80',
          },
          {
            id: uuidv4(),
            name: 'Jacarta',
            imageUrl:
              'https://images.unsplash.com/photo-1617687611017-48db8d42fd8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            id: uuidv4(),
            name: 'Batam',
            imageUrl:
              'https://images.unsplash.com/photo-1669347597363-322b46c35619?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Israel',
        flag: 'IL',
        cities: [
          {
            id: uuidv4(),
            name: 'Jerusalém',
            imageUrl:
              'https://images.unsplash.com/photo-1552423314-cf29ab68ad73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            id: uuidv4(),
            name: 'Tel Aviv',
            imageUrl:
              'https://images.unsplash.com/photo-1580681796086-1815d3306618?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=897&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Japão',
        flag: 'JP',
        cities: [
          {
            id: uuidv4(),
            name: 'Tóquio',
            imageUrl:
              'https://images.unsplash.com/photo-1573455494060-c5595004fb6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=840&q=80',
          },
          {
            id: uuidv4(),
            name: 'Osaka',
            imageUrl:
              'https://images.unsplash.com/photo-1590253230532-a67f6bc61c9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=831&q=80',
          },
          {
            id: uuidv4(),
            name: 'Quioto',
            imageUrl:
              'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            id: uuidv4(),
            name: 'Chiba',
            imageUrl:
              'https://images.unsplash.com/photo-1599719619096-7025b3b8be9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
          },
          {
            id: uuidv4(),
            name: 'Fukuoka',
            imageUrl:
              'https://images.unsplash.com/photo-1575862924838-c166e3814df7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Malásia',
        flag: 'MY',
        cities: [
          {
            id: uuidv4(),
            name: 'Kuala Lumpur',
            imageUrl:
              'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=864&q=80',
          },
          {
            id: uuidv4(),
            name: 'Johor Bahru',
            imageUrl:
              'https://images.unsplash.com/photo-1610917125146-8536b0199df8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
          },
          {
            id: uuidv4(),
            name: 'Ilha de Penang',
            imageUrl:
              'https://images.unsplash.com/photo-1647872475821-db3d6164bf5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Tailândia',
        flag: 'TW',
        cities: [
          {
            id: uuidv4(),
            name: 'Bangkok',
            imageUrl:
              'https://images.unsplash.com/photo-1598970605070-a38a6ccd3a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          },
          {
            id: uuidv4(),
            name: 'Puket',
            imageUrl:
              'https://images.unsplash.com/photo-1551418843-01c6b62e864d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
          },
          {
            id: uuidv4(),
            name: 'Pattaya',
            imageUrl:
              'https://images.unsplash.com/photo-1620374710130-51526b5200f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            id: uuidv4(),
            name: 'Chiang Mai',
            imageUrl:
              'https://images.unsplash.com/photo-1512553353614-82a7370096dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
          },
          {
            id: uuidv4(),
            name: 'Krabi',
            imageUrl:
              'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=839&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Turquia',
        flag: 'TR',
        cities: [
          {
            id: uuidv4(),
            name: 'Istambul',
            imageUrl:
              'https://images.unsplash.com/photo-1627385184599-bd76f11c6317?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80',
          },
          {
            id: uuidv4(),
            name: 'Antália',
            imageUrl:
              'https://images.unsplash.com/photo-1593238739364-18cfde30e522?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1040&q=80',
          },
          {
            id: uuidv4(),
            name: 'Mugla',
            imageUrl:
              'https://images.unsplash.com/photo-1557156028-90bf9c35e6fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Vietnã',
        flag: 'VN',
        cities: [
          {
            id: uuidv4(),
            name: 'Cidade de Ho Chi Minh',
            imageUrl:
              'https://images.unsplash.com/photo-1591269469224-0479a5f956c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            id: uuidv4(),
            name: 'Halong',
            imageUrl:
              'https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            id: uuidv4(),
            name: 'Hanói',
            imageUrl:
              'https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=923&q=80',
          },
          {
            id: uuidv4(),
            name: 'Da Nang',
            imageUrl:
              'https://images.unsplash.com/photo-1505018620898-92616e1849cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Taiwan',
        flag: 'TW',
        cities: [
          {
            id: uuidv4(),
            name: 'Taipei',
            imageUrl:
              'https://images.unsplash.com/photo-1598935898639-81586f7d2129?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    slug: 'africa',
    name: 'África',
    description:
      'A África é o terceiro continente mais extenso com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra com cerca de um bilhão de pessoas, representando cerca de um sétimo da população mundial, e 54 países independentes.',
    imageUrl:
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhfGVufDB8fDB8fA%3D%3D&auto=format&w=1240&q=60',
    numberOfCountries: 54,
    totalLanguages: 197,
    countries: [
      {
        id: uuidv4(),
        name: 'Egito',
        flag: 'EG',
        cities: [
          {
            id: uuidv4(),
            name: 'Cairo',
            imageUrl:
              'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            id: uuidv4(),
            name: 'Hurghada',
            imageUrl:
              'https://images.unsplash.com/photo-1609101111430-edf2b3da1578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'África do Sul',
        flag: 'ZA',
        cities: [
          {
            id: uuidv4(),
            name: 'Joanesburgo',
            imageUrl:
              'https://images.unsplash.com/photo-1552937075-967cf58b74a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Marrocos',
        flag: 'MA',
        cities: [
          {
            id: uuidv4(),
            name: 'Marrakech',
            imageUrl:
              'https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=924&q=80',
          },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    slug: 'europa',
    name: 'Europa',
    description:
      'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.',
    imageUrl:
      'https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8RXVyb3BlfGVufDB8fDB8fA%3D%3D&auto=format&w=1240&q=60',
    numberOfCountries: 50,
    totalLanguages: 72,
    countries: [
      {
        id: uuidv4(),
        name: 'Reino Unido',
        flag: 'GB',
        cities: [
          {
            id: uuidv4(),
            name: 'Londres',
            imageUrl:
              'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'França',
        flag: 'FR',
        cities: [
          {
            id: uuidv4(),
            name: 'Paris',
            imageUrl:
              'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
          },
          {
            id: uuidv4(),
            name: 'Nice',
            imageUrl:
              'https://images.unsplash.com/photo-1551799142-93484f2d0284?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'República Tcheca',
        flag: 'CZ',
        cities: [
          {
            id: uuidv4(),
            name: 'Praga',
            imageUrl:
              'https://images.unsplash.com/photo-1592906209472-a36b1f3782ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Itália',
        flag: 'IT',
        cities: [
          {
            id: uuidv4(),
            name: 'Roma',
            imageUrl:
              'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=796&q=80',
          },
          {
            id: uuidv4(),
            name: 'Milão',
            imageUrl:
              'https://images.unsplash.com/photo-1512236077335-f1cda9239c11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            id: uuidv4(),
            name: 'Veneza',
            imageUrl:
              'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            id: uuidv4(),
            name: 'Florença',
            imageUrl:
              'https://images.unsplash.com/photo-1570006468502-aa2730cbb00e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Holanda',
        flag: 'NL',
        cities: [
          {
            id: uuidv4(),
            name: 'Amsterdã',
            imageUrl:
              'https://images.unsplash.com/photo-1459679749680-18eb1eb37418?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Espanha',
        flag: 'ES',
        cities: [
          {
            id: uuidv4(),
            name: 'Barcelona',
            imageUrl:
              'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            id: uuidv4(),
            name: 'Madrid',
            imageUrl:
              'https://images.unsplash.com/photo-1543785734-4b6e564642f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Austria',
        flag: 'AT',
        cities: [
          {
            id: uuidv4(),
            name: 'Viena',
            imageUrl:
              'https://images.unsplash.com/photo-1516550893923-42d28e5677af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Alemanha',
        flag: 'DE',
        cities: [
          {
            id: uuidv4(),
            name: 'Berlim',
            imageUrl:
              'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            id: uuidv4(),
            name: 'Munique',
            imageUrl:
              'https://images.unsplash.com/photo-1595867818082-083862f3d630?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            id: uuidv4(),
            name: 'Frankfurt',
            imageUrl:
              'https://images.unsplash.com/photo-1605186620429-1ece911f171c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Grécia',
        flag: 'GR',
        cities: [
          {
            id: uuidv4(),
            name: 'Atenas',
            imageUrl:
              'https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            id: uuidv4(),
            name: 'Iráklio',
            imageUrl:
              'https://images.unsplash.com/photo-1586119732042-ff23ccf4bd23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1033&q=80',
          },
          {
            id: uuidv4(),
            name: 'Rhodes',
            imageUrl:
              'https://images.unsplash.com/photo-1527108097555-a5c5e36f3dd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Russia',
        flag: 'RU',
        cities: [
          {
            id: uuidv4(),
            name: 'Moscou',
            imageUrl:
              'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            id: uuidv4(),
            name: 'São Petersburgo',
            imageUrl:
              'https://images.unsplash.com/photo-1556543697-b40fdaadca4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Irlanda',
        flag: 'IE',
        cities: [
          {
            id: uuidv4(),
            name: 'Dublin',
            imageUrl:
              'https://images.unsplash.com/photo-1549918864-48ac978761a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Bélgica',
        flag: 'BE',
        cities: [
          {
            id: uuidv4(),
            name: 'Bruxelas',
            imageUrl:
              'https://images.unsplash.com/photo-1626013969117-8c13864fdb2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Hungria',
        flag: 'HU',
        cities: [
          {
            id: uuidv4(),
            name: 'Budapeste',
            imageUrl:
              'https://images.unsplash.com/photo-1549877452-9c387954fbc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Portugal',
        flag: 'PT',
        cities: [
          {
            id: uuidv4(),
            name: 'Lisboa',
            imageUrl:
              'https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            id: uuidv4(),
            name: 'Porto',
            imageUrl:
              'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Dinamarca',
        flag: 'DK',
        cities: [
          {
            id: uuidv4(),
            name: 'Copenhage',
            imageUrl:
              'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Polônia',
        flag: 'PL',
        cities: [
          {
            id: uuidv4(),
            name: 'Cracóvia',
            imageUrl:
              'https://images.unsplash.com/photo-1495181941197-70a606546974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            id: uuidv4(),
            name: 'Varsóvia',
            imageUrl:
              'https://images.unsplash.com/photo-1607427293702-036933bbf746?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Suécia',
        flag: 'SE',
        cities: [
          {
            id: uuidv4(),
            name: 'Estocolmo',
            imageUrl:
              'https://images.unsplash.com/photo-1588653818221-2651ec1a6423?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
          },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    slug: 'oceania',
    name: 'Oceania',
    description: `Oceania ou Oceânia é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico. O termo Oceania foi criado em 1831 pelo explorador francês Dumont d'Urville.`,
    imageUrl:
      'https://images.unsplash.com/photo-1546268060-2592ff93ee24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    numberOfCountries: 14,
    totalLanguages: 38,
    countries: [
      {
        id: uuidv4(),
        name: 'Australia',
        flag: 'AU',
        cities: [
          {
            id: uuidv4(),
            name: 'Sydney',
            imageUrl:
              'https://images.unsplash.com/photo-1546268060-2592ff93ee24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
          },
          {
            id: uuidv4(),
            name: 'Melbourne',
            imageUrl:
              'https://images.unsplash.com/photo-1545044846-351ba102b6d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
          },
        ],
      },
      {
        id: uuidv4(),
        name: 'Nova Zelândia',
        flag: 'NZ',
        cities: [
          {
            id: uuidv4(),
            name: 'Auckland',
            imageUrl:
              'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
          },
        ],
      },
    ],
  },
]
