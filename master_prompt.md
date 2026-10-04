# The Wizarding World — Maintenance Brief

## Purpose

Build and maintain a polished, responsive, accessible, deployment-safe, unofficial,
non-commercial Harry Potter fan experience. Preserve the cinematic magical-academia
identity: midnight and candlelit themes, antique gold ornament, parchment, restrained
motion, editorial serif typography, and clear readable controls.

## Architecture

Use only semantic HTML5, CSS3, vanilla JavaScript, and inline SVG. Do not add a
framework, package dependency, bundler, or build step. The application must continue
to work from `index.html` on an ordinary static server and remain useful offline.

Keep the primary files `index.html`, `style.css`, `script.js`, `README.md`, and this
brief. Use relative, capitalization-correct asset paths. Confirm a local file exists
before referencing it. Missing media must fall back to CSS/SVG without blocking the site.

## Required experience

Retain, in order: preloader, fixed navigation, Hogwarts hero, framed featured quote,
Sorting Ceremony, four houses, searchable character archive, Marauder's Map, spellbook,
creatures, history timeline, quote carousel, Send an Owl demonstration form, footer,
and reusable global modal.

All controls must work with keyboard and touch. Preserve theme and explicit audio mute
preferences, saved sorting result, filters, empty/loading/failure states, modal focus
trap and restoration, custom-cursor overlay priority, reduced-motion behaviour, and
320px layouts without horizontal overflow. Do not introduce flashing, jump scares,
unstable image hotlinks, fake submission claims, fake social links, or unsafe remote HTML.

## Creator credit

Always retain the visible, separate footer line: “Created with passion by Zaoyad Khan
Raad as an unofficial fan experience.” Link the full name to
`https://zaoyadkhanraad.com` in a new tab with `rel="noopener noreferrer"`, an explicit
accessible label, and visible hover/focus styles. Retain `<meta name="author"
content="Zaoyad Khan Raad">`. Never remove, hide, abbreviate, or replace this credit.

## Verification before delivery

Check JavaScript syntax, CSS brace balance, unique IDs, internal targets, local asset
existence, absence of absolute machine paths and unstable Fandom/Wikia hotlinks, core
interactions, browser console errors, responsive overflow at 320/375/768/1024/large
widths, keyboard operation, reduced motion, missing media, disclaimer, credits, and
static-server loading. Fix discovered problems before reporting completion.
