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
const THEME_KEY = 'hiragana-theme';
const rowOptions = document.getElementById('row-options');
const landingPanel = document.getElementById('landing');
const quizPanel = document.getElementById('quiz');
const resultsPanel = document.getElementById('results');
const gamePanel = document.getElementById('game');
const startBtn = document.getElementById('start-btn');
const gameStartBtn = document.getElementById('game-start-btn');
const gameExitBtn = document.getElementById('game-exit-btn');
const gameCanvas = document.getElementById('game-canvas');
const gameChoices = document.getElementById('game-choices');
const gamePrompt = document.getElementById('game-prompt');
const gameKana = document.getElementById('game-kana');
const gameProgress = document.getElementById('game-progress');
const gameScore = document.getElementById('game-score');
const gameFeedback = document.getElementById('game-feedback');
const gamePauseBtn = document.getElementById('game-pause-btn');
const gameSpeedInput = document.getElementById('game-speed');
const gameSpeedValue = document.getElementById('game-speed-value');
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
let mastery = loadMastery();
let timerInterval = null;
let timeRemaining = 15;
let isTimedMode = false;
let isDarkMode = loadTheme();
let totalXp = Number(localStorage.getItem('hiragana-xp') || 0);
let gameDeck = [];
let gameIndex = 0;
let gameCoins = 0;
let gameAnimation = null;
let gameWallX = 760;
let gameLastFrame = 0;
let gameOver = false;
let gameLane = 1;
let gameWallDepth = 0;
let gameWallChoices = [];
let gamePaused = false;

function getGameSpeed() {
  return Number(gameSpeedInput.value) * 0.00012;
}

function updateGameSpeedLabel() {
  const labels = ['Very slow', 'Slow', 'Relaxed', 'Fast', 'Very fast'];
  gameSpeedValue.textContent = labels[Number(gameSpeedInput.value) - 1];
}

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

function drawGameScene() {
  const context = gameCanvas.getContext('2d');
  context.imageSmoothingEnabled = false;
  const width = gameCanvas.width;
  const horizonY = 70;
  const collisionY = 238;
  context.fillStyle = '#17213d';
  context.fillRect(0, 0, width, gameCanvas.height);
  context.fillStyle = '#263b64';
  for (let x = 0; x < width; x += 48) context.fillRect(x, 32 + (x % 3) * 8, 24, 5);
  context.fillStyle = '#f7c948';
  context.fillRect(60, 52, 8, 8);
  context.fillRect(68, 44, 8, 8);
  context.fillStyle = '#344365';
  context.fillRect(0, horizonY, width, 168);
  context.fillStyle = '#52628b';
  context.beginPath();
  context.moveTo(330, horizonY);
  context.lineTo(510, horizonY);
  context.lineTo(width, collisionY);
  context.lineTo(0, collisionY);
  context.closePath();
  context.fill();
  context.strokeStyle = '#f7c948';
  context.lineWidth = 4;
  [0, 1, 2, 3].forEach((line) => {
    const bottomX = line * 280;
    const topX = 330 + line * 60;
    context.beginPath();
    context.moveTo(topX, horizonY);
    context.lineTo(bottomX, collisionY);
    context.stroke();
  });
  const wallScale = 0.22 + gameWallDepth * 0.78;
  const wallWidth = 42 + wallScale * 72;
  const wallHeight = 36 + wallScale * 92;
  const wallY = horizonY + (collisionY - horizonY) * gameWallDepth - wallHeight;
  gameWallChoices.forEach((choice, index) => {
    const laneCenter = 140 + index * 280;
    const wallX = laneCenter - wallWidth / 2;
    context.fillStyle = index === gameLane ? '#ffdf70' : '#ff6b6b';
    context.fillRect(wallX, wallY, wallWidth, wallHeight);
    context.fillStyle = '#943f54';
    context.fillRect(wallX + wallWidth * 0.15, wallY + wallHeight * 0.18, wallWidth * 0.7, 6 * wallScale);
    context.fillRect(wallX + wallWidth * 0.15, wallY + wallHeight * 0.5, wallWidth * 0.7, 6 * wallScale);
    context.fillStyle = '#10152b';
    context.font = `bold ${Math.max(14, 20 * wallScale)}px monospace`;
    context.textAlign = 'center';
    context.fillText(choice, laneCenter, wallY + wallHeight * 0.78);
  });
  context.fillStyle = '#fff8dc';
  context.font = 'bold 18px monospace';
  context.textAlign = 'center';
  const ballX = 140 + gameLane * 280 - 18;
  context.fillStyle = '#ffdf70';
  context.fillRect(ballX, 214, 36, 24);
  context.fillStyle = '#943f54';
  context.fillRect(ballX + 12, 222, 12, 8);
}

