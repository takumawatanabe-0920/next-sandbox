const diagnosisDataList = [
  {
    _id: '0',
    type: 'radio',
    title: 'あなたは一目惚れをしやすいですか？',
    answerList: [
      { id: 'random1', text: 'はい', type: 'passion', point: 20 },
      { id: 'random2', text: 'いいえ', type: 'sincerity', point: 10 },
      { id: 'random3', text: 'どちらでもない', type: 'reality', point: 10 },
    ],
    input: {},
  },
  {
    _id: '1',
    type: 'radio',
    title: 'あなたは尽くすタイプですか？',
    answerList: [
      { id: 'random4', text: 'はい', type: 'passion', point: 30 },
      { id: 'random5', text: 'いいえ', type: 'sincerity', point: 20 },
      { id: 'random6', text: 'どちらでもない', type: 'reality', point: 10 },
    ],
    input: {},
  },
  {
    _id: '2',
    type: 'radio',
    title: 'あなたは仲良くなるまで時間がかかるタイプですか？',
    answerList: [
      { id: 'random7', text: 'はい', type: 'feeling', point: 20 },
      { id: 'random8', text: 'いいえ', type: 'passion', point: 10 },
      { id: 'random9', text: 'どちらでもない', type: 'reality', point: 10 },
    ],
    input: {},
  },
  {
    _id: '3',
    type: 'input',
    title: '好きなデートプランは?',
    input: { label: '自由記入欄', multiline: true },
  },
  {
    _id: '4',
    type: 'input',
    title: 'あなたの名前を入力してください？',
    input: { required: true, label: '氏名' },
  },
  {
    _id: '5',
    type: 'email',
    title: 'あなたのメールアドレスを入力してください？',
    input: { required: true, label: 'メールアドレス' },
  },
  {
    _id: '6',
    type: 'phone',
    title: 'あなたの電話番号を入力してください？',
    input: { required: true, label: '電話番号' },
  },
] as const

export { diagnosisDataList }

// {
//   type: 'checkbox',
//   title: 'あなたは恋愛で何を重視しますか？',
//   answerList: [
//     { text: '顔', type: 'passion', point: 20 },
//     { text: 'フィーリング', type: 'feeling', point: 20 },
//     { text: '性格', type: 'sincerity', point: 20 },
//     { text: '経済力', type: 'reality', point: 20 },
//   ],
// },
// {
//   type: 'checkbox',
//   title: 'あなたのラインの頻度は週にどのくらいですか？',
//   answerList: [
//     { text: '毎日10通以上', type: 'passion', point: 30 },
//     { text: '毎日10通未満', type: 'feeling', point: 20 },
//     { text: '週に5日', type: 'sincerity', point: 10 },
//     { text: '週に5日未満', type: 'reality', point: 10 },
//   ],
// },
