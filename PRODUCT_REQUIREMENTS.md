# Portfolio Website — Product Requirements Document

**Document status:** Draft 0.7  
**Last updated:** October 5, 2026  
**Document owner:** Portfolio owner  
**Product type:** Personal portfolio website  
**Primary disciplines:** Graphic Design, Video, Illustration, and Art Direction

## 1. Document Purpose

This document defines the product requirements for a personal portfolio website focused on graphic design, video, illustration, and art direction. The portfolio is being created specifically to support applications to master's programs in the United States. It is the shared source of truth for product goals, content, functionality, information architecture, interaction design, and visual direction.

The document follows Jesse James Garrett's five planes of user experience:

1. Strategy
2. Scope
3. Structure
4. Skeleton
5. Surface

Requirements marked **Confirmed** have been explicitly established. Items marked **Assumption** are provisional working decisions. Items marked **Open** require further discussion.

---

## 2. Product Vision

Create a distinctive audiovisual portfolio that presents the owner as a multidisciplinary creative professional and supports applications to master's programs in the United States. The experience should communicate the thinking behind the work and allow admissions reviewers to assess the owner's professional practice through graphic design, video, illustration, and art direction projects.

The website should feel like a designed experience rather than a generic project gallery. Its personality should emerge from the selection, sequencing, writing, and presentation of the work without compromising clarity, accessibility, or performance.

---

# Plane 1: Strategy

The Strategy Plane defines why the product exists, whom it serves, and what success means.

## 3. Product Objectives

### 3.1 Primary objectives

- **Confirmed:** Showcase professional work across graphic design, video, illustration, and art direction.
- **Confirmed:** Support applications to master's programs in the United States.
- **Confirmed:** Provide one canonical master portfolio from which tailored, program-specific curations can be assembled without duplicating project content.
- **Assumption:** Demonstrate both visual craft and the strategic or conceptual thinking behind selected projects.
- **Assumption:** Encourage qualified visitors to make contact for employment, freelance work, commissions, or collaboration.

### 3.2 Secondary objectives

- Establish a coherent personal creative identity.
- Provide a canonical online destination that can be linked from applications, social profiles, and professional correspondence.
- Make the portfolio easy to update as new projects and experience are added.
- Balance memorable art direction with fast access to essential information.

### 3.3 Non-goals for the initial release

- Operating as an e-commerce store.
- Providing a full publishing platform or high-frequency blog.
- Supporting visitor accounts or personalized user dashboards.
- Presenting every completed project; curation is more important than volume.
- Replacing a complete application package when a résumé, cover letter, or other material is specifically requested.

## 4. Target Audiences

### 4.1 Primary audiences

| Audience | Core need | Desired response |
|---|---|---|
| Master's admissions committees and faculty in the United States | Evaluate the applicant's professional work, creative thinking, technical range, and fit with a specific program | Understand the applicant's profile through a purposeful selection of projects |
| Creative directors and design leads | Quickly assess taste, craft, thinking, and role fit | Review relevant case studies and initiate an interview or conversation |
| Recruiters and hiring managers | Verify experience, disciplines, location, availability, and contact details | Understand fit quickly and download or request supporting material |
| Potential clients | Evaluate style, reliability, range, and relevance to a brief | Make an inquiry with enough context to qualify the opportunity |

### 4.2 Secondary audiences

| Audience | Core need | Desired response |
|---|---|---|
| Creative collaborators | Understand complementary skills and creative point of view | Propose a collaboration |
| Editors, curators, and educators | Review the body of work and background | Request a feature, talk, exhibition, or teaching engagement |
| Peers and broader creative community | Discover and follow the work | Share the portfolio or connect through professional channels |

## 5. User Needs

Visitors should be able to:

- Understand who the portfolio owner is and what they do within the first few moments.
- See a curated overview of the strongest and most relevant work.
- Access a selection intentionally curated for the master's program receiving the application.
- View image, video, animated GIF, and written material as integral parts of the portfolio experience.
- Distinguish the owner's contribution when a project involved a team.
- Understand the context, challenge, concept, process, and outcome of key projects.
- Browse by project and, if useful, by discipline without encountering duplicate or confusing content.
- View imagery comfortably across desktop and mobile devices.
- Find a concise biography, relevant experience, capabilities, and location or working preferences.
- Contact the owner with minimal friction.
- Access a résumé or equivalent professional summary if it is included.

## 6. Business and Personal Needs

The owner should be able to:

- Lead with their strongest work rather than a strictly chronological archive.
- Adapt the portfolio to evolving career goals without redesigning the entire site.
- Add, remove, reorder, feature, and archive projects.
- Describe multidisciplinary work without fragmenting the personal brand.
- Track whether the site helps generate relevant conversations and opportunities.
- Maintain ownership of the content and deploy the website independently.

## 7. Product Principles

1. **The work leads.** Interface elements support the portfolio instead of competing with it.
2. **Context adds value.** Case studies explain intent and contribution without overwhelming the imagery.
3. **Curated, not exhaustive.** Every published project must strengthen the overall narrative.
4. **Distinctive, not difficult.** Art direction may be expressive, but navigation and reading remain clear.
5. **Fast by design.** Image-rich pages must still feel immediate on typical mobile connections.
6. **Accessible by default.** Typography, contrast, keyboard use, motion, and alternative text are considered from the start.
7. **Credible and specific.** Project roles, collaborators, dates, and outcomes are represented accurately.

## 8. Success Measures

Initial success criteria should combine qualitative outcomes with lightweight analytics.

### 8.1 Primary indicators

- Relevant contact inquiries generated through or influenced by the website.
- Interview, collaboration, or commission invitations that reference specific projects.
- Visitors reaching and engaging with featured project pages.
- Visitors successfully using the primary contact action.

### 8.2 Quality indicators

- A new visitor can identify the owner's disciplines and value proposition without guidance.
- A hiring reviewer can find selected work, background, résumé, and contact details quickly.
- Core pages meet an agreed accessibility and performance baseline before launch.
- The owner can publish or revise a project without restructuring the site.

### 8.3 Measurement approach — Open

To be defined before implementation:

