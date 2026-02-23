/**
 * ════════════════════════════════════════════════════════════════════════
 *  AURA BLOOM MEDSPA — TypeScript Design Tokens
 *  Version: 1.0.0
 *
 *  Fully typed, autocomplete-friendly design tokens for React/Next.js.
 *  Import specific token groups as needed:
 *
 *    import { colors, typography, spacing } from '@/tokens';
 * ════════════════════════════════════════════════════════════════════════
 */

// ─── COLORS ──────────────────────────────────────────────────────────

export const colors = {
    // Primitive Palette
    navy: '#0A192F',
    charcoal: '#121212',
    gold: '#C5A059',
    cream: '#FDFBF7',
    accent: '#E5D5C0',
    teal: '#27899D',
    white: '#FFFFFF',
    glassCream: '#FBFCF7',
    glassPeach: '#F49E94',

    // Semantic — Backgrounds
    bg: {
        primary: '#FDFBF7',
        secondary: '#FFFFFF',
        dark: '#0A192F',
        footer: '#121212',
        navbarSolid: '#E5EDF1',
        announcement: '#F6DFD6',
    },

    // Semantic — Text
    text: {
        primary: '#121212',
        heading: '#0A192F',
        accentLabel: '#C5A059',
        onDark: '#FFFFFF',
        onDark60: 'rgba(255,255,255,0.6)',
        onDark40: 'rgba(255,255,255,0.4)',
        onDark30: 'rgba(255,255,255,0.3)',
        muted: 'rgba(18,18,18,0.7)',
        subtle: 'rgba(18,18,18,0.5)',
        navbar: '#27899D',
        italicAccent: '#E5D5C0',
    },

    // Semantic — Interactive
    interactive: {
        ctaPrimaryBg: '#C5A059',
        ctaPrimaryText: '#0A192F',
        ctaPrimaryHover: 'rgba(197,160,89,0.9)',
        ctaSecondaryBorder: 'rgba(255,255,255,0.2)',
        ctaSecondaryHover: 'rgba(255,255,255,0.1)',
        filterActiveBg: '#0A192F',
        filterActiveText: '#FFFFFF',
        filterInactiveBorder: 'rgba(10,25,47,0.1)',
        linkHover: '#C5A059',
    },

    // Decorative
    decorative: {
        glassBorder: 'rgba(255,255,255,0.1)',
        glassBg: 'rgba(255,255,255,0.05)',
        glassBg20: 'rgba(255,255,255,0.2)',
        dividerLight: 'rgba(255,255,255,0.05)',
        inputBorder: 'rgba(255,255,255,0.1)',
        inputBg: 'rgba(255,255,255,0.05)',
        tagColor: 'rgba(10,25,47,0.4)',
        tagBorder: 'rgba(10,25,47,0.1)',
    },

    // Gradients
    gradient: {
        hero: 'linear-gradient(to right, #0A192F, rgba(10,25,47,0.8), transparent)',
        card: 'linear-gradient(to top, rgba(10,25,47,0.8), transparent, transparent)',
        radialCta: 'radial-gradient(circle at 50% 50%, #C5A059, transparent 70%)',
    },
} as const;

// ─── TYPOGRAPHY ──────────────────────────────────────────────────────

export const typography = {
    fontFamily: {
        serif: "'Cormorant Garamond', serif",
        sans: "'Inter', sans-serif",
    },

    fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
    },

    fontSize: {
        '3xs': '10px',
        '2xs': '11px',
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '60px',
        '7xl': '72px',
        '8xl': '96px',
    },

    lineHeight: {
        none: 1,
        tight: 0.9,
        snug: 1.1,
        normal: 1.5,
        relaxed: 1.625,
        loose: 1.8,
    },

    letterSpacing: {
        normal: '0em',
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.175em',
        nav: '2.8px',
        ultra: '0.25em',
        mega: '0.4em',
        super: '0.5em',
    },
} as const;

// ─── COMPOSITE TEXT STYLES ───────────────────────────────────────────

