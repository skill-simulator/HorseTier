// ============================================================
//  ★ キャラクターデータ
//  stats の各項目は S / A / B / C / D で入力してください。
//  img: "" に画像URLを入力すると絵文字の代わりに表示されます。
//  例: img: "https://example.com/images/char01.png"
// ============================================================
var TR_CHARS = [
  { id:1,  name:"キタサンブラック",     tier:"SS", type:"スピード", img:"https://github.com/skill-simulator/HorseTier/blob/main/copy_4l-2aa1df39371d6f04a46f269303fb87ef7edd23701fd443bf0706aa458339ed80.jpg", emoji:"🐎",
    rarity:"距離適性：短距離",
    stats:{spd:"S",sta:"B",pow:"A",guts:"B",wis:"A"},
    skills:[
      {name:"電光石火",   desc:"直線で爆発的な加速。スピードが一時的に大幅上昇", icon:"⚡", rarity:"固有"},
      {name:"逃げウマ魂", desc:"先頭に立つと闘志が燃え上がる",                     icon:"🔥", rarity:"金"},
      {name:"根性",       desc:"体力ギリギリでも粘り強く走れる",                   icon:"💪", rarity:"銀"}
    ]},
  { id:2,  name:"ベガ",       tier:"SS", type:"スタミナ", img:"", emoji:"☀️",
    rarity:"距離適性：長距離",
    stats:{spd:"B",sta:"S",pow:"A",guts:"S",wis:"B"},
    skills:[
      {name:"太陽のオーラ", desc:"長距離で底力が持続する固有スキル", icon:"🌟", rarity:"固有"},
      {name:"長距離巡航",   desc:"後半のスタミナ消費を抑える",       icon:"🌊", rarity:"金"},
      {name:"粘り腰",       desc:"ゴール前で失速しにくい",           icon:"🛡️", rarity:"銀"}
    ]},
  { id:3,  name:"ミスティグレース",     tier:"SS", type:"賢さ",     img:"", emoji:"🌸",
    rarity:"距離適性：マイル",
    stats:{spd:"A",sta:"B",pow:"B",guts:"C",wis:"S"},
    skills:[
      {name:"天才少女の閃き", desc:"レース中に最適ポジションを瞬時に判断", icon:"✨", rarity:"固有"},
      {name:"先読み",         desc:"前方の状況を素早く把握して加速",         icon:"👁️", rarity:"金"},
      {name:"集中力",         desc:"終盤の判断速度が上がる",                 icon:"🎯", rarity:"銀"}
    ]},
  { id:4,  name:"インフィニティ",       tier:"SS", type:"パワー",   img:"", emoji:"♾️",
    rarity:"距離適性：中距離",
    stats:{spd:"A",sta:"A",pow:"S",guts:"S",wis:"B"},
    skills:[
      {name:"無限の力", desc:"レース終盤でもパワーが衰えない",   icon:"♾️", rarity:"固有"},
      {name:"鉄壁",     desc:"どんな状況でもペースを落とさない", icon:"🏰", rarity:"金"},
      {name:"絶対突破", desc:"馬群の中でも前に出る力がある",     icon:"🔑", rarity:"銀"}
    ]},
  { id:5,  name:"ストームキング",       tier:"S",  type:"パワー",   img:"", emoji:"⚡",
    rarity:"距離適性：中距離",
    stats:{spd:"A",sta:"A",pow:"S",guts:"A",wis:"C"},
    skills:[
      {name:"嵐の覇者",        desc:"パワーを全解放してコーナーを力技で突破", icon:"🌪️", rarity:"固有"},
      {name:"パワフルドライブ", desc:"コーナーで外から強引に抜き去る",          icon:"💥", rarity:"金"},
      {name:"体当たり気質",     desc:"接触に動じず前に出る",                    icon:"🦏", rarity:"銀"}
    ]},
  { id:6,  name:"フローラルダンス",     tier:"S",  type:"スピード", img:"", emoji:"🌺",
    rarity:"距離適性：マイル",
    stats:{spd:"S",sta:"B",pow:"B",guts:"C",wis:"A"},
    skills:[
      {name:"花びらの舞",      desc:"最終コーナーで華麗に抜け出す", icon:"🌸", rarity:"固有"},
      {name:"スタートダッシュ", desc:"発走直後の加速が大幅に向上",   icon:"🚀", rarity:"金"},
      {name:"軽快なステップ",   desc:"内ラチ沿いを器用に走る",       icon:"💃", rarity:"銀"}
    ]},
  { id:7,  name:"ダークホース",         tier:"S",  type:"スタミナ", img:"", emoji:"🖤",
    rarity:"距離適性：長距離",
    stats:{spd:"B",sta:"S",pow:"A",guts:"S",wis:"C"},
    skills:[
      {name:"黒い疾風",   desc:"最後方から全馬を追い抜く逆転劇", icon:"🌑", rarity:"固有"},
      {name:"差し脚鋭く", desc:"直線で爆発的な末脚を発揮",       icon:"⚔️", rarity:"金"},
      {name:"不屈の闘志", desc:"体力ゼロ寸前でも粘る",           icon:"🔩", rarity:"銀"}
    ]},
  { id:8,  name:"ジェットブラック",     tier:"S",  type:"スピード", img:"", emoji:"🖤",
    rarity:"距離適性：短距離",
    stats:{spd:"S",sta:"C",pow:"A",guts:"B",wis:"A"},
    skills:[
      {name:"漆黒の閃光", desc:"最終直線で圧倒的な加速を見せる", icon:"🖤", rarity:"固有"},
      {name:"爆発的加速", desc:"残り300mから急激に加速する",      icon:"💣", rarity:"金"},
      {name:"短距離特化", desc:"短距離レースで全能力が上昇",      icon:"📏", rarity:"銀"}
    ]},
  { id:9,  name:"クリスタルスター",     tier:"A",  type:"賢さ",     img:"", emoji:"💎",
    rarity:"距離適性：マイル",
    stats:{spd:"B",sta:"B",pow:"C",guts:"C",wis:"A"},
    skills:[
      {name:"星屑の軌跡", desc:"レース展開を読んでポジションを最適化", icon:"🌠", rarity:"固有"},
      {name:"直線強化",   desc:"最終直線の加速が増す",                 icon:"📈", rarity:"金"}
    ]},
  { id:10, name:"ファイアーボルト",     tier:"A",  type:"スピード", img:"", emoji:"🔥",
    rarity:"距離適性：短距離",
    stats:{spd:"A",sta:"D",pow:"B",guts:"B",wis:"B"},
    skills:[
      {name:"炎の一撃", desc:"短距離で爆発的な瞬発力",             icon:"🔥", rarity:"固有"},
      {name:"鋭い出脚", desc:"スタート直後のダッシュが素晴らしい", icon:"💨", rarity:"金"}
    ]},
  { id:11, name:"オーシャンブリーズ",   tier:"A",  type:"スタミナ", img:"", emoji:"🌊",
    rarity:"距離適性：長距離",
    stats:{spd:"C",sta:"A",pow:"B",guts:"A",wis:"B"},
    skills:[
      {name:"潮風の加護", desc:"長丁場でスタミナを温存して走る", icon:"🌊", rarity:"固有"},
      {name:"海の男気",   desc:"雨の馬場で力を発揮",             icon:"☔", rarity:"金"}
    ]},
  { id:12, name:"サンダーホーク",       tier:"A",  type:"パワー",   img:"", emoji:"🦅",
    rarity:"距離適性：中距離",
    stats:{spd:"B",sta:"B",pow:"A",guts:"A",wis:"C"},
    skills:[
      {name:"鷹の爪",    desc:"外から豪快に前を捉える", icon:"🦅", rarity:"固有"},
      {name:"内から外へ", desc:"馬群を割って前に出る",   icon:"🔄", rarity:"金"}
    ]},
  { id:13, name:"ローズクイーン",       tier:"A",  type:"賢さ",     img:"", emoji:"🌹",
    rarity:"距離適性：マイル",
    stats:{spd:"C",sta:"B",pow:"C",guts:"C",wis:"A"},
    skills:[
      {name:"女王の戦略", desc:"中盤に仕掛けて独走態勢を作る",              icon:"👑", rarity:"固有"},
      {name:"読み勝ち",   desc:"ライバルの動きを先読みして有利な位置を確保", icon:"🔮", rarity:"金"}
    ]},
  { id:14, name:"エメラルドフライト",   tier:"A",  type:"スピード", img:"", emoji:"💚",
    rarity:"距離適性：短距離",
    stats:{spd:"A",sta:"C",pow:"B",guts:"C",wis:"B"},
    skills:[
      {name:"翠の疾走",        desc:"最終直線で鮮やかに差し切る", icon:"💚", rarity:"固有"},
      {name:"グリーンスパート", desc:"残り200mから強烈な末脚",      icon:"🌿", rarity:"銀"}
    ]},
  { id:15, name:"ピーコックグローリー", tier:"A",  type:"賢さ",     img:"", emoji:"🦚",
    rarity:"距離適性：中距離",
    stats:{spd:"B",sta:"C",pow:"C",guts:"C",wis:"A"},
    skills:[
      {name:"孔雀の誇示", desc:"注目を集めながら鮮やかに逃げ切る", icon:"🦚", rarity:"固有"},
      {name:"魅せる走り", desc:"先頭を走ると闘志が上がる",          icon:"🎪", rarity:"金"}
    ]},
  { id:16, name:"ハリケーンレックス",   tier:"A",  type:"パワー",   img:"", emoji:"🌀",
    rarity:"距離適性：中距離",
    stats:{spd:"C",sta:"B",pow:"A",guts:"A",wis:"D"},
    skills:[
      {name:"嵐の暴君",    desc:"コーナーを豪快に力ずくで突き進む", icon:"🌀", rarity:"固有"},
      {name:"鬼の踏み込み", desc:"コーナーで内を強引に進む",          icon:"👺", rarity:"金"}
    ]},
  { id:17, name:"ムーンライト",         tier:"B",  type:"スタミナ", img:"", emoji:"🌙",
    rarity:"距離適性：長距離",
    stats:{spd:"C",sta:"A",pow:"C",guts:"B",wis:"B"},
    skills:[
      {name:"月明かりの走者", desc:"夜のレースで力を発揮する",         icon:"🌙", rarity:"固有"},
      {name:"夜間強化",       desc:"夕方以降のレースでスタミナ底上げ", icon:"🌃", rarity:"銀"}
    ]},
  { id:18, name:"バーニングスピリット", tier:"B",  type:"パワー",   img:"", emoji:"🔥",
    rarity:"距離適性：中距離",
    stats:{spd:"C",sta:"C",pow:"A",guts:"A",wis:"D"},
    skills:[
      {name:"燃え盛る魂", desc:"コーナーをパワーで強引に乗り越える", icon:"🔥", rarity:"固有"},
      {name:"馬群の壁",   desc:"包囲されても前に出る根性",           icon:"🧱", rarity:"銀"}
    ]},
  { id:19, name:"ノーブルハート",       tier:"B",  type:"スピード", img:"", emoji:"💙",
    rarity:"距離適性：マイル",
    stats:{spd:"A",sta:"C",pow:"B",guts:"C",wis:"B"},
    skills:[
      {name:"気高き走り", desc:"逃げ切り時の粘りが強い",       icon:"💙", rarity:"固有"},
      {name:"前傾気味",   desc:"序盤からペースを刻んで逃げる", icon:"🏃", rarity:"銀"}
    ]},
  { id:20, name:"アイアンウィル",       tier:"B",  type:"スタミナ", img:"", emoji:"⚙️",
    rarity:"距離適性：長距離",
    stats:{spd:"D",sta:"A",pow:"B",guts:"A",wis:"D"},
    skills:[
      {name:"鋼の意志",    desc:"どんな状況でも粘り続ける",   icon:"⚙️", rarity:"固有"},
      {name:"土砂降り上等", desc:"重馬場でのパワーロスを軽減", icon:"💧", rarity:"銀"}
    ]},
  { id:21, name:"スカイダンサー",       tier:"B",  type:"賢さ",     img:"", emoji:"🦋",
    rarity:"距離適性：マイル",
    stats:{spd:"B",sta:"C",pow:"C",guts:"D",wis:"A"},
    skills:[
      {name:"天翔ける蝶", desc:"中盤の仕掛けを最適化する",       icon:"🦋", rarity:"固有"},
      {name:"冷静な判断", desc:"序盤の消耗を抑えて後半に備える", icon:"🧊", rarity:"銀"}
    ]},
  { id:22, name:"クリムゾンラッシュ",   tier:"B",  type:"スピード", img:"", emoji:"🔴",
    rarity:"距離適性：短距離",
    stats:{spd:"A",sta:"D",pow:"B",guts:"C",wis:"C"},
    skills:[
      {name:"深紅の突進", desc:"短距離を一気に駆け抜ける",   icon:"🔴", rarity:"固有"},
      {name:"瞬発力",     desc:"スタートの反応速度が上がる", icon:"⚡", rarity:"銀"}
    ]},
  { id:23, name:"エコー",               tier:"B",  type:"パワー",   img:"", emoji:"🔵",
    rarity:"距離適性：中距離",
    stats:{spd:"C",sta:"B",pow:"A",guts:"A",wis:"C"},
    skills:[
      {name:"共鳴の走り", desc:"並走するとパワーが増幅する",   icon:"🔵", rarity:"固有"},
      {name:"接触不屈",   desc:"ぶつかっても速度が落ちにくい", icon:"🛡️", rarity:"銀"}
    ]},
  { id:24, name:"ソルテイル",           tier:"B",  type:"スピード", img:"", emoji:"🌅",
    rarity:"距離適性：マイル",
    stats:{spd:"A",sta:"C",pow:"C",guts:"C",wis:"B"},
    skills:[
      {name:"黄金の夜明け", desc:"レース序盤にうまく位置を取る", icon:"🌅", rarity:"固有"},
      {name:"朝露の足跡",   desc:"芝コースで僅かに速度が上がる", icon:"🌿", rarity:"銀"}
    ]},
  { id:25, name:"ラベンダードリーム",   tier:"C",  type:"賢さ",     img:"", emoji:"💜",
    rarity:"距離適性：マイル",
    stats:{spd:"C",sta:"C",pow:"D",guts:"D",wis:"B"},
    skills:[
      {name:"紫の夢想", desc:"自分のリズムで走れる時に本領発揮", icon:"💜", rarity:"固有"},
      {name:"独走好み", desc:"前方に馬がいない時に加速する",     icon:"🕊️", rarity:"銅"}
    ]},
  { id:26, name:"テイルウィンド",       tier:"C",  type:"スタミナ", img:"", emoji:"🍃",
    rarity:"距離適性：長距離",
    stats:{spd:"D",sta:"A",pow:"C",guts:"B",wis:"C"},
    skills:[
      {name:"追い風の恩恵", desc:"風向きによってスタミナ消費が変わる", icon:"🍃", rarity:"固有"},
      {name:"省エネ走法",   desc:"中盤のスタミナ消費を少し抑える",     icon:"♻️", rarity:"銅"}
    ]},
  { id:27, name:"コッパーファング",     tier:"C",  type:"パワー",   img:"", emoji:"🟤",
    rarity:"距離適性：中距離",
    stats:{spd:"C",sta:"C",pow:"B",guts:"B",wis:"D"},
    skills:[
      {name:"銅の牙",      desc:"泥臭くパワーでねじ伏せる",     icon:"🟤", rarity:"固有"},
      {name:"踏み込み強化", desc:"コーナーの踏み込みが安定する", icon:"👟", rarity:"銅"}
    ]},
  { id:28, name:"スノードロップ",       tier:"C",  type:"スピード", img:"", emoji:"❄️",
    rarity:"距離適性：短距離",
    stats:{spd:"B",sta:"D",pow:"C",guts:"D",wis:"C"},
    skills:[
      {name:"雪の結晶", desc:"冬のレースで速度が少し上昇",         icon:"❄️", rarity:"固有"},
      {name:"軽量走法", desc:"体重が軽いため直線で浮くような加速", icon:"🪶", rarity:"銅"}
    ]},
  { id:29, name:"ブロンズウィング",     tier:"C",  type:"賢さ",     img:"", emoji:"🦜",
    rarity:"距離適性：マイル",
    stats:{spd:"D",sta:"C",pow:"D",guts:"D",wis:"B"},
    skills:[
      {name:"観察眼", desc:"ライバルのペースを観察して無駄な力を使わない", icon:"🦜", rarity:"固有"},
      {name:"省力",   desc:"中盤の加速をやや抑えて温存する",               icon:"💤", rarity:"銅"}
    ]},
  { id:30, name:"サンドストーム",       tier:"C",  type:"スタミナ", img:"", emoji:"🏜️",
    rarity:"距離適性：長距離",
    stats:{spd:"D",sta:"A",pow:"C",guts:"C",wis:"C"},
    skills:[
      {name:"砂嵐の走者", desc:"ダート条件で粘り強さが増す",         icon:"🏜️", rarity:"固有"},
      {name:"砂利道適性", desc:"ダートコースでのスタミナ消費を軽減", icon:"🪨", rarity:"銅"}
    ]},
  { id:31, name:"マーブルラン",         tier:"C",  type:"パワー",   img:"", emoji:"🟠",
    rarity:"距離適性：中距離",
    stats:{spd:"C",sta:"C",pow:"B",guts:"C",wis:"D"},
    skills:[
      {name:"転がる大理石", desc:"下り坂でスピードが乗る",   icon:"🟠", rarity:"固有"},
      {name:"下り得意",     desc:"下り坂で速度ロスが少ない", icon:"⛰️", rarity:"銅"}
    ]},
  { id:32, name:"ティンカーベル",       tier:"C",  type:"賢さ",     img:"", emoji:"🧚",
    rarity:"距離適性：短距離",
    stats:{spd:"C",sta:"D",pow:"D",guts:"D",wis:"B"},
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

var TR_STAT_KEYS  = ["spd", "sta", "pow", "guts", "wis"];
var TR_STAT_LABEL = { spd:"スピード", sta:"スタミナ", pow:"パワー", guts:"根性", wis:"賢さ" };

// ランク → 点灯するセグメント数（5段階）
var TR_RANK_SEGS = { S:5, A:4, B:3, C:2, D:1 };

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

// セグメントバー1行分のHTML
function trBarHTML(labelText, rank) {
  var lit  = TR_RANK_SEGS[rank] || 1;
  var segs = '';
  for (var i = 1; i <= 5; i++) {
    var cls = i <= lit ? 'tr-seg lit-' + rank : 'tr-seg';
    segs += '<div class="' + cls + '"></div>';
  }
  return '<div class="tr-bar-row">'
    + '<span class="tr-bar-lbl">' + labelText + '</span>'
    + '<div class="tr-bar-segments">' + segs + '</div>'
    + '<span class="tr-bar-rank tr-rank-' + rank + '">' + rank + '</span>'
    + '</div>';
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
      + '<span class="tr-tier-desc">'  + tier.desc  + '</span>'
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

  // ステータスバー（S/A/B/C/D セグメント）
  document.getElementById('trPBars').innerHTML =
    TR_STAT_KEYS.map(function(k){
      return trBarHTML(TR_STAT_LABEL[k], c.stats[k]);
    }).join('');

  // スキル
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
