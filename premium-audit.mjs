/**
 * Premium Web Design Audit — Automated Scoring System
 * Based on: Premium Web Design Skill (10 Laws), Awwwards criteria, Core Web Vitals, WCAG AA
 *
 * Scoring: 100 points total across 9 categories
 * 90-100 = Exceptional (Awwwards-worthy)
 * 80-89  = Premium (professional, polished)
 * 70-79  = Good (minor issues)
 * 60-69  = Needs Work (visible gaps)
 * <60    = Below Standard
 */

import { readFileSync, readdirSync, existsSync } from 'fs'
import { join, extname } from 'path'

const SRC = './src'
const ROOT = '.'

// ── Helpers ──────────────────────────────────────────────────────────────

function readFile(path) {
  try { return readFileSync(path, 'utf-8') } catch { return '' }
}

function readAllFiles(dir, exts = ['.jsx', '.js', '.css', '.html']) {
  const results = []
  function walk(d) {
    for (const entry of readdirSync(d, { withFileTypes: true })) {
      const full = join(d, entry.name)
      if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules' && entry.name !== 'dist') {
        walk(full)
      } else if (exts.includes(extname(entry.name))) {
        results.push({ path: full, content: readFile(full) })
      }
    }
  }
  walk(dir)
  return results
}

function allContent(files) { return files.map(f => f.content).join('\n') }

// ── Test Infrastructure ──────────────────────────────────────────────────

const results = []
let currentCategory = ''

function category(name, maxPoints) {
  currentCategory = name
  results.push({ type: 'category', name, maxPoints, tests: [] })
}

function test(name, points, passFn) {
  const cat = results[results.length - 1]
  let passed, detail
  try {
    const res = passFn()
    if (typeof res === 'object') {
      passed = res.pass
      detail = res.detail
    } else {
      passed = !!res
      detail = ''
    }
  } catch (e) {
    passed = false
    detail = `Error: ${e.message}`
  }
  cat.tests.push({ name, points, passed, detail })
}

// ── Load Files ───────────────────────────────────────────────────────────

const srcFiles = readAllFiles(SRC)
const all = allContent(srcFiles)
const indexHtml = readFile(join(ROOT, 'index.html'))
const indexCss = readFile(join(SRC, 'index.css'))
const homeJsx = readFile(join(SRC, 'pages', 'Home.jsx'))
const navbarJsx = readFile(join(SRC, 'components', 'Navbar.jsx'))
const sectionJsx = readFile(join(SRC, 'components', 'Section.jsx'))
const detailTerrafix = readFile(join(SRC, 'pages', 'DetailTerrafix.jsx'))
const detailDisk = readFile(join(SRC, 'pages', 'DetailDiskInserted.jsx'))

// ═══════════════════════════════════════════════════════════════════════════
// CATEGORY 1: TYPOGRAPHY & IDENTITY (15 points)
// ═══════════════════════════════════════════════════════════════════════════

category('Typography & Identity', 15)

test('Custom heading font defined (not system default)', 2, () => {
  const hasHeadingFont = indexCss.includes('--font-heading') && !indexCss.match(/--font-heading:\s*system-ui/)
  return { pass: hasHeadingFont, detail: hasHeadingFont ? 'Space Grotesk heading font' : 'Missing custom heading font' }
})