function englishClue(card) {
  const clues = {
    a: 'A', i: 'E', u: 'OO', e: 'EH', o: 'OH',
    ka: 'KAH', ki: 'KEY', ku: 'COO', ke: 'KEH', ko: 'COH',
    sa: 'SAH', shi: 'SHE', su: 'SUE', se: 'SEH', so: 'SOH',
    ta: 'TAH', chi: 'CHEE', tsu: 'TSOO', te: 'TEH', to: 'TOH'
  };
  return `${clues[card.romaji] || card.romaji.toUpperCase()} sound`;
}

function showGameCard(card) {
  const clue = englishClue(card);
  gamePrompt.textContent = 'Move into the lane with the matching Japanese character!';
  gameKana.textContent = clue;
  gameProgress.textContent = `STAGE ${gameIndex + 1} / ${gameDeck.length}`;
  const answerPool = hiraganaRows.aiueo.items.concat(hiraganaRows.k.items, hiraganaRows.s.items, hiraganaRows.t.items)
    .map(item => item.romaji).filter(answer => answer !== card.romaji);
  const choices = shuffle([card.kana, ...shuffle(answerPool.map(answer => hiraganaRows.aiueo.items
    .concat(hiraganaRows.k.items, hiraganaRows.s.items, hiraganaRows.t.items)
    .find(item => item.romaji === answer)?.kana)).filter(Boolean).slice(0, 2)]);
  gameWallChoices = choices;
  gameChoices.innerHTML = '';
  choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.className = 'game-choice';
    button.type = 'button';
    button.innerHTML = `<span>LANE ${index + 1}</span>${choice}`;
    button.addEventListener('click', () => moveGameLane(index));
    gameChoices.appendChild(button);
  });
  gameFeedback.textContent = 'The walls are coming! Use ← → or tap a lane.';
  gameFeedback.className = 'game-feedback';
  gameWallDepth = 0;
  gameLastFrame = 0;
  updateLaneSelection();
  gameAnimation = requestAnimationFrame(rollWall);
}

function rollWall(timestamp) {
  if (gameOver || gamePaused || !gameDeck[gameIndex]) return;
  const elapsed = gameLastFrame ? timestamp - gameLastFrame : 0;
  gameLastFrame = timestamp;
  gameWallDepth += elapsed * getGameSpeed();
  drawGameScene();
  if (gameWallDepth >= 1) {
    const isCorrectLane = gameWallChoices[gameLane] === gameDeck[gameIndex].kana;
    if (isCorrectLane) breakWall();
    else endGame(true);
    return;
  }
  gameAnimation = requestAnimationFrame(rollWall);
}

function updateLaneSelection() {
  [...gameChoices.children].forEach((button, index) => button.classList.toggle('selected', index === gameLane));
  drawGameScene();
}

function moveGameLane(lane) {
  if (gameOver || !gameDeck[gameIndex]) return;
  gameLane = Math.max(0, Math.min(2, lane));
  updateLaneSelection();
}

function toggleGamePause() {
  if (gameOver || !gameDeck[gameIndex]) return;
  gamePaused = !gamePaused;
  gamePauseBtn.textContent = gamePaused ? 'Resume' : 'Pause';
  gameFeedback.textContent = gamePaused ? 'PAUSED - choose a lane, then resume.' : 'The walls are coming! Use left and right.';
  if (gamePaused) {
    cancelAnimationFrame(gameAnimation);
    gameAnimation = null;
  } else {
    gameLastFrame = 0;
    gameAnimation = requestAnimationFrame(rollWall);
  }
}

function breakWall() {
  cancelAnimationFrame(gameAnimation);
  gameAnimation = null;
  gameCoins += 1;
  awardXp(15);
  gameFeedback.textContent = '★ Wall broken! +1 coin';
  gameFeedback.className = 'game-feedback correct';
  gameScore.textContent = `COINS ${gameCoins}`;
  setTimeout(() => {
    gameIndex += 1;
    if (gameIndex >= gameDeck.length) endGame();
    else showGameCard(gameDeck[gameIndex]);
  }, 450);
}