export const textStyles = {
    heroHeading: {
        fontFamily: typography.fontFamily.sans,
        fontSize: typography.fontSize['8xl'],
        fontWeight: typography.fontWeight.light,
        lineHeight: typography.lineHeight.tight,
        color: colors.text.onDark,
    },
    sectionHeading: {
        fontFamily: typography.fontFamily.sans,
        fontSize: typography.fontSize['7xl'],
        fontWeight: typography.fontWeight.light,
        lineHeight: typography.lineHeight.snug,
        color: colors.text.heading,
    },
    eyebrow: {
        fontFamily: typography.fontFamily.sans,
        fontSize: typography.fontSize.xs,
        fontWeight: typography.fontWeight.bold,
        letterSpacing: typography.letterSpacing.mega,
        textTransform: 'uppercase' as const,
        color: colors.text.accentLabel,
    },
    navLink: {
        fontFamily: typography.fontFamily.sans,
        fontSize: '13px',
        fontWeight: typography.fontWeight.medium,
        letterSpacing: '2.8px',
        textTransform: 'uppercase' as const,
    },
    body: {
        fontFamily: typography.fontFamily.sans,
        fontSize: typography.fontSize.lg,
        fontWeight: typography.fontWeight.light,
        lineHeight: typography.lineHeight.relaxed,
        color: colors.text.muted,
    },
    bodySmall: {
        fontFamily: typography.fontFamily.sans,
        fontSize: typography.fontSize.sm,
        fontWeight: typography.fontWeight.regular,
        lineHeight: typography.lineHeight.relaxed,
    },
    cardTitle: {
        fontFamily: typography.fontFamily.serif,
        fontSize: typography.fontSize['2xl'],
        fontWeight: typography.fontWeight.regular,
        color: colors.text.onDark,
    },
    ctaButton: {
        fontFamily: typography.fontFamily.sans,
        fontSize: typography.fontSize.sm,
        fontWeight: typography.fontWeight.bold,
        letterSpacing: typography.letterSpacing.widest,
        textTransform: 'uppercase' as const,
    },
    tag: {
        fontFamily: typography.fontFamily.sans,
        fontSize: typography.fontSize['3xs'],
        fontWeight: typography.fontWeight.regular,
        letterSpacing: typography.letterSpacing.widest,
        textTransform: 'uppercase' as const,
        color: colors.decorative.tagColor,
    },
    footerHeading: {
        fontFamily: typography.fontFamily.sans,
        fontSize: typography.fontSize.xs,
        fontWeight: typography.fontWeight.bold,
        letterSpacing: typography.letterSpacing.wider,
        textTransform: 'uppercase' as const,
        color: colors.text.accentLabel,
    },
} as const;

// ─── SPACING ─────────────────────────────────────────────────────────

export const spacing = {
    0: '0px',
    1: '4px',
    1.5: '6px',
    2: '8px',
    2.5: '10px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    8: '32px',
    10: '40px',
    12: '48px',
    16: '64px',
    20: '80px',
    24: '96px',
    32: '128px',

    section: {
        sm: '96px',
        lg: '128px',
    },

    container: {
        maxWidth: '1280px',
        narrow: '1024px',
        header: '1400px',
        paddingX: '24px',
        paddingXHeader: '32px',
    },

    navbarOffset: '130px',
} as const;

// ─── BORDER RADIUS ───────────────────────────────────────────────────

export const borderRadius = {
    sm: '2px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    '3xl': '48px',
    full: '9999px',
} as const;

// ─── SHADOWS ─────────────────────────────────────────────────────────

export const shadows = {
    lg: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
    xl: '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
    '2xl': '0 25px 50px -12px rgba(0,0,0,0.25)',
} as const;

// ─── ANIMATION ───────────────────────────────────────────────────────

export const animation = {
    duration: {
        fast: '150ms',
        normal: '300ms',
        medium: '500ms',
        slow: '700ms',
        hero: '800ms',
        image: '1000ms',
    },

    easing: {
        easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },

    /** Framer Motion presets */
    presets: {
        fadeUp: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } },
        fadeLeft: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } },
        fadeRight: { initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 } },
        scaleIn: { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 } },
        float: { animate: { y: [0, -10, 0] }, transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' } },
    },
} as const;

// ─── GLASSMORPHISM EFFECTS ───────────────────────────────────────────

export const glass = {
    nav: {
        background: 'rgba(10,25,47,0.9)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
    },
    card: {
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.1)',
    },
    badge: {
        background: 'rgba(255,255,255,0.2)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.2)',
    },
} as const;

// ─── BREAKPOINTS ─────────────────────────────────────────────────────

export const breakpoints = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
} as const;

// ─── TYPE EXPORTS ────────────────────────────────────────────────────

export type ColorPrimitive = keyof typeof colors;
export type FontSize = keyof typeof typography.fontSize;
export type SpacingKey = keyof typeof spacing;
export type BreakpointKey = keyof typeof breakpoints;
