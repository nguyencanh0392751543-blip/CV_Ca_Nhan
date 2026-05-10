# CV_Ca_Nhan - Portfolio Website

🎨 **Modern Creative Portfolio** cho Nguyễn Minh Cảnh - UI/UX Designer

## ✨ Tính năng

- **Responsive Design**: Hoạt động tốt trên mọi thiết bị
- **Dark/Light Mode**: Chuyển đổi theme với animation mượt mà
- **Interactive Gallery**: Hover effects và modal chi tiết
- **Project Showcase**: Slider với thumbnails
- **Persistent Images**: Ảnh upload được lưu và không mất khi reload
- **Data Export/Import**: Chia sẻ portfolio qua file JSON

## 🚀 Cách sử dụng

### 1. Upload ảnh cho từng mục
- **Gallery**: Click vào icon 📤 trên mỗi card để thêm ảnh
- **Projects**: Click 📤 bên cạnh "Xem chi tiết" để upload ảnh project

### 2. Lưu trữ ảnh (Persistent)
- Ảnh được lưu dưới dạng base64 trong localStorage
- **Không mất** khi reload trang hoặc đóng browser

### 3. Chia sẻ Portfolio
- Click button 💾 ở header để mở menu xuất/nhập
- **Xuất dữ liệu**: Download file `portfolio-data.json`
- **Nhập dữ liệu**: Upload file JSON từ người khác để import

## 🌐 Deploy lên GitHub Pages

Portfolio đã được setup tự động deploy lên GitHub Pages:

1. Vào repo GitHub → **Settings** → **Pages**
2. Chọn **Source**: "GitHub Actions"
3. URL sẽ là: `https://nguyencanh0392751543-blip.github.io/CV_Ca_Nhan/`

## 📁 Cấu trúc file

```
CV_Ca_Nhan/
├── index.html          # HTML structure
├── styles.css          # CSS styling + themes
├── script.js           # JavaScript interactions
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions deployment
└── README.md           # Documentation
```

## 🎯 Thông tin cá nhân

- **Tên**: Nguyễn Minh Cảnh
- **Nghề nghiệp**: UI/UX Designer Student / Digital Graphics
- **Tagline**: "Thiết kế trải nghiệm đơn giản, hiệu quả và có cảm xúc"

## 🛠️ Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox
- **Vanilla JavaScript**: No frameworks
- **localStorage**: Data persistence
- **File API**: Image upload handling

---

*Portfolio được tạo với sự hỗ trợ của GitHub Copilot*
* Use soft accent color (blue or purple)
* Good spacing, clean typography

👤 PERSONAL INFORMATION:

* Name: Nguyễn Minh Cảnh
* Tagline: “Thiết kế trải nghiệm đơn giản, hiệu quả và có cảm xúc”
* Role: Sinh viên ngành CNNT - Đồ Họa Kỹ Thuật Số

📌 HERO SECTION:

* Display name prominently
* Show tagline below
* Add CTA buttons:

  * View Projects
  * Hire Me

📖 ABOUT SECTION:

* Content:
  "Là một sinh viên tại trường GDU, hiện đang học năm 2 của ngành CNNT - Đồ Họa Kỹ Thuật Số.
  Tôi đang tập trung vào một dự án thiết kế UI/UX và game."
* Keep it short and readable

🧠 SKILLS SECTION:

* Group skills:

  * Design: Figma, Photoshop, Illustrator
  * Other: Sáng tạo ý tưởng game
* Display as tags or badges

🚀 PROJECT SECTION (IMPORTANT):

* Title: "Dự án của tôi"
* Create a project gallery layout (grid-based)
* 2–3 columns responsive grid

Each project card includes:

* Image thumbnail
* Project title: "Thiết kế Bookmark 3D"
* Short description
* Category label (Design / 3D)

🎨 GALLERY REQUIREMENTS:

