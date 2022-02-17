const diagnosisDataList = [
  {
    type: 'radio',
    title: 'あなたは一目惚れをしやすいですか？',
    answerList: [
      { text: 'はい', type: 'passion', point: 20 },
      { text: 'いいえ', type: 'sincerity', point: 10 },
      { text: 'どちらでもない', type: 'reality', point: 10 },
    ],
  },
  {
    type: 'checkbox',
    title: 'あなたは恋愛で何を重視しますか？',
    answerList: [
      { text: '顔', type: 'passion', point: 20 },
      { text: 'フィーリング', type: 'feeling', point: 20 },
      { text: '性格', type: 'sincerity', point: 20 },
      { text: '経済力', type: 'reality', point: 20 },
    ],
  },
  {
    type: 'checkbox',
    title: 'あなたのラインの頻度は週にどのくらいですか？',
    answerList: [
      { text: '毎日10通以上', type: 'passion', point: 30 },
      { text: '毎日10通未満', type: 'feeling', point: 20 },
      { text: '週に5日', type: 'sincerity', point: 10 },
      { text: '週に5日未満', type: 'reality', point: 10 },
    ],
  },
  {
    type: 'radio',
    title: 'あなたは仲良くなるまで時間がかかるタイプですか？',
    answerList: [
      { text: 'はい', type: 'feeling', point: 20 },
      { text: 'いいえ', type: 'passion', point: 10 },
      { text: 'どちらでもない', type: 'reality', point: 10 },
    ],
  },
  { type: 'input', title: 'あなたの名前を入力してください？' },
  { type: 'email', title: 'あなたのメールアドレスを入力してください？' },
  { type: 'phone', title: 'あなたの電話番号を入力してください？' },
] as const

export { diagnosisDataList }