- Analytics platform and privacy approach.
- Core events to measure, such as project opens, résumé downloads, outbound profile visits, and contact actions.
- Whether contact conversion should be measured on-site or through an external service.

---

# Plane 2: Scope

The Scope Plane translates strategy into content and functional requirements.

## 9. Content Requirements

### 9.1 Core content types

#### Project

Each project should support:

- Project title.
- Short summary or one-sentence premise.
- Year or date range.
- Discipline or category.
- Client, organization, or self-initiated status when appropriate.
- Role and specific responsibilities.
- Collaborators and credits.
- Hero media.
- Flexible audiovisual media: still images, video, animated GIFs, and text.
- Project overview.
- Challenge, opportunity, or context.
- Concept or creative approach.
- Selected process material where it adds meaning.
- Final outcomes in flexible media layouts.
- Captions and accessible alternative text.
- Results, recognition, publication, or impact when available.
- Related project or next-project navigation.

Not every project must use every field. The presentation should adapt to the story rather than force all projects into an identical case-study formula.

#### Curation

A curation is an ordered, shareable selection of projects drawn from the master portfolio. Each curation should support:

- A unique title and stable URL.
- An optional target program or institution name.
- An optional introductory statement tailored to the application.
- An explicit ordered list of included projects.
- The ability to include or exclude any master project without duplicating its content.
- An optional custom project order independent of the master portfolio order.
- Draft and published states.
- Optional curation-specific metadata and social preview content.

The master portfolio is the canonical source for project content. Updating a project should update every curation in which it appears, except for any fields later defined as intentional curation-level overrides.

#### Profile

- Name and concise professional descriptor.
- Short biography.
- Longer professional narrative, if needed.
- Portrait or personal image, optional.
- Location and work eligibility or availability, if relevant.
- Selected clients, employers, exhibitions, awards, or publications, if relevant.
- Capabilities or services.
- Languages, if strategically useful.
- Résumé or CV.

#### Contact and external presence

- Primary email or contact method.
- Relevant professional or creative profiles.
- Optional inquiry form.
- Optional representation or agent information.

### 9.2 Editorial requirements

- All project copy must be available in English for the initial release.
- Copy should be concise, concrete, and readable by both creative and non-specialist reviewers.
- The owner's individual contribution must be unambiguous.
- Credits must be complete and consistently formatted.
- Images should be sequenced intentionally, not displayed as an unedited asset dump.
- Sensitive or confidential work must not be published without authorization.

### 9.3 Initial content inventory — Open

The following inventory must be completed before visual design is finalized:

| Item | Target for launch | Status |
|---|---:|---|
| Featured projects | 4–8 | Open |
| Additional or experimental projects | 0–6 | Open |
| Biography | 1 short, optionally 1 long | Open |
| Résumé/CV | 1 current English version | Open |
| Contact methods | At least 1 | Open |
| Professional profiles | Only relevant, maintained profiles | Open |

## 10. Functional Requirements

### 10.1 Must-have for version 1

- Responsive portfolio experience for desktop, tablet, and mobile, with desktop as the primary presentation format.
- Master portfolio presenting the complete published project selection.
- Program-specific portfolio curations with stable, shareable URLs.
- Per-curation controls that determine whether a project is shown or hidden and where it appears in the sequence.
- Curation-aware project navigation so reviewers remain within the intended selection when opening a project or moving to the next one.
- Individual project pages with flexible media and text modules.
- Native content support for images, video, animated GIFs, and text.
- Cloudinary-backed delivery for project images, video, and animated media.
- About/profile page or section.
- Persistent, easily discoverable contact path.
- Clear global navigation.
- Optimized image, GIF, and video delivery with responsive formats and lazy loading where appropriate.
- Keyboard-accessible interactive elements.
- Reduced-motion behavior for visitors who request it.
- Semantic page structure and meaningful alternative text.
- Shareable, stable URLs for individual projects.
- Search and social metadata for the site and project pages.
- Custom not-found page with a route back to the work.

### 10.2 Should-have

- Project categorization or filtering, only if the final content inventory makes it useful.
- Smooth project-to-project navigation.
- Optional downloadable résumé.
- Lightweight, privacy-conscious analytics.
- Modular content system that supports varied case-study layouts.
- Image focal-point controls for responsive crops.

### 10.3 Could-have after launch

- Interactive project media beyond the required image, video, GIF, and text formats.
- Dedicated archive or experiments section.
- Recognition, press, exhibitions, or writing section.
- Multilingual content.
- Commission availability or structured project inquiry form.
- Password-protected case studies for confidential work.
- Theme variation or art-directed project themes.

### 10.4 Explicitly excluded from version 1

- User authentication.
- Comments or public community features.
- Shopping cart and payment processing.
- Complex on-site search unless the content volume later justifies it.

## 11. Content Management Requirements

**Confirmed:** The owner must be able to add a project once and reuse it across the master portfolio and multiple application-specific curations.

The chosen content approach should support:

- Creating and editing projects.
- Creating and editing curations.
- Adding or removing a project from each curation without duplicating the project.
- Reordering projects independently in the master portfolio and in each curation.
- Draft and published states.
- Reusable but flexible media modules.
- Image metadata, captions, credits, and alt text.
- Previewing changes before publication.
- Avoiding vendor lock-in where practical.

The exact authoring interface and data format remain **Open**. The implementation must be compatible with a static HTML, CSS, and JavaScript website stored in GitHub and deployed to Vercel.

### 11.1 Technical and deployment constraints

- **Confirmed:** The website will be implemented using HTML, CSS, and JavaScript.
- **Confirmed:** GitHub is the canonical repository for source code, project text, structured project data, and curation configuration.
- **Confirmed:** Vercel is the only public deployment platform and will serve the production website through the custom domain.
- **Confirmed:** Vercel will connect to the GitHub repository and generate deployments from repository changes.
- **Confirmed:** Cloudinary is the delivery and management service for project images, video, and animated media.
- **Confirmed:** GitHub Pages is not part of the production architecture.
- The deployed result must be compatible with static web hosting.
- Project and curation data should remain separate from presentation templates so one project record can be reused in multiple selections.
- The custom domain, HTTPS, canonical URLs, redirects, and deployment ownership must be configured and documented before launch.
- Production releases should be traceable to a Git commit.
- Preview deployments should be used to review content and layout changes before they reach the production domain.

