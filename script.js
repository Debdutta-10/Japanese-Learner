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

const STORAGE_KEY = 'hiragana-flashcard-progress';
const rowOptions = document.getElementById('row-options');
const landingPanel = document.getElementById('landing');
const quizPanel = document.getElementById('quiz');
const resultsPanel = document.getElementById('results');
const startBtn = document.getElementById('start-btn');
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
const modeButtons = document.querySelectorAll('.mode-btn');
const modeBadge = document.getElementById('mode-badge');
const selectAllBtn = document.getElementById('select-all-btn');
const clearBtn = document.getElementById('clear-btn');
const resetProgressBtn = document.getElementById('reset-progress-btn');

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
let mastery = loadMastery();

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
  return value.trim().toLowerCase().replace(/\s+/g, '');
}

function isCorrectAnswer(card, inputValue, promptType) {
  const normalizedInput = normalizeInput(inputValue);

  if (promptType === 'kana') {
    return normalizedInput === normalizeInput(card.kana);
  }

  const accepted = new Set([card.romaji]);
  if (card.romaji === 'shi') accepted.add('si');
  if (card.romaji === 'chi') accepted.add('ti');
  if (card.romaji === 'tsu') accepted.add('tu');
  if (card.romaji === 'fu') accepted.add('hu');

  return accepted.has(normalizedInput);
}

function showFeedback(message, type) {
  feedback.textContent = message;
  feedback.className = `feedback ${type}`;
}

function updateProgress() {
  const currentNumber = Math.min(currentIndex + 1, totalCards);
  progressText.textContent = `${currentNumber} / ${totalCards}`;
  scoreText.textContent = `Score: ${score}`;
  streakText.textContent = `Streak: ${streak}`;
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

function prepareDeck() {
  const selectedRows = getSelectedRows();
  let items = selectedRows.flatMap((row) =>
    row.items.map((item) => ({
      ...item,
      rowKey: row.key,
      rowLabel: row.label
    }))
  );

  if (reviewWeakCheckbox.checked) {
    items = items.sort((a, b) => getCardAccuracy(a) - getCardAccuracy(b));
  }

  items = shuffle(items);
  const limit = getSessionLimit(items);
  return items.slice(0, limit);
}

function getPromptForCard(card) {
  const promptType = currentMode === 'mixed'
    ? (Math.random() < 0.5 ? 'romaji' : 'kana')
    : currentMode === 'kana-to-romaji'
      ? 'romaji'
      : 'kana';

  currentPromptType = promptType;
  if (promptType === 'romaji') {
    kanaDisplay.textContent = card.kana;
    promptText.textContent = 'Type the romaji for this hiragana';
    answerInput.placeholder = 'e.g. ki';
    return card.romaji;
  }

  kanaDisplay.textContent = card.romaji;
  promptText.textContent = 'Type the hiragana for this romaji';
  answerInput.placeholder = 'e.g. き';
  return card.kana;
}

function nextCard() {
  if (currentIndex >= deck.length) {
    endQuiz();
    return;
  }

  currentCard = deck[currentIndex];
  getPromptForCard(currentCard);
  answerInput.value = '';
  answerInput.focus();
  feedback.textContent = '';
  feedback.className = 'feedback';
  updateProgress();
}

function handleCorrectAnswer() {
  score += 1;
  sessionCorrect += 1;
  streak += 1;
  bestStreak = Math.max(bestStreak, streak);
  updateCardStats(currentCard, true);
  showFeedback(`Correct! ${currentCard.kana} = ${currentCard.romaji}`, 'correct');
}

function handleWrongAnswer() {
  streak = 0;
  updateCardStats(currentCard, false);
  const expected = currentPromptType === 'romaji' ? currentCard.romaji : currentCard.kana;
  showFeedback(`Not quite. The answer is ${expected}.`, 'incorrect');
}

function finishCurrentCard() {
  sessionTotalAnswered += 1;
  currentIndex += 1;
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
  if (!userAnswer.trim()) {
    return;
  }

  const isCorrect = isCorrectAnswer(currentCard, userAnswer, currentPromptType);

  if (isCorrect) {
    handleCorrectAnswer();
  } else {
    handleWrongAnswer();
  }

  finishCurrentCard();
}

function revealAnswer() {
  if (!currentCard) return;
  answerInput.value = currentPromptType === 'romaji' ? currentCard.romaji : currentCard.kana;
  handleWrongAnswer();
  finishCurrentCard();
}

function skipCard() {
  if (!currentCard) return;
  streak = 0;
  showFeedback(`Skipped. The answer was ${currentPromptType === 'romaji' ? currentCard.romaji : currentCard.kana}.`, 'incorrect');
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

  const weakRows = Object.entries(hiraganaRows)
    .filter(([key, row]) => {
      const rowAccuracy = row.items.reduce((sum, card) => sum + getCardAccuracy(card), 0) / row.items.length;
      return row.items.length > 0 && rowAccuracy < 100;
    })
    .sort(([aKey, aRow], [bKey, bRow]) => {
      const aAvg = aRow.items.reduce((sum, card) => sum + getCardAccuracy(card), 0) / aRow.items.length;
      const bAvg = bRow.items.reduce((sum, card) => sum + getCardAccuracy(card), 0) / bRow.items.length;
      return aAvg - bAvg;
    })
    .slice(0, 3)
    .map(([key, row]) => row.label)
    .join(', ');

  weakRowsText.textContent = weakRows
    ? `Focus next: ${weakRows}`
    : 'Your selected kana are already looking strong!';

  const percentage = totalCards ? Math.round((score / totalCards) * 100) : 0;
  scoreSummary.textContent = `${percentage}% accuracy. ${percentage >= 80 ? 'Amazing work!' : percentage >= 60 ? 'Good job!' : 'Keep practicing!'}`;
}

function startQuiz() {
  const selectedRows = getSelectedRows();

  if (selectedRows.length === 0) {
    alert('Please select at least one row before starting.');
    return;
  }

  deck = prepareDeck();
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

  scoreText.textContent = 'Score: 0';
  streakText.textContent = 'Streak: 0';
  progressText.textContent = `0 / ${totalCards}`;
  nextCard();
}

function resetSessionState() {
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
  progressText.textContent = '0 / 0';
  scoreText.textContent = 'Score: 0';
  streakText.textContent = 'Streak: 0';
}

function exitSession() {
  const shouldExit = window.confirm('Abort this study session and return to the row selection screen?');
  if (!shouldExit) return;

  resetSessionState();
  resetToLanding();
}

function resetToLanding() {
  landingPanel.classList.remove('hidden');
  quizPanel.classList.add('hidden');
  resultsPanel.classList.add('hidden');
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
  const shouldReset = window.confirm('Reset all saved hiragana progress?');
  if (!shouldReset) return;

  localStorage.removeItem(STORAGE_KEY);
  mastery = {};
  alert('Progress reset successfully.');
}

startBtn.addEventListener('click', startQuiz);
submitBtn.addEventListener('click', handleAnswerSubmit);
restartBtn.addEventListener('click', startQuiz);
backBtn.addEventListener('click', resetToLanding);
showAnswerBtn.addEventListener('click', revealAnswer);
skipBtn.addEventListener('click', skipCard);
exitBtn.addEventListener('click', exitSession);
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
