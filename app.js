// =====================
// AI Stock Risk UI Demo
// app.js
// =====================

// ----- i18n dictionary -----
const I18N = {
  en: {
    app_title: "AI Stock Risk",
    app_sub: "UI Prototype (S1 / S2 / Watchlist)",
    tab_dashboard: "Dashboard",
    tab_watchlist: "Watchlist",
    tab_compare: "Compare",
    tab_reports: "Reports",
    tab_settings: "Settings",

    s1_title: "S1 — Stock Risk Dashboard",
    s1_placeholder: "Enter ticker (e.g., AAPL, MSFT, 300750.SZ, 600519.SS)",
    btn_predict: "Predict Risk",
    kpi_level: "Risk Level",
    kpi_score: "Risk Score (0–100)",
    kpi_conf: "Confidence (%)",
    kpi_update: "Last Update",
    s1_summary: "Risk Summary",
    s1_selected: "Selected stock",
    s1_7d: "7D change:",
    btn_view_details: "View Details",
    btn_generate_report: "Generate Report",
    s1_chart_title: "Risk Score Trend",
    chart_note: "Line updates with prediction and time range.",

    s2_title: "S2 — Risk Score & Drivers",
    btn_back: "Back",
    btn_add_watchlist: "Add to Watchlist",
    time_range: "Time range:",
    s2_output: "Risk Output",
    kpi_score_short: "Risk Score",
    kpi_conf_short: "Confidence",
    s2_7d: "7D change",
    s2_drivers: "Key Drivers",
    s2_driver_hint: "These drivers explain why the label changes.",
    s2_breakdown_rules: "Breakdown & Rules",
    s2_breakdown: "Risk Breakdown",
    bd_market: "Market",
    bd_drawdown: "Drawdown",
    bd_vol: "Volatility",
    bd_liq: "Liquidity",
    s2_metrics: "Key Metrics",
    metric_volchg: "Volume change",
    s2_rules: "Risk Label Rules",
    rule_high: "High",
    rule_medium: "Medium",
    rule_low: "Low",
    rule_high_text: "forward 30D drawdown",
    s2_chart_title: "Risk Score Trend",

    wl_title: "Watchlist & Risk Monitoring",
    wl_placeholder: "Search ticker/company",
    btn_filter_risk: "Filter by Risk",
    opt_all: "All",
    opt_high: "High",
    opt_medium: "Medium",
    opt_low: "Low",
    flow: "Flow:",

    cmp_title: "Compare",
    cmp_placeholder: "Add ticker (e.g., AAPL, 300750.SZ)",
    btn_add_stock: "Add Stock",
    btn_gen_compare: "Generate Comparison",
    cmp_table: "Comparison Table",
    cmp_note: "Click View Details to open S2.",
    cmp_chart: "Charts",
    cmp_chart_note: "Ranking and trend update automatically.",

    rep_title: "Reports",
    btn_gen_report: "Generate Report",
    btn_export_pdf: "Export PDF",
    rep_include: "Include sections",
    rep_summary: "Risk summary",
    rep_drivers: "Drivers (Top 6)",
    rep_metrics: "Metrics & Rules",
    rep_charts: "Charts",
    rep_disclaimer: "Disclaimer",
    rep_note: "This prototype shows structure and export buttons (no real PDF).",
    rep_preview: "Report Preview",
    rep_preview_hint: "Click Generate Report to preview.",

    set_title: "Settings",
    btn_save: "Save Changes",
    set_display: "Display",
    set_theme: "Theme",
    theme_dark: "Dark",
    theme_light: "Light (placeholder)",
    set_lang: "Language",
    set_lang_note: "Switch language instantly for UI text.",
    set_alerts: "Alerts",
    alerts_enable: "Enable alerts",
    alerts_score: "Notify if Risk Score >",
    alerts_high: "Notify if Risk Level = High",
    alerts_note: "Works with Watchlist filtering and monitoring.",
    set_data: "Data & Update",
    set_source: "Data source",
    source_price: "Price only",
    source_news: "Price + News (optional)",
    set_freq: "Update frequency",
    freq_daily: "Daily",
    freq_weekly: "Weekly",
    set_sync: "Last sync",
    btn_refresh: "Refresh Data",
  },
  zh: {
    app_title: "AI股票风险",
    app_sub: "UI原型（S1 / S2 / 观察列表）",
    tab_dashboard: "仪表盘",
    tab_watchlist: "观察名单",
    tab_compare: "比较",
    tab_reports: "报告",
    tab_settings: "背景设定",

    s1_title: "S1 — 风险总览仪表盘",
    s1_placeholder: "输入股票代码（例如：AAPL、MSFT、300750.SZ、600519.SS）",
    btn_predict: "AI预测",
    kpi_level: "风险等级",
    kpi_score: "风险评分（0–100）",
    kpi_conf: "置信度（%）",
    kpi_update: "更新时间",
    s1_summary: "风险摘要",
    s1_selected: "当前股票",
    s1_7d: "7天变化：",
    btn_view_details: "查看详情",
    btn_generate_report: "生成报告",
    s1_chart_title: "风险评分趋势",
    chart_note: "折线会随预测和时间范围实时变化。",

    s2_title: "S2 — 风险解释（评分与驱动因素）",
    btn_back: "返回",
    btn_add_watchlist: "加入观察",
    time_range: "时间范围：",
    s2_output: "风险输出",
    kpi_score_short: "风险评分",
    kpi_conf_short: "置信度",
    s2_7d: "7天变化",
    s2_drivers: "主要原因（Drivers）",
    s2_driver_hint: "这些原因用于解释风险标签为什么变化。",
    s2_breakdown_rules: "拆解与规则",
    s2_breakdown: "风险拆解",
    bd_market: "市场",
    bd_drawdown: "回撤",
    bd_vol: "波动",
    bd_liq: "流动性",
    s2_metrics: "关键指标",
    metric_volchg: "成交量变化",
    s2_rules: "风险等级规则",
    rule_high: "高",
    rule_medium: "中",
    rule_low: "低",
    rule_high_text: "未来30天回撤",
    s2_chart_title: "风险评分趋势",

    wl_title: "观察列表 & 风险监控",
    wl_placeholder: "搜索 股票代码/公司名",
    btn_filter_risk: "按风险筛选",
    opt_all: "全部",
    opt_high: "高",
    opt_medium: "中",
    opt_low: "低",
    flow: "流程：",

    cmp_title: "比较",
    cmp_placeholder: "添加股票代码（例如：AAPL、300750.SZ）",
    btn_add_stock: "添加",
    btn_gen_compare: "生成对比",
    cmp_table: "对比表",
    cmp_note: "点击 View Details 打开S2。",
    cmp_chart: "图表",
    cmp_chart_note: "排名和趋势会自动更新。",

    rep_title: "报告",
    btn_gen_report: "生成报告",
    btn_export_pdf: "导出PDF",
    rep_include: "包含部分",
    rep_summary: "风险总结",
    rep_drivers: "驱动因素（前六名）",
    rep_metrics: "指标与规则",
    rep_charts: "图表",
    rep_disclaimer: "免责声明",
    rep_note: "本原型展示结构与导出按钮（无真实PDF）。",
    rep_preview: "报告预览",
    rep_preview_hint: "点击“生成报告”以预览。",

    set_title: "背景设定",
    btn_save: "保存更改",
    set_display: "展示",
    set_theme: "主题",
    theme_dark: "黑暗",
    theme_light: "明亮（占位）",
    set_lang: "语言",
    set_lang_note: "点击即可切换界面语言。",
    set_alerts: "提醒",
    alerts_enable: "启用提醒",
    alerts_score: "当风险评分 >",
    alerts_high: "当风险等级=高时提醒",
    alerts_note: "用于观察列表的筛选与监控。",
    set_data: "数据与更新",
    set_source: "数据来源",
    source_price: "仅价格",
    source_news: "价格+新闻（可选）",
    set_freq: "更新频率",
    freq_daily: "每日",
    freq_weekly: "每周",
    set_sync: "最后同步",
    btn_refresh: "刷新数据",
  }
};

