// ─────────────────────────────────────────────────────────────
// CONFIGURACIÓN CENTRAL DE LA INVITACIÓN
// Todo lo que puede cambiar en el futuro vive aquí.
// No es necesario tocar ningún componente para actualizar datos,
// activar/desactivar secciones o reemplazar fotografías.
// ─────────────────────────────────────────────────────────────

const invitation = {
  // Nombre de quien se celebra y frase que lo acompaña
  babyName: "Génesis",
  babyPhrase: "Nuestra mayor bendición",

  // Tipo de evento (permite reutilizar la plantilla para otros eventos)
  eventType: "Baby Shower",

  parents: {
    mom: "Rebeca",
    dad: "Luis",
    message:
      "Esperamos con todo nuestro corazón la llegada de nuestra pequeña Génesis.",
  },

  event: {
    // Fecha en formato ISO — se usa para calcular el contador automáticamente
    isoDate: "2026-10-31T16:00:00-06:00",
    // Textos ya formateados para mostrarse en pantalla
    dayLabel: "Sábado",
    dateLabel: "31 de Octubre de 2026",
    timeLabel: "4:00 PM",
    locationName: "Asadero Campestre",
    address:
      "Carretera Acapulco-Zihuatanejo Km 22, Poblado El Embarcadero, Guerrero",
    mapsUrl:
      "https://www.google.com.mx/maps/place/Asadero+Campestre/@16.9672829,-100.0043097,181m/data=!3m1!1e3!4m15!1m8!3m7!1s0x85cafc10804b1899:0x8947cf1b2d1f2f39!2s40985+El+Embarcadero,+Gro.!3b1!8m2!3d16.9641666!4d-100.0016666!16s%2Fg%2F11c5qsg2yp!3m5!1s0x85cafc17549b858d:0xe5113e6491051c77!8m2!3d16.9674247!4d-100.0040034!16s%2Fg%2F11dxh_2fd3?entry=ttu",
  },

  message: {
    title: "Hay momentos que cambian la vida para siempre",
    body: "La llegada de Génesis es uno de ellos. Estamos llenos de ilusión, amor y esperanza por conocer a nuestra pequeña, y queremos compartir esta alegría contigo, que formas parte de nuestra historia.",
  },

  contact: {
    whatsappEnabled: true,
    whatsappNumber: "527471430893",
    // Mensaje predeterminado que se generará cuando se active la confirmación
    whatsappTemplate:
      "¡Hola! Confirmo mi asistencia al Baby Shower de {babyName}",
  },

  gifts: {
    enabled: true,
    title: "Mesa de regalos",
    intro: "Tu presencia es nuestro mejor regalo.",
    subtext:
      "Pero si además deseas tener un detalle para nuestra pequeña Génesis, hemos preparado una mesa de regalos para ella.",
    url: "",
  },

music: {
  enabled: true,
  url: `${import.meta.env.BASE_URL}music/Cancion.mp3`,
},

  photos: {
    hero: "./images/hero.png",
    parents: "./images/parents.jpeg",
    gallery: [
      "./images/foto1.png",
      "./images/foto2.jpeg",
      "./images/parents.jpeg",
    ],
    ultrasound: "",
  },

  seo: {
    title: "Baby Shower de Génesis 💗",
    description:
      "Acompáñanos a celebrar la llegada de nuestra pequeña Génesis.",
    ogImage: "./images/og-image.jpg",
  },
};

export default invitation;
