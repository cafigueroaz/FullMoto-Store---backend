import mongoose from "mongoose";
import productModel from "../models/product.model.js";
import categoriesModel from "../models/categories.model.js";

const MONGO_URI = process.env.DB_URI || "mongodb://localhost:27017/default";

const productsByCategory = {
  Cascos: [
    {
      name: "Casco Integral AGV K6 S",
      description:
        "Casco integral de fibra de carbono con ventilación optimizada y visor Pinlock incluido. Certificación ECE 22.06.",
      price: 1850000,
      stock: 12,
      rating: 4.9,
      brand: "AGV",
      compatibleWith: ["Universal"],
      mainImage:
        "https://www.chromeburner.com/media/catalog/product/cache/8fd94ea13d694c96b8dc11aa841aca7c/a/g/agv-k6-s-e2206-mplk-matt-black-011_1_.jpg",
      status: "active",
    },
    {
      name: "Casco Abatible LS2 Valiant II",
      description:
        "Casco modular con doble visor solar, cierre micrométrico y sistema de ventilación A.F.T. Ideal para touring.",
      price: 890000,
      stock: 18,
      rating: 4.5,
      brand: "LS2",
      compatibleWith: ["Universal"],
      mainImage:
        "https://www.ls2colombia.com/wp-content/uploads/LS2-FF900-VALIANT-ll-HAMMER-N.M.AM_.N.LATERAL-open.png",

      status: "active",
    },
    {
      name: "Casco Off-Road Airoh Aviator 3",
      description:
        "Casco de motocross en fibra de carbono con sistema de emergencia y ventilación de alto flujo.",
      price: 2200000,
      stock: 8,
      rating: 4.8,
      brand: "Airoh",
      compatibleWith: ["Universal"],
      mainImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQq7mdVeJpgKbpEzUx751Z7y_2WARzOBzYKw&s",

      status: "active",
    },
    {
      name: "Casco Integral HJC RPHA 71",
      description:
        "Casco sport-touring con carcasa PIM+ y sistema Smart HJC para Bluetooth integrado. Peso ultraligero.",
      price: 1650000,
      stock: 10,
      rating: 4.7,
      brand: "HJC",
      compatibleWith: ["Universal"],
      mainImage:
        "https://d2j6dbq0eux0bg.cloudfront.net/images/61701486/4692287760.webp",

      status: "active",
    },
    {
      name: "Casco Jet Shark Nano Street Neon",
      description:
        "Casco abierto estilo urbano con visor solar retráctil y hebilla micrométrica. Perfecto para ciudad.",
      price: 520000,
      stock: 25,
      rating: 4.3,
      brand: "Shark",
      compatibleWith: ["Universal"],
      mainImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Iu6-MeQf_zKn8KvCrYTKcYy8HUdTiOSU0g&s",

      status: "active",
    },
  ],

  Chaquetas: [
    {
      name: "Chaqueta Alpinestars T-GP Plus R V4",
      description:
        "Chaqueta textil con protecciones CE nivel 2 en hombros y codos. Membrana impermeable y forro térmico desmontable.",
      price: 1250000,
      stock: 15,
      rating: 4.8,
      brand: "Alpinestars",
      compatibleWith: ["Universal"],
      mainImage:
        "https://www.motostorm.it/images/products/large/giacche/alpinestars_tgpplus_r_v4_jacket_rosos.jpg",

      status: "active",
    },
    {
      name: "Chaqueta Dainese Racing 4 Cuero",
      description:
        "Chaqueta en cuero bovino perforado con protecciones Pro-Armor en codos y hombros. Diseño sport para pista.",
      price: 2400000,
      stock: 6,
      rating: 4.9,
      brand: "Dainese",
      compatibleWith: ["Universal"],
      mainImage:
        "https://www.chromeburner.com/media/catalog/product/cache/1edb22ea9a482637ef3a9d592f2e211a/2/0/201533850_631.jpg",

      status: "active",
    },
    {
      name: "Chaqueta Rev'It Eclipse 2 Malla",
      description:
        "Chaqueta de malla de alta ventilación para clima cálido. Protecciones SEESMART CE nivel 1 incluidas.",
      price: 780000,
      stock: 20,
      rating: 4.4,
      brand: "Rev'It",
      compatibleWith: ["Universal"],
      mainImage:
        "https://all2bikes.com/cdn/shop/files/121222084415_83598068083073533.jpg?crop=center&height=2048&v=1685112326&width=2048",

      status: "active",
    },
    {
      name: "Chaqueta Joe Rocket Atomic 5.0",
      description:
        "Chaqueta touring con paneles reflectivos, protecciones CE removibles y múltiples bolsillos impermeables.",
      price: 650000,
      stock: 22,
      rating: 4.2,
      brand: "Joe Rocket",
      compatibleWith: ["Universal"],
      mainImage:
        "https://http2.mlstatic.com/D_NQ_NP_923020-MCO82234484516_022025-O.webp",

      status: "active",
    },
    {
      name: "Chaqueta LS2 Sepang Negra",
      description:
        "Chaqueta textil con membrana MaxDry, protecciones en hombros, codos y bolsillo para protector de espalda.",
      price: 580000,
      stock: 30,
      rating: 4.1,
      brand: "LS2",
      compatibleWith: ["Universal"],
      mainImage:
        "https://http2.mlstatic.com/D_NQ_NP_718058-CBT95190446357_102025-O.webp",

      status: "active",
    },
  ],

  Guantes: [
    {
      name: "Guantes Alpinestars SP-8 V3",
      description:
        "Guantes deportivos en cuero de cabra con protector de nudillos en TPU y refuerzo en palma.",
      price: 420000,
      stock: 20,
      rating: 4.7,
      brand: "Alpinestars",
      compatibleWith: ["Universal"],
      mainImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhiCPMMVkYOoGLka-LV4xYQt8DdqzIhVK7Q&s",

      status: "active",
    },
    {
      name: "Guantes Dainese Full Metal 7",
      description:
        "Guantes racing de cuero con protectores de titanio en nudillos y dedos. Certificación CE nivel 1.",
      price: 1100000,
      stock: 8,
      rating: 4.9,
      brand: "Dainese",
      compatibleWith: ["Universal"],
      mainImage:
        "https://all2bikes.com/cdn/shop/files/DaineseAndre-2023-12-18T222435.154.png?v=1702949536",

      status: "active",
    },
    {
      name: "Guantes Rev'It Mosca 2 Malla",
      description:
        "Guantes de verano en malla con protección de nudillos y palma reforzada. Compatibles con pantallas táctiles.",
      price: 280000,
      stock: 35,
      rating: 4.3,
      brand: "Rev'It",
      compatibleWith: ["Universal"],
      mainImage:
        "https://revitsport.com/cdn/shop/files/091224091957_83598068084635433_a60107c9-217c-408b-bbcc-d0c644e62b77.jpg?v=1745488246",

      status: "active",
    },
    {
      name: "Guantes Térmicos Five WFX3 WP",
      description:
        "Guantes impermeables con forro térmico Thinsulate para rodadas en clima frío. Membrana HiPora.",
      price: 350000,
      stock: 18,
      rating: 4.5,
      brand: "Five",
      compatibleWith: ["Universal"],
      mainImage:
        "https://ridermarket.cl/wp-content/uploads/2020/12/Guante-Five-WFX3-WP-negro-2022.jpg",

      status: "active",
    },
    {
      name: "Guantes Off-Road Fox Dirtpaw",
      description:
        "Guantes ligeros para motocross y enduro con palma acolchada y ajuste de velcro en muñeca.",
      price: 180000,
      stock: 40,
      rating: 4.2,
      brand: "Fox",
      compatibleWith: ["Universal"],
      mainImage:
        "https://auteco.vtexassets.com/arquivos/ids/1497821-800-800?v=639026164123800000&width=800&height=800&aspect=true",

      status: "active",
    },
  ],

  "Iluminación LED": [
    {
      name: "Exploradoras LED Hella ValueFit 500",
      description:
        'Par de exploradoras LED de 6" con haz combinado spot/flood, 3000 lúmenes y carcasa de aluminio IP68.',
      price: 850000,
      stock: 14,
      rating: 4.7,
      brand: "Hella",
      compatibleWith: [
        "BMW R1250GS",
        "Honda Africa Twin",
        "Suzuki V-Strom 650",
        "KTM 1290 Adventure",
      ],
      mainImage:
        "https://http2.mlstatic.com/D_Q_NP_2X_895756-MCO76518588973_052024-P.webp",

      status: "active",
    },
    {
      name: "Farola LED Proyector H4 Para Moto",
      description:
        "Kit de conversión LED H4 de 6000 lúmenes con ventilador integrado. Plug & play con luz alta y baja.",
      price: 185000,
      stock: 30,
      rating: 4.4,
      brand: "OSRAM",
      compatibleWith: [
        "Yamaha FZ25",
        "Honda CB190R",
        "Bajaj Pulsar NS200",
        "AKT CR5 200",
      ],
      mainImage:
        "https://media.falabella.com/falabellaCO/137893058_01/w=1500,h=1500,fit=cover",

      status: "active",
    },
    {
      name: "Direccionales LED Secuenciales Universal",
      description:
        "Set de 4 direccionales LED ámbar con efecto secuencial dinámico. Resistente al agua y fácil instalación.",
      price: 120000,
      stock: 40,
      rating: 4.2,
      brand: "Rizoma",
      compatibleWith: ["Universal"],
      mainImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1GYjK2BxZtnyxQj8S3cMSncBDdMWt2BSA-g&s",

      status: "active",
    },
    {
      name: 'Barra LED 7" Faro Principal Cafe Racer',
      description:
        "Faro principal redondo estilo cafe racer con halo DRL y cuerpo de aluminio CNC negro mate.",
      price: 320000,
      stock: 15,
      rating: 4.6,
      brand: "Motodemic",
      compatibleWith: [
        "Honda CB750",
        "Yamaha XSR700",
        "Kawasaki Z900RS",
        "Triumph Bonneville",
      ],
      mainImage:
        "https://ae01.alicdn.com/kf/Se76d15e5bf98458294909142fd2b5512m.jpg",

      status: "active",
    },
    {
      name: "Kit Luces Underglow RGB Bluetooth",
      description:
        "Kit de 8 tiras LED RGB con control por app Bluetooth. 16 millones de colores y modos estroboscópicos.",
      price: 250000,
      stock: 22,
      rating: 4.1,
      brand: "LEDGlow",
      compatibleWith: ["Universal"],
      mainImage:
        "https://m.media-amazon.com/images/I/81YqH0-WQBL._AC_UF350,350_QL80_.jpg",

      status: "active",
    },
  ],

  "Lujos y Accesorios": [
    {
      name: "Espejos CNC Rizoma Spy-R",
      description:
        "Par de espejos retrovisores de aluminio CNC con diseño aerodinámico y visión antiglare. Montaje universal.",
      price: 680000,
      stock: 10,
      rating: 4.8,
      brand: "Rizoma",
      compatibleWith: ["Universal"],
      mainImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRngmw8nFUvMvuKsfgn0PaVbYF59EmR6F73Bw&s",

      status: "active",
    },
    {
      name: "Sliders de Marco Puig R19",
      description:
        "Protectores de marco en nylon reforzado con inserto de aluminio. Absorben impactos en caídas leves.",
      price: 280000,
      stock: 18,
      rating: 4.5,
      brand: "Puig",
      compatibleWith: ["Yamaha MT-07", "Kawasaki Z650", "Honda CB650R"],
      mainImage:
        "https://cdnx.jumpseller.com/silva-shop1/image/47615370/resize/1140/855?1712917260",

      status: "active",
    },
    {
      name: "Manillar Renthal Fatbar 28mm",
      description:
        "Manillar de aluminio 7050 T6 con barra de refuerzo interna. Diseño ergonómico para off-road y adventure.",
      price: 420000,
      stock: 12,
      rating: 4.7,
      brand: "Renthal",
      compatibleWith: ["Universal 28mm"],
      mainImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqo6dMc_i0WdEB1xsmhedBHKbPpNt-ryQYDA&s",

      status: "active",
    },
    {
      name: "Protector de Tanque Stompgrip",
      description:
        "Lámina de tracción transparente para tanque que mejora el agarre de las rodillas. Volcano textura.",
      price: 195000,
      stock: 25,
      rating: 4.4,
      brand: "Stompgrip",
      compatibleWith: [
        "Yamaha R3",
        "Kawasaki Ninja 400",
        "Honda CBR500R",
        "KTM RC390",
      ],
      mainImage:
        "https://cdnx.jumpseller.com/martinech/image/17100001/resize/640/640?1691870729",

      status: "active",
    },
    {
      name: "Puños Calefactados Oxford HotGrips Premium",
      description:
        "Puños con 5 niveles de calefacción y controlador inteligente. Ideales para rodadas en páramo y clima frío.",
      price: 350000,
      stock: 15,
      rating: 4.6,
      brand: "Oxford",
      compatibleWith: ["Universal 22mm"],
      mainImage:
        "https://img.gmoto.pl/82148/manetki-podgrzewane-oxford-touring-z-panelem-sterujacym_2.webp",

      status: "active",
    },
  ],

  "Maleteros y Alforjas": [
    {
      name: "Top Case GIVI Trekker Outback 42L",
      description:
        "Maletero superior en aluminio natural con capacidad para un casco integral. Sistema Monokey de fijación.",
      price: 1950000,
      stock: 6,
      rating: 4.8,
      brand: "GIVI",
      compatibleWith: [
        "BMW R1250GS",
        "Honda Africa Twin",
        "Yamaha Ténéré 700",
        "Suzuki V-Strom 650",
      ],
      mainImage: "https://motosite.co/cdn/shop/files/42GIVI.webp?v=1709317059",

      status: "active",
    },
    {
      name: "Alforjas Laterales SW-Motech Blaze",
      description:
        "Par de alforjas semi-rígidas de 20L cada una con sistema SLC de montaje rápido sin rack.",
      price: 1200000,
      stock: 8,
      rating: 4.6,
      brand: "SW-Motech",
      compatibleWith: [
        "Yamaha MT-07",
        "Kawasaki Z650",
        "Honda CB650R",
        "Ducati Monster",
      ],
      mainImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2QXP3k0ULuyRONDKZrfNUS1RWtNu-GqHcnw&s",

      status: "active",
    },
    {
      name: "Tank Bag Magnético Oxford M15R",
      description:
        "Maleta de tanque de 15L con base magnética, bolsillo portamapa/GPS y funda impermeable incluida.",
      price: 380000,
      stock: 15,
      rating: 4.4,
      brand: "Oxford",
      compatibleWith: ["Universal (tanque metálico)"],
      mainImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvjaUo3hw9sYw5IGTeKArgTkRo8_mmbqinnQ&s",

      status: "active",
    },
    {
      name: "Maleta Trasera SHAD SH40 40L",
      description:
        "Top case de polipropileno con capacidad para un casco. Incluye base y respaldo de pasajero.",
      price: 480000,
      stock: 20,
      rating: 4.3,
      brand: "SHAD",
      compatibleWith: ["Universal"],
      mainImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSexvwk4ppuambgItmK9OJamV7Y6satwFhaWg&s",

      status: "active",
    },
    {
      name: "Bolso Seco OverBoard Classic 40L",
      description:
        "Bolsa impermeable tipo drybag para amarrar al asiento trasero. Costuras soldadas y válvula de purga.",
      price: 280000,
      stock: 18,
      rating: 4.5,
      brand: "OverBoard",
      compatibleWith: ["Universal"],
      mainImage:
        "https://www.over-board.com/cdn/shop/files/ob1150blk-overboard-waterproof-classic-duffel-black-40-litres-01-1.jpg?v=1720610190",

      status: "active",
    },
  ],

  Intercomunicadores: [
    {
      name: "Intercomunicador Cardo Packtalk Edge",
      description:
        "Intercomunicador con tecnología DMC Mesh y chip Sound by JBL. Alcance 1.6 km, se conecta con 15 pilotos.",
      price: 1450000,
      stock: 10,
      rating: 4.9,
      brand: "Cardo",
      compatibleWith: ["Universal (cascos)"],
      mainImage:
        "https://enmoto.co/cdn/shop/products/duoedgebox.jpg?v=1654429172&width=1600",

      status: "active",
    },
    {
      name: "Intercomunicador Sena 50S",
      description:
        "Bluetooth 5.0 con Mesh 2.0 para grupos ilimitados. Sonido premium Harman Kardon y 14 horas de batería.",
      price: 1600000,
      stock: 8,
      rating: 4.8,
      brand: "Sena",
      compatibleWith: ["Universal (cascos)"],
      mainImage:
        "https://fullmoto.com/wp-content/uploads/2025/12/Sena-50S-intercom.jpg",

      status: "active",
    },
    {
      name: "Intercomunicador Cardo Freecom 2X Duo",
      description:
        "Pack de 2 unidades para piloto y pasajero. Bluetooth con alcance de 800m y audio estéreo JBL.",
      price: 850000,
      stock: 12,
      rating: 4.5,
      brand: "Cardo",
      compatibleWith: ["Universal (cascos)"],
      mainImage:
        "https://enmoto.co/cdn/shop/products/2xduo.jpg?v=1642733471&width=720",

      status: "active",
    },
    {
      name: "Intercomunicador Sena 3S Plus Boom",
      description:
        "Intercom básico con micrófono de brazo para cascos abiertos. Ideal para ciudad y viajes cortos.",
      price: 320000,
      stock: 20,
      rating: 4.2,
      brand: "Sena",
      compatibleWith: ["Universal (cascos)"],
      mainImage:
        "https://http2.mlstatic.com/D_NQ_NP_645438-MCO99451477466_112025-O.webp",

      status: "active",
    },
    {
      name: "Auriculares Cardo 45mm JBL Repuesto",
      description:
        "Kit de bocinas JBL de repuesto de 45mm para intercomunicadores Cardo. Sonido de alta fidelidad.",
      price: 180000,
      stock: 25,
      rating: 4.6,
      brand: "Cardo",
      compatibleWith: ["Cardo Packtalk", "Cardo Freecom"],
      mainImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaYX_dg6crvBdh0u24-lYi5jOvLdJE3hlebA&s",

      status: "active",
    },
  ],
};