let currentLang = "en";
let currentRange = "1M";
let autoRefreshTimer = null;

// ----- Stock seed data -----
const STOCKS = {
  AAPL: { ticker: "AAPL", name: "Apple Inc.", level: "LOW", score: 35, conf: 76, d7: -7 },
  TSLA: { ticker: "TSLA", name: "Tesla, Inc.", level: "MEDIUM", score: 62, conf: 69, d7: -3 },
  NVDA: { ticker: "NVDA", name: "NVIDIA Corp.", level: "HIGH", score: 85, conf: 79, d7: +9 },
  AMZN: { ticker: "AMZN", name: "Amazon.com, Inc.", level: "LOW", score: 34, conf: 74, d7: +1 },
  MSFT: { ticker: "MSFT", name: "Microsoft Corp.", level: "LOW", score: 34, conf: 78, d7: +2 },
  META: { ticker: "META", name: "Meta Platforms", level: "MEDIUM", score: 48, conf: 74, d7: +1 },
  GOOGL: { ticker: "GOOGL", name: "Alphabet Inc.", level: "LOW", score: 33, conf: 77, d7: +1 },

  "300750.SZ": { ticker: "300750.SZ", name: "CATL", level: "LOW", score: 35, conf: 76, d7: -7 },
  "002594.SZ": { ticker: "002594.SZ", name: "BYD", level: "LOW", score: 35, conf: 76, d7: -7 },
  "000001.SZ": { ticker: "000001.SZ", name: "Ping An Bank", level: "LOW", score: 35, conf: 76, d7: -7 },
  "600519.SS": { ticker: "600519.SS", name: "Kweichow Moutai", level: "LOW", score: 35, conf: 76, d7: -7 },
  "601318.SS": { ticker: "601318.SS", name: "Ping An Insurance", level: "LOW", score: 35, conf: 76, d7: -7 },
  "600036.SS": { ticker: "600036.SS", name: "China Merchants Bank", level: "LOW", score: 35, conf: 76, d7: -7 }
};

let selectedTicker = "AAPL";
let watchlist = ["AAPL", "300750.SZ", "600519.SS", "TSLA", "NVDA"];
let compareList = ["AAPL", "300750.SZ", "600519.SS"];

