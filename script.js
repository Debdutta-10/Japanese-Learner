const hiraganaRows = {
  aiueo: {
    label: 'A I U E O',
    items: [
      { kana: 'あ', romaji: 'a' },
      { kana: 'い', romaji: 'i' },
      { kana: 'う', romaji: 'u' },
      { kana: 'え', romaji: 'e' },
      { kana: 'お', romaji: 'o' }
    ]
  },
  k: {
    label: 'K',
    items: [
      { kana: 'か', romaji: 'ka' },
      { kana: 'き', romaji: 'ki' },
      { kana: 'く', romaji: 'ku' },
      { kana: 'け', romaji: 'ke' },
      { kana: 'こ', romaji: 'ko' }
    ]
  },
  s: {
    label: 'S',
    items: [
      { kana: 'さ', romaji: 'sa' },
      { kana: 'し', romaji: 'shi' },
      { kana: 'す', romaji: 'su' },
      { kana: 'せ', romaji: 'se' },
      { kana: 'そ', romaji: 'so' }
    ]
  },
  t: {
    label: 'T',
    items: [
      { kana: 'た', romaji: 'ta' },
      { kana: 'ち', romaji: 'chi' },
      { kana: 'つ', romaji: 'tsu' },
      { kana: 'て', romaji: 'te' },
      { kana: 'と', romaji: 'to' }
    ]
  },
  n: {
    label: 'N',
    items: [
      { kana: 'な', romaji: 'na' },
      { kana: 'に', romaji: 'ni' },
      { kana: 'ぬ', romaji: 'nu' },
      { kana: 'ね', romaji: 'ne' },
      { kana: 'の', romaji: 'no' }
    ]
  },
  h: {
    label: 'H',
    items: [
      { kana: 'は', romaji: 'ha' },
      { kana: 'ひ', romaji: 'hi' },
      { kana: 'ふ', romaji: 'fu' },
      { kana: 'へ', romaji: 'he' },
      { kana: 'ほ', romaji: 'ho' }
    ]
  },
  m: {
    label: 'M',
    items: [
      { kana: 'ま', romaji: 'ma' },
      { kana: 'み', romaji: 'mi' },
      { kana: 'む', romaji: 'mu' },
      { kana: 'め', romaji: 'me' },
      { kana: 'も', romaji: 'mo' }
    ]
  },
  y: {
    label: 'Y',
    items: [
      { kana: 'や', romaji: 'ya' },
      { kana: 'ゆ', romaji: 'yu' },
      { kana: 'よ', romaji: 'yo' }
    ]
  },
  r: {
    label: 'R',
    items: [
      { kana: 'ら', romaji: 'ra' },
      { kana: 'り', romaji: 'ri' },
      { kana: 'る', romaji: 'ru' },
      { kana: 'れ', romaji: 're' },
      { kana: 'ろ', romaji: 'ro' }
    ]
  },
  w: {
    label: 'W',
    items: [
      { kana: 'わ', romaji: 'wa' },
      { kana: 'を', romaji: 'wo' }
    ]
  },
  finaln: {
    label: 'N (ん)',
    items: [{ kana: 'ん', romaji: 'n' }]
  }
};

