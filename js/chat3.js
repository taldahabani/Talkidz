import { Conversation } from 'https://cdn.skypack.dev/@11labs/client';

const firstMessages = {
  jonny: {
    en: "Hey it’s Jonny, Woof Woof!. Nice to see you",
    ja: "やあ、ジョニーだよ、ワンワン！お会いできて嬉しいよ",
    zh: "嘿，我是乔尼，汪汪！很高兴见到你",
    de: "Hey, ich bin Jonny, Wau Wau! Schön dich zu sehen",
    hi: "अरे, मैं जॉनी हूँ, वूफ वूफ! आपको देखकर अच्छा लगा",
    fr: "Salut, c'est Jonny, Wouf Wouf ! Ravi de te voir",
    ko: "안녕, 나는 조니야, 멍멍! 만나서 반가워",
    pt: "Ei, sou o Jonny, au au! Bom te ver",
    it: "Ehi, sono Jonny, bau bau! Bello vederti",
    es: "¡Hola, soy Jonny, guau guau! Encantado de verte",
    id: "Hai, ini Jonny, guk guk! Senang bertemu denganmu",
    nl: "Hé, ik ben Jonny, woef woef! Leuk je te zien",
    tr: "Hey, ben Jonny, hav hav! Seni gördüğüme sevindim",
    fil: "Hoy, ako si Jonny, aw aw! Ikinagagalak kitang makita",
    pl: "Hej, jestem Jonny, hau hau! Miło cię widzieć",
    sv: "Hej, jag är Jonny, voff voff! Kul att se dig",
    bg: "Хей, аз съм Джони, бау бау! Радвам се да те видя",
    ro: "Hei, sunt Jonny, ham ham! Mă bucur să te văd",
    ar: "مرحباً، أنا جوني، هوف هوف! سعيد برؤيتك",
    cs: "Ahoj, tady Jonny, haf haf! Rád tě vidím",
    el: "Γεια, είμαι ο Jonny, γουφ γουφ! Χαίρομαι που σε βλέπω",
    fi: "Hei, olen Jonny, hau hau! Kiva nähdä sinua",
    hr: "Bok, ja sam Jonny, vau vau! Drago mi je što te vidim",
    ms: "Hai, saya Jonny, gong gong! Gembira bertemu kamu",
    sk: "Ahoj, tu je Jonny, haf haf! Rád ťa vidím",
    da: "Hej, jeg er Jonny, vuf vuf! Rart at se dig",
    ta: "ஹே, நான் ஜொன்னி, வூஃ வூஃ! உங்களை சந்தித்ததில் மகிழ்ச்சி",
    uk: "Гей, я Джонні, гав гав! Радий тебе бачити",
    ru: "Привет, я Джонни, гав-гав! Рад тебя видеть"
  },
  duck: {
    en: "Hey it's quack quack! Nice to see you!",
    ja: "やあ、ガーガーだよ！会えて嬉しい！",
    zh: "嘿，是嘎嘎！很高兴见到你！",
    de: "Hey, hier ist Quack Quack! Schön dich zu sehen!",
    hi: "अरे, ये क्वैक क्वैक है! आपको देखकर अच्छा लगा!",
    fr: "Hey, c'est Quack Quack ! Ravi de te voir !",
    ko: "안녕, 꽥꽥이야! 만나서 반가워!",
    pt: "Ei, é o Quack Quack! Bom te ver!",
    it: "Ehi, è Quack Quack! Bello vederti!",
    es: "¡Hola, es Quack Quack! ¡Encantado de verte!",
    id: "Hai, ini Quack Quack! Senang bertemu denganmu!",
    nl: "Hé, dit is Quack Quack! Leuk je te zien!",
    tr: "Hey, bu Quack Quack! Seni gördüğüme sevindim!",
    fil: "Hoy, si Quack Quack ito! Ikinagagalak kitang makita!",
    pl: "Hej, to Quack Quack! Miło cię widzieć!",
    sv: "Hej, det är Quack Quack! Kul att se dig!",
    bg: "Хей, това е Куак Куак! Радвам се да те видя!",
    ro: "Hei, e Quack Quack! Mă bucur să te văd!",
    ar: "مرحباً، إنه كواك كواك! سعيد برؤيتك!",
    cs: "Ahoj, to je Quack Quack! Rád tě vidím!",
    el: "Γεια, είναι ο Quack Quack! Χαίρομαι που σε βλέπω!",
    fi: "Hei, se on Quack Quack! Kiva nähdä sinua!",
    hr: "Bok, ovo je Quack Quack! Drago mi je što te vidim!",
    ms: "Hai, ini Quack Quack! Seronok dapat jumpa kamu!",
    sk: "Ahoj, to je Quack Quack! Rád ťa vidím!",
    da: "Hej, det er Quack Quack! Rart at se dig!",
    ta: "ஹே, இது க்வாக் க்வாக்! உங்களை சந்தித்ததில் சந்தோஷம்!",
    uk: "Гей, це Квак Квак! Радий тебе бачити!",
    ru: "Привет, это Квак Квак! Рад тебя видеть!"
  },
  eva: {
    en: "Hey it's Eva! Nice to see you!",
    ja: "やあ、エヴァです！会えて嬉しい！",
    zh: "嘿，我是Eva！很高兴见到你！",
    de: "Hey, hier ist Eva! Schön dich zu sehen!",
    hi: "अरे, ये ईवा हैं! आपको देखकर अच्छा लगा!",
    fr: "Hey, c'est Eva ! Ravi de te voir !",
    ko: "안녕, 에바야! 만나서 반가워!",
    pt: "Ei, sou a Eva! Bom te ver!",
    it: "Ehi, sono Eva! Bello vederti!",
    es: "¡Hola, soy Eva! ¡Encantado de verte!",
    id: "Hai, ini Eva! Senang bertemu denganmu!",
    nl: "Hé, ik ben Eva! Leuk je te zien!",
    tr: "Hey, ben Eva! Seni gördüğüme sevindim!",
    fil: "Hoy, ako si Eva! Ikinagagalak kitang makita!",
    pl: "Hej, tu Eva! Miło cię widzieć!",
    sv: "Hej, det är Eva! Kul att se dig!",
    bg: "Хей, аз съм Ева! Радвам се да те видя!",
    ro: "Hei, sunt Eva! Mă bucur să te văd!",
    ar: "مرحباً، أنا إيفا! سعيد برؤيتك!",
    cs: "Ahoj, tady Eva! Rád tě vidím!",
    el: "Γεια, είμαι η Εύα! Χαίρομαι που σε βλέπω!",
    fi: "Hei, olen Eva! Kiva nähdä sinua!",
    hr: "Bok, ja sam Eva! Drago mi je što te vidim!",
    ms: "Hai, saya Eva! Seronok berjumpa kamu!",
    sk: "Ahoj, tu je Eva! Rád ťa vidím!",
    da: "Hej, det er Eva! Rart at se dig!",
    ta: "ஹே, நான் ஈவா! உங்களைப் பார்க்க மகிழ்ச்சி!",
    uk: "Гей, я Ева! Радий тебе бачити!",
    ru: "Привет, это Ева! Рад тебя видеть!"
  },
  fox: {
    en: "Hello! It’s Foxxy, here to spark your creativity!",
    ja: "こんにちは！フォクシーです。あなたの創造力を刺激しに来ました！",
    zh: "你好！我是Foxxy，来激发你的创造力！",
    de: "Hallo! Ich bin Foxxy, hier um deine Kreativität anzuregen!",
    hi: "नमस्ते! मैं फॉक्सी हूँ, आपकी रचनात्मकता को जगाने के लिए!",
    fr: "Bonjour ! C’est Foxxy, ici pour stimuler ta créativité !",
    ko: "안녕! 폭씨예요, 당신의 창의력을 자극하러 왔어요!",
    pt: "Olá! Sou a Foxxy, aqui para estimular sua criatividade!",
    it: "Ciao! Sono Foxxy, qui per stuzzicare la tua creatività!",
    es: "¡Hola! Soy Foxxy, aquí para estimular tu creatividad!",
    id: "Halo! Ini Foxxy, siap memicu kreativitasmu!",
    nl: "Hallo! Ik ben Foxxy, hier om je creativiteit te prikkelen!",
    tr: "Merhaba! Ben Foxxy, yaratıcılığını ateşlemeye geldim!",
    fil: "Kumusta! Ako si Foxxy, narito upang pukawin ang iyong pagkamalikhain!",
    pl: "Cześć! Jestem Foxxy, by pobudzić twoją kreatywność!",
    sv: "Hej! Jag är Foxxy, här för att stimulera din kreativitet!",
    bg: "Здравей! Аз съм Фокси, тук съм да ти вдъхновя креативността!",
    ro: "Salut! Sunt Foxxy, aici să-ți stârnesc creativitatea!",
    ar: "مرحباً! أنا فوكسّي، جئت لأحفّز إبداعك!",
    cs: "Ahoj! Tady Foxxy, přišel jsem podnítit tvou kreativitu!",
    el: "Γεια σου! Είμαι η Foxxy, εδώ για να ενθαρρύνω τη δημιουργικότητά σου!",
    fi: "Hei! Olen Foxxy, täällä herättämässä luovuuttasi!",
    hr: "Bok! Ja sam Foxxy, tu sam da potaknem tvoju kreativnost!",
    ms: "Hai! Saya Foxxy, datang untuk mencetuskan kreativiti anda!",
    sk: "Ahoj! Tu je Foxxy, aby som rozprúdil tvoju kreativitu!",
    da: "Hej! Jeg er Foxxy, her for at vække din kreativitet!",
    ta: "வணக்கம்! இது Foxxy, உங்களின் படைப்பாற்றலைத் தூண்ட வந்துள்ளேன்!",
    uk: "Привіт! Я Foxxy, тут щоб надихнути твою креативність!",
    ru: "Привет! Я Фокси, чтобы пробудить твоё творчество!"
  },
  whimsy: {
    en: "Hey it's Whimsy, nice to see you!",
    ja: "やあ、ウィ姆ジーだよ、会えて嬉しい！",
    zh: "嘿，我是Whimsy，很高兴见到你！",
    de: "Hey, hier ist Whimsy, schön dich zu sehen!",
    hi: "अरे, यह Whimsy है, आपको देखकर अच्छा लगा!",
    fr: "Hey, c'est Whimsy, ravi de te voir !",
    ko: "안녕, 나 윔지야, 만나서 반가워!",
    pt: "Ei, é o Whimsy, bom te ver!",
    it: "Ehi, sono Whimsy, bello vederti!",
    es: "¡Hola, soy Whimsy, encantado de verte!",
    id: "Hai, ini Whimsy, senang bertemu denganmu!",
    nl: "Hé, hier is Whimsy, leuk je te zien!",
    tr: "Hey, ben Whimsy, seni gördüğüme sevindim!",
    fil: "Hoy, ako si Whimsy, ikinagagalak kitang makita!",
    pl: "Hej, tu Whimsy, miło cię widzieć!",
    sv: "Hej, det är Whimsy, kul att se dig!",
    bg: "Хей, аз съм Уимзи, радвам се да те видя!",
    ro: "Hei, eu sunt Whimsy, mă bucur să te văd!",
    ar: "مرحباً، أنا ويمزي، سعيد برؤيتك!",
    cs: "Ahoj, tady Whimsy, rád tě vidím!",
    el: "Γεια, είμαι ο Whimsy, χαίρομαι που σε βλέπω!",
    fi: "Hei, olen Whimsy, kiva nähdä sinua!",
    hr: "Bok, ja sam Whimsy, drago mi je što te vidim!",
    ms: "Hai, saya Whimsy, seronok bertemu kamu!",
    sk: "Ahoj, tu je Whimsy, rád ťa vidím!",
    da: "Hej, det er Whimsy, rart at se dig!",
    ta: "ஹே, நான் விம்சி, உங்களைச் சந்தித்ததில் சந்தோஷம்!",
    uk: "Гей, я Whimsy, радий тебе бачити!",
    ru: "Привет, это Уимзи, рад тебя видеть!"
  },
  cat: {
    en: "Hey it's noodles! nice to see you!",
    ja: "やあ、ヌードルズだよ！会えて嬉しい！",
    zh: "嘿，是Noodles！很高兴见到你！",
    de: "Hey, hier sind Noodles! Schön dich zu sehen!",
    hi: "अरे, ये नूडल्स हैं! आपको देखकर अच्छा लगा!",
    fr: "Hey, c'est Noodles ! Ravi de te voir !",
    ko: "안녕, 누들스야! 만나서 반가워!",
    pt: "Ei, são os Noodles! Bom te ver!",
    it: "Ehi, sono i Noodles! Bello vederti!",
    es: "¡Hola, soy Noodles! ¡Encantado de verte!",
    id: "Hai, ini Noodles! Senang bertemu denganmu!",
    nl: "Hé, dit is Noodles! Leuk je te zien!",
    tr: "Hey, bunlar Noodles! Seni gördüğüme sevindim!",
    fil: "Hoy, Noodles ito! Ikinagagalak kitang makita!",
    pl: "Hej, to Noodles! Miło cię widzieć!",
    sv: "Hej, det är Noodles! Kul att se dig!",
    bg: "Хей, това са Нудълс! Радвам се да те видя!",
    ro: "Hei, sunt Noodles! Mă bucur să te văd!",
    ar: "مرحباً، إنه نودلز! سعيد برؤيتك!",
    cs: "Ahoj, tady Noodles! Rád tě vidím!",
    el: "Γεια, είμαι o Noodles! Χαίρομαι που σε βλέπω!",
    fi: "Hei, tässä on Noodles! Kiva nähdä sinua!",
    hr: "Bok, to je Noodles! Drago mi je što te vidim!",
    ms: "Hai, ini Noodles! Seronok berjumpa kamu!",
    sk: "Ahoj, to sú Noodles! Rád ťa vidím!",
    da: "Hej, det er Noodles! Rart at se dig!",
    ta: "ஹே, இது நூடுல்ஸ்! உங்களைச் சந்தித்ததில் மகிழ்ச்சி!",
    uk: "Гей, це Noodles! Радий тебе бачити!",
    ru: "Привет, это Noodles! Рад тебя видеть!"
  },
  emma: {
    en: "Hey It's Emma, I missed you!",
    ja: "やあ、エマだよ、会えて嬉しい！",
    zh: "嘿，我是Emma，我想你了！",
    de: "Hey, hier ist Emma, ich habe dich vermisst!",
    hi: "अरे, ये एम्मा हैं, मुझे आपकी याद आ रही थी!",
    fr: "Hey, c'est Emma, tu m'as manqué !",
    ko: "안녕, 나 에마야, 보고 싶었어!",
    pt: "Ei, sou a Emma, senti sua falta!",
    it: "Ehi, sono Emma, mi sei mancato!",
    es: "¡Hola, soy Emma, te extrañé!",
    id: "Hai, ini Emma, aku merindukanmu!",
    nl: "Hé, ik ben Emma, ik heb je gemist!",
    tr: "Hey, ben Emma, seni özledim!",
    fil: "Hoy, ako si Emma, namiss kita!",
    pl: "Hej, tu Emma, tęskniłam za tobą!",
    sv: "Hej, det är Emma, jag har saknat dig!",
    bg: "Хей, аз съм Ема, липсваше ми!",
    ro: "Hei, sunt Emma, mi-a fost dor de tine!",
    ar: "مرحباً، أنا إيما، لقد اشتقت إليك!",
    cs: "Ahoj, tady Emma, chyběl jsi mi!",
    el: "Γεια, είμαι η Emma, μου έλειψες!",
    fi: "Hei, olen Emma, minulla oli ikävä sinua!",
    hr: "Bok, ja sam Emma, nedostajao si mi!",
    ms: "Hai, saya Emma, saya rindu padamu!",
    sk: "Ahoj, tu je Emma, chýbal si mi!",
    da: "Hej, det er Emma, jeg har savnet dig!",
    ta: "ஹே, நான் எம்ம், உங்களைப் பிரிந்திருந்தேன்!",
    uk: "Гей, я Емма, я сумувала за тобою!",
    ru: "Привет, я Эмма, я скучала по тебе!"
  },
  monkey: {
    en: "Hey it's Bongo the monkey! Nice to see you!",
    ja: "やあ、ボンゴという猿だよ！会えて嬉しいな！",
    zh: "嘿，我是猴子Bongo！很高兴见到你！",
    de: "Hey, ich bin Bongo der Affe! Schön dich zu sehen!",
    hi: "अरे, मैं बंदर बोंगो हूं! आपसे मिलकर अच्छा लगा!",
    fr: "Salut, c'est Bongo le singe ! Content de te voir !",
    ko: "안녕, 난 원숭이 봉고야! 만나서 반가워!",
    pt: "Oi, sou o Bongo, o macaco! Prazer em te ver!",
    it: "Ciao, sono Bongo la scimmia! Bello vederti!",
    es: "¡Hola, soy Bongo el mono! ¡Qué gusto verte!",
    id: "Hai, aku Bongo si monyet! Senang bertemu denganmu!",
    nl: "Hé, ik ben Bongo de aap! Leuk je te zien!",
    tr: "Merhaba, ben maymun Bongo! Seni görmek güzel!",
    fil: "Hello, ako si Bongo ang unggoy! Masaya kitang makita!",
    pl: "Cześć, jestem Bongo, małpka! Miło cię widzieć!",
    sv: "Hej, jag är Bongo apan! Kul att se dig!",
    bg: "Здрасти, аз съм маймунката Бонго! Радвам се да те видя!",
    ro: "Bună, sunt Bongo maimuța! Mă bucur să te văd!",
    ar: "مرحباً، أنا بونغو القرد! سعيد برؤيتك!",
    cs: "Ahoj, já jsem opička Bongo! Rád tě vidím!",
    el: "Γεια, είμαι ο Μπόνγκο το μαϊμουδάκι! Χαίρομαι που σε βλέπω!",
    fi: "Hei, olen Bongo-apina! Kiva nähdä sinua!",
    hr: "Bok, ja sam majmun Bongo! Drago mi je što te vidim!",
    ms: "Hai, saya Bongo si monyet! Seronok berjumpa dengan anda!",
    sk: "Ahoj, ja som opička Bongo! Rád ťa vidím!",
    da: "Hej, jeg er Bongo aben! Dejligt at se dig!",
    ta: "வணக்கம், நான் குரங்கு பொங்கோ! உங்களை பார்த்தது மகிழ்ச்சி!",
    uk: "Привіт, я мавпочка Бонго! Радий тебе бачити!",
    ru: "Привет, я обезьянка Бонго! Рад тебя видеть!"
  },
  cupcake: {
    en: "Hey It's Cupcake! nice to see you",
    ja: "やあ、カップケーキだよ！会えて嬉しい！",
    zh: "嘿，我是Cupcake！很高兴见到你",
    de: "Hey, hier ist Cupcake! Schön dich zu sehen",
    hi: "अरे, ये कपकेक है! आपको देखकर अच्छा लगा",
    fr: "Hey, c'est Cupcake ! Ravi de te voir",
    ko: "안녕, 컵케이크야! 만나서 반가워",
    pt: "Ei, é a Cupcake! Bom te ver",
    it: "Ehi, è Cupcake! Bello vederti",
    es: "¡Hola, soy Cupcake! Encantado de verte",
    id: "Hai, ini Cupcake! Senang bertemu denganmu",
    nl: "Hé, dit is Cupcake! Leuk je te zien",
    tr: "Hey, bu Cupcake! Seni gördüğüme sevindim",
    fil: "Hoy, ako si Cupcake! Ikinagagalak kitang makita",
    pl: "Hej, to Cupcake! Miło cię widzieć",
    sv: "Hej, det är Cupcake! Kul att se dig",
    bg: "Хей, това е Къпкейк! Радвам се да те видя",
    ro: "Hei, e Cupcake! Mă bucur să te văd",
    ar: "مرحباً، إنه كب كيك! سعيد برؤيتك",
    cs: "Ahoj, to je Cupcake! Rád tě vidím",
    el: "Γεια, είμαι η Cupcake! Χαίρομαι που σε βλέπω",
    fi: "Hei, tässä on Cupcake! Kiva nähdä sinua",
    hr: "Bok, ovo je Cupcake! Drago mi je što te vidim",
    ms: "Hai, ini Cupcake! Seronok berjumpa kamu",
    sk: "Ahoj, tu je Cupcake! Rád ťa vidím",
    da: "Hej, det er Cupcake! Rart at se dig",
    ta: "ஹே, இது கப் கேக்! உங்களைச் சந்தித்ததில் மகிழ்ச்சி",
    uk: "Гей, це Cupcake! Радий тебе бачити",
    ru: "Привет, это Cupcake! Рад тебя видеть"
  }
};

