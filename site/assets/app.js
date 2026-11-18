/* MILO — independent portfolio demo. Mascot engine © jingluoguo, MIT license. */
(() => {
  'use strict';

  const text = {
    en: {
      brandLabel:'Interaction Lab', howNav:'How it works', creditsNav:'Credits', eyebrow:'AN INTERACTIVE FRONTEND EXPERIMENT',
      heroTitle:'Little character.<br><span class="highlight-word">Big feelings<span class="highlight-star">✳</span></span>',
      heroDescription:'Meet a tiny companion that thinks, celebrates, gets confused and responds when you say hello. All driven by real UI events.',
      exploreBtn:'Try the playground <span aria-hidden="true">↗</span>', noLogin:'No account, no backend. Just interaction.',
      metricStates:'reactive states', metricCharacters:'mascot styles', metricBrowser:'browser-powered',
      playgroundOverline:'THE PLAYGROUND', playgroundTitle:'Give it a try <span class="outline-spark">✳</span>', liveDemo:'LIVE INTERACTIVE DEMO', readyTag:'ready', stageHint:'↑ tap the character for a surprise', chooseCharacter:'CHOOSE A CHARACTER',
      interactionLab:'INTERACTION LAB',panelTitle:"What's on your mind?",panelDescription:'Try the mini dictionary or trigger an emotion yourself.',
      searchLabel:'LOOK UP A WORD',searchBtn:'Search <span aria-hidden="true">↗</span>',quickTry:'Quick try', triggerLabel:'TRIGGER A STATE',instantPreview:'instant preview',eventMonitor:'Event monitor',
      behindScenes:'BEHIND THE SCENES',howTitle:'Small details. <em>Real delight.</em>',howSubtitle:'A tiny, production-minded demo of event-driven character animation.',
      feature1title:'Type a word',feature1text:'A tiny dictionary with loading, success, empty, and simulated error paths.',
      feature2title:'Watch it react',feature2text:"The character's emotion follows interface state — with no full-page reloads.",
      feature3title:'Make it yours',feature3text:'Switch characters, click for reactions, or call state changes directly from JavaScript.',
      creditOverline:'OPEN SOURCE, CLEAR LICENSE', creditsTitle:'Built with care.<br>Shared with credit.',creditsDescription:'The live animated mascot assets use the MIT-licensed Lively Mascot project. The page, interaction flow, dictionary simulation, and fallback artwork are original demo work.',viewLibrary:'View mascot library ↗',footerLabel:'Interactive Mascot Demo',footerInfo:'A standalone portfolio concept · Vanilla JavaScript · SVG animation',backTop:'Back to top ↑',
      stickerTitle:'DESIGNED TO<br>FEEL ALIVE',stampMadeWith:'MADE WITH',stampOpenSource:'+ OPEN SOURCE',
      characterSprout:'Sprout',characterRobot:'Robot',characterCat:'Cat',
      resetText:'Reset demo',interactAria:'Interact with mascot',interactTitle:'Click me!',languageAria:'Interface language',
      pageTitle:'MILO — Interactive Mascot / Frontend Portfolio Demo',pageDescription:'MILO — an interactive mascot playground. Explore animated character states, contextual reactions, and a responsive dictionary demo.',
      quickWords:[['hello','hello'],['sun','sun'],['unknown','unknown'],['error','error']],
      placeholder:"Try ‘hello’, ‘sun’, or ‘friend’",searchNames:['Idle','Thinking','Happy','Confused','Oops!'],
      states:['IDLE','THINKING','HAPPY','CONFUSED','ERROR'],
      speeches:{idle:['Hey there! Ready to explore?','Hi! Tell me a word.'],searching:['Hmm, let me think…','Searching my tiny brain…'],success:['I found it! ✦','Yay! Another word learned!'],empty:["I couldn't find that one…",'That word is a mystery to me!'],error:['Oops! Something went wrong.','My circuits need a tiny break!']},
      clicks:['Oh, hello there! 👋','Hehe, that tickles! ✦','You found my secret smile!'],
      results:{idle:['WAITING FOR INPUT','Your next discovery starts here.'],searching:['SEARCHING','Looking through the demo dictionary…'],success:['TRANSLATION FOUND','Example: hello → привет'],empty:['NO MATCH','No translation in the mini dictionary.'],error:['SIMULATED ERROR','A network issue was simulated. Try again.']},
      searchEvent:'dictionary.search', clickEvent:'mascot.click', characterEvent:'mascot.switch', stateEvent:'mascot.setEmotion', errorEvent:'dictionary.error',
    },
    uk: {
      brandLabel:'Лабораторія взаємодії',howNav:'Як це працює',creditsNav:'Авторство',eyebrow:'ІНТЕРАКТИВНИЙ FRONTEND-ЕКСПЕРИМЕНТ',
      heroTitle:'Маленький герой.<br><span class="highlight-word">Великі емоції<span class="highlight-star">✳</span></span>',
      heroDescription:'Знайомся з персонажем, який думає, радіє, дивується та реагує на дотики. Його поведінка змінюється відповідно до дій в інтерфейсі.',
      exploreBtn:'Спробувати демо <span aria-hidden="true">↗</span>',noLogin:'Без реєстрації та сервера. Лише взаємодія.',
      metricStates:'станів',metricCharacters:'персонажі',metricBrowser:'у браузері',
      playgroundOverline:'ІНТЕРАКТИВНЕ ДЕМО',playgroundTitle:'Спробуй сам <span class="outline-spark">✳</span>',liveDemo:'ІНТЕРАКТИВНА ДЕМОНСТРАЦІЯ',readyTag:'готово',stageHint:'↑ натисни на персонажа',chooseCharacter:'ОБЕРИ ПЕРСОНАЖА',
      interactionLab:'ЛАБОРАТОРІЯ РЕАКЦІЙ',panelTitle:'Що будемо шукати?',panelDescription:'Спробуй мінісловник або самостійно перемкни емоцію.',
      searchLabel:'ЗНАЙТИ СЛОВО',searchBtn:'Знайти <span aria-hidden="true">↗</span>',quickTry:'Приклади',triggerLabel:'ОБЕРИ СТАН',instantPreview:'миттєвий перегляд',eventMonitor:'Монітор подій',
      behindScenes:'ЯК ЦЕ ПРАЦЮЄ',howTitle:'Маленькі деталі. <em>Справжні емоції.</em>',howSubtitle:'Компактне демо анімації персонажа, керованої подіями інтерфейсу.',
      feature1title:'Введи слово',feature1text:'Мінісловник зі станами завантаження, успіху, відсутності результату та імітацією помилки.',
      feature2title:'Спостерігай за реакцією',feature2text:'Емоція персонажа залежить від стану інтерфейсу — без перезавантаження сторінки.',
      feature3title:'Керуй сам',feature3text:'Змінюй персонажів, натискай на них або перемикай емоції через JavaScript.',
      creditOverline:'ВІДКРИТИЙ КОД І ПРОЗОРА ЛІЦЕНЗІЯ',creditsTitle:'Створено з турботою.<br>І повагою до авторів.',creditsDescription:'Готові анімовані персонажі використовують бібліотеку Lively Mascot із ліцензією MIT. Дизайн сторінки, сценарії взаємодії, імітація словника та резервна SVG-графіка створені для цього демо.',viewLibrary:'Переглянути бібліотеку персонажів ↗',
      footerLabel:'Демо інтерактивних персонажів',footerInfo:'Самостійний проєкт для портфоліо · Vanilla JavaScript · SVG-анімація',backTop:'Нагору ↑',
      stickerTitle:'СТВОРЕНО,<br>ЩОБ ОЖИВАТИ',stampMadeWith:'ЗРОБЛЕНО З',stampOpenSource:'+ ВІДКРИТИЙ КОД',
      characterSprout:'Паросток',characterRobot:'Робот',characterCat:'Кіт',
      resetText:'Скинути демо',interactAria:'Взаємодіяти з персонажем',interactTitle:'Натисни на мене!',languageAria:'Мова інтерфейсу',
      pageTitle:'MILO — інтерактивні персонажі / Frontend-демо',pageDescription:'MILO — інтерактивне демо з анімованими персонажами, реакціями на події інтерфейсу та мінісловником.',
      placeholder:'Спробуй «привіт», «сонце» або «друг»',searchNames:['Спокій','Думає','Радість','Розгублений','Помилка'],
      states:['СПОКІЙ','ДУМАЄ','РАДІЄ','НЕ ЗНАЙДЕНО','ПОМИЛКА'],
      speeches:{idle:['Привіт! Готовий шукати слова?','Вітаю! Яке слово знайдемо?'],searching:['Хм, дай подумати…','Шукаю у своєму маленькому словнику…'],success:['Ура, знайшов! ✦','Чудово! Ще одне слово вивчено!'],empty:['Такого слова поки немає…','Цікаво! Треба буде його вивчити.'],error:['Ой! Щось пішло не так.','Мені потрібна коротка перерва!']},
      clicks:['Привіт-привіт! 👋','Хі-хі! Лоскотно! ✦','Ти знайшов мою таємну усмішку!'],
      results:{idle:['ОЧІКУЮ ЗАПИТУ','Твоє наступне відкриття вже близько.'],searching:['ШУКАЮ','Шукаю в демонстраційному словнику…'],success:['ПЕРЕКЛАД ЗНАЙДЕНО','Приклад: привіт → hello'],empty:['ЗБІГІВ НЕМАЄ','Цього слова немає в мінісловнику.'],error:['ІМІТАЦІЯ ПОМИЛКИ','Це тестова мережева помилка. Спробуй ще раз.']},
      quickWords:[['привіт','привіт'],['сонце','сонце'],['невідоме','невідоме'],['помилка','помилка']],
      searchEvent:'dictionary.search',clickEvent:'mascot.click',characterEvent:'mascot.switch',stateEvent:'mascot.setEmotion',errorEvent:'dictionary.error'
    },
    ru: {
      brandLabel:'Лаборатория интерактивности',howNav:'Как это устроено',creditsNav:'Лицензии',eyebrow:'ИНТЕРАКТИВНЫЙ FRONTEND-ЭКСПЕРИМЕНТ',
      heroTitle:'Маленький герой.<br><span class="highlight-word">Большие эмоции<span class="highlight-star">✳</span></span>',
      heroDescription:'Знакомьтесь с персонажем, который думает, радуется, удивляется и реагирует на нажатия. Его поведение зависит от действий в интерфейсе.',
      exploreBtn:'Попробовать демо <span aria-hidden="true">↗</span>',noLogin:'Без аккаунта и сервера. Только интерактивность.',
      metricStates:'состояний',metricCharacters:'персонажа',metricBrowser:'в браузере',
      playgroundOverline:'ИНТЕРАКТИВНОЕ ДЕМО',playgroundTitle:'Попробуй сам <span class="outline-spark">✳</span>',liveDemo:'ЖИВАЯ ДЕМОНСТРАЦИЯ',readyTag:'готово',stageHint:'↑ нажми на персонажа',chooseCharacter:'ВЫБЕРИ ПЕРСОНАЖА',
      interactionLab:'ЛАБОРАТОРИЯ РЕАКЦИЙ',panelTitle:'Что будем искать?',panelDescription:'Попробуй мини-словарь или переключи эмоцию вручную.',
      searchLabel:'НАЙТИ СЛОВО',searchBtn:'Найти <span aria-hidden="true">↗</span>',quickTry:'Примеры',triggerLabel:'ВЫЗВАТЬ СОСТОЯНИЕ',instantPreview:'мгновенный просмотр',eventMonitor:'Монитор событий',
      behindScenes:'ПОД КАПОТОМ',howTitle:'Мелочи, которые <em>оживляют.</em>',howSubtitle:'Компактная демонстрация анимаций персонажа, управляемых событиями интерфейса.',
      feature1title:'Введи слово',feature1text:'Мини-словарь с состояниями загрузки, результата, отсутствия ответа и имитацией ошибки.',
      feature2title:'Смотри на реакцию',feature2text:'Эмоция персонажа зависит от состояния интерфейса — без перезагрузки страницы.',
      feature3title:'Управляй сам',feature3text:'Меняй персонажей, нажимай на них или переключай эмоции через JavaScript.',
      creditOverline:'OPEN SOURCE И ПРОЗРАЧНАЯ ЛИЦЕНЗИЯ',creditsTitle:'Сделано с заботой.<br>С уважением к авторам.',creditsDescription:'Готовые анимированные маскоты взяты из проекта Lively Mascot под лицензией MIT. Дизайн страницы, сценарии реакций, мини-словарь и резервная SVG-графика созданы для этого демо.',viewLibrary:'Открыть библиотеку маскотов ↗',footerLabel:'Демо интерактивного маскота',footerInfo:'Самостоятельный проект для портфолио · Vanilla JavaScript · SVG-анимация',backTop:'Наверх ↑',
      stickerTitle:'СОЗДАНО,<br>ЧТОБЫ ОЖИВАТЬ',stampMadeWith:'СДЕЛАНО С',stampOpenSource:'+ ОТКРЫТЫЙ КОД',
      characterSprout:'Росток',characterRobot:'Робот',characterCat:'Кот',
      resetText:'Сбросить демо',interactAria:'Взаимодействовать с персонажем',interactTitle:'Нажми на меня!',languageAria:'Язык интерфейса',
      pageTitle:'MILO — интерактивные персонажи / Frontend-демо',pageDescription:'MILO — интерактивное демо с анимированными персонажами, реакциями на события интерфейса и мини-словарём.',
      quickWords:[['привет','привет'],['солнце','солнце'],['неизвестно','неизвестно'],['ошибка','ошибка']],
      placeholder:'Попробуй «привет», «солнце», «друг»',searchNames:['Покой','Думает','Радость','Смущение','Ошибка'],
      states:['ПОКОЙ','ДУМАЕТ','РАДУЕТСЯ','НЕ НАЙДЕНО','ОШИБКА'],
      speeches:{idle:['Привет! Давай искать слова!','У меня есть идея!'],searching:['Хм, дай подумать…','Ищу в своём маленьком словаре…'],success:['Ура, я нашёл! ✦','Вот это находка!'],empty:['Этого слова пока нет…','Хм, надо будет выучить!'],error:['Ой! Что-то пошло не так.','Мне нужен короткий перерыв!']},
      clicks:['Привет-привет! 👋','Хи-хи! Щекотно! ✦','Ты нашёл мою тайную улыбку!'],
      results:{idle:['ЖДУ ЗАПРОС','Следующее открытие уже близко.'],searching:['ИДЁТ ПОИСК','Ищу в демонстрационном словаре…'],success:['ПЕРЕВОД НАЙДЕН','Пример: привет → hello'],empty:['НИЧЕГО НЕ НАЙДЕНО','Этого слова нет в мини-словаре.'],error:['ИМИТАЦИЯ ОШИБКИ','Показана тестовая сетевая ошибка. Попробуй ещё раз.']},
      searchEvent:'dictionary.search',clickEvent:'mascot.click',characterEvent:'mascot.switch',stateEvent:'mascot.setEmotion',errorEvent:'dictionary.error'
    }
  };

  const translations = {
    hello:{en:'hello → привет',uk:'привіт → hello',ru:'привет → hello'},
    sun:{en:'sun → солнце',uk:'сонце → sun',ru:'солнце → sun'},
    friend:{en:'friend → друг',uk:'друг → friend',ru:'друг → friend'},
    water:{en:'water → вода',uk:'вода → water',ru:'вода → water'},
    home:{en:'home → дом',uk:'дім → home',ru:'дом → home'}
  };
  const aliases = {
    hello:'hello',hi:'hello','привет':'hello','здравствуй':'hello','привіт':'hello','вітаю':'hello',
    sun:'sun','солнце':'sun','сонце':'sun',friend:'friend','друг':'friend',
    water:'water','вода':'water',home:'home','дом':'home','дім':'home'
  };
  const stateOrder = ['idle','searching','success','empty','error'];
  const el = id => document.getElementById(id);
  const ui = {
    stage:el('stage'),stateName:el('stateName'),speech:el('speechText'),speechBubble:el('speechBubble'),input:el('queryInput'),form:el('dictionaryForm'),searchButton:el('searchButton'),resultCard:el('resultCard'),resultMeta:el('resultMeta'),resultValue:el('resultValue'),resultIcon:el('resultIcon'),monitor:el('eventMonitorText'),fallback:el('fallbackMascot'),mount:el('libraryMascot'),celebration:el('celebration')
  };
  const state = {lang:'en',emotion:'idle',character:'sprout',lookup:null,clickCount:0,mascot:null,querySeq:0,timer:null,autoTimer:null,speechOverride:null};

  const tr = () => text[state.lang];
  function trace(eventName, value) {
    const val = value === undefined ? '' : (typeof value === 'string' ? `'${value.replaceAll("'",'’')}'` : String(value));
    ui.monitor.textContent = `${eventName}(${val})`;
  }
  function playSpeech(message) {
    ui.speech.textContent = message;
    ui.speechBubble.classList.remove('is-animating');
    void ui.speechBubble.offsetWidth;
    ui.speechBubble.classList.add('is-animating');
  }
  function burst() {
    ui.celebration.classList.remove('is-visible');
    void ui.celebration.offsetWidth;
    ui.celebration.classList.add('is-visible');
  }
  function setResult(kind, value) {
    ui.resultCard.dataset.result = kind;
    const r = tr().results[kind];
    ui.resultMeta.textContent = r[0];
    ui.resultValue.textContent = value || r[1];
    ui.resultIcon.textContent = {idle:'✳',searching:'◌',success:'✓',empty:'?',error:'!'}[kind];
  }
  function mascotEmotion(key) {
    if (!state.mascot) return;
    const lib = window.LivelyMascot;
    const all = lib?.emotions ? Object.values(lib.emotions) : [];
    const find = (pattern) => all.find(v => pattern.test(`${v.name || ''} ${v.id || ''} ${v.desc || ''}`.toLowerCase()));
    const patterns = {searching:/thinking|concentrat|focused|curious/,success:/happy|delighted|excited|joy/,empty:/confused|puzzled|sad|disappoint/,error:/worried|surprised|angry|afraid/,idle:/idle|neutral|calm|relaxed/};
    const matched = find(patterns[key]);
    try {
      if (key === 'idle') state.mascot.clearEmotion();
      else if (matched) state.mascot.setEmotion(String(matched.id));
      else if (key === 'searching') state.mascot.setEmotion('20');
      else if (key === 'success') state.mascot.setEmotion('10');
      else state.mascot.clearEmotion();
    } catch(err) { console.info('Emotion fallback:',err.message); }
  }
  function setEmotion(key, {announce=true, override=null}={}) {
    state.emotion=key;
    ui.stage.dataset.state=key;
    ui.stateName.textContent=tr().states[stateOrder.indexOf(key)];
    document.querySelector('.stage-counter').textContent=`0${stateOrder.indexOf(key)+1} / 05`;
    document.querySelectorAll('.state-button[data-state]').forEach(btn => { const current=btn.dataset.state===key; btn.classList.toggle('is-active',current);btn.setAttribute('aria-pressed',String(current)); });
    const speech=override || tr().speeches[key][0];
    playSpeech(speech);
    mascotEmotion(key);
    if (key === 'success') burst();
    if (announce) trace(tr().stateEvent,key);
  }
  function cancelPending() {
    state.querySeq++;
    clearTimeout(state.timer);
    clearTimeout(state.autoTimer);
    ui.searchButton.disabled=false;
  }
  function lookupWord(raw) {
    const query=(raw||'').trim();
    cancelPending();
    if(!query){ state.lookup=null;setEmotion('idle');setResult('idle');return; }
    ui.input.value=query;
    state.lookup=null;
    const seq=state.querySeq;
    setEmotion('searching');
    setResult('searching');
    trace(tr().searchEvent,query.toLowerCase());
    ui.searchButton.disabled=true;
    state.timer=setTimeout(() => {
      if(seq!==state.querySeq)return;
      ui.searchButton.disabled=false;
      const lower=query.toLocaleLowerCase();
      if(['error','ошибка','помилка','500'].includes(lower)) {
        state.lookup={kind:'error',value:''};setEmotion('error');setResult('error');trace(tr().errorEvent,'simulated');return;
      }
      const key=aliases[lower];
      if(key && translations[key]) {
        const val=translations[key][state.lang];state.lookup={kind:'success',key};setEmotion('success');setResult('success',val);
      } else {
        state.lookup={kind:'empty',value:''};setEmotion('empty');setResult('empty');
      }
    },760);
  }
  function onMascotClick() {
    state.clickCount++;
    const phrase=tr().clicks[(state.clickCount-1)%tr().clicks.length];
    const prev=state.emotion;
    playSpeech(phrase);
    burst();
    trace(tr().clickEvent,String(state.clickCount));
    if(state.mascot) {
      const all=Object.values(window.LivelyMascot?.emotions||{});
      const excited=all.find(v=>/happy|surprised|excited/i.test(v.name||''));
      try {if(excited)state.mascot.setEmotion(String(excited.id));}catch(e){}
    }
    clearTimeout(state.clickTimer);
    state.clickTimer=setTimeout(()=>{mascotEmotion(prev);playSpeech(tr().speeches[prev][0]);},1800);
  }
  function initMascot() {
    if (!window.LivelyMascot?.createMascot) return;
    try {
      if(state.mascot)state.mascot.destroy();
      ui.mount.replaceChildren();
      state.mascot=window.LivelyMascot.createMascot(ui.mount,{
        type:state.character,size:258,viewMode:'3d',followCursor:true,
        onClick:onMascotClick,ariaLabel:'MILO interactive mascot',
        hopInterval:[7,13]
      });
      ui.mount.classList.add('is-loaded');
      ui.fallback.classList.add('is-hidden');
      mascotEmotion(state.emotion);
    } catch(e) {
      console.warn('Mascot engine unavailable; using built-in SVG fallback.',e);
      state.mascot=null;
      ui.mount.classList.remove('is-loaded');
      ui.fallback.classList.remove('is-hidden');
    }
  }
  function setCharacter(type) {
    state.character=type;
    ui.fallback.className=`fallback-mascot avatar--${type}`+(state.mascot?' is-hidden':'');
    document.querySelectorAll('[data-character]').forEach(btn=>{const active=btn.dataset.character===type;btn.classList.toggle('is-active',active);btn.setAttribute('aria-pressed',String(active));});
    if(window.LivelyMascot?.createMascot)initMascot();
    trace(tr().characterEvent,type);
  }
  function changeLanguage(lang) {
    if (!text[lang]) return;
    state.lang=lang;
    document.documentElement.lang=lang;
    document.title=tr().pageTitle;
    document.querySelector('meta[name="description"]').content=tr().pageDescription;
    document.querySelectorAll('[data-i18n]').forEach(node=>{const val=tr()[node.dataset.i18n];if(val!==undefined){if(/<[a-z]/i.test(val))node.innerHTML=val;else node.textContent=val;}});
    document.querySelectorAll('[data-i18n-html]').forEach(node=>{const val=tr()[node.dataset.i18nHtml];if(val!==undefined)node.innerHTML=val;});
    document.querySelectorAll('[data-i18n-aria]').forEach(node=>{const val=tr()[node.dataset.i18nAria];if(val!==undefined)node.setAttribute('aria-label',val);});
    document.querySelectorAll('[data-i18n-title]').forEach(node=>{const val=tr()[node.dataset.i18nTitle];if(val!==undefined)node.title=val;});
    ui.input.placeholder=tr().placeholder;
    document.querySelectorAll('.state-button').forEach((btn,i)=>btn.querySelector('b').textContent=tr().searchNames[i]);
    document.querySelectorAll('.suggestions [data-word]').forEach((btn,i)=>{
      const [word,label]=tr().quickWords[i];
      btn.dataset.word=word;
      btn.textContent=label;
    });
    // Selected language first; Ukrainian second whenever a different language is selected.
    const switcher=document.querySelector('.language-switch');
    const languageOrder=lang==='uk' ? ['uk','en','ru'] : [lang,'uk',...['en','ru'].filter(code=>code!==lang)];
    languageOrder.forEach(code=>{
      const btn=switcher.querySelector('[data-lang="'+code+'"]');
      if(btn) {
        const active=code===lang;
        btn.classList.toggle('is-active',active);
        btn.setAttribute('aria-pressed',String(active));
        switcher.appendChild(btn);
      }
    });
    ui.stateName.textContent=tr().states[stateOrder.indexOf(state.emotion)];
    playSpeech(tr().speeches[state.emotion][0]);
    if(state.lookup?.kind==='success')setResult('success',translations[state.lookup.key][state.lang]);
    else setResult(state.lookup?.kind|| (state.emotion==='searching'?'searching':'idle'));
    trace(tr().stateEvent,state.emotion);
  }
  function loadOpenSourceAssets() {
    // Optional remote MIT asset. The custom SVG fallback works without a connection.
    const css=document.createElement('link');css.rel='stylesheet';css.href='https://cdn.jsdelivr.net/gh/jingluoguo/lively-mascot@v0.3.1/dist/lively-mascot.min.css';document.head.appendChild(css);
    const js=document.createElement('script');js.src='https://cdn.jsdelivr.net/gh/jingluoguo/lively-mascot@v0.3.1/dist/lively-mascot.min.js';js.async=true;js.onload=initMascot;
    js.onerror=()=>{console.info('External mascot asset unavailable; built-in SVG fallback is active.');};
    document.head.appendChild(js);
  }
  function wireEvents() {
    ui.form.addEventListener('submit',e=>{e.preventDefault();lookupWord(ui.input.value);});
    ui.input.addEventListener('input',()=>{
      clearTimeout(state.autoTimer);
      const q=ui.input.value.trim();
      if(q.length>=2)state.autoTimer=setTimeout(()=>lookupWord(q),720);
    });
    document.querySelectorAll('[data-word]').forEach(btn=>btn.addEventListener('click',()=>lookupWord(btn.dataset.word)));
    document.querySelectorAll('.state-button[data-state]').forEach(btn=>btn.addEventListener('click',()=>{cancelPending();state.lookup=null;setEmotion(btn.dataset.state);setResult(btn.dataset.state); }));
    document.querySelectorAll('[data-character]').forEach(btn=>btn.addEventListener('click',()=>setCharacter(btn.dataset.character)));
    document.querySelectorAll('[data-lang]').forEach(btn=>btn.addEventListener('click',()=>changeLanguage(btn.dataset.lang)));
    ui.fallback.addEventListener('click',onMascotClick);
    el('resetBtn').addEventListener('click',()=>{cancelPending();clearTimeout(state.clickTimer);state.clickCount=0;state.lookup=null;ui.input.value='';setEmotion('idle');setResult('idle');});
  }
  wireEvents();
  setEmotion('idle');setResult('idle');
  changeLanguage('en');
  loadOpenSourceAssets();
})();
