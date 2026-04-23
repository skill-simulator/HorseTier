// ============================================================
//  ★ キャラクターデータ
//  img: "" の部分に画像URLを入力してください。
//  例: img: "https://example.com/images/char01.png"
//  img が空の場合は emoji が表示されます。
// ============================================================
var TR_CHARS = [
  { id:1,  name:"シルバーウィング",     tier:"SS", type:"スピード", img:"", emoji:"🐎",
    rarity:"距離適性：短距離",
    stats:{spd:98,sta:72,pow:85,guts:80,wis:90},
    skills:[
      {name:"電光石火",   desc:"直線で爆発的な加速。スピードが一時的に大幅上昇", icon:"⚡", rarity:"固有"},
      {name:"逃げウマ魂", desc:"先頭に立つと闘志が燃え上がる",                     icon:"🔥", rarity:"金"},
      {name:"根性",       desc:"体力ギリギリでも粘り強く走れる",                   icon:"💪", rarity:"銀"}
    ]},
  { id:2,  name:"ゴールデンサン",       tier:"SS", type:"スタミナ", img:"", emoji:"☀️",
    rarity:"距離適性：長距離",
    stats:{spd:80,sta:99,pow:88,guts:95,wis:75},
    skills:[
      {name:"太陽のオーラ", desc:"長距離で底力が持続する固有スキル", icon:"🌟", rarity:"固有"},
      {name:"長距離巡航",   desc:"後半のスタミナ消費を抑える",       icon:"🌊", rarity:"金"},
      {name:"粘り腰",       desc:"ゴール前で失速しにくい",           icon:"🛡️", rarity:"銀"}
    ]},
  { id:3,  name:"ミスティグレース",     tier:"SS", type:"賢さ",     img:"", emoji:"🌸",
    rarity:"距離適性：マイル",
    stats:{spd:88,sta:78,pow:80,guts:75,wis:99},
    skills:[
      {name:"天才少女の閃き", desc:"レース中に最適ポジションを瞬時に判断", icon:"✨", rarity:"固有"},
      {name:"先読み",         desc:"前方の状況を素早く把握して加速",         icon:"👁️", rarity:"金"},
      {name:"集中力",         desc:"終盤の判断速度が上がる",                 icon:"🎯", rarity:"銀"}
    ]},
  { id:4,  name:"インフィニティ",       tier:"SS", type:"パワー",   img:"", emoji:"♾️",
    rarity:"距離適性：中距離",
    stats:{spd:90,sta:88,pow:98,guts:96,wis:82},
    skills:[
      {name:"無限の力", desc:"レース終盤でもパワーが衰えない",   icon:"♾️", rarity:"固有"},
      {name:"鉄壁",     desc:"どんな状況でもペースを落とさない", icon:"🏰", rarity:"金"},
      {name:"絶対突破", desc:"馬群の中でも前に出る力がある",     icon:"🔑", rarity:"銀"}
    ]},
  { id:5,  name:"ストームキング",       tier:"S",  type:"パワー",   img:"", emoji:"⚡",
    rarity:"距離適性：中距離",
    stats:{spd:85,sta:85,pow:99,guts:92,wis:70},
    skills:[
      {name:"嵐の覇者",        desc:"パワーを全解放してコーナーを力技で突破", icon:"🌪️", rarity:"固有"},
      {name:"パワフルドライブ", desc:"コーナーで外から強引に抜き去る",          icon:"💥", rarity:"金"},
      {name:"体当たり気質",     desc:"接触に動じず前に出る",                    icon:"🦏", rarity:"銀"}
    ]},
  { id:6,  name:"フローラルダンス",     tier:"S",  type:"スピード", img:"", emoji:"🌺",
    rarity:"距離適性：マイル",
    stats:{spd:94,sta:75,pow:80,guts:78,wis:88},
    skills:[
      {name:"花びらの舞",      desc:"最終コーナーで華麗に抜け出す", icon:"🌸", rarity:"固有"},
      {name:"スタートダッシュ", desc:"発走直後の加速が大幅に向上",   icon:"🚀", rarity:"金"},
      {name:"軽快なステップ",   desc:"内ラチ沿いを器用に走る",       icon:"💃", rarity:"銀"}
    ]},
  { id:7,  name:"ダークホース",         tier:"S",  type:"スタミナ", img:"", emoji:"🖤",
    rarity:"距離適性：長距離",
    stats:{spd:82,sta:95,pow:88,guts:99,wis:72},
    skills:[
      {name:"黒い疾風",   desc:"最後方から全馬を追い抜く逆転劇", icon:"🌑", rarity:"固有"},
      {name:"差し脚鋭く", desc:"直線で爆発的な末脚を発揮",       icon:"⚔️", rarity:"金"},
      {name:"不屈の闘志", desc:"体力ゼロ寸前でも粘る",           icon:"🔩", rarity:"銀"}
    ]},
  { id:8,  name:"ジェットブラック",     tier:"S",  type:"スピード", img:"", emoji:"🖤",
    rarity:"距離適性：短距離",
    stats:{spd:96,sta:70,pow:84,guts:78,wis:85},
    skills:[
      {name:"漆黒の閃光", desc:"最終直線で圧倒的な加速を見せる", icon:"🖤", rarity:"固有"},
      {name:"爆発的加速", desc:"残り300mから急激に加速する",      icon:"💣", rarity:"金"},
      {name:"短距離特化", desc:"短距離レースで全能力が上昇",      icon:"📏", rarity:"銀"}
    ]},
  { id:9,  name:"クリスタルスター",     tier:"A",  type:"賢さ",     img:"", emoji:"💎",
    rarity:"距離適性：マイル",
    stats:{spd:82,sta:78,pow:75,guts:72,wis:94},
    skills:[
      {name:"星屑の軌跡", desc:"レース展開を読んでポジションを最適化", icon:"🌠", rarity:"固有"},
      {name:"直線強化",   desc:"最終直線の加速が増す",                 icon:"📈", rarity:"金"}
    ]},
  { id:10, name:"ファイアーボルト",     tier:"A",  type:"スピード", img:"", emoji:"🔥",
    rarity:"距離適性：短距離",
    stats:{spd:92,sta:65,pow:82,guts:80,wis:78},
    skills:[
      {name:"炎の一撃", desc:"短距離で爆発的な瞬発力",             icon:"🔥", rarity:"固有"},
      {name:"鋭い出脚", desc:"スタート直後のダッシュが素晴らしい", icon:"💨", rarity:"金"}
    ]},
  { id:11, name:"オーシャンブリーズ",   tier:"A",  type:"スタミナ", img:"", emoji:"🌊",
    rarity:"距離適性：長距離",
    stats:{spd:75,sta:92,pow:80,guts:85,wis:80},
    skills:[
      {name:"潮風の加護", desc:"長丁場でスタミナを温存して走る", icon:"🌊", rarity:"固有"},
      {name:"海の男気",   desc:"雨の馬場で力を発揮",             icon:"☔", rarity:"金"}
    ]},
  { id:12, name:"サンダーホーク",       tier:"A",  type:"パワー",   img:"", emoji:"🦅",
    rarity:"距離適性：中距離",
    stats:{spd:80,sta:82,pow:94,guts:90,wis:68},
    skills:[
      {name:"鷹の爪",    desc:"外から豪快に前を捉える", icon:"🦅", rarity:"固有"},
      {name:"内から外へ", desc:"馬群を割って前に出る",   icon:"🔄", rarity:"金"}
    ]},
  { id:13, name:"ローズクイーン",       tier:"A",  type:"賢さ",     img:"", emoji:"🌹",
    rarity:"距離適性：マイル",
    stats:{spd:78,sta:80,pow:72,guts:70,wis:92},
    skills:[
      {name:"女王の戦略", desc:"中盤に仕掛けて独走態勢を作る",              icon:"👑", rarity:"固有"},
      {name:"読み勝ち",   desc:"ライバルの動きを先読みして有利な位置を確保", icon:"🔮", rarity:"金"}
    ]},
  { id:14, name:"エメラルドフライト",   tier:"A",  type:"スピード", img:"", emoji:"💚",
    rarity:"距離適性：短距離",
    stats:{spd:90,sta:68,pow:78,guts:75,wis:82},
    skills:[
      {name:"翠の疾走",        desc:"最終直線で鮮やかに差し切る", icon:"💚", rarity:"固有"},
      {name:"グリーンスパート", desc:"残り200mから強烈な末脚",      icon:"🌿", rarity:"銀"}
    ]},
  { id:15, name:"ピーコックグローリー", tier:"A",  type:"賢さ",     img:"", emoji:"🦚",
    rarity:"距離適性：中距離",
    stats:{spd:82,sta:76,pow:74,guts:72,wis:96},
    skills:[
      {name:"孔雀の誇示", desc:"注目を集めながら鮮やかに逃げ切る", icon:"🦚", rarity:"固有"},
      {name:"魅せる走り", desc:"先頭を走ると闘志が上がる",          icon:"🎪", rarity:"金"}
    ]},
  { id:16, name:"ハリケーンレックス",   tier:"A",  type:"パワー",   img:"", emoji:"🌀",
    rarity:"距離適性：中距離",
    stats:{spd:78,sta:80,pow:92,guts:90,wis:68},
    skills:[
      {name:"嵐の暴君",    desc:"コーナーを豪快に力ずくで突き進む", icon:"🌀", rarity:"固有"},
      {name:"鬼の踏み込み", desc:"コーナーで内を強引に進む",          icon:"👺", rarity:"金"}
    ]},
  { id:17, name:"ムーンライト",         tier:"B",  type:"スタミナ", img:"", emoji:"🌙",
    rarity:"距離適性：長距離",
    stats:{spd:72,sta:88,pow:75,guts:82,wis:78},
    skills:[
      {name:"月明かりの走者", desc:"夜のレースで力を発揮する",         icon:"🌙", rarity:"固有"},
      {name:"夜間強化",       desc:"夕方以降のレースでスタミナ底上げ", icon:"🌃", rarity:"銀"}
    ]},
  { id:18, name:"バーニングスピリット", tier:"B",  type:"パワー",   img:"", emoji:"🔥",
    rarity:"距離適性：中距離",
    stats:{spd:78,sta:78,pow:90,guts:88,wis:65},
    skills:[
      {name:"燃え盛る魂", desc:"コーナーをパワーで強引に乗り越える", icon:"🔥", rarity:"固有"},
      {name:"馬群の壁",   desc:"包囲されても前に出る根性",           icon:"🧱", rarity:"銀"}
    ]},
  { id:19, name:"ノーブルハート",       tier:"B",  type:"スピード", img:"", emoji:"💙",
    rarity:"距離適性：マイル",
    stats:{spd:86,sta:72,pow:76,guts:74,wis:80},
    skills:[
      {name:"気高き走り", desc:"逃げ切り時の粘りが強い",       icon:"💙", rarity:"固有"},
      {name:"前傾気味",   desc:"序盤からペースを刻んで逃げる", icon:"🏃", rarity:"銀"}
    ]},
  { id:20, name:"アイアンウィル",       tier:"B",  type:"スタミナ", img:"", emoji:"⚙️",
    rarity:"距離適性：長距離",
    stats:{spd:70,sta:90,pow:82,guts:88,wis:68},
    skills:[
      {name:"鋼の意志",    desc:"どんな状況でも粘り続ける",   icon:"⚙️", rarity:"固有"},
      {name:"土砂降り上等", desc:"重馬場でのパワーロスを軽減", icon:"💧", rarity:"銀"}
    ]},
  { id:21, name:"スカイダンサー",       tier:"B",  type:"賢さ",     img:"", emoji:"🦋",
    rarity:"距離適性：マイル",
    stats:{spd:80,sta:74,pow:70,guts:68,wis:88},
    skills:[
      {name:"天翔ける蝶", desc:"中盤の仕掛けを最適化する",       icon:"🦋", rarity:"固有"},
      {name:"冷静な判断", desc:"序盤の消耗を抑えて後半に備える", icon:"🧊", rarity:"銀"}
    ]},
  { id:22, name:"クリムゾンラッシュ",   tier:"B",  type:"スピード", img:"", emoji:"🔴",
    rarity:"距離適性：短距離",
    stats:{spd:88,sta:62,pow:80,guts:76,wis:72},
    skills:[
      {name:"深紅の突進", desc:"短距離を一気に駆け抜ける",   icon:"🔴", rarity:"固有"},
      {name:"瞬発力",     desc:"スタートの反応速度が上がる", icon:"⚡", rarity:"銀"}
    ]},
  { id:23, name:"エコー",               tier:"B",  type:"パワー",   img:"", emoji:"🔵",
    rarity:"距離適性：中距離",
    stats:{spd:76,sta:80,pow:87,guts:85,wis:70},
    skills:[
      {name:"共鳴の走り", desc:"並走するとパワーが増幅する",   icon:"🔵", rarity:"固有"},
      {name:"接触不屈",   desc:"ぶつかっても速度が落ちにくい", icon:"🛡️", rarity:"銀"}
    ]},
  { id:24, name:"ソルテイル",           tier:"B",  type:"スピード", img:"", emoji:"🌅",
    rarity:"距離適性：マイル",
    stats:{spd:84,sta:74,pow:76,guts:72,wis:82},
    skills:[
      {name:"黄金の夜明け", desc:"レース序盤にうまく位置を取る", icon:"🌅", rarity:"固有"},
      {name:"朝露の足跡",   desc:"芝コースで僅かに速度が上がる", icon:"🌿", rarity:"銀"}
    ]},
  { id:25, name:"ラベンダードリーム",   tier:"C",  type:"賢さ",     img:"", emoji:"💜",
    rarity:"距離適性：マイル",
    stats:{spd:72,sta:72,pow:68,guts:65,wis:85},
    skills:[
      {name:"紫の夢想", desc:"自分のリズムで走れる時に本領発揮", icon:"💜", rarity:"固有"},
      {name:"独走好み", desc:"前方に馬がいない時に加速する",     icon:"🕊️", rarity:"銅"}
    ]},
  { id:26, name:"テイルウィンド",       tier:"C",  type:"スタミナ", img:"", emoji:"🍃",
    rarity:"距離適性：長距離",
    stats:{spd:68,sta:84,pow:72,guts:78,wis:74},
    skills:[
      {name:"追い風の恩恵", desc:"風向きによってスタミナ消費が変わる", icon:"🍃", rarity:"固有"},
      {name:"省エネ走法",   desc:"中盤のスタミナ消費を少し抑える",     icon:"♻️", rarity:"銅"}
    ]},
  { id:27, name:"コッパーファング",     tier:"C",  type:"パワー",   img:"", emoji:"🟤",
    rarity:"距離適性：中距離",
    stats:{spd:74,sta:76,pow:84,guts:80,wis:64},
    skills:[
      {name:"銅の牙",      desc:"泥臭くパワーでねじ伏せる",     icon:"🟤", rarity:"固有"},
      {name:"踏み込み強化", desc:"コーナーの踏み込みが安定する", icon:"👟", rarity:"銅"}
    ]},
  { id:28, name:"スノードロップ",       tier:"C",  type:"スピード", img:"", emoji:"❄️",
    rarity:"距離適性：短距離",
    stats:{spd:82,sta:60,pow:70,guts:68,wis:76},
    skills:[
      {name:"雪の結晶", desc:"冬のレースで速度が少し上昇",         icon:"❄️", rarity:"固有"},
      {name:"軽量走法", desc:"体重が軽いため直線で浮くような加速", icon:"🪶", rarity:"銅"}
    ]},
  { id:29, name:"ブロンズウィング",     tier:"C",  type:"賢さ",     img:"", emoji:"🦜",
    rarity:"距離適性：マイル",
    stats:{spd:70,sta:70,pow:66,guts:64,wis:82},
    skills:[
      {name:"観察眼", desc:"ライバルのペースを観察して無駄な力を使わない", icon:"🦜", rarity:"固有"},
      {name:"省力",   desc:"中盤の加速をやや抑えて温存する",               icon:"💤", rarity:"銅"}
    ]},
  { id:30, name:"サンドストーム",       tier:"C",  type:"スタミナ", img:"", emoji:"🏜️",
    rarity:"距離適性：長距離",
    stats:{spd:66,sta:86,pow:70,guts:76,wis:70},
    skills:[
      {name:"砂嵐の走者", desc:"ダート条件で粘り強さが増す",         icon:"🏜️", rarity:"固有"},
      {name:"砂利道適性", desc:"ダートコースでのスタミナ消費を軽減", icon:"🪨", rarity:"銅"}
    ]},
  { id:31, name:"マーブルラン",         tier:"C",  type:"パワー",   img:"", emoji:"🟠",
    rarity:"距離適性：中距離",
    stats:{spd:72,sta:74,pow:80,guts:78,wis:62},
    skills:[
      {name:"転がる大理石", desc:"下り坂でスピードが乗る",   icon:"🟠", rarity:"固有"},
      {name:"下り得意",     desc:"下り坂で速度ロスが少ない", icon:"⛰️", rarity:"銅"}
    ]},
  { id:32, name:"ティンカーベル",       tier:"C",  type:"賢さ",     img:"", emoji:"🧚",
    rarity:"距離適性：短距離",
    stats:{spd:76,sta:66,pow:64,guts:62,wis:88},
    skills:[
      {name:"妖精の悪戯",   desc:"気まぐれに速度が上がる時がある", icon:"🧚", rarity:"固有"},
      {name:"ひらひら走法", desc:"直線でランダムに加速する",        icon:"🎲", rarity:"銅"}
    ]}
];