const languages = [
  { code: 'en', flag: '🇺🇸', name: 'English (USA)', firstMessage: "Hey, Nice To See You!" },
  { code: 'en', flag: '🇬🇧', name: 'English (UK)', firstMessage: "Hey, Nice To See You!" },
  { code: 'ja', flag: '🇯🇵', name: 'Japanese', firstMessage: "やあ、お会いできて嬉しいです！" },
  { code: 'zh', flag: '🇨🇳', name: 'Chinese', firstMessage: "嘿，很高兴见到你！" },
  { code: 'de', flag: '🇩🇪', name: 'German', firstMessage: "Hey, schön dich zu sehen!" },
  { code: 'hi', flag: '🇮🇳', name: 'Hindi', firstMessage: "अरे, आपसे मिलकर खुशी हुई!" },
  { code: 'fr', flag: '🇫🇷', name: 'French (France)', firstMessage: "Hey, ravi de te voir !" },
  { code: 'fr', flag: '🇨🇦', name: 'French (Canada)', firstMessage: "Hey, content de te voir !" },
  { code: 'ko', flag: '🇰🇷', name: 'Korean', firstMessage: "안녕, 만나서 반가워!" },
  { code: 'pt', flag: '🇧🇷', name: 'Portuguese (Brazil)', firstMessage: "Ei, que bom te ver!" },
  { code: 'pt', flag: '🇵🇹', name: 'Portuguese (Portugal)', firstMessage: "Ei, é bom ver-te!" },
  { code: 'it', flag: '🇮🇹', name: 'Italian', firstMessage: "Ehi, è bello vederti!" },
  { code: 'es', flag: '🇪🇸', name: 'Spanish (Spain)', firstMessage: "¡Hola, encantado de verte!" },
  { code: 'es', flag: '🇲🇽', name: 'Spanish (Mexico)', firstMessage: "¡Hola, qué gusto verte!" },
  { code: 'id', flag: '🇮🇩', name: 'Indonesian', firstMessage: "Hai, senang bertemu denganmu!" },
  { code: 'nl', flag: '🇳🇱', name: 'Dutch', firstMessage: "Hé, leuk je te zien!" },
  { code: 'tr', flag: '🇹🇷', name: 'Turkish', firstMessage: "Hey, seni gördüğüme sevindim!" },
  { code: 'fil', flag: '🇵🇭', name: 'Filipino', firstMessage: "Hey, ikinagagalak kitang makita!" },
  { code: 'pl', flag: '🇵🇱', name: 'Polish', firstMessage: "Hej, miło cię widzieć!" },
  { code: 'sv', flag: '🇸🇪', name: 'Swedish', firstMessage: "Hej, kul att se dig!" },
  { code: 'bg', flag: '🇧🇬', name: 'Bulgarian', firstMessage: "Хей, радвам се да те видя!" },
  { code: 'ro', flag: '🇷🇴', name: 'Romanian', firstMessage: "Hei, mă bucur să te văd!" },
  { code: 'ar', flag: '🇸🇦', name: 'Arabic (Saudi Arabia)', firstMessage: "مرحباً، سعيد برؤيتك!" },
  { code: 'ar', flag: '🇦🇪', name: 'Arabic (UAE)', firstMessage: "مرحباً، سعيد برؤيتك!" },
  { code: 'cs', flag: '🇨🇿', name: 'Czech', firstMessage: "Ahoj, rád tě vidím!" },
  { code: 'el', flag: '🇬🇷', name: 'Greek', firstMessage: "Γεια, χαίρομαι που σε βλέπω!" },
  { code: 'fi', flag: '🇫🇮', name: 'Finnish', firstMessage: "Hei, kiva nähdä sinua!" },
  { code: 'hr', flag: '🇭🇷', name: 'Croatian', firstMessage: "Hej, drago mi je što te vidim!" },
  { code: 'ms', flag: '🇲🇾', name: 'Malay', firstMessage: "Hai, gembira dapat berjumpa kamu!" },
  { code: 'sk', flag: '🇸🇰', name: 'Slovak', firstMessage: "Ahoj, rád ťa vidím!" },
  { code: 'da', flag: '🇩🇰', name: 'Danish', firstMessage: "Hej, rart at se dig!" },
  { code: 'ta', flag: '🇮🇳', name: 'Tamil', firstMessage: "ஹே, உங்களை சந்திப்பதில் சந்தோஷமாக உள்ளது!" },
  { code: 'uk', flag: '🇺🇦', name: 'Ukrainian', firstMessage: "Гей, радий тебе бачити!" },
  { code: 'ru', flag: '🇷🇺', name: 'Russian', firstMessage: "Привет, рад тебя видеть!" }
];

