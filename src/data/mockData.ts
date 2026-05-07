// ─────────────────────────────────────────────────────────────
// SCENARIO: Enterprise FinTech SaaS — B2B software for financial
// institutions (banks, credit unions, asset managers).
//
// Business context:
//   • Targeting CFOs, CTOs, and VP-level finance decision makers
//   • High CPC due to competitive FinTech keyword auctions
//   • LinkedIn over-indexes vs typical SaaS (finance audience quality)
//   • Programmatic dominant for awareness, but LinkedIn drives pipeline
//   • Paid Social (Facebook/Instagram) underperforming — wrong audience fit
//   • Nov spike: fiscal year-end budget flush from enterprise clients
//   • Organic modest but high-quality (whitepaper / SEO strategy)
// ─────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────
// KPI CARDS
// Total annual spend ~$31.4M — leaner than broad SaaS ops,
// reflects FinTech's precision targeting over volume.
// CPM elevated ($487K) — premium finance inventory is expensive.
// CTR lower (8.3%) — niche B2B audience, not mass-market clicks.
// CPC high ($6.1K) — FinTech search terms are fiercely competitive.
// Conv. Rate strong (11.2%) — intent quality high when you reach them.
// ─────────────────────────────────────────────────────────────
export const kpiData = [
  {
    title: "Spend",
    value: "$31.40M",
    change: "$384.12K",
    changeIsPositive: true,
    // Rising spend, Aug pullback, massive Nov fiscal-year-end push
    sparklineData: [28, 44, 32, 55, 38, 64, 42, 22, 68, 75, 45, 96, 58, 50, 64, 72]
  },
  {
    title: "CPM",
    value: "$487K",
    change: "$2.14K",
    changeIsPositive: true,
    // Inventory costs climbing, sudden auction pressure spike in Nov
    sparklineData: [32, 18, 48, 28, 60, 38, 52, 72, 44, 82, 56, 94, 62, 48, 74, 80]
  },
  {
    title: "CTR",
    value: "8.3%",
    change: "-0.12%",
    changeIsPositive: false,
    // Structural decline all year — Social fatigue eroding blended CTR
    sparklineData: [92, 76, 86, 68, 80, 58, 74, 48, 66, 38, 58, 28, 50, 20, 42, 18]
  },
  {
    title: "CPC",
    value: "$6.1K",
    change: "$0.31K",
    changeIsPositive: false,
    // FinTech CPCs rising quarter over quarter, accelerating into Q4
    sparklineData: [18, 32, 22, 44, 30, 58, 36, 68, 45, 78, 52, 62, 84, 58, 90, 96]
  },
  {
    title: "Video Views",
    value: "71K",
    change: "1,247.0",
    changeIsPositive: true,
    // Flat Q1–Q2, Q3 content series launch creates sharp spike, settles upward
    sparklineData: [18, 24, 16, 28, 22, 30, 26, 94, 52, 38, 46, 54, 62, 68, 74, 78]
  },
  {
    title: "Impressions",
    value: "124.3K",
    change: "1,893.0",
    changeIsPositive: true,
    // Volatile but range-bound, then Nov programmatic burst breaks the ceiling
    sparklineData: [48, 68, 38, 74, 52, 80, 42, 62, 58, 84, 46, 98, 64, 50, 68, 74]
  },
  {
    title: "Conversions",
    value: "1,247",
    change: "93.0",
    changeIsPositive: true,
    // Growing pipeline, Q3 dip as brand awareness dilutes intent, H2 recovery
    sparklineData: [18, 36, 26, 48, 36, 60, 54, 28, 48, 66, 74, 58, 82, 78, 88, 96]
  },
  {
    title: "Conversion Rate",
    value: "11.2%",
    change: "0.43%",
    changeIsPositive: true,
    // Flat H1, then Q3 Social cuts improve intent pool — clear H2 inflection
    sparklineData: [38, 52, 34, 58, 44, 62, 48, 38, 64, 72, 78, 68, 84, 76, 90, 94]
  }
];

