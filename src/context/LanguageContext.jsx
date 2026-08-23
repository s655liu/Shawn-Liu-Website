import { createContext, useState, useContext } from 'react';

const translations = {
    en: {
        "nav-home": "Home", "nav-about": "About", "nav-projects": "Projects", "nav-exp": "Experiences", "nav-skills": "Skills", "nav-contact": "Contact", "nav-resume": "Resume", "nav-edu": "Education",
        "hero-hi": "HI, I'M",
        "hero-name": "Shawn Liu",
        "hero-im-a": "I'm a",
        "hero-text-1": "Full Stack Web Developer",
        "hero-text-2": "Currently learning AI agents and LLM",
        "hero-text-3": "Follow me into my world, to learn more about me",
        "hero-view-proj": "View Projects",
        "hero-contact-me": "Contact Me",
        "hero-location": "Vancouver, BC",
        "about-title": "About Me",
        "about-p1": "Hello! I'm Shawn, a Full Stack Web Developer at Fortinet and a 2025 Honours Computer Science graduate from the University of Waterloo.",
        "about-p2": "With a foundation in both low-level systems programming (C++) and modern web frameworks (React, Python), I enjoy solving complex problems across the entire stack. I'm always looking for new challenges and opportunities to learn and grow as an engineer.",
        "proj-title": "Featured Projects",
        "skills-title": "Skills",
        "exp-title": "Experiences",
        "edu-title": "Education",
        "edu-courses": "Main Courses: AI, Machine Learning, Algorithms, Computer Vision",
        "contact-title": "Contact Me",
        "contact-email": "Email",
        "contact-phone": "Phone",
        "contact-socials": "Socials & Networks",
        "contact-wechat": "WeChat",
        "contact-instagram": "Instagram",
        "footer-desc": "I'm always looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
        "footer-btn": "Say Hello",
        "footer-copy": "Built with Passion & Caffeine.",
        "role-fullstack": "Full Stack Web Developer",
        "role-intern": "Software Developer Intern",
        "role-se-intern": "Software Engineering Intern",
        "role-ds-intern": "Data Scientist Intern",
        "role-graduate": "Bachelor's of Honours Computer Science",
        "term-about": "about/",
        "term-proj": "projects/",
        "term-exp": "experience/",
        "term-edu": "education/",
        "term-skills": "skills/",
        "resume-title": "Resume",
        "resume-subtitle": "Access my technical profile in PDF format.",
        "resume-view-pdf": "View Fullscreen",
        "resume-download-pdf": "Download PDF",
        "resume-interactive-preview": "Interactive Preview",
        "resume-tagline": "Specialized in Full-Stack Engineering, AI Systems, and Distributed Computing.",
        "resume-lang-toggle": "Switch Language Version",
        "term-resume": "resume/",
        "wisdom-title": "短歌行",
        "wisdom-quote": "对酒当歌，人生几何！\n譬如朝露，去日苦多。\n慨当以慷，忧思难忘。\n何以解忧？唯有杜康。\n\n青青子衿，悠悠我心。\n但为君故，沉吟至今。\n呦呦鹿鸣，食野之苹。\n我有嘉宾，鼓瑟吹笙。\n\n明明如月，何时可掇？\n忧从中来，不可断绝。\n越陌度阡，枉用相存。\n契阔谈讌，心念旧恩。\n\n月明星稀，乌鹊南飞。\n绕树三匝，何枝可依？\n山不厌高，海不厌深。\n周公吐哺，天下归心。",
        "wisdom-author": "曹操"
    },
    cn: {
        "nav-home": "首页", "nav-about": "关于", "nav-projects": "项目", "nav-exp": "工作经历", "nav-skills": "个人技能", "nav-contact": "联系", "nav-resume": "简历", "nav-edu": "教育背景",
        "hero-hi": "你好，我是",
        "hero-name": "刘上达",
        "hero-im-a": "我是一名",
        "hero-text-1": "全栈 Web 开发工程师",
        "hero-text-2": "致力于 AI 智能体与大模型的学习与研发",
        "hero-text-3": "欢迎走进我的世界，了解更多关于我的故事",
        "hero-view-proj": "查看项目",
        "hero-contact-me": "联系我",
        "hero-location": "温哥华, BC",
        "about-title": "关于我",
        "about-p1": "你好！我是刘上达，目前在 Fortinet 担任全栈 Web 开发人员，2025 年毕业于滑铁卢大学，获得计算机科学荣誉学士学位。",
        "about-p2": "我拥有扎实的系统编程（C++）与现代 Web 框架（React, Python）基础，喜欢解决全栈领域的复杂问题。我一直在寻找新的挑战和成长为优秀工程师的机会。",
        "proj-title": "项目展示",
        "skills-title": "技能专长",
        "exp-title": "工作经历",
        "edu-title": "教育背景",
        "edu-courses": "主修课程：人工智能、机器学习、算法、计算机视觉",
        "contact-title": "联系我",
        "contact-email": "电子邮箱",
        "contact-phone": "电话号码",
        "contact-socials": "社交账号与网络",
        "contact-wechat": "微信",
        "contact-instagram": "Instagram",
        "footer-desc": "我一直在寻找新的机会和合作。无论您有任何问题，还是只想打个招呼，我都会尽力给您回复！",
        "footer-btn": "打个招呼",
        "footer-copy": "用热爱与咖啡构建。",
        "role-fullstack": "全栈 Web 开发工程师",
        "role-intern": "软件开发实习生",
        "role-se-intern": "软件工程实习生",
        "role-ds-intern": "数据科学家实习生",
        "role-graduate": "计算机科学荣誉学士",
        "term-about": "关于我/",
        "term-proj": "项目/",
        "term-exp": "工作经历/",
        "term-edu": "教育背景/",
        "term-skills": "个人技能/",
        "resume-title": "个人简历",
        "resume-subtitle": "在线获取我的中英文专业 PDF 简历。",
        "resume-view-pdf": "全屏在线浏览",
        "resume-download-pdf": "下载 PDF",
        "resume-interactive-preview": "简历详情预览",
        "resume-tagline": "专注全栈开发、人工智能系统与分布式计算系统。",
        "resume-lang-toggle": "切换简历语言版本",
        "term-resume": "简历/",
        "wisdom-title": "短歌行",
        "wisdom-quote": "对酒当歌，人生几何！\n譬如朝露，去日苦多。\n慨当以慷，忧思难忘。\n何以解忧？唯有杜康。\n\n青青子衿，悠悠我心。\n但为君故，沉吟至今。\n呦呦鹿鸣，食野之苹。\n我有嘉宾，鼓瑟吹笙。\n\n明明如月，何时可掇？\n忧从中来，不可断绝。\n越陌度阡，枉用相存。\n契阔谈讌，心念旧恩。\n\n月明星稀，乌鹊南飞。\n绕树三匝，何枝可依？\n山不厌高，海不厌深。\n周公吐哺，天下归心。",
        "wisdom-author": "曹操"
    }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(() => {
        const saved = localStorage.getItem('lang');
        return (saved === 'en' || saved === 'cn') ? saved : 'en';
    });

    const t = (key) => translations[lang][key] || key;

    const toggleLang = () => {
        const nextLang = lang === 'en' ? 'cn' : 'en';
        setLang(nextLang);
        localStorage.setItem('lang', nextLang);
    };

    return (
        <LanguageContext.Provider value={{ lang, t, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