const characters = {
  jonny: {
    id: 'jonny',
    name: 'Jonny',
    agentId: 'xiC8L3SOeHwYyCLLnYxF',
    assets: {
      idle: '/characters/jonny/assets/jonny-idle.mp4',
      talking: '/characters/jonny/assets/jonny-talk.mp4',
      preview: '/characters/jonny/assets/jonny.jpg',
      icon: '/characters/jonny/assets/jonny-icon.jpg'
    }
  },
  duck: {
    id: 'duck',
    name: 'Quacky Duck',
    agentId: '2AnipCyOETtlieJLCfsr',
    assets: {
      idle: '/assets/duck-idle.mp4',
      talking: '/assets/duck-talk.mp4',
      preview: '/assets/duck.jpg',
      icon: '/assets/duck-icon.jpg'
    }
  },
  eva: {
    id: 'eva',
    name: 'Eva',
    agentId: 'UWxUKTTWxyHwoEfDDic2',
    assets: {
      idle: '/characters/robo/assets/eva-idle.mp4',
      talking: '/characters/robo/assets/eva-talking.mp4',
      preview: '/characters/robo/assets/eva.jpg',
      icon: '/characters/robo/assets/eva-icon.jpg'
    }
  },
  fox: {
    id: 'fox',
    name: 'Foxxy',
    agentId: 'XJ3eFR10myzK01A10BlN',
    assets: {
      idle: '/characters/fox/assets/fox-idle.mp4',
      talking: '/characters/fox/assets/fox-talking.mp4',
      preview: '/characters/fox/assets/foxxy.jpg',
      icon: '/characters/fox/assets/fox.jpg'
    }
  },
  whimsy: {
    id: 'whimsy',
    name: 'Clumsy Whimsy',
    agentId: 'jvbiMPIQOUiUs5GkepcA',
    assets: {
      idle: '/characters/whimsy/assets/idle-whimsy.mp4',
      talking: '/characters/whimsy/assets/speaking-whimsy.mp4',
      preview: '/characters/whimsy/assets/whimsy.jpg',
      icon: '/characters/whimsy/assets/whimsy.png'
    }
  },
  cat: {
    id: 'cat',
    name: 'Noodles',
    agentId: '4gWkcgFThRtBuhM5akxT',
    assets: {
      idle: '/characters/cat/assets/cat-idle.mp4',
      talking: '/characters/cat/assets/cat-talking.mp4',
      preview: '/characters/cat/assets/cat.png',
      icon: '/characters/cat/assets/cat.jpg'
    }
  },
  emma: {
    id: 'emma',
    name: 'Emma',
    agentId: 'UFCiWykxf7I8pgANcBuJ',
    assets: {
      idle: '/characters/emma/assets/idle.mp4',
      talking: '/characters/emma/assets/speaking.mp4',
      preview: '/characters/emma/assets/emma.png',
      icon: '/characters/emma/assets/emma.jpg'
    }
  },
  monkey: {
    id: 'monkey',
    name: 'Bongo The Monkey',
    agentId: 'CfE9AbfQUFEUQ6rMHxh6',
    assets: {
      idle: '/assets/monkey-idle.mp4',
      talking: '/assets/monkey-talk.mp4',
      preview: '/assets/monkey.jpg',
      icon: '/assets/monkey-icon.jpg'
    }
  },
  cupcake: {
    id: 'cupcake',
    name: 'Cupcake',
    agentId: 'iogofk9qnqvE98RwV1Kk',
    assets: {
      idle: '/characters/cupcake/assets/cupcake-blinking.mp4',
      talking: '/characters/cupcake/assets/cupcake-talk.mp4',
      preview: '/characters/cupcake/assets/cupcake.png',
      icon: '/characters/cupcake/assets/cupcake.jpg'
    }
  }
};