// ============================================================
//  設定
// ============================================================
var TR_TIERS = [
  { key:"SS", label:"SS", desc:"最強クラス" },
  { key:"S",  label:"S",  desc:"超強力" },
  { key:"A",  label:"A",  desc:"高水準" },
  { key:"B",  label:"B",  desc:"安定感あり" },
  { key:"C",  label:"C",  desc:"育成次第" }
];

var TR_BAR      = { spd:"#e88c00", sta:"#0d6b52", pow:"#c0392b", guts:"#5040b5", wis:"#157f7f" };
var TR_STAT_LBL = { spd:"スピード", sta:"スタミナ", pow:"パワー", guts:"根性", wis:"賢さ" };
var TR_RARITY_CLS = {
  "固有": "tr-rarity-unique",
  "金":   "tr-rarity-gold",
  "銀":   "tr-rarity-silver",
  "銅":   "tr-rarity-bronze"
};

// ============================================================
//  状態
// ============================================================
var trSelected = null;
var trFiltered = {};
TR_CHARS.forEach(function(c){ trFiltered[c.id] = true; });

// ============================================================
//  ヘルパー
// ============================================================
function trAvatarHTML(c, large) {
  if (c.img) {
    return '<img src="' + c.img + '" alt="' + c.name + '">';
  }
  var fs = large ? '28px' : '22px';
  return '<span style="font-size:' + fs + ';line-height:1">' + c.emoji + '</span>';
}

