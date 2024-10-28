import spanishMessages from "ra-language-spanish";

const customSpanishMessages = {
  ...spanishMessages,
  ra: {
    ...spanishMessages.ra,
    navigation: {
      ...spanishMessages.ra.navigation,
      page_rows_per_page: "Filas por página",
    },
  },
};

export default customSpanishMessages;