class ChatController {
  constructor(characterId, languageCode) {
    this.character = characters[characterId];
    this.currentLanguage = languageCode || 'en';
    this.conversation = null;
    this.videosLoaded = { idle: false, speaking: false };
    this.greenScreenEnabled = false;
    this.tempCanvas = document.createElement('canvas');
    this.tempCtx = this.tempCanvas.getContext('2d');

    this.setupElements();
    this.setupCharacter();
    this.setupEventListeners();
    this.preloadVideos();
    this.updateBackground('idle');
    this.setupCharacterMenu();
    this.setupLanguageMenu();
    this.setupGreenScreen();
    
    this.loadingScreen.classList.remove('hidden');
  }

  setupElements() {
    this.backgroundImage = document.querySelector('.background.image');
    this.idleVideo = document.getElementById('idleVideo');
    this.speakingVideo = document.getElementById('speakingVideo');
    this.startButton = document.getElementById('startButton');
    this.statusDot = document.querySelector('.status-dot');
    this.statusText = document.querySelector('.status-text');
    this.characterName = document.querySelector('.character-name');
    this.characterMenu = document.querySelector('.character-menu');
    this.characterMenuContent = document.querySelector('.character-menu-content');
    this.characterSelectButton = document.querySelector('.character-select-button');
    this.loadingScreen = document.querySelector('.character-loading');

    this.languageSelectButton = document.getElementById('languageSelectButton');
    this.currentLanguageFlag = document.getElementById('currentLanguageFlag');
    this.languageMenu = document.getElementById('languageMenu');
    this.languageMenuContent = document.getElementById('languageMenuContent');
  }