function startGame() {
  const selectedRows = getSelectedRows();
  if (!selectedRows.length) {
    alert('Please select at least one row before starting.');
    return;
  }
  gameDeck = shuffle(selectedRows.flatMap(row => row.items)).slice(0, 8);
  gameIndex = 0;
  gameCoins = 0;
  gameLane = 1;
  gameOver = false;
  gamePaused = false;
  landingPanel.classList.add('hidden');
  quizPanel.classList.add('hidden');
  resultsPanel.classList.add('hidden');
  gamePanel.classList.remove('hidden');
  gameScore.textContent = 'COINS 0';
  gamePauseBtn.textContent = 'Pause';
  updateGameSpeedLabel();
  showGameCard(gameDeck[0]);
}

function endGame(missedWall = false) {
  if (gameOver) return;
  gameOver = true;
  if (gameAnimation) cancelAnimationFrame(gameAnimation);
  gameAnimation = null;
  gamePanel.classList.add('hidden');
  resultsPanel.classList.remove('hidden');
  finalScoreText.textContent = `${gameCoins} / ${gameDeck.length}`;
  correctStatText.textContent = String(gameCoins);
  accuracyStatText.textContent = `${Math.round((gameCoins / gameDeck.length) * 100)}%`;
  streakStatText.textContent = 'RUN';
  xpEarnedText.textContent = `+${gameCoins * 15} XP`;
  scoreSummary.textContent = missedWall ? 'The wall reached the ball. Keep practicing!' : 'Run complete. Your kana power is growing!';
  weakRowsText.textContent = missedWall ? 'Move faster next run and break every wall.' : 'Replay the course to sharpen your misses.';
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
}

function initTheme() {
  document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  darkModeBtn.textContent = isDarkMode ? '☀️' : '🌙';
}

function speakHiragana(kana, romaji) {
  if (!('speechSynthesis' in window)) {
    alert('Text-to-speech not supported in your browser');
    return;
  }
  
  const utterance = new SpeechSynthesisUtterance(kana);
  utterance.lang = 'ja-JP';
  utterance.rate = 0.8;
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
  progressText.textContent = `CARD ${currentNumber} / ${totalCards}`;
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
    // Spaced repetition: sort by accuracy (worst first) and duplicate weak cards
    items.sort((a, b) => getCardAccuracy(a) - getCardAccuracy(b));
    
    // Add weak cards (accuracy < 70%) again to the end for reinforcement
    const weakCards = items.filter(card => getCardAccuracy(card) < 70);
    items = items.concat(weakCards);
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
  startTimer();
}

function handleCorrectAnswer() {
  score += 1;
  awardXp(10 + Math.min(streak, 5));
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
  xpEarnedText.textContent = `+${score * 10} XP`;

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

  isTimedMode = timedModeCheckbox.checked;
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

  scoreText.textContent = 'XP: 0';
  streakText.textContent = 'COMBO x0';
  progressText.textContent = `CARD 0 / ${totalCards}`;
  nextCard();
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
  const shouldExit = window.confirm('Abort this study session and return to the row selection screen?');
  if (!shouldExit) return;

  resetSessionState();
  resetToLanding();
}

function resetToLanding() {
  landingPanel.classList.remove('hidden');
  quizPanel.classList.add('hidden');
  resultsPanel.classList.add('hidden');
  gamePanel.classList.add('hidden');
  answerInput.value = '';
  feedback.textContent = '';
  feedback.className = 'feedback';
}

function exitGame() {
  if (gameAnimation) cancelAnimationFrame(gameAnimation);
  gameAnimation = null;
  resetToLanding();
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
gameStartBtn.addEventListener('click', startGame);
gameExitBtn.addEventListener('click', exitGame);
gamePauseBtn.addEventListener('click', toggleGamePause);
gameSpeedInput.addEventListener('input', updateGameSpeedLabel);
submitBtn.addEventListener('click', handleAnswerSubmit);
restartBtn.addEventListener('click', startQuiz);
backBtn.addEventListener('click', resetToLanding);
showAnswerBtn.addEventListener('click', revealAnswer);
skipBtn.addEventListener('click', skipCard);
exitBtn.addEventListener('click', exitSession);
darkModeBtn.addEventListener('click', toggleDarkMode);
audioBtn.addEventListener('click', () => {
  if (currentCard) {
    speakHiragana(currentCard.kana, currentCard.romaji);
  }
});
answerInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleAnswerSubmit();
  }
});
document.addEventListener('keydown', (event) => {
  if (gamePanel.classList.contains('hidden') || !['1', '2', '3', 'ArrowLeft', 'ArrowRight'].includes(event.key)) return;
  event.preventDefault();
  if (event.key === 'ArrowLeft') moveGameLane(gameLane - 1);
  else if (event.key === 'ArrowRight') moveGameLane(gameLane + 1);
  else moveGameLane(Number(event.key) - 1);
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
