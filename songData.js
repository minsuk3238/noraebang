// TJ Karaoke Master Song Database with Artist Gender Classification (남성, 여성, 혼성)

const BASE_HITS = [
  // 2024-2026 Latest Hits
  { year: 2026, month: 1, rank: 1, title: "Whiplash", artist: "aespa", tj: "89812", genre: "댄스", gender: "여성" },
  { year: 2025, month: 10, rank: 1, title: "APT.", artist: "로제 (ROSÉ) & Bruno Mars", tj: "89732", genre: "댄스", gender: "혼성" },
  { year: 2025, month: 11, rank: 1, title: "POWER", artist: "G-DRAGON", tj: "89785", genre: "힙합", gender: "남성" },
  { year: 2025, month: 10, rank: 2, title: "UP (KARINA Solo)", artist: "aespa", tj: "89710", genre: "댄스", gender: "여성" },
  { year: 2025, month: 9, rank: 1, title: "HAPPY", artist: "DAY6 (데이식스)", tj: "88820", genre: "록/밴드", gender: "남성" },
  { year: 2025, month: 9, rank: 2, title: "내 이름 맑음", artist: "QWER", tj: "89645", genre: "록/밴드", gender: "여성" },
  { year: 2025, month: 5, rank: 1, title: "Supernova", artist: "aespa", tj: "89124", genre: "댄스", gender: "여성" },
  { year: 2025, month: 7, rank: 1, title: "클락션 (Klaxon)", artist: "(여자)아이들", tj: "89410", genre: "댄스", gender: "여성" },
  { year: 2025, month: 5, rank: 2, title: "소나기", artist: "이클립스 (ECLIPSE)", tj: "89052", genre: "발라드", gender: "남성" },
  { year: 2024, month: 1, rank: 1, title: "첫 만남은 계획대로 되지 않아", artist: "TWS (투어스)", tj: "88523", genre: "댄스", gender: "남성" },
  { year: 2024, month: 3, rank: 1, title: "한 페이지가 될 수 있게", artist: "DAY6 (데이식스)", tj: "54231", genre: "록/밴드", gender: "남성" },
  { year: 2024, month: 3, rank: 2, title: "예뻤어", artist: "DAY6 (데이식스)", tj: "48721", genre: "발라드", gender: "남성" },
  { year: 2024, month: 2, rank: 1, title: "밤양갱", artist: "비비 (BIBI)", tj: "88674", genre: "발라드", gender: "여성" },
  { year: 2024, month: 2, rank: 2, title: "EASY", artist: "LE SSERAFIM", tj: "88630", genre: "댄스", gender: "여성" },
  { year: 2024, month: 1, rank: 2, title: "To. X", artist: "태연 (TAEYEON)", tj: "88390", genre: "발라드", gender: "여성" },
  { year: 2024, month: 1, rank: 3, title: "Drama", artist: "aespa", tj: "88280", genre: "댄스", gender: "여성" },
  { year: 2023, month: 11, rank: 1, title: "Perfect Night", artist: "LE SSERAFIM", tj: "88150", genre: "댄스", gender: "여성" },
  { year: 2023, month: 7, rank: 1, title: "Super Shy", artist: "NewJeans", tj: "87820", genre: "댄스", gender: "여성" },
  { year: 2023, month: 7, rank: 2, title: "Seven (feat. Latto)", artist: "정국 (Jungkook)", tj: "87850", genre: "댄스", gender: "남성" },
  { year: 2023, month: 7, rank: 3, title: "ETA", artist: "NewJeans", tj: "87890", genre: "댄스", gender: "여성" },
  { year: 2023, month: 8, rank: 1, title: "Love Lee", artist: "AKMU (악뮤)", tj: "88015", genre: "댄스", gender: "혼성" },

  // 2020-2023 Hits
  { year: 2023, month: 1, rank: 1, title: "사건의 지평선", artist: "윤하 (YOUNHA)", tj: "86782", genre: "록/밴드", gender: "여성" },
  { year: 2023, month: 1, rank: 2, title: "Ditto", artist: "NewJeans", tj: "87012", genre: "댄스", gender: "여성" },
  { year: 2022, month: 8, rank: 1, title: "Hype Boy", artist: "NewJeans", tj: "86411", genre: "댄스", gender: "여성" },
  { year: 2023, month: 4, rank: 1, title: "I AM", artist: "IVE (아이브)", tj: "87455", genre: "댄스", gender: "여성" },
  { year: 2023, month: 5, rank: 1, title: "퀸카 (Queencard)", artist: "(여자)아이들", tj: "87640", genre: "댄스", gender: "여성" },
  { year: 2022, month: 4, rank: 1, title: "LOVE DIVE", artist: "IVE (아이브)", tj: "86150", genre: "댄스", gender: "여성" },
  { year: 2022, month: 3, rank: 1, title: "TOMBOY", artist: "(여자)아이들", tj: "86088", genre: "록/밴드", gender: "여성" },
  { year: 2022, month: 1, rank: 1, title: "취중고백", artist: "김민석 (멜로망스)", tj: "85890", genre: "발라드", gender: "남성" },
  { year: 2021, month: 5, rank: 1, title: "Next Level", artist: "aespa", tj: "84680", genre: "댄스", gender: "여성" },
  { year: 2021, month: 3, rank: 1, title: "Rollin'", artist: "브레이브걸스", tj: "49250", genre: "댄스", gender: "여성" },
  { year: 2021, month: 3, rank: 2, title: "라일락 (LILAC)", artist: "아이유 (IU)", tj: "84450", genre: "댄스", gender: "여성" },
  { year: 2021, month: 5, rank: 2, title: "신호등", artist: "이무진", tj: "84710", genre: "록/밴드", gender: "남성" },
  { year: 2020, month: 8, rank: 1, title: "Dynamite", artist: "방탄소년단 (BTS)", tj: "82750", genre: "댄스", gender: "남성" },
  { year: 2020, month: 5, rank: 1, title: "에잇 (prod.&feat. SUGA)", artist: "아이유 (IU)", tj: "81880", genre: "록/밴드", gender: "여성" },
  { year: 2020, month: 1, rank: 1, title: "아무노래", artist: "지코 (ZICO)", tj: "81210", genre: "힙합", gender: "남성" },
  { year: 2020, month: 3, rank: 1, title: "시든 꽃에 물을 주듯", artist: "박혜원 (HYNN)", tj: "54095", genre: "발라드", gender: "여성" },

  // 2015-2019 Karaoke Legends
  { year: 2019, month: 3, rank: 1, title: "주저하는 연인들을 위해", artist: "잔나비", tj: "53810", genre: "록/밴드", gender: "남성" },
  { year: 2019, month: 6, rank: 1, title: "오늘도 빛나는 너에게", artist: "마크툽 (MAKTUB)", tj: "54210", genre: "발라드", gender: "남성" },
  { year: 2019, month: 6, rank: 2, title: "포장마차", artist: "황인욱", tj: "54180", genre: "발라드", gender: "남성" },
  { year: 2019, month: 5, rank: 1, title: "사랑에 연습이 있었다면", artist: "임재현", tj: "53410", genre: "발라드", gender: "남성" },
  { year: 2018, month: 3, rank: 1, title: "모든 날, 모든 순간", artist: "폴킴", tj: "49320", genre: "발라드", gender: "남성" },
  { year: 2018, month: 4, rank: 1, title: "지나오다", artist: "닐로 (Nilo)", tj: "48790", genre: "발라드", gender: "남성" },
  { year: 2018, month: 1, rank: 1, title: "LOVE SCENARIO", artist: "iKON (아이콘)", tj: "49010", genre: "힙합", gender: "남성" },
  { year: 2018, month: 6, rank: 1, title: "뚜두뚜두", artist: "BLACKPINK", tj: "49650", genre: "댄스", gender: "여성" },
  { year: 2017, month: 6, rank: 1, title: "좋니", artist: "윤종신", tj: "48260", genre: "발라드", gender: "남성" },
  { year: 2017, month: 1, rank: 1, title: "첫눈처럼 너에게 가겠다", artist: "에일리 (Ailee)", tj: "47720", genre: "발라드", gender: "여성" },
  { year: 2017, month: 8, rank: 1, title: "가시나", artist: "선미", tj: "48390", genre: "댄스", gender: "여성" },
  { year: 2016, month: 4, rank: 1, title: "CHEER UP", artist: "TWICE (트와이스)", tj: "46290", genre: "댄스", gender: "여성" },
  { year: 2016, month: 1, rank: 1, title: "어디에도", artist: "엠씨더맥스", tj: "46050", genre: "발라드", gender: "남성" },
  { year: 2016, month: 8, rank: 1, title: "우주를 줄게", artist: "볼빨간사춘기", tj: "47010", genre: "발라드", gender: "여성" },
  { year: 2015, month: 6, rank: 1, title: "BANG BANG BANG", artist: "BIGBANG", tj: "45380", genre: "댄스", gender: "남성" },
  { year: 2015, month: 3, rank: 1, title: "야생화", artist: "박효신", tj: "38210", genre: "발라드", gender: "남성" },
  { year: 2015, month: 1, rank: 1, title: "위아래", artist: "EXID", tj: "39020", genre: "댄스", gender: "여성" },

  // 2000-2014 Karaoke All-Time Greats
  { year: 2014, month: 2, rank: 1, title: "썸 (Feat. 릴보이)", artist: "소유 & 정기고", tj: "38010", genre: "발라드", gender: "혼성" },
  { year: 2014, month: 6, rank: 1, title: "눈, 코, 입", artist: "태양", tj: "38450", genre: "발라드", gender: "남성" },
  { year: 2013, month: 8, rank: 1, title: "으르렁 (Growl)", artist: "EXO", tj: "37190", genre: "댄스", gender: "남성" },
  { year: 2012, month: 7, rank: 1, title: "강남스타일", artist: "싸이 (PSY)", tj: "35620", genre: "댄스", gender: "남성" },
  { year: 2012, month: 3, rank: 1, title: "FANTASTIC BABY", artist: "BIGBANG", tj: "35110", genre: "댄스", gender: "남성" },
  { year: 2012, month: 3, rank: 2, title: "벚꽃 엔딩", artist: "버스커 버스커", tj: "35180", genre: "록/밴드", gender: "남성" },
  { year: 2011, month: 6, rank: 1, title: "Roly-Poly", artist: "티아라", tj: "34120", genre: "댄스", gender: "여성" },
  { year: 2011, month: 6, rank: 2, title: "내가 제일 잘 나가", artist: "2NE1", tj: "34100", genre: "댄스", gender: "여성" },
  { year: 2011, month: 1, rank: 1, title: "좋은 날", artist: "아이유", tj: "33390", genre: "댄스", gender: "여성" },
  { year: 2010, month: 7, rank: 1, title: "Bad Girl Good Girl", artist: "미쓰에이", tj: "32770", genre: "댄스", gender: "여성" },
  { year: 2009, month: 1, rank: 1, title: "Gee", artist: "소녀시대", tj: "30660", genre: "댄스", gender: "여성" },
  { year: 2008, month: 9, rank: 1, title: "Nobody", artist: "원더걸스", tj: "30150", genre: "댄스", gender: "여성" },
  { year: 2008, month: 11, rank: 1, title: "총 맞은 것처럼", artist: "백지영", tj: "30410", genre: "발라드", gender: "여성" },
  { year: 2008, month: 9, rank: 2, title: "주문 (MIROTIC)", artist: "동방신기", tj: "30190", genre: "댄스", gender: "남성" },
  { year: 2007, month: 8, rank: 1, title: "거짓말", artist: "BIGBANG", tj: "18530", genre: "댄스", gender: "남성" },
  { year: 2007, month: 9, rank: 1, title: "Tell Me", artist: "원더걸스", tj: "18620", genre: "댄스", gender: "여성" },
  { year: 2006, month: 9, rank: 1, title: "까만안경", artist: "이루", tj: "16470", genre: "발라드", gender: "남성" },
  { year: 2006, month: 4, rank: 1, title: "내 사람", artist: "SG워너비", tj: "15910", genre: "발라드", gender: "남성" },
  { year: 2005, month: 3, rank: 1, title: "겁쟁이", artist: "버즈 (Buzz)", tj: "14680", genre: "록/밴드", gender: "남성" },
  { year: 2005, month: 3, rank: 2, title: "가시", artist: "버즈 (Buzz)", tj: "14750", genre: "록/밴드", gender: "남성" },
  { year: 2004, month: 1, rank: 1, title: "응급실", artist: "izi", tj: "14580", genre: "발라드", gender: "남성" },
  { year: 2004, month: 2, rank: 1, title: "Timeless", artist: "SG워너비", tj: "12680", genre: "발라드", gender: "남성" },
  { year: 2003, month: 6, rank: 1, title: "소주 한 잔", artist: "임창정", tj: "10980", genre: "발라드", gender: "남성" },
  { year: 2003, month: 2, rank: 1, title: "체념", artist: "빅마마", tj: "10950", genre: "발라드", gender: "여성" },
  { year: 2002, month: 4, rank: 1, title: "No.1", artist: "보아 (BoA)", tj: "9850", genre: "댄스", gender: "여성" },
  { year: 2002, month: 9, rank: 1, title: "낭만고양이", artist: "체리필터", tj: "9980", genre: "록/밴드", gender: "혼성" },
  { year: 2001, rank: 1, month: 6, title: "벌써 일년", artist: "브라운 아이즈", tj: "9510", genre: "발라드", gender: "남성" },
  { year: 2003, rank: 1, month: 1, title: "Don't Cry", artist: "더 크로스", tj: "11980", genre: "록/밴드", gender: "남성" },
  { year: 2016, rank: 1, month: 8, title: "그대라는 사치", artist: "한동근", tj: "47230", genre: "발라드", gender: "남성" },
  { year: 2012, rank: 1, month: 9, title: "바람기억", artist: "나얼", tj: "35870", genre: "발라드", gender: "남성" },

  // 1980-1999 Classic Legends
  { year: 1999, rank: 1, month: 7, title: "Wa (와)", artist: "이정현", tj: "8450", genre: "댄스", gender: "여성" },
  { year: 1998, rank: 1, month: 10, title: "순정", artist: "코요태", tj: "4920", genre: "댄스", gender: "혼성" },
  { year: 1998, rank: 1, month: 9, title: "To Heaven", artist: "조성모", tj: "4680", genre: "발라드", gender: "남성" },
  { year: 1997, rank: 1, month: 7, title: "해변의 여인", artist: "쿨 (COOL)", tj: "4110", genre: "댄스", gender: "혼성" },
  { year: 1995, rank: 1, month: 1, title: "잘못된 만남", artist: "김건모", tj: "2420", genre: "댄스", gender: "남성" },
  { year: 1994, rank: 1, month: 5, title: "칵테일 사랑", artist: "마로니에", tj: "1980", genre: "댄스", gender: "혼성" },
  { year: 1993, rank: 1, month: 6, title: "서시", artist: "신성우", tj: "1650", genre: "록/밴드", gender: "남성" },
  { year: 1992, rank: 1, month: 3, title: "난 알아요", artist: "서태지와 아이들", tj: "1210", genre: "댄스", gender: "남성" },
  { year: 1991, rank: 1, month: 9, title: "내 사랑 내 곁에", artist: "김현식", tj: "650", genre: "발라드", gender: "남성" },
  { year: 1989, rank: 1, month: 11, title: "희망사항", artist: "변진섭", tj: "410", genre: "발라드", gender: "남성" },
  { year: 1988, rank: 1, month: 12, title: "그대에게", artist: "무한궤도 (신해철)", tj: "310", genre: "록/밴드", gender: "남성" },
  { year: 1987, rank: 1, month: 11, title: "사랑하기 때문에", artist: "유재하", tj: "250", genre: "발라드", gender: "남성" },
  { year: 1986, rank: 1, month: 10, title: "비처럼 음악처럼", artist: "김현식", tj: "190", genre: "발라드", gender: "남성" },

  // Trot & Popular Favorites
  { year: 2021, rank: 1, month: 10, title: "사랑은 늘 도망가", artist: "임영웅", tj: "86712", genre: "트로트", gender: "남성" },
  { year: 2020, rank: 1, month: 4, title: "이제 나만 믿어요", artist: "임영웅", tj: "81640", genre: "트로트", gender: "남성" },
  { year: 2020, rank: 1, month: 3, title: "찐이야", artist: "영탁", tj: "81380", genre: "트로트", gender: "남성" },
  { year: 2017, rank: 1, month: 1, title: "아모르 파티", artist: "김연자", tj: "38920", genre: "트로트", gender: "여성" },
  { year: 2012, rank: 1, month: 1, title: "초혼", artist: "장윤정", tj: "32350", genre: "트로트", gender: "여성" },
  { year: 2004, rank: 1, month: 10, title: "어머나", artist: "장윤정", tj: "14100", genre: "트로트", gender: "여성" }
];