  setupGreenScreen() {
    const button = document.querySelector('.green-screen-button');
    button.addEventListener('click', () => {
      this.greenScreenEnabled = !this.greenScreenEnabled;
      if (this.greenScreenEnabled) {
        this.backgroundImage.style.background = 'url("/background.jpg") center/cover no-repeat';
        this.enableGreenScreen();
      } else {
        this.backgroundImage.style.background = `url('${this.character.assets.preview}') center/contain no-repeat`;
        this.disableGreenScreen();
      }
    });
  }

  isGreen(r, g, b) {
    const greenDominance = g / ((r + b) / 2);
    const threshold = 1.6;
    
    if (greenDominance > threshold) {
      const brightness = (r + g + b) / 3;
      if (brightness > 30 && brightness < 225) {
        return Math.min((greenDominance - threshold) / 0.4, 1);
      }
    }
    return 0;
  }

  processGreenScreen(video) {
    if (!this.greenScreenEnabled) return;
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    ctx.drawImage(video, 0, 0);
    const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = frame.data;

    for (let i = 0; i < data.length; i += 4) {
      const greenness = this.isGreen(data[i], data[i + 1], data[i + 2]);
      if (greenness > 0) {
        data[i + 3] = Math.round(255 * (1 - greenness));
      }
    }

    ctx.putImageData(frame, 0, 0);
    return canvas;
  }