* Hover effect:

  * Zoom image slightly
  * Show overlay with project name
* Smooth animation
* Clean rounded corners

👉 When clicking a project:

* Open modal or detail view
* Show multiple images (album gallery)
* Include description and tools used

❤️ HOBBIES SECTION:

* Display hobbies with icons or emojis:

  * Đá banh
  * Xem phim
  * Chơi game
  * Nấu ăn

📬 CONTACT SECTION:

* Email: nguyencanh0392751543
* Add a prominent button: "Hire Me"

🌙 THEME TOGGLE:

* Button in header
* Switch between light and dark mode
* Smooth animation

✨ UX REQUIREMENTS:

* Clear visual hierarchy
* Consistent spacing
* Easy to scan
* Mobile responsive

⚙️ OUTPUT:

* HTML + CSS only
* No frameworks
* Clean, well-structured code
# B2: Sau khi chạy thử bộ prompt trên em thấy vẫn chưa ưng ý, nên kêu chatgpt sửa lại prompt theo bố cục của cv mẫu và được bộ prompt này: Create a modern portfolio website inspired by the attached creative CV layout design.

🎨 OVERALL STYLE:

* Creative portfolio inspired by modern designer CV posters
* Rounded cards layout
* Soft shadows
* Warm minimalist color palette:

  * Cream / white background
  * Brown or dark gradient cards
  * Yellow-orange accent color
* Friendly and creative typography
* Layout should feel youthful, artistic, and modern
* Responsive for desktop and mobile

⚠️ IMPORTANT:
Do not copy the exact design.
Use the attached layout only as inspiration for structure and visual hierarchy.

━━━━━━━━━━━━━━━━━━━
👤 PERSONAL INFORMATION
━━━━━━━━━━━━━━━━━━━

Name:
Nguyễn Minh Cảnh

Role:
UI/UX Designer Student • Digital Graphics

Short Introduction:
"Là một sinh viên tại trường GDU, hiện đang học năm 2 của ngành CNNT - Đồ Họa Kỹ Thuật Số.
Tôi đang tập trung vào một dự án thiết kế UI/UX và game."

Tagline:
“Thiết kế trải nghiệm đơn giản, hiệu quả và có cảm xúc”

Email:
[nguyencanh0392751543@gmail.com](mailto:nguyencanh0392751543@gmail.com)

━━━━━━━━━━━━━━━━━━━
🧩 HEADER SECTION
━━━━━━━━━━━━━━━━━━━

Create a top navigation area similar to a creative CV:

* Portfolio button
* UI/UX Designer label
* Game Design label
* Year badge
* Dark mode toggle button on the top-right

Add smooth hover effects.

━━━━━━━━━━━━━━━━━━━
🖼 HERO SECTION
━━━━━━━━━━━━━━━━━━━

Split layout into 2 columns:

LEFT:

* Large profile image card
* Rounded corners
* Soft shadow
* Modern UI card style

RIGHT:

* Large display name:
  Nguyễn Minh Cảnh
* Email badge
* Short intro paragraph
* “Hire Me” button
* Smooth fade animation

━━━━━━━━━━━━━━━━━━━
📖 ABOUT ME SECTION
━━━━━━━━━━━━━━━━━━━

Display inside a rounded card:

* About me paragraph
* Highlight keywords:

  * GDU
  * UI/UX
  * Game Design
  * Digital Graphics

Use clean spacing and readable typography.

━━━━━━━━━━━━━━━━━━━
🚀 PROJECTS SECTION
━━━━━━━━━━━━━━━━━━━

Title:
“Projects”

Create a modern gallery layout inspired by portfolio case studies.

Projects:

1. Thiết kế Bookmark
2. In 3D
3. Game 2D

For each project card:

* Large thumbnail image
* Overlay hover effect
* Project title
* Small category tag
* Rounded corners
* Slight image zoom on hover

When clicking a project:

