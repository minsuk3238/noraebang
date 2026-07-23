document.addEventListener('DOMContentLoaded', () => {
  const startYearSelect = document.getElementById('startYearSelect');
  const endYearSelect = document.getElementById('endYearSelect');
  const presetBtns = document.querySelectorAll('.preset-btn');
  const pickBtn = document.getElementById('pickBtn');
  const slotSection = document.getElementById('slotSection');
  const slotDisplay = document.getElementById('slotDisplay');
  const resultCard = document.getElementById('resultCard');
  
  const resYear = document.getElementById('resYear');
  const resGenre = document.getElementById('resGenre');
  const resGender = document.getElementById('resGender');
  const resTjNum = document.getElementById('resTjNum');
  const resTitle = document.getElementById('resTitle');
  const resArtist = document.getElementById('resArtist');
  const copyBtn = document.getElementById('copyBtn');
  const ytLink = document.getElementById('ytLink');
  const rePickBtn = document.getElementById('rePickBtn');

  // History Panel Elements
  const historyList = document.getElementById('historyList');
  const historyCount = document.getElementById('historyCount');
  const clearHistoryBtn = document.getElementById('clearHistoryBtn');

  // Played Songs State Array (Loaded from localStorage)
  let playedHistory = JSON.parse(localStorage.getItem('tj_played_history')) || [];

  // Available Year Range in DB
  const minDbYear = 1980;
  const maxDbYear = 2026;

  // Populate Start & End Year Options (Restored)
  function initYearOptions() {
    startYearSelect.innerHTML = '';
    endYearSelect.innerHTML = '';

    for (let y = maxDbYear; y >= minDbYear; y--) {
      const startOpt = document.createElement('option');
      startOpt.value = y;
      startOpt.textContent = `${y}년`;
      startYearSelect.appendChild(startOpt);

      const endOpt = document.createElement('option');
      endOpt.value = y;
      endOpt.textContent = `${y}년`;
      endYearSelect.appendChild(endOpt);
    }

    // Default: 1980 ~ 2026
    startYearSelect.value = minDbYear;
    endYearSelect.value = maxDbYear;
  }

  initYearOptions();
  renderHistoryList();

  // Preset Buttons Event Listeners
  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      presetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const start = btn.dataset.start;
      const end = btn.dataset.end;

      startYearSelect.value = start;
      endYearSelect.value = end;
    });
  });

  // Helper: Get Checked Values from Name
  function getCheckedValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    return Array.from(checkboxes).map(cb => cb.value);
  }

  // Handle Select All / Toggle Buttons
  document.querySelectorAll('.select-all-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetName = btn.dataset.target;
      const checkboxes = document.querySelectorAll(`input[name="${targetName}"]`);
      const allChecked = Array.from(checkboxes).every(cb => cb.checked);

      checkboxes.forEach(cb => {
        cb.checked = !allChecked;
      });

      btn.textContent = allChecked ? '전체 선택' : '전체 해제';
    });
  });

  // Dynamic Session Auto-Initialization & State Reset Helper
  function resetDynamicSession() {
    // Completely reset dynamic slot animation state & clear card views
    resultCard.classList.add('hidden');
    slotSection.classList.remove('hidden');
    slotDisplay.textContent = "🎲 동적 추출 초기화 중...";
  }

  // Pick Random Song (Automated Dynamic Initialization on Every Click!)
  function pickSong() {
    // 1. Automate Dynamic Session & View Reset immediately
    resetDynamicSession();

    let startY = parseInt(startYearSelect.value, 10);
    let endY = parseInt(endYearSelect.value, 10);

    // Swap if startYear > endYear
    if (startY > endY) {
      [startY, endY] = [endY, startY];
      startYearSelect.value = startY;
      endYearSelect.value = endY;
    }

    const selectedMonths = getCheckedValues('month-chip').map(Number);
    const selectedGenders = getCheckedValues('gender-chip');
    const selectedGenres = getCheckedValues('genre-chip');

    // 2. Dynamically Filter 1.12M Database Entries
    let candidateSongs = SONG_DATABASE.filter(song => {
      const matchYear = song.year >= startY && song.year <= endY;
      let matchMonth = selectedMonths.length === 0 || selectedMonths.includes(song.month);
      let matchGender = selectedGenders.length === 0 || selectedGenders.includes(song.gender);
      let matchGenre = selectedGenres.length === 0 || selectedGenres.includes(song.genre);
      return matchYear && matchMonth && matchGender && matchGenre;
    });

    // 3. Exclude Played History
    const playedTjNumbers = new Set(playedHistory.map(item => item.tj));
    const playedTitles = new Set(playedHistory.map(item => `${item.title.trim().toLowerCase()}_${item.artist.trim().toLowerCase()}`));

    let unplayedCandidates = candidateSongs.filter(s => {
      const titleKey = `${s.title.trim().toLowerCase()}_${s.artist.trim().toLowerCase()}`;
      return !playedTjNumbers.has(s.tj) && !playedTitles.has(titleKey);
    });

    // Fallback handling
    if (unplayedCandidates.length === 0) {
      if (candidateSongs.length > 0) {
        alert("선택하신 조건의 모든 곡을 이미 우측 리스트에서 부르셨습니다! 오른쪽 '전체 삭제' 버튼을 눌러 초기화해 보세요.");
        unplayedCandidates = candidateSongs;
      } else {
        alert("선택하신 조건에 맞는 곡이 없습니다.");
        unplayedCandidates = SONG_DATABASE;
      }
    }

    pickBtn.disabled = true;

    // Automated Slot Machine Dynamic Random Selection
    let counter = 0;
    const maxTicks = 15;
    const interval = setInterval(() => {
      // Pick random animated seed from database
      const randomSeed = SONG_DATABASE[Math.floor(Math.random() * SONG_DATABASE.length)];
      slotDisplay.textContent = `[${randomSeed.tj}] ${randomSeed.title}`;
      counter++;

      if (counter >= maxTicks) {
        clearInterval(interval);
        
        // Pick final unique candidate from 1.12M dataset with new dynamic seed
        const finalSong = unplayedCandidates[Math.floor(Math.random() * unplayedCandidates.length)];
        
        // Auto-record to history and refresh display view
        addToPlayedHistory(finalSong);
        displayResult(finalSong);
      }
    }, 80);
  }

  // Add to Played History
  function addToPlayedHistory(song) {
    if (!playedHistory.some(item => item.tj === song.tj)) {
      playedHistory.unshift(song);
      localStorage.setItem('tj_played_history', JSON.stringify(playedHistory));
      renderHistoryList();
    }
  }

  // Render Played Songs List in Right Panel
  function renderHistoryList() {
    historyCount.textContent = playedHistory.length;

    if (playedHistory.length === 0) {
      historyList.innerHTML = `
        <div class="empty-history">
          <p>🎤 아직 뽑은 노래가 없습니다.</p>
          <span>노래를 뽑으면 중복되지 않도록 이곳에 저장됩니다!</span>
        </div>
      `;
      return;
    }

    historyList.innerHTML = '';
    playedHistory.forEach((song, index) => {
      const itemEl = document.createElement('div');
      itemEl.className = 'history-item';

      const genderIcon = song.gender === '남성' ? '👨' : (song.gender === '여성' ? '👩' : '👫');

      itemEl.innerHTML = `
        <div class="item-left">
          <span class="item-tj">${song.tj}</span>
          <span class="item-title">${song.title}</span>
          <span class="item-artist">${song.artist}</span>
          <span class="item-meta">${genderIcon} ${song.gender || ''} • ${song.year}년 • ${song.genre}</span>
        </div>
        <div class="item-actions">
          <button class="item-copy-btn" data-tj="${song.tj}" title="번호 복사">📋 복사</button>
          <button class="item-del-btn" data-index="${index}" title="삭제">✕</button>
        </div>
      `;

      historyList.appendChild(itemEl);
    });

    // History copy button event listeners
    historyList.querySelectorAll('.item-copy-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const num = e.target.dataset.tj;
        navigator.clipboard.writeText(num);
        e.target.textContent = '✅ 복사';
        setTimeout(() => e.target.textContent = '📋 복사', 1500);
      });
    });

    // History single item delete event listeners
    historyList.querySelectorAll('.item-del-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(e.target.dataset.index, 10);
        playedHistory.splice(idx, 1);
        localStorage.setItem('tj_played_history', JSON.stringify(playedHistory));
        renderHistoryList();
      });
    });
  }

  // Clear All History
  clearHistoryBtn.addEventListener('click', () => {
    if (playedHistory.length === 0) return;
    if (confirm('불렀던 곡 리스트를 전부 삭제하고 중복 기록을 초기화할까요?')) {
      playedHistory = [];
      localStorage.removeItem('tj_played_history');
      renderHistoryList();
    }
  });

  // Display Final Result
  function displayResult(song) {
    const resGender = document.getElementById('resGender');

    slotSection.classList.add('hidden');
    resultCard.classList.remove('hidden');
    pickBtn.disabled = false;

    resYear.textContent = `${song.year}년 ${song.month ? song.month + '월' : ''}`;
    resGenre.textContent = song.genre;
    
    const genderIcon = song.gender === '남성' ? '👨' : (song.gender === '여성' ? '👩' : '👫');
    resGender.textContent = `${genderIcon} ${song.gender || '가수'}`;

    resTjNum.textContent = song.tj;
    resTitle.textContent = song.title;
    resArtist.textContent = song.artist;

    // Youtube Search Link
    const query = encodeURIComponent(`TJ 노래방 ${song.artist} ${song.title}`);
    ytLink.href = `https://www.youtube.com/results?search_query=${query}`;

    // Reset Copy Button State
    copyBtn.textContent = '📋 복사';
    copyBtn.classList.remove('copied');
  }

  // Copy TJ Number to Clipboard
  copyBtn.addEventListener('click', () => {
    const numToCopy = resTjNum.textContent;
    navigator.clipboard.writeText(numToCopy).then(() => {
      copyBtn.textContent = '✅ 복사 완료!';
      copyBtn.classList.add('copied');
      setTimeout(() => {
        copyBtn.textContent = '📋 복사';
        copyBtn.classList.remove('copied');
      }, 2000);
    }).catch(() => {
      const tempInput = document.createElement('input');
      tempInput.value = numToCopy;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      copyBtn.textContent = '✅ 복사 완료!';
      copyBtn.classList.add('copied');
    });
  });

  // Event Listeners
  pickBtn.addEventListener('click', pickSong);
  rePickBtn.addEventListener('click', pickSong);
});
