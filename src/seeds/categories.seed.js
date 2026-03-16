import mongoose from "mongoose";
import categoriesModel from "../models/categories.model.js";

const MONGO_URI = process.env.DB_URI || "mongodb://localhost:27017/default";

const categories = [
  {
    name: "Cascos",
    description:
      "Seguridad certificada: Integrales, abatibles, modulares y para Off-Road.",
    image: "https://tu-bucket.com/categorias/cascos.jpg",
    slug: "cascos-proteccion",
    status: true,
  },
  {
    name: "Chaquetas",
    description:
      "Protección contra abrasión y clima. Cuero, textil y con protecciones CE.",
    image: "https://tu-bucket.com/categorias/chaquetas.jpg",
    slug: "chaquetas-moteras",
    status: true,
  },
  {
    name: "Guantes",
    description:
      "Control y protección para tus manos en cuero, malla y materiales térmicos.",
    image: "https://tu-bucket.com/categorias/guantes.jpg",
    slug: "guantes-con-proteccion",
    status: true,
  },
  {
    name: "Iluminación LED",
    description:
      "Exploradoras, farolas principales y direccionales de alta intensidad.",
    image: "https://tu-bucket.com/categorias/luces.jpg",
    slug: "iluminacion-led-motos",
    status: true,
  },
  {
    name: "Lujos y Accesorios",
    description:
      "Personaliza tu máquina: espejos, manillares, sliders y protectores.",
    image: "https://tu-bucket.com/categorias/lujos.jpg",
    slug: "lujos-y-accesorios",
    status: true,
  },
  {
    name: "Maleteros y Alforjas",
    description:
      "Soluciones de carga: maleteros rígidos, alforjas de lona y tank bags.",
    image: "https://tu-bucket.com/categorias/equipaje.jpg",
    slug: "equipaje-y-maleteros",
    status: true,
  },
  {
    name: "Intercomunicadores",
    description:
      "Tecnología Bluetooth para comunicación entre piloto, pasajero y música.",
    image: "https://tu-bucket.com/categorias/tecnologia.jpg",
    slug: "intercomunicadores-bluetooth",
    status: true,
  },
];

const seedCategories = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Base de datos conectada");

    const deleted = await categoriesModel.deleteMany({});
    console.log(`Se eliminaron ${deleted.deletedCount} categorías existentes`);

    const created = await categoriesModel.insertMany(categories);
    console.log(`Se insertaron ${created.length} categorías correctamente`);

    created.forEach((cat) => {
      console.log(`   → ${cat.name} (${cat._id})`);
    });
  } catch (error) {
    console.error("Error al ejecutar el seed:", error.message);
  } finally {
    await mongoose.disconnect();
    console.log("Conexión a la base de datos cerrada");
  }
};

seedCategories();
