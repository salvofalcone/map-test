const startingData = [
  {
    plant_name: "Abruzzo",
    plant_id: 1,
    isChecked: true,
    things: [
      {
        thing_name: "L'Aquila",
        coordinates: [42.35, 13.39],
      },
      {
        thing_name: "Teramo",
        coordinates: [42.66, 13.7],
      },
      {
        thing_name: "Pescara",
        coordinates: [42.46, 14.21],
      },
      {
        thing_name: "Chieti",
        coordinates: [42.36, 14.18],
      },
    ],
  },
  {
    plant_name: "Basilicata",
    plant_id: 2,
    isChecked: true,
    things: [
      {
        thing_name: "Potenza",
        coordinates: [40.64, 15.8],
      },
      {
        thing_name: "Matera",
        coordinates: [40.66, 16.61],
      },
    ],
  },
  {
    plant_name: "Calabria",
    plant_id: 3,
    isChecked: true,
    things: [
      {
        thing_name: "Catanzaro",
        coordinates: [38.91, 16.59],
      },
      {
        thing_name: "Cosenza",
        coordinates: [39.29, 16.25],
      },
      {
        thing_name: "Reggio Calabria",
        coordinates: [38.11, 15.65],
      },
      {
        thing_name: "Crotone",
        coordinates: [39.09, 17.12],
      },
      {
        thing_name: "Vibo Valentia",
        coordinates: [38.68, 16.1],
      },
    ],
  },
  {
    plant_name: "Campania",
    plant_id: 4,
    isChecked: true,
    things: [
      {
        thing_name: "Avellino",
        coordinates: [40.92, 14.78],
      },
      {
        thing_name: "Benevento",
        coordinates: [41.13, 14.78],
      },
      {
        thing_name: "Caserta",
        coordinates: [41.06, 14.33],
      },
      {
        thing_name: "Napoli",
        coordinates: [40.86, 14.27],
      },
      {
        thing_name: "Salerno",
        coordinates: [40.68, 14.76],
      },
    ],
  },
  {
    plant_name: "Emilia-Romagna",
    plant_id: 5,
    isChecked: true,
    things: [
      {
        thing_name: "Bologna",
        coordinates: [44.5, 11.34],
      },
      {
        thing_name: "Ferrara",
        coordinates: [44.84, 11.62],
      },
      {
        thing_name: "Forlì-Cesena",
        coordinates: [44.22, 12.04],
      },
      {
        thing_name: "Modena",
        coordinates: [44.65, 10.92],
      },
      {
        thing_name: "Parma",
        coordinates: [44.8, 10.33],
      },
      {
        thing_name: "Piacenza",
        coordinates: [45.05, 9.69],
      },
      {
        thing_name: "Ravenna",
        coordinates: [44.42, 12.2],
      },
      {
        thing_name: "Reggio nell'Emilia",
        coordinates: [44.7, 10.63],
      },
      {
        thing_name: "Rimini",
        coordinates: [44.06, 12.57],
      },
    ],
  },
  {
    plant_name: "Friuli-Venezia Giulia",
    plant_id: 6,
    isChecked: true,
    things: [
      {
        thing_name: "Trieste",
        coordinates: [45.65, 13.8],
      },
      {
        thing_name: "Gorizia",
        coordinates: [45.96, 13.61],
      },
      {
        thing_name: "Pordenone",
        coordinates: [45.96, 12.66],
      },
      {
        thing_name: "Udine",
        coordinates: [46.07, 13.24],
      },
    ],
  },
  {
    plant_name: "Lazio",
    plant_id: 7,
    isChecked: true,
    things: [
      {
        thing_name: "Roma",
        coordinates: [41.47, 12.9],
      },
      {
        thing_name: "Latina",
        coordinates: [41.9, 12.44],
      },
      {
        thing_name: "Foggia",
        coordinates: [41.4, 13.8],
      },
    ],
  },
  {
    plant_name: "Liguria",
    plant_id: 8,
    isChecked: true,
    things: [
      {
        thing_name: "Genova",
        coordinates: [44.41, 8.93],
      },
      {
        thing_name: "Imperia",
        coordinates: [43.89, 8.04],
      },
      {
        thing_name: "La Spezia",
        coordinates: [44.11, 9.84],
      },
      {
        thing_name: "Savona",
        coordinates: [44.31, 8.48],
      },
    ],
  },
  {
    plant_name: "Lombardia",
    plant_id: 9,
    isChecked: true,
    things: [
      {
        thing_name: "Varese",
        coordinates: [43.9, 12.5],
      },
      {
        thing_name: "Milano",
        coordinates: [43.7, 11.32],
      },
      {
        thing_name: "Bolzano",
        coordinates: [43.3, 11.32],
      },
    ],
  },
  {
    plant_name: "Marche",
    plant_id: 10,
    isChecked: true,
    things: [
      {
        thing_name: "Ancona",
        coordinates: [43.61, 13.52],
      },
      {
        thing_name: "Ascoli Piceno",
        coordinates: [42.85, 13.57],
      },
      {
        thing_name: "Macerata",
        coordinates: [43.3, 13.46],
      },
      {
        thing_name: "Pesaro e Urbino",
        coordinates: [43.91, 12.91],
      },
    ],
  },
  {
    plant_name: "Molise",
    plant_id: 11,
    isChecked: true,
    things: [
      {
        thing_name: "Campobasso",
        coordinates: [41.56, 14.66],
      },
      {
        thing_name: "Isernia",
        coordinates: [41.59, 14.23],
      },
    ],
  },
  {
    plant_name: "Piemonte",
    plant_id: 12,
    isChecked: true,
    things: [
      {
        thing_name: "Torino",
        coordinates: [45.07, 7.68],
      },
      {
        thing_name: "Alessandria",
        coordinates: [44.91, 8.62],
      },
      {
        thing_name: "Asti",
        coordinates: [44.9, 8.21],
      },
      {
        thing_name: "Biella",
        coordinates: [45.56, 8.05],
      },
      {
        thing_name: "Cuneo",
        coordinates: [44.39, 7.55],
      },
      {
        thing_name: "Novara",
        coordinates: [45.45, 8.62],
      },
      {
        thing_name: "Vercelli",
        coordinates: [45.32, 8.42],
      },
    ],
  },
  {
    plant_name: "Puglia",
    plant_id: 13,
    isChecked: true,
    things: [
      {
        thing_name: "Bari",
        coordinates: [41.12, 16.87],
      },
      {
        thing_name: "Barletta-Andria-Trani",
        coordinates: [41.33, 16.29],
      },
      {
        thing_name: "Brindisi",
        coordinates: [40.64, 17.94],
      },
      {
        thing_name: "Foggia",
        coordinates: [41.4, 15.8],
      },
      {
        thing_name: "Lecce",
        coordinates: [40.35, 18.17],
      },
      {
        thing_name: "Taranto",
        coordinates: [40.47, 17.24],
      },
    ],
  },
  {
    plant_name: "Sardegna",
    plant_id: 14,
    isChecked: true,
    things: [
      {
        thing_name: "Cagliari",
        coordinates: [39.22, 9.12],
      },
      {
        thing_name: "Nuoro",
        coordinates: [40.32, 9.33],
      },
      {
        thing_name: "Oristano",
        coordinates: [39.9, 8.59],
      },
      {
        thing_name: "Sassari",
        coordinates: [40.73, 8.56],
      },
    ],
  },
  {
    plant_name: "Sicilia",
    plant_id: 15,
    isChecked: true,
    things: [
      {
        thing_name: "Agrigento",
        coordinates: [37.31, 13.58],
      },
      {
        thing_name: "Caltanissetta",
        coordinates: [37.49, 14.06],
      },
      {
        thing_name: "Enna",
        coordinates: [37.56, 14.28],
      },
      {
        thing_name: "Messina",
        coordinates: [38.19, 15.55],
      },
      {
        thing_name: "Ragusa",
        coordinates: [36.93, 14.73],
      },
      {
        thing_name: "Siracusa",
        coordinates: [37.07, 15.28],
      },
      {
        thing_name: "Trapani",
        coordinates: [38.02, 12.53],
      },
    ],
  },
  {
    plant_name: "Toscana",
    plant_id: 16,
    isChecked: true,
    things: [
      {
        thing_name: "Arezzo",
        coordinates: [43.46, 11.88],
      },
      {
        thing_name: "Firenze",
        coordinates: [43.77, 11.25],
      },
      {
        thing_name: "Grosseto",
        coordinates: [42.76, 11.11],
      },
      {
        thing_name: "Livorno",
        coordinates: [43.55, 10.31],
      },
      {
        thing_name: "Lucca",
        coordinates: [43.84, 10.51],
      },
      {
        thing_name: "Massa-Carrara",
        coordinates: [44.06, 10.14],
      },
      {
        thing_name: "Pisa",
        coordinates: [43.72, 10.4],
      },
      {
        thing_name: "Pistoia",
        coordinates: [43.93, 10.9],
      },
      {
        thing_name: "Prato",
        coordinates: [43.88, 11.09],
      },
      {
        thing_name: "Siena",
        coordinates: [43.32, 11.33],
      },
    ],
  },
  {
    plant_name: "Trentino-Alto Adige",
    plant_id: 17,
    isChecked: true,
    things: [
      {
        thing_name: "Bolzano",
        coordinates: [46.49, 11.35],
      },
      {
        thing_name: "Trento",
        coordinates: [46.07, 11.12],
      },
    ],
  },
  {
    plant_name: "Umbria",
    plant_id: 18,
    isChecked: true,
    things: [
      {
        thing_name: "Perugia",
        coordinates: [43.11, 12.39],
      },
      {
        thing_name: "Terni",
        coordinates: [42.56, 12.64],
      },
    ],
  },
  {
    plant_name: "Valle d'Aosta",
    plant_id: 19,
    isChecked: true,
    things: [
      {
        thing_name: "Aosta",
        coordinates: [45.74, 7.32],
      },
    ],
  },
  {
    plant_name: "Veneto",
    plant_id: 20,
    isChecked: true,
    things: [
      {
        thing_name: "Venezia",
        coordinates: [45.44, 12.33],
      },
      {
        thing_name: "Verona",
        coordinates: [45.44, 10.99],
      },
      {
        thing_name: "Padova",
        coordinates: [45.41, 11.88],
      },
      {
        thing_name: "Vicenza",
        coordinates: [45.55, 11.54],
      },
      {
        thing_name: "Treviso",
        coordinates: [45.67, 12.24],
      },
      {
        thing_name: "Belluno",
        coordinates: [46.14, 12.22],
      },
      {
        thing_name: "Rovigo",
        coordinates: [45.07, 11.79],
      },
    ],
  },
];

export default startingData;

/* const [plantsData, setPlantsData] = useState([
    {
      plant_name: "impianto sud",
      plant_id: 1,
      isChecked: true,
      things: [
        {
          thing_name: " catania",
          coordinates: [37.5, 15],
        },
        {
          thing_name: "palermo",
          coordinates: [37.2, 13.8],
        },
        {
          thing_name: "catania 2",
          coordinates: [37.99, 13.45],
        },
      ],
    },
    {
      plant_name: "impianto centro",
      plant_id: 2,
      isChecked: true,
      things: [
        {
          thing_name: "roma",
          coordinates: [41.47, 12.9],
        },
        {
          thing_name: "latina",
          coordinates: [41.9, 12.44],
        },
        {
          thing_name: "foggia",
          coordinates: [41.4, 13.8],
        },
      ],
    },
    {
      plant_name: "impianto nord",
      plant_id: 3,
      isChecked: true,
      things: [
        {
          thing_name: "varese",
          coordinates: [43.9, 12.5],
        },
        {
          thing_name: "milano",
          coordinates: [43.7, 11.32],
        },
        {
          thing_name: "bolzano",
          coordinates: [43.3, 11.32],
        },
      ],
    },
  ]); */
