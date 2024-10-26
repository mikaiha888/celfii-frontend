import spanishMessages from 'ra-language-spanish'; // Asegúrate de importar los mensajes de español

const customSpanishMessages = {
  ...spanishMessages,
  ra: {
    ...spanishMessages.ra,
    navigation: {
      ...spanishMessages.ra.navigation,
      page_rows_per_page: 'Filas por página', // Modifica o agrega tus traducciones aquí
    },
    // Puedes añadir más mensajes personalizados aquí
  },
};

export default customSpanishMessages;
