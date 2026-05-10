// Theme toggle and local preference storage
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');

const profileUpload = document.getElementById('profileUpload');
const profilePhoto = document.getElementById('profilePhoto');
const uploadGraphicButton = document.getElementById('uploadGraphicButton');

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

// Image storage management with base64 persistence
const imageStorage = {
  getProjectImages(projectKey) {
    const stored = localStorage.getItem(`project_${projectKey}`);
    return stored ? JSON.parse(stored) : [];
  },
  setProjectImages(projectKey, images) {
    localStorage.setItem(`project_${projectKey}`, JSON.stringify(images));
  },
  // Export all images for sharing
  exportData() {
    const data = {};
    // Export project images
    ['bookmark', 'in3d', 'game2d'].forEach(key => {
      const images = this.getProjectImages(key);
      if (images.length > 0) data[`project_${key}`] = images;
    });
    return JSON.stringify(data);
  },
  // Import shared data
  importData(jsonData) {
    try {
      const data = JSON.parse(jsonData);
      Object.keys(data).forEach(key => {
        localStorage.setItem(key, JSON.stringify(data[key]));
      });
      // Reload page to apply changes
      location.reload();
    } catch (e) {
      alert('Dữ liệu không hợp lệ');
    }
  }
};

const projectData = {
  bookmark: {
    title: 'Thiết kế Bookmark',
    category: 'Bookmark',
    description: 'Một dự án bookmark đầy sáng tạo, cân bằng giữa thẩm mỹ ấm áp và trải nghiệm người dùng tinh tế.',
    tools: 'Figma, Illustrator',
    process: 'Research → Sketch → Mockup'
  },
  in3d: {
    title: 'In 3D',
    category: '3D',
    description: 'Concept 3D với mockup chuyên nghiệp, ánh sáng mềm và bố cục hiện đại.',
    tools: 'Photoshop, 3D mockup',
    process: 'Concept → Render → Presentation'
  },
  game2d: {
    title: 'Game 2D',
    category: 'Game',
    description: 'Thiết kế game 2D nhấn mạnh trải nghiệm, cách điệu hình ảnh và cảm giác chơi thú vị.',
    tools: 'Figma, Premiere Pro',
    process: 'Concept → Prototype → Polish'
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
  currentImages = data.images || [];
  currentIndex = 0;
  if (currentImages.length > 0) {
    modalImage.src = currentImages[0];
  }
  modalTitle.textContent = data.title;
  modalCategory.textContent = data.category;
  modalDescription.textContent = data.description;
  modalTools.textContent = data.tools || '';
  modalProcess.textContent = data.process || '';
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
  if (currentImages.length === 0) return;
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
    const uploadedImages = imageStorage.getProjectImages(projectKey);
    const images = uploadedImages.length > 0 ? uploadedImages : [
      createSvgPlaceholder(project.title, '#f7b46b', '#c76b2d')
    ];
    openModal({
      ...project,
      images
    });
  }
}

function updateProjectThumbnail(projectKey) {
  const card = document.querySelector(`[data-project="${projectKey}"]`);
  if (!card) return;
  
  const images = imageStorage.getProjectImages(projectKey);
  if (images.length > 0) {
    const thumb = card.querySelector('.project-thumb');
    thumb.style.backgroundImage = `url('${images[0]}')`;
  }
}

function attachProjectListeners() {
  document.querySelectorAll('.project-card').forEach(card => {
    const button = card.querySelector('.project-button');
    button.addEventListener('click', (e) => {
      e.preventDefault();
      openProjectModal(card.dataset.project);
    });
  });
}

function attachProjectItemUploadListeners() {
  document.querySelectorAll('.project-item-upload').forEach(input => {
    input.addEventListener('change', event => {
      const id = event.target.id;
      let projectKey = 'bookmark';
      
      // Parse project key: projectUploadBookmark -> bookmark, projectUploadIn3D -> in3d, projectUploadGame2D -> game2d
      if (id.includes('Bookmark')) {
        projectKey = 'bookmark';
      } else if (id.includes('In3D')) {
        projectKey = 'in3d';
      } else if (id.includes('Game2D')) {
        projectKey = 'game2d';
      }
      
      const files = Array.from(event.target.files);
      if (files.length > 0) {
        // Convert files to base64 and store
        const promises = files.map(file => {
          return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.readAsDataURL(file);
          });
        });
        
        Promise.all(promises).then(base64Images => {
          const previousImages = imageStorage.getProjectImages(projectKey);
          const allImages = [...previousImages, ...base64Images];
          imageStorage.setProjectImages(projectKey, allImages);
          updateProjectThumbnail(projectKey);
        });
      }
      event.target.value = '';
    });
  });
}

// Event listeners
themeToggle.addEventListener('change', () => {
  setTheme(themeToggle.checked ? 'dark' : 'light');
});

profileUpload.addEventListener('change', event => {
  const file = event.target.files[0];
  if (file) {
    profilePhoto.src = URL.createObjectURL(file);
  }
});

uploadGraphicButton.addEventListener('click', () => {
  document.getElementById('addGalleryImage').click();
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

// Initialization
initTheme();
attachProjectListeners();
attachProjectItemUploadListeners();

// Export/Import functionality
const exportDataBtn = document.getElementById('exportDataBtn');
const importDataBtn = document.getElementById('importDataBtn');
const importDataFile = document.getElementById('importDataFile');
const dataToggleBtn = document.getElementById('dataToggleBtn');
const dataSection = document.querySelector('.data-section');

dataToggleBtn.addEventListener('click', () => {
  dataSection.style.display = dataSection.style.display === 'none' ? 'block' : 'none';
});

exportDataBtn.addEventListener('click', () => {
  const data = imageStorage.exportData();
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'portfolio-data.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

importDataBtn.addEventListener('click', () => {
  importDataFile.click();
});

importDataFile.addEventListener('change', event => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      imageStorage.importData(reader.result);
    };
    reader.readAsText(file);
  }
  event.target.value = '';
});

