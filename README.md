# SVG Capital website

A one-page website for SVG Capital: an introduction, the three practices (Finance, Technology R&D, Education), how the firm works, and a contact section.

## View it

Double-click `index.html`. It opens in your browser. Nothing needs installing.

## What is in this folder

| File | What it is |
| --- | --- |
| `index.html` | All the words and the structure of the page |
| `styles.css` | Colours, type and layout |
| `script.js` | The contact form's behaviour |
| `favicon.svg` | The small icon shown in the browser tab |

## Fill in the slots

Anything in `[SQUARE BRACKETS]` with a dashed outline is a fact that still needs your real detail. In `index.html` each one looks like this:

```html
<span class="slot">[YOUR EMAIL]</span>
```

Replace the whole thing, tags included, with your text. Search `index.html` for `[` to find them all:

- **Credentials strip:** `[YEAR FOUNDED]`, `[CITY, COUNTRY]`, `[MEMBERSHIP OR REGULATOR]`
- **Technology R&D:** `[YOUR RESEARCH FIELDS]`
- **Education:** `[COURSE TITLE]`, `[LENGTH]`, `[START DATE]` for each of three courses. Copy a `<li>` block to add a course, or delete one to remove it.
- **Contact:** `[RESPONSE TIME]`, `[YOUR EMAIL]`, `[YOUR PHONE]`, `[YOUR ADDRESS]`
- **Footer:** `[REGISTERED COMPANY NAME]`, `[COUNTRY]`, `[NUMBER]`, `[ADDRESS]`, `[PROFESSIONAL BODY OR REGULATORY STATEMENT]`

If a slot does not apply to you, delete the line or block it sits in.

The service descriptions (the four Finance services, the four research steps, the three "how we work" principles) are draft copy. Check them against what you actually offer and edit the text in `index.html`.

## Change the look

- **Accent colour:** edit `--accent` at the top of `styles.css`. Two alternatives that keep white button text readable are `#0A6B4F` (green) and `#C2310B` (red). Change the `fill` in `favicon.svg` to match.
- **Logo:** the name in the header and footer is plain text beside a small square. To use your own logo, replace the contents of both `<a class="wordmark">` links in `index.html` with an `<img>`.

## Connect the contact form

The form does not send anything yet. Until it is connected, pressing "Send enquiry" shows a note saying the message was not sent.

To connect it:

1. Get a form address from your web host or a form-handling service. Most hosts for simple sites offer one.
2. In `index.html`, put that address in the form's `action`, in place of `#`.
3. In `script.js`, delete the `form.addEventListener('submit', …)` block so the browser sends the form normally.
4. Send yourself a test enquiry.

## Before you go live

- [ ] Every slot is filled in or removed
- [ ] Service descriptions match what you offer
- [ ] The contact form is connected and tested
- [ ] The footer shows your registered company details and any professional-body or regulatory statement. Check what a business website must display where you are registered.
- [ ] A privacy notice is in place, since the form collects names and email addresses
- [ ] Your own logo replaces the text wordmark, if you have one

## Put it online

Upload the four files to any web host that serves static files. Keep them together in one folder, with `index.html` at the top level, then point your domain at it.

## Notes

- The typefaces load from Google Fonts, so the page needs an internet connection to show them. Without one it falls back to fonts already on the device.
- This folder is a snapshot of the design on your Claude canvas, taken on 26 November 2026. Later changes on the canvas are not copied here automatically.