  enableGreenScreen() {
    [this.idleVideo, this.speakingVideo].forEach(video => {
      const originalPlay = video.play;
      video.play = async () => {
        await originalPlay.call(video);
        const processFrame = () => {
          if (this.greenScreenEnabled && !video.paused) {
            const processed = this.processGreenScreen(video);
            if (processed) {
              video.style.opacity = '0';
              video.nextElementSibling?.remove();
              processed.style.position = 'absolute';
              processed.style.top = '0';
              processed.style.left = '0';
              processed.style.width = '100%';
              processed.style.height = '100%';
              processed.style.objectFit = 'contain';
              video.parentElement.appendChild(processed);
            }
            requestAnimationFrame(processFrame);
          }
        };
        requestAnimationFrame(processFrame);
      };
    });
  }

  disableGreenScreen() {
    [this.idleVideo, this.speakingVideo].forEach(video => {
      video.style.opacity = '';
      video.nextElementSibling?.remove();
    });
  }

  setupCharacter() {
    document.title = `${this.character.name} - Talkidz`;
    this.characterName.textContent = this.character.name;
    this.backgroundImage.style.background =
      `url('${this.character.assets.preview}') center/contain no-repeat`;
    this.idleVideo.src = this.character.assets.idle;
    this.speakingVideo.src = this.character.assets.talking;

    this.characterSelectButton.innerHTML = `
      <div class="character-icon">
        <img src="${this.character.assets.icon}" alt="${this.character.name}">
      </div>`;
  }