// ----- Helpers -----
function levelToBadgeClass(level) {
  if (level === "HIGH") return "high";
  if (level === "MEDIUM") return "medium";
  return "low";
}
function levelToText(level) {
  return currentLang === "zh"
    ? (level === "HIGH" ? "高" : level === "MEDIUM" ? "中" : "低")
    : (level === "HIGH" ? "High" : level === "MEDIUM" ? "Medium" : "Low");
}
function fmt7d(n) { return `${n >= 0 ? "+" : ""}${n}`; }
function ensureUnique(arr) { return [...new Set(arr)]; }

function setNumColor(el, n) {
  if (!el) return;
  el.classList.remove("pos", "neg", "neu");
  if (n > 0) el.classList.add("pos");
  else if (n < 0) el.classList.add("neg");
  else el.classList.add("neu");
}

function fmtDateShort(iso) {
  if (!iso) return "";
  return String(iso).slice(0, 10);
}

// ----- Data fetch -----
async function fetchHistory(ticker, range) {
  const r = await fetch(`/api/history?t=${encodeURIComponent(ticker)}&range=${encodeURIComponent(range)}`);
  if (!r.ok) throw new Error("history fetch failed");
  return r.json();
}

// ----- Compute risk series -----
function computeRiskSeriesFromCloses(closes) {
  const n = closes.length;
  if (n < 3) return closes.map(() => 0);

  const W = 20;
  const scores = [];

  for (let i = 0; i < n; i++) {
    const start = Math.max(0, i - W + 1);
    const window = closes.slice(start, i + 1);

    const rets = [];
    for (let k = 1; k < window.length; k++) {
      const r = (window[k] / window[k - 1]) - 1;
      if (Number.isFinite(r)) rets.push(r);
    }
    if (rets.length < 2) {
      scores.push(0);
      continue;
    }

    const mean = rets.reduce((a, b) => a + b, 0) / rets.length;
    const varr = rets.reduce((a, b) => a + (b - mean) * (b - mean), 0) / (rets.length - 1);
    const volAnn = Math.sqrt(varr) * Math.sqrt(252);

    let peak = window[0];
    let mdd = 0;
    for (const p of window) {
      if (p > peak) peak = p;
      const dd = (p / peak) - 1;
      if (dd < mdd) mdd = dd;
    }

    const volScore = Math.max(0, Math.min(60, (volAnn / 0.8) * 60));
    const mddScore = Math.max(0, Math.min(40, (Math.abs(mdd) / 0.4) * 40));
    const score = Math.round(Math.max(0, Math.min(100, volScore + mddScore)));
    scores.push(score);
  }

  return scores;
}

// ----- Draw line -----
function drawLine(svgId, lineId, dotId, textId, series) {
  const svg = document.getElementById(svgId);
  const line = document.getElementById(lineId);
  const dot = document.getElementById(dotId);
  const label = document.getElementById(textId);
  if (!svg || !line || !dot || !label || !series?.length) return;

  const vb = svg.viewBox?.baseVal;
  const w = vb?.width || 600;
  const h = vb?.height || 220;

  const padX = 20;
  const padY = 30;
  const innerW = w - padX * 2;
  const innerH = h - padY * 2;

  const ptsArr = series.map((v, i) => {
    const x = padX + (i / Math.max(1, series.length - 1)) * innerW;
    const y = padY + (1 - v / 100) * innerH;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });

  line.setAttribute("points", ptsArr.join(" "));

  const last = series[series.length - 1];
  const prev = series[series.length - 2] ?? last;
  const up = last - prev;

  line.style.stroke =
    up > 0 ? "rgba(90,255,160,0.95)" :
    up < 0 ? "rgba(255,90,120,0.95)" :
    "rgba(255,255,255,0.75)";
  dot.style.fill = line.style.stroke;

  const [cx, cy] = ptsArr[ptsArr.length - 1].split(",");
  dot.setAttribute("cx", cx);
  dot.setAttribute("cy", cy);

  label.textContent = `${currentLang === "zh" ? "最新：" : "Latest: "}${last}`;
}

// ----- Compare charts -----
function renderCompareRanking() {
  const box = document.getElementById("cmpRankingChart");
  if (!box) return;

  const items = compareList
    .map(t => STOCKS[t])
    .filter(Boolean)
    .sort((a, b) => b.score - a.score);

  if (!items.length) {
    box.innerHTML = `<div class="muted">${currentLang === "zh" ? "暂无数据" : "No data"}</div>`;
    return;
  }

  box.innerHTML = items.map(s => `
    <div class="cmp-rank-row">
      <div class="cmp-rank-name">${s.ticker}</div>
      <div class="cmp-rank-bar-wrap">
        <div class="cmp-rank-bar" style="width:${Math.max(4, s.score)}%"></div>
      </div>
      <div class="cmp-rank-score">${s.score}</div>
    </div>
  `).join("");
}