### 11.2 Media storage and delivery architecture

The media architecture separates project content from the website repository:

```text
GitHub
├── HTML, CSS, and JavaScript
├── Project text and metadata
├── Cloudinary asset identifiers or URLs
└── Master-portfolio and curation configuration

Vercel
├── Preview deployments
├── Production deployment
└── Custom domain

Cloudinary
├── Project images
├── Video
├── Animated media
├── Responsive derivatives
└── Video posters and thumbnails

Independent backup
└── Original, full-quality media files
```

Media requirements:

- Large project media must not be committed to the Git repository.
- Small interface assets such as the favicon, logo, and lightweight SVG icons may remain in the repository.
- Each project stores stable Cloudinary public IDs rather than hard-coded transformed delivery URLs in its structured data.
- One Cloudinary asset may be reused in the master portfolio and any number of curations without creating additional copies.
- Images should be delivered at dimensions appropriate to their rendered size and in a browser-compatible optimized format.
- Videos should use an appropriate poster image, explicit dimensions or aspect ratio, and deferred loading when they are not immediately visible.
- Meaningful video should provide controls and any required captions or transcripts.
- Autoplaying media must be muted, inline, and compatible with reduced-motion preferences.
- Animated GIF files are supported, but substantial or high-resolution loops should normally be delivered as optimized MP4/WebM video or a modern animated format to reduce transfer size.
- Cloudinary is a delivery service, not the only archive. Original full-quality files must also be retained in an independent local or OneDrive backup.

### 11.3 Media data model

Each media item should support the following fields where relevant:

- Stable internal identifier.
- Cloudinary public ID.
- Media type: image, video, animated image, or embed.
- Intrinsic width and height or aspect ratio.
- Alternative text.
- Optional visible caption.
- Credits and rights information.
- Poster asset for video.
- Autoplay, loop, muted, and controls settings for video or animation.
- Focal point or crop instructions when required.
- Layout role or grid span.
- Fit behavior: contain, cover, fill, or scale.
- Loading priority: eager, normal, or lazy.
- Editorial order within the project.

Project and curation data should reference these records rather than embedding duplicate media files.

Example image record:

```json
{
  "type": "image",
  "publicId": "portfolio/projects/un-paso-adelante/02-hero-campaign",
  "width": 3200,
  "height": 1800,
  "alt": "Campaign application displayed in the clinic entrance",
  "caption": "",
  "credits": "Photography by Name",
  "layout": "span-three-left",
  "fit": "contain",
  "focalPoint": "center",
  "loading": "eager"
}
```

Example video record:

```json
{
  "type": "video",
  "publicId": "portfolio/projects/un-paso-adelante/05-video-main",
  "posterPublicId": "portfolio/projects/un-paso-adelante/05-video-main-poster",
  "width": 1920,
  "height": 1080,
  "layout": "span-all",
  "controls": true,
  "autoplay": false,
  "loop": false,
  "muted": false,
  "preload": "metadata"
}
```

### 11.4 Cloudinary naming convention

Cloudinary public IDs must follow this pattern:

```text
portfolio/projects/{project-slug}/{sequence}-{role}-{descriptor}
```

Examples:

```text
portfolio/projects/un-paso-adelante/01-cover-main
portfolio/projects/un-paso-adelante/02-hero-campaign
portfolio/projects/un-paso-adelante/03-process-sketches
portfolio/projects/un-paso-adelante/04-identity-system
portfolio/projects/un-paso-adelante/05-video-main
portfolio/projects/un-paso-adelante/05-video-main-poster
portfolio/projects/un-paso-adelante/06-loop-logo
```

Naming rules:

- Use lowercase ASCII characters, numbers, and hyphens.
- Use kebab-case and remove accents or other diacritics.
- Use a two-digit sequence number.
- Do not use spaces.
- Do not include a file extension in image or video public IDs.
- Do not add device, resolution, format, quality, upload date, or curation names.
- Do not rename a public ID after it is used in production unless all references and caches are migrated deliberately.
- Curations must reference the same canonical asset; they must not create media duplicates.

Approved role vocabulary:

```text
cover, hero, process, detail, gallery, mockup,
poster, video, loop, diagram, portrait
```

Cloudinary asset folders should follow this organization:

```text
portfolio/
├── projects/
│   └── {project-slug}/
├── profile/
│   ├── portraits/
│   └── documents/
└── shared/
    ├── identity/
    ├── interface/
    └── social/
```

### 11.5 Image technical specification

#### 11.5.1 Cloudinary upload source

| Property | Requirement |
|---|---|
| Color space | sRGB |
| Bit depth | 8 bits per channel |
| Normal long-edge dimension | 2400–3200 px |
| Normal maximum long edge | 4000 px |
| Photographic format | High-quality JPEG |
| Transparency or flat graphics | PNG |
| Vector format | Reviewed and safe SVG |
| Recommended upload weight | Up to 8 MB |
| Internal upload maximum | 12 MB per image |

TIFF, PSD, AI, CMYK originals, and other production files must not be used as public web-delivery assets.

#### 11.5.2 Responsive image delivery

Project images should provide responsive candidates at approximately:

```text
640, 960, 1280, 1600, and 2400 px
```

Home thumbnails should provide responsive candidates at approximately:

```text
480, 768, 960, and 1280 px
```

Cloudinary delivery should normally apply:

```text
c_limit/{requested-width}/q_auto:best/f_auto
```

- `c_limit` prevents upscaling while resizing to the required bound.
- `q_auto:best` prioritizes portfolio-quality visual fidelity while still optimizing file size.
- `f_auto` selects a compatible modern format for the requesting browser.
- The site must generate delivery URLs centrally from the public ID rather than storing transformed URLs per project.

#### 11.5.3 Image delivery budgets

| Use | Target delivered weight | Maximum delivered weight |
|---|---:|---:|
| Home thumbnail | 100–220 KB | 350 KB |
| Standard project image | 180–500 KB | 800 KB |
| Project hero | 300–650 KB | 1 MB |
| Video poster | 100–220 KB | 350 KB |

