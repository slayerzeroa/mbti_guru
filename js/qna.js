const qnaList = [
  {
    q: '1. 투자에서 가장 중요한 것은?',
    a: [
      { answer: 'a. 내가 고른 종목에 대한 믿음과 기다림이지', type: ['ISTJ', 'ISFJ', 'INFJ', 'ESTJ'] },
      { answer: 'b. 글쎄, 싸게 사서 비싸게 파는 직감 아닐까?', type: ['INFP', 'INTJ', 'ISFP', 'INFP', 'ENFP', 'ENTP', 'ENFJ'] },
      { answer: 'c. 숫자에 기반한 철저한 분석과 신속한 판단이지', type: ['INTJ', 'ISTP', 'INTP', 'ESTP', 'ESFP', 'ENTP', 'ENTJ']},
      { answer: 'd. 난 잘 모르겠어..', type: ['ISTJ', 'ISFJ', 'ESTP', 'ESFJ'] }
    ]
  },
  {
    q: '2. 당신이 가장 선호하는 주식은?',
    a: [
      { answer: 'a. 월급 받아 뭐해~ 든든한 국밥같은 가치주 사지~', type: ['ISFJ', 'INFJ', 'ISTP', 'INTP', 'ESFP', 'ESTJ', 'ENFJ', 'ENTJ'] },
      { answer: 'b. 달리는 말에 올라타야지 성장주 가즈아ㅏㅏㅏ', type: ['INTJ', 'ISTP', 'INFP', 'INTP', 'ESTP', 'ENFP', 'ENTP', 'ENFJ', 'ENTJ'] },
      { answer: 'c. 보너스 받는 느낌 알지? 배당주~', type: ['ISFP', 'ESTP', 'ENTP', 'ESTJ', 'ESFJ'] },
      { answer: 'd. 난 잘 모르겠다~ ETF나 사야지', type: ['ISTJ', 'INTJ', 'ISFP', 'INFP', 'ESFP', 'ESTJ', 'ESFJ',]}
    ]
  },
  {
    q: '3. 당신이 투자한 회사 주가가 불법행위 적발로 급락했다.',
    a: [
      { answer: 'a. 바로 회사로 찾아가 깽판 놓는다.', type: ['INFP', 'ESTP', 'ENTP', 'ENFJ', 'ENTJ'] },
      { answer: 'b. 일단은 주식을 들고 존버한다.', type: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ'] },
      { answer: 'c. 더이상 볼 것도 없다, 바로 손절한다.', type: ['ISTJ', 'ISFJ', 'INFJ', 'INTJ', 'INFP', 'INTP', 'ESFP', 'ENTJ'] },
      { answer: 'd. 오히려 좋아, 물타기 가즈아ㅏㅏㅏ', type: ['INTJ', 'ISTP', 'ISFP', 'ENFP']}
    ]
  },
  {
    q: '4. 선호하는 투자 정보 수집 채널?',
    a: [
      { answer: 'a. 다양하고 많은 정보를 빠르게 얻을 수 있는 커뮤니티 사이트', type: ['ISTP', 'ISFP', 'INFP', 'INTP', 'ENFP', 'ENTP', 'ESFJ', 'ENFJ', 'ENTJ'] },
      { answer: 'b. 비슷한 투자성향의 사람들과 소속감을 느낄 수 있는 오프라인 모임', type: ['ISTJ', 'ISFJ', 'INFJ', 'ESTP', 'ESFP', 'ESTJ', 'ESFJ'] },
      { answer: 'c. 투자 전망과 인사이트를 제공해주는 투자 추천 서비스', type: ['ISTP', 'ISFP', 'ENFP', 'ESTJ', 'ESFJ'] },
      { answer: 'd. 그딴 거 없다. 난 내 갈 길 간다.', type: ['INTJ', 'ISTP', 'INFP', 'INTP', 'ENTP', 'ENFJ']}
    ]
  },
  {
    q: '5. 들고 있던 주식이 갑자기 급등했다.',
    a: [
      { answer: 'a. 개이득입니다~ 바로 익절한다.', type: ['ISFP', 'INFP', 'ESTP', 'ESFP', 'ENFP' ] },
      { answer: 'b. 무슨 호재가 있나? 뉴스를 찾아본다.', type: ['INTJ', 'ISTP', 'INTP', 'ENTP', 'ESTJ', 'ESFJ']},
      { answer: 'c. 그러거나 말거나, 난 내 갈 길 간다.', type: ['ISTJ', 'ISFJ', 'INFJ', 'ENTP', 'ENFJ'] },
      { answer: 'd. 목표한 수익률에 달성했다면 매도하고 그렇지 않다면 홀딩한다.', type: ['ISFJ', 'INTP', 'ENTP', 'ENFJ', 'ENTJ'] }
    ]
  },

  {
    q: '6. 무료로 얻은 600만원의 주식이 400만원으로 하락했다. 당신의 생각은?',
    a: [
      { answer: 'a. 400만원 이익', type: ['ISFJ', 'ISFP', 'INFP', 'ESTP', 'ESFP', 'ESTJ', 'ENTJ'] },
      { answer: 'b. 200만원 손실', type: ['INFJ', 'INTJ', 'ISTP', 'INTP', 'ENTP', 'ESTJ', 'ENFJ'] },
      { answer: 'c. 손실도 이익도 아님', type: ['INTP', 'ENFP', 'ENTP', 'ENTJ'] },
      { answer: 'd. 잘 모르겠음', type: ['ISTJ', 'ESFJ'] },
    ]
  },
  {
    q: '7. A회사에 다니는 친구가 회사의 긍정적인 신약 개발 소식을 미리 알려줬다.',
    a: [
      { answer: 'a. 회사에 대해 꼼꼼히 분석해보고 장기적으로 바라보고 투자한다.', type: ['ISTJ', 'ISFJ', 'INFJ', 'ENTP', 'ESFJ'] },
      { answer: 'b. 단기적인 주가 상승을 노리고 투자해본다.', type: ['INTJ', 'ISTP', 'ISFP', 'INFP', 'INTP', 'ESTP', 'ESFP', 'ENFP', 'ESFJ'] },
      { answer: 'c. 한 귀로 듣고 한 귀로 흘린다.', type: ['INTP', 'ENTP', 'ENFJ'] },
      { answer: 'd. A회사를 유의깊게 관찰하나 섣불리 투자하지는 않는다.', type: ['ISTJ', 'ISFJ', 'ESTJ', 'ENTJ'] },
    ]
  },
  {
    q: '8. 당신이 생각하는 주가 상승의 필요조건은?',
    a: [
      { answer: 'a. 기업의 안정성, 성장성', type: ['ISTJ', 'ISFJ', 'INFP', 'ENTP', 'ESTJ', 'ENFJ'] },
      { answer: 'b. 해당 기업의 호재 뉴스', type: ['INFJ', 'INTJ', 'ISTP', 'INTP', 'ESTP', 'ENFP', 'ESFJ'] },
      { answer: 'c. 주가 지수의 상승세', type: ['INTJ', 'ISFP', 'ENTP', 'ESFP', 'ESFJ', 'ENTJ'] },
      { answer: 'd. 주식 거래량, 차트 흐름', type: ['ISTP', 'ISFP', 'INFP', 'INTP', 'ESFP', 'ENFJ', 'ENTJ'] }
    ]
  },
  {
    q: '9. 당신은 회사에서 일을 하고 있습니다.',
    a: [
      { answer: 'a. 주식창이 계속 켜져 있다.', type: ['INTJ', 'ISFP', 'INFP', 'INTP', 'ESTP', 'ESFP', 'ENTP', 'ENFJ'] },
      { answer: 'b. 1시간에 한 번 주가를 살펴본다.', type: ['ISTP', 'ESTP', 'ESFP', 'ENTP', 'ESFJ', 'ENTJ'] },
      { answer: 'c. 그날 그날만 확인하면 됐지! 점심시간에 한 번 정도 주가를 살핀다.', type: ['ISTJ', 'ENFP', 'ESTJ', 'ESFJ', 'ENFJ'] },
      { answer: 'd. 무념무상, 안 본다.', type: ['ISTJ', 'ISFJ', 'INFJ', 'INTP', 'ESTJ', 'ENTJ'] },
    ]
  },
  {
    q: '10. 배당금이 100만원 정도 들어왔다.',
    a: [
      { answer: 'a. 복리의 마법 가즈아, 배당금 전부 재투자한다.', type: ['ISTJ', 'ISFJ', 'INFJ', 'INTJ', 'INTP', 'ENFP', 'ENTP', 'ESTJ', 'ENFJ'] },
      { answer: 'b. 먹고 살고자 하는 건데, 50%는 생활비로 쓰고 재투자한다.', type: ['INTJ', 'ISTP', 'INFP', 'ESTP', 'ENFP', 'ENFJ'] },
      { answer: 'c. 얘들아, 내가 쏜다! 친구들에게 베푼다.', type: ['ISTP', 'ISFP', 'ESFP', 'ENTJ'] },
      { answer: 'd. 저축한다.', type: ['ISTJ', 'INFP', 'ESTJ', 'ESFJ', 'monkey' ] }
    ]
  },
  {
    q: '11. 투자할 회사를 찾고 있다.',
    a: [
      { answer: 'a. 섹터, 영업이익 규모에 알맞은 회사를 찾아본다.', type: ['ISFP', 'INFP', 'ESTP', 'pig' ] },
      { answer: 'b. 특정 회사의 제품, 수익구조까지 꼼꼼히 찾아본다.', type: ['ISFJ', 'INFJ', 'INTJ', 'ISTP', 'INTP', 'ENFJ'] },
      { answer: 'c. 삼성전자, 애플과 같은 검증된 기업을 찾아본다.', type: ['ISTJ', 'ESTP', 'ENTP', 'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ'] },
      { answer: 'd. 최근 가장 핫한 회사를 찾아본다.', type: ['ISFP', 'INFP', 'ESFP', 'ENFP'] }
    ]
  },
  {
    q: '12. 친구가 주식에서 손해를 보았다.',
    a: [
      { answer: 'a. "어떤 거 투자했는데? 한 번 봐봐" 함께 주식 분석을 한다.', type: ['INTJ', 'ISTP', 'ESTP', 'ENTP', 'ESTJ', 'ENTJ'] },
      { answer: 'b. "괜찮아, 괜찮아." 일단은 친구를 달래준다.', type: ['ISFJ', 'ISFP', 'ESFP', 'ENFP', 'ESFJ', 'ENFJ'] },
      { answer: 'c. "어.. 너두?" 자기자신과 똑같은 상황에 감정이입한다.', type: ['ISFP', 'INFP'] },
      { answer: 'd. "....." 주식 이야기는 언제나 최대한 피한다.', type: ['ISTJ', 'INFJ', 'INTP'] }
    ]
  }
]

const infoList = [
  {
    name: '산은 산이요 투자는 투자로다 ISTJ',
    desc: '안정적인 투자를 지향하는 당신! 명확한 가이드라인이 있고 정확한 투자를 원한다. 시장 적립식 투자'
  },
  {
    name: '좋은 회사와는 죽을 때까지 가자 ISFJ',
    desc: '참을성이 좋은 당신! 좋은 회사와 함께 죽을 때까지 가도 좋아~ 워렌버핏'
  },
  {
    name: '완벽주의자, 뚝심 있는 투자자 INFJ',
    desc: '한 번 꽂힌 회사는 기어코 사고야 마는 당신! 완벽주의적인 성격과 뚝심있는 모습은 투자자로서의 큰 강점! 찰리 멍거'
  },
  {
    name: '냉철한 판단력과 전략적인 투자자 INTJ',
    desc: '논리와 철저한 계획을 바탕으로 합리적인 투자를 전개하는 당신! 꼼꼼함과 냉철한 판단력은 가장 이상적인 투자자! 르네상스 테크놀로지'
  },
  {
    name: '논리적이고 호기심 많은 투자자 ISTP',
    desc: '논리를 바탕으로 자유로움을 즐기는 당신! 저평가된 주식의 가치를 알아볼 수 있는 특별한 투자자! 세계 최대 스타트업 투자 회사 타이거 매니지먼트'
  },
  {
    name: '현실적이고 위기에 강한 투자자 ISFP',
    desc: '현실감각이 발달하고 마음이 넓은 당신! 히말라야 캐피탈(리 루)'
  },
  {
    name: '바로 지금이야! 뛰어난 직관력을 가진 투자자 INFP',
    desc: '뛰어난 직관력을 가지고 놀라운 투자 센스를 보여주는 당신! 한 차원 높은 정보 분석능력을 가진 투자자! 조지 소로스'
  },
  {
    name: '객관적인 수치를 바탕으로 세상을 재단하는 투자자 INTP',
    desc: '여러 정보를 바탕으로 계산하는 능력이 뛰어난 당신! 게으름만 고친다면 누구보다 뛰어난 투자자가 될 수 있다! 마이클 버리'
  },
  {
    name: '직접 문제를 해결하는 투자자 ESTP',
    desc: '항상 주변에 영향력을 행사하는 당신! 직접 행동하여 회사의 문제점이나 단점을 고치는 투자자가 될 수 있다! 칼 아이칸'
  },
  {
    name: '뛰어난 사교성으로 다양한 정보를 얻는 투자자 ESFP',
    desc: '뛰어난 사교성과 재치넘치는 당신! 다양한 사람들과 관계를 맺으며 숫자로는 보이지 않는 정보들을 얻을 수 있어요. 다만 너무 많은 정보와 거짓 뉴스들이 혼란스럽게 할 수 있으니 판단력을 키우면 정말 훌륭한 투자자가 될 수 있어요. Kerrisdale Capital Management 삼 아드랭기'
  },
  {
    name: '창의적이고 다재다능한 투자자 ENFP',
    desc: '독립적이고 창의적인 능력을 가진 당신! 일상생활에서 회사의 가치를 발견할 수 있는 섬세한 투자자가 될 수 있어요. 집중력을 조금만 발휘한다면 아무도 찾지 못한 것을 캐치할 수 있어요. 켄 피셔'
  },
  {
    name: '뛰어난 지식을 바탕으로 논리를 펼치는 투자자 ENTP',
    desc: '대담함과 뛰어난 지식을 바탕으로 논리를 펼치는 당신! 모순이 있거나 이상한 부분을 다른 사람들보다 잘 파악하는 능력을 가지고 있어요. 침착함을 갖춘다면 더 뛰어난 투자자가 될 수 있어요. 폴 싱어'
  },
  {
    name: '목표를 설정하고 나아가는 투자자 ESTJ',
    desc: '설정한 목표를 이루기 위해 단계적으로 계획을 세우는 당신! 주위 상황에 휘둘리지 않고 자신의 목표를 묵묵히 걸어가는 뚝심있는 투자자가 될 수 있어요. 논리를 바탕으로 주위 환경에 휘둘리지 않는다면 위대한 투자자가 될 수 있어요. 레이 달리오'
  },
  {
    name: '옳고 그름을 명확히 판단하는 투자자 ESFJ',
    desc: '무엇이 옳고 그른지 정확히 판단하는 당신! 자신이나 타인의 투자에서 잘못된 부분을 고치며 성장하는 투자자가 될 수 있어요. 믿음직스러운 투자자들과 함께 커뮤니티를 형성하며 투자를 한다면 더 뛰어난 투자자가 될 수 있어요. 국민연금'
  },
  {
    name: '새로운 길을 개척하는 투자자 ENFJ',
    desc: '명확한 자신의 가치관을 바탕으로 색다른 것을 추구하는 당신! 남들이 생각치 못하는 곳에서 투자 아이디어를 얻고 세상의 가치를 창출하는 투자자가 될 수 있어요. 다른 사람들에게 자신의 인사이트를 공유하며 동기부여를 얻는다면 위대한 투자자가 될 수 있어요. 빌 게이츠'
  },
  {
    name: '주위 환경에 휘둘리지 않는 냉철함과 효율적인 투자자 ENTJ',
    desc: '거침없는 모습과 항상 객관적으로 상황을 판단하는 당신! 항상 효율적인 방향으로 투자하고 감정에 쉽게 휘둘리지 않는 투자자가 될 수 있어요. 마음이 맞는 사람들과 팀을 이루어 주어진 목표를 향해 투자를 이어간다면 훌륭한 투자자가 될 수 있어요. 빌 애크먼'
  }
]