function renderCompareTrend() {
  const svg = document.getElementById("cmpTrendChart");
  if (!svg) return;

  svg.innerHTML = `
    <line x1="30" y1="20" x2="30" y2="150" class="cmp-axis"></line>
    <line x1="30" y1="150" x2="500" y2="150" class="cmp-axis"></line>
  `;

  const items = compareList.map(t => STOCKS[t]).filter(Boolean);
  if (!items.length) return;

  const colors = [
    "rgba(255,255,255,0.9)",
    "rgba(90,255,160,0.95)",
    "rgba(255,90,120,0.95)",
    "rgba(120,180,255,0.95)",
    "rgba(255,210,90,0.95)"
  ];

  items.forEach((s, idx) => {
    const base = Number(s.score) || 0;
    const d7 = Number(s.d7) || 0;

    const series = [
      Math.max(0, base - 8),
      Math.max(0, base - 5),
      Math.max(0, base - 2),
      Math.max(0, Math.min(100, base + Math.round(d7 / 2))),
      base
    ].map(v => Math.max(0, Math.min(100, v)));

    const points = series.map((v, i) => {
      const x = 30 + (i / (series.length - 1)) * 470;
      const y = 150 - (v / 100) * 120;
      return `${x},${y}`;
    }).join(" ");

    const poly = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    poly.setAttribute("points", points);
    poly.setAttribute("class", "cmp-trend-line");
    poly.setAttribute("stroke", colors[idx % colors.length]);
    svg.appendChild(poly);

    const last = points.split(" ").pop().split(",");
    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", Number(last[0]) + 6);
    label.setAttribute("y", Number(last[1]) + 4);
    label.setAttribute("class", "cmp-trend-label");
    label.textContent = s.ticker;
    svg.appendChild(label);
  });
}

// ----- Prediction skeleton -----
function predictRisk(ticker) {
  ticker = (ticker || "").trim().toUpperCase();

  const baseScore = 35;
  const conf = 76;
  const d7 = -7;
  const level = baseScore >= 70 ? "HIGH" : baseScore >= 40 ? "MEDIUM" : "LOW";

  const rules = { high: 12, medLo: 6, medHi: 12, low: 6 };
  const metrics = { vol20: 48, vol60: 39, mdd6m: -28, beta: "1.62", volChg: d7 >= 0 ? "↑" : "↓" };

  const driversEN = [
    `20/60-day volatility is ${level === "LOW" ? "stable" : "rising"}.`,
    `Max drawdown is ${level === "HIGH" ? "widening" : "moderate"}.`,
    `${level === "LOW" ? "Fewer" : "More"} negative-return days recently.`,
    `Beta is ${level === "HIGH" ? "high" : level === "MEDIUM" ? "moderate" : "lower"} (market sensitivity).`,
    `Liquidity is healthy, which affects swings.`,
    `Sentiment / event risk is ${level === "HIGH" ? "increased" : "neutral"}.`,
  ];
  const driversZH = [
    `近20/60日波动率${level === "LOW" ? "较稳定" : "上升"}。`,
    `最大回撤${level === "HIGH" ? "扩大" : "处于中等水平"}。`,
    `近期${level === "LOW" ? "负收益天数更少" : "负收益天数更多"}。`,
    `Beta${level === "HIGH" ? "偏高" : level === "MEDIUM" ? "中等" : "较低"}（对大盘敏感度）。`,
    `流动性较好，会影响波动。`,
    `情绪/事件风险${level === "HIGH" ? "上升" : "较中性"}。`,
  ];

  return {
    ticker,
    name: STOCKS[ticker]?.name || ticker,
    score: baseScore,
    conf,
    d7,
    level,
    rules,
    metrics,
    drivers: currentLang === "zh" ? driversZH : driversEN,
    series: Array(20).fill(baseScore),
    xMeta: null
  };
}

// ----- Online prediction -----
async function predictRiskOnline(ticker, range) {
  const pred = predictRisk(ticker);

  if (!STOCKS[pred.ticker]) {
    STOCKS[pred.ticker] = {
      ticker: pred.ticker,
      name: pred.name,
      level: pred.level,
      score: pred.score,
      conf: pred.conf,
      d7: pred.d7
    };
  }

  try {
    const hist = await fetchHistory(pred.ticker, range);
    const closes = (hist.series || [])
      .map(p => Number(p.close))
      .filter(v => Number.isFinite(v));

    if (closes.length >= 3) {
      pred.series = computeRiskSeriesFromCloses(closes);
      pred.score = pred.series[pred.series.length - 1];
      pred.level = pred.score >= 70 ? "HIGH" : pred.score >= 40 ? "MEDIUM" : "LOW";

      const lastIdx = closes.length - 1;
      const baseIdx = Math.max(0, lastIdx - 5);
      const latestClose = closes[lastIdx];
      const baseClose = closes[baseIdx];

      if (Number.isFinite(latestClose) && Number.isFinite(baseClose) && baseClose !== 0) {
        pred.d7 = Number((((latestClose - baseClose) / baseClose) * 100).toFixed(1));
      }

      pred.xMeta = {
        start: hist.series?.[0]?.t,
        end: hist.series?.[hist.series.length - 1]?.t
      };
    }
  } catch (e) {
    console.warn("Online history failed:", e?.message || e);
  }

  return pred;
}