const vocabWords = [
  { jp: 'わたし', en: ['i', 'me'] },
  { jp: 'あなた', en: ['you'] },
  { jp: 'かれ', en: ['he'] },
  { jp: 'かのじょ', en: ['she'] },
  { jp: 'せんせい', en: ['teacher'] },
  { jp: 'がくせい', en: ['student'] },
  { jp: 'ともだち', en: ['friend'] },
  { jp: 'かぞく', en: ['family'] },
  { jp: 'ちち', en: ['father'] },
  { jp: 'はは', en: ['mother'] },
  { jp: 'あに', en: ['older brother'] },
  { jp: 'あね', en: ['older sister'] },
  { jp: 'おとうと', en: ['younger brother'] },
  { jp: 'いもうと', en: ['younger sister'] },
  { jp: 'こども', en: ['child'] },
  { jp: 'ひと', en: ['person'] },
  { jp: 'なまえ', en: ['name'] },
  { jp: 'にほん', en: ['japan'] },
  { jp: 'にほんご', en: ['japanese'] },
  { jp: 'えいご', en: ['english'] },
  { jp: 'がっこう', en: ['school'] },
  { jp: 'だいがく', en: ['university'] },
  { jp: 'かいしゃ', en: ['company'] },
  { jp: 'しごと', en: ['work', 'job'] },
  { jp: 'びょういん', en: ['hospital'] },
  { jp: 'えき', en: ['station'] },
  { jp: 'みせ', en: ['shop', 'store'] },
  { jp: 'ぎんこう', en: ['bank'] },
  { jp: 'としょかん', en: ['library'] },
  { jp: 'ゆうびんきょく', en: ['post office'] },
  { jp: 'いえ', en: ['house', 'home'] },
  { jp: 'へや', en: ['room'] },
  { jp: 'まど', en: ['window'] },
  { jp: 'どあ', en: ['door'] },
  { jp: 'つくえ', en: ['desk'] },
  { jp: 'いす', en: ['chair'] },
  { jp: 'ほん', en: ['book'] },
  { jp: 'じしょ', en: ['dictionary'] },
  { jp: 'しんぶん', en: ['newspaper'] },
  { jp: 'ざっし', en: ['magazine'] },
  { jp: 'てがみ', en: ['letter'] },
  { jp: 'かみ', en: ['paper'] },
  { jp: 'えんぴつ', en: ['pencil'] },
  { jp: 'ぺん', en: ['pen'] },
  { jp: 'のうと', en: ['notebook'] },
  { jp: 'とけい', en: ['clock', 'watch'] },
  { jp: 'かさ', en: ['umbrella'] },
  { jp: 'かばん', en: ['bag'] },
  { jp: 'くつ', en: ['shoes'] },
  { jp: 'ふく', en: ['clothes'] },
  { jp: 'ぼうし', en: ['hat'] },
  { jp: 'めがね', en: ['glasses'] },
  { jp: 'くるま', en: ['car'] },
  { jp: 'じてんしゃ', en: ['bicycle'] },
  { jp: 'でんしゃ', en: ['train'] },
  { jp: 'ばす', en: ['bus'] },
  { jp: 'ひこうき', en: ['airplane'] },
  { jp: 'ふね', en: ['boat', 'ship'] },
  { jp: 'みち', en: ['road', 'way'] },
  { jp: 'ちず', en: ['map'] },
  { jp: 'くに', en: ['country'] },
  { jp: 'まち', en: ['town'] },
  { jp: 'むら', en: ['village'] },
  { jp: 'うみ', en: ['sea'] },
  { jp: 'かわ', en: ['river'] },
  { jp: 'やま', en: ['mountain'] },
  { jp: 'そら', en: ['sky'] },
  { jp: 'てんき', en: ['weather'] },
  { jp: 'あめ', en: ['rain'] },
  { jp: 'ゆき', en: ['snow'] },
  { jp: 'かぜ', en: ['wind'] },
  { jp: 'はる', en: ['spring'] },
  { jp: 'なつ', en: ['summer'] },
  { jp: 'あき', en: ['autumn', 'fall'] },
  { jp: 'ふゆ', en: ['winter'] },
  { jp: 'あさ', en: ['morning'] },
  { jp: 'ひる', en: ['noon', 'daytime'] },
  { jp: 'よる', en: ['night'] },
  { jp: 'きょう', en: ['today'] },
  { jp: 'きのう', en: ['yesterday'] },
  { jp: 'あした', en: ['tomorrow'] },
  { jp: 'まいにち', en: ['every day'] },
  { jp: 'いま', en: ['now'] },
  { jp: 'じかん', en: ['time'] },
  { jp: 'ふん', en: ['minute'] },
  { jp: 'はん', en: ['half'] },
  { jp: 'しゅう', en: ['week'] },
  { jp: 'つき', en: ['moon', 'month'] },
  { jp: 'とし', en: ['year'] },
  { jp: 'げつようび', en: ['monday'] },
  { jp: 'かようび', en: ['tuesday'] },
  { jp: 'すいようび', en: ['wednesday'] },
  { jp: 'もくようび', en: ['thursday'] },
  { jp: 'きんようび', en: ['friday'] },
  { jp: 'どようび', en: ['saturday'] },
  { jp: 'にちようび', en: ['sunday'] },
  { jp: 'いちがつ', en: ['january'] },
  { jp: 'にがつ', en: ['february'] },
  { jp: 'さんがつ', en: ['march'] },
  { jp: 'しがつ', en: ['april'] },
  { jp: 'ごがつ', en: ['may'] },
  { jp: 'ろくがつ', en: ['june'] },
  { jp: 'しちがつ', en: ['july'] },
  { jp: 'はちがつ', en: ['august'] },
  { jp: 'くがつ', en: ['september'] },
  { jp: 'じゅうがつ', en: ['october'] },
  { jp: 'じゅういちがつ', en: ['november'] },
  { jp: 'じゅうにがつ', en: ['december'] },
  { jp: 'いち', en: ['one'] },
  { jp: 'に', en: ['two'] },
  { jp: 'さん', en: ['three'] },
  { jp: 'よん', en: ['four'] },
  { jp: 'ご', en: ['five'] },
  { jp: 'ろく', en: ['six'] },
  { jp: 'なな', en: ['seven'] },
  { jp: 'はち', en: ['eight'] },
  { jp: 'きゅう', en: ['nine'] },
  { jp: 'じゅう', en: ['ten'] },
  { jp: 'ひゃく', en: ['hundred'] },
  { jp: 'せん', en: ['thousand'] },
  { jp: 'まん', en: ['ten thousand'] },
  { jp: 'なに', en: ['what'] },
  { jp: 'だれ', en: ['who'] },
  { jp: 'どこ', en: ['where'] },
  { jp: 'いつ', en: ['when'] },
  { jp: 'どう', en: ['how'] },
  { jp: 'どれ', en: ['which'] },
  { jp: 'これ', en: ['this'] },
  { jp: 'それ', en: ['that'] },
  { jp: 'あれ', en: ['that over there'] },
  { jp: 'ここ', en: ['here'] },
  { jp: 'そこ', en: ['there'] },
  { jp: 'あそこ', en: ['over there'] },
  { jp: 'たべる', en: ['eat'] },
  { jp: 'のむ', en: ['drink'] },
  { jp: 'みる', en: ['see', 'watch'] },
  { jp: 'きく', en: ['listen', 'ask'] },
  { jp: 'はなす', en: ['speak', 'talk'] },
  { jp: 'よむ', en: ['read'] },
  { jp: 'かく', en: ['write'] },
  { jp: 'いく', en: ['go'] },
  { jp: 'くる', en: ['come'] },
  { jp: 'かえる', en: ['return', 'go back'] },
  { jp: 'する', en: ['do'] },
  { jp: 'ある', en: ['exist inanimate'] },
  { jp: 'いる', en: ['exist animate'] },
  { jp: 'ねる', en: ['sleep'] },
  { jp: 'おきる', en: ['wake up'] },
  { jp: 'はたらく', en: ['work'] },
  { jp: 'やすむ', en: ['rest'] },
  { jp: 'かう', en: ['buy'] },
  { jp: 'うる', en: ['sell'] },
  { jp: 'まつ', en: ['wait'] },
  { jp: 'あう', en: ['meet'] },
  { jp: 'おしえる', en: ['teach'] },
  { jp: 'ならう', en: ['learn'] },
  { jp: 'わかる', en: ['understand'] },
  { jp: 'つかう', en: ['use'] },
  { jp: 'もつ', en: ['hold', 'have'] },
  { jp: 'たつ', en: ['stand'] },
  { jp: 'すわる', en: ['sit'] },
  { jp: 'はいる', en: ['enter'] },
  { jp: 'でる', en: ['leave', 'exit'] },
  { jp: 'あける', en: ['open'] },
  { jp: 'しめる', en: ['close'] },
  { jp: 'はじめる', en: ['start', 'begin'] },
  { jp: 'おわる', en: ['finish', 'end'] },
  { jp: 'あるく', en: ['walk'] },
  { jp: 'はしる', en: ['run'] },
  { jp: 'つくる', en: ['make'] },
  { jp: 'てつだう', en: ['help'] },
  { jp: 'あそぶ', en: ['play'] },
  { jp: 'うたう', en: ['sing'] },
  { jp: 'およぐ', en: ['swim'] },
  { jp: 'たかい', en: ['high', 'expensive'] },
  { jp: 'やすい', en: ['cheap'] },
  { jp: 'おおきい', en: ['big'] },
  { jp: 'ちいさい', en: ['small'] },
  { jp: 'あたらしい', en: ['new'] },
  { jp: 'ふるい', en: ['old'] },
  { jp: 'よい', en: ['good'] },
  { jp: 'わるい', en: ['bad'] },
  { jp: 'おおい', en: ['many'] },
  { jp: 'すくない', en: ['few'] },
  { jp: 'あつい', en: ['hot'] },
  { jp: 'さむい', en: ['cold weather'] },
  { jp: 'つめたい', en: ['cold thing'] },
  { jp: 'ながい', en: ['long'] },
  { jp: 'みじかい', en: ['short'] },
  { jp: 'ちかい', en: ['near'] },
  { jp: 'とおい', en: ['far'] },
  { jp: 'はやい', en: ['early', 'fast'] },
  { jp: 'おそい', en: ['late', 'slow'] },
  { jp: 'しろい', en: ['white'] },
  { jp: 'くろい', en: ['black'] },
  { jp: 'あかい', en: ['red'] },
  { jp: 'あおい', en: ['blue'] },
  { jp: 'すき', en: ['like'] },
  { jp: 'きらい', en: ['dislike'] },
  { jp: 'じょうず', en: ['skillful'] },
  { jp: 'へた', en: ['unskillful'] },
  { jp: 'げんき', en: ['healthy', 'energetic'] },
  { jp: 'ゆうめい', en: ['famous'] },
  { jp: 'しずか', en: ['quiet'] },
  { jp: 'べんり', en: ['convenient'] },
  { jp: 'だいじょうぶ', en: ['all right', 'okay'] },
  { jp: 'ひつよう', en: ['necessary'] },
  { jp: 'たべもの', en: ['food'] },
  { jp: 'のみもの', en: ['drink'] },
  { jp: 'みず', en: ['water'] },
  { jp: 'おちゃ', en: ['tea'] },
  { jp: 'ぎゅうにゅう', en: ['milk'] },
  { jp: 'ごはん', en: ['rice', 'meal'] },
  { jp: 'にく', en: ['meat'] },
  { jp: 'さかな', en: ['fish'] },
  { jp: 'やさい', en: ['vegetables'] },
  { jp: 'くだもの', en: ['fruit'] },
  { jp: 'たまご', en: ['egg'] },
  { jp: 'ねこ', en: ['cat'] },
  { jp: 'いぬ', en: ['dog'] },
  { jp: 'とり', en: ['bird'] },
  { jp: 'はな', en: ['flower'] },
  { jp: 'き', en: ['tree'] },
  { jp: 'おんがく', en: ['music'] },
  { jp: 'えいが', en: ['movie'] },
  { jp: 'しゃしん', en: ['photo'] },
  { jp: 'え', en: ['picture'] },
  { jp: 'でんわ', en: ['phone'] },
  { jp: 'ばんごう', en: ['number'] },
  { jp: 'しつもん', en: ['question'] },
  { jp: 'こたえ', en: ['answer'] },
  { jp: 'しけん', en: ['exam', 'test'] },
  { jp: 'しゅくだい', en: ['homework'] },
  { jp: 'れんしゅう', en: ['practice'] },
  { jp: 'いみ', en: ['meaning'] },
  { jp: 'ことば', en: ['word'] },
  { jp: 'ぶん', en: ['sentence'] },
  { jp: 'みぎ', en: ['right'] },
  { jp: 'ひだり', en: ['left'] },
  { jp: 'まえ', en: ['front', 'before'] },
  { jp: 'うしろ', en: ['behind', 'back'] },
  { jp: 'なか', en: ['inside'] },
  { jp: 'そと', en: ['outside'] },
  { jp: 'した', en: ['below', 'under'] },
  { jp: 'うえ', en: ['above', 'on'] },
  { jp: 'となり', en: ['next to'] },
  { jp: 'ちかく', en: ['nearby'] },
  { jp: 'いっしょ', en: ['together'] },
  { jp: 'ほんとう', en: ['really', 'truth'] },
  { jp: 'たぶん', en: ['maybe'] },
  { jp: 'もう', en: ['already'] },
  { jp: 'まだ', en: ['still', 'not yet'] },
  { jp: 'とても', en: ['very'] },
  { jp: 'すこし', en: ['a little'] },
  { jp: 'たくさん', en: ['a lot', 'many'] },
  { jp: 'いつも', en: ['always'] },
  { jp: 'ときどき', en: ['sometimes'] },
  { jp: 'こんど', en: ['next time'] },
  { jp: 'いちばん', en: ['best', 'number one'] },
  { jp: 'おなじ', en: ['same'] },
  { jp: 'ちがう', en: ['different'] },
  { jp: 'たいせつ', en: ['important'] },
  { jp: 'かんたん', en: ['easy', 'simple'] },
  { jp: 'むずかしい', en: ['difficult'] },
  { jp: 'あぶない', en: ['dangerous'] },
  { jp: 'いたい', en: ['painful'] },
  { jp: 'ねむい', en: ['sleepy'] },
  { jp: 'いそがしい', en: ['busy'] },
  { jp: 'ひま', en: ['free', 'not busy'] },
  { jp: 'じゅんび', en: ['preparation'] },
  { jp: 'りょこう', en: ['trip', 'travel'] },
  { jp: 'よてい', en: ['plan', 'schedule'] }
];

