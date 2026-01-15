export const DEFAULT_PRODUCTS = [
    {
        id: "1",
        name: "พระสมเด็จวัดระฆัง (Phra Somdej Wat Rakang)",
        category: "amulet",
        price: 9999,
        image: "https://www.siamrath.co.th/files/styles/750/public/img/20191019/3141f0f7f32f4c9c100155609426617c66917f8b725c9b74300302256722d334.jpg", // Moved Luang Phor Sothon image here for reliability
        desc: "พระสมเด็จวัดระฆัง รุ่นอนุสรณ์ 100 ปี พุทธคุณเมตตามหานิยม แคล้วคลาดปลอดภัย"
    },
    {
        id: "2",
        name: "หลวงพ่อโสธร (Luang Phor Sothon)",
        category: "amulet",
        price: 2500,
        image: "https://www.siamrath.co.th/files/styles/750/public/img/20191019/3141f0f7f32f4c9c100155609426617c66917f8b725c9b74300302256722d334.jpg",
        desc: "หลวงพ่อโสธร รุ่นประวัติศาสตร์ 80 ปีกรมตำรวจ เนื้อเงินขัดเงา สวยงาม ทรงคุณค่า"
    },
    {
        id: "3",
        name: "ท้าวเวสสุวรรณ (Thao Wessuwan)",
        category: "statue",
        price: 1590,
        image: "https://mpics.mgronline.com/pics/Images/565000000806401.JPEG",
        desc: "ท้าวเวสสุวรรณโณ จตุมหาราชิกา ป้องกันภูตผีปีศาจ เสริมอำนาจบารมี โชคลาภเงินทอง"
    },
    {
        id: "4",
        name: "กำไลหินมงคลปี่เซียะ (Pixiu Bracelet)",
        category: "accessories",
        price: 890,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Phra_Pidta_Pang_Pakan.jpg/640px-Phra_Pidta_Pang_Pakan.jpg", // Fallback to Phra Pidta
        desc: "กำไลหินมงคลพร้อมจี้ปี่เซียะทองคำแท้ 99.99% เรียกทรัพย์ ดูดโชคลาภ ค้าขายร่ำรวย"
    },
    {
        id: "5",
        name: "พระปิดตา (Phra Pidta)",
        category: "amulet",
        price: 3200,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Phra_Pidta_Pang_Pakan.jpg/640px-Phra_Pidta_Pang_Pakan.jpg",
        desc: "พระปิดตามหาอุตม์ เมตตามหานิยม โชคลาภไหลมาเทมา ป้องกันภัยอันตรายทั้งปวง"
    },
    {
        id: "6",
        name: "ไอ้ไข่ เด็กวัดเจดีย์ (Ai Kai)",
        category: "statue",
        price: 990,
        image: "https://s.isanook.com/ho/0/ud/37/188681/aikai.jpg",
        desc: "ไอ้ไข่ เด็กวัดเจดีย์ ขอได้ไหว้รับ โชคลาภ การงาน ค้าขาย ร่ำรวยสมปรารถนา"
    },
    {
        id: "7",
        name: "สร้อยคอเชือกร่ม (Amulet Necklace)",
        category: "accessories",
        price: 290,
        image: "https://mpics.mgronline.com/pics/Images/565000000806401.JPEG", // Fallback to Thao Wessuwan
        desc: "สร้อยคอเชือกร่มถักอย่างดี แข็งแรง ทนทาน สำหรับห้อยพระเครื่ององค์โปรดของคุณ"
    },
    {
        id: "8",
        name: "กล่องใส่พระ (Amulet Box)",
        category: "accessories",
        price: 150,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Gold_Souq_Dubai.jpg/640px-Gold_Souq_Dubai.jpg", // Generic Gold
        desc: "กล่องสแตนเลสใส่พระเครื่อง บุฟองน้ำกันกระแทกอย่างดี ปกป้องพระเครื่องของคุณ"
    }
];

window.products = DEFAULT_PRODUCTS;