// ----- Apply prediction to UI -----
function applyPrediction(pred) {
  if (!STOCKS[pred.ticker]) {
    STOCKS[pred.ticker] = {
      ticker: pred.ticker,
      name: pred.name,
      level: pred.level,
      score: pred.score,
      conf: pred.conf,
      d7: pred.d7
    };
  } else {
    STOCKS[pred.ticker].name = STOCKS[pred.ticker].name || pred.name || pred.ticker;
    STOCKS[pred.ticker].level = pred.level;
    STOCKS[pred.ticker].score = pred.score;
    STOCKS[pred.ticker].conf = pred.conf;
    STOCKS[pred.ticker].d7 = pred.d7;
  }

  selectedTicker = pred.ticker;

  const kpiLevel = document.getElementById("kpiLevel");
  if (kpiLevel) {
    kpiLevel.className = `kpi-value badge ${levelToBadgeClass(pred.level)}`;
    kpiLevel.textContent = levelToText(pred.level);
  }

  const kpiScore = document.getElementById("kpiScore");
  if (kpiScore) kpiScore.textContent = String(pred.score);

  const kpiConf = document.getElementById("kpiConf");
  if (kpiConf) kpiConf.textContent = `${pred.conf}%`;

  const kpiUpdate = document.getElementById("kpiUpdate");
  if (kpiUpdate) kpiUpdate.textContent = new Date().toLocaleString();

  const shownName = STOCKS[pred.ticker]?.name || pred.name || pred.ticker;

  const s1Selected = document.getElementById("s1Selected");
  if (s1Selected) s1Selected.textContent = `${pred.ticker} — ${shownName}`;

  const s1Badge = document.getElementById("s1Badge");
  if (s1Badge) {
    s1Badge.className = `badge ${levelToBadgeClass(pred.level)}`;
    s1Badge.textContent = levelToText(pred.level);
  }

  const s1D7 = document.getElementById("s1D7");
  if (s1D7) {
    s1D7.textContent = fmt7d(pred.d7);
    setNumColor(s1D7, pred.d7);
  }

  const s1Explain = document.getElementById("s1Explain");
  if (s1Explain) {
    s1Explain.textContent =
      pred.level === "HIGH"
        ? (currentLang === "zh" ? "短期风险较高（波动与回撤偏大）。" : "Higher short-term risk (volatility/drawdown elevated).")
        : pred.level === "MEDIUM"
        ? (currentLang === "zh" ? "短期风险中等（信号较混合）。" : "Moderate short-term risk with mixed signals.")
        : (currentLang === "zh" ? "短期风险较低（相对稳定）。" : "Lower short-term risk with more stability.");
  }

  const s2HeaderStock = document.getElementById("s2HeaderStock");
  if (s2HeaderStock) s2HeaderStock.textContent = `${pred.ticker} — ${shownName}`;

  const s2Level = document.getElementById("s2Level");
  if (s2Level) {
    s2Level.className = `v badge ${levelToBadgeClass(pred.level)}`;
    s2Level.textContent = levelToText(pred.level);
  }

  const s2Score = document.getElementById("s2Score");
  if (s2Score) s2Score.textContent = String(pred.score);

  const s2Conf = document.getElementById("s2Conf");
  if (s2Conf) s2Conf.textContent = `${pred.conf}%`;

  const s2D7 = document.getElementById("s2D7");
  if (s2D7) {
    s2D7.textContent = fmt7d(pred.d7);
    setNumColor(s2D7, pred.d7);
  }

  const s2Meaning = document.getElementById("s2Meaning");
  if (s2Meaning) {
    s2Meaning.textContent =
      pred.level === "HIGH"
        ? (currentLang === "zh" ? "该股票短期下行风险较高，请谨慎参考。" : "This stock shows higher downside risk in the next period.")
        : pred.level === "MEDIUM"
        ? (currentLang === "zh" ? "该股票风险中等，建议结合更多信息判断。" : "This stock shows moderate risk with mixed short-term signals.")
        : (currentLang === "zh" ? "该股票风险较低，但仍需关注市场变化。" : "This stock shows lower risk based on recent stability.");
  }

  ["d1","d2","d3","d4","d5","d6"].forEach((id, idx) => {
    const el = document.getElementById(id);
    if (el) el.textContent = pred.drivers[idx] || "";
  });

  const s1RangeLabel = document.getElementById("s1RangeLabel");
  if (s1RangeLabel) s1RangeLabel.textContent = `${currentLang === "zh" ? "范围：" : "Range: "}${currentRange}`;
  const s2RangeLabel = document.getElementById("s2RangeLabel");
  if (s2RangeLabel) s2RangeLabel.textContent = `${currentLang === "zh" ? "范围：" : "Range: "}${currentRange}`;

  const xLabel = currentLang === "zh" ? `时间（范围：${currentRange}）` : `Time (Range: ${currentRange})`;
  const yLabel = currentLang === "zh" ? "风险评分（0–100）" : "Risk Score (0–100)";

  const s1X = document.getElementById("s1XLabel");
  const s1Y = document.getElementById("s1YLabel");
  if (s1X) s1X.textContent = xLabel;
  if (s1Y) s1Y.textContent = yLabel;

  const s1Start = document.getElementById("s1XStart");
  const s1End = document.getElementById("s1XEnd");
  if (s1Start) s1Start.textContent = pred.xMeta?.start ? fmtDateShort(pred.xMeta.start) : (currentLang === "zh" ? "开始" : "Start");
  if (s1End) s1End.textContent = pred.xMeta?.end ? fmtDateShort(pred.xMeta.end) : (currentLang === "zh" ? "结束" : "End");

  const s2X = document.getElementById("s2XLabel");
  const s2Y = document.getElementById("s2YLabel");
  if (s2X) s2X.textContent = xLabel;
  if (s2Y) s2Y.textContent = yLabel;

  const s2Start = document.getElementById("s2XStart");
  const s2End = document.getElementById("s2XEnd");
  if (s2Start) s2Start.textContent = pred.xMeta?.start ? fmtDateShort(pred.xMeta.start) : (currentLang === "zh" ? "开始" : "Start");
  if (s2End) s2End.textContent = pred.xMeta?.end ? fmtDateShort(pred.xMeta.end) : (currentLang === "zh" ? "结束" : "End");

  drawLine("s1Chart", "s1Line", "s1Dot", "s1LastText", pred.series);
  drawLine("s2Chart", "s2Line", "s2Dot", "s2LastText", pred.series);

  renderWatchlist();
  renderCompare();
}