const seedProducts = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Base de datos conectada");

    const categoriesFromDB = await categoriesModel.find({});
    console.log(
      `Se encontraron ${categoriesFromDB.length} categorías en la DB\n`,
    );

    if (categoriesFromDB.length === 0) {
      console.error(
        "No hay categorías en la base de datos. Ejecuta primero el seed de categorías.",
      );
      return;
    }

    const categoryMap = {};
    categoriesFromDB.forEach((cat) => {
      categoryMap[cat.name] = cat._id;
    });

    const deleted = await productModel.deleteMany({});
    console.log(`Se eliminaron ${deleted.deletedCount} productos existentes\n`);

    let totalInserted = 0;

    for (const [categoryName, products] of Object.entries(productsByCategory)) {
      const categoryId = categoryMap[categoryName];

      if (!categoryId) {
        console.warn(
          `Categoría "${categoryName}" no encontrada en la DB, se omiten sus productos.`,
        );
        continue;
      }

      const productsWithCategory = products.map((p) => ({
        ...p,
        categoryId,
      }));

      const created = await productModel.insertMany(productsWithCategory);
      totalInserted += created.length;
      console.log(`${categoryName}: ${created.length} productos insertados`);
    }

    console.log(
      `\n Total: ${totalInserted} productos insertados correctamente`,
    );
  } catch (error) {
    console.error("Error al ejecutar el seed:", error.message);
  } finally {
    await mongoose.disconnect();
    console.log("Conexión a la base de datos cerrada");
  }
};

seedProducts();
