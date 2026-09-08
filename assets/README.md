# assets/

Source artwork, kept unedited and out of `public/` so it is version-controlled
but never exported. Everything the site serves is derived from what is here.

## ward-logo.jpg

The supplied lockup, 1277x832: the WC monogram over "WARD GARAGE DOOR / REPAIR
SERVICE / COASTAL SPECIALISTS", dark teal ink on warm textured paper.

Measured off the file, and the numbers every derived asset is cut with:

| region        | bounds (l, t, r, b)   |
| ------------- | --------------------- |
| monogram      | `345, 42, 929, 383`   |
| full ink      | `y 42 .. 710`         |
| paper tone    | `#f4f0e5` (244,240,229) |

The paper is not a flat fill — it carries a subtle texture and vignette — so
anything that pads the artwork extends its own edge pixels rather than butting
it against a flat colour, which would show a seam.

## Derived files

| file                            | from            | why that format                                                                 |
| ------------------------------- | --------------- | ------------------------------------------------------------------------------- |
| `app/icon.png`                  | monogram, 512²  | Next's file-convention favicon. PNG and palette-quantised: browsers, not us.      |
| `public/images/ward-icon.png`   | same 512²       | The `logo` in LocalBusiness JSON-LD. Google does not reliably take webp.          |
| `public/images/ward-mark.webp`  | monogram, 256w  | Header. Paper keyed to alpha so it sits on `sand` with no box. Renders at 36px.   |
| `public/images/ward-lockup.webp`| lockup, 480w    | Footer. Opaque on its own paper: the ink is teal and that band is `teal-deep`.    |
| `public/images/ward-og.jpg`     | lockup, 1200x630| Social card. JPEG, because scrapers accept it everywhere webp is a coin toss.     |

The monogram is squared for the icon by centring it on the measured paper tone —
it cannot be cropped square from the source, since only 96px of vertical padding
exists above the wordmark against the mark's own 584px width.

The header keeps its typeset "Ward Garage Door / Repair Service" beside the mark:
this crop is the monogram alone and carries no words, so nothing is set twice.
The footer does the opposite — the lockup already reads the name, so the name is
not also set as type beside it, and `alt` carries it instead.