These are internal delivery budgets, not Cloudinary platform limits.

#### 11.5.4 Aspect ratio and cropping

- Home thumbnails use a fixed `3:4` aspect ratio.
- Thumbnail derivatives should use an equivalent of `c_fill,ar_3:4` with a defined focal point.
- Automated gravity may be used when it produces an acceptable result; otherwise the project record must specify a focal point or a dedicated cover composition.
- Project-page images should normally preserve their original aspect ratio.
- Project modules may use the approved layout values: `full`, `three-left`, `three-right`, `two-left`, `two-center`, `two-right`, `one-left`, and `one-right`.
- Cropping on project pages must be intentional rather than an incidental consequence of CSS sizing.

### 11.6 Video technical specification

#### 11.6.1 Cloudinary upload source

| Property | Requirement |
|---|---|
| Preferred container | MP4 |
| Preferred codec | H.264 |
| Normal landscape resolution | 1920 × 1080 |
| Normal vertical resolution | Up to 1080 × 1920 |
| 4K | Only when visually justified |
| Frame rate | Preserve source; preferably 24, 25, or 30 fps |
| Audio | AAC, 48 kHz, approximately 192 kbps |
| Suggested 1080p bitrate | 8–12 Mbps |
| Recommended upload weight | Below 200 MB |
| Internal upload maximum | 300 MB per video |
| Recommended embedded duration | Up to 3 minutes |

The 300 MB value is an internal workflow limit, not a statement of the Cloudinary account limit. Larger or longer videos require an individual review and may require adaptive streaming.

#### 11.6.2 Narrative video behavior

- Narrative video must not autoplay.
- Controls must be visible and keyboard accessible.
- Each video must provide an optimized poster.
- Use `preload="metadata"` by default.
- Declare width and height or aspect ratio before loading.
- Defer video loading when it is not near the viewport.
- Provide WebVTT captions or an equivalent transcript when speech or meaningful audio is present.

### 11.7 Animated media and GIF specification

#### 11.7.1 Decorative or demonstrative loops

- Recommended duration: 3–12 seconds.
- Maximum duration: 15 seconds.
- No audio track.
- Normal maximum resolution: 1080p.
- Recommended upload maximum: 25 MB.
- Target delivered weight: 1–4 MB.
- Use `autoplay`, `muted`, `loop`, and `playsinline` only for media intentionally classified as a loop.
- Start playback only when the loop is in or near the viewport and pause it when it leaves.
- Replace motion with the poster or a static frame when reduced motion is requested.

#### 11.7.2 Animated GIF

- GIF remains supported when the format is intrinsic to the work or otherwise required.
- Recommended maximum dimension: 1600 px.
- Maximum duration: 10 seconds.
- Internal upload maximum: 20 MB.
- Maximum delivered GIF weight: 3 MB.
- Larger animation should normally be delivered as optimized MP4, WebM, or another appropriate modern animated format.

### 11.8 Loading and page-weight requirements

#### Home

- Load the first visible thumbnail row with high priority.
- Lazy-load later project rows.
- Initial home-page transfer target: 1–1.5 MB.
- Do not download project video automatically on the home page.
- An animated thumbnail should begin as a poster and activate only through an intentional, performance-safe interaction.

#### Project page

- Load the hero with high priority.
- Load the next visible image normally.
- Lazy-load remaining images.
- Load narrative videos as poster plus metadata until the visitor starts playback.
- Defer loops and play them only when visible.
- Initial project-page transfer target, including HTML, CSS, JavaScript, and initially visible media: no more than 2–2.5 MB.
- Long pages may transfer more media during scrolling, but must not download the complete case study on initial navigation.

### 11.9 Master-file archive

Cloudinary is not the master archive. Original production files must remain in the independent project archive:

```text
Portfolio Masters/
└── {project-slug}/
    ├── images/
    ├── video/
    ├── animation/
    └── exports/
```

PSD, AI, TIFF, ProRes, and other production masters belong in this archive rather than GitHub or public Cloudinary delivery records.

### 11.10 Technical references

