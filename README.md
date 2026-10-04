# The Wizarding World

A cinematic, accessible, unofficial Harry Potter fan experience created by
[Zaoyad Khan Raad](https://zaoyadkhanraad.com). The site is a dependency-free
single page built with semantic HTML, modern CSS, vanilla JavaScript, and inline SVG.

## Features

- Two persistent visual themes: Night at Hogwarts and Candlelit Castle
- Accessible responsive navigation, preloader, scroll progress, and custom wand cursor
- Six-question Sorting Ceremony with saved results and documented tie-breaking
- Data-driven house, character, spell, creature, and history collections
- Searchable/filterable character archive with an offline data set and 26 supplied IMDb-list cast credits
- Keyboard-operable fictional Marauder's Map with search and category filters
- Contained spell practice effects, quote carousel, and validated demonstration form
- One focus-trapped reusable modal with Escape, overlay-click, and focus restoration
- Reduced-motion and touch-device fallbacks throughout

## Project structure

```text
index.html                 Page structure and accessible landmarks
style.css                  Themes, components, animation, and responsive rules
script.js                  Data, rendering, state, and interactions
master_prompt.md           Product and maintenance brief
assets/
  ASSET-CREDITS.txt        Asset and licensing notes
  images/favicon.svg       Local site icon
  images/sorting.webp      Sorting Ceremony artwork
  images/House of *.webp   Four local house artworks
  images/characters/       Locally cached IMDb cast portraits
  images/* creature files  Six supplied creature artworks
  audio/                   Optional ambient audio location
  video/                   Optional hero video location
```

## Run locally

The project needs no build step. From this directory, start any static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`. You can also use `npx serve .` without adding
Node as a project dependency. Direct `file://` loading displays the site, but a
static server is recommended because browsers restrict some media and storage
behaviour for local files.

## Optional media

The checked-in version intentionally uses original CSS/SVG artwork and does not
bundle copyrighted film imagery or music. It is fully functional without optional media.
To use media you have the rights to use, add it and then add the corresponding
`<source>` element in `index.html`:

- `assets/video/hogwarts-background.mp4` — optional muted looping hero background
- `assets/audio/wizarding-ambience.mp3` — optional looping ambience

Record the author, source, license, and required attribution in
`assets/ASSET-CREDITS.txt`. Never substitute a copyrighted soundtrack recording.

## Remote services and offline behaviour

The experience has no required API, API key, package, or runtime network service.
All essential archive and map data is local. Cast credits are stored locally and link
to the supplied IMDb community list and individual IMDb profiles for attribution.
The font stacks prefer Cinzel and
Cormorant Garamond when already available and use readable local serif fallbacks.

## Accessibility and compatibility

The site provides semantic regions, ordered headings, labelled controls, live regions,
visible focus styles, keyboard-operable cards and SVG markers, modal focus management,
form error association, and motion/touch fallbacks. It targets current versions of
Chrome, Edge, Firefox, and Safari. Modern CSS features such as `color-mix()` degrade
without affecting content or operation in older browsers.

## Deployment

Upload the directory unchanged to any normal static host (GitHub Pages, Netlify,
Cloudflare Pages, or equivalent). Keep filename capitalization intact. No server-side
routes, directory listing, secrets, or build command are required.

## Credits, licensing, and disclaimer

Original implementation and artwork © Zaoyad Khan Raad. See
`assets/ASSET-CREDITS.txt` for asset details. Third-party names and fictional facts are
used only for a non-commercial fan reference experience.

This is an unofficial, non-commercial fan project created for educational and
entertainment purposes. It is not affiliated with, endorsed by, or sponsored by Warner
Bros. Entertainment, J.K. Rowling, Wizarding World Digital, or any related rights
holders. Harry Potter, Hogwarts, Wizarding World, and related names and marks belong
to their respective owners.