// Generate Unique Master Songs Database
function generateUniqueSongsDatabase() {
  const uniqueMap = new Map();

  function addSong(year, month, rank, title, artist, tj, genre, gender) {
    const key = `${tj}_${title.trim()}_${artist.trim()}`;
    if (!uniqueMap.has(key)) {
      uniqueMap.set(key, {
        year: year,
        month: month,
        rank: rank,
        title: title.trim(),
        artist: artist.trim(),
        tj: tj.toString(),
        genre: genre,
        gender: gender || "남성"
      });
    }
  }

  BASE_HITS.forEach(h => {
    addSong(h.year, h.month, h.rank, h.title, h.artist, h.tj, h.genre, h.gender);
  });

  const songTemplates = [
    { title: "첫눈", artist: "EXO", tj: "37812", genre: "발라드", gender: "남성" },
    { title: "너의 모든 순간", artist: "성시경", tj: "38110", genre: "발라드", gender: "남성" },
    { title: "스물다섯, 스물하나", artist: "자우림", tj: "37420", genre: "록/밴드", gender: "혼성" },
    { title: "사계", artist: "태연", tj: "53780", genre: "발라드", gender: "여성" },
    { title: "에잇", artist: "아이유", tj: "81880", genre: "록/밴드", gender: "여성" },
    { title: "오래된 노래", artist: "스탠딩 에그", tj: "35810", genre: "발라드", gender: "혼성" },
    { title: "Marry Me", artist: "구윤회", tj: "46890", genre: "발라드", gender: "남성" },
    { title: "사랑은 은하수 다방에서", artist: "10cm", tj: "33890", genre: "발라드", gender: "남성" },
    { title: "기억의 습작", artist: "전람회", tj: "1850", genre: "발라드", gender: "남성" },
    { title: "가질 수 없는 너", artist: "뱅크", tj: "2480", genre: "발라드", gender: "남성" },
    { title: "희재", artist: "성시경", tj: "10890", genre: "발라드", gender: "남성" },
    { title: "사랑했나봐", artist: "윤도현", tj: "14890", genre: "록/밴드", gender: "남성" },
    { title: "발걸음", artist: "에메랄드 캐슬", tj: "4080", genre: "록/밴드", gender: "남성" },
    { title: "순애보", artist: "유리상자", tj: "4210", genre: "발라드", gender: "남성" },
    { title: "인형의 꿈", artist: "일기예보", tj: "3290", genre: "발라드", gender: "남성" },
    { title: "천년의 사랑", artist: "박완규", tj: "8290", genre: "록/밴드", gender: "남성" },
    { title: "이미 슬픈 사랑", artist: "야다", tj: "8390", genre: "록/밴드", gender: "남성" },
    { title: "She's Gone", artist: "Steelheart", tj: "7120", genre: "록/밴드", gender: "남성" },
    { title: "Tears", artist: "소찬휘", tj: "8910", genre: "댄스", gender: "여성" },
    { title: "멍", artist: "김현정", tj: "8890", genre: "댄스", gender: "여성" },
    { title: "S-Class", artist: "Stray Kids", tj: "87690", genre: "댄스", gender: "남성" },
    { title: "손오공", artist: "세븐틴", tj: "87510", genre: "댄스", gender: "남성" },
    { title: "MANIAC", artist: "Stray Kids", tj: "86010", genre: "댄스", gender: "남성" },
    { title: "Shut Down", artist: "BLACKPINK", tj: "86610", genre: "힙합", gender: "여성" },
    { title: "Pink Venom", artist: "BLACKPINK", tj: "86520", genre: "힙합", gender: "여성" },
    { title: "Fact Check", artist: "NCT 127", tj: "88120", genre: "댄스", gender: "남성" }
  ];

  songTemplates.forEach(t => {
    addSong(2023, 1, 1, t.title, t.artist, t.tj, t.genre, t.gender);
  });

  return Array.from(uniqueMap.values());
}

// Global Unique Song Database Instance
const SONG_DATABASE = generateUniqueSongsDatabase();
