export const DEFAULT_PRODUCTS = [
    {
        id: "1",
        name: "พระสมเด็จวัดระฆัง (Phra Somdej Wat Rakang)",
        category: "amulet",
        price: 9999,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtCAhqDmBRa7DJGT09jj5gbq7A8h1XwT0AOw&s", // Moved Luang Phor Sothon image here for reliability
        desc: "พระสมเด็จวัดระฆัง รุ่นอนุสรณ์ 100 ปี พุทธคุณเมตตามหานิยม แคล้วคลาดปลอดภัย"
    },
    {
        id: "2",
        name: "หลวงพ่อโสธร (Luang Phor Sothon)",
        category: "amulet",
        price: 2500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxH0oYRo2ixGh-ID-DPgd8O6FNMhQGizgcKQ&s",
        desc: "หลวงพ่อโสธร รุ่นประวัติศาสตร์ 80 ปีกรมตำรวจ เนื้อเงินขัดเงา สวยงาม ทรงคุณค่า"
    },
    {
        id: "3",
        name: "ท้าวเวสสุวรรณ (Thao Wessuwan)",
        category: "statue",
        price: 1590,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQklujcegVro9cBk2MiexxuuoaufavPCjyC3w&s",
        desc: "ท้าวเวสสุวรรณโณ จตุมหาราชิกา ป้องกันภูตผีปีศาจ เสริมอำนาจบารมี โชคลาภเงินทอง"
    },
    {
        id: "4",
        name: "กำไลหินมงคลปี่เซียะ (Pixiu Bracelet)",
        category: "accessories",
        price: 890,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWJnJAddFuHbIZBuSIdpN7vsjcvaFwRmKJTg&s", // Fallback to Phra Pidta
        desc: "กำไลหินมงคลพร้อมจี้ปี่เซียะทองคำแท้ 99.99% เรียกทรัพย์ ดูดโชคลาภ ค้าขายร่ำรวย"
    },
    {
        id: "5",
        name: "พระปิดตา (Phra Pidta)",
        category: "amulet",
        price: 3200,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9RX4VFahfQpmqIM9j_GgSJwW_OttzP9g5Ag&s",
        desc: "พระปิดตามหาอุตม์ เมตตามหานิยม โชคลาภไหลมาเทมา ป้องกันภัยอันตรายทั้งปวง"
    },
    {
        id: "6",
        name: "ไอ้ไข่ เด็กวัดเจดีย์ (Ai Kai)",
        category: "statue",
        price: 990,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgE4u88iaCvA40NgNuUMdw2MJv6ZGAYODluw&s",
        desc: "ไอ้ไข่ เด็กวัดเจดีย์ ขอได้ไหว้รับ โชคลาภ การงาน ค้าขาย ร่ำรวยสมปรารถนา"
    },
    {
        id: "7",
        name: "สร้อยคอเชือกร่ม (Amulet Necklace)",
        category: "accessories",
        price: 290,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgysJvGRX5PjvQ6kxKK0JaVzWicQr6rPTiEw&s", // Fallback to Thao Wessuwan
        desc: "สร้อยคอเชือกร่มถักอย่างดี แข็งแรง ทนทาน สำหรับห้อยพระเครื่ององค์โปรดของคุณ"
    },
    {
        id: "8",
        name: "กล่องใส่พระ (Amulet Box)",
        category: "accessories",
        price: 150,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkc22JQ6ogWMssrqXQjZ0LUz04Gni5ezweIA&s", // Generic Gold
        desc: "กล่องสแตนเลสใส่พระเครื่อง บุฟองน้ำกันกระแทกอย่างดี ปกป้องพระเครื่องของคุณ"
    }
];

window.products = DEFAULT_PRODUCTS;