// ============================================================
//  描画
// ============================================================
function trRender() {
  var el = document.getElementById('trList');
  el.innerHTML = '';
  TR_TIERS.forEach(function(tier) {
    var chars = TR_CHARS.filter(function(c){
      return c.tier === tier.key && trFiltered[c.id];
    });
    if (!chars.length) return;

    var sec = document.createElement('div');
    sec.className = 'tr-section';
    sec.innerHTML =
      '<div class="tr-tier-header tr-tier-' + tier.key + '">'
      + '<span class="tr-tier-label">' + tier.label + '</span>'
      + '<span class="tr-tier-desc">' + tier.desc + '</span>'
      + '</div>'
      + '<div class="tr-chars-grid" id="trGrid-' + tier.key + '"></div>';
    el.appendChild(sec);

    var grid = document.getElementById('trGrid-' + tier.key);
    chars.forEach(function(c) {
      var card = document.createElement('div');
      card.className = 'tr-char-card' + (trSelected === c.id ? ' tr-selected' : '');
      card.innerHTML =
        '<div class="tr-avatar">' + trAvatarHTML(c, false) + '</div>'
        + '<div class="tr-char-name">' + c.name + '</div>'
        + '<div class="tr-char-type">' + c.type + '</div>';
      (function(id){ card.onclick = function(){ trSelect(id); }; })(c.id);
      grid.appendChild(card);
    });
  });
}