// ----- Navigation -----
function switchView(viewName) {
  document.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t.dataset.view === viewName));
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  const el = document.getElementById(`view-${viewName}`);
  if (el) el.classList.add("active");

  if (viewName === "watchlist") renderWatchlist();
  if (viewName === "compare") renderCompare();
  if (viewName === "reports") initReportsDropdown();
}

// ----- Watchlist -----
function renderWatchlist() {
  const grid = document.getElementById("watchlistGrid");
  if (!grid) return;

  const q = (document.getElementById("wlSearch")?.value || "").trim().toLowerCase();
  const risk = document.getElementById("wlRiskSelect")?.value || "ALL";

  const items = watchlist
    .map((t) => STOCKS[t])
    .filter(Boolean)
    .filter((s) => {
      const hit = `${s.ticker} ${s.name}`.toLowerCase().includes(q);
      const riskOk = risk === "ALL" || risk === s.level;
      return hit && riskOk;
    });

  grid.innerHTML = "";

  items.forEach((s) => {
    const card = document.createElement("div");
    card.className = "wcard";
    const d7Class = s.d7 > 0 ? "pos" : s.d7 < 0 ? "neg" : "neu";

    card.innerHTML = `
      <div class="w-top">
        <div>
          <div class="w-name">${s.ticker}</div>
          <div class="w-sub">${s.name}</div>
        </div>
        <div class="badge ${levelToBadgeClass(s.level)}">${levelToText(s.level)}</div>
      </div>

      <div class="w-mid">
        <div><span class="muted">Score:</span> <b>${s.score}</b></div>
        <div><span class="muted">7D:</span> <b class="num ${d7Class}">${fmt7d(s.d7)}</b></div>
      </div>

      <div class="w-actions">
        <button class="btn primary" data-action="details" data-ticker="${s.ticker}">${currentLang === "zh" ? "查看详情" : "View Details"}</button>
        <button class="btn" data-action="remove" data-ticker="${s.ticker}">${currentLang === "zh" ? "移除" : "Remove"}</button>
      </div>
    `;
    grid.appendChild(card);
  });

  grid.querySelectorAll("button[data-action]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const action = btn.dataset.action;
      const ticker = btn.dataset.ticker;
      if (action === "details") {
        const pred = await predictRiskOnline(ticker, currentRange);
        applyPrediction(pred);
        switchView("detail");
      }
      if (action === "remove") {
        watchlist = watchlist.filter((t) => t !== ticker);
        renderWatchlist();
      }
    });
  });
}

// ----- Compare -----
function renderCompare() {
  const box = document.getElementById("compareTable");
  if (!box) return;

  compareList = ensureUnique(compareList).filter((t) => STOCKS[t]);
  if (compareList.length === 0) {
    box.innerHTML = `<div class="muted">${currentLang === "zh" ? "未选择股票。" : "No stocks selected."}</div>`;
    renderCompareRanking();
    renderCompareTrend();
    return;
  }

  const rows = compareList.map((t) => {
    const s = STOCKS[t];
    const d7Class = s.d7 > 0 ? "pos" : s.d7 < 0 ? "neg" : "neu";
    return `
      <div class="trow">
        <div class="cell"><b>${s.ticker}</b><div class="muted">${s.name}</div></div>
        <div class="cell"><span class="badge ${levelToBadgeClass(s.level)}">${levelToText(s.level)}</span></div>
        <div class="cell">Score: <b>${s.score}</b></div>
        <div class="cell">Conf: <b>${s.conf}%</b></div>
        <div class="cell">7D: <b class="num ${d7Class}">${fmt7d(s.d7)}</b></div>
        <div class="cell"><button class="btn primary cmpDetails" data-ticker="${s.ticker}">${currentLang === "zh" ? "查看详情" : "View Details"}</button></div>
      </div>
    `;
  }).join("");

  box.innerHTML = `
    <div class="thead">
      <div class="cell">${currentLang === "zh" ? "股票" : "Stock"}</div>
      <div class="cell">${currentLang === "zh" ? "风险" : "Risk"}</div>
      <div class="cell">${currentLang === "zh" ? "评分" : "Score"}</div>
      <div class="cell">${currentLang === "zh" ? "置信度" : "Confidence"}</div>
      <div class="cell">7D</div>
      <div class="cell">${currentLang === "zh" ? "操作" : "Action"}</div>
    </div>
    ${rows}
  `;

  box.querySelectorAll(".cmpDetails").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const ticker = btn.dataset.ticker;
      const pred = await predictRiskOnline(ticker, currentRange);
      applyPrediction(pred);
      switchView("detail");
    });
  });

  renderCompareRanking();
  renderCompareTrend();
}