// ─────────────────────────────────────────────────────────────
// TIME-SERIES — Monthly spend by channel (Jan–Dec 2023)
//
// Key narrative beats:
//   • Nov spike to ~10.8M Programmatic — fiscal year-end budget flush
//     (enterprise clients approving FY24 software contracts)
//   • Paid Search steady climb all year — sustained demand gen
//   • Paid Social declines from Q2 onward — audience mismatch confirmed
//   • Aug dip reflects FinTech's summer slowdown (decision makers OOO)
//   • Organic is consistent — content/SEO strategy holds without spikes
// ─────────────────────────────────────────────────────────────
export const channelTrendsData = [
  { name: 'Jan 2023', Programmatic: 4812094, PaidSearch: 1841029, PaidSocial: 984201, Organic: 184920 },
  { name: 'Feb 2023', Programmatic: 3941820, PaidSearch: 1712847, PaidSocial: 1041837, Organic: 178492 },
  { name: 'Mar 2023', Programmatic: 5318047, PaidSearch: 2018492, PaidSocial: 1124039, Organic: 191847 },
  { name: 'Apr 2023', Programmatic: 4712839, PaidSearch: 2214820, PaidSocial: 918047, Organic: 188294 },
  { name: 'May 2023', Programmatic: 5841029, PaidSearch: 2418492, PaidSocial: 784201, Organic: 194820 },
  { name: 'Jun 2023', Programmatic: 5018492, PaidSearch: 2618047, PaidSocial: 641829, Organic: 198047 },
  { name: 'Jul 2023', Programmatic: 4412839, PaidSearch: 2741820, PaidSocial: 512094, Organic: 201847 },
  { name: 'Aug 2023', Programmatic: 3984201, PaidSearch: 2518492, PaidSocial: 418039, Organic: 196294 },
  { name: 'Sep 2023', Programmatic: 5312047, PaidSearch: 2841829, PaidSocial: 384201, Organic: 202847 },
  { name: 'Oct 2023', Programmatic: 6418492, PaidSearch: 3014820, PaidSocial: 312839, Organic: 207294 },
  { name: 'Nov 2023', Programmatic: 10841029, PaidSearch: 3418047, PaidSocial: 441829, Organic: 214820 },
  { name: 'Dec 2023', Programmatic: 7318492, PaidSearch: 3712839, PaidSocial: 512094, Organic: 218047 },
];

// ─────────────────────────────────────────────────────────────
// CHANNEL PERFORMANCE TABLE
// Programmatic still leads impressions but impressions declined
// slightly as team shifted budget toward higher-intent Search.
// Paid Social dropped sharply — Finance audience doesn't engage
// on Meta the way consumer brands do.
// Organic holds — steady whitepaper/SEO traffic from finance pros.
// ─────────────────────────────────────────────────────────────
export const channelPerformanceData = [
  {
    channel: 'Programmatic',
    impressions: '41.2K',
    impDelta: '-6.8%',
    impPositive: false,
    ctr: '7.84%',
    ctrDelta: '2.1%',
    ctrPositive: true,
    barPercent: 100
  },
  {
    channel: 'Paid Search',
    impressions: '28.7K',
    impDelta: '24.3%',
    impPositive: true,
    ctr: '9.12%',
    ctrDelta: '4.7%',
    ctrPositive: true,
    barPercent: 78
  },
  {
    channel: 'Paid Social',
    impressions: '8.9K',
    impDelta: '-38.4%',
    impPositive: false,
    ctr: '6.47%',
    ctrDelta: '-9.2%',
    ctrPositive: false,
    barPercent: 24
  },
  {
    channel: 'Organic',
    impressions: '14.8K',
    impDelta: '3.1%',
    impPositive: true,
    ctr: '12.4%',
    ctrDelta: '0.8%',
    ctrPositive: true,
    barPercent: 38
  }
];