const STORAGE_KEY = 'hiragana-flashcard-progress';
const THEME_KEY = 'hiragana-theme';

const rowOptions = document.getElementById('row-options');
const landingPanel = document.getElementById('landing');
const quizPanel = document.getElementById('quiz');
const resultsPanel = document.getElementById('results');
const practiceSetup = document.getElementById('practice-setup');
const practiceGoBtn = document.getElementById('practice-go-btn');
const practiceCancelBtn = document.getElementById('practice-cancel-btn');
const practiceStartBtn = document.getElementById('practice-start-btn');
const vocabStartBtn = document.getElementById('vocab-start-btn');
const submitBtn = document.getElementById('submit-btn');
const showAnswerBtn = document.getElementById('show-answer-btn');
const skipBtn = document.getElementById('skip-btn');
const exitBtn = document.getElementById('exit-btn');
const backBtn = document.getElementById('back-btn');
const restartBtn = document.getElementById('restart-btn');
const answerInput = document.getElementById('answer-input');
const kanaDisplay = document.getElementById('kana-display');
const promptText = document.getElementById('prompt-text');
const feedback = document.getElementById('feedback');
const progressText = document.getElementById('progress-text');
const scoreText = document.getElementById('score-text');
const streakText = document.getElementById('streak-text');
const finalScoreText = document.getElementById('final-score');
const scoreSummary = document.getElementById('score-summary');
const weakRowsText = document.getElementById('weak-rows');
const correctStatText = document.getElementById('correct-stat');
const accuracyStatText = document.getElementById('accuracy-stat');
const streakStatText = document.getElementById('streak-stat');
const sessionLengthSelect = document.getElementById('session-length');
const reviewWeakCheckbox = document.getElementById('review-weak');
const timedModeCheckbox = document.getElementById('timed-mode');
const modeButtons = document.querySelectorAll('.mode-btn');
const modeBadge = document.getElementById('mode-badge');
const selectAllBtn = document.getElementById('select-all-btn');
const clearBtn = document.getElementById('clear-btn');
const resetProgressBtn = document.getElementById('reset-progress-btn');
const darkModeBtn = document.getElementById('dark-mode-btn');
const audioBtn = document.getElementById('audio-btn');
const timerDisplay = document.getElementById('timer-display');
const timerValue = document.getElementById('timer-value');
const levelText = document.getElementById('level-text');
const xpFill = document.getElementById('xp-fill');
const xpText = document.getElementById('xp-text');
const xpEarnedText = document.getElementById('xp-earned');

