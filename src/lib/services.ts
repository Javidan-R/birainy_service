import { ContactInfo, Service } from '@/types';

export const services: Service[] = [
  {
    id: 1,
    title: 'Proqram Təminatı',
    description:
      'Şirkətdaxili və xarici proqseslərin həyata keçirilməsi, həmçinin əməkdaşların şirkət daxilindəki sənədləri avtomatlaşdırılmış şəkildə axtarış edib, rahatlıqla yerləşdirib, toplaya və göndərə bildikləri OCR alqoritmi ilə hazırlanmış Sürətli Axtarış Sistemi.',
    image: '/images/software_image.webp',
    subServices: [
       {
        id: 1,
        title: 'Proqram Təminatı',
        description: 'Şirkətdaxili və xarici proqseslərin həyata keçirilməsi, həmçinin əməkdaşların şirkət daxilindəki sənədləri avtomatlaşdırılmış şəkildə axtarış edib, rahatlıqla yerləşdirib, toplaya və göndərə bildikləri OCR alqoritmi ilə hazırlanmış Sürətli Axtarış Sistemi.',
        image: '/images/software_image.webp',
      },
      {
        id: 2,
        title: 'Sürətli Axtarış Sistemi',
        description: 'OCR əsaslı Sürətli Axtarış Sistemi şirkətlərə sənədlər platformaya necə yüklənir?',
        youtubeUrl: 'https://www.youtube.com/watch?v=YRTe_sJd_2A',
      },
      {
        id: 3,
        title: 'CRM və ERP',
        description: 'CRM sistemi ilə şirkətlərin qazandığı üstünlüklər...',
        youtubeUrl: 'https://www.youtube.com/watch?v=qUpIJZT0V4A',
      },
      {
        id: 4,
        title: 'Mobil tətbiqlər',
        description: 'Müştərilərin telefonlarına uyğun olaraq son trendlərə əsasənaraq mobil tətbiq UX/UI dizaynları tərəfindən istifadəçi üçün rahat və gözoxşayan şəkildə dizayn edilir.',
        image: '/images/mobile_image.webp', 
      },
    ],
  },
  {
    id: 2,
    title: 'Saytların yaradılması',
    description:
      'Şirkətlərin vizyonuna uyğun olaraq sayt hazırlayırıq. Sayt trendlərinə uyğun olaraq dizaynerlərimiz tərəfindən dizayn edilir. HTML5, CSS, JS (react js., vue js., angular js.) kimi proqramlaşdırma dilləri ilə son texnologiyalardan istifadə edərək piksel dəqiqliyində kodlaşdırılır müxtəlif ölçülü mobil və digər cihazlara uyğunlaşdırılır. Sonra qurduğumuz sayt üçün sistem arxitekturası yaradılır və maksimum sürətli işləməsi təmin edilir.',
    cards: [
      {
       title: 'UI/UX dizayn', 
       description: 'Şirkətin vizyonuna uyğun son trendlərə əsaslanan istifadəçi interfeysin dizayn edilməsi.',
        image: '/images/ui-ux_website.webp',
      },
      {
        title: 'Mobil Optimizations', 
        description: 'Vebsaytın müxtəlif ölçülü mobil cihazlara uyğunlaşdırılması.',
        image: '/images/optimization_website.webp',
      },
      {
        title: 'Front-end', 
        description: 'Dizaynların HTML, CSS, JS kimi müxtəlif proqramlaşdırma dilləri ilə piksel dəqiqliyində kodlaşdırılması.',
        image: '/images/front_website.webp',
      },
      {
        title: 'Back-end', 
        description: 'Sistem arxitekturasının yaradılması və maksimum sürətli işləməsin təmin edilməsi.',
        image: '/images/backend_website.webp',
      },
      {
        title: 'Kiber Təhlükəsizlik',
        description: 'Sistemlərin, şəbəkələrin, proqramların, cihazların və məlumatların kiberhücumlardan qorunması.',
        image: '/images/cyber_website.webp',
      },
      {
        title: 'SEO',
        description: 'Saytların keywordlərə uyğun axtarış sistemlərində ilk sıralarda görünməsini təmin etmək.',
        image: '/images/seo_website.webp',
      },
    ],
  },
  {
    id: 3,
    title: 'Oyun Təminatı',
    description:
      'BIRainy şirkəti şirkətlərin istəyinə və istifadə edəcəkləri istiqamətə uyğun olaraq özəllinə məxsus elementlərin, loqonun da yer aldığı və müştərilərinin endirim qazanaraq əylənə bildikləri üçün stend və VR oyunlar yazar.',
    image: '/images/game_service.webp',
    subServices: [
      {
        id: 1,
    title: 'Oyun Təminatı',
    description:
      'BIRainy şirkəti şirkətlərin istəyinə və istifadə edəcəkləri istiqamətə uyğun olaraq özəllinə məxsus elementlərin, loqonun da yer aldığı və müştərilərinin endirim qazanaraq əylənə bildikləri üçün stend və VR oyunlar yazar.',
        image: '/images/game_service.webp',
},
      { 
        id: 2, 
        title: 'Stend və VR oyunları', 
        description: 'Müştərilərin diqqətini 1-ə 5 artırmaq.' },
      { 
        id: 3, 
        title: 'VR şüurenne simulyatorları', 
        description: 'Texnologiya sektoru, meişət avadanlıqları mağazalırında müştərilərin virtual olaraq məhsulu sınamaqdan keçirməsi.', youtubeUrl: 'https://www.youtube.com/embed/example2' },
      { 
        id: 4, 
        title: 'Müzey', 
        description: 'Müştərilərin hansisa konkret məhsulu (məhsullar) daha çox diqqət və maraq göstərməsini təmin etmək.' },
      { 
        id: 5, 
        title: 'Virtual Turizm', 
        description: 'Tədbirlərin əyləncə hissəsini daha maraqlı və aktiv hala gətirmək.' },
      { 
        id: 6, 
        title: 'İnşaat', 
        description: 'Organik reklam yaratmaq.' },
      { 
        id: 7, 
        title: 'İstəhşalat', 
        description: '' },
    ],
  },
  {
    id: 4,
    title: 'Data Analitikası',
    description:
      'Maliyyə təhlili şirkətin və ya təşkilatın maliyyə vəziyyətini qiymətləndirmək üçün maliyyə hesabatlarının öyrənilməsi və təhlilidir. Bu təhlil maliyyə sağlamlığını, likvidliyini və ödəmə qabiliyyətini qiymətləndirmək, əsaslandırılmış investisiya və ya kredit qərarları qəbul etməkdir.',
    image: '/images/service-4.png',
    subServices: [
      {
         id: 1,
    title: 'Data Analitikası',
    description:
      'Maliyyə təhlili şirkətin və ya təşkilatın maliyyə vəziyyətini qiymətləndirmək üçün maliyyə hesabatlarının öyrənilməsi və təhlilidir. Bu təhlil maliyyə sağlamlığını, likvidliyini və ödəmə qabiliyyətini qiymətləndirmək, əsaslandırılmış investisiya və ya kredit qərarları qəbul etməkdir.',
    image: '/images/service-4.png',
      },
      {
        id: 2,
        title: 'Maliyyə təhlili',
        description:
          'Maliyyə təhlili şirkətin və ya təşkilatın maliyyə vəziyyətini qiymətləndirmək üçün maliyyə hesabatlarının öyrənilməsi və təhlilidir. Bu təhlil maliyyə sağlamlığını, likvidliyini və ödəmə qabiliyyətini qiymətləndirmək, əsaslandırılmış investisiya və ya kredit qərarları qəbul etməkdir.',
      },
      {
        id: 3,
        title: 'İnsan Resurslarının təhlili',
        description:
          'İnsan resurslarının təhlili şirkətin işcilərinə aid məlumatların toplanması və təhlilidir. Bu cür təhlil həm kəmiyyət, həm də keyfiyyət metodlarından istifadə etməklə həyata keçirilir, burada daxildir: Kadr dəyişikliyi dərəcələri, İşə qəbul xərcləri, İşçilərin məşğulluq səviyyəsi, Təlimin effektivliyi kimi göstəricilər qiymətləndirilməsi. HR təhlilinin son məqsədi işçi qüvvəsinin planlaşdırılması üçün nümunələri, təkmilləşdirilməli sahələri və strateji imkanları müəyyən etmək üçün verilən məlumatlardan istifadə etməkdir.',
        image: '/images/hr-analysis.png',
      },
      {
        id: 4,
        title: 'Optimizasiya təhlili',
        description:
          'Optimallaşdırma təhlili resursların bölüşdürülməsi və ya seçim edilməsi nəzərdə tutan problemlərin optimal həllini müəyyən etmək üçün riyazi modellər və metodlardan istifadə prosesinə aiddir. Optimallaşdırma təhlili müxtəlif sahələrdə, logistika və emeliyyatlar idarəetməsindən tutmuş maliyyə və mühəndisliyin artırılmasına, xərclərin azaldılmasına, təkmilləşdirilmiş performans kömək edir.',
      },
      {
        id: 5,
        title: 'Satınalma təhlili',
        description:
          'BIRainy tərəfindən təqdim olunan Satış və KPI analizi hesabatları vasitəsilə şahibkarlar, anbarların vəziyyətini, müştəri qruplarının seçimləri, satışlar və əldə edilmiş gəlirlər haqqında detallı məlumatlar təchiz olunurlar.',
        image: '/images/purchase-analysis.png',
      },
      {
        id: 6,
        title: 'Əsas Performans Göstəriciləri (KPI) təhlili',
        description:
          'KPI təhlili şirkət fəaliyyətətinin onun strateji məqsəd və vəzifələrinə uyğunluğunun qiymətləndirilməsini əhatə edir.',
        image: '/images/kpi-analysis.png',
      },
      {
        id: 7,
        title: '1C proqramı ilə inteqrasiya',
        description:
          '1C proqramının verilənlərin Microsoft Power BI-a qoşulması biznes məlumatlarının təhlili və vizuallaşdırılması üçündür.',
        image: '/images/1c-integration.png',
      },
    ],
  },
];
export const contactInfo: ContactInfo[] = [
  {
    country: 'Azərbaycan',
    address: 'Azure Business Center 8 Noyabr, 15 Bakı, Azərbaycan AZ1010',
  },
  { country: 'Kanada', address: 'Edmonton, Alberta' },
  { country: 'Gürcüstan', address: 'Tbilisi, Gürcüstan' },
];