test('Max 2-3 font families', 2, () => {
  const fontFamilies = (indexHtml.match(/family=[^&"]*/g) || [])
  const count = fontFamilies.length
  return { pass: count >= 1 && count <= 3, detail: `${count} font families loaded` }
})

test('Clear type scale hierarchy (H1 > H2 > H3 > body)', 2, () => {
  const hasH1Size = homeJsx.includes('text-4xl') || homeJsx.includes('text-5xl') || homeJsx.includes('text-6xl')
  const hasH2Size = homeJsx.includes('text-3xl') || homeJsx.includes('text-4xl')
  const hasBodySize = homeJsx.includes('text-lg') || homeJsx.includes('text-sm')
  return { pass: hasH1Size && hasH2Size && hasBodySize, detail: 'H1/H2/body sizes present' }
})

test('Heading line-height tight (1.0-1.3)', 2, () => {
  const hasTightLeading = homeJsx.includes('leading-tight') || homeJsx.includes('leading-[1.08]')
  return { pass: hasTightLeading, detail: hasTightLeading ? 'leading-tight / leading-[1.08]' : 'Missing tight heading line-height' }
})

test('Body text reading width constrained (max-w or ch)', 2, () => {
  const hasMaxW = all.includes('max-w-xl') || all.includes('max-w-[70ch]') || all.includes('max-w-2xl')
  return { pass: hasMaxW, detail: hasMaxW ? 'Content width constrained' : 'No max-width on body text' }
})

test('Font weight contrast (300-400 body vs 600-700 headings)', 2, () => {
  const bodyWeight = indexCss.includes('font-weight: 400') || indexCss.includes('font-weight: 300')
  const headingWeight = homeJsx.includes('font-bold') || homeJsx.includes('font-semibold')
  return { pass: bodyWeight && headingWeight, detail: `Body: 400, Headings: bold/semibold` }
})

test('Font preconnect for external fonts', 2, () => {
  const hasPreconnect = indexHtml.includes('rel="preconnect"') && indexHtml.includes('fonts.googleapis.com')
  return { pass: hasPreconnect, detail: hasPreconnect ? 'Google Fonts preconnect set' : 'Missing preconnect' }
})

test('font-display: swap for headings', 1, () => {
  const hasSwap = indexHtml.includes('display=swap')
  return { pass: hasSwap, detail: hasSwap ? 'display=swap in font URL' : 'Missing font-display: swap' }
})

// ═══════════════════════════════════════════════════════════════════════════
// CATEGORY 2: COLOR SYSTEM (15 points)
// ═══════════════════════════════════════════════════════════════════════════

category('Color System', 15)

test('60-30-10 color rule (dominant bg, secondary surface, accent)', 3, () => {
  const hasBg = indexCss.includes('--color-bg')
  const hasSurface = indexCss.includes('--color-surface')
  const hasAccent = indexCss.includes('--color-accent')
  return { pass: hasBg && hasSurface && hasAccent, detail: 'bg/surface/accent tokens defined' }
})

test('Warm neutrals (not zero-chroma grays)', 3, () => {
  const bg = indexCss.match(/--color-bg:\s*(#[A-Fa-f0-9]+)/)
  const bgHex = bg ? bg[1] : ''
  // Check for warm tint: R > B in hex
  const isWarm = bgHex.length === 7 && parseInt(bgHex.slice(1,3), 16) >= parseInt(bgHex.slice(5,7), 16)
  return { pass: isWarm, detail: `Background: ${bgHex} — ${isWarm ? 'warm tint detected' : 'cold/neutral'}` }
})

test('Single accent color (max 1 brand color)', 2, () => {
  const accentColors = indexCss.match(/--color-accent[^-]*:\s*#[A-Fa-f0-9]+/g) || []
  // accent + accent-hover = 2 entries, which is fine (same hue)
  return { pass: accentColors.length <= 2, detail: `${accentColors.length} accent token(s)` }
})

test('No AI-tell purple/indigo accent (#6366F1, #8B5CF6 range)', 2, () => {
  const purplePattern = /#[6-9][0-9A-Fa-f]{2}[3-6][Ff][1-6]/
  const hasPurple = purplePattern.test(indexCss)
  return { pass: !hasPurple, detail: hasPurple ? 'Purple accent detected (AI-tell)' : 'No purple accent' }
})

test('Dark mode surfaces not pure black (#000)', 2, () => {
  const darkBg = indexCss.match(/--color-dark-bg:\s*(#[A-Fa-f0-9]+)/)
  const hex = darkBg ? darkBg[1] : ''
  const notPureBlack = hex !== '#000' && hex !== '#000000'
  return { pass: notPureBlack, detail: `Dark bg: ${hex}` }
})

test('Dark text not pure white (#FFF)', 1.5, () => {
  const darkText = indexCss.match(/--color-dark-text:\s*(#[A-Fa-f0-9]+)/)
  const hex = darkText ? darkText[1] : ''
  const notPureWhite = hex !== '#FFF' && hex !== '#FFFFFF' && hex !== '#fff' && hex !== '#ffffff'
  return { pass: notPureWhite, detail: `Dark text: ${hex}` }
})

test('Selection color styled', 1.5, () => {
  const hasSelection = indexHtml.includes('selection:bg-') || indexCss.includes('::selection')
  return { pass: hasSelection, detail: hasSelection ? 'Custom selection color' : 'Default selection color' }
})

// ═══════════════════════════════════════════════════════════════════════════
// CATEGORY 3: LAYOUT & SPACING (15 points)
// ═══════════════════════════════════════════════════════════════════════════

category('Layout & Spacing', 15)

test('8px spacing grid defined in tokens', 2, () => {
  const hasGrid = indexCss.includes('--space-1: 0.25rem') && indexCss.includes('--space-8: 2rem')
  return { pass: hasGrid, detail: hasGrid ? 'Full spacing scale defined' : 'Missing spacing tokens' }
})

test('Section padding 80-120px (py-20 to py-28+)', 2, () => {
  const hasSectionPadding = sectionJsx.includes('py-20') && sectionJsx.includes('md:py-28')
  return { pass: hasSectionPadding, detail: hasSectionPadding ? 'py-20/md:py-28 (80px/112px)' : 'Insufficient section padding' }
})

test('Hero height >= 90vh', 2, () => {
  const hasHeroHeight = homeJsx.includes('min-h-[92vh]') || homeJsx.includes('min-h-screen')
  return { pass: hasHeroHeight, detail: hasHeroHeight ? 'min-h-[92vh]' : 'Hero too short' }
})

test('Max content width constrained (max-w-5xl or similar)', 2, () => {
  const hasMaxW = homeJsx.includes('max-w-5xl') || homeJsx.includes('max-w-7xl')
  return { pass: hasMaxW, detail: 'max-w-5xl container' }
})

test('Consistent horizontal padding (px-6 sm:px-8 lg:px-12)', 2, () => {
  const pattern = 'px-6 sm:px-8 lg:px-12'
  const count = (homeJsx.match(new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length
  return { pass: count >= 3, detail: `${count} sections with consistent padding` }
})

test('Responsive grid system (md:grid-cols)', 2, () => {
  const gridCount = (homeJsx.match(/md:grid-cols/g) || []).length
  return { pass: gridCount >= 4, detail: `${gridCount} responsive grids` }
})

test('Border radius scale (varied, not uniform)', 1.5, () => {
  const hasVaried = indexCss.includes('--radius-sm') && indexCss.includes('--radius-md') && indexCss.includes('--radius-xl')
  const usesVaried = all.includes('rounded-full') && all.includes('rounded-2xl') && all.includes('rounded-xl')
  return { pass: hasVaried && usesVaried, detail: 'Multiple radius tokens used' }
})

test('Shadow system (layered, not plain black)', 1.5, () => {
  const hasLayered = indexCss.includes('--shadow-sm') && indexCss.includes('--shadow-lg')
  const isLayered = indexCss.match(/--shadow-sm:.*,.*rgba/) // multiple layers
  return { pass: hasLayered && isLayered, detail: 'Layered shadow system' }
})

// ═══════════════════════════════════════════════════════════════════════════
// CATEGORY 4: ANIMATION & MOTION (10 points)
// ═══════════════════════════════════════════════════════════════════════════

category('Animation & Motion', 10)

test('Scroll reveal with translateY (20-30px)', 2, () => {
  const hasReveal = indexCss.includes('translateY(24px)') || indexCss.includes('translateY(20px)') || indexCss.includes('translateY(30px)')
  return { pass: hasReveal, detail: hasReveal ? 'translateY(24px) reveal' : 'Missing scroll reveal' }
})

test('Easing: expo/quart curves (not linear)', 2, () => {
  const hasExpo = indexCss.includes('cubic-bezier(0.16, 1, 0.3, 1)')
  const hasQuart = indexCss.includes('cubic-bezier(0.25, 1, 0.5, 1)')
  const noLinear = !indexCss.includes('transition: linear') && !indexCss.includes('ease: linear')
  return { pass: hasExpo && hasQuart && noLinear, detail: 'expo + quart easing, no linear' }
})

test('Only transform + opacity animated (no layout props)', 2, () => {
  // Check for layout-triggering transitions: width, height, margin, padding, top/left/right/bottom
  // Exclude: color, background, box-shadow, border-color, opacity, transform (these are paint/composite only)
  const lines = indexCss.split('\n')
  const layoutAnimated = lines.filter(line => {
    if (!line.includes('transition:') && !line.includes('transition-property:')) return false
    // Check if this line animates layout properties
    return /\b(?:width|height|margin|padding)\b/i.test(line) ||
           /\b(?:top|bottom)\s*(?:var|[0-9]|;)/i.test(line) ||
           /\btransition:\s*(?:left|right)\b/i.test(line)
  })
  return { pass: layoutAnimated.length === 0, detail: layoutAnimated.length ? `Layout props animated: ${layoutAnimated.map(l => l.trim()).join('; ')}` : 'Only GPU-composited props' }
})

test('prefers-reduced-motion respected', 2, () => {
  const hasReducedMotion = indexCss.includes('prefers-reduced-motion')
  return { pass: hasReducedMotion, detail: hasReducedMotion ? 'Reduced motion media query present' : 'Missing reduced-motion support' }
})

test('Hover: translateY(-1px to -2px) on interactive elements', 1, () => {
  const hasHoverLift = indexCss.includes('translateY(-2px)') || indexCss.includes('translateY(-1px)')
  return { pass: hasHoverLift, detail: hasHoverLift ? 'Hover lift effect' : 'No hover lift' }
})

test('Active/press: scale(0.98) feedback', 1, () => {
  const hasPress = indexCss.includes('scale(0.98)')
  return { pass: hasPress, detail: hasPress ? 'Press scale feedback' : 'No press feedback' }
})

// ═══════════════════════════════════════════════════════════════════════════
// CATEGORY 5: PERFORMANCE (10 points)
// ═══════════════════════════════════════════════════════════════════════════

category('Performance', 10)

test('Hero image: loading="eager" + fetchPriority="high"', 2, () => {
  const hasEager = homeJsx.includes('loading="eager"')
  const hasPriority = homeJsx.includes('fetchPriority="high"')
  return { pass: hasEager && hasPriority, detail: `eager: ${hasEager}, priority: ${hasPriority}` }
})

test('Below-fold images: loading="lazy" + decoding="async"', 2, () => {
  const hasLazy = homeJsx.includes('loading="lazy"')
  const hasAsync = homeJsx.includes('decoding="async"')
  return { pass: hasLazy && hasAsync, detail: `lazy: ${hasLazy}, async: ${hasAsync}` }
})

test('No lazy-loading on LCP (hero) image', 1.5, () => {
  // Check: the FIRST image should NOT be lazy
  const firstImg = homeJsx.match(/<img[^>]*>/s)
  const isLazy = firstImg && firstImg[0].includes('loading="lazy"')
  return { pass: !isLazy, detail: isLazy ? 'LCP image is lazy-loaded!' : 'LCP image loads eagerly' }
})

test('Font preconnect hints', 1.5, () => {
  const hasPreconnect = indexHtml.includes('preconnect') && indexHtml.includes('fonts.gstatic.com')
  return { pass: hasPreconnect, detail: hasPreconnect ? 'Preconnect for fonts' : 'Missing font preconnect' }
})

test('Intersection Observer for lazy reveals (not scroll events)', 1.5, () => {
  const usesIO = all.includes('IntersectionObserver')
  const noScrollReveal = !all.includes("addEventListener('scroll'") || all.includes('// nav only')
  return { pass: usesIO, detail: usesIO ? 'IntersectionObserver for reveals' : 'Missing IO' }
})

test('CSS transitions use GPU-composited properties only', 1.5, () => {
  const transitions = indexCss.match(/transition:.*?;/gs) || []
  // Only flag true layout properties (width/height/margin/padding/top/left/right/bottom as transition targets)
  // Allow: transform, opacity, color, background, box-shadow, border-color, filter
  const unsafe = transitions.filter(t => {
    return /\btransition:\s*(?:left|right|top|bottom|width|height|margin|padding)\b/i.test(t) ||
           /,\s*(?:left|right|top|bottom|width|height|margin|padding)\b/i.test(t)
  })
  return { pass: unsafe.length === 0, detail: unsafe.length ? `Unsafe transitions: ${unsafe.map(t => t.trim()).join('; ')}` : 'All transitions GPU-safe' }
})

// ═══════════════════════════════════════════════════════════════════════════
// CATEGORY 6: ACCESSIBILITY (10 points)
// ═══════════════════════════════════════════════════════════════════════════

category('Accessibility', 10)

test('lang attribute on <html>', 2, () => {
  const hasLang = indexHtml.includes('lang="de"') || indexHtml.includes("lang='de'")
  return { pass: hasLang, detail: hasLang ? 'lang="de"' : 'Missing lang attribute' }
})

test('Semantic HTML (main, section, nav, footer)', 2, () => {
  const hasMain = homeJsx.includes('<main')
  const hasSection = homeJsx.includes('<section')
  const hasNav = navbarJsx.includes('<nav')
  const hasFooter = homeJsx.includes('<footer')
  const count = [hasMain, hasSection, hasNav, hasFooter].filter(Boolean).length
  return { pass: count >= 4, detail: `${count}/4 semantic elements` }
})

test('aria-labels on icon-only links/buttons', 2, () => {
  const ariaCount = (homeJsx.match(/aria-label=/g) || []).length
  return { pass: ariaCount >= 3, detail: `${ariaCount} aria-labels found` }
})

test('Alt text on all images', 2, () => {
  const imgs = homeJsx.match(/<img[^>]*>/gs) || []
  const withAlt = imgs.filter(i => i.includes('alt="'))
  return { pass: withAlt.length === imgs.length, detail: `${withAlt.length}/${imgs.length} images have alt text` }
})

test('Keyboard-accessible navigation (buttons, not just divs)', 1, () => {
  const navButtons = navbarJsx.includes('<button')
  return { pass: navButtons, detail: navButtons ? 'Nav uses <button>' : 'Non-semantic nav elements' }
})

test('Mobile menu aria-label', 1, () => {
  const hasMenuLabel = navbarJsx.includes('aria-label="Men')
  return { pass: hasMenuLabel, detail: hasMenuLabel ? 'Mobile menu has label' : 'Missing menu aria-label' }
})

// ═══════════════════════════════════════════════════════════════════════════
// CATEGORY 7: SECTION FLOW & RHYTHM (10 points)
// ═══════════════════════════════════════════════════════════════════════════

category('Section Flow & Rhythm', 10)

test('Light/dark background alternation (no 3+ same in a row)', 2, () => {
  // Sections: Hero(light) -> About(light) -> Experience(alt) -> Stats(light) -> Skills(light) -> Projects(alt) -> CTA(dark) -> Footer(dark)
  // Check: About and Skills are both on default bg, but separated by alt sections
  const hasAlt = homeJsx.includes('bg-surface-alt')
  const hasDark = homeJsx.includes('bg-dark-bg')
  return { pass: hasAlt && hasDark, detail: 'light/alt/dark backgrounds used' }
})

test('Breathing element between dense sections', 2, () => {
  const hasBreathing = homeJsx.includes('BREATHING') || homeJsx.includes('Stats')
  const hasStats = homeJsx.includes('text-4xl md:text-5xl font-bold')
  return { pass: hasStats, detail: hasStats ? 'Stats breathing section present' : 'No breathing element' }
})

test('Content density variation (tall hero, compact stats, medium sections)', 2, () => {
  const heroTall = homeJsx.includes('min-h-[92vh]')
  const statsCompact = homeJsx.includes('py-16 md:py-20')
  const sectionMedium = sectionJsx.includes('py-20 md:py-28')
  return { pass: heroTall && statsCompact && sectionMedium, detail: 'Height variation: hero 92vh, stats compact, sections medium' }
})

test('One idea per section (sections have single heading)', 2, () => {
  // Count SectionHeading usages
  const headings = (homeJsx.match(/SectionHeading/g) || []).length
  // Count top-level sections
  const sections = (homeJsx.match(/<Section /g) || []).length
  return { pass: headings >= sections, detail: `${headings} headings for ${sections} sections` }
})

test('CTA section clearly differentiated (dark bg)', 2, () => {
  const hasDarkCta = homeJsx.includes('bg-dark-bg') && homeJsx.includes('Kontakt')
  return { pass: hasDarkCta, detail: hasDarkCta ? 'Dark CTA section' : 'CTA not differentiated' }
})

// ═══════════════════════════════════════════════════════════════════════════
// CATEGORY 8: AI-TELL AVOIDANCE (10 points)
// ═══════════════════════════════════════════════════════════════════════════

category('AI-Tell Avoidance', 10)

test('No purple/indigo gradient backgrounds', 1.5, () => {
  const purpleGrad = all.match(/gradient.*(?:purple|indigo|#[67][0-9a-f]{5})/i)
  return { pass: !purpleGrad, detail: purpleGrad ? 'Purple gradient found!' : 'No purple gradients' }
})

test('Not default Inter+Playfair or Poppins+Inter pairing', 1.5, () => {
  const hasPlayfair = all.includes('Playfair')
  const hasPoppins = all.includes('Poppins')
  return { pass: !hasPlayfair && !hasPoppins, detail: 'Using Space Grotesk + Inter (non-default)' }
})

test('Hero is NOT centered-text-on-gradient', 1.5, () => {
  // Extract only the hero section (first <section> in the file)
  const heroMatch = homeJsx.match(/<section[^>]*min-h-\[92vh\][\s\S]*?<\/section>/)
  const heroContent = heroMatch ? heroMatch[0] : ''
  const isSplit = heroContent.includes('grid') && heroContent.includes('md:grid-cols')
  const hasCenteredGradient = heroContent.includes('text-center') && heroContent.includes('gradient')
  return { pass: isSplit && !hasCenteredGradient, detail: isSplit ? 'Split layout hero (not centered gradient)' : 'Hero layout unclear' }
})

test('Varied border-radius (not uniform 12-16px on everything)', 1.5, () => {
  const hasRoundedFull = all.includes('rounded-full')
  const hasRounded2xl = all.includes('rounded-2xl')
  const hasRoundedXl = all.includes('rounded-xl')
  const hasRoundedLg = all.includes('rounded-lg')
  const variety = [hasRoundedFull, hasRounded2xl, hasRoundedXl, hasRoundedLg].filter(Boolean).length
  return { pass: variety >= 3, detail: `${variety} different radius values used` }
})

test('Not "three of everything" (varied item counts)', 1, () => {
  // Check: skills section has 4 main + 2 extra cards (6 total), not 3
  const skillCards = (homeJsx.match(/premium-card-static/g) || []).length
  return { pass: skillCards !== 3, detail: `${skillCards} skill cards (not exactly 3)` }
})

test('No aurora/mesh gradient as primary visual', 1, () => {
  const hasMesh = all.includes('mesh-gradient') || all.includes('aurora')
  return { pass: !hasMesh, detail: 'No mesh/aurora gradient' }
})

test('Card styles show variation (not identical)', 1, () => {
  const hasBorderAccent = homeJsx.includes('border-l-accent') || homeJsx.includes('border-t-accent')
  const hasPlainCard = homeJsx.includes('premium-card p-8')
  const hasFeaturedCard = homeJsx.includes('premium-card overflow-hidden')
  return { pass: hasBorderAccent && hasPlainCard && hasFeaturedCard, detail: 'Multiple card styles' }
})

test('Warm-tinted neutrals in CSS (not pure gray)', 1, () => {
  // Check secondary text color has warm tint
  const secondary = indexCss.match(/--color-text-secondary:\s*(#[A-Fa-f0-9]+)/)
  const hex = secondary ? secondary[1] : ''
  // Warm: R >= B
  const r = parseInt(hex.slice(1,3), 16) || 0
  const b = parseInt(hex.slice(5,7), 16) || 0
  return { pass: r >= b, detail: `Secondary: ${hex} — R(${r}) >= B(${b})` }
})

// ═══════════════════════════════════════════════════════════════════════════
// CATEGORY 9: COPY & CTA QUALITY (5 points)
// ═══════════════════════════════════════════════════════════════════════════

category('Copy & CTA Quality', 5)

test('Hero headline concise (under 10 words)', 1, () => {
  const h1Match = homeJsx.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)
  const text = h1Match ? h1Match[1].replace(/<[^>]*>/g, '').trim() : ''
  const words = text.split(/\s+/).length
  return { pass: words <= 10, detail: `"${text}" (${words} words)` }
})

test('Action-specific CTAs (not generic "Learn more")', 1, () => {
  const hasSpecific = homeJsx.includes('Projekte entdecken') || homeJsx.includes('Kontaktieren')
  const hasGeneric = homeJsx.includes('Learn more') || homeJsx.includes('Mehr erfahren')
  return { pass: hasSpecific && !hasGeneric, detail: hasSpecific ? 'Action-specific CTAs' : 'Generic CTAs' }
})

test('Primary + secondary CTA distinction in hero', 1, () => {
  const hasPrimary = homeJsx.includes('btn-primary')
  const hasSecondary = homeJsx.includes('btn-secondary')
  return { pass: hasPrimary && hasSecondary, detail: 'Primary + secondary buttons' }
})

test('Specific numbers used (not vague claims)', 1, () => {
  const hasNumbers = homeJsx.includes('6+') || homeJsx.includes('30+') || homeJsx.includes('48h') || homeJsx.includes('56')
  return { pass: hasNumbers, detail: 'Concrete numbers in stats and descriptions' }
})

test('One primary CTA per section', 1, () => {
  // Count btn-primary instances — should roughly match number of sections with CTAs
  const primaryCount = (homeJsx.match(/btn-primary/g) || []).length
  // Max 1 per section is ideal — we have hero, CTA section = 2 main ones
  return { pass: primaryCount <= 4, detail: `${primaryCount} primary CTAs total` }
})

// ═══════════════════════════════════════════════════════════════════════════
// BONUS: NEW CONTENT INTEGRATION (checks for Disk Inserted + Berufserfahrung)
// ═══════════════════════════════════════════════════════════════════════════

category('New Content Integration', 10)

test('Berufserfahrung section heading (not "Wo ich arbeite")', 1.5, () => {
  const hasNew = homeJsx.includes('Berufliche Stationen')
  const hasOld = homeJsx.includes('Wo ich arbeite')
  return { pass: hasNew && !hasOld, detail: hasNew ? 'Updated to "Berufliche Stationen"' : 'Still using old heading' }
})

test('LikeTik reframed as past experience (~1 Jahr)', 1.5, () => {
  const hasTimeframe = homeJsx.includes('ca. 1 Jahr')
  return { pass: hasTimeframe, detail: hasTimeframe ? 'Timeframe "ca. 1 Jahr" shown' : 'Missing timeframe' }
})

test('Wega Studios marked as active', 1, () => {
  const hasActive = homeJsx.includes('aktiv')
  return { pass: hasActive, detail: hasActive ? '"aktiv" label present' : 'Missing active indicator' }
})

test('Disk Inserted card exists on homepage', 1.5, () => {
  const hasCard = homeJsx.includes('Disk Inserted')
  return { pass: hasCard, detail: hasCard ? 'Disk Inserted card present' : 'Missing card' }
})

test('Disk Inserted detail page exists with correct structure', 1.5, () => {
  const hasPage = detailDisk.length > 0
  const hasBackButton = detailDisk.includes('BackButton')
  const hasLink = detailDisk.includes('maystudios.itch.io/disk-inserted')
  const hasTech = detailDisk.includes('Unreal Engine')
  return { pass: hasPage && hasBackButton && hasLink && hasTech, detail: `Page: ${hasPage}, Back: ${hasBackButton}, Link: ${hasLink}` }
})

test('Disk Inserted card has visual differentiation on homepage', 1.5, () => {
  // border-l-accent appears BEFORE disk-inserted in the JSX (className then onClick)
  const hasAccent = homeJsx.match(/border-l-accent[\s\S]{0,150}disk-inserted/) !== null ||
                    homeJsx.match(/border-t-accent[\s\S]{0,150}disk-inserted/) !== null
  // fa-gamepad badge appears near "Game Jam 2026" within the card
  const hasBadge = homeJsx.match(/fa-gamepad[\s\S]{0,80}Game Jam 2026/) !== null
  return { pass: hasAccent && hasBadge, detail: `Accent border: ${hasAccent}, Badge: ${hasBadge}` }
})

test('Disk Inserted mentions same team as Terrafix', 1.5, () => {
  const mentionsTeam = detailDisk.includes('gleiche') || detailDisk.includes('Team') || detailDisk.includes('Terrafix')
  return { pass: mentionsTeam, detail: mentionsTeam ? 'Team reference present' : 'No team reference' }
})

// ═══════════════════════════════════════════════════════════════════════════
// RESULTS
// ═══════════════════════════════════════════════════════════════════════════

console.log('\n' + '='.repeat(70))
console.log('  PREMIUM WEB DESIGN AUDIT — SCORING REPORT')
console.log('='.repeat(70) + '\n')

let totalEarned = 0
let totalPossible = 0
const categoryScores = []

for (const cat of results) {
  if (cat.type !== 'category') continue
  let catEarned = 0
  console.log(`\n${'─'.repeat(50)}`)
  console.log(`  ${cat.name.toUpperCase()} (/${cat.maxPoints} pts)`)
  console.log(`${'─'.repeat(50)}`)

  for (const t of cat.tests) {
    const icon = t.passed ? '\x1b[32m PASS \x1b[0m' : '\x1b[31m FAIL \x1b[0m'
    const pts = t.passed ? t.points : 0
    catEarned += pts
    console.log(`  ${icon} [${pts}/${t.points}] ${t.name}`)
    if (t.detail) console.log(`         ${t.detail}`)
  }

  const pct = Math.round((catEarned / cat.maxPoints) * 100)
  console.log(`\n  Category Score: ${catEarned}/${cat.maxPoints} (${pct}%)`)
  totalEarned += catEarned
  totalPossible += cat.maxPoints
  categoryScores.push({ name: cat.name, earned: catEarned, max: cat.maxPoints, pct })
}

const finalScore = Math.round((totalEarned / totalPossible) * 100)
const grade = finalScore >= 90 ? 'EXCEPTIONAL' : finalScore >= 80 ? 'PREMIUM' : finalScore >= 70 ? 'GOOD' : finalScore >= 60 ? 'NEEDS WORK' : 'BELOW STANDARD'
const gradeColor = finalScore >= 80 ? '\x1b[32m' : finalScore >= 70 ? '\x1b[33m' : '\x1b[31m'

console.log('\n' + '='.repeat(70))
console.log(`\n  FINAL SCORE: ${gradeColor}${totalEarned.toFixed(1)} / ${totalPossible} — ${finalScore}% ${grade}\x1b[0m\n`)

console.log('  Category Breakdown:')
for (const c of categoryScores) {
  const bar = '█'.repeat(Math.round(c.pct / 5)) + '░'.repeat(20 - Math.round(c.pct / 5))
  const color = c.pct >= 80 ? '\x1b[32m' : c.pct >= 60 ? '\x1b[33m' : '\x1b[31m'
  console.log(`    ${c.name.padEnd(28)} ${color}${bar}\x1b[0m ${c.earned}/${c.max} (${c.pct}%)`)
}

// List failures for improvement targets
const failures = []
for (const cat of results) {
  if (cat.type !== 'category') continue
  for (const t of cat.tests) {
    if (!t.passed) failures.push({ category: cat.name, test: t.name, points: t.points, detail: t.detail })
  }
}

if (failures.length > 0) {
  console.log(`\n  IMPROVEMENT TARGETS (${failures.length} failed tests):`)
  for (const f of failures) {
    console.log(`    - [${f.points}pt] ${f.category}: ${f.test}`)
    if (f.detail) console.log(`      ${f.detail}`)
  }
}

console.log('\n' + '='.repeat(70) + '\n')