// ============================================================
//  キャラ選択
// ============================================================
function trSelect(id) {
  trSelected = id;
  trRender();

  var c     = TR_CHARS.filter(function(x){ return x.id === id; })[0];
  var panel = document.getElementById('trPanel');
  panel.className = 'tr-panel tr-visible';

  document.getElementById('trPAvatar').innerHTML = trAvatarHTML(c, true);
  document.getElementById('trPName').textContent = c.name;
  document.getElementById('trPSub').textContent  = c.type + '型　|　' + c.rarity;

  var badge = document.getElementById('trPBadge');
  badge.textContent = c.tier + ' ランク';
  badge.className   = 'tr-tier-badge tr-tier-badge-' + c.tier;

  var keys  = ['spd', 'sta', 'pow', 'guts', 'wis'];
  var total = 0;
  keys.forEach(function(k){ total += c.stats[k]; });
  var avg = Math.round(total / keys.length);

  document.getElementById('trPStatSum').innerHTML =
      '<div class="tr-stat-box"><div class="tr-stat-lbl">トータル</div>'
    + '<div class="tr-stat-val">' + total + '</div></div>'
    + '<div class="tr-stat-box"><div class="tr-stat-lbl">平均</div>'
    + '<div class="tr-stat-val">' + avg + '</div></div>'
    + '<div class="tr-stat-box"><div class="tr-stat-lbl">得意</div>'
    + '<div class="tr-stat-val tr-stat-val-sm">' + c.type + '</div></div>';

  document.getElementById('trPBars').innerHTML = keys.map(function(k){
    return '<div class="tr-bar-row">'
      + '<span class="tr-bar-lbl">' + TR_STAT_LBL[k] + '</span>'
      + '<div class="tr-bar-bg"><div class="tr-bar-fill" style="width:'
      + c.stats[k] + '%;background:' + TR_BAR[k] + '"></div></div>'
      + '<span class="tr-bar-num">' + c.stats[k] + '</span>'
      + '</div>';
  }).join('');

  document.getElementById('trPSkills').innerHTML = c.skills.map(function(sk){
    var rcls = TR_RARITY_CLS[sk.rarity] || 'tr-rarity-bronze';
    return '<div class="tr-skill-row">'
      + '<div class="tr-skill-name">'
      + '<span class="tr-skill-icon">' + sk.icon + '</span>'
      + sk.name
      + '<span class="tr-rarity ' + rcls + '">' + sk.rarity + '</span>'
      + '</div>'
      + '<div class="tr-skill-desc">' + sk.desc + '</div>'
      + '</div>';
  }).join('');

  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ============================================================
//  フィルター
// ============================================================
function trFilter() {
  var q = document.getElementById('trSearch').value.toLowerCase();
  var t = document.getElementById('trType').value;
  trFiltered = {};
  TR_CHARS.forEach(function(c){
    var nm = c.name.toLowerCase().indexOf(q) !== -1 || c.type.indexOf(q) !== -1;
    var tp = !t || c.type === t;
    if (nm && tp) trFiltered[c.id] = true;
  });
  trRender();
}

// ============================================================
//  初期化
// ============================================================
trRender();