  setupCharacterMenu() {
    this.characterMenuContent.innerHTML = '';
    Object.values(characters).forEach(char => {
      const option = document.createElement('div');
      option.className = `character-option ${char.id === this.character.id ? 'active' : ''}`;
      option.innerHTML = `<img src="${char.assets.icon}" alt="${char.name}">`;
      option.addEventListener('click', () => this.changeCharacter(char.id));
      this.characterMenuContent.appendChild(option);
    });

    this.characterSelectButton.addEventListener('click', (e) => {
      e.stopPropagation();
      this.characterMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      const insideMenu = this.characterMenu.contains(e.target);
      const clickedButton = this.characterSelectButton.contains(e.target);
      if (!insideMenu && !clickedButton) {
        this.characterMenu.classList.remove('active');
      }
    });
  }

  setupLanguageMenu() {
    this.languageMenuContent.innerHTML = '';

    languages.forEach(lang => {
      const option = document.createElement('div');
      option.className = 'language-option';
      if (lang.code === this.currentLanguage) {
        option.classList.add('active');
      }
      option.innerHTML = `
          <span class="language-option-flag">${lang.flag}</span>
          <span>${lang.name}</span>
      `;
      option.addEventListener('click', () => this.changeLanguage(lang.code));
      this.languageMenuContent.appendChild(option);
    });

    this.updateLanguageFlag(this.currentLanguage);

    this.languageSelectButton.addEventListener('click', (e) => {
      e.stopPropagation();
      this.languageMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      const insideMenu = this.languageMenu.contains(e.target);
      const clickedButton = this.languageSelectButton.contains(e.target);
      if (!insideMenu && !clickedButton) {
        this.languageMenu.classList.remove('active');
      }
    });
  }

  updateLanguageFlag(langCode) {
    const selectedLang = languages.find(l => l.code === langCode)
                       || languages.find(l => l.code === 'en');
    if (selectedLang) {
      this.currentLanguageFlag.textContent = selectedLang.flag;
    } else {
      this.currentLanguageFlag.textContent = '🇺🇸';
    }
  }

  markActiveLanguage(newCode) {
    const allLangOptions = document.querySelectorAll('.language-option');
    allLangOptions.forEach(opt => opt.classList.remove('active'));

    const newActive = Array.from(allLangOptions).find(
      opt => opt.innerText.includes(this.getLangName(newCode))
    );
    if (newActive) newActive.classList.add('active');
  }

  getLangName(code) {
    const found = languages.find(l => l.code === code);
    return found ? found.name : '';
  }

  async changeLanguage(newCode) {
    if (this.conversation) {
      await this.endConversation();
    }
    const url = new URL(window.location);
    url.searchParams.set('language', newCode);
    window.history.pushState({}, '', url);

    this.currentLanguage = newCode;
    this.updateLanguageFlag(newCode);
    this.markActiveLanguage(newCode);
    this.languageMenu.classList.remove('active');
  }

