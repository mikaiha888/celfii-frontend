export const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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

  export const products = [
    {
      id: 1,
      name: "Smartphone A1",
      description: "Pantalla 6.5'', 128GB, Cámara 48MP",
      price: 120000,
      image:
        "https://media.es.wired.com/photos/6557876f6ab5ab4fa8750f5f/master/w_2560%2Cc_limit/smartphones%25201456207880.jpg",
    },
    {
      id: 2,
      name: "Smartphone B2",
      description: "Pantalla 6.1'', 64GB, Cámara 12MP",
      price: 95000,
      image:
        "https://s2-techtudo.glbimg.com/w1Mv2bKbYRxfnZkKLkhtjQtyYfw=/0x0:695x348/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/R/f/RPkithRqGn2ia8Gq7Guw/iphone15-pro-cad-03.jpg",
    },
    {
      id: 3,
      name: "Smartphone C3",
      description: "Pantalla 6.7'', 256GB, Cámara 108MP",
      price: 180000,
      image: "https://i.ytimg.com/vi/xOqui37fS84/maxresdefault.jpg",
    },
    {
      id: 4,
      name: "Smartphone D4",
      description: "Pantalla 6.3'', 128GB, Cámara 64MP",
      price: 135000,
      image: "https://http2.mlstatic.com/D_NQ_NP_809840-MLA74808087101_022024-O.webp",
    },
  ];

  export const categories = [
    {
      name: "Accesorios",
      link: "/productos?category=Accesorio",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQk9VQwgAicbc2qfmTG-9_4A4IEWPS7v50fw&s",
    },
    {
      name: "Repuestos",
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