// ─────────────────────────────────────────────────────────────
// DATA SOURCE PERFORMANCE TABLE
// LinkedIn Ads breaks the pattern here — for FinTech B2B, it's
// a top performer despite lower volume (CFO/CTO audience quality).
// Google Search Ads 360 highest CTR (financial intent keywords).
// Facebook continuing decline — creative fatigue + wrong audience.
// DV360 massive impression scale but very low CTR (expected).
// Amazon Ad Server growth tied to Nov fiscal year-end push.
// ─────────────────────────────────────────────────────────────
export const dataSourcePerformanceData = [
  {
    source: 'Google Display & Video 360',
    impressions: '7.2K',
    impDelta: '18.4%',
    impPositive: true,
    ctr: '6.18%',
    ctrDelta: '-3.2%',
    ctrPositive: false,
    barPercent: 100
  },
  {
    source: 'Amazon Ad Server (Sizmek...)',
    impressions: '6.9K',
    impDelta: '142.7%',
    impPositive: true,
    ctr: '7.84%',
    ctrDelta: '-8.4%',
    ctrPositive: false,
    barPercent: 95
  },
  {
    source: 'Google Search Ads 360',
    impressions: '6.4K',
    impDelta: '19.8%',
    impPositive: true,
    ctr: '11.24%',
    ctrDelta: '8.3%',
    ctrPositive: true,
    barPercent: 90
  },
  {
    source: 'LinkedIn Ads',
    impressions: '5.1K',
    impDelta: '31.2%',
    impPositive: true,
    ctr: '9.87%',
    ctrDelta: '12.4%',
    ctrPositive: true,
    barPercent: 74
  },
  {
    source: 'StackAdapt',
    impressions: '4.9K',
    impDelta: '22.1%',
    impPositive: true,
    ctr: '7.41%',
    ctrDelta: '-4.8%',
    ctrPositive: false,
    barPercent: 70
  },
  {
    source: 'Bing Ads (Microsoft Advert...)',
    impressions: '4.6K',
    impDelta: '-2.3%',
    impPositive: false,
    ctr: '8.93%',
    ctrDelta: '1.4%',
    ctrPositive: true,
    barPercent: 66
  },
  {
    source: 'Facebook',
    impressions: '3.8K',
    impDelta: '-41.2%',
    impPositive: false,
    ctr: '5.12%',
    ctrDelta: '-13.7%',
    ctrPositive: false,
    barPercent: 54
  }
];

// ─────────────────────────────────────────────────────────────
// CAMPAIGN PERFORMANCE TABLE
// FinTech-specific campaign names. No prior-period delta on newer
// campaigns (launched mid-year). CTR spread reflects intent level:
// retargeting and search conquesting outperform broad awareness.
// Note: CFO Suite Retargeting has the highest CTR — warm audience.
// ─────────────────────────────────────────────────────────────
export const campaignPerformanceData = [
  {
    campaign: 'Q4 Financial Services ABM Push',
    impressions: '1.1K',
    impDelta: '-',
    impPositive: null,
    ctr: '11.84%',
    ctrDelta: '-',
    ctrPositive: null,
    barPercent: 100
  },
  {
    campaign: 'CFO Suite Retargeting – FY24 Close',
    impressions: '847',
    impDelta: '-',
    impPositive: null,
    ctr: '13.27%',
    ctrDelta: '-',
    ctrPositive: null,
    barPercent: 88
  },
  {
    campaign: 'Enterprise Banking Digital Transformation',
    impressions: '1.2K',
    impDelta: '-',
    impPositive: null,
    ctr: '7.42%',
    ctrDelta: '-',
    ctrPositive: null,
    barPercent: 95
  },
  {
    campaign: 'Mid-Market Treasury Solutions Awareness',
    impressions: '1.0K',
    impDelta: '-',
    impPositive: null,
    ctr: '6.91%',
    ctrDelta: '-',
    ctrPositive: null,
    barPercent: 92
  },
  {
    campaign: 'Q3 Risk & Compliance Pipeline',
    impressions: '913',
    impDelta: '-',
    impPositive: null,
    ctr: '9.38%',
    ctrDelta: '-',
    ctrPositive: null,
    barPercent: 84
  },
  {
    campaign: 'Payments Innovation – Search Conquesting',
    impressions: '784',
    impDelta: '-',
    impPositive: null,
    ctr: '12.14%',
    ctrDelta: '-',
    ctrPositive: null,
    barPercent: 78
  },
  {
    campaign: 'FinTech Startup Acquisition Drive',
    impressions: '1.1K',
    impDelta: '-',
    impPositive: null,
    ctr: '8.02%',
    ctrDelta: '-',
    ctrPositive: null,
    barPercent: 95
  },
  {
    campaign: 'Regulatory Compliance Thought Leadership',
    impressions: '672',
    impDelta: '-',
    impPositive: null,
    ctr: '10.47%',
    ctrDelta: '-',
    ctrPositive: null,
    barPercent: 68
  }
];