let deck = [];
let currentIndex = 0;
let score = 0;
let totalCards = 0;
let streak = 0;
let bestStreak = 0;
let sessionCorrect = 0;
let sessionTotalAnswered = 0;
let currentMode = 'mixed';
let currentPromptType = 'romaji';
let currentCard = null;
let activeSessionType = 'practice';
let mastery = loadMastery();
let timerInterval = null;
let timeRemaining = 15;
let isTimedMode = false;
let isDarkMode = loadTheme();
let totalXp = Number(localStorage.getItem('hiragana-xp') || 0);

function updateXpDisplay() {
  const level = Math.floor(totalXp / 100) + 1;
  const levelXp = totalXp % 100;
  levelText.textContent = String(level);
  xpText.textContent = `${totalXp} XP`;
  xpFill.style.width = `${levelXp}%`;
}

function awardXp(amount) {
  totalXp += amount;
  localStorage.setItem('hiragana-xp', String(totalXp));
  updateXpDisplay();
}

function loadMastery() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveMastery() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(mastery));
}

function loadTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved) return saved === 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function saveTheme(isDark) {
  localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
}

function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  saveTheme(isDarkMode);
  darkModeBtn.textContent = isDarkMode ? '☀️' : '🌙';
}

function initTheme() {
  document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  darkModeBtn.textContent = isDarkMode ? '☀️' : '🌙';
}