* Open modal or project detail section
* Show album gallery with multiple images
* Include:

  * Project description
  * Tools used
  * Design process

Gallery style:

* Minimal and modern
* 2-column responsive grid
* Smooth animations

━━━━━━━━━━━━━━━━━━━
🧠 SKILLS SECTION
━━━━━━━━━━━━━━━━━━━

Create a software skill area using icon cards.

Skills:

* Premiere Pro
* Figma
* Illustrator
* Photoshop
* Content Creation

Display skills as:

* Rounded square icons
* Hover glow effect
* Clean modern UI

━━━━━━━━━━━━━━━━━━━
❤️ HOBBIES SECTION
━━━━━━━━━━━━━━━━━━━

Create rounded hobby tags/cards with icons or emojis.

Hobbies:

* ⚽ Đá banh
* 🎬 Xem phim
* 🎮 Chơi game
* 🍳 Nấu ăn

Style:

* Fun but minimal
* Consistent spacing

━━━━━━━━━━━━━━━━━━━
🌙 DARK MODE
━━━━━━━━━━━━━━━━━━━

Requirements:

* Dark mode toggle button fixed in header
* Smooth transition
* Maintain readability
* Keep aesthetic similar to creative designer portfolios

━━━━━━━━━━━━━━━━━━━
✨ UX/UI REQUIREMENTS
━━━━━━━━━━━━━━━━━━━

* Strong visual hierarchy
* Portfolio storytelling
* Good whitespace usage
* Smooth hover interactions
* Rounded modern cards
* Soft shadows
* Professional but creative
* Responsive design
* Elegant typography
* Modern UI/UX portfolio feeling

━━━━━━━━━━━━━━━━━━━
⚙️ OUTPUT REQUIREMENTS
━━━━━━━━━━━━━━━━━━━

* HTML + CSS only
* No frameworks
* Clean code structure
* Use semantic HTML
* Responsive layout
* Include comments in code
* Organized CSS sections

Do NOT create a generic portfolio website.
Make it feel like a modern creative UI/UX student portfolio inspired by Behance and designer resume posters.
# B3: sau đó em kêu chatgpt viết một bộ prompt bổ sung tính năng thêm hình ảnh vào các mục như Graphic Designer, Project (bookmark, in 3D, game 2D) Create a modern creative portfolio website inspired by stylish designer resume posters and Behance portfolios.

⚠️ IMPORTANT:
Use the attached CV layout only as inspiration for structure and visual hierarchy.
Do NOT copy the exact design.

━━━━━━━━━━━━━━━━━━━
🎨 DESIGN STYLE
━━━━━━━━━━━━━━━━━━━

* Creative UI/UX portfolio style
* Rounded card layout
* Warm minimalist aesthetic
* Main colors:

  * Cream / white background
  * Dark brown gradient cards
  * Orange-yellow accent color
* Soft shadows
* Modern playful typography
* Smooth animations and hover effects
* Responsive desktop + mobile design

━━━━━━━━━━━━━━━━━━━
👤 PERSONAL INFORMATION
━━━━━━━━━━━━━━━━━━━

Name:
Nguyễn Minh Cảnh

Role:
UI/UX Designer Student • Digital Graphics

Tagline:
“Thiết kế trải nghiệm đơn giản, hiệu quả và có cảm xúc”

Introduction:
"Là một sinh viên tại trường GDU, hiện đang học năm 2 của ngành CNNT - Đồ Họa Kỹ Thuật Số.
Tôi đang tập trung vào một dự án thiết kế UI/UX và game."

Email:
[nguyencanh0392751543@gmail.com](mailto:nguyencanh0392751543@gmail.com)

━━━━━━━━━━━━━━━━━━━
🧩 HEADER SECTION
━━━━━━━━━━━━━━━━━━━

Create a top navigation inspired by creative CV layouts:

* Resume button
* Graphic Designer label
* UI/UX label
* Game Design label
* Year badge (2026)
* Dark mode toggle button on top-right

