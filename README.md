# Hitokiri Design System

> Precision. Mastery. Elegance.
> 
> Hitokiri — inspired by the legendary swordsmen of Japan’s Bakumatsu era — represents a commitment to unmatched 
> efficiency, sharp execution, and refined design.

Just as a **hitokiri** moves with precision and discipline, the Hitokiri Design System provides a **unified**, 
**efficient**, and **scalable** framework for building beautiful, highly-performant React(Native) applications.

Every theme, token, and component is crafted with purpose — to empower developers and designers with tools that are clean, 
consistent, and powerful.

## Philosophy: Why "Hitokiri"?

In the final years of the Edo period, hitokiri were renowned for their lethal precision and their mastery of the sword.

We chose the name **Hitokiri** to symbolize the same ideals in UI development:

- **Precision** in layout, motion, and theming.
- **Mastery** of React(Native) design patterns.
- **Elegance** in delivering experiences that feel effortless and intuitive.

A *hitokiri* does not act with hesitation — neither should your components or your UI architecture.

## Monorepo Structure

Hitokiri is composed of three core packages, each reflecting a key aspect of the system:

| Package  | Meaning                       | Purpose                                                                                                               |
|----------|-------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| isshin   | (一心 — "One Mind")             | Central source of truth for **design tokens** (colors, typography, spacing, breakpoints, etc.) used across platforms. |
| kensei   | 	(剣聖 — "Sword Saint")         | **React Native component library**, crafted for mobile excellence with native theming support.                        |
| satsujin | (殺陣 — "Choreographed Combat") | **React (Web) component library**, providing flexible, performant UI components for the web.                          |

Each package is **independently versioned** but designed to work **seamlessly together**.

## Design Tokens—`isshin`

`isshin` embodies the principle of "**One Mind**" — a **single, unified set of design decisions** that brings consistency 
across all platforms.

Design tokens include:

- Colors (semantic and role-based)
- Typography (font families, sizes, weights)
- Spacing (margins, padding)
- Sizing (widths, heights, radii)
- Breakpoints (responsive grid settings)
- Shadow and Elevation

Tokens are platform-agnostic and themeable, supporting:

- Light & dark modes
- Brand variants
- Dynamic runtime theming (optional)

The tokens are generated and distributed in multiple formats (e.g., JSON, TypeScript, SCSS variables) for flexibility.

## React Native Components—`kensei`

`kensei` is the React Native toolkit — built for performance and beauty.

Drawing from the discipline of the "Sword Saints," each component is:

- Highly optimized for mobile
- Fully theme-aware via `isshin`
- Accessible out-of-the-box
- Lightweight, modular, and extensible

Examples include:

- Button
- Input
- Card
- Modal
- Typography components
- Themed utility hooks and context providers

## React (Web) Components—`satsujin`

`satsujin` is the React (Web) library — engineered for speed, flexibility, and pixel-perfect design.

Reflecting the choreography of satsujin battles, the components are:

- Built on atomic and molecular principles
- Themed directly via `isshin` tokens
- Responsively designed
- Accessible and semantic (ARIA-compliant)

Examples include:

- Button
- Input
- Grid and Layout components
- Dialog
- Data Display (Lists, Tables, Badges)

## Vision and Roadmap

We believe that crafting user experiences should feel effortless yet deliberate, just like a master swordsman.

The Hitokiri Design System will continue to evolve, with upcoming work focused on:

- Dynamic theming engines
- Animation libraries
- Form handling and validation components
- Micro-interaction design patterns
- Tailored developer tooling for faster app bootstrapping

## Inspiration

"Hitokiri" literally means "**manslayer**" or "**killer**" in Japanese.

Historically, the term is most often associated with the Bakumatsu period (the final years of the Edo period, around the 
1850s–1860s), when Japan was going through major political upheaval. During that time, "hitokiri" referred to assassins 
or swordsmen hired by political factions (especially imperial loyalists) to eliminate enemies — often samurai who 
supported the Tokugawa shogunate.

Some famous historical "hitokiri" include:

> All real-life swordsmen known for assassinations.

- **Hitokiri Battōsai** (a fictionalized character in Rurouni Kenshin, based on real-life figures)
- **Okada Izō**
- **Kawakami Gensai**
- **Tani Tateki**
- **Tanaka Shinbei**