// ----- Reports -----
function initReportsDropdown() {
  const sel = document.getElementById("repTicker");
  if (!sel) return;
  sel.innerHTML = Object.keys(STOCKS).sort().map((t) => `<option value="${t}">${t} — ${STOCKS[t].name}</option>`).join("");
  sel.value = selectedTicker || "AAPL";
}

async function buildReportPreview(ticker) {
  const pred = await predictRiskOnline(ticker, currentRange);
  const ck = (id) => document.getElementById(id)?.checked;

  const parts = [];
  if (ck("repCkSummary")) {
    parts.push(`<div class="pblock"><b>1) Executive summary</b><ul>
      <li>Risk Level: ${levelToText(pred.level)}</li>
      <li>Risk Score: ${pred.score} / 100</li>
      <li>Confidence: ${pred.conf}%</li>
      <li>7D change: ${fmt7d(pred.d7)}</li>
    </ul></div>`);
  }
  if (ck("repCkDrivers")) {
    parts.push(`<div class="pblock"><b>2) Drivers (Top 6)</b><div class="muted">${pred.drivers.join("<br/>")}</div></div>`);
  }
  if (ck("repCkMetrics")) {
    parts.push(`<div class="pblock"><b>3) Metrics & Rules</b><div class="muted">Rules: High &gt; ${pred.rules.high}%, Medium ${pred.rules.medLo}%–${pred.rules.medHi}%, Low &lt; ${pred.rules.low}%</div></div>`);
  }
  if (ck("repCkCharts")) {
    parts.push(`<div class="pblock"><b>4) Charts</b><div class="muted">Risk Score Trend (shown in S1/S2 and Compare)</div></div>`);
  }
  if (ck("repCkDisclaimer")) {
    parts.push(`<div class="pblock"><b>5) Disclaimer</b><div class="muted">${currentLang === "zh" ? "仅用于学习展示，不构成投资建议。" : "For educational use only. Not financial advice."}</div></div>`);
  }

  return `<div class="pblock"><b>${currentLang === "zh" ? "报告对象：" : "Report for:"}</b> ${pred.ticker} — ${STOCKS[pred.ticker]?.name || pred.name}</div>${parts.join("")}`;
}

// ----- Language -----
async function applyLanguage(lang) {
  currentLang = lang;
  const dict = I18N[lang];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });

  const pred = await predictRiskOnline(selectedTicker, currentRange);
  applyPrediction(pred);
}

// ----- Range -----
async function setRange(range) {
  currentRange = range;

  document.querySelectorAll(".chip[data-range]").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-range") === range);
  });

  const cmpRange = document.getElementById("cmpRange");
  if (cmpRange) cmpRange.value = range;

  const pred = await predictRiskOnline(selectedTicker, currentRange);
  applyPrediction(pred);
}

// ----- Auto refresh -----
async function refreshCompareData() {
  if (!compareList.length) return;

  for (const ticker of compareList) {
    const pred = await predictRiskOnline(ticker, currentRange);

    if (!STOCKS[ticker]) {
      STOCKS[ticker] = {
        ticker: pred.ticker,
        name: pred.name,
        level: pred.level,
        score: pred.score,
        conf: pred.conf,
        d7: pred.d7
      };
    } else {
      STOCKS[ticker].name = STOCKS[ticker].name || pred.name || pred.ticker;
      STOCKS[ticker].level = pred.level;
      STOCKS[ticker].score = pred.score;
      STOCKS[ticker].conf = pred.conf;
      STOCKS[ticker].d7 = pred.d7;
    }
  }

  renderCompare();
}

async function refreshDashboardData() {
  if (!selectedTicker) return;
  const pred = await predictRiskOnline(selectedTicker, currentRange);
  applyPrediction(pred);
}

function startAutoRefresh() {
  stopAutoRefresh();

  autoRefreshTimer = setInterval(async () => {
    try {
      await refreshDashboardData();
      await refreshCompareData();

      const setSync = document.getElementById("setSync");
      if (setSync) setSync.textContent = new Date().toLocaleString();

      console.log("Auto refresh completed:", new Date().toLocaleString());
    } catch (e) {
      console.error("Auto refresh failed:", e);
    }
  }, 10000); // 10 seconds
}

function stopAutoRefresh() {
  if (autoRefreshTimer) {
    clearInterval(autoRefreshTimer);
    autoRefreshTimer = null;
  }
}

