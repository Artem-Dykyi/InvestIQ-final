// mockData.js

export const categories = [
  {
    id: 1, // унікальний ключ для key={id}
    data: "20.05.2026",
    descript: "Метро",
    cat: "Продукти",
    sum: "450.00 грн"
  },
  {
    id: 2,
    data: "21.05.2026",
    descript: "Заправка авто",
    cat: "Транспорт",
    sum: "1200.00 грн"
  },
  {
    id: 3,
    data: "25.05.2026",
    descript: " Spotify",
    cat: "Розваги",
    sum: "149.00 грн"
  },
  {
    id: 4,
    data: "28.05.2026",
    descript: "Курси ",
    cat: "Освіта",
    sum: "3000.00 грн"
  }
];

export const zveddata = [
  { id: "z1", mounth: "Січень", monsum: "15 000 грн" },
  { id: "z2", mounth: "Лютий", monsum: "12 400 грн" },
  { id: "z3", mounth: "Березень", monsum: "18 200 грн" },
  { id: "z4", mounth: "Квітень", monsum: "9 800 грн" },
  { id: "z5", mounth: "Травень", monsum: "4 799 грн" },
  { id: "z6", mounth: "Червень", monsum: "5 980 грн" }
];

export const itemCategories = [
  "Продукти",
  "Транспорт / Авто",
  "Здоров'я / Ліки",
  "Комуналка",
  "Розваги",
  "Освіта",
  "Інше"
];