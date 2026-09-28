const menus = {
  "burger-house": [
    {
      name: "برغر",
      items: [
        {
          id: 1,
          name: "Classic Burger",
          description: "لحم، جبن، خس، طماطم وصوص خاص",
          price: 8000,
          image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
        },
        {
          id: 2,
          name: "Double Burger",
          description: "قطعتين لحم، جبن، خس وصوص خاص",
          price: 10000,
          image:
            "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600",
        },
      ],
    },

    {
      name: "بطاطا",
      items: [
        {
          id: 3,
          name: "French Fries",
          description: "بطاطا مقلية مع صوص خاص",
          price: 3000,
          image:
            "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600",
        },
      ],
    },

    {
      name: "مشروبات",
      items: [
        {
          id: 4,
          name: "Pepsi",
          description: "بيبسي بارد",
          price: 1500,
          image:
            "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=600",
        },
      ],
    },
  ],

  "coffee-time": [
    {
      name: "قهوة",
      items: [
        {
          id: 101,
          name: "لاتيه",
          description: "قهوة لاتيه بالحليب",
          price: 5000,
          image:
            "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600",
        },
        {
          id: 102,
          name: "كابتشينو",
          description: "كابتشينو كريمي ورغوة حليب",
          price: 5000,
          image:
            "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600",
        },
      ],
    },

    {
      name: "حلويات",
      items: [
        {
          id: 103,
          name: "تشيز كيك",
          description: "تشيز كيك كريمي",
          price: 7000,
          image:
            "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600",
        },
      ],
    },

    {
      name: "مشروبات",
      items: [
        {
          id: 104,
          name: "آيس تي",
          description: "شاي مثلج منعش",
          price: 4000,
          image:
            "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600",
        },
      ],
    },
  ],
    "pizza-house": [
    {
      name: "بيتزا",
      items: [
        {
          id: 201,
          name: "Margherita Pizza",
          description: "صلصة طماطم، جبن موزاريلا وريحان",
          price: 9000,
          image:
            "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600",
        },
        {
          id: 202,
          name: "Pepperoni Pizza",
          description: "صلصة طماطم، موزاريلا وبيبروني",
          price: 11000,
          image:
            "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600",
        },
      ],
    },

    {
      name: "مقبلات",
      items: [
        {
          id: 203,
          name: "Garlic Bread",
          description: "خبز بالثوم والجبن",
          price: 4000,
          image:
            "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=600",
        },
      ],
    },

    {
      name: "مشروبات",
      items: [
        {
          id: 204,
          name: "Pepsi",
          description: "بيبسي بارد",
          price: 1500,
          image:
            "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=600",
        },
      ],
    },
  ],
};

export { menus };
export const categories = menus["burger-house"];
export default categories;