  async changeCharacter(characterId) {
    if (this.conversation) {
      await this.endConversation();
    }
    this.loadingScreen.classList.remove('hidden');
    this.videosLoaded = { idle: false, speaking: false };

    const url = new URL(window.location);
    url.searchParams.set('character', characterId);
    window.history.pushState({}, '', url);

    this.character = characters[characterId];
    this.setupCharacter();
    this.preloadVideos();
    this.updateBackground('idle');

    document.querySelectorAll('.character-option').forEach(option => {
      option.classList.toggle('active', option.querySelector('img').src.includes(characterId));
    });

    this.characterMenu.classList.remove('active');
  }

  updateStatus(mode) {
    this.statusDot.classList.remove('listening');
    switch (mode) {
      case 'listening':
        this.statusText.textContent = 'Listening...';
        this.statusDot.classList.add('listening');
        this.statusDot.style.background = '#22c55e';
        break;
      case 'speaking':
        this.statusText.textContent = 'Speaking...';
        this.statusDot.style.background = '#3b82f6';
        break;
      default:
        this.statusText.textContent = 'Ready to chat';
        this.statusDot.style.background = '#22c55e';
    }
  }

  preloadVideos() {
    this.idleVideo.load();
    this.idleVideo.addEventListener('loadeddata', () => {
      this.videosLoaded.idle = true;
      this.backgroundImage.style.opacity = '0';
      this.idleVideo.classList.add('active');
      this.idleVideo.play().catch(console.error);
      this.loadingScreen.classList.add('hidden');
    });

    this.speakingVideo.load();
    this.speakingVideo.addEventListener('loadeddata', () => {
      this.videosLoaded.speaking = true;
    });
  }

  updateBackground(mode) {
    if (mode === 'speaking' && this.videosLoaded.speaking) {
      this.idleVideo.classList.remove('active');
      this.speakingVideo.classList.add('active');
      this.speakingVideo.play().catch(console.error);
    } else if (this.videosLoaded.idle) {
      this.speakingVideo.classList.remove('active');
      this.idleVideo.classList.add('active');
      this.idleVideo.play().catch(console.error);
    } else {
      this.backgroundImage.style.opacity = '1';
      [this.idleVideo, this.speakingVideo].forEach(video =>
        video.classList.remove('active')
      );
    }
    this.updateStatus(mode);
  }

  triggerConfetti() {
    const options = { origin: { y: 0.7 } };
    const count = 200;

    [
      { spread: 26, startVelocity: 55, particleRatio: 0.25 },
      { spread: 60, particleRatio: 0.2 },
      { spread: 100, decay: 0.91, scalar: 0.8, particleRatio: 0.35 },
      { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2, particleRatio: 0.1 },
      { spread: 120, startVelocity: 45, particleRatio: 0.1 }
    ].forEach(opts => {
      confetti({
        ...options,
        ...opts,
        particleCount: Math.floor(count * opts.particleRatio)
      });
    });
  }

  async startConversation() {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      this.triggerConfetti();
      this.startButton.classList.add('active');
      this.startButton.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24"
             fill="none" stroke="white" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      `;

      const charMessages = firstMessages[this.character.id] || {};
      const selectedMsg = charMessages[this.currentLanguage] || "Hello!";

      this.conversation = await Conversation.startSession({
        agentId: this.character.agentId,
        overrides: {
          agent: {
            language: this.currentLanguage || 'en',
            firstMessage: selectedMsg
          }
        },
        onModeChange: (mode) => this.updateBackground(mode.mode),
        onConnect: () => this.updateBackground('listening'),
        onDisconnect: () => {
          this.updateBackground('idle');
          this.startButton.classList.remove('active');
          this.startButton.textContent = 'Start Conversation';
        },
        onError: (error) => {
          console.error('Conversation error:', error);
          this.updateBackground('idle');
          this.startButton.classList.remove('active');
          this.startButton.textContent = 'Start Conversation';
        }
      });
    } catch (error) {
      console.error('Error starting conversation:', error);
      this.updateBackground('idle');
      this.startButton.classList.remove('active');
      this.startButton.textContent = 'Start Conversation';
    }
  }

  async endConversation() {
    if (this.conversation) {
      try {
        await this.conversation.endSession();
      } catch (error) {
        console.error('Error ending conversation:', error);
      } finally {
        this.conversation = null;
        this.updateBackground('idle');
        this.startButton.classList.remove('active');
        this.startButton.textContent = 'Start Conversation';
      }
    }
  }

  setupEventListeners() {
    this.startButton.addEventListener('click', async () => {
      if (this.conversation) {
        await this.endConversation();
      } else {
        await this.startConversation();
      }
    });
  }
}

window.shareCharacter = () => {
  if (navigator.share) {
    navigator.share({
      title: `Chat with ${chat.character.name} on Talkidz`,
      text: `Come chat with ${chat.character.name}, your new AI friend!`,
      url: window.location.href
    }).catch(console.error);
  }
};

const urlParams = new URLSearchParams(window.location.search);
const characterId = urlParams.get('character') || 'jonny';
const languageCode = urlParams.get('language') || 'en';

const chat = new ChatController(characterId, languageCode);
