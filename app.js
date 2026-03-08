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
  NVDA: { ticker: "NVDA", name: "NVIDIA Corp.", level: "HIGH", score: 85, conf: 79, d7: 9 },
  AMZN: { ticker: "AMZN", name: "Amazon.com, Inc.", level: "LOW", score: 34, conf: 74, d7: 1 },
  MSFT: { ticker: "MSFT", name: "Microsoft Corp.", level: "LOW", score: 34, conf: 78, d7: 2 },
  META: { ticker: "META", name: "Meta Platforms", level: "MEDIUM", score: 48, conf: 74, d7: 1 },
  GOOGL: { ticker: "GOOGL", name: "Alphabet Inc.", level: "LOW", score: 33, conf: 77, d7: 1 },

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
function clamp(n, min, max) {
  const v = Number(n);
  if (!Number.isFinite(v)) return min;
  return Math.min(max, Math.max(min, v));
}

function avg(arr) {
  const nums = (arr || []).filter(v => Number.isFinite(v));
  if (!nums.length) return 0;
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

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

function deriveLevelFromScore(score) {
  return score >= 70 ? "HIGH" : score >= 40 ? "MEDIUM" : "LOW";
}

function fmt7d(n) {
  return `${n >= 0 ? "+" : ""}${n}`;
}

function fmtSignedPct(n, digits = 1) {
  const v = Number(n) || 0;
  return `${v >= 0 ? "+" : ""}${v.toFixed(digits)}%`;
}

function ensureUnique(arr) {
  return [...new Set(arr)];
}

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

function safeText(v, fallback = "-") {
  if (v === null || v === undefined || v === "") return fallback;
  return String(v);
}

function getCompareXLabels(range) {
  if (currentLang === "zh") {
    if (range === "1M") return { start: "1个月前", mid: "中间", end: "现在" };
    if (range === "3M") return { start: "3个月前", mid: "中间", end: "现在" };
    if (range === "6M") return { start: "6个月前", mid: "中间", end: "现在" };
    if (range === "1Y") return { start: "1年前", mid: "中间", end: "现在" };
    if (range === "3Y") return { start: "3年前", mid: "中间", end: "现在" };
    return { start: "开始", mid: "中间", end: "结束" };
  }

  if (range === "1M") return { start: "1M Ago", mid: "Middle", end: "Now" };
  if (range === "3M") return { start: "3M Ago", mid: "Middle", end: "Now" };
  if (range === "6M") return { start: "6M Ago", mid: "Middle", end: "Now" };
  if (range === "1Y") return { start: "1Y Ago", mid: "Middle", end: "Now" };
  if (range === "3Y") return { start: "3Y Ago", mid: "Middle", end: "Now" };
  return { start: "Start", mid: "Middle", end: "End" };
}

function buildCompareSeries(stock) {
  const base = Number(stock.score) || 0;
  const d7 = Number(stock.d7) || 0;

  const series = [
    Math.max(0, base - 8),
    Math.max(0, base - 5),
    Math.max(0, base - 2),
    Math.max(0, Math.min(100, base + Math.round(d7 / 2))),
    Math.max(0, Math.min(100, base))
  ];

  return series.map(v => Math.max(0, Math.min(100, v)));
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function applyTheme(theme) {
  document.body.classList.remove("light-theme", "dark-theme");

  if (theme === "light") {
    document.body.classList.add("light-theme");
  } else {
    document.body.classList.add("dark-theme");
  }

  localStorage.setItem("theme", theme);
}

function pctChange(base, latest) {
  const b = Number(base);
  const l = Number(latest);
  if (!Number.isFinite(b) || !Number.isFinite(l) || b === 0) return 0;
  return ((l - b) / b) * 100;
}

function varianceSample(arr) {
  const nums = (arr || []).filter(v => Number.isFinite(v));
  if (nums.length < 2) return 0;
  const mean = avg(nums);
  return nums.reduce((acc, v) => acc + (v - mean) * (v - mean), 0) / (nums.length - 1);
}

function annualizedVolPct(returns) {
  const nums = (returns || []).filter(v => Number.isFinite(v));
  if (nums.length < 2) return 0;
  return Math.sqrt(Math.max(varianceSample(nums), 0)) * Math.sqrt(252) * 100;
}

function calcMaxDrawdownPct(closes) {
  const nums = (closes || []).filter(v => Number.isFinite(v));
  if (!nums.length) return 0;

  let peak = nums[0];
  let mdd = 0;

  for (const p of nums) {
    if (p > peak) peak = p;
    const dd = ((p / peak) - 1) * 100;
    if (dd < mdd) mdd = dd;
  }

  return Number(mdd.toFixed(1));
}

function normalizeBreakdown(raw) {
  const data = {
    market: Math.max(1, Number(raw.market) || 1),
    drawdown: Math.max(1, Number(raw.drawdown) || 1),
    vol: Math.max(1, Number(raw.vol) || 1),
    liq: Math.max(1, Number(raw.liq) || 1)
  };

  const total = data.market + data.drawdown + data.vol + data.liq;
  let out = {
    market: Math.round((data.market / total) * 100),
    drawdown: Math.round((data.drawdown / total) * 100),
    vol: Math.round((data.vol / total) * 100),
    liq: Math.round((data.liq / total) * 100)
  };

  let diff = 100 - (out.market + out.drawdown + out.vol + out.liq);
  if (diff !== 0) {
    const keys = Object.keys(out).sort((a, b) => out[b] - out[a]);
    out[keys[0]] += diff;
  }

  return out;
}

function computeConfidenceFromHistory(len, metrics) {
  let conf = 66;

  if (len >= 20) conf += 4;
  if (len >= 60) conf += 4;
  if (len >= 120) conf += 4;

  if ((metrics?.vol20 || 0) <= 35) conf += 3;
  if ((metrics?.vol20 || 0) >= 55) conf -= 3;
  if (Math.abs(metrics?.mdd6m || 0) >= 25) conf -= 2;
  if (Math.abs(metrics?.volChgPct || 0) <= 20) conf += 2;

  return Math.round(clamp(conf, 60, 92));
}

function buildDriversFromMetrics(metrics, level, lang) {
  const vol20 = Number(metrics?.vol20 || 0);
  const vol60 = Number(metrics?.vol60 || 0);
  const mdd6m = Number(metrics?.mdd6m || 0);
  const beta = Number(metrics?.beta || 1);
  const negDays20 = Number(metrics?.negDays20 || 0);
  const volChgPct = Number(metrics?.volChgPct || 0);
  const momentum20 = Number(metrics?.momentum20 || 0);

  if (lang === "zh") {
    return [
      `近20日年化波动率约 ${Math.round(vol20)}%，${vol20 > vol60 ? "短期波动高于中期" : "短期波动低于或接近中期"}。`,
      `近6个月最大回撤约 ${mdd6m.toFixed(1)}%，${Math.abs(mdd6m) > 25 ? "回撤压力较高" : Math.abs(mdd6m) > 12 ? "回撤压力中等" : "回撤压力较低"}。`,
      `最近20个交易日中有 ${negDays20} 天为负收益，${negDays20 > 11 ? "短期情绪偏弱" : negDays20 > 8 ? "短期信号较混合" : "短期表现较稳"}。`,
      `Beta 约为 ${beta.toFixed(2)}，${beta > 1.4 ? "对大盘更敏感" : beta > 1.0 ? "对大盘敏感度中等" : "对大盘敏感度较低"}。`,
      `近10日成交量较前10日${volChgPct >= 0 ? "增加" : "减少"} ${Math.abs(volChgPct).toFixed(0)}%，${Math.abs(volChgPct) > 25 ? "流动性变化较明显" : "流动性相对平稳"}。`,
      `近20日价格动量为 ${fmtSignedPct(momentum20, 1)}，${level === "HIGH" ? "风险信号偏高" : level === "MEDIUM" ? "风险信号中性" : "风险信号偏低"}。`
    ];
  }

  return [
    `20D annualized volatility is about ${Math.round(vol20)}%, ${vol20 > vol60 ? "higher than 60D" : "below or close to 60D"}.`,
    `6M max drawdown is about ${mdd6m.toFixed(1)}%, ${Math.abs(mdd6m) > 25 ? "showing elevated drawdown pressure" : Math.abs(mdd6m) > 12 ? "showing moderate drawdown pressure" : "showing limited drawdown pressure"}.`,
    `There were ${negDays20} negative-return days in the last 20 sessions, ${negDays20 > 11 ? "suggesting weaker short-term sentiment" : negDays20 > 8 ? "showing mixed short-term signals" : "showing steadier short-term behavior"}.`,
    `Beta is around ${beta.toFixed(2)}, ${beta > 1.4 ? "indicating higher market sensitivity" : beta > 1.0 ? "indicating moderate market sensitivity" : "indicating lower market sensitivity"}.`,
    `Volume ${volChgPct >= 0 ? "increased" : "decreased"} by ${Math.abs(volChgPct).toFixed(0)}% versus the prior 10 sessions, ${Math.abs(volChgPct) > 25 ? "so liquidity conditions changed clearly" : "so liquidity remains relatively stable"}.`,
    `20D price momentum is ${fmtSignedPct(momentum20, 1)}, ${level === "HIGH" ? "which supports a higher risk reading" : level === "MEDIUM" ? "which keeps the signal mixed" : "which supports a lower risk reading"}.`
  ];
}

function buildDefaultMetricsFromSeed(score, d7) {
  const s = Number(score) || 35;
  const d = Number(d7) || 0;

  const vol20 = clamp(18 + s * 0.45, 16, 68);
  const vol60 = clamp(vol20 - 6 + (d < 0 ? 2 : -1), 14, 64);
  const mdd6m = -clamp(5 + s * 0.27, 5, 35);
  const beta = clamp(0.72 + s / 62, 0.70, 2.10);
  const volChgPct = clamp(d * 2.2, -60, 60);
  const negDays20 = clamp(Math.round(6 + s / 8), 4, 15);
  const momentum20 = clamp(d * 1.8, -25, 25);

  const raw = {
    market: clamp(beta * 22, 8, 90),
    drawdown: clamp(Math.abs(mdd6m) * 2.2, 8, 90),
    vol: clamp(vol20 * 1.5, 8, 90),
    liq: clamp(Math.abs(volChgPct) * 0.9 + 10, 8, 60)
  };

  return {
    vol20: Number(vol20.toFixed(1)),
    vol60: Number(vol60.toFixed(1)),
    mdd6m: Number(mdd6m.toFixed(1)),
    beta: Number(beta.toFixed(2)),
    volChgPct: Number(volChgPct.toFixed(1)),
    negDays20,
    momentum20: Number(momentum20.toFixed(1)),
    eventRisk: Math.round(clamp(30 + s * 0.45, 20, 90)),
    breakdown: normalizeBreakdown(raw),
    hasVolume: false
  };
}

function buildDynamicAnalyticsFromHistory(series, fallbackD7 = 0) {
  const points = Array.isArray(series) ? series : [];

  const closes = points
    .map(p => Number(p.close))
    .filter(v => Number.isFinite(v));

  const volumes = points
    .map(p => Number(p.volume ?? p.v))
    .filter(v => Number.isFinite(v));

  const returns = [];
  for (let i = 1; i < closes.length; i++) {
    const prev = closes[i - 1];
    const now = closes[i];
    if (Number.isFinite(prev) && Number.isFinite(now) && prev !== 0) {
      returns.push((now / prev) - 1);
    }
  }

  const ret20 = returns.slice(-20);
  const ret60 = returns.slice(-60);
  const vol20 = annualizedVolPct(ret20);
  const vol60 = annualizedVolPct(ret60);

  const mdd6m = calcMaxDrawdownPct(closes.slice(-126));
  const negDays20 = ret20.filter(r => r < 0).length;

  const momentum20 = closes.length >= 21
    ? pctChange(closes[closes.length - 21], closes[closes.length - 1])
    : Number(fallbackD7) || 0;

  let hasVolume = false;
  let volChgPct = clamp((Number(fallbackD7) || 0) * 2, -60, 60);

  if (volumes.length >= 20) {
    const prev10 = avg(volumes.slice(-20, -10));
    const last10 = avg(volumes.slice(-10));
    if (Number.isFinite(prev10) && Number.isFinite(last10) && prev10 !== 0) {
      volChgPct = pctChange(prev10, last10);
      hasVolume = true;
    }
  }

  const beta = clamp(0.65 + (vol60 / 35), 0.65, 2.20);

  const marketRaw = clamp(((beta - 0.65) / 1.55) * 100 + (momentum20 < 0 ? Math.min(18, Math.abs(momentum20) * 0.8) : 0), 6, 100);
  const drawdownRaw = clamp((Math.abs(mdd6m) / 30) * 100, 6, 100);
  const volRaw = clamp((((vol20 * 0.6) + (vol60 * 0.4)) / 50) * 100, 6, 100);
  const liqRaw = hasVolume
    ? clamp((Math.abs(volChgPct) / 100) * 100, 6, 65)
    : clamp((Math.abs(volChgPct) / 80) * 100, 6, 45);

  return {
    vol20: Number(vol20.toFixed(1)),
    vol60: Number(vol60.toFixed(1)),
    mdd6m: Number(mdd6m.toFixed(1)),
    beta: Number(beta.toFixed(2)),
    volChgPct: Number(volChgPct.toFixed(1)),
    negDays20,
    momentum20: Number(momentum20.toFixed(1)),
    eventRisk: Math.round(clamp((negDays20 / 20) * 100 + (momentum20 < 0 ? Math.min(20, Math.abs(momentum20)) : 0), 10, 90)),
    breakdown: normalizeBreakdown({
      market: marketRaw,
      drawdown: drawdownRaw,
      vol: volRaw,
      liq: liqRaw
    }),
    hasVolume
  };
}

function updateTextCandidates(candidates, value) {
  for (const key of candidates) {
    const byId = document.getElementById(key);
    if (byId) {
      byId.textContent = value;
      return true;
    }

    const byDataBind = document.querySelector(`[data-bind="${key}"]`);
    if (byDataBind) {
      byDataBind.textContent = value;
      return true;
    }
  }
  return false;
}

function renderDriversPanel(pred) {
  const drivers = Array.isArray(pred?.drivers) ? pred.drivers : [];

  // Existing fixed slots
  ["d1", "d2", "d3", "d4", "d5", "d6"].forEach((id, idx) => {
    const el = document.getElementById(id);
    if (el) el.textContent = drivers[idx] || "";
  });

  // Optional dynamic container
  const wrap = document.getElementById("s2DriversList") || document.getElementById("driversList");
  if (wrap) {
    wrap.innerHTML = drivers.map((txt, idx) => `
      <div class="driver-item" id="auto-driver-${idx + 1}">
        ${escapeHtml(txt)}
      </div>
    `).join("");
  }
}

function renderBreakdownAndMetrics(pred) {
  const bd = pred?.metrics?.breakdown || pred?.breakdown || { market: 35, drawdown: 30, vol: 25, liq: 10 };
  const m = pred?.metrics || {};

  const marketTxt = `${Math.round(bd.market)}%`;
  const drawdownTxt = `${Math.round(bd.drawdown)}%`;
  const volTxt = `${Math.round(bd.vol)}%`;
  const liqTxt = `${Math.round(bd.liq)}%`;

  const vol20Txt = `${Math.round(Number(m.vol20 || 0))}%`;
  const vol60Txt = `${Math.round(Number(m.vol60 || 0))}%`;
  const mddTxt = `${Number(m.mdd6m || 0).toFixed(1)}%`;
  const betaTxt = Number(m.beta || 0).toFixed(2);
  const volChgTxt = `${Number(m.volChgPct || 0) >= 0 ? "↑" : "↓"} ${Math.abs(Number(m.volChgPct || 0)).toFixed(0)}%`;

  updateTextCandidates(["bdMarketVal", "bdMarketValue", "breakdownMarket", "marketRiskValue"], marketTxt);
  updateTextCandidates(["bdDrawdownVal", "bdDrawdownValue", "breakdownDrawdown", "drawdownRiskValue"], drawdownTxt);
  updateTextCandidates(["bdVolVal", "bdVolValue", "breakdownVol", "volRiskValue"], volTxt);
  updateTextCandidates(["bdLiqVal", "bdLiqValue", "breakdownLiquidity", "liqRiskValue"], liqTxt);

  updateTextCandidates(["metricVol20Val", "metric20Vol", "vol20Value"], vol20Txt);
  updateTextCandidates(["metricVol60Val", "metric60Vol", "vol60Value"], vol60Txt);
  updateTextCandidates(["metricMdd6mVal", "metricMddVal", "mdd6mValue"], mddTxt);
  updateTextCandidates(["metricBetaVal", "metricBeta", "betaValue"], betaTxt);
  updateTextCandidates(["metricVolChgVal", "metricVolumeChange", "volChgValue"], volChgTxt);

  const breakdownWrap = document.getElementById("s2BreakdownList") || document.getElementById("breakdownList");
  if (breakdownWrap) {
    breakdownWrap.innerHTML = `
      <div class="kv-row"><span>${I18N[currentLang].bd_market}</span><span>${marketTxt}</span></div>
      <div class="kv-row"><span>${I18N[currentLang].bd_drawdown}</span><span>${drawdownTxt}</span></div>
      <div class="kv-row"><span>${I18N[currentLang].bd_vol}</span><span>${volTxt}</span></div>
      <div class="kv-row"><span>${I18N[currentLang].bd_liq}</span><span>${liqTxt}</span></div>
    `;
  }

  const metricsWrap = document.getElementById("s2MetricsList") || document.getElementById("metricsList");
  if (metricsWrap) {
    metricsWrap.innerHTML = `
      <div class="kv-row"><span>20D vol</span><span>${vol20Txt}</span></div>
      <div class="kv-row"><span>60D vol</span><span>${vol60Txt}</span></div>
      <div class="kv-row"><span>6M MDD</span><span>${mddTxt}</span></div>
      <div class="kv-row"><span>Beta</span><span>${betaTxt}</span></div>
      <div class="kv-row"><span>${I18N[currentLang].metric_volchg}</span><span>${volChgTxt}</span></div>
    `;
  }

  const rulesWrap = document.getElementById("s2RulesList") || document.getElementById("rulesList");
  if (rulesWrap) {
    rulesWrap.innerHTML = `
      <li><b>${I18N[currentLang].rule_high}:</b> ${currentLang === "zh" ? "未来30天回撤 > 12%" : "forward 30D drawdown > 12%"}</li>
      <li><b>${I18N[currentLang].rule_medium}:</b> ${currentLang === "zh" ? "6% - 12%" : "6% - 12%"}</li>
      <li><b>${I18N[currentLang].rule_low}:</b> ${currentLang === "zh" ? "< 6%" : "< 6%"}</li>
    `;
  }
}

function buildSummaryText(pred) {
  const vol20 = Number(pred?.metrics?.vol20 || 0);
  const mdd6m = Number(pred?.metrics?.mdd6m || 0);

  if (currentLang === "zh") {
    if (pred.level === "HIGH") {
      return `短期风险较高（20日波动约 ${Math.round(vol20)}%，6个月回撤约 ${mdd6m.toFixed(1)}%）。`;
    }
    if (pred.level === "MEDIUM") {
      return `短期风险中等（波动与回撤信号较混合，20日波动约 ${Math.round(vol20)}%）。`;
    }
    return `短期风险较低（近阶段相对稳定，20日波动约 ${Math.round(vol20)}%，回撤约 ${mdd6m.toFixed(1)}%）。`;
  }

  if (pred.level === "HIGH") {
    return `Higher short-term risk (20D vol about ${Math.round(vol20)}%, 6M drawdown about ${mdd6m.toFixed(1)}%).`;
  }
  if (pred.level === "MEDIUM") {
    return `Moderate short-term risk with mixed volatility and drawdown signals (20D vol about ${Math.round(vol20)}%).`;
  }
  return `Lower short-term risk with relatively steadier recent behavior (20D vol about ${Math.round(vol20)}%, drawdown about ${mdd6m.toFixed(1)}%).`;
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
      <div class="cmp-rank-name">${escapeHtml(s.ticker)}</div>
      <div class="cmp-rank-bar-wrap">
        <div class="cmp-rank-bar" style="width:${Math.max(4, Number(s.score) || 0)}%"></div>
      </div>
      <div class="cmp-rank-score">${safeText(s.score, 0)}</div>
    </div>
  `).join("");
}

function renderCompareTrend() {
  const svg = document.getElementById("cmpTrendChart");
  const linesGroup = document.getElementById("cmpTrendLines");
  const dotsGroup = document.getElementById("cmpTrendDots");
  const labelsGroup = document.getElementById("cmpTrendLabels");
  if (!svg || !linesGroup || !dotsGroup || !labelsGroup) return;

  linesGroup.innerHTML = "";
  dotsGroup.innerHTML = "";
  labelsGroup.innerHTML = "";

  const items = compareList.map(t => STOCKS[t]).filter(Boolean);
  if (!items.length) return;

  const xStartEl = document.getElementById("cmpXStart");
  const xMidEl = document.getElementById("cmpXMid");
  const xEndEl = document.getElementById("cmpXEnd");
  const labels = getCompareXLabels(currentRange);

  if (xStartEl) xStartEl.textContent = labels.start;
  if (xMidEl) xMidEl.textContent = labels.mid;
  if (xEndEl) xEndEl.textContent = labels.end;

  const colors = [
    "rgba(255,255,255,0.92)",
    "rgba(90,255,160,0.95)",
    "rgba(255,90,120,0.95)",
    "rgba(120,180,255,0.95)",
    "rgba(255,210,90,0.95)",
    "rgba(190,140,255,0.95)"
  ];

  const left = 70;
  const right = 580;
  const top = 40;
  const bottom = 220;
  const width = right - left;
  const height = bottom - top;

  const endLabels = [];

  items.forEach((s, idx) => {
    const series = buildCompareSeries(s);

    const pts = series.map((v, i) => {
      const x = left + (i / Math.max(1, series.length - 1)) * width;
      const y = bottom - (v / 100) * height;
      return { x, y, v };
    });

    const poly = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    poly.setAttribute("points", pts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" "));
    poly.setAttribute("class", "cmp-trend-line");
    poly.setAttribute("stroke", colors[idx % colors.length]);
    linesGroup.appendChild(poly);

    pts.forEach((p, pointIdx) => {
      const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("cx", p.x.toFixed(1));
      dot.setAttribute("cy", p.y.toFixed(1));
      dot.setAttribute("r", pointIdx === pts.length - 1 ? "4.5" : "3");
      dot.setAttribute("fill", colors[idx % colors.length]);
      dotsGroup.appendChild(dot);
    });

    const last = pts[pts.length - 1];
    endLabels.push({
      ticker: s.ticker,
      x: last.x + 10,
      y: last.y,
      color: colors[idx % colors.length]
    });
  });

  endLabels.sort((a, b) => a.y - b.y);

  const minGap = 18;
  for (let i = 1; i < endLabels.length; i++) {
    if (endLabels[i].y - endLabels[i - 1].y < minGap) {
      endLabels[i].y = endLabels[i - 1].y + minGap;
    }
  }

  const maxY = bottom - 2;
  const minY = top + 8;
  for (let i = endLabels.length - 1; i >= 0; i--) {
    if (endLabels[i].y > maxY) endLabels[i].y = maxY - (endLabels.length - 1 - i) * minGap;
  }
  for (let i = 0; i < endLabels.length; i++) {
    if (endLabels[i].y < minY) endLabels[i].y = minY + i * minGap;
  }

  endLabels.forEach(lbl => {
    const connector = document.createElementNS("http://www.w3.org/2000/svg", "line");
    connector.setAttribute("x1", "580");
    connector.setAttribute("y1", lbl.y.toFixed(1));
    connector.setAttribute("x2", "592");
    connector.setAttribute("y2", lbl.y.toFixed(1));
    connector.setAttribute("stroke", lbl.color);
    connector.setAttribute("stroke-width", "1.5");
    labelsGroup.appendChild(connector);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", "596");
    text.setAttribute("y", (lbl.y + 4).toFixed(1));
    text.setAttribute("class", "cmp-trend-label");
    text.setAttribute("fill", lbl.color);
    text.textContent = lbl.ticker;
    labelsGroup.appendChild(text);
  });
}

// ----- Prediction skeleton -----
function predictRisk(ticker) {
  ticker = (ticker || "").trim().toUpperCase();

  const base = STOCKS[ticker] || {};
  const baseScore = Number(base.score ?? 35);
  const conf = Number(base.conf ?? 76);
  const d7 = Number(base.d7 ?? -7);
  const level = base.level || deriveLevelFromScore(baseScore);

  const rules = { high: 12, medLo: 6, medHi: 12, low: 6 };
  const metrics = buildDefaultMetricsFromSeed(baseScore, d7);

  return {
    ticker,
    name: STOCKS[ticker]?.name || ticker,
    score: baseScore,
    conf,
    d7,
    level,
    rules,
    metrics,
    breakdown: metrics.breakdown,
    drivers: buildDriversFromMetrics(metrics, level, currentLang),
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
      pred.level = deriveLevelFromScore(pred.score);

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

      pred.metrics = buildDynamicAnalyticsFromHistory(hist.series || [], pred.d7);
      pred.breakdown = pred.metrics.breakdown;
      pred.conf = computeConfidenceFromHistory(closes.length, pred.metrics);
      pred.drivers = buildDriversFromMetrics(pred.metrics, pred.level, currentLang);
    } else {
      pred.metrics = buildDefaultMetricsFromSeed(pred.score, pred.d7);
      pred.breakdown = pred.metrics.breakdown;
      pred.drivers = buildDriversFromMetrics(pred.metrics, pred.level, currentLang);
    }
  } catch (e) {
    console.warn("Online history failed:", e?.message || e);
    pred.metrics = buildDefaultMetricsFromSeed(pred.score, pred.d7);
    pred.breakdown = pred.metrics.breakdown;
    pred.drivers = buildDriversFromMetrics(pred.metrics, pred.level, currentLang);
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
    s1Explain.textContent = buildSummaryText(pred);
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
        ? (currentLang === "zh"
            ? `该股票短期下行风险较高，主要受波动与回撤压力影响。`
            : `This stock shows higher downside risk in the near term, mainly driven by volatility and drawdown pressure.`)
        : pred.level === "MEDIUM"
        ? (currentLang === "zh"
            ? `该股票风险中等，短期信号较混合，建议结合更多信息判断。`
            : `This stock shows moderate risk with mixed short-term signals.`)
        : (currentLang === "zh"
            ? `该股票风险较低，近期表现相对稳定，但仍需关注市场变化。`
            : `This stock shows lower risk based on recent stability.`);
  }

  renderDriversPanel(pred);
  renderBreakdownAndMetrics(pred);

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
          <div class="w-name">${escapeHtml(s.ticker)}</div>
          <div class="w-sub">${escapeHtml(s.name)}</div>
        </div>
        <div class="badge ${levelToBadgeClass(s.level)}">${levelToText(s.level)}</div>
      </div>

      <div class="w-mid">
        <div><span class="muted">${currentLang === "zh" ? "评分" : "Score"}:</span> <b>${safeText(s.score, 0)}</b></div>
        <div><span class="muted">7D:</span> <b class="num ${d7Class}">${fmt7d(s.d7)}</b></div>
      </div>

      <div class="w-actions">
        <button class="btn primary" data-action="details" data-ticker="${escapeHtml(s.ticker)}">${currentLang === "zh" ? "查看详情" : "View Details"}</button>
        <button class="btn" data-action="remove" data-ticker="${escapeHtml(s.ticker)}">${currentLang === "zh" ? "移除" : "Remove"}</button>
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

  const cards = compareList.map((t) => {
    const s = STOCKS[t];
    const d7Class = s.d7 > 0 ? "pos" : s.d7 < 0 ? "neg" : "neu";

    return `
      <div class="compare-item">
        <strong>${escapeHtml(s.ticker)}</strong>
        <div class="muted">${escapeHtml(s.name)}</div>

        <div class="badge ${levelToBadgeClass(s.level)}">${levelToText(s.level)}</div>

        <div><span class="muted">${currentLang === "zh" ? "评分" : "Score"}:</span> <b>${safeText(s.score, 0)}</b></div>
        <div><span class="muted">${currentLang === "zh" ? "置信度" : "Confidence"}:</span> <b>${safeText(s.conf, 0)}%</b></div>
        <div><span class="muted">7D:</span> <b class="num ${d7Class}">${fmt7d(s.d7)}</b></div>

        <button class="btn primary cmpDetails" data-ticker="${escapeHtml(s.ticker)}">
          ${currentLang === "zh" ? "查看详情" : "View Details"}
        </button>
      </div>
    `;
  }).join("");

  box.innerHTML = cards;

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

  sel.innerHTML = Object.keys(STOCKS)
    .sort()
    .map((t) => `<option value="${escapeHtml(t)}">${escapeHtml(t)} — ${escapeHtml(STOCKS[t].name)}</option>`)
    .join("");

  sel.value = selectedTicker || "AAPL";
}

async function buildReportPreview(ticker, rangeOverride = currentRange) {
  const pred = await predictRiskOnline(ticker, rangeOverride);
  const ck = (id) => document.getElementById(id)?.checked;

  const parts = [];

  if (ck("repCkSummary")) {
    parts.push(`
      <div class="pblock">
        <b>1) Executive summary</b>
        <ul>
          <li>Risk Level: ${levelToText(pred.level)}</li>
          <li>Risk Score: ${pred.score} / 100</li>
          <li>Confidence: ${pred.conf}%</li>
          <li>7D change: ${fmt7d(pred.d7)}</li>
        </ul>
      </div>
    `);
  }

  if (ck("repCkDrivers")) {
    parts.push(`
      <div class="pblock">
        <b>2) Drivers (Top 6)</b>
        <div class="muted">${pred.drivers.join("<br/>")}</div>
      </div>
    `);
  }

  if (ck("repCkMetrics")) {
    parts.push(`
      <div class="pblock">
        <b>3) Metrics & Rules</b>
        <div class="muted">
          Rules: High &gt; ${pred.rules.high}%, Medium ${pred.rules.medLo}%–${pred.rules.medHi}%, Low &lt; ${pred.rules.low}%
          <br/>20D vol: ${Math.round(pred.metrics?.vol20 || 0)}%
          <br/>60D vol: ${Math.round(pred.metrics?.vol60 || 0)}%
          <br/>6M MDD: ${(pred.metrics?.mdd6m || 0).toFixed(1)}%
          <br/>Beta: ${(pred.metrics?.beta || 0).toFixed(2)}
        </div>
      </div>
    `);
  }

  if (ck("repCkCharts")) {
    parts.push(`
      <div class="pblock">
        <b>4) Charts</b>
        <div class="muted">Risk Score Trend (shown in S1/S2 and Compare)</div>
      </div>
    `);
  }

  if (ck("repCkDisclaimer")) {
    parts.push(`
      <div class="pblock">
        <b>5) Disclaimer</b>
        <div class="muted">
          ${currentLang === "zh" ? "仅用于学习展示，不构成投资建议。" : "For educational use only. Not financial advice."}
        </div>
      </div>
    `);
  }

  return `
    <div class="report-two-col">
      <div class="report-main">
        <div class="pblock">
          <b>${currentLang === "zh" ? "报告对象：" : "Report for:"}</b>
          ${escapeHtml(pred.ticker)} — ${escapeHtml(STOCKS[pred.ticker]?.name || pred.name)}
        </div>
        ${parts.join("")}
      </div>

      <aside class="report-side">
        <div class="report-side-card">
          <div class="report-side-title">${currentLang === "zh" ? "Report Notes" : "Report Notes"}</div>
          <div class="report-side-text">
            ${currentLang === "zh"
              ? `
                当前预览采用左右分布。
                <br>左侧显示报告正文内容，
                <br>右侧显示说明、摘要与状态信息。
              `
              : `
                This preview uses a left-right layout.
                <br>The left side shows the main report content.
                <br>The right side shows notes, summary and status info.
              `}
          </div>
        </div>

        <div class="report-side-card">
          <div class="report-side-title">${currentLang === "zh" ? "Quick Summary" : "Quick Summary"}</div>
          <div class="report-side-text">
            <div><span class="muted">Ticker:</span> <b>${escapeHtml(pred.ticker)}</b></div>
            <div><span class="muted">Level:</span> <b>${levelToText(pred.level)}</b></div>
            <div><span class="muted">Score:</span> <b>${pred.score}</b></div>
            <div><span class="muted">Confidence:</span> <b>${pred.conf}%</b></div>
            <div><span class="muted">Range:</span> <b>${rangeOverride}</b></div>
            <div><span class="muted">7D:</span> <b class="${pred.d7 > 0 ? "num pos" : pred.d7 < 0 ? "num neg" : "num neu"}">${fmt7d(pred.d7)}</b></div>
          </div>
        </div>

        <div class="report-side-card">
          <div class="report-side-title">${currentLang === "zh" ? "Layout Purpose" : "Layout Purpose"}</div>
          <div class="report-side-text">
            ${currentLang === "zh"
              ? "这样可以让右侧不再留白，同时让报告界面更完整、更像正式系统。"
              : "This fills the empty right side and makes the report look more complete and dashboard-like."}
          </div>
        </div>
      </aside>
    </div>
  `;
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
  }, 10000);
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

  document.getElementById("cmpInput").addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      document.getElementById("cmpAddBtn").click();
    }
  });

  document.getElementById("cmpGenBtn").addEventListener("click", async () => {
    await refreshCompareData();
  });

  document.getElementById("repGenBtn").addEventListener("click", async () => {
    const ticker = document.getElementById("repTicker").value || selectedTicker;
    const repRange = document.getElementById("repRange")?.value || currentRange;
    document.getElementById("reportPreview").innerHTML = await buildReportPreview(ticker, repRange);
  });

  document.getElementById("repExportBtn").addEventListener("click", () => {
    alert("Prototype: Export PDF is a placeholder in this UI demo.");
  });

  document.getElementById("setSaveBtn").addEventListener("click", () => {
    const theme = document.getElementById("setTheme")?.value || "dark";
    applyTheme(theme);
    alert(currentLang === "zh" ? "设置已保存" : "Settings saved.");
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

  const themeSelect = document.getElementById("setTheme");
  if (themeSelect) {
    const savedTheme = localStorage.getItem("theme") || "dark";
    themeSelect.value = savedTheme;
    applyTheme(savedTheme);

    themeSelect.addEventListener("change", (e) => {
      applyTheme(e.target.value);
    });
  }

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