// ----- Events -----
window.addEventListener("DOMContentLoaded", async () => {
  document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => switchView(tab.dataset.view));
  });

  document.getElementById("s1PredictBtn").addEventListener("click", async () => {
    const btn = document.getElementById("s1PredictBtn");
    const input = document.getElementById("s1Search");
    const t = (input.value || "").trim().toUpperCase() || selectedTicker || "AAPL";

    const s1Selected = document.getElementById("s1Selected");
    const s1Explain = document.getElementById("s1Explain");
    const kpiUpdate = document.getElementById("kpiUpdate");

    if (s1Selected) s1Selected.textContent = `${t} — Loading...`;
    if (s1Explain) s1Explain.textContent = currentLang === "zh" ? `正在获取 ${t} 的数据...` : `Loading data for ${t}...`;
    if (kpiUpdate) kpiUpdate.textContent = new Date().toLocaleString();

    try {
      btn.disabled = true;
      btn.textContent = currentLang === "zh" ? "加载中..." : "Loading...";

      const pred = await predictRiskOnline(t, currentRange);
      applyPrediction(pred);
      input.value = t;
    } catch (e) {
      console.error("Predict failed:", e);
      if (s1Explain) {
        s1Explain.textContent = currentLang === "zh"
          ? "预测失败，请检查股票代码。"
          : "Prediction failed. Please check the ticker.";
      }
      alert(currentLang === "zh" ? "预测失败，请检查股票代码。" : "Prediction failed. Please check the ticker.");
    } finally {
      btn.disabled = false;
      btn.textContent = currentLang === "zh" ? "AI预测" : "Predict Risk";
    }
  });

  document.getElementById("s1Search").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      document.getElementById("s1PredictBtn").click();
    }
  });

  document.getElementById("btnViewDetails").addEventListener("click", async () => {
    const pred = await predictRiskOnline(selectedTicker, currentRange);
    applyPrediction(pred);
    switchView("detail");
  });

  document.getElementById("btnGoReports").addEventListener("click", () => {
    switchView("reports");
    initReportsDropdown();
  });

  document.getElementById("btnBackToS1").addEventListener("click", () => switchView("dashboard"));

  document.getElementById("btnAddToWatchlist").addEventListener("click", () => {
    if (!watchlist.includes(selectedTicker)) watchlist.unshift(selectedTicker);
    watchlist = ensureUnique(watchlist);
    switchView("watchlist");
  });

  document.querySelectorAll(".chip[data-range]").forEach(btn => {
    btn.addEventListener("click", async () => {
      await setRange(btn.getAttribute("data-range"));
    });
  });

  const cmpRange = document.getElementById("cmpRange");
  if (cmpRange) {
    cmpRange.value = currentRange;
    cmpRange.addEventListener("change", async (e) => {
      await setRange(e.target.value);
      await refreshCompareData();
    });
  }

  document.getElementById("wlSearch").addEventListener("input", renderWatchlist);
  document.getElementById("wlRiskSelect").addEventListener("change", renderWatchlist);
  document.getElementById("wlFilterBtn").addEventListener("click", () => {
    const sel = document.getElementById("wlRiskSelect");
    const order = ["ALL", "HIGH", "MEDIUM", "LOW"];
    sel.value = order[(order.indexOf(sel.value) + 1) % order.length];
    renderWatchlist();
  });

  document.getElementById("cmpAddBtn").addEventListener("click", async () => {
    const v = (document.getElementById("cmpInput").value || "").trim().toUpperCase();
    if (!v) return;

    const pred = await predictRiskOnline(v, currentRange);
    applyPrediction(pred);

    compareList.push(v);
    compareList = ensureUnique(compareList);
    document.getElementById("cmpInput").value = "";
    renderCompare();
  });

  document.getElementById("cmpGenBtn").addEventListener("click", async () => {
    await refreshCompareData();
  });

  document.getElementById("repGenBtn").addEventListener("click", async () => {
    const ticker = document.getElementById("repTicker").value || selectedTicker;
    document.getElementById("reportPreview").innerHTML = await buildReportPreview(ticker);
  });

  document.getElementById("repExportBtn").addEventListener("click", () => {
    alert("Prototype: Export PDF is a placeholder in this UI demo.");
  });

  document.getElementById("setSaveBtn").addEventListener("click", () => {
    alert(currentLang === "zh" ? "已保存（原型）" : "Settings saved (prototype).");
  });

  document.getElementById("setRefreshBtn").addEventListener("click", async () => {
    document.getElementById("setSync").textContent = new Date().toLocaleString();
    await refreshDashboardData();
    await refreshCompareData();
    alert(currentLang === "zh" ? "已刷新（原型）" : "Data refreshed (prototype).");
  });

  document.getElementById("setLang").addEventListener("change", async (e) => {
    await applyLanguage(e.target.value);
  });

  await applyLanguage("en");
  await setRange("1M");
  const pred = await predictRiskOnline(selectedTicker, currentRange);
  applyPrediction(pred);
  renderWatchlist();
  renderCompare();
  startAutoRefresh();
});

window.addEventListener("beforeunload", () => {
  stopAutoRefresh();
});