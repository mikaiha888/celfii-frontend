export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const categories = [
  {
    name: "Accesorio",
    link: "/productos?category=Accesorio",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQk9VQwgAicbc2qfmTG-9_4A4IEWPS7v50fw&s",
  },
  {
    name: "Repuesto",
    link: "/productos?category=Repuesto",
    image:
      "https://static.landkit.engeni.com/assets/2649/7a51a2c2-be1f-407f-ac9d-50d8cf89af35/1e3194e2acff4a5399c6.jpg",
  },
  {
    name: "Equipos",
    link: "/productos?category=Equipos",
    image: "https://www.cronista.com/files/image/419/419139/61d3378d218ac.jpg",
  },
  {
    name: "Otros",
    link: "/productos?category=Otros",
    image:
      "https://electronicaonline.net/wp-content/uploads/2024/05/Historia-de-la-Electronica.jpg",
  },
];
