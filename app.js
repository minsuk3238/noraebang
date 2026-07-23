document.addEventListener('DOMContentLoaded', () => {
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

  renderHistoryList();

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

  // Pick Random Song with Multi-Select Checkboxes (ANY Matching Algorithm)
  function pickSong() {
    const selectedDecades = getCheckedValues('year-chip'); // e.g. ["1980-1989", "1990-1999"]
    const selectedMonths = getCheckedValues('month-chip').map(Number); // e.g. [1, 2, 12]
    const selectedGenders = getCheckedValues('gender-chip'); // e.g. ["남성", "여성"]
    const selectedGenres = getCheckedValues('genre-chip'); // e.g. ["댄스", "발라드"]

    // Filter Candidate Songs
    let candidateSongs = SONG_DATABASE.filter(song => {
      // 1. Decade Range Check
      let matchYear = true;
      if (selectedDecades.length > 0) {
        matchYear = selectedDecades.some(range => {
          const [start, end] = range.split('-').map(Number);
          return song.year >= start && song.year <= end;
        });
      }

      // 2. Month Check
      let matchMonth = true;
      if (selectedMonths.length > 0) {
        matchMonth = selectedMonths.includes(song.month);
      }

      // 3. Gender Check
      let matchGender = true;
      if (selectedGenders.length > 0) {
        matchGender = selectedGenders.includes(song.gender);
      }

      // 4. Genre Check
      let matchGenre = true;
      if (selectedGenres.length > 0) {
        matchGenre = selectedGenres.includes(song.genre);
      }

      return matchYear && matchMonth && matchGender && matchGenre;
    });

    // CRITICAL: Exclude Already Played Songs (TJ number match)
    const playedTjNumbers = new Set(playedHistory.map(item => item.tj));
    let unplayedCandidates = candidateSongs.filter(s => !playedTjNumbers.has(s.tj));

    // Handle case if ALL songs in selected criteria were already played
    if (unplayedCandidates.length === 0) {
      if (candidateSongs.length > 0) {
        alert("선택하신 체크박스 조건의 모든 곡을 이미 한 번씩 다 뽑으셨습니다! 불렀던 곡 리스트를 초기화하거나 체크 조건을 더 늘려보세요.");
        unplayedCandidates = candidateSongs; // Fallback
      } else {
        alert("선택하신 조건에 맞는 곡이 없습니다. 체크박스를 1개 이상 선택해 보세요!");
        unplayedCandidates = SONG_DATABASE;
      }
    }

    // Hide result card, show slot section
    resultCard.classList.add('hidden');
    slotSection.classList.remove('hidden');
    pickBtn.disabled = true;

    // Slot Machine Animation effect
    let counter = 0;
    const maxTicks = 15;
    const interval = setInterval(() => {
      const tempSong = SONG_DATABASE[Math.floor(Math.random() * SONG_DATABASE.length)];
      slotDisplay.textContent = `[${tempSong.tj}] ${tempSong.title}`;
      counter++;

      if (counter >= maxTicks) {
        clearInterval(interval);
        const finalSong = unplayedCandidates[Math.floor(Math.random() * unplayedCandidates.length)];
        
        // Record into Played History!
        addToPlayedHistory(finalSong);
        displayResult(finalSong);
      }
    }, 90);
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
