/* ==========================================================================
   Easy ISP Solution — 100% Pure Bangla & Pure English Bilingual Controller
   Chrome Auto-Translate Protected (translate="no")
   ========================================================================== */

(function () {
  'use strict';

  let currentLang = localStorage.getItem('easyisp_site_lang') || 'bn';

  const I18N = {
    bn: {
      pageTitle: 'ইজি আইএসপি সলিউশন — আপনার আইএসপি ব্যবসার স্মার্ট ডিজিটাল পার্টনার',
      brandName: 'ইজি আইএসপি <span>সলিউশন</span>',
      navModules: 'আমাদের মডিউলসমূহ',
      navTeam: 'ফাউন্ডার ও টিম',
      navContact: 'যোগাযোগ',
      navDemo: 'ফ্রি ডেমো',

      heroEyebrow: 'আপনার আইএসপি ব্যবসার স্মার্ট ডিজিটাল পার্টনার',
      heroTitle: 'এক সফটওয়্যারেই <span class="grad-text">পুরো আইএসপি ব্যবসার</span> সহজ সমাধান',
      heroDesc: 'দৈনিক হিসাব-নিকাশ, বিকাশ পেমেন্ট, মাইক্রোটিক থেকে গ্রাহক সচল-বন্ধ, অটো ও বাল্ক এসএমএস, স্মার্ট ওএলটি মনিটরিং এবং রিসেলার ম্যানেজমেন্ট — সবকিছু একদম সহজ বাংলা ও ইংরেজি ড্যাশবোর্ডে।',
      heroDemo: '📞 ফ্রি ডেমো নিন',
      heroVideo: '▶ ৪৭ সেকেন্ডের ভিডিও দেখুন',
      heroExplore: 'সব মডিউল দেখুন ↓',
      hl1: 'দৈনিক হিসাব ও বিকাশ পেমেন্ট',
      hl2: 'মাইক্রোটিক সচল-বন্ধ কন্ট্রোল',
      hl3: 'অটো ও বাল্ক এসএমএস',
      hl4: 'পাবলিক আইপি ছাড়াই ওএলটি মনিটরিং',
      zoomPill: '🔍 বড় করে দেখুন',

      stv1: '২৩,৩৯৯+',
      st1: 'লাইভ গ্রাহক ম্যানেজমেন্ট স্কেল',
      stv2: '১৩+',
      st2: 'সম্পূর্ণ আইএসপি মডিউল',
      stv3: '০ পাবলিক আইপি',
      st3: 'বিল্ট-ইন ভিপিএন দিয়ে ওএলটি',
      stv4: 'বাংলা ও ইংরেজি',
      st4: 'সহজ ২-ভাষার ড্যাশবোর্ড',

      modKicker: '📸 এইচডি স্ক্রিনশটসহ বিস্তারিত',
      modTitle: 'আমাদের <span class="grad-text">সবগুলো মডিউল</span> এক নজরে',
      modDesc: 'নিচে আমাদের প্রতিটি মডিউলের সহজ বর্ণনা ও স্পষ্ট এইচডি স্ক্রিনশট দেওয়া হলো। যেকোনো ছবিতে ক্লিক করলে একদম পরিষ্কারভাবে বড় করে দেখতে পারবেন।',
      fAll: 'সব মডিউল (১৩)',
      fBilling: 'দৈনিক হিসাব, বিলিং ও বিকাশ',
      fMikrotik: 'মাইক্রোটিক ও ওএলটি',
      fSms: 'গ্রাহক ও এসএমএস',
      fOps: 'রিসেলার, ডায়াগ্রাম ও স্টাফ',

      n01: '০১', n02: '০২', n03: '০৩', n04: '০৪', n05: '০৫', n06: '০৬', n07: '০৭',
      n08: '০৮', n09: '০৯', n10: '১০', n11: '১১', n12: '১২', n13: '১৩',

      bar01: 'ইজি আইএসপি — লাইভ ড্যাশবোর্ড',
      bar02: 'ইজি আইএসপি — দৈনিক হিসাব ও বিকাশ পেমেন্ট',
      bar03: 'ইজি আইএসপি — বিল কালেকশন',
      bar04: 'ইজি আইএসপি — ইনভয়েস ও রিসিট',
      bar05: 'ইজি আইএসপি — মাইক্রোটিক ইউজার কন্ট্রোল',
      bar06: 'ইজি আইএসপি — গ্রাহক ব্যবস্থাপনা',
      bar07: 'ইজি আইএসপি — অটো এসএমএস রিপোর্ট',
      bar08: 'ইজি আইএসপি — বাল্ক এসএমএস ক্যাম্পেইন',
      bar09: 'ইজি আইএসপি — স্মার্ট ওএলটি এনওসি',
      bar10: 'ইজি আইএসপি — পন অপটিক্যাল সিগন্যাল',
      bar11: 'ইজি আইএসপি — রিসেলার ও ওয়ালেট',
      bar12: 'ইজি আইএসপি — নেটওয়ার্ক ডায়াগ্রাম',
      bar13: 'ইজি আইএসপি — স্টাফ পারমিশন ও স্টক',

      m1Tag: 'ড্যাশবোর্ড ও আয়-ব্যয়',
      m1Title: 'লাইভ ড্যাশবোর্ড ও ব্যবসার সারসংক্ষেপ',
      m1Desc: 'সফটওয়্যারে ঢুকলেই এক স্ক্রিনে আপনার পুরো আইএসপি-এর আজকের কালেকশন, মাসিক আয়, মোট বকেয়া, ছাড়, পাইকারি খরচ ও গ্রাহকের সংখ্যা দেখতে পাবেন।',
      m1b1: 'মোট গ্রাহক, সক্রিয়, সাসপেন্ডেড ও নতুন গ্রাহকের লাইভ সংখ্যা',
      m1b2: 'আজকের কালেকশন, এই মাসের আদায়, মোট বকেয়া ও ডিসকাউন্ট হিসাব',
      m1b3: 'মাসিক আয় (টাকা) ও গ্রাহক বৃদ্ধির ভিজ্যুয়াল চার্ট',

      m2Tag: 'দৈনিক হিসাব-নিকাশ ও বিকাশ পেমেন্ট',
      m2Title: 'দৈনিক হিসাব-নিকাশ, পেমেন্ট লগ ও বিকাশ ইন্টিগ্রেশন',
      m2Desc: 'প্রতিদিন ক্যাশ, বিকাশ, নগদ, রকেট বা রিসেলার ওয়ালেট দিয়ে কত টাকা আদায় হলো এবং কোন স্টাফ কত টাকা তুলল — তার নিখুঁত দৈনিক প্রতিবেদন।',
      m2b1: 'বিকাশ, নগদ, রকেট, ব্যাংক ও ক্যাশ পেমেন্ট সাপোর্ট',
      m2b2: 'বিকাশে বিল পরিশোধ করলেই ট্রানজ্যাকশন আইডি সেভ হয়ে লাইন অটো চালু',
      m2b3: 'তারিখ ও কালেক্টর (স্টাফ) অনুযায়ী দৈনিক আদায় প্রতিবেদন ফিল্টার',

      m3Tag: 'বিল কালেকশন',
      m3Title: 'সহজ বিল কালেকশন, পূর্ববর্তী বকেয়া ও অগ্রিম বিল',
      m3Desc: 'অপরিশোধিত, পূর্ববর্তী বকেয়া, সম্পূর্ণ পরিশোধিত ও অগ্রিম পরিশোধিত গ্রাহকদের আলাদা তালিকা — জোন ও তারিখ ফিল্টার করে ১-ক্লিকেই বিল আদায় করুন।',
      m3b1: 'প্রতিটি গ্রাহকের পূর্ববর্তী বকেয়া স্বয়ংক্রিয়ভাবে যোগ হয়ে দেখায়',
      m3b2: "১-ক্লিকে 'পরিশোধ' বাটন দিয়ে ক্যাশ বা বিকাশ বিল আদায় ও ছাড় প্রদান",
      m3b3: '১-ক্লিকে সবার জন্য মাসিক বাল্ক বিল তৈরি করার সুবিধা',

      m4Tag: 'ইনভয়েস ও রিসিট',
      m4Title: 'অটো ইনভয়েস, পস থার্মাল প্রিন্ট ও পিডিএফ ডাউনলোড',
      m4Desc: 'প্রতিটি বিলের জন্য স্বয়ংক্রিয় ইনভয়েস তৈরি হয়। আজকের আদায়, এই মাসের আদায়, মোট বকেয়া ও মেয়াদোত্তীর্ণ ইনভয়েস আলাদাভাবে দেখুন।',
      m4b1: '১-ক্লিকে থার্মাল পস প্রিন্টার রিসিট ও পিডিএফ ইনভয়েস ডাউনলোড',
      m4b2: 'আংশিক বা পূর্ণ পেমেন্টের পরিষ্কার স্ট্যাটাস ও তারিখ রেকর্ড',
      m4b3: 'মেয়াদোত্তীর্ণ ও অপরিশোধিত ইনভয়েস আলাদা করে ফিল্টার করার সুবিধা',

      m5Tag: 'মাইক্রোটিক কন্ট্রোল',
      m5Title: 'মাইক্রোটিক থেকে সরাসরি গ্রাহক সচল-বন্ধ ও লাইভ ট্র্যাফিক',
      m5Desc: 'উইনবক্স ওপেন না করেই আমাদের ওয়েব প্যানেল থেকে সরাসরি আপনার মাইক্রোটিক রাউটারের সব গ্রাহক নিয়ন্ত্রণ করুন।',
      m5b1: '১-ক্লিকে যেকোনো গ্রাহকের লাইন সচল বা বন্ধ করার সরাসরি কন্ট্রোল',
      m5b2: 'গ্রাহকের লাইভ ডাউনলোড ও আপলোড স্পিড, আইপি, ম্যাক ও আপটাইম দেখুন',
      m5b3: 'মেয়াদ শেষে অটো-সাসপেন্ড, এবং অনলাইন/অফলাইন/সাসপেন্ড ইউজার ফিল্টার',

      m6Tag: 'গ্রাহক ব্যবস্থাপনা',
      m6Title: 'সম্পূর্ণ গ্রাহক তালিকা ও ৩/৭ দিনে মেয়াদোত্তীর্ণ ট্র্যাকার',
      m6Desc: 'আপনার সব গ্রাহকের প্যাকেজ, বকেয়া, জোন, ওএলটি পোর্ট, রাউটার ও অনলাইন অবস্থা এক টেবিলেই দেখুন ও পরিচালনা করুন।',
      m6b1: 'আলাদা লিস্ট: সক্রিয়, আজকের নতুন, ৩ দিন ও ৭ দিনে মেয়াদোত্তীর্ণ, সাসপেন্ডেড',
      m6b2: '১-ক্লিকে বাল্ক এডিট, বাল্ক অ্যাকশন ও পুরনো এক্সেল থেকে গ্রাহক ইম্পোর্ট/এক্সপোর্ট',
      m6b3: 'গ্রাহকদের নিজেদের বিল ও প্যাকেজ দেখার জন্য আলাদা গ্রাহক পোর্টাল',

      m7Tag: 'অটো এসএমএস সিস্টেম',
      m7Title: 'অটোমেটেড এসএমএস পাঠানো ও ডেলিভারি রিপোর্ট',
      m7Desc: 'বিল তৈরি, পেমেন্ট কনফার্ম, বকেয়া রিমাইন্ডার, লাইন সাসপেন্ড বা রিকানেক্ট — প্রতিটি ইভেন্টে গ্রাহকের মোবাইলে অটোমেটিক এসএমএস চলে যাবে।',
      m7b1: 'প্রতিদিন সকাল ৯টায় বকেয়া ও মেয়াদ শেষ হওয়ার অটো রিমাইন্ডার এসএমএস',
      m7b2: 'নতুন সংযোগ ওয়েলকাম, পেমেন্ট রিসিট, সাসপেন্ড ও রিকানেক্ট অটো এসএমএস',
      m7b3: 'আজ ও এই মাসে কত এসএমএস গেছে তার লাইভ ডেলিভারি লগ ও গেটওয়ে ব্যালেন্স',

      m8Tag: 'বাল্ক এসএমএস ক্যাম্পেইন',
      m8Title: 'স্মার্ট বাল্ক এসএমএস ও পন আউটেজ নোটিশ',
      m8Desc: 'নির্দিষ্ট জোন, রাউটার, প্যাকেজ বা বকেয়া থাকা হাজারো গ্রাহককে এক ক্লিকেই কাস্টম নোটিশ, ঈদ শুভেচ্ছা বা লাইন মেইনটেন্যান্স এসএমএস পাঠান।',
      m8b1: 'প্রতিটি গ্রাহকের নাম, বকেয়া ও মেয়াদের তারিখসহ ব্যক্তিগতকৃত এসএমএস',
      m8b2: 'রাউটার, জোন, প্যাকেজ ও ন্যূনতম বকেয়া দিয়ে প্রাপক ফিল্টার ও লাইভ প্রিভিউ',
      m8b3: 'অবৈধ ও ডুপ্লিকেট নম্বর অটো বাদ দিয়ে এসএমএস খরচ কমায় + পন আউটেজ নোটিশ',

      m9Tag: 'স্মার্ট ওএলটি ও বিল্ট-ইন ভিপিএন',
      m9Title: 'পাবলিক আইপি ছাড়াই স্মার্ট ওএলটি রিয়েল-টাইম এনওসি',
      m9Desc: 'বিল্ট-ইন ওয়্যারগার্ড ভিপিএন দিয়ে কোনো পাবলিক আইপি ছাড়াই আপনার সব ওএলটি ক্লাউড থেকে লাইভ মনিটর করুন।',
      m9b1: 'গ্রাহকের বাসায় বিদ্যুৎ গেছে নাকি রাস্তায় ফাইবার ছিঁড়েছে — জানুন সেকেন্ডেই',
      m9b2: 'মোট অনলাইন, অফলাইন, দুর্বল সিগন্যাল ও আনবাউন্ড ওএনইউ-এর লাইভ কাউন্টার',
      m9b3: 'প্রতিটি ওএলটি-এর সিপিইউ, তাপমাত্রা ও আপটাইম মনিটরিং',

      m10Tag: 'পন সিগন্যাল ও ওএনইউ বাইন্ড',
      m10Title: 'পন অপটিক্যাল স্প্লিটার ও ১-ক্লিক গ্রাহক-ওএনইউ অটো-বাইন্ড',
      m10Desc: 'প্রতিটি পন পোর্টের গড় অপটিক্যাল সিগন্যাল ও দুর্বল লাইন দেখুন, এবং ১-ক্লিকে প্রতিটি ওএনইউ-কে তার বিলিং গ্রাহকের সাথে যুক্ত করুন।',
      m10b1: 'পোর্ট অনুযায়ী অনলাইন ও অফলাইন ওএনইউ এবং গড় অপটিক্যাল পাওয়ার',
      m10b2: 'ক্রিটিক্যাল দুর্বল অপটিক্যাল সিগন্যাল আলাদা করে চিহ্নিতকরণ',
      m10b3: '১-ক্লিকে ওএনইউ অটো-বাইন্ড ও ঘোস্ট ওএনইউ পরিষ্কার করার সুবিধা',

      m11Tag: 'রিসেলার ও ওয়ালেট',
      m11Title: 'রিসেলার ম্যানেজমেন্ট ও প্রিপেইড ওয়ালেট লেজার',
      m11Desc: 'সকল রিসেলারের আলাদা লগইন, নিজস্ব গ্রাহক তালিকা, ওয়ালেট ব্যালেন্স এবং মাসিক ও সর্বমোট রিচার্জের স্বচ্ছ হিসাব রাখুন।',
      m11b1: 'মোট রিসেলার, সক্রিয় রিসেলার, ওয়ালেট ব্যালেন্স ও মাসিক রিচার্জ সারসংক্ষেপ',
      m11b2: '১-ক্লিকে রিসেলার ওয়ালেট রিচার্জ ও কাস্টম পাইকারি প্যাকেজ রেট',
      m11b3: 'প্রতিটি রিসেলারের জন্য আলাদা এসএমএস ওয়ালেট ও অটোমেটিক লেনদেন লগ',

      m12Tag: 'নেটওয়ার্ক ডায়াগ্রাম',
      m12Title: 'ভিজ্যুয়াল নেটওয়ার্ক টপোলজি ডায়াগ্রাম, জোন ও ওডিবি',
      m12Desc: 'আপস্ট্রিম ইন্টারনেট থেকে ট্রান্সমিশন লিংক, কোর রাউটার, জোন রাউটার, ওএলটি ও ওডিবি স্প্লিটার পর্যন্ত আপনার পুরো নেটওয়ার্কের পরিষ্কার ভিজ্যুয়াল ম্যাপ।',
      m12b1: 'আপস্ট্রিম → কোর রাউটার → জোন রাউটার → ওএলটি → গ্রাহক ভিজ্যুয়াল ডায়াগ্রাম',
      m12b2: 'জোন, সাব-জোন ও ওডিবি বক্স অনুযায়ী ফাইবার নেটওয়ার্ক সাজিয়ে রাখার সুবিধা',
      m12b3: 'নতুন টেকনিশিয়ানও সহজেই পুরো নেটওয়ার্কের সংযোগ বুঝতে পারবে',

      m13Tag: 'স্টাফ, পারমিশন ও স্টক',
      m13Title: 'স্টাফ পারমিশন, ক্রয়-বিক্রয় ও ইনভেন্টরি স্টক',
      m13Desc: 'ম্যানেজার, বিল কালেক্টর ও টেকনিশিয়ানদের জন্য আলাদা রাউটার ও সূক্ষ্ম পারমিশন নির্ধারণ করুন — সাথে ওএনইউ, রাউটার ও ফাইবার স্টকের হিসাব রাখুন।',
      m13b1: 'প্রতিটি স্টাফের জন্য নির্দিষ্ট রাউটার ও ৩৫টির বেশি সূক্ষ্ম অনুমতি নিয়ন্ত্রণ',
      m13b2: 'কোন স্টাফ কখন কী পরিবর্তন করেছে তার সম্পূর্ণ অ্যাক্টিভিটি অডিট লগ',
      m13b3: 'রাউটার, ওএনইউ ও ফাইবার ক্যাবলের ক্রয়, বিক্রয় ও স্টক ম্যানেজমেন্ট',

      teamKicker: '👥 আমাদের নেতৃত্ব',
      teamTitle: 'ইজি আইএসপি সলিউশনের <span class="grad-text">পেছনের মানুষগুলো</span>',
      teamDesc: 'বাংলাদেশের আইএসপি উদ্যোক্তাদের ব্যবসা সহজ, আধুনিক ও শতভাগ অটোমেটেড করতে আমরা নিরলসভাবে কাজ করে যাচ্ছি।',
      founderBadge: 'প্রতিষ্ঠাতা ও সিইও',
      founderName: 'মো. জোবায়ের প্রধান',
      founderRole: 'প্রতিষ্ঠাতা ও সিইও — ইজি আইএসপি সলিউশন',
      founderBio: 'বাংলাদেশের প্রতিটি আইএসপি উদ্যোক্তা যেন বিলিং, বকেয়া আদায় আর নেটওয়ার্ক ঝামেলা থেকে মুক্ত হয়ে সহজে ব্যবসা বড় করতে পারেন — সেই ভিশন নিয়েই ইজি আইএসপি সলিউশনের পথচলা।',
      cofounderBadge: 'সহ-প্রতিষ্ঠাতা ও প্রযুক্তি মাস্টারমাইন্ড',
      cofounderName: 'মো. জুলকার নাইন',
      cofounderRole: 'সহ-প্রতিষ্ঠাতা ও প্রযুক্তি মাস্টারমাইন্ড',
      cofounderBio: 'ক্লাউড বিলিং ইঞ্জিন, মাইক্রোটিক রিয়েল-টাইম অটোমেশন, বিল্ট-ইন ওয়্যারগার্ড ভিপিএন ও স্মার্ট ওএলটি টেলিমেট্রি আর্কিটেকচারের মূল কারিগর — যিনি প্রযুক্তিগতভাবে পুরো প্ল্যাটফর্মটিকে দ্রুত ও নির্ভরযোগ্য করে তুলেছেন।',

      contactKicker: '🎁 ফ্রি লাইভ ডেমো',
      contactTitle: 'আজই <span class="grad-text">ফ্রি ডেমো নিন</span>',
      contactDesc: 'আগে নিজে চালিয়ে দেখুন, তারপর সিদ্ধান্ত নিন। নিচের ফর্ম পূরণ করলে সরাসরি আমাদের হোয়াটসঅ্যাপে মেসেজ চলে যাবে।',
      formTitle: '৩০ সেকেন্ডে ডেমো রিকোয়েস্ট',
      formSub: 'আপনার আইএসপি-এর তথ্য দিন — আমাদের টিম সাথে সাথেই ডেমো অ্যাক্সেস দিয়ে দেবে।',
      lblIsp: 'আইএসপি / কোম্পানির নাম',
      lblPhone: 'মোবাইল / হোয়াটসঅ্যাপ নম্বর',
      lblCount: 'মোট গ্রাহক সংখ্যা',
      opt1: '৫০০-এর কম',
      opt2: '৫০০ – ২,০০০ গ্রাহক',
      opt3: '২,০০০ – ১০,০০০ গ্রাহক',
      opt4: '১০,০০০+ গ্রাহক',
      btnWa: '💬 হোয়াটসঅ্যাপে ফ্রি ডেমো রিকোয়েস্ট পাঠান',
      directTitle: 'সরাসরি যোগাযোগ করুন',
      directSub: 'যেকোনো প্রশ্ন, ডেমো বা সেটআপ সহায়তার জন্য সরাসরি কল, হোয়াটসঅ্যাপ বা ইমেইল করুন।',
      dirWa: 'বিজনেস হোয়াটসঅ্যাপ (লাইভ ডেমো)',
      dirCall: 'সরাসরি ফোন কল',
      dirPhoneVal: '+৮৮০ ১৮৪৪-২৯১৮৯২',
      dirEmail: 'ইমেইল',
      dirFb: 'অফিশিয়াল ফেসবুক পেজ',
      footerFb: 'ফেসবুক পেজ',
      dirLocation: '📍 ঢাকা, বাংলাদেশ &nbsp;•&nbsp; ওয়েবসাইট: <strong>easyispsolution.com</strong>',
      footerCopy: '&copy; ২০২৬ <strong>ইজি আইএসপি সলিউশন</strong> — সর্বস্বত্ব সংরক্ষিত।',
      waFab: 'হোয়াটসঅ্যাপ ডেমো',
      vidTitle: '🎬 ইজি আইএসপি সলিউশন — ৪৭ সেকেন্ডের ডেমো ভিডিও',
    },

    en: {
      pageTitle: 'Easy ISP Solution — The Smart Digital Partner for Your ISP Business',
      brandName: 'Easy ISP <span>Solution</span>',
      navModules: 'Modules',
      navTeam: 'Leadership',
      navContact: 'Contact',
      navDemo: 'Free Demo',

      heroEyebrow: 'The Smart Digital Partner for Your ISP Business',
      heroTitle: 'One Simple Platform for <span class="grad-text">Your Entire ISP Business</span>',
      heroDesc: 'Daily accounting, bKash payment integration, direct MikroTik Enable/Disable, Auto & Bulk SMS, SmartOLT monitoring, and reseller wallets — all inside one clean Bangla & English dashboard.',
      heroDemo: '📞 Get Free Demo',
      heroVideo: '▶ Watch 47s Video',
      heroExplore: 'Explore All Modules ↓',
      hl1: 'Daily Ledger & bKash',
      hl2: 'MikroTik Enable/Disable',
      hl3: 'Auto & Bulk SMS',
      hl4: 'Zero-Public-IP SmartOLT',
      zoomPill: '🔍 Click to enlarge',

      stv1: '23,399+',
      st1: 'Live Subscriber Scale',
      stv2: '13+',
      st2: 'Complete ISP Modules',
      stv3: '0 Public IP',
      st3: 'Built-In VPN for OLT',
      stv4: 'Bangla & EN',
      st4: 'Bilingual Dashboard UI',

      modKicker: '📸 Crystal-Clear HD Screenshots',
      modTitle: 'Explore <span class="grad-text">All Our Modules</span> Clearly',
      modDesc: 'Browse every module of Easy ISP Solution paired with its crystal-clear HD interface preview. Click any image to view it full-screen.',
      fAll: 'All Modules (13)',
      fBilling: 'Daily Ledger, Billing & bKash',
      fMikrotik: 'MikroTik & SmartOLT',
      fSms: 'Customers & SMS',
      fOps: 'Resellers, Diagram & Staff',

      n01: '01', n02: '02', n03: '03', n04: '04', n05: '05', n06: '06', n07: '07',
      n08: '08', n09: '09', n10: '10', n11: '11', n12: '12', n13: '13',

      bar01: 'Easy ISP — Live Dashboard',
      bar02: 'Easy ISP — Daily Ledger & bKash Payments',
      bar03: 'Easy ISP — Bill Collection',
      bar04: 'Easy ISP — Invoices & POS Receipts',
      bar05: 'Easy ISP — MikroTik User Control',
      bar06: 'Easy ISP — Customer Management',
      bar07: 'Easy ISP — Automated SMS Analytics',
      bar08: 'Easy ISP — Bulk SMS Campaigns',
      bar09: 'Easy ISP — SmartOLT Real-Time NOC',
      bar10: 'Easy ISP — PON Optical Signals',
      bar11: 'Easy ISP — Resellers & Wallets',
      bar12: 'Easy ISP — Network Topology Diagram',
      bar13: 'Easy ISP — Staff RBAC & Inventory',

      m1Tag: 'Dashboard & Finance',
      m1Title: 'Live Executive Dashboard & Business Overview',
      m1Desc: "View today's collection, monthly revenue, total pending dues, discounts, monthly wholesale cost, and subscriber growth charts in one clean screen.",
      m1b1: 'Live totals for Total, Active, Suspended, and New Monthly Subscribers',
      m1b2: "Today's collection, monthly revenue, pending dues, and discount summary",
      m1b3: 'Visual monthly income curve and subscriber growth bar charts',

      m2Tag: 'Daily Accounting & bKash',
      m2Title: 'Daily Accounting, Payment History & bKash Integration',
      m2Desc: 'Track every single Taka collected via Cash, bKash, Nagad, Rocket, or Reseller Wallet — complete with staff-wise daily collection reports.',
      m2b1: 'Supports bKash, Nagad, Rocket, SSLCommerz, Bank, and Cash payments',
      m2b2: 'Logs bKash TrxID automatically and auto-reconnects MikroTik lines',
      m2b3: 'Filter Daily Collection Reports by date, payment method, and staff collector',

      m3Tag: 'Bill Collection',
      m3Title: 'Smart Bill Collection, Previous Due & Advance Billing',
      m3Desc: 'Separate tabs for Unpaid, Previous Due, Fully Paid, and Advance bills — filter by zone or date and collect bills in one click.',
      m3b1: "Automatically carries forward and displays each customer's Previous Due",
      m3b2: '1-click Pay button supporting Cash/bKash, TrxID, and custom discounts',
      m3b3: 'Generate monthly bulk bills for all subscribers in a single click',

      m4Tag: 'Invoices & Receipts',
      m4Title: 'Auto Invoices, Thermal POS Print & PDF Download',
      m4Desc: "Every bill generates a clean numbered invoice with live KPI cards for Today's Collection, This Month, Pending Due, and Overdue invoices.",
      m4b1: '1-click thermal POS receipt printing and downloadable A4 PDF invoices',
      m4b2: 'Clear tracking of partial vs. full payments and settlement dates',
      m4b3: 'Filter overdue and unpaid invoices effortlessly',

      m5Tag: 'MikroTik Control',
      m5Title: 'Direct MikroTik Customer Enable / Disable & Live Traffic',
      m5Desc: 'Control every PPPoE subscriber directly from your web browser or mobile phone without ever opening Winbox.',
      m5b1: '1-click Enable or Disable for any MikroTik PPPoE customer instantly',
      m5b2: 'Inspect live download/upload traffic, Caller MAC, IP, and session uptime',
      m5b3: 'Automated expiry suspend plus Online, Offline, and Suspended filters',

      m6Tag: 'Customer Management',
      m6Title: 'Complete Customer Directory & 3/7-Day Expiry Lists',
      m6Desc: 'Manage packages, dues, zones, OLT/PON ports, routers, and live online status for every subscriber in one organized table.',
      m6b1: 'Dedicated lists: Active, New Today, Expiring in 3 & 7 Days, Expired, Suspended',
      m6b2: 'Bulk Edit, Bulk Actions, and fast Excel Import/Export for seamless migration',
      m6b3: 'Self-Service Customer Portal for viewing bills, invoices, and active packages',

      m7Tag: 'Auto SMS Engine',
      m7Title: 'Automated SMS Sending & Delivery Analytics',
      m7Desc: 'Automatically notify subscribers on invoicing, payments, due reminders, suspensions, and reconnections with zero manual work.',
      m7b1: 'Scheduled daily 9:00 AM automated due and expiry reminder SMS',
      m7b2: 'Instant welcome, payment receipt, auto-suspend, and reconnect SMS triggers',
      m7b3: 'Live daily/monthly SMS delivery logs and gateway balance tracking',

      m8Tag: 'Bulk SMS Campaigns',
      m8Title: 'Dynamic Bulk SMS & PON Outage Broadcasts',
      m8Desc: 'Send personalized notices, holiday greetings, or maintenance alerts to thousands of filtered subscribers in a single click.',
      m8b1: 'Personalize messages dynamically with {name}, {due_amount}, and {expiry_date}',
      m8b2: 'Filter recipients by router, zone, package, or minimum due with live preview',
      m8b3: 'Auto-removes duplicate/invalid numbers + 1-click PON outage SMS',

      m9Tag: 'SmartOLT + WireGuard VPN',
      m9Title: 'Zero-Public-IP SmartOLT Real-Time NOC',
      m9Desc: 'Monitor VSOL, C-Data, BDCOM, and DBC OLTs live from the cloud through our built-in WireGuard VPN — no static Public IP required.',
      m9b1: 'Instantly separate Power Fail (home outage) from Fiber Cut (LOS) in seconds',
      m9b2: 'Live counters for Online, Offline, Weak Signal, and Unbound ONUs',
      m9b3: 'Real-time OLT hardware health: CPU %, Temperature (°C), and Uptime',

      m10Tag: 'PON Signals & Auto-Bind',
      m10Title: 'PON Optical Splitters & 1-Click Customer-ONU Auto-Bind',
      m10Desc: 'Inspect average Rx optical power (-20.77 dBm) per PON port and bind ONUs directly to customer billing profiles in one click.',
      m10b1: 'Per-PON online/offline ONU counts and average optical Rx power (dBm)',
      m10b2: 'Automatic flagging of critical low-signal fiber links (< -27 dBm)',
      m10b3: '1-click Auto-Bind ONU and Ghost ONU cleanup tools',

      m11Tag: 'Resellers & Wallets',
      m11Title: 'Reseller Management & Prepaid Wallet Ledger',
      m11Desc: 'Provide every reseller with an isolated portal, custom wholesale rates, prepaid wallet balance, and transparent recharge logs.',
      m11b1: 'Live overview of total resellers, active resellers, wallet balances, and recharges',
      m11b2: '1-click wallet recharge and custom reseller package pricing',
      m11b3: 'Dedicated reseller SMS wallets and automated transaction ledger',

      m12Tag: 'Network Diagram',
      m12Title: 'Visual Network Topology Diagram, Zones & ODB',
      m12Desc: 'Map your entire ISP backbone visually from IIG and NTTN transmission down to Core Routers, Zone Routers, and OLTs.',
      m12b1: 'Clean visual map: IIG → NTTN → Core CCR → Zone Routers → OLTs → Homes',
      m12b2: 'Organize Zones, Sub-Zones, and ODB splitter boxes systematically',
      m12b3: 'Helps new field technicians understand network paths immediately',

      m13Tag: 'Staff, RBAC & Stock',
      m13Title: 'Staff Permissions (RBAC), Purchase & Stock Inventory',
      m13Desc: 'Assign specific routers and granular permissions to every manager, collector, and technician — plus manage equipment stock.',
      m13b1: 'Assign specific MikroTik routers and 35+ granular RBAC permissions per staff',
      m13b2: 'Complete Activity Audit Logs tracking every action across your team',
      m13b3: 'Track Purchase, Sales, and Live Stock of ONUs, routers, and fiber cables',

      teamKicker: '👥 Leadership',
      teamTitle: 'The People Behind <span class="grad-text">Easy ISP Solution</span>',
      teamDesc: 'Building simple, dependable, modern automation for ISP entrepreneurs across Bangladesh.',
      founderBadge: 'Founder & CEO',
      founderName: 'Md. Zobayer Prodhan',
      founderRole: 'Founder & CEO — Easy ISP Solution',
      founderBio: 'Leading the vision to empower every local and enterprise ISP entrepreneur in Bangladesh with effortless billing, transparent daily accounting, and stress-free growth.',
      cofounderBadge: 'Co-Founder & Technology Mastermind',
      cofounderName: 'Md. Julker Nain',
      cofounderRole: 'Co-Founder & Technology Mastermind',
      cofounderBio: 'Architect of the cloud billing engine, real-time MikroTik automation, built-in WireGuard VPN hub, and SmartOLT optical telemetry powering Easy ISP Solution.',

      contactKicker: '🎁 Free Live Demo',
      contactTitle: 'Book Your <span class="grad-text">Free Demo Today</span>',
      contactDesc: 'Experience the live platform first before making any commitment. Submit the quick form below to message our team directly on WhatsApp.',
      formTitle: '30-Second Demo Request',
      formSub: 'Share your ISP details — our team will activate your live demo access right away.',
      lblIsp: 'ISP / Company Name',
      lblPhone: 'Mobile / WhatsApp Number',
      lblCount: 'Total Subscribers',
      opt1: 'Under 500',
      opt2: '500 – 2,000 Subscribers',
      opt3: '2,000 – 10,000 Subscribers',
      opt4: '10,000+ Subscribers',
      btnWa: '💬 Send Free Demo Request on WhatsApp',
      directTitle: 'Contact Us Directly',
      directSub: 'Call, WhatsApp, or email us anytime for a live walkthrough or onboarding assistance.',
      dirWa: 'Business WhatsApp (Live Demo)',
      dirCall: 'Direct Phone Call',
      dirPhoneVal: '+880 1844-291892',
      dirEmail: 'Email',
      dirFb: 'Official Facebook Page',
      footerFb: 'Facebook Page',
      dirLocation: '📍 Dhaka, Bangladesh &nbsp;•&nbsp; Website: <strong>easyispsolution.com</strong>',
      footerCopy: '&copy; 2026 <strong>Easy ISP Solution</strong> — All rights reserved.',
      waFab: 'WhatsApp Demo',
      vidTitle: '🎬 Easy ISP Solution — 47s Product Demo Video',
    },
  };

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('easyisp_site_lang', lang);
    document.documentElement.lang = lang;

    const dict = I18N[lang];
    document.title = dict.pageTitle;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const k = el.getAttribute('data-i18n');
      if (dict[k] !== undefined) el.textContent = dict[k];
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const k = el.getAttribute('data-i18n-html');
      if (dict[k] !== undefined) el.innerHTML = dict[k];
    });

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    const ispInput = document.getElementById('ispName');
    const phoneInput = document.getElementById('phoneNum');
    if (ispInput) ispInput.placeholder = lang === 'bn' ? 'যেমন: ডিজিটাল ফাইবার নেট' : 'e.g., Digital Fiber Net';
    if (phoneInput) phoneInput.placeholder = lang === 'bn' ? '০১XXXXXXXXX' : '01XXXXXXXXX';

    const modalTitle = document.getElementById('imgModalTitle');
    if (modalTitle) {
      modalTitle.textContent = lang === 'bn' ? 'স্ক্রিনশট প্রিভিউ' : 'Screenshot Preview';
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
    });
    applyLanguage(currentLang);

    // Module Category Filter
    document.querySelectorAll('.filter-pill').forEach((pill) => {
      pill.addEventListener('click', () => {
        const f = pill.dataset.filter;
        document.querySelectorAll('.filter-pill').forEach((p) => p.classList.toggle('active', p === pill));
        document.querySelectorAll('.module-row').forEach((row) => {
          row.classList.toggle('hidden', f !== 'all' && row.dataset.cat !== f);
        });
      });
    });

    // Click-to-Zoom HD Screenshot Lightbox
    const imgModal = document.getElementById('imgModal');
    const imgModalSrc = document.getElementById('imgModalSrc');
    const imgModalTitle = document.getElementById('imgModalTitle');
    const imgModalClose = document.getElementById('imgModalClose');

    document.querySelectorAll('.js-zoom').forEach((box) => {
      box.addEventListener('click', () => {
        imgModalSrc.src = box.dataset.img;
        const tBn = box.getAttribute('data-title-bn');
        const tEn = box.getAttribute('data-title-en');
        imgModalTitle.textContent = currentLang === 'bn' ? (tBn || 'ইজি আইএসপি সলিউশন') : (tEn || 'Easy ISP Solution');
        imgModal.classList.add('open');
      });
    });
    imgModalClose.addEventListener('click', () => imgModal.classList.remove('open'));
    imgModal.addEventListener('click', (e) => {
      if (e.target === imgModal) imgModal.classList.remove('open');
    });

    // Video Demo Modal
    const videoModal = document.getElementById('videoModal');
    const promoVideo = document.getElementById('promoVideo');
    const openVideoBtn = document.getElementById('openVideoBtn');
    const videoModalClose = document.getElementById('videoModalClose');

    function closeVideo() {
      videoModal.classList.remove('open');
      promoVideo.pause();
    }
    openVideoBtn.addEventListener('click', () => {
      videoModal.classList.add('open');
      promoVideo.play().catch(() => {});
    });
    videoModalClose.addEventListener('click', closeVideo);
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeVideo();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        imgModal.classList.remove('open');
        closeVideo();
      }
    });

    // WhatsApp Demo Form
    document.getElementById('demoForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const isp = document.getElementById('ispName').value.trim();
      const phone = document.getElementById('phoneNum').value.trim();
      const count = document.getElementById('custCount').value;
      const msg = [
        'Assalamu Alaikum! I want a Free Demo of Easy ISP Solution.',
        `ISP Name: ${isp}`,
        `Phone: ${phone}`,
        `Customers: ${count}`,
        'Source: easyispsolution.com',
      ].join('\n');
      window.open(`https://wa.me/8801844291892?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
    });

    // Mobile Drawer
    const drawer = document.getElementById('mobileDrawer');
    document.getElementById('mobileMenuBtn').addEventListener('click', () => drawer.classList.add('open'));
    document.getElementById('mobileDrawerClose').addEventListener('click', () => drawer.classList.remove('open'));
    document.querySelectorAll('.drawer-link').forEach((a) => {
      a.addEventListener('click', () => drawer.classList.remove('open'));
    });

    // Sticky Navbar
    const navbar = document.getElementById('navbar');
    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  });
})();