Hover effects:

* Smooth glow
* Soft scaling animation

━━━━━━━━━━━━━━━━━━━
🖼 HERO SECTION
━━━━━━━━━━━━━━━━━━━

Two-column creative layout.

LEFT SIDE:

* Large rounded profile image card
* Upload image support
* Allow changing profile image dynamically
* Soft shadow and hover animation

RIGHT SIDE:

* Large display name
* Email badge
* Tagline
* Short introduction paragraph
* “Hire Me” button
* Fade-in animation

━━━━━━━━━━━━━━━━━━━
🖼 GRAPHIC DESIGNER GALLERY SECTION
━━━━━━━━━━━━━━━━━━━

Create a gallery section for graphic design works.

Features:

* Upload and display multiple images
* Masonry or grid layout
* Rounded image cards
* Hover zoom effect
* Overlay showing:

  * Project name
  * Category
  * Short description

Allow image categories such as:

* Poster Design
* Bookmark Design
* UI Design
* 3D Mockup

When clicking an image:

* Open fullscreen modal gallery
* Slideshow navigation
* Show project details beside image

Gallery must support:

* Dynamic image adding
* Responsive resizing
* Smooth transition animations

━━━━━━━━━━━━━━━━━━━
🚀 PROJECT SECTION
━━━━━━━━━━━━━━━━━━━

Title:
“Projects”

Projects:

1. Thiết kế Bookmark
2. In 3D
3. Game 2D

Create modern project cards with:

* Thumbnail image
* Project title
* Category tag
* Hover overlay
* Rounded corners
* Shadow effect

For each project:

* Support multiple image uploads
* Create image album/gallery inside project detail
* Include:

  * Description
  * Tools used
  * Design process
  * Project showcase images

Project modal/detail page:

* Large preview image
* Image slider/carousel
* Next/Prev buttons
* Smooth animation

━━━━━━━━━━━━━━━━━━━
🧠 SKILLS SECTION
━━━━━━━━━━━━━━━━━━━

Display software skills using modern icon cards.

Skills:

* Premiere Pro
* Figma
* Illustrator
* Photoshop
* Content Creation

Design:

* Rounded icon buttons
* Hover glow animation
* Modern clean UI

━━━━━━━━━━━━━━━━━━━
❤️ HOBBIES SECTION
━━━━━━━━━━━━━━━━━━━

Display hobbies as creative rounded tags/cards with icons.

Hobbies:

* ⚽ Đá banh
* 🎬 Xem phim
* 🎮 Chơi game
* 🍳 Nấu ăn

Style:

* Minimal
* Fun and youthful
* Consistent spacing

━━━━━━━━━━━━━━━━━━━
🌙 DARK MODE
━━━━━━━━━━━━━━━━━━━

Requirements:

* Toggle button in header
* Smooth theme transition
* Maintain visual consistency
* Dark brown/black elegant dark theme

━━━━━━━━━━━━━━━━━━━
✨ UX/UI REQUIREMENTS
━━━━━━━━━━━━━━━━━━━

* Strong visual hierarchy
* Portfolio storytelling
* Large whitespace usage
* Easy-to-scan sections
* Smooth hover micro-interactions
* Rounded modern cards
* Responsive layout
* Behance-style presentation
* Creative but professional

━━━━━━━━━━━━━━━━━━━
⚙️ TECHNICAL REQUIREMENTS
━━━━━━━━━━━━━━━━━━━

* HTML + CSS + optional JavaScript
* No frameworks
* Semantic HTML
* Organized CSS structure
* Responsive layout
* Smooth animations
* Image upload placeholders
* Gallery modal functionality
* Clean code comments

⚠️ IMPORTANT:
Do NOT create a generic portfolio website.
Make it feel like a modern creative UI/UX student portfolio with interactive image galleries and project showcase sections.
# B4: