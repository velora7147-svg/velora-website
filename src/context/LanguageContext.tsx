import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'th' | 'zh';

export interface Translations {
  nav: {
    home: string;
    about: string;
    experience: string;
    treatments: string;
    gallery: string;
    location: string;
    contact: string;
    bookNow: string;
    bookAppointment: string;
    wellnessSpa: string;
  };
  hero: {
    subtitle: string;
    tagline: string;
    bookExperience: string;
    scrollToExplore: string;
  };
  about: {
    badge: string;
    heading: string;
    p1: string;
    p2: string;
    sanctuaryBadge: string;
    quote: string;
  };
  experience: {
    badge: string;
    heading: string;
    subtext: string;
    ritual: string;
    items: {
      touchTitle: string;
      touchDesc: string;
      scentTitle: string;
      scentDesc: string;
      lightTitle: string;
      lightDesc: string;
      atmosphereTitle: string;
      atmosphereDesc: string;
    };
  };
  whyVelora: {
    badge: string;
    heading: string;
    subtext: string;
    items: {
      starryTitle: string;
      starryDesc: string;
      aromaTitle: string;
      aromaDesc: string;
      designTitle: string;
      designDesc: string;
      luxuryTitle: string;
      luxuryDesc: string;
    };
  };
  treatments: {
    badge: string;
    heading: string;
    subtext: string;
    investment: string;
    bookNow: string;
    duration60: string;
    items: {
      thaiTitle: string;
      thaiDesc: string;
      oilTitle: string;
      oilDesc: string;
      manTitle: string;
      manDesc: string;
    };
  };
  gallery: {
    badge: string;
    heading: string;
    subtext: string;
    sanctuaryLabel: string;
    locationSubtitle: string;
    items: {
      img1: string;
      img2: string;
      img3: string;
      img4: string;
    };
  };
  location: {
    badge: string;
    heading: string;
    subtext: string;
    addressTitle: string;
    operatingHours: string;
    hoursText: string;
    getDirections: string;
    mapTitle: string;
  };
  contact: {
    badge: string;
    heading: string;
    emotiveLine: string;
    callNow: string;
    lineUs: string;
    wechatUs: string;
    bookNow: string;
    directLine: string;
    emailLabel: string;
    lineOfficial: string;
    wechatLabel: string;
    wechatCopied: string;
    wechatClickToCopy: string;
    hoursLabel: string;
  };
  footer: {
    tagline: string;
    hours: string;
    copyright: string;
  };
  floatingButton: {
    tooltip: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      treatments: 'Treatments',
      gallery: 'Gallery',
      location: 'Location',
      contact: 'Contact',
      bookNow: 'BOOK NOW',
      bookAppointment: 'BOOK APPOINTMENT VIA LINE',
      wellnessSpa: 'Wellness Spa',
    },
    hero: {
      subtitle: 'SENSUAL WELLNESS BOUTIQUE',
      tagline: 'The Art of Sensual Relaxation',
      bookExperience: 'BOOK YOUR EXPERIENCE',
      scrollToExplore: 'Scroll to Explore',
    },
    about: {
      badge: 'Sensual Wellness Concept',
      heading: 'A Different Kind of Relaxation',
      p1: 'VELORA Wellness Spa is a new dimension of relaxation, unlike any other. The space is designed in warm dark tones, layered with soft blue ambient lighting, golden moonlit accents, and a cosmic, starlit atmosphere.',
      p2: 'Every visit is completed with a signature aroma blend inspired by Thai orchids and premium aromatic oils, crafted to awaken a feeling of freshness, calm, and deep relaxation — because at VELORA, relaxation is an art.',
      sanctuaryBadge: 'Moonlit Sanctuary',
      quote: '“Relaxation is an Art” — The VELORA Philosophy',
    },
    experience: {
      badge: 'Sensory Journey',
      heading: 'The Experience',
      subtext: 'Four harmonious elements interwoven into an unforgettable ritual for the body and soul.',
      ritual: 'Ritual',
      items: {
        touchTitle: 'Touch',
        touchDesc: 'The healing power of skilled hands, grounding you fully in the present moment.',
        scentTitle: 'Scent',
        scentDesc: 'Signature aromas of Thai orchid and premium oils that calm the senses.',
        lightTitle: 'Light',
        lightDesc: 'Soft golden moonlight and ambient blue tones that soothe the eyes and mind.',
        atmosphereTitle: 'Atmosphere',
        atmosphereDesc: 'A cosmic, starlit ambiance that transports you far from the noise of the city.',
      },
    },
    whyVelora: {
      badge: 'Distinction & Harmony',
      heading: 'Why VELORA',
      subtext: 'Crafted with deliberate attention to aesthetic elegance, sensory harmony, and calm comfort.',
      items: {
        starryTitle: 'Starry Ambience',
        starryDesc: 'The interior is designed under a Space & Starry Night theme, with lighting crafted for deep calm and relaxation.',
        aromaTitle: 'Signature Aroma',
        aromaDesc: 'An aroma blend inspired by Thai orchids and premium aromatic oils, chosen to create a fresh, calm atmosphere.',
        designTitle: 'Modern Design',
        designDesc: 'Not a typical massage shop — a modern, distinctive space with beautiful corners perfect for photos.',
        luxuryTitle: 'Affordable Luxury',
        luxuryDesc: "A wellness experience that feels premium and luxurious, at a price that's accessible. Luxury doesn't always have to be complicated.",
      },
    },
    treatments: {
      badge: 'Curated Therapies',
      heading: 'Signature Treatments',
      subtext: 'Designed with bespoke oils, refined techniques, and complete sensory privacy.',
      investment: 'Investment in Self',
      bookNow: 'BOOK NOW',
      duration60: '60 MIN',
      items: {
        thaiTitle: 'THAI MASSAGE',
        thaiDesc: 'Traditional Thai massage that relieves deep body tension.',
        oilTitle: 'OIL MASSAGE',
        oilDesc: 'Relax with aromatic oils in a serene treatment room.',
        manTitle: 'MAN REVIVE',
        manDesc: 'A revitalizing treatment to restore body and mind.',
      },
    },
    gallery: {
      badge: 'Visual Sanctuary',
      heading: 'Gallery',
      subtext: 'Glimpses of moonlight, fragrant orchids, and tranquil luxury.',
      sanctuaryLabel: 'VELORA Sanctuary',
      locationSubtitle: 'VELORA Wellness Spa · Nonthaburi',
      items: {
        img1: 'Moonlit Serenity Suite',
        img2: 'Private Treatment Chamber',
        img3: 'Thai Orchid Aromatherapy',
        img4: 'Lounge & Tea Sanctuary',
      },
    },
    location: {
      badge: 'Visit Us',
      heading: 'Location',
      subtext: 'Your secluded oasis tucked away from city rush in Bang Yai, Nonthaburi.',
      addressTitle: 'Boutique Address',
      operatingHours: 'Operating Hours',
      hoursText: 'Open Daily 09:00 – 23:00',
      getDirections: 'GET DIRECTIONS',
      mapTitle: 'VELORA Wellness Spa Location Map',
    },
    contact: {
      badge: 'Reservations & Inquiries',
      heading: 'Begin Your Ritual',
      emotiveLine: '“Escape the city. Enter your private universe.”',
      callNow: 'CALL NOW',
      lineUs: 'LINE US',
      wechatUs: 'WECHAT US',
      bookNow: 'BOOK NOW',
      directLine: 'Direct Line',
      emailLabel: 'Email',
      lineOfficial: 'LINE Official',
      wechatLabel: 'WeChat',
      wechatCopied: 'WeChat ID copied!',
      wechatClickToCopy: 'Click to copy WeChat ID: velora7147',
      hoursLabel: 'Hours',
    },
    footer: {
      tagline: 'A Private Ritual for the Senses',
      hours: 'Open Daily 09:00 – 23:00',
      copyright: '© 2026 VELORA Wellness Spa. All Rights Reserved.',
    },
    floatingButton: {
      tooltip: 'Book on LINE',
    },
  },
  th: {
    nav: {
      home: 'หน้าหลัก',
      about: 'เกี่ยวกับเรา',
      experience: 'สัมผัสประสบการณ์',
      treatments: 'คอร์สทรีตเมนต์',
      gallery: 'ภาพบรรยากาศ',
      location: 'ที่ตั้ง',
      contact: 'ติดต่อเรา',
      bookNow: 'จองบริการ',
      bookAppointment: 'จองบริการผ่าน LINE',
      wellnessSpa: 'เวลเนส สปา',
    },
    hero: {
      subtitle: 'SENSUAL WELLNESS BOUTIQUE',
      tagline: 'ศิลปะแห่งการผ่อนคลายทุกสัมผัส',
      bookExperience: 'จองประสบการณ์ของคุณ',
      scrollToExplore: 'เลื่อนเพื่อสำรวจ',
    },
    about: {
      badge: 'แนวคิดการผ่อนคลายชั้นสูง',
      heading: 'อีกมิติหนึ่งแห่งการพักผ่อน',
      p1: 'VELORA Wellness Spa คือมิติใหม่แห่งการผ่อนคลายที่แตกต่างจากที่ใด พื้นที่ถูกรังสรรค์ด้วยโทนสีเข้มอันอบอุ่น ผสานแสงไฟแอมเบียนต์สีน้ำเงินนุ่มนวล ประกายแสงจันทร์สีทอง และบรรยากาศใต้แสงดาวอันเงียบสงบ',
      p2: 'ทุกช่วงเวลาของคุณจะได้รับการเติมเต็มด้วยกลิ่นหอมซิกเนเจอร์อันได้แรงบันดาลใจจากกล้วยไม้ไทยและน้ำมันหอมระเหยเกรดพรีเมียม คัดสรรมาเพื่อปลุกความสดชื่น ความสงบ และการพักผ่อนอย่างลึกซึ้ง — เพราะที่ VELORA การผ่อนคลายคืองานศิลปะ',
      sanctuaryBadge: 'วิมานใต้แสงจันทร์',
      quote: '“การผ่อนคลายคืองานศิลปะ” — ปรัชญาของ VELORA',
    },
    experience: {
      badge: 'การเดินทางแห่งสัมผัส',
      heading: 'สัมผัสประสบการณ์',
      subtext: 'สี่องค์ประกอบที่หลอมรวมเป็นพิธีกรรมอันตราตรึงสำหรับร่างกายและจิตวิญญาณ',
      ritual: 'สัมผัสแห่ง',
      items: {
        touchTitle: 'Touch',
        touchDesc: 'พลังแห่งการบำบัดจากมืออันเชี่ยวชาญ คลายความตึงเครียดและนำคุณสู่ปัจจุบันขณะอย่างแท้จริง',
        scentTitle: 'Scent',
        scentDesc: 'กลิ่นหอมซิกเนเจอร์ของกล้วยไม้ไทยและน้ำมันพรีเมียม ช่วยปลอบประโลมทุกประสาทสัมผัส',
        lightTitle: 'Light',
        lightDesc: 'แสงจันทร์สีทองละมุนตาและโทนแสงสีน้ำเงิน ช่วยคลายความเหนื่อยล้าของสายตาและจิตใจ',
        atmosphereTitle: 'Atmosphere',
        atmosphereDesc: 'บรรยากาศดุจห้วงอวกาศใต้แสงดาว นำพาคุณหลบลี้จากความวุ่นวายของเมืองใหญ่',
      },
    },
    whyVelora: {
      badge: 'ความประณีตที่แตกต่าง',
      heading: 'ทำไมต้อง VELORA',
      subtext: 'รังสรรค์ด้วยความใส่ใจในสุนทรียภาพ ความกลมกลืนแห่งสัมผัส และความสบายอันเป็นส่วนตัว',
      items: {
        starryTitle: 'Starry Ambience',
        starryDesc: 'การตกแต่งภายในธีม Space & Starry Night พร้อมระบบแสงไฟที่ออกแบบเพื่อความสงบและผ่อนคลายอย่างล้ำลึก',
        aromaTitle: 'Signature Aroma',
        aromaDesc: 'กลิ่นหอมสูตรพิเศษจากกล้วยไม้ไทยและน้ำมันหอมระเหยชั้นเลิศ สร้างบรรยากาศสดชื่นและผ่อนคลาย',
        designTitle: 'Modern Design',
        designDesc: 'ไม่ใช่ร้านนวดทั่วไป — พื้นที่ทันสมัย โดดเด่น พร้อมมุมพักผ่อนที่สวยงามน่าประทับใจ',
        luxuryTitle: 'Affordable Luxury',
        luxuryDesc: 'ประสบการณ์เวลเนสระดับพรีเมียมในราคาที่จับต้องได้ ความหรูหราไม่จำเป็นต้องซับซ้อนเสมอไป',
      },
    },
    treatments: {
      badge: 'ศาสตร์แห่งการบำบัด',
      heading: 'คอร์สทรีตเมนต์ซิกเนเจอร์',
      subtext: 'ออกแบบด้วยน้ำมันอโรมาสูตรเฉพาะ เทคนิคชั้นเลิศ และความเป็นส่วนตัวสูงสุด',
      investment: 'คุณค่าแห่งการดูแลตนเอง',
      bookNow: 'จองบริการ',
      duration60: '60 นาที',
      items: {
        thaiTitle: 'THAI MASSAGE',
        thaiDesc: 'การนวดแผนไทยแบบดั้งเดิม ช่วยคลายความตึงตัวของกล้ามเนื้อส่วนลึกได้อย่างมีประสิทธิภาพ',
        oilTitle: 'OIL MASSAGE',
        oilDesc: 'ผ่อนคลายด้วยน้ำมันหอมระเหยอโรมา ในห้องทรีตเมนต์ที่เงียบสงบและเป็นส่วนตัว',
        manTitle: 'MAN REVIVE',
        manDesc: 'ทรีตเมนต์ฟื้นฟูความสดชื่น คืนพลังและความมีชีวิตชีวาให้ร่างกายและจิตใจ',
      },
    },
    gallery: {
      badge: 'ภาพแห่งความสงบ',
      heading: 'ภาพบรรยากาศ',
      subtext: 'ภาพสะท้อนแห่งแสงจันทร์ กลิ่นกล้วยไม้หอม และความหรูหราอันเงียบสงบ',
      sanctuaryLabel: 'วิมานแห่งความสงบ VELORA',
      locationSubtitle: 'VELORA Wellness Spa · บางใหญ่ นนทบุรี',
      items: {
        img1: 'ห้องสวีทใต้แสงจันทร์อันสงบ',
        img2: 'ห้องทรีตเมนต์ส่วนตัวสุดหรู',
        img3: 'อโรมาเธอราพีกลิ่นกล้วยไม้ไทย',
        img4: 'เลานจ์พักผ่อนและต้อนรับ',
      },
    },
    location: {
      badge: 'การเดินทาง',
      heading: 'ที่ตั้ง',
      subtext: 'โอเอซิสส่วนตัวที่ซ่อนตัวจากความเร่งรีบของเมืองใหญ่ ในอำเภอบางใหญ่ นนทบุรี',
      addressTitle: 'ที่อยู่บูทีกสปา',
      operatingHours: 'เวลาเปิดให้บริการ',
      hoursText: 'เปิดบริการทุกวัน 09:00 – 23:00 น.',
      getDirections: 'ดูเส้นทางบนแผนที่',
      mapTitle: 'แผนที่ที่ตั้ง VELORA Wellness Spa',
    },
    contact: {
      badge: 'สำรองเวลาและสอบถามข้อมูล',
      heading: 'เริ่มต้นพิธีกรรมของคุณ',
      emotiveLine: '“หลีกหนีความวุ่นวาย เข้าสู่จักรวาลส่วนตัวของคุณ”',
      callNow: 'โทรเลย',
      lineUs: 'แชท LINE',
      wechatUs: 'แชท WECHAT',
      bookNow: 'จองทันที',
      directLine: 'เบอร์โทรศัพท์',
      emailLabel: 'อีเมล',
      lineOfficial: 'LINE ทางการ',
      wechatLabel: 'WeChat',
      wechatCopied: 'คัดลอก WeChat ID แล้ว!',
      wechatClickToCopy: 'คลิกเพื่อคัดลอก WeChat ID: velora7147',
      hoursLabel: 'เวลาทำการ',
    },
    footer: {
      tagline: 'ศิลปะแห่งการผ่อนคลายทุกสัมผัส',
      hours: 'เปิดบริการทุกวัน 09:00 – 23:00 น.',
      copyright: '© 2026 VELORA Wellness Spa. สงวนลิขสิทธิ์ทั้งหมด',
    },
    floatingButton: {
      tooltip: 'จองบริการผ่าน LINE',
    },
  },
  zh: {
    nav: {
      home: '首页',
      about: '关于我们',
      experience: '至臻体验',
      treatments: '理疗项目',
      gallery: '雅境图集',
      location: '位置指引',
      contact: '联系我们',
      bookNow: '立即预约',
      bookAppointment: '通过 LINE 预约',
      wellnessSpa: '养生水疗',
    },
    hero: {
      subtitle: 'SENSUAL WELLNESS BOUTIQUE',
      tagline: '感官放松的艺术',
      bookExperience: '开启专属疗愈之旅',
      scrollToExplore: '向下探索',
    },
    about: {
      badge: '感官养生哲学',
      heading: '超凡脱俗的静谧放松',
      p1: 'VELORA Wellness Spa 呈现前所未有的全新放松维度。空间以温暖深邃的暗调设计，交融柔和的蓝调光影、金色月芒与星空天际，营构宁静空灵的宇宙星辰氛围。',
      p2: '每一次莅临，皆沉浸于汲取自泰国兰花灵感的专属香氛与顶级精油之中，唤醒清润、静谧与深层舒缓——在 VELORA，放松是一门精致的艺术。',
      sanctuaryBadge: '月下疗愈庇护所',
      quote: '“放松是一门艺术” —— VELORA 品牌哲学',
    },
    experience: {
      badge: '感官之旅',
      heading: '至臻体验',
      subtext: '四大和谐要素相融共生，为身心编织难忘的疗愈仪式。',
      ritual: '感官序曲',
      items: {
        touchTitle: 'Touch · 触',
        touchDesc: '技艺精湛的双手蕴含治愈力量，引领身心全然安住于当下。',
        scentTitle: 'Scent · 嗅',
        scentDesc: '泰国兰花专属香韵与顶级精油，温柔舒缓每一寸紧绷感官。',
        lightTitle: 'Light · 光',
        lightDesc: '柔美月芒与静谧蓝调光影交织，抚平眼界与心灵的浮躁。',
        atmosphereTitle: 'Atmosphere · 境',
        atmosphereDesc: '仿若置身浩瀚星空之境，瞬间远离喧嚣都市，尽归安宁。',
      },
    },
    whyVelora: {
      badge: '卓越与和谐',
      heading: '为何选择 VELORA',
      subtext: '匠心雕琢每一处美学细节，追求感官共鸣与无上舒适。',
      items: {
        starryTitle: 'Starry Ambience',
        starryDesc: '以星空宇宙为设计灵感，定制柔光营造深层静心与舒缓环境。',
        aromaTitle: 'Signature Aroma',
        aromaDesc: '汲取泰国兰花与珍稀精油精华调配而成，赋予空气清润舒宁的怡人气韵。',
        designTitle: 'Modern Design',
        designDesc: '摒弃传统按摩店风格——打造独具一格的现代摩登空间，处处皆景。',
        luxuryTitle: 'Affordable Luxury',
        luxuryDesc: '尽享高品质奢华养生体验，价格亲民从容——真正的奢华无需繁复。',
      },
    },
    treatments: {
      badge: '精选理疗',
      heading: '招牌疗程',
      subtext: '甄选定制精油、精妙手法，赋予全方位的私密感官享受。',
      investment: '宠爱身心的投资',
      bookNow: '立即预约',
      duration60: '60 分钟',
      items: {
        thaiTitle: 'THAI MASSAGE',
        thaiDesc: '传承泰式古法经络按摩，深度释放肌体紧绷与疲惫。',
        oilTitle: 'OIL MASSAGE',
        oilDesc: '在宁谧幽雅的理疗室内，伴随芳香精油享受深层放松。',
        manTitle: 'MAN REVIVE',
        manDesc: '专为重焕活力定制的赋能理疗，让身心恢复巅峰状态。',
      },
    },
    gallery: {
      badge: '光影画廊',
      heading: '雅境图集',
      subtext: '定格月芒流转、兰香萦绕与幽雅静奢的美好瞬间。',
      sanctuaryLabel: 'VELORA 静谧空间',
      locationSubtitle: 'VELORA Wellness Spa · 暖武里',
      items: {
        img1: '月光静谧套房',
        img2: '私享疗愈空间',
        img3: '泰式兰花芳疗',
        img4: '茶香休憩雅苑',
      },
    },
    location: {
      badge: '莅临体验',
      heading: '位置指引',
      subtext: '隐匿于暖武里邦艾的静谧绿洲，远离都市喧嚣。',
      addressTitle: '会所地址',
      operatingHours: '营业时间',
      hoursText: '每日营业 09:00 – 23:00',
      getDirections: '获取导航路线',
      mapTitle: 'VELORA 水疗中心地图',
    },
    contact: {
      badge: '预约与咨询',
      heading: '开启您的专属仪式',
      emotiveLine: '“远离都市喧嚣，踏入专属于您的私密星辰。”',
      callNow: '立即致电',
      lineUs: 'LINE 咨询',
      wechatUs: '微信咨询',
      bookNow: '立即预约',
      directLine: '专属热线',
      emailLabel: '电子邮箱',
      lineOfficial: '官方 LINE',
      wechatLabel: '微信',
      wechatCopied: '已复制微信号！',
      wechatClickToCopy: '点击复制微信号: velora7147',
      hoursLabel: '营业时间',
    },
    footer: {
      tagline: '专属感官的私密疗愈仪式',
      hours: '每日营业 09:00 – 23:00',
      copyright: '© 2026 VELORA Wellness Spa. 保留所有权利。',
    },
    floatingButton: {
      tooltip: 'LINE 快捷预约',
    },
  },
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    // 1. Check URL parameters (e.g. ?lang=en, ?lang=th, ?lang=zh)
    if (typeof window !== 'undefined') {
      try {
        const params = new URLSearchParams(window.location.search);
        const urlLang = params.get('lang');
        if (urlLang === 'en' || urlLang === 'th' || urlLang === 'zh') {
          return urlLang;
        }

        // 2. Check localStorage
        const saved = localStorage.getItem('velora_lang');
        if (saved === 'en' || saved === 'th' || saved === 'zh') {
          return saved;
        }
      } catch {
        // Fallback safely
      }
    }
    return 'en';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('velora_lang', newLang);
        document.documentElement.lang = newLang;
      } catch {
        // Fallback safely
      }
    }
  };

  const value: LanguageContextType = {
    lang,
    setLang,
    t: translations[lang] || translations.en,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