- [Cloudinary image optimization](https://cloudinary.com/documentation/image_optimization)
- [Cloudinary upload parameters and public IDs](https://cloudinary.com/documentation/upload_parameters)
- [Cloudinary naming conventions](https://cloudinary.com/documentation/ts_permitted_naming_conventions)
- [web.dev video preload guidance](https://web.dev/articles/fast-playback-with-preload)

These references explain platform behavior. The stricter dimensions, weights, naming patterns, and loading budgets in this PRD are the project's normative requirements.

## 12. Quality and Compliance Requirements

- Target WCAG 2.2 Level AA for core journeys and content.
- Avoid interactions that depend only on hover.
- Provide visible focus states and logical keyboard order.
- Respect reduced-motion preferences.
- Maintain legible text sizing, line length, spacing, and contrast.
- Optimize visual assets without visibly degrading portfolio work.
- Define and test Cloudinary transformation presets for portfolio thumbnails, project images, animation, posters, and video delivery.
- Prevent layout shifts by recording media dimensions or aspect ratios before assets load.
- Avoid unnecessary collection of personal visitor data.
- Define image usage rights and credit requirements before publication.

---

# Plane 3: Structure

The Structure Plane defines how information is organized and how the experience behaves.

## 13. Proposed Information Architecture

```text
Home / Selected Work
├── Project A
├── Project B
├── Project C
├── Project D
└── Additional projects as curated

About
├── Biography
├── Capabilities / Experience
├── Selected recognition or clients (optional)
└── Résumé / CV (optional)

Contact
├── Primary contact action
└── Selected external profiles

Optional later sections
├── Archive / Experiments
├── Writing / Notes
└── Recognition / Press
```

This is a deliberately shallow architecture. The project work should remain the dominant path, with professional context and contact information no more than one navigation action away.

## 14. Primary User Journeys

### 14.1 Hiring reviewer journey

1. Arrives through an application link.
2. Understands the owner's name, disciplines, and creative positioning.
3. Scans selected projects.
4. Opens one or more relevant case studies.
5. Verifies the owner's role and contribution.
6. Reviews biography, experience, or résumé.
7. Initiates contact or returns to the application process.

### 14.2 Prospective client journey

1. Arrives through a referral, search result, or social profile.
2. Evaluates visual fit from the selected work.
3. Reads a relevant project for context and credibility.
4. Reviews capabilities and working profile.
5. Initiates an inquiry.

### 14.3 Casual discovery journey

1. Arrives on a shared project page.
2. Experiences the project in context.
3. Understands who made it and their role.
4. Continues to another project or the work index.
5. Optionally follows an external profile or makes contact.

## 15. Navigation Model

- Global navigation should remain small, consistent, and available across core pages.
- The logo or name should reliably return to the home/work index.
- The current location should be visually understandable.
- Project pages should provide a clear next step: another project, all work, about, or contact.
- Categories should not become primary navigation unless they improve browsing after the content inventory is complete.
- Navigation labels should favor familiar language over clever wording.
- The home page project board is the primary entry point into individual project pages.

## 16. Interaction Model

- Project selection should work equally well with pointer, keyboard, and touch input.
- On devices with a precise pointer, hovering over a project thumbnail reveals the project title and year.
- Selecting a project thumbnail opens that project's page.
- The entire thumbnail area should function as the project link rather than requiring selection of a small text target.
- Hover information must also be available on keyboard focus.
- On touch devices, where hover is unavailable or unreliable, the project title and year must remain discoverable without requiring a hidden gesture.
- Hover states may add expression or preview information but must never contain essential information exclusively.
- Media should preserve the intended composition at different viewport sizes.
- Motion should clarify hierarchy, continuity, or personality; it should not delay access to content.
- Long project pages should provide orientation through pacing, section structure, or optional progress cues.
- Contact actions should expose what will happen next, such as opening an email client or submitting a form.
- External destinations and file downloads should be labeled appropriately.

## 17. Content Relationships

- A project may belong to one or more disciplines.
- The master portfolio is the canonical collection of published projects.
- A curation references projects from the master portfolio rather than copying them.
- A project may appear in zero, one, or multiple curations.
- Each curation controls its own project visibility and sequence.
- Changes to canonical project content propagate to every curation that references the project.
- Curation-specific introductory content and metadata may vary without changing the canonical project.
- Opening a project from a curation should preserve the curation context for previous, next, and return navigation.
- Projects excluded from a curation must not appear in that curation's lists or contextual navigation.
- A project may contain multiple contributors and credit roles.
- A project may reference related projects based on discipline, visual relationship, or editorial sequence.
- The home page controls a curated order independent of project publication date.
- Archived projects may remain addressable without appearing in the primary work index, depending on the content system.

---

# Plane 4: Skeleton

The Skeleton Plane defines page-level organization, interface priorities, and navigation placement.

## 18. Page Frameworks

### 18.1 Home / Selected Work

Priority order:

1. Identity and concise positioning.
2. Project board presenting the selected work.
3. Clear route to profile and contact.
4. Optional supporting credibility signals.

**Confirmed layout:** The home page is a project board composed of a responsive thumbnail grid. The grid is the dominant element of the page and establishes the portfolio's tone through the collective presentation and sequence of the work.

The landing-page direction uses a restrained, image-first interface informed by the Juan Dellacha portfolio reference. Its defining characteristics are:

- A light neutral canvas that allows project imagery to carry most of the color.
- A compact persistent header separated visually from the project board.
- Primary navigation aligned to one side, a centered personal wordmark, and external/contact links aligned to the opposite side on desktop.
- Minimal introductory content before the project grid; the portfolio opens directly onto the work.
- Tight, consistent spacing between thumbnails, with generous exterior breathing room.
- Typography and interface styling that remain subordinate to the imagery.

The grid uses:

- Three project columns per row on desktop.
- Two project columns per row on iPad/tablet layouts.
- One project column per row on mobile layouts.

Each grid item represents one project and includes:

- A project thumbnail.
- The project title.
- The project year.
- A link to the corresponding project page.

On pointer hover, the title and year appear over or in direct association with the thumbnail. The exact overlay treatment, alignment, typography, color, transition, and image behavior remain part of the Surface Plane and will be defined during visual design.

The title and year must also appear when the item receives keyboard focus. For touch layouts, this information should be persistently visible or exposed through an equally direct, accessible pattern.

Thumbnail aspect ratios, grid gaps, exterior margins, image cropping rules, and whether rows maintain a fixed or variable height remain **Open**.

### 18.1.1 Home project-board acceptance criteria

- At the desktop breakpoint, three project thumbnails are displayed in each complete row.
- At the tablet/iPad breakpoint, two project thumbnails are displayed in each complete row.
- At the mobile breakpoint, one project thumbnail is displayed per row.
- Every published project assigned to the current portfolio or curation is represented by one grid item.
- Hovering a grid item with a pointer reveals its title and year.
- Focusing a grid item with a keyboard reveals the same title and year.
- Title and year are available without hover on touch-only devices.
- Selecting any non-disabled area of the grid item opens the associated project page.
- Grid reflow does not change the intended editorial order of the projects.
- The persistent header does not obscure focused controls or project content when navigating by anchor link.

### 18.1.2 Program-specific curation landing page

A curation landing page should clearly present the selected body of work without requiring the reviewer to understand the underlying master portfolio system. It should support:

1. Optional program-specific introduction.
2. An intentional, curation-specific project sequence.
3. Direct access to every included project.
4. Consistent project content sourced from the master portfolio.
5. A clear but unobtrusive relationship to the portfolio owner's broader identity.
6. Navigation that remains inside the selected curation until the reviewer intentionally leaves it.

### 18.2 Project page

Recommended content rhythm:

1. Project identity: title, premise, date, discipline, and key visual.
2. Essential context: challenge, role, collaborators, and scope.
3. Concept and selected process.
4. Final work in an image-led narrative.
5. Outcome, reflection, recognition, or credits.
6. Next project and return-to-work paths.

The page system should support full-bleed images, contained images, grids, diptychs, text-image pairings, captions, video, and other media without making every project look mechanically identical.

#### 18.2.1 Base desktop grid

**Confirmed layout foundation:** Individual project pages use a four-column, three-row CSS Grid as their base desktop composition.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.5fr 1fr;
  grid-template-rows: 1fr 1.1fr 1fr;
  gap: 10px 15px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . . ."
    ". . . ."
    ". . . .";
}
```

This establishes the following layout logic:

- Four columns with a proportional width relationship of `1 : 0.5 : 0.5 : 1`.
- The two exterior columns are each twice the width of either interior column.
- Three rows with a proportional height relationship of `1 : 1.1 : 1`.
- A `15px` horizontal gap between columns.
- A `10px` vertical gap between rows.
- Row-based automatic placement.
- No named grid areas at this stage; modules are positioned through grid lines or explicit placement rules.

The grid acts as a flexible composition system for project media and text. Content modules may occupy a single cell or span multiple columns and rows, allowing images, video, GIFs, captions, and text to be combined at different scales while maintaining a consistent underlying structure.

The following aspects remain **Open**:

- Whether the three-row definition describes a fixed-height screen, a repeated composition unit, or the opening section of a longer project page.
- The container's width, maximum width, exterior margins, and vertical height.
- The placement and span rules for each content module.
- Whether row proportions remain fractional or switch to content-driven sizing for long text and differently proportioned media.
- The tablet and mobile transformations of this grid.

#### 18.2.2 Base-grid acceptance criteria

- The desktop project layout exposes four grid tracks in the specified `1fr 0.5fr 0.5fr 1fr` proportions.
- The desktop grid uses `15px` horizontal and `10px` vertical gaps unless a later tokenized spacing decision supersedes the literal values.
- Media and text modules may span grid tracks without breaking the underlying alignment.
- Visual placement must preserve a logical document and reading order for keyboard and assistive-technology users.
- Project content remains usable when the four-column grid is transformed for narrower viewports.

### 18.3 About page

Priority order:

1. Professional identity and biography.
2. Capabilities, experience, and working context.
3. Selected proof points such as clients, awards, publications, or exhibitions.
4. Résumé and contact actions.

### 18.4 Contact experience

The primary contact method should be direct and low-friction. A dedicated page, persistent footer, email link, or concise form may be used. The final choice depends on privacy, spam prevention, and the preferred inquiry workflow.

## 19. Global Interface Components

- Site name or personal wordmark.
- Primary navigation.
- Project preview card or editorial project link.
- Project metadata block.
- Flexible media block.
- Caption and credit treatment.
- Contact call to action.
- Footer with essential contact and legal information.
- Optional category/filter control.
- Optional page transition or loading treatment.

## 20. Responsive Behavior

- Desktop is the primary presentation format and should receive the richest intended composition.
- Tablet and mobile versions remain fully functional, legible, and visually coherent rather than being treated as secondary technical fallbacks.
- The home project board uses three columns on desktop, two columns on iPad/tablet, and one column on mobile.
- Exact pixel breakpoints should be selected from content and layout testing rather than tied only to named devices.
- Mobile layouts must be designed as intentional compositions, not compressed desktop pages.
- Typography and spacing should scale fluidly within defined limits.
- Image crops should be art-directed where automatic cropping would damage the work.
- Project metadata should remain readable without pushing the work excessively below the fold.
- Navigation should remain clear and operable at narrow widths.
- Touch targets should be comfortably sized and spaced.
- Multi-column editorial layouts should collapse in a meaningful reading order.
- The four-column project-page grid is the desktop foundation; its tablet and mobile adaptations must preserve content hierarchy and source order even if the number or proportions of columns change.

## 21. System Feedback and States

Designs should account for:

- Default, hover, focus, active, and visited link states.
- Image and video loading states.
- Missing or failed media.
- Empty filter results if filtering is introduced.
- Form validation, submission, success, and failure states if a contact form is introduced.
- Not-found pages.
- Reduced-motion alternatives.

## 22. Accessibility at the Interface Level

- Use semantic headings in a logical order.
- Preserve visible keyboard focus.
- Ensure interactive controls have accessible names.
- Avoid text embedded in images when that text conveys essential information.
- Provide captions, transcripts, or equivalent information for meaningful audiovisual media.
- Allow zoom and text resizing without loss of content or functionality.
- Test reading and interaction order independently from visual placement.

---

# Plane 5: Surface

The Surface Plane defines the sensory expression of the experience: typography, color, imagery, motion, and detailed interface styling.

## 23. Visual Direction

**Status: Open.** The visual identity should emerge from the owner's work, positioning, and target opportunities rather than from a predetermined portfolio trend.

The selected direction should:

- Feel authored and specific to the portfolio owner.
- Accommodate work with potentially different visual languages.
- Establish hierarchy without visually overpowering project imagery.
- Remain coherent across image-heavy and text-heavy pages.
- Work across light conditions, devices, and common accessibility settings.
- Provide enough system consistency to make future projects easy to integrate.

## 24. Visual System Requirements

### 24.1 Typography

- Define display, heading, body, metadata, caption, and interface roles.
- Prioritize excellent readability for case-study narratives and captions.
- Verify font licensing, web delivery, language support, and loading behavior.
- Limit unnecessary font files and weights.

### 24.2 Color

- Define background, foreground, muted, accent, border, and interactive state tokens.
- Check text and essential interface contrast against accessibility targets.
- Ensure the interface palette supports rather than distorts project artwork.
- Define whether color changes by project, section, or theme.

### 24.3 Imagery

- Establish aspect-ratio, crop, margin, background, and sequencing rules.
- Preserve accurate color reproduction within practical web constraints.
- Define export standards for raster, vector, animated, and video assets.
- Avoid upscaling assets beyond their useful resolution.

### 24.4 Layout and spacing

- Use a consistent responsive grid and spacing scale.
- Balance editorial variation with predictable alignment.
- Define maximum reading widths for long-form text.
- Establish when media may break the grid or run full bleed.

### 24.5 Motion

- Use motion sparingly and with clear intent.
- Define duration, easing, and choreography as a small reusable system.
- Avoid intro sequences that block content.
- Provide static or simplified behavior for reduced-motion preferences.

### 24.6 Voice and microcopy

- Use confident, precise, and human language.
- Avoid vague creative clichés and inflated claims.
- Keep navigation labels short and familiar.
- Maintain consistent naming for roles, disciplines, and project metadata.

## 25. Visual Direction Questions

- Should the portfolio feel restrained and editorial, expressive and kinetic, or somewhere between the two?
- Should the identity remain neutral across projects or adapt to each project's visual world?
- Is there an existing personal identity, wordmark, type system, or color palette to incorporate?
- Which portfolio references capture the desired qualities, and which conventions should be avoided?
- How prominent should illustration be relative to design and art direction?
- Should the owner's personality appear primarily through the work, the writing, the interface, or all three?
- Should project thumbnails share one fixed aspect ratio or preserve project-specific proportions?
- Should the hover state use a flat overlay, image treatment, motion preview, or another visual transformation?
- How much spacing should separate thumbnails, and should the project board align to the viewport edge or a contained page grid?

## 25.1 Interface references

The following references inform the project-board direction without prescribing a literal visual copy:

- [Pentagram — Work](https://www.pentagram.com/work): reference for a work-first portfolio index and project-led browsing.
- [Camilo Huinca](https://camilohuinca.work/): reference for a dense visual body of work and direct project discovery.
- [Juan Dellacha](https://juandellacha.com/): primary reference for the landing-page visual direction, including its compact persistent header, centered identity mark, neutral background, image-led project board, restrained typography, and tight thumbnail rhythm. Its project pages also inform the use of a concise centered introduction followed by a long, image-led editorial sequence with minimal interface interruption.

The final design must establish its own identity, typography, spacing, motion, and thumbnail behavior appropriate to the portfolio owner and the academic application context.

---

# 26. Initial Release Definition

Version 1 is considered ready for launch when:

- The portfolio positioning and target audience have been approved.
- The launch project list and editorial order are final.
- The master portfolio and at least the required application-specific curations are configured and verified.
- Every published project has approved copy, media, credits, and alt text.
- Home, project, about, contact, and not-found experiences are complete.
- Core layouts work across agreed mobile and desktop breakpoints.
- Keyboard navigation, focus, contrast, reduced motion, and content structure have been reviewed.
- Image delivery and page performance meet the agreed baseline.
- Video and GIF playback, fallback behavior, loading, and performance meet the agreed baseline.
- Metadata, social previews, favicon, domain, analytics, and privacy choices are configured.
- The GitHub-to-Vercel deployment workflow, custom domain, HTTPS, and canonical URL behavior are verified.
- Cloudinary production delivery, media transformations, cache behavior, and fallback assets are verified.
- Every published media asset has an independent full-quality backup.
- Contact actions have been tested end to end.
- There are no known critical content, accessibility, or interaction defects.

## 27. Proposed Project Phases

1. **Discovery and positioning** — clarify audience, goals, personal narrative, references, and constraints.
2. **Content audit and curation** — select projects, collect assets, identify gaps, and define editorial order.
3. **Information architecture and content model** — validate pages, relationships, fields, and journeys.
4. **Content development** — write case studies, biography, metadata, captions, and credits.
5. **Visual exploration** — develop and compare art-direction concepts.
6. **Interaction and interface design** — create responsive page systems and component behavior.
7. **Implementation** — build the site and content workflow.
8. **Quality assurance** — test content, browsers, devices, accessibility, performance, and metadata.
9. **Launch and learning** — publish, observe, gather feedback, and prioritize improvements.

## 28. Risks and Mitigations

| Risk | Potential impact | Mitigation |
|---|---|---|
| Too many visual directions across projects | Portfolio feels fragmented | Use a strong editorial system and deliberate sequencing |
| Heavy media | Slow loading and poor mobile experience | Define asset budgets, responsive images, and loading priorities |
| Video and animated GIF assets are excessively heavy | Reviewers encounter delays, data usage, or playback failures | Define compression, poster, preload, autoplay, fallback, and reduced-motion rules |
| Project content is duplicated across tailored portfolios | Updates diverge and applications show inconsistent work | Keep one canonical project record and reference it from every curation |
| Cloudinary usage exceeds the selected plan or delivery allowance | Assets may incur unexpected cost or become constrained | Monitor usage, define media budgets, and review plan limits before application deadlines |
| Cloudinary becomes the only copy of original media | Source assets could be difficult to recover or migrate | Maintain an independent local or OneDrive archive of full-quality originals |
| Media URLs or transformations are embedded inconsistently | Site-wide updates and provider migration become difficult | Store stable asset identifiers in structured media records and centralize URL generation |
| Over-designed navigation | Visitors struggle to find work or contact details | Validate core journeys and retain familiar navigation cues |
| Hover-only project metadata | Touch and keyboard users cannot discover project title or year | Provide equivalent keyboard focus behavior and persistent or direct metadata on touch layouts |
| Insufficient project context | Reviewers cannot assess thinking or contribution | Standardize essential metadata and edit concise case-study narratives |
| Too much process text | Work becomes slow to review | Use progressive disclosure and image-led storytelling |
| Ambiguous individual contribution | Credibility and evaluation suffer | State role, responsibilities, and collaborators on every relevant project |
| Content maintenance becomes difficult | Portfolio becomes outdated | Choose a manageable content model and document the publishing workflow |
| Unlicensed or confidential material | Legal or professional risk | Verify publication rights, confidentiality, and credits before launch |

## 29. Open Questions for the Next Iteration

### Strategy

1. Which master's programs and disciplines are the first application targets?
2. What evaluation criteria or portfolio instructions does each target program publish?
3. What three qualities should an admissions reviewer remember after leaving the site?

### Scope and content

4. Which projects are candidates for the master portfolio?
5. Which initial program-specific curations are required, and which projects belong in each one?
6. May a curation override a project's summary or cover image, or only its visibility and order?
7. For each project, what was the owner's exact role and what material can be published?
8. Is a downloadable résumé required for launch?
9. Should the site include awards, exhibitions, publications, or client lists?
10. Is English-only sufficient for version 1, or is Spanish a planned future requirement?

### Structure and interaction

11. Should the experience prioritize a browsable project grid, an editorial sequence, or a more experimental presentation?
12. Are discipline filters genuinely useful for the expected number of projects?
13. Should project pages follow a shared rhythm or be individually art-directed?
14. Is direct email preferable to a contact form?
15. Does the three-row project grid define a fixed-height viewport, a repeatable composition unit, or only the opening section of each project?
16. Which project modules may span multiple columns or rows, and should this be defined per project?
17. How should the four-column project grid transform on tablet and mobile?

### Surface

18. Is there an existing personal visual identity to use or evolve?
19. Which websites, publications, exhibitions, or objects are useful visual references?
20. What visual conventions or portfolio trends should be avoided?
21. How much motion is appropriate for the desired academic positioning?

### Delivery

22. What is the custom domain?
23. Which Cloudinary plan and usage budget are appropriate for the final number and duration of assets?
24. Will media be uploaded manually through Cloudinary's library or through a project-specific publishing workflow?
25. How often is the portfolio expected to change after launch?
26. What are the fixed application and portfolio submission deadlines?

## 30. Decision Log

| Date | Decision | Status | Rationale |
|---|---|---|---|
| 2026-10-04 | Use Jesse James Garrett's five planes to organize the PRD | Confirmed | Requested project framework |
| 2026-10-04 | Use English for all project documentation | Confirmed | Project documentation requirement |
| 2026-10-04 | Focus the portfolio on professional graphic design, video, illustration, and art direction work | Confirmed | Defined portfolio disciplines |
| 2026-10-04 | Design the portfolio specifically for applications to master's programs in the United States | Confirmed | Defined primary purpose and audience |
| 2026-10-04 | Treat the site as an audiovisual portfolio supporting image, video, animated GIF, and text | Confirmed | Defined required media formats |
| 2026-10-04 | Maintain one master portfolio and create program-specific curations by referencing its projects | Confirmed | Prevents duplicated project content and enables tailored applications |
| 2026-10-04 | Build with HTML, CSS, and JavaScript and use GitHub Pages, Vercel, and a custom domain | Superseded | Initial hosting concept; replaced by the GitHub repository, Vercel production, and Cloudinary media architecture |
| 2026-10-04 | Prioritize desktop while preserving a complete responsive experience | Confirmed | Defined device hierarchy |
| 2026-10-04 | Use a responsive project-board home page with three desktop columns, two tablet columns, and one mobile column | Confirmed | Defined the primary portfolio index and responsive grid behavior |
| 2026-10-04 | Reveal project title and year on thumbnail hover and provide equivalent focus/touch access | Confirmed | Defined project-preview interaction without relying exclusively on hover |
| 2026-10-04 | Base desktop project pages on a four-column `1 : 0.5 : 0.5 : 1` grid with three `1 : 1.1 : 1` rows and `10px 15px` gaps | Confirmed | Defined the underlying project-page composition system; module placement and responsive transformations remain open |
| 2026-10-04 | Use GitHub for code and structured content, Vercel for preview and production deployment, and the custom domain for the canonical public site | Confirmed | Assigns one clear responsibility to each part of the publishing workflow and removes duplicate hosting |
| 2026-10-04 | Use Cloudinary for project image, video, and animated-media delivery | Confirmed | Provides centralized media management, responsive transformation, optimization, and CDN delivery |
| 2026-10-04 | Keep large media outside Git and retain independent backups of full-quality originals | Confirmed | Protects repository performance and avoids using the delivery service as the only archive |
| 2026-10-04 | Prefer optimized video or modern animated formats over large GIF files while retaining GIF support | Confirmed | Reduces transfer size and improves playback performance |
| 2026-10-05 | Use Juan Dellacha's portfolio as the primary landing-page and project-display reference without copying its identity or assets | Confirmed | Establishes a neutral, image-first interface, compact persistent navigation, and editorial project rhythm while preserving the portfolio's own visual identity |
| 2026-10-05 | Keep the confirmed three/two/one-column project-board behavior while adapting the visual density and header principles from the new reference | Confirmed | Preserves the existing responsive information architecture while incorporating the preferred visual direction |
| 2026-10-05 | Use a fixed `3:4` ratio for home thumbnails and responsive Cloudinary derivatives for all images | Confirmed | Creates a consistent project board while delivering appropriate dimensions to each viewport |
| 2026-10-05 | Use lowercase ASCII kebab-case Cloudinary public IDs following `portfolio/projects/{project-slug}/{sequence}-{role}-{descriptor}` | Confirmed | Provides stable, readable identifiers and avoids duplicated device- or format-specific assets |
| 2026-10-05 | Apply the approved upload and delivery limits for images, video, loops, and GIF assets | Confirmed | Protects visual quality while controlling transfer weight and Cloudinary usage |
| 2026-10-05 | Store Cloudinary public IDs and editorial behavior in structured project data and generate delivery URLs centrally | Confirmed | Allows global optimization changes without editing every project record |
| 2026-10-05 | Prioritize only initially visible media, lazy-load the remaining case study, and respect reduced-motion preferences | Confirmed | Reduces initial page weight and avoids unnecessary motion or downloads |

## 31. Revision History

| Version | Date | Summary |
|---|---|---|
| 0.1 | 2026-10-04 | Initial PRD structure and baseline requirements |
| 0.2 | 2026-10-04 | Added academic application focus, audiovisual formats, reusable curations, technical stack, deployment constraints, and desktop-first responsive direction |
| 0.3 | 2026-10-04 | Defined the responsive project-board home page, thumbnail interaction, accessibility equivalents, acceptance criteria, and visual references |
| 0.4 | 2026-10-04 | Added the base desktop grid for individual project pages, its layout logic, acceptance criteria, and unresolved responsive behavior |
| 0.5 | 2026-10-04 | Confirmed GitHub/Vercel/Cloudinary responsibilities, removed GitHub Pages from production, and added media storage, delivery, data-model, backup, and optimization requirements |
| 0.6 | 2026-10-05 | Added Juan Dellacha as the primary visual reference and defined the landing-page header, image-first grid, neutral canvas, and project-display principles |
| 0.7 | 2026-10-05 | Added the approved audiovisual asset specification: dimensions, weight budgets, Cloudinary naming, responsive delivery, video and animation behavior, loading strategy, data model, and master-file archive |
