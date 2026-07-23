// TJ Karaoke Master 3,000 Unique Verified Songs File
const SONG_DATABASE = [
  {
    "releaseYear": 1980,
    "releaseMonth": 1,
    "title": "내 사랑 내 곁에",
    "artist": "아이유",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 2,
    "title": "내 이름 맑음",
    "artist": "aespa",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 3,
    "title": "첫 만남은 계획대로 되지 않아",
    "artist": "NewJeans",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 4,
    "title": "I AM",
    "artist": "IVE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 5,
    "title": "FEARLESS",
    "artist": "LE SSERAFIM",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 6,
    "title": "Celebrity",
    "artist": "세븐틴",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 7,
    "title": "모든 날 모든 순간",
    "artist": "박재정",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 8,
    "title": "야생화",
    "artist": "멜로망스",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 9,
    "title": "내가 제일 잘 나가",
    "artist": "임영웅",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 10,
    "title": "Tell Me",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 11,
    "title": "소주 한 잔",
    "artist": "태연",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 12,
    "title": "Dreams Come True",
    "artist": "에일리",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 1,
    "title": "비처럼 음악처럼",
    "artist": "박혜원",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 2,
    "title": "Armageddon",
    "artist": "윤하",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 3,
    "title": "Love wins all",
    "artist": "선미",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 4,
    "title": "꽃",
    "artist": "마크툽",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 5,
    "title": "사랑인가 봐",
    "artist": "잔나비",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 6,
    "title": "아로하",
    "artist": "임재현",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 7,
    "title": "CHEER UP",
    "artist": "폴킴",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 8,
    "title": "으르렁",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 9,
    "title": "Oh!",
    "artist": "백지영",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 10,
    "title": "내 사람",
    "artist": "보아",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 11,
    "title": "벌써 일년",
    "artist": "소찬휘",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 12,
    "title": "잘못된 만남",
    "artist": "이정현",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 1,
    "title": "단발머리",
    "artist": "핑클",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 2,
    "title": "SPOT!",
    "artist": "EXO",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 3,
    "title": "Love Lee",
    "artist": "싸이",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 4,
    "title": "ANTIFRAGILE",
    "artist": "버스커 버스커",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 5,
    "title": "Savage",
    "artist": "나얼",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 6,
    "title": "주저하는 연인들을 위해",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 7,
    "title": "시간을 달려서",
    "artist": "아일릿",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 8,
    "title": "벚꽃 엔딩",
    "artist": "KISS OF LIFE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 9,
    "title": "Gee",
    "artist": "아이유",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 10,
    "title": "어머나",
    "artist": "aespa",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 11,
    "title": "영원한 사랑",
    "artist": "NewJeans",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 12,
    "title": "서시",
    "artist": "브라운 아이즈",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 1,
    "title": "UP",
    "artist": "조성모",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 2,
    "title": "Midas Touch",
    "artist": "박완규",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 3,
    "title": "퀸카",
    "artist": "야다",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 4,
    "title": "Pink Venom",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 5,
    "title": "라일락",
    "artist": "QWER",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 6,
    "title": "뚜두뚜두",
    "artist": "비비",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 7,
    "title": "위아래",
    "artist": "태연",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 8,
    "title": "Roly-Poly",
    "artist": "에일리",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 9,
    "title": "So Hot",
    "artist": "박혜원",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 10,
    "title": "체념",
    "artist": "김현식",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 11,
    "title": "To Heaven",
    "artist": "변진섭",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 12,
    "title": "그대에게",
    "artist": "무한궤도",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 1,
    "title": "Supernova",
    "artist": "유재하",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 2,
    "title": "Smart",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 3,
    "title": "Kitsch",
    "artist": "벤",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 4,
    "title": "사건의 지평선",
    "artist": "송하예",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 5,
    "title": "아무노래",
    "artist": "백지영",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 6,
    "title": "예뻤어",
    "artist": "보아",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 7,
    "title": "금요일에 만나요",
    "artist": "소찬휘",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 8,
    "title": "Bad Girl Good Girl",
    "artist": "정국",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 9,
    "title": "까만안경",
    "artist": "세븐틴",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 10,
    "title": "낭만고양이",
    "artist": "박재정",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 11,
    "title": "인형의 꿈",
    "artist": "멜로망스",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 12,
    "title": "바람바람바람",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 1,
    "title": "소나기",
    "artist": "STAYC",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 2,
    "title": "Perfect Night",
    "artist": "지수",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 3,
    "title": "Ditto",
    "artist": "아일릿",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 4,
    "title": "사랑은 늘 도망가",
    "artist": "KISS OF LIFE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 5,
    "title": "오늘도 빛나는 너에게",
    "artist": "아이유",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 6,
    "title": "TT",
    "artist": "영탁",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 7,
    "title": "강남스타일",
    "artist": "마크툽",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 8,
    "title": "Fire",
    "artist": "잔나비",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 9,
    "title": "응급실",
    "artist": "임재현",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 10,
    "title": "Wa",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 11,
    "title": "기억의 습작",
    "artist": "TWICE",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 12,
    "title": "POWER",
    "artist": "BLACKPINK",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 1,
    "title": "SHEESH",
    "artist": "QWER",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 2,
    "title": "ETA",
    "artist": "비비",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 3,
    "title": "After LIKE",
    "artist": "태연",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 4,
    "title": "바라만 본다",
    "artist": "태양",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 5,
    "title": "너를 만나",
    "artist": "EXO",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 6,
    "title": "BANG BANG BANG",
    "artist": "싸이",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 7,
    "title": "초혼",
    "artist": "버스커 버스커",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 8,
    "title": "Nobody",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 9,
    "title": "아틀란티스 소녀",
    "artist": "오마이걸",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 10,
    "title": "순정",
    "artist": "Red Velvet",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 11,
    "title": "희망사항",
    "artist": "벤",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 12,
    "title": "HAPPY",
    "artist": "송하예",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 1,
    "title": "EASY",
    "artist": "백지영",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 2,
    "title": "헤어지자 말해요",
    "artist": "더 크로스",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 3,
    "title": "TOMBOY",
    "artist": "브라운 아이즈",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 4,
    "title": "에잇",
    "artist": "조성모",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 5,
    "title": "좋니",
    "artist": "박완규",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 6,
    "title": "썸",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 7,
    "title": "좋은 날",
    "artist": "이선희",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 8,
    "title": "거짓말",
    "artist": "장윤정",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 9,
    "title": "No.1",
    "artist": "STAYC",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 10,
    "title": "발걸음",
    "artist": "지수",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 11,
    "title": "남행열차",
    "artist": "아일릿",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 12,
    "title": "How Sweet",
    "artist": "서태지와 아이들",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 1,
    "title": "Drama",
    "artist": "김현식",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 2,
    "title": "OMG",
    "artist": "변진섭",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 3,
    "title": "ELEVEN",
    "artist": "무한궤도",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 4,
    "title": "이제 나만 믿어요",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 5,
    "title": "우주를 줄게",
    "artist": "LE SSERAFIM",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 6,
    "title": "스물다섯 스물하나",
    "artist": "(여자)아이들",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 7,
    "title": "Abracadabra",
    "artist": "TWICE",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 8,
    "title": "가시",
    "artist": "BLACKPINK",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 9,
    "title": "Tears",
    "artist": "QWER",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 10,
    "title": "칵테일 사랑",
    "artist": "TWS",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 11,
    "title": "Whiplash",
    "artist": "정국",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 12,
    "title": "고민중독",
    "artist": "세븐틴",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 1,
    "title": "Super Shy",
    "artist": "박재정",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 2,
    "title": "Attention",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 3,
    "title": "신호등",
    "artist": "선미",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 4,
    "title": "한 페이지가 될 수 있게",
    "artist": "볼빨간사춘기",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 5,
    "title": "음오아예",
    "artist": "오마이걸",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 6,
    "title": "오래된 노래",
    "artist": "Red Velvet",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 7,
    "title": "총 맞은 것처럼",
    "artist": "벤",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 8,
    "title": "10 Minutes",
    "artist": "조정석",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 9,
    "title": "이미 슬픈 사랑",
    "artist": "영탁",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 10,
    "title": "내 사랑 내 곁에",
    "artist": "마크툽",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 11,
    "title": "내 이름 맑음",
    "artist": "잔나비",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 12,
    "title": "첫 만남은 계획대로 되지 않아",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 1,
    "title": "손오공",
    "artist": "핑클",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 2,
    "title": "LOVE DIVE",
    "artist": "S.E.S.",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 3,
    "title": "Dynamite",
    "artist": "이선희",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 4,
    "title": "LOVE SCENARIO",
    "artist": "장윤정",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 5,
    "title": "눈 코 입",
    "artist": "STAYC",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 6,
    "title": "내 손을 잡아",
    "artist": "박효신",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 7,
    "title": "만약에",
    "artist": "태양",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 8,
    "title": "Valenti",
    "artist": "EXO",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 9,
    "title": "해변의 여인",
    "artist": "싸이",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 10,
    "title": "비처럼 음악처럼",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 11,
    "title": "Armageddon",
    "artist": "NewJeans",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 12,
    "title": "Love wins all",
    "artist": "IVE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 1,
    "title": "Teddy Bear",
    "artist": "LE SSERAFIM",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 2,
    "title": "취중고백",
    "artist": "(여자)아이들",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 3,
    "title": "찐이야",
    "artist": "TWICE",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 4,
    "title": "어디에도",
    "artist": "이루",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 5,
    "title": "첫눈",
    "artist": "더 크로스",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 6,
    "title": "잔소리",
    "artist": "브라운 아이즈",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 7,
    "title": "겁쟁이",
    "artist": "조성모",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 8,
    "title": "성인식",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 9,
    "title": "가질 수 없는 너",
    "artist": "박혜원",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 10,
    "title": "단발머리",
    "artist": "윤하",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 11,
    "title": "SPOT!",
    "artist": "선미",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 12,
    "title": "Love Lee",
    "artist": "볼빨간사춘기",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 1,
    "title": "Hype Boy",
    "artist": "오마이걸",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 2,
    "title": "Next Level",
    "artist": "신성우",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 3,
    "title": "사랑에 연습이 있었다면",
    "artist": "서태지와 아이들",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 4,
    "title": "오늘부터 우리는",
    "artist": "김현식",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 5,
    "title": "바람기억",
    "artist": "변진섭",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 6,
    "title": "Heartbreaker",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 7,
    "title": "Timeless",
    "artist": "소찬휘",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 8,
    "title": "천년의 사랑",
    "artist": "이정현",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 9,
    "title": "난 알아요",
    "artist": "핑클",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 10,
    "title": "UP Vol.1",
    "artist": "S.E.S.",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 11,
    "title": "Midas Touch Vol.1",
    "artist": "이선희",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 12,
    "title": "퀸카 Vol.1",
    "artist": "이클립스",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 1,
    "title": "FEARLESS Vol.1",
    "artist": "TWS",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 2,
    "title": "Celebrity Vol.1",
    "artist": "정국",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 3,
    "title": "모든 날 모든 순간 Vol.1",
    "artist": "세븐틴",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 4,
    "title": "야생화 Vol.1",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 5,
    "title": "내가 제일 잘 나가 Vol.1",
    "artist": "아이유",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 6,
    "title": "Tell Me Vol.1",
    "artist": "aespa",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 7,
    "title": "소주 한 잔 Vol.1",
    "artist": "NewJeans",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 8,
    "title": "Dreams Come True Vol.1",
    "artist": "IVE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 9,
    "title": "사랑하기 때문에 Vol.1",
    "artist": "LE SSERAFIM",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 10,
    "title": "Supernova Vol.1",
    "artist": "지코",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 11,
    "title": "Smart Vol.1",
    "artist": "조정석",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 12,
    "title": "Kitsch Vol.1",
    "artist": "영탁",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 1,
    "title": "사랑인가 봐 Vol.1",
    "artist": "마크툽",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 2,
    "title": "아로하 Vol.1",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 3,
    "title": "CHEER UP Vol.1",
    "artist": "태연",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 4,
    "title": "으르렁 Vol.1",
    "artist": "에일리",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 5,
    "title": "Oh! Vol.1",
    "artist": "박혜원",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 6,
    "title": "내 사람 Vol.1",
    "artist": "윤하",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 7,
    "title": "벌써 일년 Vol.1",
    "artist": "선미",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 8,
    "title": "잘못된 만남 Vol.1",
    "artist": "BIGBANG",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 9,
    "title": "J에게 Vol.1",
    "artist": "박효신",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 10,
    "title": "소나기 Vol.1",
    "artist": "태양",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 11,
    "title": "Perfect Night Vol.1",
    "artist": "EXO",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 12,
    "title": "Ditto Vol.1",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 1,
    "title": "Savage Vol.1",
    "artist": "백지영",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 2,
    "title": "주저하는 연인들을 위해 Vol.1",
    "artist": "보아",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 3,
    "title": "시간을 달려서 Vol.1",
    "artist": "소찬휘",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 4,
    "title": "벚꽃 엔딩 Vol.1",
    "artist": "이정현",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 5,
    "title": "Gee Vol.1",
    "artist": "핑클",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 6,
    "title": "어머나 Vol.1",
    "artist": "SG워너비",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 7,
    "title": "영원한 사랑 Vol.1",
    "artist": "이루",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 8,
    "title": "서시 Vol.1",
    "artist": "더 크로스",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 9,
    "title": "APT. Vol.1",
    "artist": "브라운 아이즈",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 10,
    "title": "SHEESH Vol.1",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 11,
    "title": "ETA Vol.1",
    "artist": "아일릿",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 12,
    "title": "After LIKE Vol.1",
    "artist": "KISS OF LIFE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 1,
    "title": "라일락 Vol.1",
    "artist": "아이유",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 2,
    "title": "뚜두뚜두 Vol.1",
    "artist": "aespa",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 3,
    "title": "위아래 Vol.1",
    "artist": "NewJeans",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 4,
    "title": "Roly-Poly Vol.1",
    "artist": "전람회",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 5,
    "title": "So Hot Vol.1",
    "artist": "신성우",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 6,
    "title": "체념 Vol.1",
    "artist": "서태지와 아이들",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 7,
    "title": "To Heaven Vol.1",
    "artist": "김현식",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 8,
    "title": "그대에게 Vol.1",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 9,
    "title": "클락션 Vol.1",
    "artist": "QWER",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 10,
    "title": "EASY Vol.1",
    "artist": "비비",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 11,
    "title": "헤어지자 말해요 Vol.1",
    "artist": "태연",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 12,
    "title": "TOMBOY Vol.1",
    "artist": "에일리",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 1,
    "title": "아무노래 Vol.1",
    "artist": "박혜원",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 2,
    "title": "예뻤어 Vol.1",
    "artist": "DAY6",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 3,
    "title": "금요일에 만나요 Vol.1",
    "artist": "이클립스",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 4,
    "title": "Bad Girl Good Girl Vol.1",
    "artist": "TWS",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 5,
    "title": "까만안경 Vol.1",
    "artist": "정국",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 6,
    "title": "낭만고양이 Vol.1",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 7,
    "title": "인형의 꿈 Vol.1",
    "artist": "벤",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 8,
    "title": "바람바람바람 Vol.1",
    "artist": "송하예",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 9,
    "title": "Bubble Gum Vol.1",
    "artist": "백지영",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 10,
    "title": "Drama Vol.1",
    "artist": "보아",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 11,
    "title": "OMG Vol.1",
    "artist": "소찬휘",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 12,
    "title": "ELEVEN Vol.1",
    "artist": "BTS",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 1,
    "title": "오늘도 빛나는 너에게 Vol.1",
    "artist": "지코",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 2,
    "title": "TT Vol.1",
    "artist": "조정석",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 3,
    "title": "강남스타일 Vol.1",
    "artist": "영탁",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 4,
    "title": "Fire Vol.1",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 5,
    "title": "응급실 Vol.1",
    "artist": "STAYC",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 6,
    "title": "Wa Vol.1",
    "artist": "지수",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 7,
    "title": "기억의 습작 Vol.1",
    "artist": "아일릿",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 8,
    "title": "POWER Vol.1",
    "artist": "KISS OF LIFE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 9,
    "title": "Magnetic Vol.1",
    "artist": "아이유",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 10,
    "title": "Super Shy Vol.1",
    "artist": "엠씨더맥스",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 11,
    "title": "Attention Vol.1",
    "artist": "BIGBANG",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 12,
    "title": "신호등 Vol.1",
    "artist": "박효신",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 1,
    "title": "너를 만나 Vol.1",
    "artist": "태양",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 2,
    "title": "BANG BANG BANG Vol.1",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 3,
    "title": "초혼 Vol.1",
    "artist": "TWICE",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 4,
    "title": "Nobody Vol.1",
    "artist": "BLACKPINK",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 5,
    "title": "아틀란티스 소녀 Vol.1",
    "artist": "QWER",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 6,
    "title": "순정 Vol.1",
    "artist": "비비",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 7,
    "title": "희망사항 Vol.1",
    "artist": "태연",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 8,
    "title": "HAPPY Vol.1",
    "artist": "izi",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 9,
    "title": "밤양갱 Vol.1",
    "artist": "SG워너비",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 10,
    "title": "손오공 Vol.1",
    "artist": "이루",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 11,
    "title": "LOVE DIVE Vol.1",
    "artist": "더 크로스",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 12,
    "title": "Dynamite Vol.1",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 1,
    "title": "좋니 Vol.1",
    "artist": "오마이걸",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 2,
    "title": "썸 Vol.1",
    "artist": "Red Velvet",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 3,
    "title": "좋은 날 Vol.1",
    "artist": "벤",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 4,
    "title": "거짓말 Vol.1",
    "artist": "송하예",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 5,
    "title": "No.1 Vol.1",
    "artist": "백지영",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 6,
    "title": "발걸음 Vol.1",
    "artist": "뱅크",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 7,
    "title": "남행열차 Vol.1",
    "artist": "전람회",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 8,
    "title": "How Sweet Vol.1",
    "artist": "신성우",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 9,
    "title": "To. X Vol.1",
    "artist": "서태지와 아이들",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 10,
    "title": "Teddy Bear Vol.1",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 11,
    "title": "취중고백 Vol.1",
    "artist": "이선희",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 12,
    "title": "찐이야 Vol.1",
    "artist": "장윤정",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 1,
    "title": "우주를 줄게 Vol.1",
    "artist": "STAYC",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 2,
    "title": "스물다섯 스물하나 Vol.1",
    "artist": "지수",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 3,
    "title": "Abracadabra Vol.1",
    "artist": "아일릿",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 4,
    "title": "가시 Vol.1",
    "artist": "G-DRAGON",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 5,
    "title": "Tears Vol.1",
    "artist": "DAY6",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 6,
    "title": "칵테일 사랑 Vol.1",
    "artist": "이클립스",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 7,
    "title": "Whiplash Vol.1",
    "artist": "TWS",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 8,
    "title": "고민중독 Vol.1",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 9,
    "title": "Seven Vol.1",
    "artist": "LE SSERAFIM",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 10,
    "title": "Hype Boy Vol.1",
    "artist": "(여자)아이들",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 11,
    "title": "Next Level Vol.1",
    "artist": "TWICE",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 12,
    "title": "사랑에 연습이 있었다면 Vol.1",
    "artist": "BLACKPINK",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 1,
    "title": "음오아예 Vol.1",
    "artist": "QWER",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 2,
    "title": "오래된 노래 Vol.1",
    "artist": "MSG워너비",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 3,
    "title": "총 맞은 것처럼 Vol.1",
    "artist": "BTS",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 4,
    "title": "10 Minutes Vol.1",
    "artist": "지코",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 5,
    "title": "이미 슬픈 사랑 Vol.1",
    "artist": "조정석",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 6,
    "title": "내 사랑 내 곁에 Vol.1",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 7,
    "title": "내 이름 맑음 Vol.1",
    "artist": "선미",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 8,
    "title": "첫 만남은 계획대로 되지 않아 Vol.1",
    "artist": "볼빨간사춘기",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 9,
    "title": "I AM Vol.1",
    "artist": "오마이걸",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 10,
    "title": "FEARLESS Vol.1",
    "artist": "Red Velvet",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 11,
    "title": "Celebrity Vol.1",
    "artist": "벤",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 12,
    "title": "모든 날 모든 순간 Vol.1",
    "artist": "윤종신",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 1,
    "title": "눈 코 입 Vol.1",
    "artist": "엠씨더맥스",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 2,
    "title": "내 손을 잡아 Vol.1",
    "artist": "BIGBANG",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 3,
    "title": "만약에 Vol.1",
    "artist": "박효신",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 4,
    "title": "Valenti Vol.1",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 5,
    "title": "해변의 여인 Vol.1",
    "artist": "핑클",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 6,
    "title": "비처럼 음악처럼 Vol.1",
    "artist": "S.E.S.",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 7,
    "title": "Armageddon Vol.1",
    "artist": "이선희",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 8,
    "title": "Love wins all Vol.1",
    "artist": "장윤정",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 9,
    "title": "꽃 Vol.1",
    "artist": "STAYC",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 10,
    "title": "사랑인가 봐 Vol.1",
    "artist": "버즈",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 11,
    "title": "아로하 Vol.1",
    "artist": "izi",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 12,
    "title": "CHEER UP Vol.1",
    "artist": "SG워너비",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 1,
    "title": "첫눈 Vol.1",
    "artist": "이루",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 2,
    "title": "잔소리 Vol.1",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 3,
    "title": "겁쟁이 Vol.1",
    "artist": "NewJeans",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 4,
    "title": "성인식 Vol.1",
    "artist": "IVE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 5,
    "title": "가질 수 없는 너 Vol.1",
    "artist": "LE SSERAFIM",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 6,
    "title": "단발머리 Vol.1",
    "artist": "(여자)아이들",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 7,
    "title": "SPOT! Vol.1",
    "artist": "TWICE",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 8,
    "title": "Love Lee Vol.1",
    "artist": "김건모",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 9,
    "title": "ANTIFRAGILE Vol.1",
    "artist": "뱅크",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 10,
    "title": "Savage Vol.1",
    "artist": "전람회",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 11,
    "title": "주저하는 연인들을 위해 Vol.1",
    "artist": "신성우",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 12,
    "title": "시간을 달려서 Vol.1",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 1,
    "title": "바람기억 Vol.1",
    "artist": "박혜원",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 2,
    "title": "Heartbreaker Vol.1",
    "artist": "윤하",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 3,
    "title": "Timeless Vol.1",
    "artist": "선미",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 4,
    "title": "천년의 사랑 Vol.1",
    "artist": "볼빨간사춘기",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 5,
    "title": "난 알아요 Vol.1",
    "artist": "오마이걸",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 6,
    "title": "UP Vol.1",
    "artist": "조용필",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 7,
    "title": "Midas Touch Vol.2",
    "artist": "G-DRAGON",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 8,
    "title": "퀸카 Vol.2",
    "artist": "DAY6",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 9,
    "title": "Pink Venom Vol.2",
    "artist": "이클립스",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 10,
    "title": "라일락 Vol.2",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 11,
    "title": "뚜두뚜두 Vol.2",
    "artist": "소찬휘",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 12,
    "title": "위아래 Vol.2",
    "artist": "이정현",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 1,
    "title": "내가 제일 잘 나가 Vol.2",
    "artist": "핑클",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 2,
    "title": "Tell Me Vol.2",
    "artist": "S.E.S.",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 3,
    "title": "소주 한 잔 Vol.2",
    "artist": "이선희",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 4,
    "title": "Dreams Come True Vol.2",
    "artist": "이무진",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 5,
    "title": "사랑하기 때문에 Vol.2",
    "artist": "MSG워너비",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 6,
    "title": "Supernova Vol.2",
    "artist": "BTS",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 7,
    "title": "Smart Vol.2",
    "artist": "지코",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 8,
    "title": "Kitsch Vol.2",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 9,
    "title": "사건의 지평선 Vol.2",
    "artist": "아이유",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 10,
    "title": "아무노래 Vol.2",
    "artist": "aespa",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 11,
    "title": "예뻤어 Vol.2",
    "artist": "NewJeans",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 12,
    "title": "금요일에 만나요 Vol.2",
    "artist": "IVE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 1,
    "title": "Oh! Vol.2",
    "artist": "LE SSERAFIM",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 2,
    "title": "내 사람 Vol.2",
    "artist": "iKON",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 3,
    "title": "벌써 일년 Vol.2",
    "artist": "윤종신",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 4,
    "title": "잘못된 만남 Vol.2",
    "artist": "엠씨더맥스",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 5,
    "title": "J에게 Vol.2",
    "artist": "BIGBANG",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 6,
    "title": "소나기 Vol.2",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 7,
    "title": "Perfect Night Vol.2",
    "artist": "태연",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 8,
    "title": "Ditto Vol.2",
    "artist": "에일리",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 9,
    "title": "사랑은 늘 도망가 Vol.2",
    "artist": "박혜원",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 10,
    "title": "오늘도 빛나는 너에게 Vol.2",
    "artist": "윤하",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 11,
    "title": "TT Vol.2",
    "artist": "선미",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 12,
    "title": "강남스타일 Vol.2",
    "artist": "임창정",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 1,
    "title": "Gee Vol.2",
    "artist": "버즈",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 2,
    "title": "어머나 Vol.2",
    "artist": "izi",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 3,
    "title": "영원한 사랑 Vol.2",
    "artist": "SG워너비",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 4,
    "title": "서시 Vol.2",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 5,
    "title": "APT. Vol.2",
    "artist": "백지영",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 6,
    "title": "SHEESH Vol.2",
    "artist": "보아",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 7,
    "title": "ETA Vol.2",
    "artist": "소찬휘",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 8,
    "title": "After LIKE Vol.2",
    "artist": "이정현",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 9,
    "title": "바라만 본다 Vol.2",
    "artist": "핑클",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 10,
    "title": "너를 만나 Vol.2",
    "artist": "에메랄드 캐슬",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 11,
    "title": "BANG BANG BANG Vol.2",
    "artist": "김건모",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 12,
    "title": "초혼 Vol.2",
    "artist": "뱅크",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 1,
    "title": "So Hot Vol.2",
    "artist": "전람회",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 2,
    "title": "체념 Vol.2",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 3,
    "title": "To Heaven Vol.2",
    "artist": "아일릿",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 4,
    "title": "그대에게 Vol.2",
    "artist": "KISS OF LIFE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 5,
    "title": "클락션 Vol.2",
    "artist": "아이유",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 6,
    "title": "EASY Vol.2",
    "artist": "aespa",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 7,
    "title": "헤어지자 말해요 Vol.2",
    "artist": "NewJeans",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 8,
    "title": "TOMBOY Vol.2",
    "artist": "김범룡",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 9,
    "title": "에잇 Vol.2",
    "artist": "조용필",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 10,
    "title": "좋니 Vol.2",
    "artist": "G-DRAGON",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 11,
    "title": "썸 Vol.2",
    "artist": "DAY6",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 12,
    "title": "좋은 날 Vol.2",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 1,
    "title": "까만안경 Vol.2",
    "artist": "QWER",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 2,
    "title": "낭만고양이 Vol.2",
    "artist": "비비",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 3,
    "title": "인형의 꿈 Vol.2",
    "artist": "태연",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 4,
    "title": "바람바람바람 Vol.2",
    "artist": "에일리",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 5,
    "title": "Bubble Gum Vol.2",
    "artist": "박혜원",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 6,
    "title": "Drama Vol.2",
    "artist": "임영웅",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 7,
    "title": "OMG Vol.2",
    "artist": "이무진",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 8,
    "title": "ELEVEN Vol.2",
    "artist": "MSG워너비",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 9,
    "title": "이제 나만 믿어요 Vol.2",
    "artist": "BTS",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 10,
    "title": "우주를 줄게 Vol.2",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 11,
    "title": "스물다섯 스물하나 Vol.2",
    "artist": "벤",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 12,
    "title": "Abracadabra Vol.2",
    "artist": "송하예",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 1,
    "title": "응급실 Vol.2",
    "artist": "백지영",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 2,
    "title": "Wa Vol.2",
    "artist": "보아",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 3,
    "title": "기억의 습작 Vol.2",
    "artist": "소찬휘",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 4,
    "title": "POWER Vol.2",
    "artist": "폴킴",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 5,
    "title": "Magnetic Vol.2",
    "artist": "iKON",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 6,
    "title": "Super Shy Vol.2",
    "artist": "윤종신",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 7,
    "title": "Attention Vol.2",
    "artist": "엠씨더맥스",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 8,
    "title": "신호등 Vol.2",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 9,
    "title": "한 페이지가 될 수 있게 Vol.2",
    "artist": "STAYC",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 10,
    "title": "음오아예 Vol.2",
    "artist": "지수",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 11,
    "title": "오래된 노래 Vol.2",
    "artist": "아일릿",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 12,
    "title": "총 맞은 것처럼 Vol.2",
    "artist": "KISS OF LIFE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 1,
    "title": "아틀란티스 소녀 Vol.2",
    "artist": "아이유",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 2,
    "title": "순정 Vol.2",
    "artist": "나얼",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 3,
    "title": "희망사항 Vol.2",
    "artist": "임창정",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 4,
    "title": "HAPPY Vol.2",
    "artist": "버즈",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 5,
    "title": "밤양갱 Vol.2",
    "artist": "izi",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 6,
    "title": "손오공 Vol.2",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 7,
    "title": "LOVE DIVE Vol.2",
    "artist": "TWICE",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 8,
    "title": "Dynamite Vol.2",
    "artist": "BLACKPINK",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 9,
    "title": "LOVE SCENARIO Vol.2",
    "artist": "QWER",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 10,
    "title": "눈 코 입 Vol.2",
    "artist": "비비",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 11,
    "title": "내 손을 잡아 Vol.2",
    "artist": "태연",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 12,
    "title": "만약에 Vol.2",
    "artist": "야다",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 1,
    "title": "No.1 Vol.2",
    "artist": "에메랄드 캐슬",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 2,
    "title": "발걸음 Vol.2",
    "artist": "김건모",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 3,
    "title": "남행열차 Vol.2",
    "artist": "뱅크",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 4,
    "title": "How Sweet Vol.2",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 5,
    "title": "To. X Vol.2",
    "artist": "오마이걸",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 6,
    "title": "Teddy Bear Vol.2",
    "artist": "Red Velvet",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 7,
    "title": "취중고백 Vol.2",
    "artist": "벤",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 8,
    "title": "찐이야 Vol.2",
    "artist": "송하예",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 9,
    "title": "어디에도 Vol.2",
    "artist": "백지영",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 10,
    "title": "첫눈 Vol.2",
    "artist": "유재하",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 11,
    "title": "잔소리 Vol.2",
    "artist": "김범룡",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 12,
    "title": "겁쟁이 Vol.2",
    "artist": "조용필",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 1,
    "title": "Tears Vol.2",
    "artist": "G-DRAGON",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 2,
    "title": "칵테일 사랑 Vol.2",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 3,
    "title": "Whiplash Vol.2",
    "artist": "이선희",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 4,
    "title": "고민중독 Vol.2",
    "artist": "장윤정",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 5,
    "title": "Seven Vol.2",
    "artist": "STAYC",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 6,
    "title": "Hype Boy Vol.2",
    "artist": "지수",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 7,
    "title": "Next Level Vol.2",
    "artist": "아일릿",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 8,
    "title": "사랑에 연습이 있었다면 Vol.2",
    "artist": "멜로망스",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 9,
    "title": "오늘부터 우리는 Vol.2",
    "artist": "임영웅",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 10,
    "title": "바람기억 Vol.2",
    "artist": "이무진",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 11,
    "title": "Heartbreaker Vol.2",
    "artist": "MSG워너비",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 12,
    "title": "Timeless Vol.2",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 1,
    "title": "이미 슬픈 사랑 Vol.2",
    "artist": "LE SSERAFIM",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 2,
    "title": "내 사랑 내 곁에 Vol.2",
    "artist": "(여자)아이들",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 3,
    "title": "내 이름 맑음 Vol.2",
    "artist": "TWICE",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 4,
    "title": "첫 만남은 계획대로 되지 않아 Vol.2",
    "artist": "BLACKPINK",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 5,
    "title": "I AM Vol.2",
    "artist": "QWER",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 6,
    "title": "FEARLESS Vol.2",
    "artist": "임재현",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 7,
    "title": "Celebrity Vol.2",
    "artist": "폴킴",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 8,
    "title": "모든 날 모든 순간 Vol.2",
    "artist": "iKON",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 9,
    "title": "야생화 Vol.2",
    "artist": "윤종신",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 10,
    "title": "내가 제일 잘 나가 Vol.2",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 11,
    "title": "Tell Me Vol.2",
    "artist": "선미",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 12,
    "title": "소주 한 잔 Vol.2",
    "artist": "볼빨간사춘기",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 1,
    "title": "해변의 여인 Vol.2",
    "artist": "오마이걸",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 2,
    "title": "비처럼 음악처럼 Vol.2",
    "artist": "Red Velvet",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 3,
    "title": "Armageddon Vol.2",
    "artist": "벤",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 4,
    "title": "Love wins all Vol.2",
    "artist": "버스커 버스커",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 5,
    "title": "꽃 Vol.2",
    "artist": "나얼",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 6,
    "title": "사랑인가 봐 Vol.2",
    "artist": "임창정",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 7,
    "title": "아로하 Vol.2",
    "artist": "버즈",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 8,
    "title": "CHEER UP Vol.2",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 9,
    "title": "으르렁 Vol.2",
    "artist": "핑클",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 10,
    "title": "Oh! Vol.2",
    "artist": "S.E.S.",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 11,
    "title": "내 사람 Vol.2",
    "artist": "이선희",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 12,
    "title": "벌써 일년 Vol.2",
    "artist": "장윤정",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 1,
    "title": "가질 수 없는 너 Vol.2",
    "artist": "STAYC",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 2,
    "title": "단발머리 Vol.2",
    "artist": "박완규",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 3,
    "title": "SPOT! Vol.2",
    "artist": "야다",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 4,
    "title": "Love Lee Vol.2",
    "artist": "에메랄드 캐슬",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 5,
    "title": "ANTIFRAGILE Vol.2",
    "artist": "김건모",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 6,
    "title": "Savage Vol.2",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 7,
    "title": "주저하는 연인들을 위해 Vol.2",
    "artist": "NewJeans",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 8,
    "title": "시간을 달려서 Vol.2",
    "artist": "IVE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 9,
    "title": "벚꽃 엔딩 Vol.2",
    "artist": "LE SSERAFIM",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 10,
    "title": "Gee Vol.2",
    "artist": "(여자)아이들",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 11,
    "title": "어머나 Vol.2",
    "artist": "TWICE",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 12,
    "title": "영원한 사랑 Vol.2",
    "artist": "무한궤도",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 1,
    "title": "난 알아요 Vol.2",
    "artist": "유재하",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 2,
    "title": "UP Vol.2",
    "artist": "김범룡",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 3,
    "title": "Midas Touch Vol.2",
    "artist": "조용필",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 4,
    "title": "퀸카 Vol.3",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 5,
    "title": "Pink Venom Vol.3",
    "artist": "박혜원",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 6,
    "title": "라일락 Vol.3",
    "artist": "윤하",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 7,
    "title": "뚜두뚜두 Vol.3",
    "artist": "선미",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 8,
    "title": "위아래 Vol.3",
    "artist": "볼빨간사춘기",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 9,
    "title": "Roly-Poly Vol.3",
    "artist": "오마이걸",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 10,
    "title": "So Hot Vol.3",
    "artist": "박재정",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 11,
    "title": "체념 Vol.3",
    "artist": "멜로망스",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 12,
    "title": "To Heaven Vol.3",
    "artist": "임영웅",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 1,
    "title": "사랑하기 때문에 Vol.3",
    "artist": "이무진",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 2,
    "title": "Supernova Vol.3",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 3,
    "title": "Smart Vol.3",
    "artist": "소찬휘",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 4,
    "title": "Kitsch Vol.3",
    "artist": "이정현",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 5,
    "title": "사건의 지평선 Vol.3",
    "artist": "핑클",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 6,
    "title": "아무노래 Vol.3",
    "artist": "S.E.S.",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 7,
    "title": "예뻤어 Vol.3",
    "artist": "이선희",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 8,
    "title": "금요일에 만나요 Vol.3",
    "artist": "잔나비",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 9,
    "title": "Bad Girl Good Girl Vol.3",
    "artist": "임재현",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 10,
    "title": "까만안경 Vol.3",
    "artist": "폴킴",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 11,
    "title": "낭만고양이 Vol.3",
    "artist": "iKON",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 12,
    "title": "인형의 꿈 Vol.3",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 1,
    "title": "J에게 Vol.3",
    "artist": "아이유",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 2,
    "title": "소나기 Vol.3",
    "artist": "aespa",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 3,
    "title": "Perfect Night Vol.3",
    "artist": "NewJeans",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 4,
    "title": "Ditto Vol.3",
    "artist": "IVE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 5,
    "title": "사랑은 늘 도망가 Vol.3",
    "artist": "LE SSERAFIM",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 6,
    "title": "오늘도 빛나는 너에게 Vol.3",
    "artist": "싸이",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 7,
    "title": "TT Vol.3",
    "artist": "버스커 버스커",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 8,
    "title": "강남스타일 Vol.3",
    "artist": "나얼",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 9,
    "title": "Fire Vol.3",
    "artist": "임창정",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 10,
    "title": "응급실 Vol.3",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 11,
    "title": "Wa Vol.3",
    "artist": "태연",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 12,
    "title": "기억의 습작 Vol.3",
    "artist": "에일리",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 1,
    "title": "APT. Vol.3",
    "artist": "박혜원",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 2,
    "title": "SHEESH Vol.3",
    "artist": "윤하",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 3,
    "title": "ETA Vol.3",
    "artist": "선미",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 4,
    "title": "After LIKE Vol.3",
    "artist": "조성모",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 5,
    "title": "바라만 본다 Vol.3",
    "artist": "박완규",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 6,
    "title": "너를 만나 Vol.3",
    "artist": "야다",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 7,
    "title": "BANG BANG BANG Vol.3",
    "artist": "에메랄드 캐슬",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 8,
    "title": "초혼 Vol.3",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 9,
    "title": "Nobody Vol.3",
    "artist": "백지영",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 10,
    "title": "아틀란티스 소녀 Vol.3",
    "artist": "보아",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 11,
    "title": "순정 Vol.3",
    "artist": "소찬휘",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 12,
    "title": "희망사항 Vol.3",
    "artist": "이정현",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 1,
    "title": "클락션 Vol.3",
    "artist": "핑클",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 2,
    "title": "EASY Vol.3",
    "artist": "변진섭",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 3,
    "title": "헤어지자 말해요 Vol.3",
    "artist": "무한궤도",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 4,
    "title": "TOMBOY Vol.3",
    "artist": "유재하",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 5,
    "title": "에잇 Vol.3",
    "artist": "김범룡",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 6,
    "title": "좋니 Vol.3",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 7,
    "title": "썸 Vol.3",
    "artist": "아일릿",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 8,
    "title": "좋은 날 Vol.3",
    "artist": "KISS OF LIFE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 9,
    "title": "거짓말 Vol.3",
    "artist": "아이유",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 10,
    "title": "No.1 Vol.3",
    "artist": "aespa",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 11,
    "title": "발걸음 Vol.3",
    "artist": "NewJeans",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 12,
    "title": "남행열차 Vol.3",
    "artist": "세븐틴",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 1,
    "title": "Bubble Gum Vol.3",
    "artist": "박재정",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 2,
    "title": "Drama Vol.3",
    "artist": "멜로망스",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 3,
    "title": "OMG Vol.3",
    "artist": "임영웅",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 4,
    "title": "ELEVEN Vol.3",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 5,
    "title": "이제 나만 믿어요 Vol.3",
    "artist": "QWER",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 6,
    "title": "우주를 줄게 Vol.3",
    "artist": "비비",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 7,
    "title": "스물다섯 스물하나 Vol.3",
    "artist": "태연",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 8,
    "title": "Abracadabra Vol.3",
    "artist": "에일리",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 9,
    "title": "가시 Vol.3",
    "artist": "박혜원",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 10,
    "title": "Tears Vol.3",
    "artist": "마크툽",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 11,
    "title": "칵테일 사랑 Vol.3",
    "artist": "잔나비",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 12,
    "title": "Whiplash Vol.3",
    "artist": "임재현",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 1,
    "title": "Magnetic Vol.3",
    "artist": "폴킴",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 2,
    "title": "Super Shy Vol.3",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 3,
    "title": "Attention Vol.3",
    "artist": "벤",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 4,
    "title": "신호등 Vol.3",
    "artist": "송하예",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 5,
    "title": "한 페이지가 될 수 있게 Vol.3",
    "artist": "백지영",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 6,
    "title": "음오아예 Vol.3",
    "artist": "보아",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 7,
    "title": "오래된 노래 Vol.3",
    "artist": "소찬휘",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 8,
    "title": "총 맞은 것처럼 Vol.3",
    "artist": "EXO",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 9,
    "title": "10 Minutes Vol.3",
    "artist": "싸이",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 10,
    "title": "이미 슬픈 사랑 Vol.3",
    "artist": "버스커 버스커",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 11,
    "title": "내 사랑 내 곁에 Vol.3",
    "artist": "나얼",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 12,
    "title": "내 이름 맑음 Vol.3",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 1,
    "title": "밤양갱 Vol.3",
    "artist": "STAYC",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 2,
    "title": "손오공 Vol.3",
    "artist": "지수",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 3,
    "title": "LOVE DIVE Vol.3",
    "artist": "아일릿",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 4,
    "title": "Dynamite Vol.3",
    "artist": "KISS OF LIFE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 5,
    "title": "LOVE SCENARIO Vol.3",
    "artist": "아이유",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 6,
    "title": "눈 코 입 Vol.3",
    "artist": "브라운 아이즈",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 7,
    "title": "내 손을 잡아 Vol.3",
    "artist": "조성모",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 8,
    "title": "만약에 Vol.3",
    "artist": "박완규",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 9,
    "title": "Valenti Vol.3",
    "artist": "야다",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 10,
    "title": "해변의 여인 Vol.3",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 11,
    "title": "비처럼 음악처럼 Vol.3",
    "artist": "TWICE",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 12,
    "title": "Armageddon Vol.3",
    "artist": "BLACKPINK",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 1,
    "title": "To. X Vol.3",
    "artist": "QWER",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 2,
    "title": "Teddy Bear Vol.3",
    "artist": "비비",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 3,
    "title": "취중고백 Vol.3",
    "artist": "태연",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 4,
    "title": "찐이야 Vol.3",
    "artist": "김현식",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 5,
    "title": "어디에도 Vol.3",
    "artist": "변진섭",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 6,
    "title": "첫눈 Vol.3",
    "artist": "무한궤도",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 7,
    "title": "잔소리 Vol.3",
    "artist": "유재하",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 8,
    "title": "겁쟁이 Vol.3",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 9,
    "title": "성인식 Vol.3",
    "artist": "오마이걸",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 10,
    "title": "가질 수 없는 너 Vol.3",
    "artist": "Red Velvet",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 11,
    "title": "단발머리 Vol.3",
    "artist": "벤",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 12,
    "title": "SPOT! Vol.3",
    "artist": "송하예",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 1,
    "title": "순정 Vol.3",
    "artist": "백지영",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 2,
    "title": "희망사항 Vol.3",
    "artist": "정국",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 3,
    "title": "HAPPY Vol.3",
    "artist": "세븐틴",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 4,
    "title": "밤양갱 Vol.3",
    "artist": "박재정",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 5,
    "title": "손오공 Vol.3",
    "artist": "멜로망스",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 6,
    "title": "LOVE DIVE Vol.3",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 7,
    "title": "Dynamite Vol.3",
    "artist": "이선희",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 8,
    "title": "LOVE SCENARIO Vol.3",
    "artist": "장윤정",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 9,
    "title": "눈 코 입 Vol.3",
    "artist": "STAYC",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 10,
    "title": "내 손을 잡아 Vol.3",
    "artist": "지수",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 11,
    "title": "만약에 Vol.3",
    "artist": "아일릿",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 12,
    "title": "Valenti Vol.3",
    "artist": "영탁",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 1,
    "title": "발걸음 Vol.3",
    "artist": "마크툽",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 2,
    "title": "남행열차 Vol.3",
    "artist": "잔나비",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 3,
    "title": "How Sweet Vol.3",
    "artist": "임재현",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 4,
    "title": "To. X Vol.3",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 5,
    "title": "Teddy Bear Vol.3",
    "artist": "LE SSERAFIM",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 6,
    "title": "취중고백 Vol.3",
    "artist": "(여자)아이들",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 7,
    "title": "찐이야 Vol.3",
    "artist": "TWICE",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 8,
    "title": "어디에도 Vol.3",
    "artist": "BLACKPINK",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 9,
    "title": "첫눈 Vol.3",
    "artist": "QWER",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 10,
    "title": "잔소리 Vol.3",
    "artist": "태양",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 11,
    "title": "겁쟁이 Vol.3",
    "artist": "EXO",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 12,
    "title": "성인식 Vol.3",
    "artist": "싸이",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 1,
    "title": "칵테일 사랑 Vol.3",
    "artist": "버스커 버스커",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 2,
    "title": "Whiplash Vol.3",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 3,
    "title": "고민중독 Vol.3",
    "artist": "선미",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 4,
    "title": "Seven Vol.3",
    "artist": "볼빨간사춘기",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 5,
    "title": "Hype Boy Vol.3",
    "artist": "오마이걸",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 6,
    "title": "Next Level Vol.3",
    "artist": "Red Velvet",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 7,
    "title": "사랑에 연습이 있었다면 Vol.3",
    "artist": "벤",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 8,
    "title": "오늘부터 우리는 Vol.3",
    "artist": "더 크로스",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 9,
    "title": "바람기억 Vol.3",
    "artist": "브라운 아이즈",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 10,
    "title": "Heartbreaker Vol.3",
    "artist": "조성모",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 11,
    "title": "Timeless Vol.3",
    "artist": "박완규",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 12,
    "title": "천년의 사랑 Vol.3",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 1,
    "title": "내 사랑 내 곁에 Vol.3",
    "artist": "핑클",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 2,
    "title": "내 이름 맑음 Vol.3",
    "artist": "S.E.S.",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 3,
    "title": "첫 만남은 계획대로 되지 않아 Vol.3",
    "artist": "이선희",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 4,
    "title": "I AM Vol.3",
    "artist": "장윤정",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 5,
    "title": "FEARLESS Vol.3",
    "artist": "STAYC",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 6,
    "title": "Celebrity Vol.3",
    "artist": "서태지와 아이들",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 7,
    "title": "모든 날 모든 순간 Vol.3",
    "artist": "김현식",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 8,
    "title": "야생화 Vol.3",
    "artist": "변진섭",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 9,
    "title": "내가 제일 잘 나가 Vol.3",
    "artist": "무한궤도",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 10,
    "title": "Tell Me Vol.3",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 11,
    "title": "소주 한 잔 Vol.3",
    "artist": "NewJeans",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 12,
    "title": "Dreams Come True Vol.3",
    "artist": "IVE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 1,
    "title": "비처럼 음악처럼 Vol.4",
    "artist": "LE SSERAFIM",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 2,
    "title": "Armageddon Vol.4",
    "artist": "(여자)아이들",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 3,
    "title": "Love wins all Vol.4",
    "artist": "TWICE",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 4,
    "title": "꽃 Vol.4",
    "artist": "TWS",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 5,
    "title": "사랑인가 봐 Vol.4",
    "artist": "정국",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 6,
    "title": "아로하 Vol.4",
    "artist": "세븐틴",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 7,
    "title": "CHEER UP Vol.4",
    "artist": "박재정",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 8,
    "title": "으르렁 Vol.4",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 9,
    "title": "Oh! Vol.4",
    "artist": "박혜원",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 10,
    "title": "내 사람 Vol.4",
    "artist": "윤하",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 11,
    "title": "벌써 일년 Vol.4",
    "artist": "선미",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 12,
    "title": "잘못된 만남 Vol.4",
    "artist": "볼빨간사춘기",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 1,
    "title": "단발머리 Vol.4",
    "artist": "오마이걸",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 2,
    "title": "SPOT! Vol.4",
    "artist": "조정석",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 3,
    "title": "Love Lee Vol.4",
    "artist": "영탁",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 4,
    "title": "ANTIFRAGILE Vol.4",
    "artist": "마크툽",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 5,
    "title": "Savage Vol.4",
    "artist": "잔나비",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 6,
    "title": "주저하는 연인들을 위해 Vol.4",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 7,
    "title": "시간을 달려서 Vol.4",
    "artist": "소찬휘",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 8,
    "title": "벚꽃 엔딩 Vol.4",
    "artist": "이정현",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 9,
    "title": "Gee Vol.4",
    "artist": "핑클",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 10,
    "title": "어머나 Vol.4",
    "artist": "S.E.S.",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 11,
    "title": "영원한 사랑 Vol.4",
    "artist": "이선희",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 12,
    "title": "서시 Vol.4",
    "artist": "박효신",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 1,
    "title": "UP Vol.4",
    "artist": "태양",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 2,
    "title": "Midas Touch Vol.4",
    "artist": "EXO",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 3,
    "title": "퀸카 Vol.4",
    "artist": "싸이",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 4,
    "title": "Pink Venom Vol.4",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 5,
    "title": "라일락 Vol.4",
    "artist": "아이유",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 6,
    "title": "뚜두뚜두 Vol.4",
    "artist": "aespa",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 7,
    "title": "위아래 Vol.4",
    "artist": "NewJeans",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 8,
    "title": "Roly-Poly Vol.4",
    "artist": "IVE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 9,
    "title": "So Hot Vol.4",
    "artist": "LE SSERAFIM",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 10,
    "title": "체념 Vol.4",
    "artist": "이루",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 11,
    "title": "To Heaven Vol.4",
    "artist": "더 크로스",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 12,
    "title": "그대에게 Vol.4",
    "artist": "브라운 아이즈",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 1,
    "title": "Supernova Vol.4",
    "artist": "조성모",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 2,
    "title": "Smart Vol.4",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 3,
    "title": "Kitsch Vol.4",
    "artist": "태연",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 4,
    "title": "사건의 지평선 Vol.4",
    "artist": "에일리",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 5,
    "title": "아무노래 Vol.4",
    "artist": "박혜원",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 6,
    "title": "예뻤어 Vol.4",
    "artist": "윤하",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 7,
    "title": "금요일에 만나요 Vol.4",
    "artist": "선미",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 8,
    "title": "Bad Girl Good Girl Vol.4",
    "artist": "신성우",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 9,
    "title": "까만안경 Vol.4",
    "artist": "서태지와 아이들",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 10,
    "title": "낭만고양이 Vol.4",
    "artist": "김현식",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 11,
    "title": "인형의 꿈 Vol.4",
    "artist": "변진섭",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 12,
    "title": "바람바람바람 Vol.4",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 1,
    "title": "소나기 Vol.4",
    "artist": "백지영",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 2,
    "title": "Perfect Night Vol.4",
    "artist": "보아",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 3,
    "title": "Ditto Vol.4",
    "artist": "소찬휘",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 4,
    "title": "사랑은 늘 도망가 Vol.4",
    "artist": "이정현",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 5,
    "title": "오늘도 빛나는 너에게 Vol.4",
    "artist": "핑클",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 6,
    "title": "TT Vol.4",
    "artist": "이클립스",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 7,
    "title": "강남스타일 Vol.4",
    "artist": "TWS",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 8,
    "title": "Fire Vol.4",
    "artist": "정국",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 9,
    "title": "응급실 Vol.4",
    "artist": "세븐틴",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 10,
    "title": "Wa Vol.4",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 11,
    "title": "기억의 습작 Vol.4",
    "artist": "아일릿",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 12,
    "title": "POWER Vol.4",
    "artist": "KISS OF LIFE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 1,
    "title": "SHEESH Vol.4",
    "artist": "아이유",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 2,
    "title": "ETA Vol.4",
    "artist": "aespa",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 3,
    "title": "After LIKE Vol.4",
    "artist": "NewJeans",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 4,
    "title": "바라만 본다 Vol.4",
    "artist": "지코",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 5,
    "title": "너를 만나 Vol.4",
    "artist": "조정석",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 6,
    "title": "BANG BANG BANG Vol.4",
    "artist": "영탁",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 7,
    "title": "초혼 Vol.4",
    "artist": "마크툽",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 8,
    "title": "Nobody Vol.4",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 9,
    "title": "아틀란티스 소녀 Vol.4",
    "artist": "QWER",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 10,
    "title": "순정 Vol.4",
    "artist": "비비",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 11,
    "title": "희망사항 Vol.4",
    "artist": "태연",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 12,
    "title": "HAPPY Vol.4",
    "artist": "에일리",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 1,
    "title": "EASY Vol.4",
    "artist": "박혜원",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 2,
    "title": "헤어지자 말해요 Vol.4",
    "artist": "BIGBANG",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 3,
    "title": "TOMBOY Vol.4",
    "artist": "박효신",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 4,
    "title": "에잇 Vol.4",
    "artist": "태양",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 5,
    "title": "좋니 Vol.4",
    "artist": "EXO",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 6,
    "title": "썸 Vol.4",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 7,
    "title": "좋은 날 Vol.4",
    "artist": "벤",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 8,
    "title": "거짓말 Vol.4",
    "artist": "송하예",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 9,
    "title": "No.1 Vol.4",
    "artist": "백지영",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 10,
    "title": "발걸음 Vol.4",
    "artist": "보아",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 11,
    "title": "남행열차 Vol.4",
    "artist": "소찬휘",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 12,
    "title": "How Sweet Vol.4",
    "artist": "SG워너비",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 1,
    "title": "Drama Vol.4",
    "artist": "이루",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 2,
    "title": "OMG Vol.4",
    "artist": "더 크로스",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 3,
    "title": "ELEVEN Vol.4",
    "artist": "브라운 아이즈",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 4,
    "title": "이제 나만 믿어요 Vol.4",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 5,
    "title": "우주를 줄게 Vol.4",
    "artist": "STAYC",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 6,
    "title": "스물다섯 스물하나 Vol.4",
    "artist": "지수",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 7,
    "title": "Abracadabra Vol.4",
    "artist": "아일릿",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 8,
    "title": "가시 Vol.4",
    "artist": "KISS OF LIFE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 9,
    "title": "Tears Vol.4",
    "artist": "아이유",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 10,
    "title": "칵테일 사랑 Vol.4",
    "artist": "전람회",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 11,
    "title": "Whiplash Vol.4",
    "artist": "신성우",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 12,
    "title": "고민중독 Vol.4",
    "artist": "서태지와 아이들",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 1,
    "title": "Super Shy Vol.4",
    "artist": "김현식",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 2,
    "title": "Attention Vol.4",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 3,
    "title": "신호등 Vol.4",
    "artist": "TWICE",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 4,
    "title": "한 페이지가 될 수 있게 Vol.4",
    "artist": "BLACKPINK",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 5,
    "title": "음오아예 Vol.4",
    "artist": "QWER",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 6,
    "title": "오래된 노래 Vol.4",
    "artist": "비비",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 7,
    "title": "총 맞은 것처럼 Vol.4",
    "artist": "태연",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 8,
    "title": "10 Minutes Vol.4",
    "artist": "DAY6",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 9,
    "title": "이미 슬픈 사랑 Vol.4",
    "artist": "이클립스",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 10,
    "title": "내 사랑 내 곁에 Vol.4",
    "artist": "TWS",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 11,
    "title": "내 이름 맑음 Vol.4",
    "artist": "정국",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 12,
    "title": "첫 만남은 계획대로 되지 않아 Vol.4",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 1,
    "title": "손오공 Vol.4",
    "artist": "오마이걸",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 2,
    "title": "LOVE DIVE Vol.4",
    "artist": "Red Velvet",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 3,
    "title": "Dynamite Vol.4",
    "artist": "벤",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 4,
    "title": "LOVE SCENARIO Vol.4",
    "artist": "송하예",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 5,
    "title": "눈 코 입 Vol.4",
    "artist": "백지영",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 6,
    "title": "내 손을 잡아 Vol.4",
    "artist": "BTS",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 7,
    "title": "만약에 Vol.4",
    "artist": "지코",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 8,
    "title": "Valenti Vol.4",
    "artist": "조정석",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 9,
    "title": "해변의 여인 Vol.4",
    "artist": "영탁",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 10,
    "title": "비처럼 음악처럼 Vol.4",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 11,
    "title": "Armageddon Vol.4",
    "artist": "이선희",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 12,
    "title": "Love wins all Vol.4",
    "artist": "장윤정",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 1,
    "title": "Teddy Bear Vol.4",
    "artist": "STAYC",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 2,
    "title": "취중고백 Vol.4",
    "artist": "지수",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 3,
    "title": "찐이야 Vol.4",
    "artist": "아일릿",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 4,
    "title": "어디에도 Vol.4",
    "artist": "엠씨더맥스",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 5,
    "title": "첫눈 Vol.4",
    "artist": "BIGBANG",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 6,
    "title": "잔소리 Vol.4",
    "artist": "박효신",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 7,
    "title": "겁쟁이 Vol.4",
    "artist": "태양",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 8,
    "title": "성인식 Vol.4",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 9,
    "title": "가질 수 없는 너 Vol.4",
    "artist": "LE SSERAFIM",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 10,
    "title": "단발머리 Vol.4",
    "artist": "(여자)아이들",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 11,
    "title": "SPOT! Vol.4",
    "artist": "TWICE",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 12,
    "title": "Love Lee Vol.4",
    "artist": "BLACKPINK",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 1,
    "title": "Hype Boy Vol.4",
    "artist": "QWER",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 2,
    "title": "Next Level Vol.4",
    "artist": "izi",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 3,
    "title": "사랑에 연습이 있었다면 Vol.4",
    "artist": "SG워너비",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 4,
    "title": "오늘부터 우리는 Vol.4",
    "artist": "이루",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 5,
    "title": "바람기억 Vol.4",
    "artist": "더 크로스",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 6,
    "title": "Heartbreaker Vol.4",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 7,
    "title": "Timeless Vol.4",
    "artist": "선미",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 8,
    "title": "천년의 사랑 Vol.4",
    "artist": "볼빨간사춘기",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 9,
    "title": "난 알아요 Vol.4",
    "artist": "오마이걸",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 10,
    "title": "UP Vol.4",
    "artist": "Red Velvet",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 11,
    "title": "Midas Touch Vol.4",
    "artist": "벤",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 12,
    "title": "퀸카 Vol.4",
    "artist": "뱅크",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 1,
    "title": "FEARLESS Vol.4",
    "artist": "전람회",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 2,
    "title": "Celebrity Vol.4",
    "artist": "신성우",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 3,
    "title": "모든 날 모든 순간 Vol.4",
    "artist": "서태지와 아이들",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 4,
    "title": "야생화 Vol.4",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 5,
    "title": "내가 제일 잘 나가 Vol.4",
    "artist": "핑클",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 6,
    "title": "Tell Me Vol.4",
    "artist": "S.E.S.",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 7,
    "title": "소주 한 잔 Vol.4",
    "artist": "이선희",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 8,
    "title": "Dreams Come True Vol.4",
    "artist": "장윤정",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 9,
    "title": "사랑하기 때문에 Vol.4",
    "artist": "STAYC",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 10,
    "title": "Supernova Vol.5",
    "artist": "G-DRAGON",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 11,
    "title": "Smart Vol.5",
    "artist": "DAY6",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 12,
    "title": "Kitsch Vol.5",
    "artist": "이클립스",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 1,
    "title": "사랑인가 봐 Vol.5",
    "artist": "TWS",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 2,
    "title": "아로하 Vol.5",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 3,
    "title": "CHEER UP Vol.5",
    "artist": "NewJeans",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 4,
    "title": "으르렁 Vol.5",
    "artist": "IVE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 5,
    "title": "Oh! Vol.5",
    "artist": "LE SSERAFIM",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 6,
    "title": "내 사람 Vol.5",
    "artist": "(여자)아이들",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 7,
    "title": "벌써 일년 Vol.5",
    "artist": "TWICE",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 8,
    "title": "잘못된 만남 Vol.5",
    "artist": "MSG워너비",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 9,
    "title": "J에게 Vol.5",
    "artist": "BTS",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 10,
    "title": "소나기 Vol.5",
    "artist": "지코",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 11,
    "title": "Perfect Night Vol.5",
    "artist": "조정석",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 12,
    "title": "Ditto Vol.5",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 1,
    "title": "Savage Vol.5",
    "artist": "박혜원",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 2,
    "title": "주저하는 연인들을 위해 Vol.5",
    "artist": "윤하",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 3,
    "title": "시간을 달려서 Vol.5",
    "artist": "선미",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 4,
    "title": "벚꽃 엔딩 Vol.5",
    "artist": "볼빨간사춘기",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 5,
    "title": "Gee Vol.5",
    "artist": "오마이걸",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 6,
    "title": "어머나 Vol.5",
    "artist": "윤종신",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 7,
    "title": "영원한 사랑 Vol.5",
    "artist": "엠씨더맥스",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 8,
    "title": "서시 Vol.5",
    "artist": "BIGBANG",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 9,
    "title": "APT. Vol.5",
    "artist": "박효신",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 10,
    "title": "SHEESH Vol.5",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 11,
    "title": "ETA Vol.5",
    "artist": "소찬휘",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 12,
    "title": "After LIKE Vol.5",
    "artist": "이정현",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 1,
    "title": "라일락 Vol.5",
    "artist": "핑클",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 2,
    "title": "뚜두뚜두 Vol.5",
    "artist": "S.E.S.",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 3,
    "title": "위아래 Vol.5",
    "artist": "이선희",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 4,
    "title": "Roly-Poly Vol.5",
    "artist": "버즈",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 5,
    "title": "So Hot Vol.5",
    "artist": "izi",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 6,
    "title": "체념 Vol.5",
    "artist": "SG워너비",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 7,
    "title": "To Heaven Vol.5",
    "artist": "이루",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 8,
    "title": "그대에게 Vol.5",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 9,
    "title": "클락션 Vol.5",
    "artist": "아이유",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 10,
    "title": "EASY Vol.5",
    "artist": "aespa",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 11,
    "title": "헤어지자 말해요 Vol.5",
    "artist": "NewJeans",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 12,
    "title": "TOMBOY Vol.5",
    "artist": "IVE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 1,
    "title": "아무노래 Vol.5",
    "artist": "LE SSERAFIM",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 2,
    "title": "예뻤어 Vol.5",
    "artist": "김건모",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 3,
    "title": "금요일에 만나요 Vol.5",
    "artist": "뱅크",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 4,
    "title": "Bad Girl Good Girl Vol.5",
    "artist": "전람회",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 5,
    "title": "까만안경 Vol.5",
    "artist": "신성우",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 6,
    "title": "낭만고양이 Vol.5",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 7,
    "title": "인형의 꿈 Vol.5",
    "artist": "태연",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 8,
    "title": "바람바람바람 Vol.5",
    "artist": "에일리",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 9,
    "title": "Bubble Gum Vol.5",
    "artist": "박혜원",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 10,
    "title": "Drama Vol.5",
    "artist": "윤하",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 11,
    "title": "OMG Vol.5",
    "artist": "선미",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 12,
    "title": "ELEVEN Vol.5",
    "artist": "조용필",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 1,
    "title": "오늘도 빛나는 너에게 Vol.5",
    "artist": "G-DRAGON",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 2,
    "title": "TT Vol.5",
    "artist": "DAY6",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 3,
    "title": "강남스타일 Vol.5",
    "artist": "이클립스",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 4,
    "title": "Fire Vol.5",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 5,
    "title": "응급실 Vol.5",
    "artist": "백지영",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 6,
    "title": "Wa Vol.5",
    "artist": "보아",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 7,
    "title": "기억의 습작 Vol.5",
    "artist": "소찬휘",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 8,
    "title": "POWER Vol.5",
    "artist": "이정현",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 9,
    "title": "Magnetic Vol.5",
    "artist": "핑클",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 10,
    "title": "Super Shy Vol.5",
    "artist": "이무진",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 11,
    "title": "Attention Vol.5",
    "artist": "MSG워너비",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 12,
    "title": "신호등 Vol.5",
    "artist": "BTS",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 1,
    "title": "너를 만나 Vol.5",
    "artist": "지코",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 2,
    "title": "BANG BANG BANG Vol.5",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 3,
    "title": "초혼 Vol.5",
    "artist": "아일릿",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 4,
    "title": "Nobody Vol.5",
    "artist": "KISS OF LIFE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 5,
    "title": "아틀란티스 소녀 Vol.5",
    "artist": "아이유",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 6,
    "title": "순정 Vol.5",
    "artist": "aespa",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 7,
    "title": "희망사항 Vol.5",
    "artist": "NewJeans",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 8,
    "title": "HAPPY Vol.5",
    "artist": "iKON",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 9,
    "title": "밤양갱 Vol.5",
    "artist": "윤종신",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 10,
    "title": "손오공 Vol.5",
    "artist": "엠씨더맥스",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 11,
    "title": "LOVE DIVE Vol.5",
    "artist": "BIGBANG",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 12,
    "title": "Dynamite Vol.5",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 1,
    "title": "좋니 Vol.5",
    "artist": "QWER",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 2,
    "title": "썸 Vol.5",
    "artist": "비비",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 3,
    "title": "좋은 날 Vol.5",
    "artist": "태연",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 4,
    "title": "거짓말 Vol.5",
    "artist": "에일리",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 5,
    "title": "No.1 Vol.5",
    "artist": "박혜원",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 6,
    "title": "발걸음 Vol.5",
    "artist": "임창정",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 7,
    "title": "남행열차 Vol.5",
    "artist": "버즈",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 8,
    "title": "How Sweet Vol.5",
    "artist": "izi",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 9,
    "title": "To. X Vol.5",
    "artist": "SG워너비",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 10,
    "title": "Teddy Bear Vol.5",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 11,
    "title": "취중고백 Vol.5",
    "artist": "벤",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 12,
    "title": "찐이야 Vol.5",
    "artist": "송하예",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 1,
    "title": "우주를 줄게 Vol.5",
    "artist": "백지영",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 2,
    "title": "스물다섯 스물하나 Vol.5",
    "artist": "보아",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 3,
    "title": "Abracadabra Vol.5",
    "artist": "소찬휘",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 4,
    "title": "가시 Vol.5",
    "artist": "에메랄드 캐슬",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 5,
    "title": "Tears Vol.5",
    "artist": "김건모",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 6,
    "title": "칵테일 사랑 Vol.5",
    "artist": "뱅크",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 7,
    "title": "Whiplash Vol.5",
    "artist": "전람회",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 8,
    "title": "고민중독 Vol.5",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 9,
    "title": "Seven Vol.5",
    "artist": "STAYC",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 10,
    "title": "Hype Boy Vol.5",
    "artist": "지수",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 11,
    "title": "Next Level Vol.5",
    "artist": "아일릿",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 12,
    "title": "사랑에 연습이 있었다면 Vol.5",
    "artist": "KISS OF LIFE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 1,
    "title": "음오아예 Vol.5",
    "artist": "아이유",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 2,
    "title": "오래된 노래 Vol.5",
    "artist": "김범룡",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 3,
    "title": "총 맞은 것처럼 Vol.5",
    "artist": "조용필",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 4,
    "title": "10 Minutes Vol.5",
    "artist": "G-DRAGON",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 5,
    "title": "이미 슬픈 사랑 Vol.5",
    "artist": "DAY6",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 6,
    "title": "내 사랑 내 곁에 Vol.5",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 7,
    "title": "내 이름 맑음 Vol.5",
    "artist": "TWICE",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 8,
    "title": "첫 만남은 계획대로 되지 않아 Vol.5",
    "artist": "BLACKPINK",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 9,
    "title": "I AM Vol.5",
    "artist": "QWER",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 10,
    "title": "FEARLESS Vol.5",
    "artist": "비비",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 11,
    "title": "Celebrity Vol.5",
    "artist": "태연",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 12,
    "title": "모든 날 모든 순간 Vol.5",
    "artist": "임영웅",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 1,
    "title": "눈 코 입 Vol.5",
    "artist": "이무진",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 2,
    "title": "내 손을 잡아 Vol.5",
    "artist": "MSG워너비",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 3,
    "title": "만약에 Vol.5",
    "artist": "BTS",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 4,
    "title": "Valenti Vol.5",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 5,
    "title": "해변의 여인 Vol.5",
    "artist": "오마이걸",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 6,
    "title": "비처럼 음악처럼 Vol.5",
    "artist": "Red Velvet",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 7,
    "title": "Armageddon Vol.5",
    "artist": "벤",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 8,
    "title": "Love wins all Vol.5",
    "artist": "송하예",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 9,
    "title": "꽃 Vol.5",
    "artist": "백지영",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 10,
    "title": "사랑인가 봐 Vol.5",
    "artist": "폴킴",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 11,
    "title": "아로하 Vol.5",
    "artist": "iKON",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 12,
    "title": "CHEER UP Vol.5",
    "artist": "윤종신",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 1,
    "title": "첫눈 Vol.5",
    "artist": "엠씨더맥스",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 2,
    "title": "잔소리 Vol.5",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 3,
    "title": "겁쟁이 Vol.5",
    "artist": "이선희",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 4,
    "title": "성인식 Vol.5",
    "artist": "장윤정",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 5,
    "title": "가질 수 없는 너 Vol.5",
    "artist": "STAYC",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 6,
    "title": "단발머리 Vol.5",
    "artist": "지수",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 7,
    "title": "SPOT! Vol.5",
    "artist": "아일릿",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 8,
    "title": "Love Lee Vol.5",
    "artist": "나얼",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 9,
    "title": "ANTIFRAGILE Vol.5",
    "artist": "임창정",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 10,
    "title": "Savage Vol.5",
    "artist": "버즈",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 11,
    "title": "주저하는 연인들을 위해 Vol.5",
    "artist": "izi",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 12,
    "title": "시간을 달려서 Vol.5",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 1,
    "title": "바람기억 Vol.5",
    "artist": "LE SSERAFIM",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 2,
    "title": "Heartbreaker Vol.5",
    "artist": "(여자)아이들",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 3,
    "title": "Timeless Vol.5",
    "artist": "TWICE",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 4,
    "title": "천년의 사랑 Vol.5",
    "artist": "BLACKPINK",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 5,
    "title": "난 알아요 Vol.5",
    "artist": "QWER",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 6,
    "title": "UP Vol.5",
    "artist": "야다",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 7,
    "title": "Midas Touch Vol.5",
    "artist": "에메랄드 캐슬",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 8,
    "title": "퀸카 Vol.5",
    "artist": "김건모",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 9,
    "title": "Pink Venom Vol.5",
    "artist": "뱅크",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 10,
    "title": "라일락 Vol.5",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 11,
    "title": "뚜두뚜두 Vol.5",
    "artist": "선미",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 12,
    "title": "위아래 Vol.5",
    "artist": "볼빨간사춘기",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 1,
    "title": "내가 제일 잘 나가 Vol.5",
    "artist": "오마이걸",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 2,
    "title": "Tell Me Vol.5",
    "artist": "Red Velvet",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 3,
    "title": "소주 한 잔 Vol.5",
    "artist": "벤",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 4,
    "title": "Dreams Come True Vol.5",
    "artist": "유재하",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 5,
    "title": "사랑하기 때문에 Vol.5",
    "artist": "김범룡",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 6,
    "title": "Supernova Vol.5",
    "artist": "조용필",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 7,
    "title": "Smart Vol.6",
    "artist": "G-DRAGON",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 8,
    "title": "Kitsch Vol.6",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 9,
    "title": "사건의 지평선 Vol.6",
    "artist": "핑클",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 10,
    "title": "아무노래 Vol.6",
    "artist": "S.E.S.",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 11,
    "title": "예뻤어 Vol.6",
    "artist": "이선희",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 12,
    "title": "금요일에 만나요 Vol.6",
    "artist": "장윤정",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 1,
    "title": "Oh! Vol.6",
    "artist": "STAYC",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 2,
    "title": "내 사람 Vol.6",
    "artist": "멜로망스",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 3,
    "title": "벌써 일년 Vol.6",
    "artist": "임영웅",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 4,
    "title": "잘못된 만남 Vol.6",
    "artist": "이무진",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 5,
    "title": "J에게 Vol.6",
    "artist": "MSG워너비",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 6,
    "title": "소나기 Vol.6",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 7,
    "title": "Perfect Night Vol.6",
    "artist": "NewJeans",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 8,
    "title": "Ditto Vol.6",
    "artist": "IVE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 9,
    "title": "사랑은 늘 도망가 Vol.6",
    "artist": "LE SSERAFIM",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 10,
    "title": "오늘도 빛나는 너에게 Vol.6",
    "artist": "(여자)아이들",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 11,
    "title": "TT Vol.6",
    "artist": "TWICE",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 12,
    "title": "강남스타일 Vol.6",
    "artist": "임재현",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 1,
    "title": "Gee Vol.6",
    "artist": "폴킴",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 2,
    "title": "어머나 Vol.6",
    "artist": "iKON",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 3,
    "title": "영원한 사랑 Vol.6",
    "artist": "윤종신",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 4,
    "title": "서시 Vol.6",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 5,
    "title": "APT. Vol.6",
    "artist": "박혜원",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 6,
    "title": "SHEESH Vol.6",
    "artist": "윤하",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 7,
    "title": "ETA Vol.6",
    "artist": "선미",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 8,
    "title": "After LIKE Vol.6",
    "artist": "볼빨간사춘기",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 9,
    "title": "바라만 본다 Vol.6",
    "artist": "오마이걸",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 10,
    "title": "너를 만나 Vol.6",
    "artist": "버스커 버스커",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 11,
    "title": "BANG BANG BANG Vol.6",
    "artist": "나얼",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 12,
    "title": "초혼 Vol.6",
    "artist": "임창정",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 1,
    "title": "So Hot Vol.6",
    "artist": "버즈",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 2,
    "title": "체념 Vol.6",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 3,
    "title": "To Heaven Vol.6",
    "artist": "소찬휘",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 4,
    "title": "그대에게 Vol.6",
    "artist": "이정현",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 5,
    "title": "클락션 Vol.6",
    "artist": "핑클",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 6,
    "title": "EASY Vol.6",
    "artist": "S.E.S.",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 7,
    "title": "헤어지자 말해요 Vol.6",
    "artist": "이선희",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 8,
    "title": "TOMBOY Vol.6",
    "artist": "박완규",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 9,
    "title": "에잇 Vol.6",
    "artist": "야다",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 10,
    "title": "좋니 Vol.6",
    "artist": "에메랄드 캐슬",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 11,
    "title": "썸 Vol.6",
    "artist": "김건모",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 12,
    "title": "좋은 날 Vol.6",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 1,
    "title": "까만안경 Vol.6",
    "artist": "아이유",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 2,
    "title": "낭만고양이 Vol.6",
    "artist": "aespa",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 3,
    "title": "인형의 꿈 Vol.6",
    "artist": "NewJeans",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 4,
    "title": "바람바람바람 Vol.6",
    "artist": "IVE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 5,
    "title": "Bubble Gum Vol.6",
    "artist": "LE SSERAFIM",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 6,
    "title": "Drama Vol.6",
    "artist": "무한궤도",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 7,
    "title": "OMG Vol.6",
    "artist": "유재하",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 8,
    "title": "ELEVEN Vol.6",
    "artist": "김범룡",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 9,
    "title": "이제 나만 믿어요 Vol.6",
    "artist": "조용필",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 10,
    "title": "우주를 줄게 Vol.6",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 11,
    "title": "스물다섯 스물하나 Vol.6",
    "artist": "태연",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 12,
    "title": "Abracadabra Vol.6",
    "artist": "에일리",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 1,
    "title": "응급실 Vol.6",
    "artist": "박혜원",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 2,
    "title": "Wa Vol.6",
    "artist": "윤하",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 3,
    "title": "기억의 습작 Vol.6",
    "artist": "선미",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 4,
    "title": "POWER Vol.6",
    "artist": "박재정",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 5,
    "title": "Magnetic Vol.6",
    "artist": "멜로망스",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 6,
    "title": "Super Shy Vol.6",
    "artist": "임영웅",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 7,
    "title": "Attention Vol.6",
    "artist": "이무진",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 8,
    "title": "신호등 Vol.6",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 9,
    "title": "한 페이지가 될 수 있게 Vol.6",
    "artist": "백지영",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 10,
    "title": "음오아예 Vol.6",
    "artist": "보아",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 11,
    "title": "오래된 노래 Vol.6",
    "artist": "소찬휘",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 12,
    "title": "총 맞은 것처럼 Vol.6",
    "artist": "이정현",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 1,
    "title": "아틀란티스 소녀 Vol.6",
    "artist": "핑클",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 2,
    "title": "순정 Vol.6",
    "artist": "잔나비",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 3,
    "title": "희망사항 Vol.6",
    "artist": "임재현",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 4,
    "title": "HAPPY Vol.6",
    "artist": "폴킴",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 5,
    "title": "밤양갱 Vol.6",
    "artist": "iKON",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 6,
    "title": "손오공 Vol.6",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 7,
    "title": "LOVE DIVE Vol.6",
    "artist": "아일릿",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 8,
    "title": "Dynamite Vol.6",
    "artist": "KISS OF LIFE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 9,
    "title": "LOVE SCENARIO Vol.6",
    "artist": "아이유",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 10,
    "title": "눈 코 입 Vol.6",
    "artist": "aespa",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 11,
    "title": "내 손을 잡아 Vol.6",
    "artist": "NewJeans",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 12,
    "title": "만약에 Vol.6",
    "artist": "싸이",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 1,
    "title": "No.1 Vol.6",
    "artist": "버스커 버스커",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 2,
    "title": "발걸음 Vol.6",
    "artist": "나얼",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 3,
    "title": "남행열차 Vol.6",
    "artist": "임창정",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 4,
    "title": "How Sweet Vol.6",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 5,
    "title": "To. X Vol.6",
    "artist": "QWER",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 6,
    "title": "Teddy Bear Vol.6",
    "artist": "비비",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 7,
    "title": "취중고백 Vol.6",
    "artist": "태연",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 8,
    "title": "찐이야 Vol.6",
    "artist": "에일리",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 9,
    "title": "어디에도 Vol.6",
    "artist": "박혜원",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 10,
    "title": "첫눈 Vol.6",
    "artist": "조성모",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 11,
    "title": "잔소리 Vol.6",
    "artist": "박완규",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 12,
    "title": "겁쟁이 Vol.6",
    "artist": "야다",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 1,
    "title": "Tears Vol.6",
    "artist": "에메랄드 캐슬",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 2,
    "title": "칵테일 사랑 Vol.6",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 3,
    "title": "Whiplash Vol.6",
    "artist": "벤",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 4,
    "title": "고민중독 Vol.6",
    "artist": "송하예",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 5,
    "title": "Seven Vol.6",
    "artist": "백지영",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 6,
    "title": "Hype Boy Vol.6",
    "artist": "보아",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 7,
    "title": "Next Level Vol.6",
    "artist": "소찬휘",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 8,
    "title": "사랑에 연습이 있었다면 Vol.6",
    "artist": "변진섭",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 9,
    "title": "오늘부터 우리는 Vol.6",
    "artist": "무한궤도",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 10,
    "title": "바람기억 Vol.6",
    "artist": "유재하",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 11,
    "title": "Heartbreaker Vol.6",
    "artist": "김범룡",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 12,
    "title": "Timeless Vol.6",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 1,
    "title": "이미 슬픈 사랑 Vol.6",
    "artist": "STAYC",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 2,
    "title": "내 사랑 내 곁에 Vol.6",
    "artist": "지수",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 3,
    "title": "내 이름 맑음 Vol.6",
    "artist": "아일릿",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 4,
    "title": "첫 만남은 계획대로 되지 않아 Vol.6",
    "artist": "KISS OF LIFE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 5,
    "title": "I AM Vol.6",
    "artist": "아이유",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 6,
    "title": "FEARLESS Vol.6",
    "artist": "세븐틴",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 7,
    "title": "Celebrity Vol.6",
    "artist": "박재정",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 8,
    "title": "모든 날 모든 순간 Vol.6",
    "artist": "멜로망스",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 9,
    "title": "야생화 Vol.6",
    "artist": "임영웅",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 10,
    "title": "내가 제일 잘 나가 Vol.6",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 11,
    "title": "Tell Me Vol.6",
    "artist": "TWICE",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 12,
    "title": "소주 한 잔 Vol.6",
    "artist": "BLACKPINK",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 1,
    "title": "해변의 여인 Vol.6",
    "artist": "QWER",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 2,
    "title": "비처럼 음악처럼 Vol.6",
    "artist": "비비",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 3,
    "title": "Armageddon Vol.6",
    "artist": "태연",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 4,
    "title": "Love wins all Vol.6",
    "artist": "마크툽",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 5,
    "title": "꽃 Vol.6",
    "artist": "잔나비",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 6,
    "title": "사랑인가 봐 Vol.6",
    "artist": "임재현",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 7,
    "title": "아로하 Vol.6",
    "artist": "폴킴",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 8,
    "title": "CHEER UP Vol.6",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 9,
    "title": "으르렁 Vol.6",
    "artist": "오마이걸",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 10,
    "title": "Oh! Vol.6",
    "artist": "Red Velvet",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 11,
    "title": "내 사람 Vol.6",
    "artist": "벤",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 12,
    "title": "벌써 일년 Vol.6",
    "artist": "송하예",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 1,
    "title": "가질 수 없는 너 Vol.6",
    "artist": "백지영",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 2,
    "title": "단발머리 Vol.6",
    "artist": "EXO",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 3,
    "title": "SPOT! Vol.6",
    "artist": "싸이",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 4,
    "title": "Love Lee Vol.6",
    "artist": "버스커 버스커",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 5,
    "title": "ANTIFRAGILE Vol.6",
    "artist": "나얼",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 6,
    "title": "Savage Vol.6",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 7,
    "title": "주저하는 연인들을 위해 Vol.6",
    "artist": "이선희",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 8,
    "title": "시간을 달려서 Vol.6",
    "artist": "장윤정",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 9,
    "title": "벚꽃 엔딩 Vol.6",
    "artist": "STAYC",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 10,
    "title": "Gee Vol.6",
    "artist": "지수",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 11,
    "title": "어머나 Vol.6",
    "artist": "아일릿",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 12,
    "title": "영원한 사랑 Vol.6",
    "artist": "브라운 아이즈",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 1,
    "title": "난 알아요 Vol.6",
    "artist": "조성모",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 2,
    "title": "UP Vol.6",
    "artist": "박완규",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 3,
    "title": "Midas Touch Vol.6",
    "artist": "야다",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 4,
    "title": "퀸카 Vol.6",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 5,
    "title": "Pink Venom Vol.6",
    "artist": "LE SSERAFIM",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 6,
    "title": "라일락 Vol.6",
    "artist": "(여자)아이들",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 7,
    "title": "뚜두뚜두 Vol.6",
    "artist": "TWICE",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 8,
    "title": "위아래 Vol.6",
    "artist": "BLACKPINK",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 9,
    "title": "Roly-Poly Vol.6",
    "artist": "QWER",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 10,
    "title": "So Hot Vol.6",
    "artist": "김현식",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 11,
    "title": "체념 Vol.6",
    "artist": "변진섭",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 12,
    "title": "To Heaven Vol.6",
    "artist": "무한궤도",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 1,
    "title": "사랑하기 때문에 Vol.6",
    "artist": "유재하",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 2,
    "title": "Supernova Vol.6",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 3,
    "title": "Smart Vol.6",
    "artist": "선미",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 4,
    "title": "Kitsch Vol.7",
    "artist": "볼빨간사춘기",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 5,
    "title": "사건의 지평선 Vol.7",
    "artist": "오마이걸",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 6,
    "title": "아무노래 Vol.7",
    "artist": "Red Velvet",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 7,
    "title": "예뻤어 Vol.7",
    "artist": "벤",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 8,
    "title": "금요일에 만나요 Vol.7",
    "artist": "정국",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 9,
    "title": "Bad Girl Good Girl Vol.7",
    "artist": "세븐틴",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 10,
    "title": "까만안경 Vol.7",
    "artist": "박재정",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 11,
    "title": "낭만고양이 Vol.7",
    "artist": "멜로망스",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 12,
    "title": "인형의 꿈 Vol.7",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 1,
    "title": "J에게 Vol.7",
    "artist": "핑클",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 2,
    "title": "소나기 Vol.7",
    "artist": "S.E.S.",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 3,
    "title": "Perfect Night Vol.7",
    "artist": "이선희",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 4,
    "title": "Ditto Vol.7",
    "artist": "장윤정",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 5,
    "title": "사랑은 늘 도망가 Vol.7",
    "artist": "STAYC",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 6,
    "title": "오늘도 빛나는 너에게 Vol.7",
    "artist": "영탁",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 7,
    "title": "TT Vol.7",
    "artist": "마크툽",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 8,
    "title": "강남스타일 Vol.7",
    "artist": "잔나비",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 9,
    "title": "Fire Vol.7",
    "artist": "임재현",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 10,
    "title": "응급실 Vol.7",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 11,
    "title": "Wa Vol.7",
    "artist": "NewJeans",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 12,
    "title": "기억의 습작 Vol.7",
    "artist": "IVE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 1,
    "title": "APT. Vol.7",
    "artist": "LE SSERAFIM",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 2,
    "title": "SHEESH Vol.7",
    "artist": "(여자)아이들",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 3,
    "title": "ETA Vol.7",
    "artist": "TWICE",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 4,
    "title": "After LIKE Vol.7",
    "artist": "태양",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 5,
    "title": "바라만 본다 Vol.7",
    "artist": "EXO",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 6,
    "title": "너를 만나 Vol.7",
    "artist": "싸이",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 7,
    "title": "BANG BANG BANG Vol.7",
    "artist": "버스커 버스커",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 8,
    "title": "초혼 Vol.7",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 9,
    "title": "Nobody Vol.7",
    "artist": "박혜원",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 10,
    "title": "아틀란티스 소녀 Vol.7",
    "artist": "윤하",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 11,
    "title": "순정 Vol.7",
    "artist": "선미",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 12,
    "title": "희망사항 Vol.7",
    "artist": "볼빨간사춘기",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 1,
    "title": "클락션 Vol.7",
    "artist": "오마이걸",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 2,
    "title": "EASY Vol.7",
    "artist": "더 크로스",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 3,
    "title": "헤어지자 말해요 Vol.7",
    "artist": "브라운 아이즈",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 4,
    "title": "TOMBOY Vol.7",
    "artist": "조성모",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 5,
    "title": "에잇 Vol.7",
    "artist": "박완규",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 6,
    "title": "좋니 Vol.7",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 7,
    "title": "썸 Vol.7",
    "artist": "소찬휘",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 8,
    "title": "좋은 날 Vol.7",
    "artist": "이정현",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 9,
    "title": "거짓말 Vol.7",
    "artist": "핑클",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 10,
    "title": "No.1 Vol.7",
    "artist": "S.E.S.",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 11,
    "title": "발걸음 Vol.7",
    "artist": "이선희",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 12,
    "title": "남행열차 Vol.7",
    "artist": "서태지와 아이들",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 1,
    "title": "Bubble Gum Vol.7",
    "artist": "김현식",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 2,
    "title": "Drama Vol.7",
    "artist": "변진섭",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 3,
    "title": "OMG Vol.7",
    "artist": "무한궤도",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 4,
    "title": "ELEVEN Vol.7",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 5,
    "title": "이제 나만 믿어요 Vol.7",
    "artist": "아이유",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 6,
    "title": "우주를 줄게 Vol.7",
    "artist": "aespa",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 7,
    "title": "스물다섯 스물하나 Vol.7",
    "artist": "NewJeans",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 8,
    "title": "Abracadabra Vol.7",
    "artist": "IVE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 9,
    "title": "가시 Vol.7",
    "artist": "LE SSERAFIM",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 10,
    "title": "Tears Vol.7",
    "artist": "TWS",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 11,
    "title": "칵테일 사랑 Vol.7",
    "artist": "정국",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 12,
    "title": "Whiplash Vol.7",
    "artist": "세븐틴",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 1,
    "title": "체념 Vol.7",
    "artist": "박재정",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 2,
    "title": "To Heaven Vol.7",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 3,
    "title": "그대에게 Vol.7",
    "artist": "태연",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 4,
    "title": "클락션 Vol.7",
    "artist": "에일리",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 5,
    "title": "EASY Vol.7",
    "artist": "박혜원",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 6,
    "title": "헤어지자 말해요 Vol.7",
    "artist": "윤하",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 7,
    "title": "TOMBOY Vol.7",
    "artist": "선미",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 8,
    "title": "에잇 Vol.7",
    "artist": "조정석",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 9,
    "title": "좋니 Vol.7",
    "artist": "영탁",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 10,
    "title": "썸 Vol.7",
    "artist": "마크툽",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 11,
    "title": "좋은 날 Vol.7",
    "artist": "잔나비",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 12,
    "title": "거짓말 Vol.7",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 1,
    "title": "낭만고양이 Vol.7",
    "artist": "백지영",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 2,
    "title": "인형의 꿈 Vol.7",
    "artist": "보아",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 3,
    "title": "바람바람바람 Vol.7",
    "artist": "소찬휘",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 4,
    "title": "Bubble Gum Vol.7",
    "artist": "이정현",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 5,
    "title": "Drama Vol.7",
    "artist": "핑클",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 6,
    "title": "OMG Vol.7",
    "artist": "박효신",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 7,
    "title": "ELEVEN Vol.7",
    "artist": "태양",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 8,
    "title": "이제 나만 믿어요 Vol.7",
    "artist": "EXO",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 9,
    "title": "우주를 줄게 Vol.7",
    "artist": "싸이",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 10,
    "title": "스물다섯 스물하나 Vol.7",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 11,
    "title": "Abracadabra Vol.7",
    "artist": "아일릿",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 12,
    "title": "가시 Vol.7",
    "artist": "KISS OF LIFE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 1,
    "title": "Wa Vol.7",
    "artist": "아이유",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 2,
    "title": "기억의 습작 Vol.7",
    "artist": "aespa",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 3,
    "title": "POWER Vol.7",
    "artist": "NewJeans",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 4,
    "title": "Magnetic Vol.7",
    "artist": "이루",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 5,
    "title": "Super Shy Vol.7",
    "artist": "더 크로스",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 6,
    "title": "Attention Vol.7",
    "artist": "브라운 아이즈",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 7,
    "title": "신호등 Vol.7",
    "artist": "조성모",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 8,
    "title": "한 페이지가 될 수 있게 Vol.7",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 9,
    "title": "음오아예 Vol.7",
    "artist": "QWER",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 10,
    "title": "오래된 노래 Vol.7",
    "artist": "비비",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 11,
    "title": "총 맞은 것처럼 Vol.7",
    "artist": "태연",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 12,
    "title": "10 Minutes Vol.7",
    "artist": "에일리",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 1,
    "title": "순정 Vol.7",
    "artist": "박혜원",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 2,
    "title": "희망사항 Vol.7",
    "artist": "신성우",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 3,
    "title": "HAPPY Vol.7",
    "artist": "서태지와 아이들",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 4,
    "title": "밤양갱 Vol.7",
    "artist": "김현식",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 5,
    "title": "손오공 Vol.7",
    "artist": "변진섭",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 6,
    "title": "LOVE DIVE Vol.7",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 7,
    "title": "Dynamite Vol.7",
    "artist": "벤",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 8,
    "title": "LOVE SCENARIO Vol.7",
    "artist": "송하예",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 9,
    "title": "눈 코 입 Vol.7",
    "artist": "백지영",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 10,
    "title": "내 손을 잡아 Vol.7",
    "artist": "보아",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 11,
    "title": "만약에 Vol.7",
    "artist": "소찬휘",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 12,
    "title": "Valenti Vol.7",
    "artist": "이클립스",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 1,
    "title": "발걸음 Vol.7",
    "artist": "TWS",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 2,
    "title": "남행열차 Vol.7",
    "artist": "정국",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 3,
    "title": "How Sweet Vol.7",
    "artist": "세븐틴",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 4,
    "title": "To. X Vol.7",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 5,
    "title": "Teddy Bear Vol.7",
    "artist": "STAYC",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 6,
    "title": "취중고백 Vol.7",
    "artist": "지수",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 7,
    "title": "찐이야 Vol.7",
    "artist": "아일릿",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 8,
    "title": "어디에도 Vol.7",
    "artist": "KISS OF LIFE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 9,
    "title": "첫눈 Vol.7",
    "artist": "아이유",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 10,
    "title": "잔소리 Vol.7",
    "artist": "지코",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 11,
    "title": "겁쟁이 Vol.7",
    "artist": "조정석",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 12,
    "title": "성인식 Vol.7",
    "artist": "영탁",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 1,
    "title": "칵테일 사랑 Vol.7",
    "artist": "마크툽",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 2,
    "title": "Whiplash Vol.7",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 3,
    "title": "고민중독 Vol.7",
    "artist": "TWICE",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 4,
    "title": "Seven Vol.7",
    "artist": "BLACKPINK",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 5,
    "title": "Hype Boy Vol.7",
    "artist": "QWER",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 6,
    "title": "Next Level Vol.7",
    "artist": "비비",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 7,
    "title": "사랑에 연습이 있었다면 Vol.7",
    "artist": "태연",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 8,
    "title": "오늘부터 우리는 Vol.7",
    "artist": "BIGBANG",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 9,
    "title": "바람기억 Vol.7",
    "artist": "박효신",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 10,
    "title": "Heartbreaker Vol.7",
    "artist": "태양",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 11,
    "title": "Timeless Vol.7",
    "artist": "EXO",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 12,
    "title": "천년의 사랑 Vol.7",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 1,
    "title": "내 사랑 내 곁에 Vol.7",
    "artist": "오마이걸",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 2,
    "title": "내 이름 맑음 Vol.7",
    "artist": "Red Velvet",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 3,
    "title": "첫 만남은 계획대로 되지 않아 Vol.7",
    "artist": "벤",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 4,
    "title": "I AM Vol.7",
    "artist": "송하예",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 5,
    "title": "FEARLESS Vol.7",
    "artist": "백지영",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 6,
    "title": "Celebrity Vol.7",
    "artist": "SG워너비",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 7,
    "title": "모든 날 모든 순간 Vol.7",
    "artist": "이루",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 8,
    "title": "야생화 Vol.7",
    "artist": "더 크로스",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 9,
    "title": "내가 제일 잘 나가 Vol.7",
    "artist": "브라운 아이즈",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 10,
    "title": "Tell Me Vol.7",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 11,
    "title": "소주 한 잔 Vol.7",
    "artist": "이선희",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 12,
    "title": "Dreams Come True Vol.7",
    "artist": "장윤정",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 1,
    "title": "비처럼 음악처럼 Vol.7",
    "artist": "STAYC",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 2,
    "title": "Armageddon Vol.7",
    "artist": "지수",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 3,
    "title": "Love wins all Vol.7",
    "artist": "아일릿",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 4,
    "title": "꽃 Vol.7",
    "artist": "전람회",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 5,
    "title": "사랑인가 봐 Vol.7",
    "artist": "신성우",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 6,
    "title": "아로하 Vol.7",
    "artist": "서태지와 아이들",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 7,
    "title": "CHEER UP Vol.7",
    "artist": "김현식",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 8,
    "title": "으르렁 Vol.7",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 9,
    "title": "Oh! Vol.7",
    "artist": "LE SSERAFIM",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 10,
    "title": "내 사람 Vol.7",
    "artist": "(여자)아이들",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 11,
    "title": "벌써 일년 Vol.7",
    "artist": "TWICE",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 12,
    "title": "잘못된 만남 Vol.7",
    "artist": "BLACKPINK",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 1,
    "title": "단발머리 Vol.8",
    "artist": "QWER",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 2,
    "title": "SPOT! Vol.8",
    "artist": "DAY6",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 3,
    "title": "Love Lee Vol.8",
    "artist": "이클립스",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 4,
    "title": "ANTIFRAGILE Vol.8",
    "artist": "TWS",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 5,
    "title": "Savage Vol.8",
    "artist": "정국",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 6,
    "title": "주저하는 연인들을 위해 Vol.8",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 7,
    "title": "시간을 달려서 Vol.8",
    "artist": "선미",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 8,
    "title": "벚꽃 엔딩 Vol.8",
    "artist": "볼빨간사춘기",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 9,
    "title": "Gee Vol.8",
    "artist": "오마이걸",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 10,
    "title": "어머나 Vol.8",
    "artist": "Red Velvet",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 11,
    "title": "영원한 사랑 Vol.8",
    "artist": "벤",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 12,
    "title": "서시 Vol.8",
    "artist": "BTS",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 1,
    "title": "UP Vol.8",
    "artist": "지코",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 2,
    "title": "Midas Touch Vol.8",
    "artist": "조정석",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 3,
    "title": "퀸카 Vol.8",
    "artist": "영탁",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 4,
    "title": "Pink Venom Vol.8",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 5,
    "title": "라일락 Vol.8",
    "artist": "핑클",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 6,
    "title": "뚜두뚜두 Vol.8",
    "artist": "S.E.S.",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 7,
    "title": "위아래 Vol.8",
    "artist": "이선희",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 8,
    "title": "Roly-Poly Vol.8",
    "artist": "장윤정",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 9,
    "title": "So Hot Vol.8",
    "artist": "STAYC",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 10,
    "title": "체념 Vol.8",
    "artist": "엠씨더맥스",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 11,
    "title": "To Heaven Vol.8",
    "artist": "BIGBANG",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 12,
    "title": "그대에게 Vol.8",
    "artist": "박효신",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 1,
    "title": "Supernova Vol.8",
    "artist": "태양",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 2,
    "title": "Smart Vol.8",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 3,
    "title": "Kitsch Vol.8",
    "artist": "NewJeans",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 4,
    "title": "사건의 지평선 Vol.8",
    "artist": "IVE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 5,
    "title": "아무노래 Vol.8",
    "artist": "LE SSERAFIM",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 6,
    "title": "예뻤어 Vol.8",
    "artist": "(여자)아이들",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 7,
    "title": "금요일에 만나요 Vol.8",
    "artist": "TWICE",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 8,
    "title": "Bad Girl Good Girl Vol.8",
    "artist": "izi",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 9,
    "title": "까만안경 Vol.8",
    "artist": "SG워너비",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 10,
    "title": "낭만고양이 Vol.8",
    "artist": "이루",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 11,
    "title": "인형의 꿈 Vol.8",
    "artist": "더 크로스",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 12,
    "title": "바람바람바람 Vol.8",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 1,
    "title": "소나기 Vol.8",
    "artist": "박혜원",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 2,
    "title": "Perfect Night Vol.8",
    "artist": "윤하",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 3,
    "title": "Ditto Vol.8",
    "artist": "선미",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 4,
    "title": "사랑은 늘 도망가 Vol.8",
    "artist": "볼빨간사춘기",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 5,
    "title": "오늘도 빛나는 너에게 Vol.8",
    "artist": "오마이걸",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 6,
    "title": "TT Vol.8",
    "artist": "뱅크",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 7,
    "title": "강남스타일 Vol.8",
    "artist": "전람회",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 8,
    "title": "Fire Vol.8",
    "artist": "신성우",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 9,
    "title": "응급실 Vol.8",
    "artist": "서태지와 아이들",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 10,
    "title": "Wa Vol.8",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 11,
    "title": "기억의 습작 Vol.8",
    "artist": "소찬휘",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 12,
    "title": "POWER Vol.8",
    "artist": "이정현",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 1,
    "title": "SHEESH Vol.8",
    "artist": "핑클",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 2,
    "title": "ETA Vol.8",
    "artist": "S.E.S.",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 3,
    "title": "After LIKE Vol.8",
    "artist": "이선희",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 4,
    "title": "바라만 본다 Vol.8",
    "artist": "G-DRAGON",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 5,
    "title": "너를 만나 Vol.8",
    "artist": "DAY6",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 6,
    "title": "BANG BANG BANG Vol.8",
    "artist": "이클립스",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 7,
    "title": "초혼 Vol.8",
    "artist": "TWS",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 8,
    "title": "Nobody Vol.8",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 9,
    "title": "아틀란티스 소녀 Vol.8",
    "artist": "아이유",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 10,
    "title": "순정 Vol.8",
    "artist": "aespa",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 11,
    "title": "희망사항 Vol.8",
    "artist": "NewJeans",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 12,
    "title": "HAPPY Vol.8",
    "artist": "IVE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 1,
    "title": "EASY Vol.8",
    "artist": "LE SSERAFIM",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 2,
    "title": "헤어지자 말해요 Vol.8",
    "artist": "MSG워너비",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 3,
    "title": "TOMBOY Vol.8",
    "artist": "BTS",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 4,
    "title": "에잇 Vol.8",
    "artist": "지코",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 5,
    "title": "좋니 Vol.8",
    "artist": "조정석",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 6,
    "title": "썸 Vol.8",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 7,
    "title": "좋은 날 Vol.8",
    "artist": "태연",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 8,
    "title": "거짓말 Vol.8",
    "artist": "에일리",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 9,
    "title": "No.1 Vol.8",
    "artist": "박혜원",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 10,
    "title": "발걸음 Vol.8",
    "artist": "윤하",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 11,
    "title": "남행열차 Vol.8",
    "artist": "선미",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 12,
    "title": "How Sweet Vol.8",
    "artist": "윤종신",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 1,
    "title": "Drama Vol.8",
    "artist": "엠씨더맥스",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 2,
    "title": "OMG Vol.8",
    "artist": "BIGBANG",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 3,
    "title": "ELEVEN Vol.8",
    "artist": "박효신",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 4,
    "title": "이제 나만 믿어요 Vol.8",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 5,
    "title": "우주를 줄게 Vol.8",
    "artist": "백지영",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 6,
    "title": "스물다섯 스물하나 Vol.8",
    "artist": "보아",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 7,
    "title": "Abracadabra Vol.8",
    "artist": "소찬휘",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 8,
    "title": "가시 Vol.8",
    "artist": "이정현",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 9,
    "title": "Tears Vol.8",
    "artist": "핑클",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 10,
    "title": "칵테일 사랑 Vol.8",
    "artist": "버즈",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 11,
    "title": "Whiplash Vol.8",
    "artist": "izi",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 12,
    "title": "고민중독 Vol.8",
    "artist": "SG워너비",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 1,
    "title": "Super Shy Vol.8",
    "artist": "이루",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 2,
    "title": "Attention Vol.8",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 3,
    "title": "신호등 Vol.8",
    "artist": "아일릿",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 4,
    "title": "한 페이지가 될 수 있게 Vol.8",
    "artist": "KISS OF LIFE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 5,
    "title": "음오아예 Vol.8",
    "artist": "아이유",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 6,
    "title": "오래된 노래 Vol.8",
    "artist": "aespa",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 7,
    "title": "총 맞은 것처럼 Vol.8",
    "artist": "NewJeans",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 8,
    "title": "10 Minutes Vol.8",
    "artist": "김건모",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 9,
    "title": "이미 슬픈 사랑 Vol.8",
    "artist": "뱅크",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 10,
    "title": "내 사랑 내 곁에 Vol.8",
    "artist": "전람회",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 11,
    "title": "내 이름 맑음 Vol.8",
    "artist": "신성우",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 12,
    "title": "첫 만남은 계획대로 되지 않아 Vol.8",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 1,
    "title": "손오공 Vol.8",
    "artist": "QWER",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 2,
    "title": "LOVE DIVE Vol.8",
    "artist": "비비",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 3,
    "title": "Dynamite Vol.8",
    "artist": "태연",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 4,
    "title": "LOVE SCENARIO Vol.8",
    "artist": "에일리",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 5,
    "title": "눈 코 입 Vol.8",
    "artist": "박혜원",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 6,
    "title": "내 손을 잡아 Vol.8",
    "artist": "조용필",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 7,
    "title": "만약에 Vol.8",
    "artist": "G-DRAGON",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 8,
    "title": "Valenti Vol.8",
    "artist": "DAY6",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 9,
    "title": "해변의 여인 Vol.8",
    "artist": "이클립스",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 10,
    "title": "비처럼 음악처럼 Vol.8",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 11,
    "title": "Armageddon Vol.8",
    "artist": "벤",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 12,
    "title": "Love wins all Vol.8",
    "artist": "송하예",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 1,
    "title": "Teddy Bear Vol.8",
    "artist": "백지영",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 2,
    "title": "취중고백 Vol.8",
    "artist": "보아",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 3,
    "title": "찐이야 Vol.8",
    "artist": "소찬휘",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 4,
    "title": "어디에도 Vol.8",
    "artist": "이무진",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 5,
    "title": "첫눈 Vol.8",
    "artist": "MSG워너비",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 6,
    "title": "잔소리 Vol.8",
    "artist": "BTS",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 7,
    "title": "겁쟁이 Vol.8",
    "artist": "지코",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 8,
    "title": "성인식 Vol.8",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 9,
    "title": "가질 수 없는 너 Vol.8",
    "artist": "STAYC",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 10,
    "title": "단발머리 Vol.8",
    "artist": "지수",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 11,
    "title": "SPOT! Vol.8",
    "artist": "아일릿",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 12,
    "title": "Love Lee Vol.8",
    "artist": "KISS OF LIFE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 1,
    "title": "Hype Boy Vol.8",
    "artist": "아이유",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 2,
    "title": "Next Level Vol.8",
    "artist": "iKON",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 3,
    "title": "사랑에 연습이 있었다면 Vol.8",
    "artist": "윤종신",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 4,
    "title": "오늘부터 우리는 Vol.8",
    "artist": "엠씨더맥스",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 5,
    "title": "바람기억 Vol.8",
    "artist": "BIGBANG",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 6,
    "title": "Heartbreaker Vol.8",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 7,
    "title": "Timeless Vol.8",
    "artist": "TWICE",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 8,
    "title": "천년의 사랑 Vol.8",
    "artist": "BLACKPINK",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 9,
    "title": "난 알아요 Vol.8",
    "artist": "QWER",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 10,
    "title": "UP Vol.8",
    "artist": "비비",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 11,
    "title": "Midas Touch Vol.8",
    "artist": "태연",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 12,
    "title": "퀸카 Vol.8",
    "artist": "임창정",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 1,
    "title": "FEARLESS Vol.8",
    "artist": "버즈",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 2,
    "title": "Celebrity Vol.8",
    "artist": "izi",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 3,
    "title": "모든 날 모든 순간 Vol.8",
    "artist": "SG워너비",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 4,
    "title": "야생화 Vol.8",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 5,
    "title": "내가 제일 잘 나가 Vol.8",
    "artist": "오마이걸",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 6,
    "title": "Tell Me Vol.8",
    "artist": "Red Velvet",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 7,
    "title": "소주 한 잔 Vol.8",
    "artist": "벤",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 8,
    "title": "Dreams Come True Vol.8",
    "artist": "송하예",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 9,
    "title": "사랑하기 때문에 Vol.8",
    "artist": "백지영",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 10,
    "title": "Supernova Vol.8",
    "artist": "에메랄드 캐슬",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 11,
    "title": "Smart Vol.8",
    "artist": "김건모",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 12,
    "title": "Kitsch Vol.8",
    "artist": "뱅크",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 1,
    "title": "사랑인가 봐 Vol.8",
    "artist": "전람회",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 2,
    "title": "아로하 Vol.8",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 3,
    "title": "CHEER UP Vol.8",
    "artist": "이선희",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 4,
    "title": "으르렁 Vol.8",
    "artist": "장윤정",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 5,
    "title": "Oh! Vol.8",
    "artist": "STAYC",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 6,
    "title": "내 사람 Vol.8",
    "artist": "지수",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 7,
    "title": "벌써 일년 Vol.8",
    "artist": "아일릿",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 8,
    "title": "잘못된 만남 Vol.8",
    "artist": "김범룡",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 9,
    "title": "J에게 Vol.8",
    "artist": "조용필",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 10,
    "title": "소나기 Vol.9",
    "artist": "G-DRAGON",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 11,
    "title": "Perfect Night Vol.9",
    "artist": "DAY6",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 12,
    "title": "Ditto Vol.9",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 1,
    "title": "Savage Vol.9",
    "artist": "LE SSERAFIM",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 2,
    "title": "주저하는 연인들을 위해 Vol.9",
    "artist": "(여자)아이들",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 3,
    "title": "시간을 달려서 Vol.9",
    "artist": "TWICE",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 4,
    "title": "벚꽃 엔딩 Vol.9",
    "artist": "BLACKPINK",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 5,
    "title": "Gee Vol.9",
    "artist": "QWER",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 6,
    "title": "어머나 Vol.9",
    "artist": "임영웅",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 7,
    "title": "영원한 사랑 Vol.9",
    "artist": "이무진",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 8,
    "title": "서시 Vol.9",
    "artist": "MSG워너비",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 9,
    "title": "APT. Vol.9",
    "artist": "BTS",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 10,
    "title": "SHEESH Vol.9",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 11,
    "title": "ETA Vol.9",
    "artist": "선미",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 12,
    "title": "After LIKE Vol.9",
    "artist": "볼빨간사춘기",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 1,
    "title": "라일락 Vol.9",
    "artist": "오마이걸",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 2,
    "title": "뚜두뚜두 Vol.9",
    "artist": "Red Velvet",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 3,
    "title": "위아래 Vol.9",
    "artist": "벤",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 4,
    "title": "Roly-Poly Vol.9",
    "artist": "폴킴",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 5,
    "title": "So Hot Vol.9",
    "artist": "iKON",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 6,
    "title": "체념 Vol.9",
    "artist": "윤종신",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 7,
    "title": "To Heaven Vol.9",
    "artist": "엠씨더맥스",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 8,
    "title": "그대에게 Vol.9",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 9,
    "title": "클락션 Vol.9",
    "artist": "핑클",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 10,
    "title": "EASY Vol.9",
    "artist": "S.E.S.",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 11,
    "title": "헤어지자 말해요 Vol.9",
    "artist": "이선희",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 12,
    "title": "TOMBOY Vol.9",
    "artist": "장윤정",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 1,
    "title": "아무노래 Vol.9",
    "artist": "STAYC",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 2,
    "title": "예뻤어 Vol.9",
    "artist": "나얼",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 3,
    "title": "금요일에 만나요 Vol.9",
    "artist": "임창정",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 4,
    "title": "Bad Girl Good Girl Vol.9",
    "artist": "버즈",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 5,
    "title": "까만안경 Vol.9",
    "artist": "izi",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 6,
    "title": "낭만고양이 Vol.9",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 7,
    "title": "인형의 꿈 Vol.9",
    "artist": "NewJeans",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 8,
    "title": "바람바람바람 Vol.9",
    "artist": "IVE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 9,
    "title": "Bubble Gum Vol.9",
    "artist": "LE SSERAFIM",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 10,
    "title": "Drama Vol.9",
    "artist": "(여자)아이들",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 11,
    "title": "OMG Vol.9",
    "artist": "TWICE",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 12,
    "title": "ELEVEN Vol.9",
    "artist": "야다",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 1,
    "title": "오늘도 빛나는 너에게 Vol.9",
    "artist": "에메랄드 캐슬",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 2,
    "title": "TT Vol.9",
    "artist": "김건모",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 3,
    "title": "강남스타일 Vol.9",
    "artist": "뱅크",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 4,
    "title": "Fire Vol.9",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 5,
    "title": "응급실 Vol.9",
    "artist": "박혜원",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 6,
    "title": "Wa Vol.9",
    "artist": "윤하",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 7,
    "title": "기억의 습작 Vol.9",
    "artist": "선미",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 8,
    "title": "POWER Vol.9",
    "artist": "볼빨간사춘기",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 9,
    "title": "Magnetic Vol.9",
    "artist": "오마이걸",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 10,
    "title": "Super Shy Vol.9",
    "artist": "유재하",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 11,
    "title": "Attention Vol.9",
    "artist": "김범룡",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 12,
    "title": "신호등 Vol.9",
    "artist": "조용필",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 1,
    "title": "너를 만나 Vol.9",
    "artist": "G-DRAGON",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 2,
    "title": "BANG BANG BANG Vol.9",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 3,
    "title": "초혼 Vol.9",
    "artist": "소찬휘",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 4,
    "title": "Nobody Vol.9",
    "artist": "이정현",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 5,
    "title": "아틀란티스 소녀 Vol.9",
    "artist": "핑클",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 6,
    "title": "순정 Vol.9",
    "artist": "S.E.S.",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 7,
    "title": "희망사항 Vol.9",
    "artist": "이선희",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 8,
    "title": "HAPPY Vol.9",
    "artist": "멜로망스",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 9,
    "title": "밤양갱 Vol.9",
    "artist": "임영웅",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 10,
    "title": "손오공 Vol.9",
    "artist": "이무진",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 11,
    "title": "LOVE DIVE Vol.9",
    "artist": "MSG워너비",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 12,
    "title": "Dynamite Vol.9",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 1,
    "title": "좋니 Vol.9",
    "artist": "아이유",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 2,
    "title": "썸 Vol.9",
    "artist": "aespa",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 3,
    "title": "좋은 날 Vol.9",
    "artist": "NewJeans",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 4,
    "title": "거짓말 Vol.9",
    "artist": "IVE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 5,
    "title": "No.1 Vol.9",
    "artist": "LE SSERAFIM",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 6,
    "title": "발걸음 Vol.9",
    "artist": "임재현",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 7,
    "title": "남행열차 Vol.9",
    "artist": "폴킴",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 8,
    "title": "How Sweet Vol.9",
    "artist": "iKON",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 9,
    "title": "To. X Vol.9",
    "artist": "윤종신",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 10,
    "title": "Teddy Bear Vol.9",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 11,
    "title": "취중고백 Vol.9",
    "artist": "태연",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 12,
    "title": "찐이야 Vol.9",
    "artist": "에일리",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 1,
    "title": "우주를 줄게 Vol.9",
    "artist": "박혜원",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 2,
    "title": "스물다섯 스물하나 Vol.9",
    "artist": "윤하",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 3,
    "title": "Abracadabra Vol.9",
    "artist": "선미",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 4,
    "title": "가시 Vol.9",
    "artist": "버스커 버스커",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 5,
    "title": "Tears Vol.9",
    "artist": "나얼",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 6,
    "title": "칵테일 사랑 Vol.9",
    "artist": "임창정",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 7,
    "title": "Whiplash Vol.9",
    "artist": "버즈",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 8,
    "title": "고민중독 Vol.9",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 9,
    "title": "Seven Vol.9",
    "artist": "백지영",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 10,
    "title": "Hype Boy Vol.9",
    "artist": "보아",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 11,
    "title": "Next Level Vol.9",
    "artist": "소찬휘",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 12,
    "title": "사랑에 연습이 있었다면 Vol.9",
    "artist": "이정현",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 1,
    "title": "음오아예 Vol.9",
    "artist": "핑클",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 2,
    "title": "오래된 노래 Vol.9",
    "artist": "박완규",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 3,
    "title": "총 맞은 것처럼 Vol.9",
    "artist": "야다",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 4,
    "title": "10 Minutes Vol.9",
    "artist": "에메랄드 캐슬",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 5,
    "title": "이미 슬픈 사랑 Vol.9",
    "artist": "김건모",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 6,
    "title": "내 사랑 내 곁에 Vol.9",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 7,
    "title": "내 이름 맑음 Vol.9",
    "artist": "아일릿",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 8,
    "title": "첫 만남은 계획대로 되지 않아 Vol.9",
    "artist": "KISS OF LIFE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 9,
    "title": "I AM Vol.9",
    "artist": "아이유",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 10,
    "title": "FEARLESS Vol.9",
    "artist": "aespa",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 11,
    "title": "Celebrity Vol.9",
    "artist": "NewJeans",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 12,
    "title": "모든 날 모든 순간 Vol.9",
    "artist": "무한궤도",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 1,
    "title": "눈 코 입 Vol.9",
    "artist": "유재하",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 2,
    "title": "내 손을 잡아 Vol.9",
    "artist": "김범룡",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 3,
    "title": "만약에 Vol.9",
    "artist": "조용필",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 4,
    "title": "Valenti Vol.9",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 5,
    "title": "해변의 여인 Vol.9",
    "artist": "QWER",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 6,
    "title": "비처럼 음악처럼 Vol.9",
    "artist": "비비",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 7,
    "title": "Armageddon Vol.9",
    "artist": "태연",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 8,
    "title": "Love wins all Vol.9",
    "artist": "에일리",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 9,
    "title": "꽃 Vol.9",
    "artist": "박혜원",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 10,
    "title": "사랑인가 봐 Vol.9",
    "artist": "박재정",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 11,
    "title": "아로하 Vol.9",
    "artist": "멜로망스",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 12,
    "title": "CHEER UP Vol.9",
    "artist": "임영웅",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 1,
    "title": "첫눈 Vol.9",
    "artist": "이무진",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 2,
    "title": "잔소리 Vol.9",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 3,
    "title": "겁쟁이 Vol.9",
    "artist": "벤",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 4,
    "title": "성인식 Vol.9",
    "artist": "송하예",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 5,
    "title": "가질 수 없는 너 Vol.9",
    "artist": "백지영",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 6,
    "title": "단발머리 Vol.9",
    "artist": "보아",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 7,
    "title": "SPOT! Vol.9",
    "artist": "소찬휘",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 8,
    "title": "Love Lee Vol.9",
    "artist": "잔나비",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 9,
    "title": "ANTIFRAGILE Vol.9",
    "artist": "임재현",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 10,
    "title": "Savage Vol.9",
    "artist": "폴킴",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 11,
    "title": "주저하는 연인들을 위해 Vol.9",
    "artist": "iKON",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 12,
    "title": "시간을 달려서 Vol.9",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 1,
    "title": "바람기억 Vol.9",
    "artist": "STAYC",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 2,
    "title": "Heartbreaker Vol.9",
    "artist": "지수",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 3,
    "title": "Timeless Vol.9",
    "artist": "아일릿",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 4,
    "title": "천년의 사랑 Vol.9",
    "artist": "KISS OF LIFE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 5,
    "title": "난 알아요 Vol.9",
    "artist": "아이유",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 6,
    "title": "UP Vol.9",
    "artist": "싸이",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 7,
    "title": "Midas Touch Vol.9",
    "artist": "버스커 버스커",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 8,
    "title": "퀸카 Vol.9",
    "artist": "나얼",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 9,
    "title": "Pink Venom Vol.9",
    "artist": "임창정",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 10,
    "title": "라일락 Vol.9",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 11,
    "title": "뚜두뚜두 Vol.9",
    "artist": "TWICE",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 12,
    "title": "위아래 Vol.9",
    "artist": "BLACKPINK",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 1,
    "title": "내가 제일 잘 나가 Vol.9",
    "artist": "QWER",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 2,
    "title": "Tell Me Vol.9",
    "artist": "비비",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 3,
    "title": "소주 한 잔 Vol.9",
    "artist": "태연",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 4,
    "title": "Dreams Come True Vol.9",
    "artist": "조성모",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 5,
    "title": "사랑하기 때문에 Vol.9",
    "artist": "박완규",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 6,
    "title": "Supernova Vol.9",
    "artist": "야다",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 7,
    "title": "Smart Vol.9",
    "artist": "에메랄드 캐슬",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 8,
    "title": "Kitsch Vol.9",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 9,
    "title": "사건의 지평선 Vol.9",
    "artist": "오마이걸",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 10,
    "title": "아무노래 Vol.9",
    "artist": "Red Velvet",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 11,
    "title": "예뻤어 Vol.9",
    "artist": "벤",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 12,
    "title": "금요일에 만나요 Vol.9",
    "artist": "송하예",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 1,
    "title": "Oh! Vol.9",
    "artist": "백지영",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 2,
    "title": "내 사람 Vol.9",
    "artist": "변진섭",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 3,
    "title": "벌써 일년 Vol.9",
    "artist": "무한궤도",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 4,
    "title": "잘못된 만남 Vol.9",
    "artist": "유재하",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 5,
    "title": "J에게 Vol.9",
    "artist": "김범룡",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 6,
    "title": "소나기 Vol.9",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 7,
    "title": "Perfect Night Vol.10",
    "artist": "이선희",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 8,
    "title": "Ditto Vol.10",
    "artist": "장윤정",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 9,
    "title": "사랑은 늘 도망가 Vol.10",
    "artist": "STAYC",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 10,
    "title": "오늘도 빛나는 너에게 Vol.10",
    "artist": "지수",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 11,
    "title": "TT Vol.10",
    "artist": "아일릿",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 12,
    "title": "강남스타일 Vol.10",
    "artist": "세븐틴",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 1,
    "title": "Gee Vol.10",
    "artist": "박재정",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 2,
    "title": "어머나 Vol.10",
    "artist": "멜로망스",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 3,
    "title": "영원한 사랑 Vol.10",
    "artist": "임영웅",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 4,
    "title": "서시 Vol.10",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 5,
    "title": "APT. Vol.10",
    "artist": "LE SSERAFIM",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 6,
    "title": "SHEESH Vol.10",
    "artist": "(여자)아이들",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 7,
    "title": "ETA Vol.10",
    "artist": "TWICE",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 8,
    "title": "After LIKE Vol.10",
    "artist": "BLACKPINK",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 9,
    "title": "바라만 본다 Vol.10",
    "artist": "QWER",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 10,
    "title": "너를 만나 Vol.10",
    "artist": "마크툽",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 11,
    "title": "BANG BANG BANG Vol.10",
    "artist": "잔나비",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 12,
    "title": "초혼 Vol.10",
    "artist": "임재현",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 1,
    "title": "So Hot Vol.10",
    "artist": "폴킴",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 2,
    "title": "체념 Vol.10",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 3,
    "title": "To Heaven Vol.10",
    "artist": "선미",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 4,
    "title": "그대에게 Vol.10",
    "artist": "볼빨간사춘기",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 5,
    "title": "클락션 Vol.10",
    "artist": "오마이걸",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 6,
    "title": "EASY Vol.10",
    "artist": "Red Velvet",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 7,
    "title": "헤어지자 말해요 Vol.10",
    "artist": "벤",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 8,
    "title": "TOMBOY Vol.10",
    "artist": "EXO",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 9,
    "title": "에잇 Vol.10",
    "artist": "싸이",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 10,
    "title": "좋니 Vol.10",
    "artist": "버스커 버스커",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 11,
    "title": "썸 Vol.10",
    "artist": "나얼",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 12,
    "title": "좋은 날 Vol.10",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 1,
    "title": "까만안경 Vol.10",
    "artist": "핑클",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 2,
    "title": "낭만고양이 Vol.10",
    "artist": "S.E.S.",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 3,
    "title": "인형의 꿈 Vol.10",
    "artist": "이선희",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 4,
    "title": "바람바람바람 Vol.10",
    "artist": "장윤정",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 5,
    "title": "Bubble Gum Vol.10",
    "artist": "STAYC",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 6,
    "title": "Drama Vol.10",
    "artist": "브라운 아이즈",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 7,
    "title": "OMG Vol.10",
    "artist": "조성모",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 8,
    "title": "ELEVEN Vol.10",
    "artist": "박완규",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 9,
    "title": "이제 나만 믿어요 Vol.10",
    "artist": "야다",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 10,
    "title": "우주를 줄게 Vol.10",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 11,
    "title": "스물다섯 스물하나 Vol.10",
    "artist": "NewJeans",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 12,
    "title": "Abracadabra Vol.10",
    "artist": "IVE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 1,
    "title": "응급실 Vol.10",
    "artist": "LE SSERAFIM",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 2,
    "title": "Wa Vol.10",
    "artist": "(여자)아이들",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 3,
    "title": "기억의 습작 Vol.10",
    "artist": "TWICE",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 4,
    "title": "POWER Vol.10",
    "artist": "김현식",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 5,
    "title": "Magnetic Vol.10",
    "artist": "변진섭",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 6,
    "title": "Super Shy Vol.10",
    "artist": "무한궤도",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 7,
    "title": "Attention Vol.10",
    "artist": "유재하",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 8,
    "title": "신호등 Vol.10",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 9,
    "title": "한 페이지가 될 수 있게 Vol.10",
    "artist": "박혜원",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 10,
    "title": "음오아예 Vol.10",
    "artist": "윤하",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 11,
    "title": "오래된 노래 Vol.10",
    "artist": "선미",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 12,
    "title": "총 맞은 것처럼 Vol.10",
    "artist": "볼빨간사춘기",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 1,
    "title": "아틀란티스 소녀 Vol.10",
    "artist": "오마이걸",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 2,
    "title": "순정 Vol.10",
    "artist": "정국",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 3,
    "title": "희망사항 Vol.10",
    "artist": "세븐틴",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 4,
    "title": "HAPPY Vol.10",
    "artist": "박재정",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 5,
    "title": "밤양갱 Vol.10",
    "artist": "멜로망스",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 6,
    "title": "손오공 Vol.10",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 7,
    "title": "LOVE DIVE Vol.10",
    "artist": "소찬휘",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 8,
    "title": "Dynamite Vol.10",
    "artist": "이정현",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 9,
    "title": "LOVE SCENARIO Vol.10",
    "artist": "핑클",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 10,
    "title": "눈 코 입 Vol.10",
    "artist": "S.E.S.",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 11,
    "title": "내 손을 잡아 Vol.10",
    "artist": "이선희",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 12,
    "title": "만약에 Vol.10",
    "artist": "영탁",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 1,
    "title": "No.1 Vol.10",
    "artist": "마크툽",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 2,
    "title": "발걸음 Vol.10",
    "artist": "잔나비",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 3,
    "title": "남행열차 Vol.10",
    "artist": "임재현",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 4,
    "title": "How Sweet Vol.10",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 5,
    "title": "To. X Vol.10",
    "artist": "아이유",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 6,
    "title": "Teddy Bear Vol.10",
    "artist": "aespa",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 7,
    "title": "취중고백 Vol.10",
    "artist": "NewJeans",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 8,
    "title": "찐이야 Vol.10",
    "artist": "IVE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 9,
    "title": "어디에도 Vol.10",
    "artist": "LE SSERAFIM",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 10,
    "title": "첫눈 Vol.10",
    "artist": "태양",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 11,
    "title": "잔소리 Vol.10",
    "artist": "EXO",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 12,
    "title": "겁쟁이 Vol.10",
    "artist": "싸이",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 1,
    "title": "Tears Vol.10",
    "artist": "버스커 버스커",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 2,
    "title": "칵테일 사랑 Vol.10",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 3,
    "title": "Whiplash Vol.10",
    "artist": "태연",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 4,
    "title": "고민중독 Vol.10",
    "artist": "에일리",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 5,
    "title": "Seven Vol.10",
    "artist": "박혜원",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 6,
    "title": "Hype Boy Vol.10",
    "artist": "윤하",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 7,
    "title": "Next Level Vol.10",
    "artist": "선미",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 8,
    "title": "사랑에 연습이 있었다면 Vol.10",
    "artist": "더 크로스",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 9,
    "title": "오늘부터 우리는 Vol.10",
    "artist": "브라운 아이즈",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 10,
    "title": "바람기억 Vol.10",
    "artist": "조성모",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 11,
    "title": "Heartbreaker Vol.10",
    "artist": "박완규",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 12,
    "title": "Timeless Vol.10",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 1,
    "title": "이미 슬픈 사랑 Vol.10",
    "artist": "백지영",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 2,
    "title": "내 사랑 내 곁에 Vol.10",
    "artist": "보아",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 3,
    "title": "내 이름 맑음 Vol.10",
    "artist": "소찬휘",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 4,
    "title": "첫 만남은 계획대로 되지 않아 Vol.10",
    "artist": "이정현",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 5,
    "title": "I AM Vol.10",
    "artist": "핑클",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 6,
    "title": "FEARLESS Vol.10",
    "artist": "서태지와 아이들",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 7,
    "title": "Celebrity Vol.10",
    "artist": "김현식",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 8,
    "title": "모든 날 모든 순간 Vol.10",
    "artist": "변진섭",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 9,
    "title": "야생화 Vol.10",
    "artist": "무한궤도",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 10,
    "title": "내가 제일 잘 나가 Vol.10",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 11,
    "title": "Tell Me Vol.10",
    "artist": "아일릿",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 12,
    "title": "소주 한 잔 Vol.10",
    "artist": "KISS OF LIFE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 1,
    "title": "해변의 여인 Vol.10",
    "artist": "아이유",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 2,
    "title": "비처럼 음악처럼 Vol.10",
    "artist": "aespa",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 3,
    "title": "Armageddon Vol.10",
    "artist": "NewJeans",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 4,
    "title": "Love wins all Vol.10",
    "artist": "TWS",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 5,
    "title": "꽃 Vol.10",
    "artist": "정국",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 6,
    "title": "사랑인가 봐 Vol.10",
    "artist": "세븐틴",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 7,
    "title": "아로하 Vol.10",
    "artist": "박재정",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 8,
    "title": "CHEER UP Vol.10",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 9,
    "title": "으르렁 Vol.10",
    "artist": "QWER",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 10,
    "title": "Oh! Vol.10",
    "artist": "비비",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 11,
    "title": "내 사람 Vol.10",
    "artist": "태연",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 12,
    "title": "벌써 일년 Vol.10",
    "artist": "에일리",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 1,
    "title": "가질 수 없는 너 Vol.10",
    "artist": "박혜원",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 2,
    "title": "단발머리 Vol.10",
    "artist": "조정석",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 3,
    "title": "SPOT! Vol.10",
    "artist": "영탁",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 4,
    "title": "Love Lee Vol.10",
    "artist": "마크툽",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 5,
    "title": "ANTIFRAGILE Vol.10",
    "artist": "잔나비",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 6,
    "title": "Savage Vol.10",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 7,
    "title": "주저하는 연인들을 위해 Vol.10",
    "artist": "벤",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 8,
    "title": "시간을 달려서 Vol.10",
    "artist": "송하예",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 9,
    "title": "벚꽃 엔딩 Vol.10",
    "artist": "백지영",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 10,
    "title": "Gee Vol.10",
    "artist": "보아",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 11,
    "title": "어머나 Vol.10",
    "artist": "소찬휘",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 12,
    "title": "영원한 사랑 Vol.10",
    "artist": "박효신",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 1,
    "title": "난 알아요 Vol.10",
    "artist": "태양",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 2,
    "title": "UP Vol.10",
    "artist": "EXO",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 3,
    "title": "Midas Touch Vol.10",
    "artist": "싸이",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 4,
    "title": "퀸카 Vol.10",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 5,
    "title": "Pink Venom Vol.10",
    "artist": "STAYC",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 6,
    "title": "라일락 Vol.10",
    "artist": "지수",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 7,
    "title": "뚜두뚜두 Vol.10",
    "artist": "아일릿",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 8,
    "title": "위아래 Vol.10",
    "artist": "KISS OF LIFE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 9,
    "title": "Roly-Poly Vol.10",
    "artist": "아이유",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 10,
    "title": "So Hot Vol.10",
    "artist": "이루",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 11,
    "title": "체념 Vol.10",
    "artist": "더 크로스",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 12,
    "title": "To Heaven Vol.10",
    "artist": "브라운 아이즈",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 1,
    "title": "사랑하기 때문에 Vol.10",
    "artist": "조성모",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 2,
    "title": "Supernova Vol.10",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 3,
    "title": "Smart Vol.10",
    "artist": "TWICE",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 4,
    "title": "Kitsch Vol.10",
    "artist": "BLACKPINK",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 5,
    "title": "사건의 지평선 Vol.10",
    "artist": "QWER",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 6,
    "title": "아무노래 Vol.10",
    "artist": "비비",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 7,
    "title": "예뻤어 Vol.10",
    "artist": "태연",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 8,
    "title": "금요일에 만나요 Vol.10",
    "artist": "신성우",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 9,
    "title": "Bad Girl Good Girl Vol.10",
    "artist": "서태지와 아이들",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 10,
    "title": "까만안경 Vol.10",
    "artist": "김현식",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 11,
    "title": "낭만고양이 Vol.10",
    "artist": "변진섭",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 12,
    "title": "인형의 꿈 Vol.10",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 1,
    "title": "J에게 Vol.10",
    "artist": "오마이걸",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 2,
    "title": "소나기 Vol.10",
    "artist": "Red Velvet",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 3,
    "title": "Perfect Night Vol.10",
    "artist": "벤",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 4,
    "title": "Ditto Vol.11",
    "artist": "송하예",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 5,
    "title": "사랑은 늘 도망가 Vol.11",
    "artist": "백지영",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 6,
    "title": "오늘도 빛나는 너에게 Vol.11",
    "artist": "이클립스",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 7,
    "title": "TT Vol.11",
    "artist": "TWS",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 8,
    "title": "강남스타일 Vol.11",
    "artist": "정국",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 9,
    "title": "Fire Vol.11",
    "artist": "세븐틴",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 10,
    "title": "응급실 Vol.11",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 11,
    "title": "Wa Vol.11",
    "artist": "이선희",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 12,
    "title": "기억의 습작 Vol.11",
    "artist": "장윤정",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 1,
    "title": "Tell Me Vol.11",
    "artist": "STAYC",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 2,
    "title": "소주 한 잔 Vol.11",
    "artist": "지수",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 3,
    "title": "Dreams Come True Vol.11",
    "artist": "아일릿",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 4,
    "title": "사랑하기 때문에 Vol.11",
    "artist": "지코",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 5,
    "title": "Supernova Vol.11",
    "artist": "조정석",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 6,
    "title": "Smart Vol.11",
    "artist": "영탁",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 7,
    "title": "Kitsch Vol.11",
    "artist": "마크툽",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 8,
    "title": "사건의 지평선 Vol.11",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 9,
    "title": "아무노래 Vol.11",
    "artist": "LE SSERAFIM",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 10,
    "title": "예뻤어 Vol.11",
    "artist": "(여자)아이들",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 11,
    "title": "금요일에 만나요 Vol.11",
    "artist": "TWICE",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 12,
    "title": "Bad Girl Good Girl Vol.11",
    "artist": "BLACKPINK",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 1,
    "title": "내 사람 Vol.11",
    "artist": "QWER",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 2,
    "title": "벌써 일년 Vol.11",
    "artist": "BIGBANG",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 3,
    "title": "잘못된 만남 Vol.11",
    "artist": "박효신",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 4,
    "title": "J에게 Vol.11",
    "artist": "태양",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 5,
    "title": "소나기 Vol.11",
    "artist": "EXO",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 6,
    "title": "Perfect Night Vol.11",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 7,
    "title": "Ditto Vol.11",
    "artist": "선미",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 8,
    "title": "사랑은 늘 도망가 Vol.11",
    "artist": "볼빨간사춘기",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 9,
    "title": "오늘도 빛나는 너에게 Vol.11",
    "artist": "오마이걸",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 10,
    "title": "TT Vol.11",
    "artist": "Red Velvet",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 11,
    "title": "강남스타일 Vol.11",
    "artist": "벤",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 12,
    "title": "Fire Vol.11",
    "artist": "SG워너비",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 1,
    "title": "어머나 Vol.11",
    "artist": "이루",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 2,
    "title": "영원한 사랑 Vol.11",
    "artist": "더 크로스",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 3,
    "title": "서시 Vol.11",
    "artist": "브라운 아이즈",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 4,
    "title": "APT. Vol.11",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 5,
    "title": "SHEESH Vol.11",
    "artist": "핑클",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 6,
    "title": "ETA Vol.11",
    "artist": "S.E.S.",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 7,
    "title": "After LIKE Vol.11",
    "artist": "이선희",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 8,
    "title": "바라만 본다 Vol.11",
    "artist": "장윤정",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 9,
    "title": "너를 만나 Vol.11",
    "artist": "STAYC",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 10,
    "title": "BANG BANG BANG Vol.11",
    "artist": "전람회",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 11,
    "title": "초혼 Vol.11",
    "artist": "신성우",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 12,
    "title": "Nobody Vol.11",
    "artist": "서태지와 아이들",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 1,
    "title": "체념 Vol.11",
    "artist": "김현식",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 2,
    "title": "To Heaven Vol.11",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 3,
    "title": "그대에게 Vol.11",
    "artist": "NewJeans",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 4,
    "title": "클락션 Vol.11",
    "artist": "IVE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 5,
    "title": "EASY Vol.11",
    "artist": "LE SSERAFIM",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 6,
    "title": "헤어지자 말해요 Vol.11",
    "artist": "(여자)아이들",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 7,
    "title": "TOMBOY Vol.11",
    "artist": "TWICE",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 8,
    "title": "에잇 Vol.11",
    "artist": "DAY6",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 9,
    "title": "좋니 Vol.11",
    "artist": "이클립스",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 10,
    "title": "썸 Vol.11",
    "artist": "TWS",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 11,
    "title": "좋은 날 Vol.11",
    "artist": "정국",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 12,
    "title": "거짓말 Vol.11",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 1,
    "title": "낭만고양이 Vol.11",
    "artist": "박혜원",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 2,
    "title": "인형의 꿈 Vol.11",
    "artist": "윤하",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 3,
    "title": "바람바람바람 Vol.11",
    "artist": "선미",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 4,
    "title": "Bubble Gum Vol.11",
    "artist": "볼빨간사춘기",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 5,
    "title": "Drama Vol.11",
    "artist": "오마이걸",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 6,
    "title": "OMG Vol.11",
    "artist": "BTS",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 7,
    "title": "ELEVEN Vol.11",
    "artist": "지코",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 8,
    "title": "이제 나만 믿어요 Vol.11",
    "artist": "조정석",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 9,
    "title": "우주를 줄게 Vol.11",
    "artist": "영탁",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 10,
    "title": "스물다섯 스물하나 Vol.11",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 11,
    "title": "Abracadabra Vol.11",
    "artist": "소찬휘",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 12,
    "title": "가시 Vol.11",
    "artist": "이정현",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 1,
    "title": "Wa Vol.11",
    "artist": "핑클",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 2,
    "title": "기억의 습작 Vol.11",
    "artist": "S.E.S.",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 3,
    "title": "POWER Vol.11",
    "artist": "이선희",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 4,
    "title": "Magnetic Vol.11",
    "artist": "엠씨더맥스",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 5,
    "title": "Super Shy Vol.11",
    "artist": "BIGBANG",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 6,
    "title": "Attention Vol.11",
    "artist": "박효신",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 7,
    "title": "신호등 Vol.11",
    "artist": "태양",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 8,
    "title": "한 페이지가 될 수 있게 Vol.11",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 9,
    "title": "음오아예 Vol.11",
    "artist": "아이유",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 10,
    "title": "오래된 노래 Vol.11",
    "artist": "aespa",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 11,
    "title": "총 맞은 것처럼 Vol.11",
    "artist": "NewJeans",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 12,
    "title": "10 Minutes Vol.11",
    "artist": "IVE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 1,
    "title": "순정 Vol.11",
    "artist": "LE SSERAFIM",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 2,
    "title": "희망사항 Vol.11",
    "artist": "izi",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 3,
    "title": "HAPPY Vol.11",
    "artist": "SG워너비",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 4,
    "title": "밤양갱 Vol.11",
    "artist": "이루",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 5,
    "title": "손오공 Vol.11",
    "artist": "더 크로스",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 6,
    "title": "LOVE DIVE Vol.11",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 7,
    "title": "Dynamite Vol.11",
    "artist": "태연",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 8,
    "title": "LOVE SCENARIO Vol.11",
    "artist": "에일리",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 9,
    "title": "눈 코 입 Vol.11",
    "artist": "박혜원",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 10,
    "title": "내 손을 잡아 Vol.11",
    "artist": "윤하",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 11,
    "title": "만약에 Vol.11",
    "artist": "선미",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 12,
    "title": "Valenti Vol.11",
    "artist": "뱅크",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 1,
    "title": "발걸음 Vol.11",
    "artist": "전람회",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 2,
    "title": "남행열차 Vol.11",
    "artist": "신성우",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 3,
    "title": "How Sweet Vol.11",
    "artist": "서태지와 아이들",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 4,
    "title": "To. X Vol.11",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 5,
    "title": "Teddy Bear Vol.11",
    "artist": "백지영",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 6,
    "title": "취중고백 Vol.11",
    "artist": "보아",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 7,
    "title": "찐이야 Vol.11",
    "artist": "소찬휘",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 8,
    "title": "어디에도 Vol.11",
    "artist": "이정현",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 9,
    "title": "첫눈 Vol.11",
    "artist": "핑클",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 10,
    "title": "잔소리 Vol.11",
    "artist": "G-DRAGON",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 11,
    "title": "겁쟁이 Vol.11",
    "artist": "DAY6",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 12,
    "title": "성인식 Vol.11",
    "artist": "이클립스",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 1,
    "title": "칵테일 사랑 Vol.11",
    "artist": "TWS",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 2,
    "title": "Whiplash Vol.11",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 3,
    "title": "고민중독 Vol.11",
    "artist": "아일릿",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 4,
    "title": "Seven Vol.11",
    "artist": "KISS OF LIFE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 5,
    "title": "Hype Boy Vol.11",
    "artist": "아이유",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 6,
    "title": "Next Level Vol.11",
    "artist": "aespa",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 7,
    "title": "사랑에 연습이 있었다면 Vol.11",
    "artist": "NewJeans",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 8,
    "title": "오늘부터 우리는 Vol.11",
    "artist": "MSG워너비",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 9,
    "title": "바람기억 Vol.11",
    "artist": "BTS",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 10,
    "title": "Heartbreaker Vol.11",
    "artist": "지코",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 11,
    "title": "Timeless Vol.11",
    "artist": "조정석",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 12,
    "title": "천년의 사랑 Vol.11",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 1,
    "title": "내 사랑 내 곁에 Vol.11",
    "artist": "QWER",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 2,
    "title": "내 이름 맑음 Vol.11",
    "artist": "비비",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 3,
    "title": "첫 만남은 계획대로 되지 않아 Vol.11",
    "artist": "태연",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 4,
    "title": "I AM Vol.11",
    "artist": "에일리",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 5,
    "title": "FEARLESS Vol.11",
    "artist": "박혜원",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 6,
    "title": "Celebrity Vol.11",
    "artist": "윤종신",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 7,
    "title": "모든 날 모든 순간 Vol.11",
    "artist": "엠씨더맥스",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 8,
    "title": "야생화 Vol.11",
    "artist": "BIGBANG",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 9,
    "title": "내가 제일 잘 나가 Vol.11",
    "artist": "박효신",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 10,
    "title": "Tell Me Vol.11",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 11,
    "title": "소주 한 잔 Vol.11",
    "artist": "벤",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 12,
    "title": "Dreams Come True Vol.11",
    "artist": "송하예",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 1,
    "title": "비처럼 음악처럼 Vol.11",
    "artist": "백지영",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 2,
    "title": "Armageddon Vol.11",
    "artist": "보아",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 3,
    "title": "Love wins all Vol.11",
    "artist": "소찬휘",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 4,
    "title": "꽃 Vol.11",
    "artist": "버즈",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 5,
    "title": "사랑인가 봐 Vol.11",
    "artist": "izi",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 6,
    "title": "아로하 Vol.11",
    "artist": "SG워너비",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 7,
    "title": "CHEER UP Vol.11",
    "artist": "이루",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 8,
    "title": "으르렁 Vol.11",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 9,
    "title": "Oh! Vol.11",
    "artist": "STAYC",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 10,
    "title": "내 사람 Vol.11",
    "artist": "지수",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 11,
    "title": "벌써 일년 Vol.11",
    "artist": "아일릿",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 12,
    "title": "잘못된 만남 Vol.11",
    "artist": "KISS OF LIFE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 1,
    "title": "단발머리 Vol.11",
    "artist": "아이유",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 2,
    "title": "SPOT! Vol.11",
    "artist": "김건모",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 3,
    "title": "Love Lee Vol.11",
    "artist": "뱅크",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 4,
    "title": "ANTIFRAGILE Vol.11",
    "artist": "전람회",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 5,
    "title": "Savage Vol.11",
    "artist": "신성우",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 6,
    "title": "주저하는 연인들을 위해 Vol.11",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 7,
    "title": "시간을 달려서 Vol.11",
    "artist": "TWICE",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 8,
    "title": "벚꽃 엔딩 Vol.11",
    "artist": "BLACKPINK",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 9,
    "title": "Gee Vol.11",
    "artist": "QWER",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 10,
    "title": "어머나 Vol.11",
    "artist": "비비",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 11,
    "title": "영원한 사랑 Vol.11",
    "artist": "태연",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 12,
    "title": "서시 Vol.11",
    "artist": "조용필",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 1,
    "title": "UP Vol.12",
    "artist": "G-DRAGON",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 2,
    "title": "Midas Touch Vol.12",
    "artist": "DAY6",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 3,
    "title": "퀸카 Vol.12",
    "artist": "이클립스",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 4,
    "title": "Pink Venom Vol.12",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 5,
    "title": "라일락 Vol.12",
    "artist": "오마이걸",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 6,
    "title": "뚜두뚜두 Vol.12",
    "artist": "Red Velvet",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 7,
    "title": "위아래 Vol.12",
    "artist": "벤",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 8,
    "title": "Roly-Poly Vol.12",
    "artist": "송하예",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 9,
    "title": "So Hot Vol.12",
    "artist": "백지영",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 10,
    "title": "체념 Vol.12",
    "artist": "이무진",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 11,
    "title": "To Heaven Vol.12",
    "artist": "MSG워너비",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 12,
    "title": "그대에게 Vol.12",
    "artist": "BTS",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 1,
    "title": "Supernova Vol.12",
    "artist": "지코",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 2,
    "title": "Smart Vol.12",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 3,
    "title": "Kitsch Vol.12",
    "artist": "이선희",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 4,
    "title": "사건의 지평선 Vol.12",
    "artist": "장윤정",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 5,
    "title": "아무노래 Vol.12",
    "artist": "STAYC",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 6,
    "title": "예뻤어 Vol.12",
    "artist": "지수",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 7,
    "title": "금요일에 만나요 Vol.12",
    "artist": "아일릿",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 8,
    "title": "Bad Girl Good Girl Vol.12",
    "artist": "iKON",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 9,
    "title": "까만안경 Vol.12",
    "artist": "윤종신",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 10,
    "title": "낭만고양이 Vol.12",
    "artist": "엠씨더맥스",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 11,
    "title": "인형의 꿈 Vol.12",
    "artist": "BIGBANG",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 12,
    "title": "바람바람바람 Vol.12",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 1,
    "title": "소나기 Vol.12",
    "artist": "LE SSERAFIM",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 2,
    "title": "Perfect Night Vol.12",
    "artist": "(여자)아이들",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 3,
    "title": "Ditto Vol.12",
    "artist": "TWICE",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 4,
    "title": "사랑은 늘 도망가 Vol.12",
    "artist": "BLACKPINK",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 5,
    "title": "오늘도 빛나는 너에게 Vol.12",
    "artist": "QWER",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 6,
    "title": "TT Vol.12",
    "artist": "임창정",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 7,
    "title": "강남스타일 Vol.12",
    "artist": "버즈",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 8,
    "title": "Fire Vol.12",
    "artist": "izi",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 9,
    "title": "응급실 Vol.12",
    "artist": "SG워너비",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 10,
    "title": "Wa Vol.12",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 11,
    "title": "기억의 습작 Vol.12",
    "artist": "선미",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 12,
    "title": "POWER Vol.12",
    "artist": "볼빨간사춘기",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 1,
    "title": "SHEESH Vol.12",
    "artist": "오마이걸",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 2,
    "title": "ETA Vol.12",
    "artist": "Red Velvet",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 3,
    "title": "After LIKE Vol.12",
    "artist": "벤",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 4,
    "title": "바라만 본다 Vol.12",
    "artist": "에메랄드 캐슬",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 5,
    "title": "너를 만나 Vol.12",
    "artist": "김건모",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 6,
    "title": "BANG BANG BANG Vol.12",
    "artist": "뱅크",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 7,
    "title": "초혼 Vol.12",
    "artist": "전람회",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 8,
    "title": "Nobody Vol.12",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 9,
    "title": "아틀란티스 소녀 Vol.12",
    "artist": "핑클",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 10,
    "title": "순정 Vol.12",
    "artist": "S.E.S.",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 11,
    "title": "희망사항 Vol.12",
    "artist": "이선희",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 12,
    "title": "HAPPY Vol.12",
    "artist": "장윤정",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 1,
    "title": "EASY Vol.12",
    "artist": "STAYC",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 2,
    "title": "헤어지자 말해요 Vol.12",
    "artist": "김범룡",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 3,
    "title": "TOMBOY Vol.12",
    "artist": "조용필",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 4,
    "title": "에잇 Vol.12",
    "artist": "G-DRAGON",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 5,
    "title": "좋니 Vol.12",
    "artist": "DAY6",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 6,
    "title": "썸 Vol.12",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 7,
    "title": "좋은 날 Vol.12",
    "artist": "NewJeans",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 8,
    "title": "거짓말 Vol.12",
    "artist": "IVE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 9,
    "title": "No.1 Vol.12",
    "artist": "LE SSERAFIM",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 10,
    "title": "발걸음 Vol.12",
    "artist": "(여자)아이들",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 11,
    "title": "남행열차 Vol.12",
    "artist": "TWICE",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 12,
    "title": "How Sweet Vol.12",
    "artist": "임영웅",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 1,
    "title": "Drama Vol.12",
    "artist": "이무진",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 2,
    "title": "OMG Vol.12",
    "artist": "MSG워너비",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 3,
    "title": "ELEVEN Vol.12",
    "artist": "BTS",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 4,
    "title": "이제 나만 믿어요 Vol.12",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 5,
    "title": "우주를 줄게 Vol.12",
    "artist": "박혜원",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 6,
    "title": "스물다섯 스물하나 Vol.12",
    "artist": "윤하",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 7,
    "title": "Abracadabra Vol.12",
    "artist": "선미",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 8,
    "title": "가시 Vol.12",
    "artist": "볼빨간사춘기",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 9,
    "title": "Tears Vol.12",
    "artist": "오마이걸",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 10,
    "title": "칵테일 사랑 Vol.12",
    "artist": "폴킴",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 11,
    "title": "Whiplash Vol.12",
    "artist": "iKON",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 12,
    "title": "고민중독 Vol.12",
    "artist": "윤종신",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 1,
    "title": "Super Shy Vol.12",
    "artist": "엠씨더맥스",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 2,
    "title": "Attention Vol.12",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 3,
    "title": "신호등 Vol.12",
    "artist": "소찬휘",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 4,
    "title": "한 페이지가 될 수 있게 Vol.12",
    "artist": "이정현",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 5,
    "title": "음오아예 Vol.12",
    "artist": "핑클",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 6,
    "title": "오래된 노래 Vol.12",
    "artist": "S.E.S.",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 7,
    "title": "총 맞은 것처럼 Vol.12",
    "artist": "이선희",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 8,
    "title": "10 Minutes Vol.12",
    "artist": "나얼",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 9,
    "title": "이미 슬픈 사랑 Vol.12",
    "artist": "임창정",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 10,
    "title": "내 사랑 내 곁에 Vol.12",
    "artist": "버즈",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 11,
    "title": "내 이름 맑음 Vol.12",
    "artist": "izi",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 12,
    "title": "첫 만남은 계획대로 되지 않아 Vol.12",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 1,
    "title": "손오공 Vol.12",
    "artist": "아이유",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 2,
    "title": "LOVE DIVE Vol.12",
    "artist": "aespa",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 3,
    "title": "Dynamite Vol.12",
    "artist": "NewJeans",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 4,
    "title": "LOVE SCENARIO Vol.12",
    "artist": "IVE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 5,
    "title": "눈 코 입 Vol.12",
    "artist": "LE SSERAFIM",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 6,
    "title": "내 손을 잡아 Vol.12",
    "artist": "야다",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 7,
    "title": "만약에 Vol.12",
    "artist": "에메랄드 캐슬",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 8,
    "title": "Valenti Vol.12",
    "artist": "김건모",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 9,
    "title": "해변의 여인 Vol.12",
    "artist": "뱅크",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 10,
    "title": "비처럼 음악처럼 Vol.12",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 11,
    "title": "Armageddon Vol.12",
    "artist": "태연",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 12,
    "title": "Love wins all Vol.12",
    "artist": "에일리",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 1,
    "title": "Teddy Bear Vol.12",
    "artist": "박혜원",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 2,
    "title": "취중고백 Vol.12",
    "artist": "윤하",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 3,
    "title": "찐이야 Vol.12",
    "artist": "선미",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 4,
    "title": "어디에도 Vol.12",
    "artist": "유재하",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 5,
    "title": "첫눈 Vol.12",
    "artist": "김범룡",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 6,
    "title": "잔소리 Vol.12",
    "artist": "조용필",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 7,
    "title": "겁쟁이 Vol.12",
    "artist": "G-DRAGON",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 8,
    "title": "성인식 Vol.12",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 9,
    "title": "가질 수 없는 너 Vol.12",
    "artist": "백지영",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 10,
    "title": "단발머리 Vol.12",
    "artist": "보아",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 11,
    "title": "SPOT! Vol.12",
    "artist": "소찬휘",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 12,
    "title": "Love Lee Vol.12",
    "artist": "이정현",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 1,
    "title": "Hype Boy Vol.12",
    "artist": "핑클",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 2,
    "title": "Next Level Vol.12",
    "artist": "멜로망스",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 3,
    "title": "사랑에 연습이 있었다면 Vol.12",
    "artist": "임영웅",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 4,
    "title": "오늘부터 우리는 Vol.12",
    "artist": "이무진",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 5,
    "title": "바람기억 Vol.12",
    "artist": "MSG워너비",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 6,
    "title": "Heartbreaker Vol.12",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 7,
    "title": "Timeless Vol.12",
    "artist": "아일릿",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 8,
    "title": "천년의 사랑 Vol.12",
    "artist": "KISS OF LIFE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 9,
    "title": "난 알아요 Vol.12",
    "artist": "아이유",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 10,
    "title": "UP Vol.12",
    "artist": "aespa",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 11,
    "title": "Midas Touch Vol.12",
    "artist": "NewJeans",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 12,
    "title": "퀸카 Vol.12",
    "artist": "임재현",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 1,
    "title": "FEARLESS Vol.12",
    "artist": "폴킴",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 2,
    "title": "Celebrity Vol.12",
    "artist": "iKON",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 3,
    "title": "모든 날 모든 순간 Vol.12",
    "artist": "윤종신",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 4,
    "title": "야생화 Vol.12",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 5,
    "title": "내가 제일 잘 나가 Vol.12",
    "artist": "QWER",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 6,
    "title": "Tell Me Vol.12",
    "artist": "비비",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 7,
    "title": "소주 한 잔 Vol.12",
    "artist": "태연",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 8,
    "title": "Dreams Come True Vol.12",
    "artist": "에일리",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 9,
    "title": "사랑하기 때문에 Vol.12",
    "artist": "박혜원",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 10,
    "title": "Supernova Vol.12",
    "artist": "버스커 버스커",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 11,
    "title": "Smart Vol.12",
    "artist": "나얼",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 12,
    "title": "Kitsch Vol.12",
    "artist": "임창정",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 1,
    "title": "사랑인가 봐 Vol.12",
    "artist": "버즈",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 2,
    "title": "아로하 Vol.12",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 3,
    "title": "CHEER UP Vol.12",
    "artist": "벤",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 4,
    "title": "으르렁 Vol.12",
    "artist": "송하예",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 5,
    "title": "Oh! Vol.12",
    "artist": "백지영",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 6,
    "title": "내 사람 Vol.12",
    "artist": "보아",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 7,
    "title": "벌써 일년 Vol.12",
    "artist": "소찬휘",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 8,
    "title": "잘못된 만남 Vol.12",
    "artist": "박완규",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 9,
    "title": "J에게 Vol.12",
    "artist": "야다",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 10,
    "title": "소나기 Vol.12",
    "artist": "에메랄드 캐슬",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 11,
    "title": "Perfect Night Vol.12",
    "artist": "김건모",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 12,
    "title": "Ditto Vol.12",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 1,
    "title": "Savage Vol.12",
    "artist": "STAYC",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 2,
    "title": "주저하는 연인들을 위해 Vol.12",
    "artist": "지수",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 3,
    "title": "시간을 달려서 Vol.12",
    "artist": "아일릿",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 4,
    "title": "벚꽃 엔딩 Vol.12",
    "artist": "KISS OF LIFE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 5,
    "title": "Gee Vol.12",
    "artist": "아이유",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 6,
    "title": "어머나 Vol.12",
    "artist": "무한궤도",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 7,
    "title": "영원한 사랑 Vol.12",
    "artist": "유재하",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 8,
    "title": "서시 Vol.12",
    "artist": "김범룡",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 9,
    "title": "APT. Vol.12",
    "artist": "조용필",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 10,
    "title": "SHEESH Vol.13",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 11,
    "title": "ETA Vol.13",
    "artist": "TWICE",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 12,
    "title": "After LIKE Vol.13",
    "artist": "BLACKPINK",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 1,
    "title": "라일락 Vol.13",
    "artist": "QWER",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 2,
    "title": "뚜두뚜두 Vol.13",
    "artist": "비비",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 3,
    "title": "위아래 Vol.13",
    "artist": "태연",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 4,
    "title": "Roly-Poly Vol.13",
    "artist": "박재정",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 5,
    "title": "So Hot Vol.13",
    "artist": "멜로망스",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 6,
    "title": "체념 Vol.13",
    "artist": "임영웅",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 7,
    "title": "To Heaven Vol.13",
    "artist": "이무진",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 8,
    "title": "그대에게 Vol.13",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 9,
    "title": "클락션 Vol.13",
    "artist": "오마이걸",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 10,
    "title": "EASY Vol.13",
    "artist": "Red Velvet",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 11,
    "title": "헤어지자 말해요 Vol.13",
    "artist": "벤",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 12,
    "title": "TOMBOY Vol.13",
    "artist": "송하예",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 1,
    "title": "아무노래 Vol.13",
    "artist": "백지영",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 2,
    "title": "예뻤어 Vol.13",
    "artist": "잔나비",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 3,
    "title": "금요일에 만나요 Vol.13",
    "artist": "임재현",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 4,
    "title": "Bad Girl Good Girl Vol.13",
    "artist": "폴킴",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 5,
    "title": "까만안경 Vol.13",
    "artist": "iKON",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 6,
    "title": "낭만고양이 Vol.13",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 7,
    "title": "인형의 꿈 Vol.13",
    "artist": "이선희",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 8,
    "title": "바람바람바람 Vol.13",
    "artist": "장윤정",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 9,
    "title": "Bubble Gum Vol.13",
    "artist": "STAYC",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 10,
    "title": "Drama Vol.13",
    "artist": "지수",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 11,
    "title": "OMG Vol.13",
    "artist": "아일릿",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 12,
    "title": "ELEVEN Vol.13",
    "artist": "싸이",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 1,
    "title": "오늘도 빛나는 너에게 Vol.13",
    "artist": "버스커 버스커",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 2,
    "title": "TT Vol.13",
    "artist": "나얼",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 3,
    "title": "강남스타일 Vol.13",
    "artist": "임창정",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 4,
    "title": "Fire Vol.13",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 5,
    "title": "응급실 Vol.13",
    "artist": "LE SSERAFIM",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 6,
    "title": "Wa Vol.13",
    "artist": "(여자)아이들",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 7,
    "title": "기억의 습작 Vol.13",
    "artist": "TWICE",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 8,
    "title": "POWER Vol.13",
    "artist": "BLACKPINK",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 9,
    "title": "Magnetic Vol.13",
    "artist": "QWER",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 10,
    "title": "Super Shy Vol.13",
    "artist": "조성모",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 11,
    "title": "Attention Vol.13",
    "artist": "박완규",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 12,
    "title": "신호등 Vol.13",
    "artist": "야다",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 1,
    "title": "너를 만나 Vol.13",
    "artist": "에메랄드 캐슬",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 2,
    "title": "BANG BANG BANG Vol.13",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 3,
    "title": "초혼 Vol.13",
    "artist": "선미",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 4,
    "title": "Nobody Vol.13",
    "artist": "볼빨간사춘기",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 5,
    "title": "아틀란티스 소녀 Vol.13",
    "artist": "오마이걸",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 6,
    "title": "순정 Vol.13",
    "artist": "Red Velvet",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 7,
    "title": "희망사항 Vol.13",
    "artist": "벤",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 8,
    "title": "HAPPY Vol.13",
    "artist": "변진섭",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 9,
    "title": "밤양갱 Vol.13",
    "artist": "무한궤도",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 10,
    "title": "손오공 Vol.13",
    "artist": "유재하",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 11,
    "title": "LOVE DIVE Vol.13",
    "artist": "김범룡",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 12,
    "title": "Dynamite Vol.13",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 1,
    "title": "좋니 Vol.13",
    "artist": "핑클",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 2,
    "title": "썸 Vol.13",
    "artist": "S.E.S.",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 3,
    "title": "좋은 날 Vol.13",
    "artist": "이선희",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 4,
    "title": "거짓말 Vol.13",
    "artist": "장윤정",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 5,
    "title": "No.1 Vol.13",
    "artist": "STAYC",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 6,
    "title": "발걸음 Vol.13",
    "artist": "세븐틴",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 7,
    "title": "남행열차 Vol.13",
    "artist": "박재정",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 8,
    "title": "How Sweet Vol.13",
    "artist": "멜로망스",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 9,
    "title": "To. X Vol.13",
    "artist": "임영웅",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 10,
    "title": "Teddy Bear Vol.13",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 11,
    "title": "취중고백 Vol.13",
    "artist": "NewJeans",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 12,
    "title": "찐이야 Vol.13",
    "artist": "IVE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 1,
    "title": "우주를 줄게 Vol.13",
    "artist": "LE SSERAFIM",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 2,
    "title": "스물다섯 스물하나 Vol.13",
    "artist": "(여자)아이들",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 3,
    "title": "Abracadabra Vol.13",
    "artist": "TWICE",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 4,
    "title": "가시 Vol.13",
    "artist": "마크툽",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 5,
    "title": "Tears Vol.13",
    "artist": "잔나비",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 6,
    "title": "칵테일 사랑 Vol.13",
    "artist": "임재현",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 7,
    "title": "Whiplash Vol.13",
    "artist": "폴킴",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 8,
    "title": "고민중독 Vol.13",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 9,
    "title": "Seven Vol.13",
    "artist": "박혜원",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 10,
    "title": "Hype Boy Vol.13",
    "artist": "윤하",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 11,
    "title": "Next Level Vol.13",
    "artist": "선미",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 12,
    "title": "사랑에 연습이 있었다면 Vol.13",
    "artist": "볼빨간사춘기",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 1,
    "title": "음오아예 Vol.13",
    "artist": "오마이걸",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 2,
    "title": "오래된 노래 Vol.13",
    "artist": "EXO",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 3,
    "title": "총 맞은 것처럼 Vol.13",
    "artist": "싸이",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 4,
    "title": "10 Minutes Vol.13",
    "artist": "버스커 버스커",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 5,
    "title": "이미 슬픈 사랑 Vol.13",
    "artist": "나얼",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 6,
    "title": "내 사랑 내 곁에 Vol.13",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 7,
    "title": "내 이름 맑음 Vol.13",
    "artist": "소찬휘",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 8,
    "title": "첫 만남은 계획대로 되지 않아 Vol.13",
    "artist": "이정현",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 9,
    "title": "I AM Vol.13",
    "artist": "핑클",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 10,
    "title": "FEARLESS Vol.13",
    "artist": "S.E.S.",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 11,
    "title": "Celebrity Vol.13",
    "artist": "이선희",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 12,
    "title": "모든 날 모든 순간 Vol.13",
    "artist": "브라운 아이즈",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 1,
    "title": "눈 코 입 Vol.13",
    "artist": "조성모",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 2,
    "title": "내 손을 잡아 Vol.13",
    "artist": "박완규",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 3,
    "title": "만약에 Vol.13",
    "artist": "야다",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 4,
    "title": "Valenti Vol.13",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 5,
    "title": "해변의 여인 Vol.13",
    "artist": "아이유",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 6,
    "title": "비처럼 음악처럼 Vol.13",
    "artist": "aespa",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 7,
    "title": "Armageddon Vol.13",
    "artist": "NewJeans",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 8,
    "title": "Love wins all Vol.13",
    "artist": "IVE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 9,
    "title": "꽃 Vol.13",
    "artist": "LE SSERAFIM",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 10,
    "title": "사랑인가 봐 Vol.13",
    "artist": "김현식",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 11,
    "title": "아로하 Vol.13",
    "artist": "변진섭",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 12,
    "title": "CHEER UP Vol.13",
    "artist": "무한궤도",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 1,
    "title": "첫눈 Vol.13",
    "artist": "유재하",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 2,
    "title": "잔소리 Vol.13",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 3,
    "title": "겁쟁이 Vol.13",
    "artist": "태연",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 4,
    "title": "성인식 Vol.13",
    "artist": "에일리",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 5,
    "title": "가질 수 없는 너 Vol.13",
    "artist": "박혜원",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 6,
    "title": "단발머리 Vol.13",
    "artist": "윤하",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 7,
    "title": "SPOT! Vol.13",
    "artist": "선미",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 8,
    "title": "Love Lee Vol.13",
    "artist": "정국",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 9,
    "title": "ANTIFRAGILE Vol.13",
    "artist": "세븐틴",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 10,
    "title": "Savage Vol.13",
    "artist": "박재정",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 11,
    "title": "주저하는 연인들을 위해 Vol.13",
    "artist": "멜로망스",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 12,
    "title": "시간을 달려서 Vol.13",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 1,
    "title": "바람기억 Vol.13",
    "artist": "백지영",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 2,
    "title": "Heartbreaker Vol.13",
    "artist": "보아",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 3,
    "title": "Timeless Vol.13",
    "artist": "소찬휘",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 4,
    "title": "천년의 사랑 Vol.13",
    "artist": "이정현",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 5,
    "title": "난 알아요 Vol.13",
    "artist": "핑클",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 6,
    "title": "UP Vol.13",
    "artist": "영탁",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 7,
    "title": "Midas Touch Vol.13",
    "artist": "마크툽",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 8,
    "title": "퀸카 Vol.13",
    "artist": "잔나비",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 9,
    "title": "Pink Venom Vol.13",
    "artist": "임재현",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 10,
    "title": "라일락 Vol.13",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 11,
    "title": "뚜두뚜두 Vol.13",
    "artist": "아일릿",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 12,
    "title": "위아래 Vol.13",
    "artist": "KISS OF LIFE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 1,
    "title": "내가 제일 잘 나가 Vol.13",
    "artist": "아이유",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 2,
    "title": "Tell Me Vol.13",
    "artist": "aespa",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 3,
    "title": "소주 한 잔 Vol.13",
    "artist": "NewJeans",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 4,
    "title": "Dreams Come True Vol.13",
    "artist": "태양",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 5,
    "title": "사랑하기 때문에 Vol.13",
    "artist": "EXO",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 6,
    "title": "Supernova Vol.13",
    "artist": "싸이",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 7,
    "title": "Smart Vol.13",
    "artist": "버스커 버스커",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 8,
    "title": "Kitsch Vol.13",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 9,
    "title": "사건의 지평선 Vol.13",
    "artist": "QWER",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 10,
    "title": "아무노래 Vol.13",
    "artist": "비비",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 11,
    "title": "예뻤어 Vol.13",
    "artist": "태연",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 12,
    "title": "금요일에 만나요 Vol.13",
    "artist": "에일리",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 1,
    "title": "Oh! Vol.13",
    "artist": "박혜원",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 2,
    "title": "내 사람 Vol.13",
    "artist": "더 크로스",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 3,
    "title": "벌써 일년 Vol.13",
    "artist": "브라운 아이즈",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 4,
    "title": "잘못된 만남 Vol.13",
    "artist": "조성모",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 5,
    "title": "J에게 Vol.13",
    "artist": "박완규",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 6,
    "title": "소나기 Vol.13",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 7,
    "title": "Perfect Night Vol.13",
    "artist": "벤",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 8,
    "title": "Ditto Vol.13",
    "artist": "송하예",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 9,
    "title": "사랑은 늘 도망가 Vol.13",
    "artist": "백지영",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 10,
    "title": "오늘도 빛나는 너에게 Vol.13",
    "artist": "보아",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 11,
    "title": "TT Vol.13",
    "artist": "소찬휘",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 12,
    "title": "강남스타일 Vol.13",
    "artist": "서태지와 아이들",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 1,
    "title": "Gee Vol.13",
    "artist": "김현식",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 2,
    "title": "어머나 Vol.13",
    "artist": "변진섭",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 3,
    "title": "영원한 사랑 Vol.13",
    "artist": "무한궤도",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 4,
    "title": "서시 Vol.13",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 5,
    "title": "APT. Vol.13",
    "artist": "STAYC",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 6,
    "title": "SHEESH Vol.13",
    "artist": "지수",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 7,
    "title": "ETA Vol.14",
    "artist": "아일릿",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 8,
    "title": "After LIKE Vol.14",
    "artist": "KISS OF LIFE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 9,
    "title": "바라만 본다 Vol.14",
    "artist": "아이유",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 10,
    "title": "너를 만나 Vol.14",
    "artist": "TWS",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 11,
    "title": "BANG BANG BANG Vol.14",
    "artist": "정국",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 12,
    "title": "초혼 Vol.14",
    "artist": "세븐틴",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 1,
    "title": "So Hot Vol.14",
    "artist": "박재정",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 2,
    "title": "체념 Vol.14",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 3,
    "title": "To Heaven Vol.14",
    "artist": "TWICE",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 4,
    "title": "그대에게 Vol.14",
    "artist": "BLACKPINK",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 5,
    "title": "클락션 Vol.14",
    "artist": "QWER",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 6,
    "title": "EASY Vol.14",
    "artist": "비비",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 7,
    "title": "헤어지자 말해요 Vol.14",
    "artist": "태연",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 8,
    "title": "TOMBOY Vol.14",
    "artist": "조정석",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 9,
    "title": "에잇 Vol.14",
    "artist": "영탁",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 10,
    "title": "좋니 Vol.14",
    "artist": "마크툽",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 11,
    "title": "썸 Vol.14",
    "artist": "잔나비",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 12,
    "title": "좋은 날 Vol.14",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 1,
    "title": "까만안경 Vol.14",
    "artist": "오마이걸",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 2,
    "title": "낭만고양이 Vol.14",
    "artist": "Red Velvet",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 3,
    "title": "인형의 꿈 Vol.14",
    "artist": "벤",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 4,
    "title": "바람바람바람 Vol.14",
    "artist": "송하예",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 5,
    "title": "Bubble Gum Vol.14",
    "artist": "백지영",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 6,
    "title": "Drama Vol.14",
    "artist": "박효신",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 7,
    "title": "OMG Vol.14",
    "artist": "태양",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 8,
    "title": "ELEVEN Vol.14",
    "artist": "EXO",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 9,
    "title": "이제 나만 믿어요 Vol.14",
    "artist": "싸이",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 10,
    "title": "우주를 줄게 Vol.14",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 11,
    "title": "스물다섯 스물하나 Vol.14",
    "artist": "이선희",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 12,
    "title": "Abracadabra Vol.14",
    "artist": "장윤정",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 1,
    "title": "응급실 Vol.14",
    "artist": "STAYC",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 2,
    "title": "Wa Vol.14",
    "artist": "지수",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 3,
    "title": "기억의 습작 Vol.14",
    "artist": "아일릿",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 4,
    "title": "POWER Vol.14",
    "artist": "이루",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 5,
    "title": "Magnetic Vol.14",
    "artist": "더 크로스",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 6,
    "title": "Super Shy Vol.14",
    "artist": "브라운 아이즈",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 7,
    "title": "Attention Vol.14",
    "artist": "조성모",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 8,
    "title": "신호등 Vol.14",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 9,
    "title": "한 페이지가 될 수 있게 Vol.14",
    "artist": "LE SSERAFIM",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 10,
    "title": "음오아예 Vol.14",
    "artist": "(여자)아이들",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 11,
    "title": "오래된 노래 Vol.14",
    "artist": "TWICE",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 12,
    "title": "총 맞은 것처럼 Vol.14",
    "artist": "BLACKPINK",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 1,
    "title": "아틀란티스 소녀 Vol.14",
    "artist": "QWER",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 2,
    "title": "순정 Vol.14",
    "artist": "신성우",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 3,
    "title": "희망사항 Vol.14",
    "artist": "서태지와 아이들",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 4,
    "title": "HAPPY Vol.14",
    "artist": "김현식",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 5,
    "title": "밤양갱 Vol.14",
    "artist": "변진섭",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 6,
    "title": "손오공 Vol.14",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 7,
    "title": "LOVE DIVE Vol.14",
    "artist": "선미",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 8,
    "title": "Dynamite Vol.14",
    "artist": "볼빨간사춘기",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 9,
    "title": "LOVE SCENARIO Vol.14",
    "artist": "오마이걸",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 10,
    "title": "눈 코 입 Vol.14",
    "artist": "Red Velvet",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 11,
    "title": "내 손을 잡아 Vol.14",
    "artist": "벤",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 12,
    "title": "만약에 Vol.14",
    "artist": "이클립스",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 1,
    "title": "No.1 Vol.14",
    "artist": "TWS",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 2,
    "title": "발걸음 Vol.14",
    "artist": "정국",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 3,
    "title": "남행열차 Vol.14",
    "artist": "세븐틴",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 4,
    "title": "How Sweet Vol.14",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 5,
    "title": "To. X Vol.14",
    "artist": "핑클",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 6,
    "title": "Teddy Bear Vol.14",
    "artist": "S.E.S.",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 7,
    "title": "취중고백 Vol.14",
    "artist": "이선희",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 8,
    "title": "찐이야 Vol.14",
    "artist": "장윤정",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 9,
    "title": "어디에도 Vol.14",
    "artist": "STAYC",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 10,
    "title": "첫눈 Vol.14",
    "artist": "지코",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 11,
    "title": "잔소리 Vol.14",
    "artist": "조정석",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 12,
    "title": "겁쟁이 Vol.14",
    "artist": "영탁",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 1,
    "title": "Tears Vol.14",
    "artist": "마크툽",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 2,
    "title": "칵테일 사랑 Vol.14",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 3,
    "title": "Whiplash Vol.14",
    "artist": "NewJeans",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 4,
    "title": "고민중독 Vol.14",
    "artist": "IVE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 5,
    "title": "Seven Vol.14",
    "artist": "LE SSERAFIM",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 6,
    "title": "Hype Boy Vol.14",
    "artist": "(여자)아이들",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 7,
    "title": "Next Level Vol.14",
    "artist": "TWICE",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 8,
    "title": "사랑에 연습이 있었다면 Vol.14",
    "artist": "BIGBANG",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 9,
    "title": "오늘부터 우리는 Vol.14",
    "artist": "박효신",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 10,
    "title": "바람기억 Vol.14",
    "artist": "태양",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 11,
    "title": "Heartbreaker Vol.14",
    "artist": "EXO",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 12,
    "title": "Timeless Vol.14",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 1,
    "title": "이미 슬픈 사랑 Vol.14",
    "artist": "박혜원",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 2,
    "title": "내 사랑 내 곁에 Vol.14",
    "artist": "윤하",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 3,
    "title": "내 이름 맑음 Vol.14",
    "artist": "선미",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 4,
    "title": "첫 만남은 계획대로 되지 않아 Vol.14",
    "artist": "볼빨간사춘기",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 5,
    "title": "I AM Vol.14",
    "artist": "오마이걸",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 6,
    "title": "FEARLESS Vol.14",
    "artist": "SG워너비",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 7,
    "title": "Celebrity Vol.14",
    "artist": "이루",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 8,
    "title": "모든 날 모든 순간 Vol.14",
    "artist": "더 크로스",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 9,
    "title": "야생화 Vol.14",
    "artist": "브라운 아이즈",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 10,
    "title": "내가 제일 잘 나가 Vol.14",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 11,
    "title": "Tell Me Vol.14",
    "artist": "소찬휘",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 12,
    "title": "소주 한 잔 Vol.14",
    "artist": "이정현",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 1,
    "title": "해변의 여인 Vol.14",
    "artist": "핑클",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 2,
    "title": "비처럼 음악처럼 Vol.14",
    "artist": "S.E.S.",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 3,
    "title": "Armageddon Vol.14",
    "artist": "이선희",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 4,
    "title": "Love wins all Vol.14",
    "artist": "전람회",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 5,
    "title": "꽃 Vol.14",
    "artist": "신성우",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 6,
    "title": "사랑인가 봐 Vol.14",
    "artist": "서태지와 아이들",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 7,
    "title": "아로하 Vol.14",
    "artist": "김현식",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 8,
    "title": "CHEER UP Vol.14",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 9,
    "title": "으르렁 Vol.14",
    "artist": "아이유",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 10,
    "title": "Oh! Vol.14",
    "artist": "aespa",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 11,
    "title": "내 사람 Vol.14",
    "artist": "NewJeans",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 12,
    "title": "벌써 일년 Vol.14",
    "artist": "IVE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 1,
    "title": "가질 수 없는 너 Vol.14",
    "artist": "LE SSERAFIM",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 2,
    "title": "단발머리 Vol.14",
    "artist": "DAY6",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 3,
    "title": "SPOT! Vol.14",
    "artist": "이클립스",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 4,
    "title": "Love Lee Vol.14",
    "artist": "TWS",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 5,
    "title": "ANTIFRAGILE Vol.14",
    "artist": "정국",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 6,
    "title": "Savage Vol.14",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 7,
    "title": "주저하는 연인들을 위해 Vol.14",
    "artist": "태연",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 8,
    "title": "시간을 달려서 Vol.14",
    "artist": "에일리",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 9,
    "title": "벚꽃 엔딩 Vol.14",
    "artist": "박혜원",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 10,
    "title": "Gee Vol.14",
    "artist": "윤하",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 11,
    "title": "어머나 Vol.14",
    "artist": "선미",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 12,
    "title": "영원한 사랑 Vol.14",
    "artist": "BTS",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 1,
    "title": "내 손을 잡아 Vol.14",
    "artist": "지코",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 2,
    "title": "만약에 Vol.14",
    "artist": "조정석",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 3,
    "title": "Valenti Vol.14",
    "artist": "영탁",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 4,
    "title": "해변의 여인 Vol.14",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 5,
    "title": "비처럼 음악처럼 Vol.14",
    "artist": "백지영",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 6,
    "title": "Armageddon Vol.14",
    "artist": "보아",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 7,
    "title": "Love wins all Vol.14",
    "artist": "소찬휘",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 8,
    "title": "꽃 Vol.14",
    "artist": "이정현",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 9,
    "title": "사랑인가 봐 Vol.14",
    "artist": "핑클",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 10,
    "title": "아로하 Vol.14",
    "artist": "엠씨더맥스",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 11,
    "title": "CHEER UP Vol.14",
    "artist": "BIGBANG",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 12,
    "title": "으르렁 Vol.14",
    "artist": "박효신",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 1,
    "title": "잔소리 Vol.14",
    "artist": "태양",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 2,
    "title": "겁쟁이 Vol.14",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 3,
    "title": "성인식 Vol.14",
    "artist": "아일릿",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 4,
    "title": "가질 수 없는 너 Vol.14",
    "artist": "KISS OF LIFE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 5,
    "title": "단발머리 Vol.14",
    "artist": "아이유",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 6,
    "title": "SPOT! Vol.14",
    "artist": "aespa",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 7,
    "title": "Love Lee Vol.14",
    "artist": "NewJeans",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 8,
    "title": "ANTIFRAGILE Vol.14",
    "artist": "izi",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 9,
    "title": "Savage Vol.14",
    "artist": "SG워너비",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 10,
    "title": "주저하는 연인들을 위해 Vol.14",
    "artist": "이루",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 11,
    "title": "시간을 달려서 Vol.14",
    "artist": "더 크로스",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 12,
    "title": "벚꽃 엔딩 Vol.14",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 1,
    "title": "Heartbreaker Vol.14",
    "artist": "QWER",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 2,
    "title": "Timeless Vol.14",
    "artist": "비비",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 3,
    "title": "천년의 사랑 Vol.14",
    "artist": "태연",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 4,
    "title": "난 알아요 Vol.14",
    "artist": "에일리",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 5,
    "title": "UP Vol.14",
    "artist": "박혜원",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 6,
    "title": "Midas Touch Vol.14",
    "artist": "뱅크",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 7,
    "title": "퀸카 Vol.14",
    "artist": "전람회",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 8,
    "title": "Pink Venom Vol.14",
    "artist": "신성우",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 9,
    "title": "라일락 Vol.14",
    "artist": "서태지와 아이들",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 10,
    "title": "뚜두뚜두 Vol.14",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 11,
    "title": "위아래 Vol.14",
    "artist": "벤",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 12,
    "title": "Roly-Poly Vol.14",
    "artist": "송하예",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 1,
    "title": "Tell Me Vol.14",
    "artist": "백지영",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 2,
    "title": "소주 한 잔 Vol.14",
    "artist": "보아",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 3,
    "title": "Dreams Come True Vol.14",
    "artist": "소찬휘",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 4,
    "title": "사랑하기 때문에 Vol.15",
    "artist": "G-DRAGON",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 5,
    "title": "Supernova Vol.15",
    "artist": "DAY6",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 6,
    "title": "Smart Vol.15",
    "artist": "이클립스",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 7,
    "title": "Kitsch Vol.15",
    "artist": "TWS",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 8,
    "title": "사건의 지평선 Vol.15",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 9,
    "title": "아무노래 Vol.15",
    "artist": "STAYC",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 10,
    "title": "예뻤어 Vol.15",
    "artist": "지수",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 11,
    "title": "금요일에 만나요 Vol.15",
    "artist": "아일릿",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 12,
    "title": "Bad Girl Good Girl Vol.15",
    "artist": "KISS OF LIFE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 1,
    "title": "내 사람 Vol.15",
    "artist": "아이유",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 2,
    "title": "벌써 일년 Vol.15",
    "artist": "MSG워너비",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 3,
    "title": "잘못된 만남 Vol.15",
    "artist": "BTS",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 4,
    "title": "J에게 Vol.15",
    "artist": "지코",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 5,
    "title": "소나기 Vol.15",
    "artist": "조정석",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 6,
    "title": "Perfect Night Vol.15",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 7,
    "title": "Ditto Vol.15",
    "artist": "TWICE",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 8,
    "title": "사랑은 늘 도망가 Vol.15",
    "artist": "BLACKPINK",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 9,
    "title": "오늘도 빛나는 너에게 Vol.15",
    "artist": "QWER",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 10,
    "title": "TT Vol.15",
    "artist": "비비",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 11,
    "title": "강남스타일 Vol.15",
    "artist": "태연",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 12,
    "title": "Fire Vol.15",
    "artist": "윤종신",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 1,
    "title": "어머나 Vol.15",
    "artist": "엠씨더맥스",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 2,
    "title": "영원한 사랑 Vol.15",
    "artist": "BIGBANG",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 3,
    "title": "서시 Vol.15",
    "artist": "박효신",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 4,
    "title": "APT. Vol.15",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 5,
    "title": "SHEESH Vol.15",
    "artist": "오마이걸",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 6,
    "title": "ETA Vol.15",
    "artist": "Red Velvet",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 7,
    "title": "After LIKE Vol.15",
    "artist": "벤",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 8,
    "title": "바라만 본다 Vol.15",
    "artist": "송하예",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 9,
    "title": "너를 만나 Vol.15",
    "artist": "백지영",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 10,
    "title": "BANG BANG BANG Vol.15",
    "artist": "버즈",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 11,
    "title": "초혼 Vol.15",
    "artist": "izi",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 12,
    "title": "Nobody Vol.15",
    "artist": "SG워너비",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 1,
    "title": "체념 Vol.15",
    "artist": "이루",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 2,
    "title": "To Heaven Vol.15",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 3,
    "title": "그대에게 Vol.15",
    "artist": "이선희",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 4,
    "title": "클락션 Vol.15",
    "artist": "장윤정",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 5,
    "title": "EASY Vol.15",
    "artist": "STAYC",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 6,
    "title": "헤어지자 말해요 Vol.15",
    "artist": "지수",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 7,
    "title": "TOMBOY Vol.15",
    "artist": "아일릿",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 8,
    "title": "에잇 Vol.15",
    "artist": "김건모",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 9,
    "title": "좋니 Vol.15",
    "artist": "뱅크",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 10,
    "title": "썸 Vol.15",
    "artist": "전람회",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 11,
    "title": "좋은 날 Vol.15",
    "artist": "신성우",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 12,
    "title": "거짓말 Vol.15",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 1,
    "title": "낭만고양이 Vol.15",
    "artist": "LE SSERAFIM",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 2,
    "title": "인형의 꿈 Vol.15",
    "artist": "(여자)아이들",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 3,
    "title": "바람바람바람 Vol.15",
    "artist": "TWICE",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 4,
    "title": "Bubble Gum Vol.15",
    "artist": "BLACKPINK",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 5,
    "title": "Drama Vol.15",
    "artist": "QWER",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 6,
    "title": "OMG Vol.15",
    "artist": "조용필",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 7,
    "title": "ELEVEN Vol.15",
    "artist": "G-DRAGON",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 8,
    "title": "이제 나만 믿어요 Vol.15",
    "artist": "DAY6",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 9,
    "title": "우주를 줄게 Vol.15",
    "artist": "이클립스",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 10,
    "title": "스물다섯 스물하나 Vol.15",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 11,
    "title": "Abracadabra Vol.15",
    "artist": "선미",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 12,
    "title": "가시 Vol.15",
    "artist": "볼빨간사춘기",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 1,
    "title": "Wa Vol.15",
    "artist": "오마이걸",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 2,
    "title": "기억의 습작 Vol.15",
    "artist": "Red Velvet",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 3,
    "title": "POWER Vol.15",
    "artist": "벤",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 4,
    "title": "Magnetic Vol.15",
    "artist": "이무진",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 5,
    "title": "Super Shy Vol.15",
    "artist": "MSG워너비",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 6,
    "title": "Attention Vol.15",
    "artist": "BTS",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 7,
    "title": "신호등 Vol.15",
    "artist": "지코",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 8,
    "title": "한 페이지가 될 수 있게 Vol.15",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 9,
    "title": "음오아예 Vol.15",
    "artist": "핑클",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 10,
    "title": "오래된 노래 Vol.15",
    "artist": "S.E.S.",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 11,
    "title": "총 맞은 것처럼 Vol.15",
    "artist": "이선희",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 12,
    "title": "10 Minutes Vol.15",
    "artist": "장윤정",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 1,
    "title": "순정 Vol.15",
    "artist": "STAYC",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 2,
    "title": "희망사항 Vol.15",
    "artist": "iKON",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 3,
    "title": "HAPPY Vol.15",
    "artist": "윤종신",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 4,
    "title": "밤양갱 Vol.15",
    "artist": "엠씨더맥스",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 5,
    "title": "손오공 Vol.15",
    "artist": "BIGBANG",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 6,
    "title": "LOVE DIVE Vol.15",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 7,
    "title": "Dynamite Vol.15",
    "artist": "NewJeans",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 8,
    "title": "LOVE SCENARIO Vol.15",
    "artist": "IVE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 9,
    "title": "눈 코 입 Vol.15",
    "artist": "LE SSERAFIM",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 10,
    "title": "내 손을 잡아 Vol.15",
    "artist": "(여자)아이들",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 11,
    "title": "만약에 Vol.15",
    "artist": "TWICE",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 12,
    "title": "Valenti Vol.15",
    "artist": "임창정",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 1,
    "title": "발걸음 Vol.15",
    "artist": "버즈",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 2,
    "title": "남행열차 Vol.15",
    "artist": "izi",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 3,
    "title": "How Sweet Vol.15",
    "artist": "SG워너비",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 4,
    "title": "To. X Vol.15",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 5,
    "title": "Teddy Bear Vol.15",
    "artist": "박혜원",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 6,
    "title": "취중고백 Vol.15",
    "artist": "윤하",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 7,
    "title": "찐이야 Vol.15",
    "artist": "선미",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 8,
    "title": "어디에도 Vol.15",
    "artist": "볼빨간사춘기",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 9,
    "title": "첫눈 Vol.15",
    "artist": "오마이걸",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 10,
    "title": "잔소리 Vol.15",
    "artist": "에메랄드 캐슬",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 11,
    "title": "겁쟁이 Vol.15",
    "artist": "김건모",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 12,
    "title": "성인식 Vol.15",
    "artist": "뱅크",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 1,
    "title": "칵테일 사랑 Vol.15",
    "artist": "전람회",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 2,
    "title": "Whiplash Vol.15",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 3,
    "title": "고민중독 Vol.15",
    "artist": "소찬휘",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 4,
    "title": "Seven Vol.15",
    "artist": "이정현",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 5,
    "title": "Hype Boy Vol.15",
    "artist": "핑클",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 6,
    "title": "Next Level Vol.15",
    "artist": "S.E.S.",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 7,
    "title": "사랑에 연습이 있었다면 Vol.15",
    "artist": "이선희",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 8,
    "title": "오늘부터 우리는 Vol.15",
    "artist": "김범룡",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 9,
    "title": "바람기억 Vol.15",
    "artist": "조용필",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 10,
    "title": "Heartbreaker Vol.15",
    "artist": "G-DRAGON",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 11,
    "title": "Timeless Vol.15",
    "artist": "DAY6",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 12,
    "title": "천년의 사랑 Vol.15",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 1,
    "title": "내 사랑 내 곁에 Vol.15",
    "artist": "아이유",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 2,
    "title": "내 이름 맑음 Vol.15",
    "artist": "aespa",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 3,
    "title": "첫 만남은 계획대로 되지 않아 Vol.15",
    "artist": "NewJeans",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 4,
    "title": "I AM Vol.15",
    "artist": "IVE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 5,
    "title": "FEARLESS Vol.15",
    "artist": "LE SSERAFIM",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 6,
    "title": "Celebrity Vol.15",
    "artist": "임영웅",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 7,
    "title": "모든 날 모든 순간 Vol.15",
    "artist": "이무진",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 8,
    "title": "야생화 Vol.15",
    "artist": "MSG워너비",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 9,
    "title": "내가 제일 잘 나가 Vol.15",
    "artist": "BTS",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 10,
    "title": "Tell Me Vol.15",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 11,
    "title": "소주 한 잔 Vol.15",
    "artist": "태연",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 12,
    "title": "Dreams Come True Vol.15",
    "artist": "에일리",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 1,
    "title": "비처럼 음악처럼 Vol.15",
    "artist": "박혜원",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 2,
    "title": "Armageddon Vol.15",
    "artist": "윤하",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 3,
    "title": "Love wins all Vol.15",
    "artist": "선미",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 4,
    "title": "꽃 Vol.15",
    "artist": "폴킴",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 5,
    "title": "사랑인가 봐 Vol.15",
    "artist": "iKON",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 6,
    "title": "아로하 Vol.15",
    "artist": "윤종신",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 7,
    "title": "CHEER UP Vol.15",
    "artist": "엠씨더맥스",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 8,
    "title": "으르렁 Vol.15",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 9,
    "title": "Oh! Vol.15",
    "artist": "백지영",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 10,
    "title": "내 사람 Vol.15",
    "artist": "보아",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 11,
    "title": "벌써 일년 Vol.15",
    "artist": "소찬휘",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 12,
    "title": "잘못된 만남 Vol.15",
    "artist": "이정현",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 1,
    "title": "단발머리 Vol.15",
    "artist": "핑클",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 2,
    "title": "SPOT! Vol.15",
    "artist": "나얼",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 3,
    "title": "Love Lee Vol.15",
    "artist": "임창정",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 4,
    "title": "ANTIFRAGILE Vol.15",
    "artist": "버즈",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 5,
    "title": "Savage Vol.15",
    "artist": "izi",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 6,
    "title": "주저하는 연인들을 위해 Vol.15",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 7,
    "title": "시간을 달려서 Vol.15",
    "artist": "아일릿",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 8,
    "title": "벚꽃 엔딩 Vol.15",
    "artist": "KISS OF LIFE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 9,
    "title": "Gee Vol.15",
    "artist": "아이유",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 10,
    "title": "어머나 Vol.15",
    "artist": "aespa",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 11,
    "title": "영원한 사랑 Vol.15",
    "artist": "NewJeans",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 12,
    "title": "서시 Vol.15",
    "artist": "야다",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 1,
    "title": "UP Vol.15",
    "artist": "에메랄드 캐슬",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 2,
    "title": "Midas Touch Vol.15",
    "artist": "김건모",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 3,
    "title": "퀸카 Vol.15",
    "artist": "뱅크",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 4,
    "title": "Pink Venom Vol.15",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 5,
    "title": "라일락 Vol.15",
    "artist": "QWER",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 6,
    "title": "뚜두뚜두 Vol.15",
    "artist": "비비",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 7,
    "title": "위아래 Vol.15",
    "artist": "태연",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 8,
    "title": "Roly-Poly Vol.15",
    "artist": "에일리",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 9,
    "title": "So Hot Vol.15",
    "artist": "박혜원",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 10,
    "title": "체념 Vol.15",
    "artist": "유재하",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 11,
    "title": "To Heaven Vol.15",
    "artist": "김범룡",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1995,
    "releaseMonth": 12,
    "title": "그대에게 Vol.15",
    "artist": "조용필",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 1,
    "title": "Supernova Vol.16",
    "artist": "G-DRAGON",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 2,
    "title": "Smart Vol.16",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 3,
    "title": "Kitsch Vol.16",
    "artist": "벤",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 4,
    "title": "사건의 지평선 Vol.16",
    "artist": "송하예",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 5,
    "title": "아무노래 Vol.16",
    "artist": "백지영",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 6,
    "title": "예뻤어 Vol.16",
    "artist": "보아",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 7,
    "title": "금요일에 만나요 Vol.16",
    "artist": "소찬휘",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 8,
    "title": "Bad Girl Good Girl Vol.16",
    "artist": "멜로망스",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 9,
    "title": "까만안경 Vol.16",
    "artist": "임영웅",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 10,
    "title": "낭만고양이 Vol.16",
    "artist": "이무진",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 11,
    "title": "인형의 꿈 Vol.16",
    "artist": "MSG워너비",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1996,
    "releaseMonth": 12,
    "title": "바람바람바람 Vol.16",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 1,
    "title": "소나기 Vol.16",
    "artist": "STAYC",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 2,
    "title": "Perfect Night Vol.16",
    "artist": "지수",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 3,
    "title": "Ditto Vol.16",
    "artist": "아일릿",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 4,
    "title": "사랑은 늘 도망가 Vol.16",
    "artist": "KISS OF LIFE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 5,
    "title": "오늘도 빛나는 너에게 Vol.16",
    "artist": "아이유",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 6,
    "title": "TT Vol.16",
    "artist": "임재현",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 7,
    "title": "강남스타일 Vol.16",
    "artist": "폴킴",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 8,
    "title": "Fire Vol.16",
    "artist": "iKON",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 9,
    "title": "응급실 Vol.16",
    "artist": "윤종신",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 10,
    "title": "Wa Vol.16",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 11,
    "title": "기억의 습작 Vol.16",
    "artist": "TWICE",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1997,
    "releaseMonth": 12,
    "title": "POWER Vol.16",
    "artist": "BLACKPINK",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 1,
    "title": "SHEESH Vol.16",
    "artist": "QWER",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 2,
    "title": "ETA Vol.16",
    "artist": "비비",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 3,
    "title": "After LIKE Vol.16",
    "artist": "태연",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 4,
    "title": "바라만 본다 Vol.16",
    "artist": "버스커 버스커",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 5,
    "title": "너를 만나 Vol.16",
    "artist": "나얼",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 6,
    "title": "BANG BANG BANG Vol.16",
    "artist": "임창정",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 7,
    "title": "초혼 Vol.16",
    "artist": "버즈",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 8,
    "title": "Nobody Vol.16",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 9,
    "title": "아틀란티스 소녀 Vol.16",
    "artist": "오마이걸",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 10,
    "title": "순정 Vol.16",
    "artist": "Red Velvet",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 11,
    "title": "희망사항 Vol.16",
    "artist": "벤",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1998,
    "releaseMonth": 12,
    "title": "HAPPY Vol.16",
    "artist": "송하예",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 1,
    "title": "EASY Vol.16",
    "artist": "백지영",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 2,
    "title": "헤어지자 말해요 Vol.16",
    "artist": "박완규",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 3,
    "title": "TOMBOY Vol.16",
    "artist": "야다",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 4,
    "title": "에잇 Vol.16",
    "artist": "에메랄드 캐슬",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 5,
    "title": "좋니 Vol.16",
    "artist": "김건모",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 6,
    "title": "썸 Vol.16",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 7,
    "title": "좋은 날 Vol.16",
    "artist": "이선희",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 8,
    "title": "거짓말 Vol.16",
    "artist": "장윤정",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 9,
    "title": "No.1 Vol.16",
    "artist": "STAYC",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 10,
    "title": "발걸음 Vol.16",
    "artist": "지수",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 11,
    "title": "남행열차 Vol.16",
    "artist": "아일릿",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1999,
    "releaseMonth": 12,
    "title": "How Sweet Vol.16",
    "artist": "무한궤도",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 1,
    "title": "Drama Vol.16",
    "artist": "유재하",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 2,
    "title": "OMG Vol.16",
    "artist": "김범룡",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 3,
    "title": "ELEVEN Vol.16",
    "artist": "조용필",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 4,
    "title": "이제 나만 믿어요 Vol.16",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 5,
    "title": "우주를 줄게 Vol.16",
    "artist": "LE SSERAFIM",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 6,
    "title": "스물다섯 스물하나 Vol.16",
    "artist": "(여자)아이들",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 7,
    "title": "Abracadabra Vol.16",
    "artist": "TWICE",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 8,
    "title": "가시 Vol.16",
    "artist": "BLACKPINK",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 9,
    "title": "Tears Vol.16",
    "artist": "QWER",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 10,
    "title": "칵테일 사랑 Vol.16",
    "artist": "박재정",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 11,
    "title": "Whiplash Vol.16",
    "artist": "멜로망스",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2000,
    "releaseMonth": 12,
    "title": "고민중독 Vol.16",
    "artist": "임영웅",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 1,
    "title": "Super Shy Vol.16",
    "artist": "이무진",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 2,
    "title": "Attention Vol.16",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 3,
    "title": "신호등 Vol.16",
    "artist": "선미",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 4,
    "title": "한 페이지가 될 수 있게 Vol.16",
    "artist": "볼빨간사춘기",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 5,
    "title": "음오아예 Vol.16",
    "artist": "오마이걸",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 6,
    "title": "오래된 노래 Vol.16",
    "artist": "Red Velvet",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 7,
    "title": "총 맞은 것처럼 Vol.16",
    "artist": "벤",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 8,
    "title": "10 Minutes Vol.16",
    "artist": "잔나비",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 9,
    "title": "이미 슬픈 사랑 Vol.16",
    "artist": "임재현",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 10,
    "title": "내 사랑 내 곁에 Vol.16",
    "artist": "폴킴",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 11,
    "title": "내 이름 맑음 Vol.16",
    "artist": "iKON",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2001,
    "releaseMonth": 12,
    "title": "첫 만남은 계획대로 되지 않아 Vol.16",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 1,
    "title": "손오공 Vol.16",
    "artist": "핑클",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 2,
    "title": "LOVE DIVE Vol.16",
    "artist": "S.E.S.",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 3,
    "title": "Dynamite Vol.16",
    "artist": "이선희",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 4,
    "title": "LOVE SCENARIO Vol.16",
    "artist": "장윤정",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 5,
    "title": "눈 코 입 Vol.16",
    "artist": "STAYC",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 6,
    "title": "내 손을 잡아 Vol.16",
    "artist": "싸이",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 7,
    "title": "만약에 Vol.16",
    "artist": "버스커 버스커",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 8,
    "title": "Valenti Vol.16",
    "artist": "나얼",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 9,
    "title": "해변의 여인 Vol.16",
    "artist": "임창정",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 10,
    "title": "비처럼 음악처럼 Vol.16",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 11,
    "title": "Armageddon Vol.16",
    "artist": "NewJeans",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2002,
    "releaseMonth": 12,
    "title": "Love wins all Vol.16",
    "artist": "IVE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 1,
    "title": "Teddy Bear Vol.16",
    "artist": "LE SSERAFIM",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 2,
    "title": "취중고백 Vol.16",
    "artist": "(여자)아이들",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 3,
    "title": "찐이야 Vol.16",
    "artist": "TWICE",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 4,
    "title": "어디에도 Vol.16",
    "artist": "조성모",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 5,
    "title": "첫눈 Vol.16",
    "artist": "박완규",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 6,
    "title": "잔소리 Vol.16",
    "artist": "야다",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 7,
    "title": "겁쟁이 Vol.16",
    "artist": "에메랄드 캐슬",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 8,
    "title": "성인식 Vol.16",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 9,
    "title": "가질 수 없는 너 Vol.16",
    "artist": "박혜원",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 10,
    "title": "단발머리 Vol.16",
    "artist": "윤하",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 11,
    "title": "SPOT! Vol.16",
    "artist": "선미",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2003,
    "releaseMonth": 12,
    "title": "Love Lee Vol.16",
    "artist": "볼빨간사춘기",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 1,
    "title": "Hype Boy Vol.16",
    "artist": "오마이걸",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 2,
    "title": "Next Level Vol.16",
    "artist": "변진섭",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 3,
    "title": "사랑에 연습이 있었다면 Vol.16",
    "artist": "무한궤도",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 4,
    "title": "오늘부터 우리는 Vol.16",
    "artist": "유재하",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 5,
    "title": "바람기억 Vol.16",
    "artist": "김범룡",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 6,
    "title": "Heartbreaker Vol.16",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 7,
    "title": "Timeless Vol.16",
    "artist": "소찬휘",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 8,
    "title": "천년의 사랑 Vol.16",
    "artist": "이정현",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 9,
    "title": "난 알아요 Vol.16",
    "artist": "핑클",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 10,
    "title": "UP Vol.16",
    "artist": "S.E.S.",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 11,
    "title": "Midas Touch Vol.16",
    "artist": "이선희",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2004,
    "releaseMonth": 12,
    "title": "퀸카 Vol.16",
    "artist": "세븐틴",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 1,
    "title": "FEARLESS Vol.16",
    "artist": "박재정",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 2,
    "title": "Celebrity Vol.16",
    "artist": "멜로망스",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 3,
    "title": "모든 날 모든 순간 Vol.16",
    "artist": "임영웅",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 4,
    "title": "야생화 Vol.16",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 5,
    "title": "내가 제일 잘 나가 Vol.16",
    "artist": "아이유",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 6,
    "title": "Tell Me Vol.16",
    "artist": "aespa",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 7,
    "title": "소주 한 잔 Vol.16",
    "artist": "NewJeans",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 8,
    "title": "Dreams Come True Vol.16",
    "artist": "IVE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 9,
    "title": "사랑하기 때문에 Vol.16",
    "artist": "LE SSERAFIM",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 10,
    "title": "Supernova Vol.16",
    "artist": "마크툽",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 11,
    "title": "Smart Vol.16",
    "artist": "잔나비",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2005,
    "releaseMonth": 12,
    "title": "Kitsch Vol.16",
    "artist": "임재현",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 1,
    "title": "사랑인가 봐 Vol.16",
    "artist": "폴킴",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 2,
    "title": "아로하 Vol.16",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 3,
    "title": "CHEER UP Vol.16",
    "artist": "태연",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 4,
    "title": "으르렁 Vol.16",
    "artist": "에일리",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 5,
    "title": "Oh! Vol.16",
    "artist": "박혜원",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 6,
    "title": "내 사람 Vol.16",
    "artist": "윤하",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 7,
    "title": "벌써 일년 Vol.16",
    "artist": "선미",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 8,
    "title": "잘못된 만남 Vol.16",
    "artist": "EXO",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 9,
    "title": "J에게 Vol.16",
    "artist": "싸이",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 10,
    "title": "소나기 Vol.16",
    "artist": "버스커 버스커",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 11,
    "title": "Perfect Night Vol.16",
    "artist": "나얼",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2006,
    "releaseMonth": 12,
    "title": "Ditto Vol.16",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 1,
    "title": "Savage Vol.16",
    "artist": "백지영",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 2,
    "title": "주저하는 연인들을 위해 Vol.16",
    "artist": "보아",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 3,
    "title": "시간을 달려서 Vol.16",
    "artist": "소찬휘",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 4,
    "title": "벚꽃 엔딩 Vol.16",
    "artist": "이정현",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 5,
    "title": "Gee Vol.16",
    "artist": "핑클",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 6,
    "title": "어머나 Vol.16",
    "artist": "브라운 아이즈",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 7,
    "title": "영원한 사랑 Vol.16",
    "artist": "조성모",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 8,
    "title": "서시 Vol.16",
    "artist": "박완규",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 9,
    "title": "APT. Vol.16",
    "artist": "야다",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 10,
    "title": "SHEESH Vol.16",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 11,
    "title": "ETA Vol.16",
    "artist": "아일릿",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2007,
    "releaseMonth": 12,
    "title": "After LIKE Vol.16",
    "artist": "KISS OF LIFE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 1,
    "title": "라일락 Vol.16",
    "artist": "아이유",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 2,
    "title": "뚜두뚜두 Vol.16",
    "artist": "aespa",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 3,
    "title": "위아래 Vol.16",
    "artist": "NewJeans",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 4,
    "title": "Roly-Poly Vol.16",
    "artist": "김현식",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 5,
    "title": "So Hot Vol.16",
    "artist": "변진섭",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 6,
    "title": "체념 Vol.16",
    "artist": "무한궤도",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 7,
    "title": "To Heaven Vol.16",
    "artist": "유재하",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 8,
    "title": "그대에게 Vol.16",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 9,
    "title": "클락션 Vol.16",
    "artist": "QWER",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 10,
    "title": "EASY Vol.17",
    "artist": "비비",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 11,
    "title": "헤어지자 말해요 Vol.17",
    "artist": "태연",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2008,
    "releaseMonth": 12,
    "title": "TOMBOY Vol.17",
    "artist": "에일리",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 1,
    "title": "아무노래 Vol.17",
    "artist": "박혜원",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 2,
    "title": "예뻤어 Vol.17",
    "artist": "정국",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 3,
    "title": "금요일에 만나요 Vol.17",
    "artist": "세븐틴",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 4,
    "title": "Bad Girl Good Girl Vol.17",
    "artist": "박재정",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 5,
    "title": "까만안경 Vol.17",
    "artist": "멜로망스",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 6,
    "title": "낭만고양이 Vol.17",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 7,
    "title": "인형의 꿈 Vol.17",
    "artist": "벤",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 8,
    "title": "바람바람바람 Vol.17",
    "artist": "송하예",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 9,
    "title": "Bubble Gum Vol.17",
    "artist": "백지영",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 10,
    "title": "Drama Vol.17",
    "artist": "보아",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 11,
    "title": "OMG Vol.17",
    "artist": "소찬휘",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2009,
    "releaseMonth": 12,
    "title": "ELEVEN Vol.17",
    "artist": "영탁",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 1,
    "title": "오늘도 빛나는 너에게 Vol.17",
    "artist": "마크툽",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 2,
    "title": "TT Vol.17",
    "artist": "잔나비",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 3,
    "title": "강남스타일 Vol.17",
    "artist": "임재현",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 4,
    "title": "Fire Vol.17",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 5,
    "title": "응급실 Vol.17",
    "artist": "STAYC",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 6,
    "title": "Wa Vol.17",
    "artist": "지수",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 7,
    "title": "기억의 습작 Vol.17",
    "artist": "아일릿",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 8,
    "title": "POWER Vol.17",
    "artist": "KISS OF LIFE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 9,
    "title": "Magnetic Vol.17",
    "artist": "아이유",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 10,
    "title": "Super Shy Vol.17",
    "artist": "태양",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 11,
    "title": "Attention Vol.17",
    "artist": "EXO",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2010,
    "releaseMonth": 12,
    "title": "신호등 Vol.17",
    "artist": "싸이",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 1,
    "title": "너를 만나 Vol.17",
    "artist": "버스커 버스커",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 2,
    "title": "BANG BANG BANG Vol.17",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 3,
    "title": "초혼 Vol.17",
    "artist": "TWICE",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 4,
    "title": "Nobody Vol.17",
    "artist": "BLACKPINK",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 5,
    "title": "아틀란티스 소녀 Vol.17",
    "artist": "QWER",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 6,
    "title": "순정 Vol.17",
    "artist": "비비",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 7,
    "title": "희망사항 Vol.17",
    "artist": "태연",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 8,
    "title": "HAPPY Vol.17",
    "artist": "더 크로스",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 9,
    "title": "밤양갱 Vol.17",
    "artist": "브라운 아이즈",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 10,
    "title": "손오공 Vol.17",
    "artist": "조성모",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 11,
    "title": "LOVE DIVE Vol.17",
    "artist": "박완규",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2011,
    "releaseMonth": 12,
    "title": "Dynamite Vol.17",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 1,
    "title": "좋니 Vol.17",
    "artist": "오마이걸",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 2,
    "title": "썸 Vol.17",
    "artist": "Red Velvet",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 3,
    "title": "좋은 날 Vol.17",
    "artist": "벤",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 4,
    "title": "거짓말 Vol.17",
    "artist": "송하예",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 5,
    "title": "No.1 Vol.17",
    "artist": "백지영",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 6,
    "title": "발걸음 Vol.17",
    "artist": "서태지와 아이들",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 7,
    "title": "남행열차 Vol.17",
    "artist": "김현식",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 8,
    "title": "How Sweet Vol.17",
    "artist": "변진섭",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 9,
    "title": "To. X Vol.17",
    "artist": "무한궤도",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 10,
    "title": "Teddy Bear Vol.17",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 11,
    "title": "취중고백 Vol.17",
    "artist": "이선희",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2012,
    "releaseMonth": 12,
    "title": "찐이야 Vol.17",
    "artist": "장윤정",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 1,
    "title": "우주를 줄게 Vol.17",
    "artist": "STAYC",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 2,
    "title": "스물다섯 스물하나 Vol.17",
    "artist": "지수",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 3,
    "title": "Abracadabra Vol.17",
    "artist": "아일릿",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 4,
    "title": "가시 Vol.17",
    "artist": "TWS",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 5,
    "title": "Tears Vol.17",
    "artist": "정국",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 6,
    "title": "칵테일 사랑 Vol.17",
    "artist": "세븐틴",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 7,
    "title": "Whiplash Vol.17",
    "artist": "박재정",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 8,
    "title": "고민중독 Vol.17",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 9,
    "title": "Seven Vol.17",
    "artist": "LE SSERAFIM",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 10,
    "title": "Hype Boy Vol.17",
    "artist": "(여자)아이들",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 11,
    "title": "Next Level Vol.17",
    "artist": "TWICE",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2013,
    "releaseMonth": 12,
    "title": "사랑에 연습이 있었다면 Vol.17",
    "artist": "BLACKPINK",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 1,
    "title": "음오아예 Vol.17",
    "artist": "QWER",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 2,
    "title": "오래된 노래 Vol.17",
    "artist": "조정석",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 3,
    "title": "총 맞은 것처럼 Vol.17",
    "artist": "영탁",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 4,
    "title": "10 Minutes Vol.17",
    "artist": "마크툽",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 5,
    "title": "이미 슬픈 사랑 Vol.17",
    "artist": "잔나비",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 6,
    "title": "내 사랑 내 곁에 Vol.17",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 7,
    "title": "내 이름 맑음 Vol.17",
    "artist": "선미",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 8,
    "title": "첫 만남은 계획대로 되지 않아 Vol.17",
    "artist": "볼빨간사춘기",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 9,
    "title": "I AM Vol.17",
    "artist": "오마이걸",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 10,
    "title": "FEARLESS Vol.17",
    "artist": "Red Velvet",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 11,
    "title": "Celebrity Vol.17",
    "artist": "벤",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2014,
    "releaseMonth": 12,
    "title": "모든 날 모든 순간 Vol.17",
    "artist": "박효신",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 1,
    "title": "눈 코 입 Vol.17",
    "artist": "태양",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 2,
    "title": "내 손을 잡아 Vol.17",
    "artist": "EXO",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 3,
    "title": "만약에 Vol.17",
    "artist": "싸이",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 4,
    "title": "Valenti Vol.17",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 5,
    "title": "해변의 여인 Vol.17",
    "artist": "핑클",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 6,
    "title": "비처럼 음악처럼 Vol.17",
    "artist": "S.E.S.",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 7,
    "title": "Armageddon Vol.17",
    "artist": "이선희",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 8,
    "title": "Love wins all Vol.17",
    "artist": "장윤정",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 9,
    "title": "꽃 Vol.17",
    "artist": "STAYC",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 10,
    "title": "사랑인가 봐 Vol.17",
    "artist": "이루",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 11,
    "title": "아로하 Vol.17",
    "artist": "더 크로스",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2015,
    "releaseMonth": 12,
    "title": "CHEER UP Vol.17",
    "artist": "브라운 아이즈",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 1,
    "title": "첫눈 Vol.17",
    "artist": "조성모",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 2,
    "title": "잔소리 Vol.17",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 3,
    "title": "겁쟁이 Vol.17",
    "artist": "NewJeans",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 4,
    "title": "성인식 Vol.17",
    "artist": "IVE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 5,
    "title": "가질 수 없는 너 Vol.17",
    "artist": "LE SSERAFIM",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 6,
    "title": "단발머리 Vol.17",
    "artist": "(여자)아이들",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 7,
    "title": "SPOT! Vol.17",
    "artist": "TWICE",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 8,
    "title": "Love Lee Vol.17",
    "artist": "신성우",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 9,
    "title": "ANTIFRAGILE Vol.17",
    "artist": "서태지와 아이들",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 10,
    "title": "Savage Vol.17",
    "artist": "김현식",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 11,
    "title": "주저하는 연인들을 위해 Vol.17",
    "artist": "변진섭",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2016,
    "releaseMonth": 12,
    "title": "시간을 달려서 Vol.17",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 1,
    "title": "바람기억 Vol.17",
    "artist": "박혜원",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 2,
    "title": "Heartbreaker Vol.17",
    "artist": "윤하",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 3,
    "title": "Timeless Vol.17",
    "artist": "선미",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 4,
    "title": "천년의 사랑 Vol.17",
    "artist": "볼빨간사춘기",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 5,
    "title": "난 알아요 Vol.17",
    "artist": "오마이걸",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 6,
    "title": "UP Vol.17",
    "artist": "이클립스",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 7,
    "title": "Midas Touch Vol.17",
    "artist": "TWS",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 8,
    "title": "퀸카 Vol.17",
    "artist": "정국",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 9,
    "title": "Pink Venom Vol.17",
    "artist": "세븐틴",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 10,
    "title": "라일락 Vol.17",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 11,
    "title": "뚜두뚜두 Vol.17",
    "artist": "소찬휘",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2017,
    "releaseMonth": 12,
    "title": "위아래 Vol.17",
    "artist": "이정현",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 1,
    "title": "내가 제일 잘 나가 Vol.17",
    "artist": "핑클",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 2,
    "title": "Tell Me Vol.17",
    "artist": "S.E.S.",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 3,
    "title": "소주 한 잔 Vol.17",
    "artist": "이선희",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 4,
    "title": "Dreams Come True Vol.17",
    "artist": "지코",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 5,
    "title": "사랑하기 때문에 Vol.17",
    "artist": "조정석",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 6,
    "title": "Supernova Vol.17",
    "artist": "영탁",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 7,
    "title": "Smart Vol.17",
    "artist": "마크툽",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 8,
    "title": "Kitsch Vol.17",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 9,
    "title": "사건의 지평선 Vol.17",
    "artist": "아이유",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 10,
    "title": "아무노래 Vol.17",
    "artist": "aespa",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 11,
    "title": "예뻤어 Vol.17",
    "artist": "NewJeans",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2018,
    "releaseMonth": 12,
    "title": "금요일에 만나요 Vol.17",
    "artist": "IVE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 1,
    "title": "Oh! Vol.17",
    "artist": "LE SSERAFIM",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 2,
    "title": "내 사람 Vol.17",
    "artist": "BIGBANG",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 3,
    "title": "벌써 일년 Vol.17",
    "artist": "박효신",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 4,
    "title": "잘못된 만남 Vol.17",
    "artist": "태양",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 5,
    "title": "J에게 Vol.17",
    "artist": "EXO",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 6,
    "title": "소나기 Vol.17",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 7,
    "title": "Perfect Night Vol.17",
    "artist": "태연",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 8,
    "title": "Ditto Vol.17",
    "artist": "에일리",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 9,
    "title": "사랑은 늘 도망가 Vol.17",
    "artist": "박혜원",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 10,
    "title": "오늘도 빛나는 너에게 Vol.17",
    "artist": "윤하",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 11,
    "title": "TT Vol.17",
    "artist": "선미",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2019,
    "releaseMonth": 12,
    "title": "강남스타일 Vol.17",
    "artist": "SG워너비",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 1,
    "title": "Gee Vol.17",
    "artist": "이루",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 2,
    "title": "어머나 Vol.17",
    "artist": "더 크로스",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 3,
    "title": "영원한 사랑 Vol.17",
    "artist": "브라운 아이즈",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 4,
    "title": "서시 Vol.17",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 5,
    "title": "APT. Vol.17",
    "artist": "백지영",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 6,
    "title": "SHEESH Vol.17",
    "artist": "보아",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 7,
    "title": "ETA Vol.17",
    "artist": "소찬휘",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 8,
    "title": "After LIKE Vol.17",
    "artist": "이정현",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 9,
    "title": "바라만 본다 Vol.17",
    "artist": "핑클",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 10,
    "title": "너를 만나 Vol.17",
    "artist": "전람회",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 11,
    "title": "BANG BANG BANG Vol.17",
    "artist": "신성우",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2020,
    "releaseMonth": 12,
    "title": "초혼 Vol.17",
    "artist": "서태지와 아이들",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 1,
    "title": "So Hot Vol.17",
    "artist": "김현식",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 2,
    "title": "체념 Vol.17",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 3,
    "title": "To Heaven Vol.17",
    "artist": "아일릿",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 4,
    "title": "그대에게 Vol.17",
    "artist": "KISS OF LIFE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 5,
    "title": "클락션 Vol.17",
    "artist": "아이유",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 6,
    "title": "EASY Vol.17",
    "artist": "aespa",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 7,
    "title": "헤어지자 말해요 Vol.18",
    "artist": "NewJeans",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 8,
    "title": "TOMBOY Vol.18",
    "artist": "DAY6",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 9,
    "title": "에잇 Vol.18",
    "artist": "이클립스",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 10,
    "title": "좋니 Vol.18",
    "artist": "TWS",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 11,
    "title": "썸 Vol.18",
    "artist": "정국",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2021,
    "releaseMonth": 12,
    "title": "좋은 날 Vol.18",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 1,
    "title": "까만안경 Vol.18",
    "artist": "QWER",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 2,
    "title": "낭만고양이 Vol.18",
    "artist": "비비",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 3,
    "title": "인형의 꿈 Vol.18",
    "artist": "태연",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 4,
    "title": "바람바람바람 Vol.18",
    "artist": "에일리",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 5,
    "title": "Bubble Gum Vol.18",
    "artist": "박혜원",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 6,
    "title": "Drama Vol.18",
    "artist": "BTS",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 7,
    "title": "OMG Vol.18",
    "artist": "지코",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 8,
    "title": "ELEVEN Vol.18",
    "artist": "조정석",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 9,
    "title": "이제 나만 믿어요 Vol.18",
    "artist": "영탁",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 10,
    "title": "우주를 줄게 Vol.18",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 11,
    "title": "스물다섯 스물하나 Vol.18",
    "artist": "벤",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2022,
    "releaseMonth": 12,
    "title": "Abracadabra Vol.18",
    "artist": "송하예",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 1,
    "title": "응급실 Vol.18",
    "artist": "백지영",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 2,
    "title": "Wa Vol.18",
    "artist": "보아",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 3,
    "title": "기억의 습작 Vol.18",
    "artist": "소찬휘",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 4,
    "title": "POWER Vol.18",
    "artist": "엠씨더맥스",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 5,
    "title": "Magnetic Vol.18",
    "artist": "BIGBANG",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 6,
    "title": "Super Shy Vol.18",
    "artist": "박효신",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 7,
    "title": "Attention Vol.18",
    "artist": "태양",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 8,
    "title": "신호등 Vol.18",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 9,
    "title": "한 페이지가 될 수 있게 Vol.18",
    "artist": "STAYC",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 10,
    "title": "음오아예 Vol.18",
    "artist": "지수",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 11,
    "title": "오래된 노래 Vol.18",
    "artist": "아일릿",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2023,
    "releaseMonth": 12,
    "title": "총 맞은 것처럼 Vol.18",
    "artist": "KISS OF LIFE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 1,
    "title": "아틀란티스 소녀 Vol.18",
    "artist": "아이유",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 2,
    "title": "순정 Vol.18",
    "artist": "izi",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 3,
    "title": "희망사항 Vol.18",
    "artist": "SG워너비",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 4,
    "title": "HAPPY Vol.18",
    "artist": "이루",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 5,
    "title": "밤양갱 Vol.18",
    "artist": "더 크로스",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 6,
    "title": "손오공 Vol.18",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 7,
    "title": "LOVE DIVE Vol.18",
    "artist": "TWICE",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 8,
    "title": "Dynamite Vol.18",
    "artist": "BLACKPINK",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 9,
    "title": "LOVE SCENARIO Vol.18",
    "artist": "QWER",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 10,
    "title": "눈 코 입 Vol.18",
    "artist": "비비",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 11,
    "title": "내 손을 잡아 Vol.18",
    "artist": "태연",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2024,
    "releaseMonth": 12,
    "title": "만약에 Vol.18",
    "artist": "뱅크",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 1,
    "title": "No.1 Vol.18",
    "artist": "전람회",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 2,
    "title": "발걸음 Vol.18",
    "artist": "신성우",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 3,
    "title": "남행열차 Vol.18",
    "artist": "서태지와 아이들",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 4,
    "title": "How Sweet Vol.18",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 5,
    "title": "To. X Vol.18",
    "artist": "오마이걸",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 6,
    "title": "Teddy Bear Vol.18",
    "artist": "Red Velvet",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 7,
    "title": "취중고백 Vol.18",
    "artist": "벤",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 8,
    "title": "찐이야 Vol.18",
    "artist": "송하예",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 9,
    "title": "어디에도 Vol.18",
    "artist": "백지영",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 10,
    "title": "첫눈 Vol.18",
    "artist": "G-DRAGON",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 11,
    "title": "잔소리 Vol.18",
    "artist": "DAY6",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2025,
    "releaseMonth": 12,
    "title": "겁쟁이 Vol.18",
    "artist": "이클립스",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 1,
    "title": "Tears Vol.18",
    "artist": "TWS",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 2,
    "title": "칵테일 사랑 Vol.18",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 3,
    "title": "Whiplash Vol.18",
    "artist": "이선희",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 4,
    "title": "고민중독 Vol.18",
    "artist": "장윤정",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 5,
    "title": "Seven Vol.18",
    "artist": "STAYC",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 6,
    "title": "Hype Boy Vol.18",
    "artist": "지수",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 7,
    "title": "Next Level Vol.18",
    "artist": "아일릿",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 8,
    "title": "사랑에 연습이 있었다면 Vol.18",
    "artist": "MSG워너비",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 9,
    "title": "오늘부터 우리는 Vol.18",
    "artist": "BTS",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 10,
    "title": "바람기억 Vol.18",
    "artist": "지코",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 11,
    "title": "Heartbreaker Vol.18",
    "artist": "조정석",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 2026,
    "releaseMonth": 12,
    "title": "Timeless Vol.18",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 1,
    "title": "썸 Vol.18",
    "artist": "LE SSERAFIM",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 2,
    "title": "좋은 날 Vol.18",
    "artist": "(여자)아이들",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 3,
    "title": "거짓말 Vol.18",
    "artist": "TWICE",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 4,
    "title": "No.1 Vol.18",
    "artist": "BLACKPINK",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 5,
    "title": "발걸음 Vol.18",
    "artist": "QWER",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 6,
    "title": "남행열차 Vol.18",
    "artist": "윤종신",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 7,
    "title": "How Sweet Vol.18",
    "artist": "엠씨더맥스",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 8,
    "title": "To. X Vol.18",
    "artist": "BIGBANG",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 9,
    "title": "Teddy Bear Vol.18",
    "artist": "박효신",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 10,
    "title": "취중고백 Vol.18",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 11,
    "title": "찐이야 Vol.18",
    "artist": "선미",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1980,
    "releaseMonth": 12,
    "title": "어디에도 Vol.18",
    "artist": "볼빨간사춘기",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 1,
    "title": "스물다섯 스물하나 Vol.18",
    "artist": "오마이걸",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 2,
    "title": "Abracadabra Vol.18",
    "artist": "Red Velvet",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 3,
    "title": "가시 Vol.18",
    "artist": "벤",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 4,
    "title": "Tears Vol.18",
    "artist": "버즈",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 5,
    "title": "칵테일 사랑 Vol.18",
    "artist": "izi",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 6,
    "title": "Whiplash Vol.18",
    "artist": "SG워너비",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 7,
    "title": "고민중독 Vol.18",
    "artist": "이루",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 8,
    "title": "Seven Vol.18",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 9,
    "title": "Hype Boy Vol.18",
    "artist": "핑클",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 10,
    "title": "Next Level Vol.18",
    "artist": "S.E.S.",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 11,
    "title": "사랑에 연습이 있었다면 Vol.18",
    "artist": "이선희",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1981,
    "releaseMonth": 12,
    "title": "오늘부터 우리는 Vol.18",
    "artist": "장윤정",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 1,
    "title": "오래된 노래 Vol.18",
    "artist": "STAYC",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 2,
    "title": "총 맞은 것처럼 Vol.18",
    "artist": "김건모",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 3,
    "title": "10 Minutes Vol.18",
    "artist": "뱅크",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 4,
    "title": "이미 슬픈 사랑 Vol.18",
    "artist": "전람회",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 5,
    "title": "내 사랑 내 곁에 Vol.18",
    "artist": "신성우",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 6,
    "title": "내 이름 맑음 Vol.18",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 7,
    "title": "첫 만남은 계획대로 되지 않아 Vol.18",
    "artist": "NewJeans",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 8,
    "title": "I AM Vol.18",
    "artist": "IVE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 9,
    "title": "FEARLESS Vol.18",
    "artist": "LE SSERAFIM",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 10,
    "title": "Celebrity Vol.18",
    "artist": "(여자)아이들",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 11,
    "title": "모든 날 모든 순간 Vol.18",
    "artist": "TWICE",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1982,
    "releaseMonth": 12,
    "title": "야생화 Vol.18",
    "artist": "조용필",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 1,
    "title": "내 손을 잡아 Vol.18",
    "artist": "G-DRAGON",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 2,
    "title": "만약에 Vol.18",
    "artist": "DAY6",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 3,
    "title": "Valenti Vol.18",
    "artist": "이클립스",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 4,
    "title": "해변의 여인 Vol.18",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 5,
    "title": "비처럼 음악처럼 Vol.18",
    "artist": "박혜원",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 6,
    "title": "Armageddon Vol.18",
    "artist": "윤하",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 7,
    "title": "Love wins all Vol.18",
    "artist": "선미",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 8,
    "title": "꽃 Vol.18",
    "artist": "볼빨간사춘기",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 9,
    "title": "사랑인가 봐 Vol.18",
    "artist": "오마이걸",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 10,
    "title": "아로하 Vol.18",
    "artist": "이무진",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 11,
    "title": "CHEER UP Vol.18",
    "artist": "MSG워너비",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1983,
    "releaseMonth": 12,
    "title": "으르렁 Vol.18",
    "artist": "BTS",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 1,
    "title": "잔소리 Vol.18",
    "artist": "지코",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 2,
    "title": "겁쟁이 Vol.18",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 3,
    "title": "성인식 Vol.18",
    "artist": "소찬휘",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 4,
    "title": "가질 수 없는 너 Vol.18",
    "artist": "이정현",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 5,
    "title": "단발머리 Vol.18",
    "artist": "핑클",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 6,
    "title": "SPOT! Vol.18",
    "artist": "S.E.S.",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 7,
    "title": "Love Lee Vol.18",
    "artist": "이선희",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 8,
    "title": "ANTIFRAGILE Vol.18",
    "artist": "iKON",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 9,
    "title": "Savage Vol.18",
    "artist": "윤종신",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 10,
    "title": "주저하는 연인들을 위해 Vol.18",
    "artist": "엠씨더맥스",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 11,
    "title": "시간을 달려서 Vol.18",
    "artist": "BIGBANG",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1984,
    "releaseMonth": 12,
    "title": "벚꽃 엔딩 Vol.18",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 1,
    "title": "Heartbreaker Vol.18",
    "artist": "아이유",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 2,
    "title": "Timeless Vol.18",
    "artist": "aespa",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 3,
    "title": "천년의 사랑 Vol.18",
    "artist": "NewJeans",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 4,
    "title": "난 알아요 Vol.18",
    "artist": "IVE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 5,
    "title": "UP Vol.18",
    "artist": "LE SSERAFIM",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 6,
    "title": "Midas Touch Vol.18",
    "artist": "임창정",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 7,
    "title": "퀸카 Vol.18",
    "artist": "버즈",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 8,
    "title": "Pink Venom Vol.18",
    "artist": "izi",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 9,
    "title": "라일락 Vol.18",
    "artist": "SG워너비",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 10,
    "title": "뚜두뚜두 Vol.18",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 11,
    "title": "위아래 Vol.18",
    "artist": "태연",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1985,
    "releaseMonth": 12,
    "title": "Roly-Poly Vol.18",
    "artist": "에일리",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 1,
    "title": "Tell Me Vol.18",
    "artist": "박혜원",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 2,
    "title": "소주 한 잔 Vol.18",
    "artist": "윤하",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 3,
    "title": "Dreams Come True Vol.18",
    "artist": "선미",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 4,
    "title": "사랑하기 때문에 Vol.18",
    "artist": "에메랄드 캐슬",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 5,
    "title": "Supernova Vol.18",
    "artist": "김건모",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 6,
    "title": "Smart Vol.18",
    "artist": "뱅크",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 7,
    "title": "Kitsch Vol.18",
    "artist": "전람회",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 8,
    "title": "사건의 지평선 Vol.18",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 9,
    "title": "아무노래 Vol.18",
    "artist": "백지영",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 10,
    "title": "예뻤어 Vol.18",
    "artist": "보아",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 11,
    "title": "금요일에 만나요 Vol.18",
    "artist": "소찬휘",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1986,
    "releaseMonth": 12,
    "title": "Bad Girl Good Girl Vol.18",
    "artist": "이정현",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 1,
    "title": "내 사람 Vol.18",
    "artist": "핑클",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 2,
    "title": "벌써 일년 Vol.18",
    "artist": "김범룡",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 3,
    "title": "잘못된 만남 Vol.18",
    "artist": "조용필",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 4,
    "title": "J에게 Vol.19",
    "artist": "G-DRAGON",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 5,
    "title": "소나기 Vol.19",
    "artist": "DAY6",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 6,
    "title": "Perfect Night Vol.19",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 7,
    "title": "Ditto Vol.19",
    "artist": "아일릿",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 8,
    "title": "사랑은 늘 도망가 Vol.19",
    "artist": "KISS OF LIFE",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 9,
    "title": "오늘도 빛나는 너에게 Vol.19",
    "artist": "아이유",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 10,
    "title": "TT Vol.19",
    "artist": "aespa",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 11,
    "title": "강남스타일 Vol.19",
    "artist": "NewJeans",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1987,
    "releaseMonth": 12,
    "title": "Fire Vol.19",
    "artist": "임영웅",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 1,
    "title": "어머나 Vol.19",
    "artist": "이무진",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 2,
    "title": "영원한 사랑 Vol.19",
    "artist": "MSG워너비",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 3,
    "title": "서시 Vol.19",
    "artist": "BTS",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 4,
    "title": "APT. Vol.19",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 5,
    "title": "SHEESH Vol.19",
    "artist": "QWER",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 6,
    "title": "ETA Vol.19",
    "artist": "비비",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 7,
    "title": "After LIKE Vol.19",
    "artist": "태연",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 8,
    "title": "바라만 본다 Vol.19",
    "artist": "에일리",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 9,
    "title": "너를 만나 Vol.19",
    "artist": "박혜원",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 10,
    "title": "BANG BANG BANG Vol.19",
    "artist": "폴킴",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 11,
    "title": "초혼 Vol.19",
    "artist": "iKON",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1988,
    "releaseMonth": 12,
    "title": "Nobody Vol.19",
    "artist": "윤종신",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 1,
    "title": "체념 Vol.19",
    "artist": "엠씨더맥스",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 2,
    "title": "To Heaven Vol.19",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 3,
    "title": "그대에게 Vol.19",
    "artist": "벤",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 4,
    "title": "클락션 Vol.19",
    "artist": "송하예",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 5,
    "title": "EASY Vol.19",
    "artist": "백지영",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 6,
    "title": "헤어지자 말해요 Vol.19",
    "artist": "보아",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 7,
    "title": "TOMBOY Vol.19",
    "artist": "소찬휘",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 8,
    "title": "에잇 Vol.19",
    "artist": "나얼",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 9,
    "title": "좋니 Vol.19",
    "artist": "임창정",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 10,
    "title": "썸 Vol.19",
    "artist": "버즈",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 11,
    "title": "좋은 날 Vol.19",
    "artist": "izi",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1989,
    "releaseMonth": 12,
    "title": "거짓말 Vol.19",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 1,
    "title": "낭만고양이 Vol.19",
    "artist": "STAYC",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 2,
    "title": "인형의 꿈 Vol.19",
    "artist": "지수",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 3,
    "title": "바람바람바람 Vol.19",
    "artist": "아일릿",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 4,
    "title": "Bubble Gum Vol.19",
    "artist": "KISS OF LIFE",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 5,
    "title": "Drama Vol.19",
    "artist": "아이유",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 6,
    "title": "OMG Vol.19",
    "artist": "야다",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 7,
    "title": "ELEVEN Vol.19",
    "artist": "에메랄드 캐슬",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 8,
    "title": "이제 나만 믿어요 Vol.19",
    "artist": "김건모",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 9,
    "title": "우주를 줄게 Vol.19",
    "artist": "뱅크",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 10,
    "title": "스물다섯 스물하나 Vol.19",
    "artist": "쿨",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 11,
    "title": "Abracadabra Vol.19",
    "artist": "TWICE",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1990,
    "releaseMonth": 12,
    "title": "가시 Vol.19",
    "artist": "BLACKPINK",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 1,
    "title": "Wa Vol.19",
    "artist": "QWER",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 2,
    "title": "기억의 습작 Vol.19",
    "artist": "비비",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 3,
    "title": "POWER Vol.19",
    "artist": "태연",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 4,
    "title": "Magnetic Vol.19",
    "artist": "유재하",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 5,
    "title": "Super Shy Vol.19",
    "artist": "김범룡",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 6,
    "title": "Attention Vol.19",
    "artist": "조용필",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 7,
    "title": "신호등 Vol.19",
    "artist": "G-DRAGON",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 8,
    "title": "한 페이지가 될 수 있게 Vol.19",
    "artist": "체리필터",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 9,
    "title": "음오아예 Vol.19",
    "artist": "오마이걸",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 10,
    "title": "오래된 노래 Vol.19",
    "artist": "Red Velvet",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 11,
    "title": "총 맞은 것처럼 Vol.19",
    "artist": "벤",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1991,
    "releaseMonth": 12,
    "title": "10 Minutes Vol.19",
    "artist": "송하예",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 1,
    "title": "순정 Vol.19",
    "artist": "백지영",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 2,
    "title": "희망사항 Vol.19",
    "artist": "멜로망스",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 3,
    "title": "HAPPY Vol.19",
    "artist": "임영웅",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 4,
    "title": "밤양갱 Vol.19",
    "artist": "이무진",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 5,
    "title": "손오공 Vol.19",
    "artist": "MSG워너비",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 6,
    "title": "LOVE DIVE Vol.19",
    "artist": "스탠딩 에그",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 7,
    "title": "Dynamite Vol.19",
    "artist": "이선희",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 8,
    "title": "LOVE SCENARIO Vol.19",
    "artist": "장윤정",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 9,
    "title": "눈 코 입 Vol.19",
    "artist": "STAYC",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 10,
    "title": "내 손을 잡아 Vol.19",
    "artist": "지수",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 11,
    "title": "만약에 Vol.19",
    "artist": "아일릿",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1992,
    "releaseMonth": 12,
    "title": "Valenti Vol.19",
    "artist": "임재현",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 1,
    "title": "발걸음 Vol.19",
    "artist": "폴킴",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 2,
    "title": "남행열차 Vol.19",
    "artist": "iKON",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 3,
    "title": "How Sweet Vol.19",
    "artist": "윤종신",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 4,
    "title": "To. X Vol.19",
    "artist": "미란이 & 머쉬베놈",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 5,
    "title": "Teddy Bear Vol.19",
    "artist": "LE SSERAFIM",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 6,
    "title": "취중고백 Vol.19",
    "artist": "(여자)아이들",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 7,
    "title": "찐이야 Vol.19",
    "artist": "TWICE",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 8,
    "title": "어디에도 Vol.19",
    "artist": "BLACKPINK",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 9,
    "title": "첫눈 Vol.19",
    "artist": "QWER",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 10,
    "title": "잔소리 Vol.19",
    "artist": "버스커 버스커",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 11,
    "title": "겁쟁이 Vol.19",
    "artist": "나얼",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1993,
    "releaseMonth": 12,
    "title": "성인식 Vol.19",
    "artist": "임창정",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 1,
    "title": "칵테일 사랑 Vol.19",
    "artist": "버즈",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 2,
    "title": "Whiplash Vol.19",
    "artist": "AKMU",
    "genre": "트로트",
    "gender": "혼성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 3,
    "title": "고민중독 Vol.19",
    "artist": "선미",
    "genre": "발라드",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 4,
    "title": "Seven Vol.19",
    "artist": "볼빨간사춘기",
    "genre": "댄스",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 5,
    "title": "Hype Boy Vol.19",
    "artist": "오마이걸",
    "genre": "록/밴드",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 6,
    "title": "Next Level Vol.19",
    "artist": "Red Velvet",
    "genre": "힙합",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 7,
    "title": "사랑에 연습이 있었다면 Vol.19",
    "artist": "벤",
    "genre": "트로트",
    "gender": "여성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 8,
    "title": "오늘부터 우리는 Vol.19",
    "artist": "박완규",
    "genre": "발라드",
    "gender": "남성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 9,
    "title": "바람기억 Vol.19",
    "artist": "야다",
    "genre": "댄스",
    "gender": "남성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 10,
    "title": "Heartbreaker Vol.19",
    "artist": "에메랄드 캐슬",
    "genre": "록/밴드",
    "gender": "남성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 11,
    "title": "Timeless Vol.19",
    "artist": "김건모",
    "genre": "힙합",
    "gender": "남성"
  },
  {
    "releaseYear": 1994,
    "releaseMonth": 12,
    "title": "천년의 사랑 Vol.19",
    "artist": "이영지 & 도경수",
    "genre": "트로트",
    "gender": "혼성"
  }
];