function speakText(text, lang = 'ja-JP') {
  if (!('speechSynthesis' in window)) {
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.84;
  utterance.pitch = 1;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function startTimer() {
  if (!isTimedMode) return;

  timeRemaining = 15;
  timerDisplay.classList.remove('hidden');
  timerValue.textContent = '15';

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeRemaining -= 1;
    timerValue.textContent = String(timeRemaining);

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      showFeedback('⏱️ Time is up!', 'incorrect');
      handleWrongAnswer();
      finishCurrentCard();
    } else if (timeRemaining <= 5) {
      timerValue.style.color = 'var(--danger)';
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerDisplay.classList.add('hidden');
  timerValue.style.color = '';
}

function getCardId(card) {
  return `${card.kana}-${card.romaji}`;
}

function getCardStats(card) {
  const id = getCardId(card);
  return mastery[id] || { correct: 0, seen: 0 };
}

function updateCardStats(card, wasCorrect) {
  const id = getCardId(card);
  const stats = mastery[id] || { correct: 0, seen: 0 };
  stats.seen += 1;
  if (wasCorrect) stats.correct += 1;
  mastery[id] = stats;
  saveMastery();
}

function getCardAccuracy(card) {
  const stats = getCardStats(card);
  if (!stats.seen) return 100;
  return Math.round((stats.correct / stats.seen) * 100);
}

function buildRowSelector() {
  Object.entries(hiraganaRows).forEach(([key, row]) => {
    const label = document.createElement('label');
    label.className = 'row-option';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = key;
    checkbox.checked = true;

    const text = document.createElement('span');
    text.textContent = row.label;

    label.appendChild(checkbox);
    label.appendChild(text);
    rowOptions.appendChild(label);
  });
}

function shuffle(array) {
  const cloned = [...array];
  for (let i = cloned.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
}

function getSelectedRows() {
  const selected = [];
  document.querySelectorAll('#row-options input:checked').forEach((checkbox) => {
    selected.push({ key: checkbox.value, ...hiraganaRows[checkbox.value] });
  });
  return selected;
}

function normalizeInput(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[.,!?;'"()]/g, '')
    .replace(/\s+/g, ' ');
}

function normalizeMeaning(value) {
  return normalizeInput(value)
    .replace(/^to\s+/, '')
    .replace(/^a\s+/, '')
    .replace(/^an\s+/, '')
    .replace(/^the\s+/, '')
    .trim();
}

function isCorrectPracticeAnswer(card, inputValue, promptType) {
  const normalizedInput = normalizeInput(inputValue).replace(/\s+/g, '');

  if (promptType === 'kana') {
    return normalizedInput === normalizeInput(card.kana).replace(/\s+/g, '');
  }

  const accepted = new Set([card.romaji]);
  if (card.romaji === 'shi') accepted.add('si');
  if (card.romaji === 'chi') accepted.add('ti');
  if (card.romaji === 'tsu') accepted.add('tu');
  if (card.romaji === 'fu') accepted.add('hu');

  return accepted.has(normalizedInput);
}

function isCorrectVocabAnswer(card, inputValue) {
  const guess = normalizeMeaning(inputValue);
  return card.en.some((meaning) => normalizeMeaning(meaning) === guess);
}

function showFeedback(message, type) {
  feedback.textContent = message;
  feedback.className = `feedback ${type}`;
}

function updateProgress() {
  const currentNumber = Math.min(currentIndex + 1, totalCards);
  const prefix = activeSessionType === 'practice' ? 'CARD' : 'WORD';
  progressText.textContent = `${prefix} ${currentNumber} / ${totalCards}`;
  scoreText.textContent = `XP: ${score}`;
  streakText.textContent = `COMBO x${streak}`;
}

function setMode(mode) {
  currentMode = mode;
  modeButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.mode === mode);
  });
  modeBadge.textContent = mode === 'kana-to-romaji' ? 'Kana → Romaji' : mode === 'romaji-to-kana' ? 'Romaji → Kana' : 'Mixed';
}

function getSessionLimit(items) {
  const selectedValue = sessionLengthSelect.value;
  if (selectedValue === 'all') return items.length;
  return Math.min(Number(selectedValue), items.length);
}

function preparePracticeDeck() {
  const selectedRows = getSelectedRows();
  let items = selectedRows.flatMap((row) =>
    row.items.map((item) => ({
      ...item,
      rowKey: row.key,
      rowLabel: row.label
    }))
  );

  if (reviewWeakCheckbox.checked) {
    items.sort((a, b) => getCardAccuracy(a) - getCardAccuracy(b));
    const weakCards = items.filter((card) => getCardAccuracy(card) < 70);
    items = items.concat(weakCards);
  }

  items = shuffle(items);
  const limit = getSessionLimit(items);
  return items.slice(0, limit);
}

function prepareVocabDeck() {
  const shuffled = shuffle(vocabWords);
  const limit = getSessionLimit(shuffled);
  return shuffled.slice(0, limit);
}

function renderPracticeCard(card) {
  const promptType = currentMode === 'mixed'
    ? (Math.random() < 0.5 ? 'romaji' : 'kana')
    : currentMode === 'kana-to-romaji'
      ? 'romaji'
      : 'kana';

  currentPromptType = promptType;
  modeBadge.textContent = currentMode === 'kana-to-romaji' ? 'Kana → Romaji' : currentMode === 'romaji-to-kana' ? 'Romaji → Kana' : 'Mixed';

  if (promptType === 'romaji') {
    kanaDisplay.textContent = card.kana;
    promptText.textContent = 'Type the romaji for this hiragana';
    answerInput.placeholder = 'e.g. ki';
    return;
  }

  kanaDisplay.textContent = card.romaji;
  promptText.textContent = 'Type the hiragana for this romaji';
  answerInput.placeholder = 'e.g. き';
}

function renderVocabCard(card) {
  currentPromptType = 'vocab';
  modeBadge.textContent = 'Vocab';
  kanaDisplay.textContent = card.jp;
  promptText.textContent = 'Type the English meaning of this word';
  answerInput.placeholder = 'e.g. teacher';
}

function nextCard() {
  if (currentIndex >= deck.length) {
    endQuiz();
    return;
  }

  currentCard = deck[currentIndex];
  if (activeSessionType === 'practice') {
    renderPracticeCard(currentCard);
  } else {
    renderVocabCard(currentCard);
  }

  answerInput.value = '';
  answerInput.focus();
  feedback.textContent = '';
  feedback.className = 'feedback';
  updateProgress();
  startTimer();
}

function handleCorrectAnswer() {
  score += 1;
  awardXp(activeSessionType === 'practice' ? 10 + Math.min(streak, 5) : 12 + Math.min(streak, 5));
  sessionCorrect += 1;
  streak += 1;
  bestStreak = Math.max(bestStreak, streak);
  if (activeSessionType === 'practice') {
    updateCardStats(currentCard, true);
    showFeedback(`Correct! ${currentCard.kana} = ${currentCard.romaji}`, 'correct');
    return;
  }
  showFeedback(`Correct! ${currentCard.jp} = ${currentCard.en[0]}`, 'correct');
}

function handleWrongAnswer() {
  streak = 0;
  if (activeSessionType === 'practice') {
    updateCardStats(currentCard, false);
    const expected = currentPromptType === 'romaji' ? currentCard.romaji : currentCard.kana;
    showFeedback(`Not quite. The answer is ${expected}.`, 'incorrect');
    return;
  }
  showFeedback(`Not quite. Meanings: ${currentCard.en.join(', ')}`, 'incorrect');
}

function finishCurrentCard() {
  sessionTotalAnswered += 1;
  currentIndex += 1;
  stopTimer();
  answerInput.disabled = true;
  submitBtn.disabled = true;
  showAnswerBtn.disabled = true;
  skipBtn.disabled = true;

  setTimeout(() => {
    answerInput.disabled = false;
    submitBtn.disabled = false;
    showAnswerBtn.disabled = false;
    skipBtn.disabled = false;
    nextCard();
  }, 1100);
}

function handleAnswerSubmit() {
  if (currentIndex >= deck.length || !currentCard) return;

  const userAnswer = answerInput.value;
  if (!userAnswer.trim()) return;

  const isCorrect = activeSessionType === 'practice'
    ? isCorrectPracticeAnswer(currentCard, userAnswer, currentPromptType)
    : isCorrectVocabAnswer(currentCard, userAnswer);

  if (isCorrect) {
    handleCorrectAnswer();
  } else {
    handleWrongAnswer();
  }

  finishCurrentCard();
}

function revealAnswer() {
  if (!currentCard) return;

  if (activeSessionType === 'practice') {
    answerInput.value = currentPromptType === 'romaji' ? currentCard.romaji : currentCard.kana;
  } else {
    answerInput.value = currentCard.en[0];
  }

  handleWrongAnswer();
  finishCurrentCard();
}

function skipCard() {
  if (!currentCard) return;
  streak = 0;

  if (activeSessionType === 'practice') {
    showFeedback(`Skipped. The answer was ${currentPromptType === 'romaji' ? currentCard.romaji : currentCard.kana}.`, 'incorrect');
  } else {
    showFeedback(`Skipped. Meanings: ${currentCard.en.join(', ')}`, 'incorrect');
  }

  finishCurrentCard();
}

function endQuiz() {
  quizPanel.classList.add('hidden');
  landingPanel.classList.add('hidden');
  resultsPanel.classList.remove('hidden');

  const accuracy = sessionTotalAnswered ? Math.round((sessionCorrect / sessionTotalAnswered) * 100) : 0;
  finalScoreText.textContent = `${score} / ${totalCards}`;
  correctStatText.textContent = String(sessionCorrect);
  accuracyStatText.textContent = `${accuracy}%`;
  streakStatText.textContent = String(bestStreak);
  xpEarnedText.textContent = `+${score * (activeSessionType === 'practice' ? 10 : 12)} XP`;

  if (activeSessionType === 'practice') {
    const weakRows = Object.entries(hiraganaRows)
      .filter(([, row]) => {
        const rowAccuracy = row.items.reduce((sum, card) => sum + getCardAccuracy(card), 0) / row.items.length;
        return row.items.length > 0 && rowAccuracy < 100;
      })
      .sort(([, aRow], [, bRow]) => {
        const aAvg = aRow.items.reduce((sum, card) => sum + getCardAccuracy(card), 0) / aRow.items.length;
        const bAvg = bRow.items.reduce((sum, card) => sum + getCardAccuracy(card), 0) / bRow.items.length;
        return aAvg - bAvg;
      })
      .slice(0, 3)
      .map(([, row]) => row.label)
      .join(', ');

    weakRowsText.textContent = weakRows
      ? `Focus next: ${weakRows}`
      : 'Your selected kana are already looking strong!';
  } else {
    weakRowsText.textContent = `Vocab mode bank size: ${vocabWords.length} words.`;
  }

  const percentage = totalCards ? Math.round((score / totalCards) * 100) : 0;
  scoreSummary.textContent = `${percentage}% accuracy. ${percentage >= 80 ? 'Amazing work!' : percentage >= 60 ? 'Good job!' : 'Keep practicing!'}`;
}

function launchSession(type) {
  activeSessionType = type;

  if (type === 'practice') {
    const selectedRows = getSelectedRows();
    if (selectedRows.length === 0) {
      alert('Please select at least one row before starting practice.');
      return;
    }
    deck = preparePracticeDeck();
  } else {
    deck = prepareVocabDeck();
  }

  isTimedMode = timedModeCheckbox.checked;
  currentIndex = 0;
  score = 0;
  streak = 0;
  bestStreak = 0;
  sessionCorrect = 0;
  sessionTotalAnswered = 0;
  totalCards = deck.length;

  landingPanel.classList.add('hidden');
  resultsPanel.classList.add('hidden');
  quizPanel.classList.remove('hidden');

  scoreText.textContent = 'XP: 0';
  streakText.textContent = 'COMBO x0';
  progressText.textContent = `${type === 'practice' ? 'CARD' : 'WORD'} 0 / ${totalCards}`;
  nextCard();
}

function openPracticeSetup() {
  practiceSetup.classList.remove('hidden');
  practiceStartBtn.classList.add('hidden');
  vocabStartBtn.classList.add('hidden');
}

function closePracticeSetup() {
  practiceSetup.classList.add('hidden');
  practiceStartBtn.classList.remove('hidden');
  vocabStartBtn.classList.remove('hidden');
}

function resetSessionState() {
  stopTimer();
  deck = [];
  currentIndex = 0;
  score = 0;
  totalCards = 0;
  streak = 0;
  bestStreak = 0;
  sessionCorrect = 0;
  sessionTotalAnswered = 0;
  currentCard = null;
  answerInput.value = '';
  feedback.textContent = '';
  feedback.className = 'feedback';
  progressText.textContent = 'CARD 0 / 0';
  scoreText.textContent = 'XP: 0';
  streakText.textContent = 'COMBO x0';
}

function exitSession() {
  const shouldExit = window.confirm('Abort this session and return to home?');
  if (!shouldExit) return;
  resetSessionState();
  resetToLanding();
}

function resetToLanding() {
  landingPanel.classList.remove('hidden');
  quizPanel.classList.add('hidden');
  resultsPanel.classList.add('hidden');
  closePracticeSetup();
  answerInput.value = '';
  feedback.textContent = '';
  feedback.className = 'feedback';
}

function setAllRows(selected) {
  document.querySelectorAll('#row-options input').forEach((checkbox) => {
    checkbox.checked = selected;
  });
}

function resetProgress() {
  const shouldReset = window.confirm('Reset saved practice progress?');
  if (!shouldReset) return;

  localStorage.removeItem(STORAGE_KEY);
  mastery = {};
  alert('Progress reset successfully.');
}

practiceStartBtn.addEventListener('click', openPracticeSetup);
practiceGoBtn.addEventListener('click', () => launchSession('practice'));
practiceCancelBtn.addEventListener('click', closePracticeSetup);
vocabStartBtn.addEventListener('click', () => launchSession('vocab'));
submitBtn.addEventListener('click', handleAnswerSubmit);
restartBtn.addEventListener('click', () => launchSession(activeSessionType));
backBtn.addEventListener('click', resetToLanding);
showAnswerBtn.addEventListener('click', revealAnswer);
skipBtn.addEventListener('click', skipCard);
exitBtn.addEventListener('click', exitSession);
darkModeBtn.addEventListener('click', toggleDarkMode);
audioBtn.addEventListener('click', () => {
  if (!currentCard) return;
  if (activeSessionType === 'practice') {
    speakText(currentCard.kana, 'ja-JP');
  } else {
    speakText(currentCard.jp, 'ja-JP');
  }
});
answerInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleAnswerSubmit();
  }
});

modeButtons.forEach((button) => {
  button.addEventListener('click', () => setMode(button.dataset.mode));
});

selectAllBtn.addEventListener('click', () => setAllRows(true));
clearBtn.addEventListener('click', () => setAllRows(false));
resetProgressBtn.addEventListener('click', resetProgress);

buildRowSelector();
setMode('mixed');
initTheme();
updateXpDisplay();
