// Theme toggle and local preference storage
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');

const profileUpload = document.getElementById('profileUpload');
const profilePhoto = document.getElementById('profilePhoto');
const uploadGraphicButton = document.getElementById('uploadGraphicButton');

const addGalleryImage = document.getElementById('addGalleryImage');
const galleryUpload = document.getElementById('galleryUpload');
const galleryGrid = document.getElementById('galleryGrid');

const modalBackdrop = document.getElementById('modalBackdrop');
const projectModal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalDescription = document.getElementById('modalDescription');
const modalTools = document.getElementById('modalTools');
const modalProcess = document.getElementById('modalProcess');
const modalThumbnails = document.getElementById('modalThumbnails');
const prevSlide = document.getElementById('prevSlide');
const nextSlide = document.getElementById('nextSlide');

let currentImages = [];
let currentIndex = 0;

const projectData = {
  bookmark: {
    title: 'Thiết kế Bookmark',
    category: 'Bookmark',
    description: 'Một dự án bookmark đầy sáng tạo, cân bằng giữa thẩm mỹ ấm áp và trải nghiệm người dùng tinh tế.',
    tools: 'Figma, Illustrator',
    process: 'Research → Sketch → Mockup',
    images: [
      createSvgPlaceholder('Bookmark 1', '#f7b46b', '#c76b2d'),
      createSvgPlaceholder('Bookmark 2', '#ffdbad', '#b35c25'),
      createSvgPlaceholder('Bookmark 3', '#f0b67f', '#9f4e2f')
    ]
  },
  in3d: {
    title: 'In 3D',
    category: '3D',
    description: 'Concept 3D với mockup chuyên nghiệp, ánh sáng mềm và bố cục hiện đại.',
    tools: 'Photoshop, 3D mockup',
    process: 'Concept → Render → Presentation',
    images: [
      createSvgPlaceholder('3D Mockup 1', '#e8c5a0', '#7d3f21'),
      createSvgPlaceholder('3D Mockup 2', '#feeac7', '#8b4b24'),
      createSvgPlaceholder('3D Mockup 3', '#f3d7b0', '#aa6f3b')
    ]
  },
  game2d: {
    title: 'Game 2D',
    category: 'Game',
    description: 'Thiết kế game 2D nhấn mạnh trải nghiệm, cách điệu hình ảnh và cảm giác chơi thú vị.',
    tools: 'Figma, Premiere Pro',
    process: 'Concept → Prototype → Polish',
    images: [
      createSvgPlaceholder('Game 1', '#f7c67c', '#9f532d'),
      createSvgPlaceholder('Game 2', '#ffd8a5', '#7b3d24'),
      createSvgPlaceholder('Game 3', '#f8d39d', '#8b4729')
    ]
  }
};

function createSvgPlaceholder(label, colorA, colorB) {
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'><defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop offset='0%' stop-color='${colorA}'/><stop offset='100%' stop-color='${colorB}'/></linearGradient></defs><rect width='1200' height='800' fill='url(%23g)'/><text x='50%' y='52%' text-anchor='middle' font-family='Inter, sans-serif' fill='rgba(255,255,255,0.95)' font-size='72' font-weight='700'>${label}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function setTheme(mode) {
  themeToggle.checked = mode === 'dark';
  themeIcon.textContent = mode === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('themeMode', mode);
}

function initTheme() {
  const storedTheme = localStorage.getItem('themeMode');
  setTheme(storedTheme === 'dark' ? 'dark' : 'light');
}

function openModal(data) {
  currentImages = data.images;
  currentIndex = 0;
  modalImage.src = currentImages[0];
  modalTitle.textContent = data.title;
  modalCategory.textContent = data.category;
  modalDescription.textContent = data.description;
  modalTools.textContent = data.tools;
  modalProcess.textContent = data.process;
  renderThumbnails();
  modalBackdrop.classList.add('active');
  projectModal.classList.add('active');
  projectModal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modalBackdrop.classList.remove('active');
  projectModal.classList.remove('active');
  projectModal.setAttribute('aria-hidden', 'true');
}

function setSlide(index) {
  currentIndex = ((index % currentImages.length) + currentImages.length) % currentImages.length;
  modalImage.src = currentImages[currentIndex];
}

function renderThumbnails() {
  modalThumbnails.innerHTML = '';
  currentImages.forEach((src, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    const thumb = document.createElement('img');
    thumb.src = src;
    thumb.alt = `${modalTitle.textContent} thumbnail ${index + 1}`;
    button.appendChild(thumb);
    button.addEventListener('click', () => setSlide(index));
    modalThumbnails.appendChild(button);
  });
}

function openProjectModal(projectKey) {
  const project = projectData[projectKey];
  if (project) {
    openModal(project);
  }
}

function openGalleryItem(card) {
  const title = card.dataset.title || 'Design Work';
  const category = card.dataset.category || 'Design';
  const description = card.dataset.description || 'Thiết kế sáng tạo được trình bày dưới dạng gallery.';
  const img = card.querySelector('img');
  const imageSrc = img ? img.src : createSvgPlaceholder(title, '#f3d0a4', '#b96a31');
  openModal({
    title,
    category,
    description,
    tools: 'Graphic Design',
    process: 'Upload → edit → polish',
    images: [imageSrc]
  });
}

function createGalleryCard(file) {
  const url = URL.createObjectURL(file);
  const card = document.createElement('article');
  card.className = 'gallery-card';
  card.dataset.title = file.name;
  card.dataset.category = 'Uploaded';
  card.dataset.description = 'Ảnh thiết kế mới tải lên.';
  card.innerHTML = `
    <img src="${url}" alt="${file.name}" />
    <div class="gallery-overlay">
      <span class="gallery-category">Uploaded</span>
      <h3>${file.name}</h3>
      <p>Thiết kế mới vừa thêm.</p>
    </div>
  `;
  card.addEventListener('click', () => openGalleryItem(card));
  return card;
}

function attachGalleryListeners() {
  document.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => openGalleryItem(card));
  });
}

function attachProjectListeners() {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => openProjectModal(card.dataset.project));
  });
}

themeToggle.addEventListener('change', () => {
  setTheme(themeToggle.checked ? 'dark' : 'light');
});

profileUpload.addEventListener('change', event => {
  const file = event.target.files[0];
  if (file) {
    profilePhoto.src = URL.createObjectURL(file);
  }
});

uploadGraphicButton.addEventListener('click', () => galleryUpload.click());
addGalleryImage.addEventListener('click', () => galleryUpload.click());

galleryUpload.addEventListener('change', event => {
  const files = Array.from(event.target.files);
  files.forEach(file => {
    const card = createGalleryCard(file);
    galleryGrid.appendChild(card);
  });
  galleryUpload.value = '';
});

prevSlide.addEventListener('click', () => setSlide(currentIndex - 1));
nextSlide.addEventListener('click', () => setSlide(currentIndex + 1));
modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

initTheme();
attachGalleryListeners();
attachProjectListeners();
