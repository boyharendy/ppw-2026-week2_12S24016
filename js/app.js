// app.js: Presentation Layer & Logic
class App {
  constructor() {
    this.state = {
      projects: [],
      services: [],
      profile: null,
      orders: JSON.parse(localStorage.getItem('user_orders') || '[]')
    };

    this.ui = {
      portfolioContainer: document.getElementById('portfolioContainer'),
      servicesContainer: document.getElementById('servicesContainer'),
      orderBadge: document.getElementById('orderBadge'),
      form: document.getElementById('serviceConsultationForm'),
      toastContainer: document.getElementById('toastContainer')
    };

    this.init();
  }

  async init() {
    this.updateOrderBadge();
    this.initFormHandler();
    
    // Load Data
    await this.loadAllData();
  }

  // Sanitasi XSS
  escapeHTML(str) {
    if (!str) return '';
    return str.toString()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Merender UI States (Loading, Error, dsb)
  renderState(container, state, message = '') {
    if (!container) return;
    container.innerHTML = '';
    if (state === 'loading') {
      container.innerHTML = `
        <div class="col-12 text-center py-5">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <p class="mt-3 text-muted">Memuat data...</p>
        </div>`;
    } else if (state === 'error') {
      container.innerHTML = `
        <div class="col-12">
          <div class="alert alert-danger d-flex align-items-center" role="alert">
            <i class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"></i>
            <div>
              Gagal memuat data: ${this.escapeHTML(message)}
            </div>
          </div>
        </div>`;
    } else if (state === 'empty') {
      container.innerHTML = `
        <div class="col-12 text-center py-5">
          <p class="text-muted">Tidak ada data untuk ditampilkan.</p>
        </div>`;
    }
  }

  async loadAllData() {
    // Tampilkan state loading
    this.renderState(this.ui.portfolioContainer, 'loading');
    if (this.ui.servicesContainer) {
       this.ui.servicesContainer.innerHTML = '<div class="spinner-border text-primary" role="status"></div>';
    }

    try {
      // Ambil data secara paralel
      const [projects, services, profile] = await Promise.all([
        window.ApiService.getProjects(),
        window.ApiService.getServices(),
        window.ApiService.getProfile()
      ]);

      this.state.projects = projects;
      this.state.services = services;
      this.state.profile = profile;

      this.renderProjects();
      this.renderServices();
      this.renderProfile();

    } catch (err) {
      this.renderState(this.ui.portfolioContainer, 'error', err.message);
      if (this.ui.servicesContainer) {
        this.renderState(this.ui.servicesContainer, 'error', err.message);
      }
    }
  }

  renderProjects() {
    const container = this.ui.portfolioContainer;
    if (!container) return;
    
    if (this.state.projects.length === 0) {
      this.renderState(container, 'empty');
      return;
    }

    container.innerHTML = '';
    this.state.projects.forEach(proj => {
      // Tags render
      const tagsHtml = (proj.tags || []).map(tag => 
        `<span class="badge bg-light text-dark border">${this.escapeHTML(tag)}</span>`
      ).join('');

      const html = `
        <div class="col">
          <article class="card h-100 project-card shadow-sm border-0">
            <div class="position-relative overflow-hidden project-media">
              <img src="${this.escapeHTML(proj.thumbnail)}" 
                   alt="${this.escapeHTML(proj.title)}" 
                   class="card-img-top project-img" 
                   loading="lazy">
              <span class="badge bg-dark-subtle text-dark position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill shadow-sm">
                ${this.escapeHTML(proj.category)}
              </span>
            </div>
            <div class="card-body d-flex flex-column p-4">
              <h3 class="card-title h5 fw-bold mb-2">${this.escapeHTML(proj.title)}</h3>
              <p class="card-text text-muted flex-grow-1 mb-3">
                ${this.escapeHTML(proj.description).substring(0, 100)}...
              </p>
              <div class="project-tech d-flex flex-wrap gap-2 mb-3">
                ${tagsHtml}
              </div>
              <div class="d-flex flex-wrap gap-2 pt-2 border-top">
                <button type="button" 
                        class="btn btn-brand-primary btn-sm flex-fill" 
                        onclick="window.appInstance.openProjectModal('${this.escapeHTML(proj.id)}')">
                  <i class="bi bi-window-stack me-1" aria-hidden="true"></i> Detail Proyek
                </button>
                <a href="${this.escapeHTML(proj.link)}" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="btn btn-outline-secondary btn-sm" >
                  <i class="bi bi-github me-1" aria-hidden="true"></i> GitHub &nearr;
                </a>
              </div>
            </div>
          </article>
        </div>
      `;
      container.insertAdjacentHTML('beforeend', html);
    });
  }

  renderServices() {
    const container = this.ui.servicesContainer;
    if (!container) return;
    
    container.innerHTML = '';
    this.state.services.forEach((srv, index) => {
      const isChecked = index === 0 ? 'checked' : '';
      const html = `
        <div class="col-12 col-md-4">
          <div class="form-check p-3 rounded-3 border h-100 service-radio-card">
            <input class="form-check-input ms-0 me-2" 
                   type="radio" 
                   name="kategori_layanan" 
                   id="${this.escapeHTML(srv.id)}" 
                   value="${this.escapeHTML(srv.value)}" 
                   ${isChecked} 
                   required>
            <label class="form-check-label fw-bold d-block" for="${this.escapeHTML(srv.id)}">
              ${this.escapeHTML(srv.label)}
              <small class="d-block fw-normal text-muted mt-1">${this.escapeHTML(srv.description)}</small>
            </label>
          </div>
        </div>
      `;
      container.insertAdjacentHTML('beforeend', html);
    });
  }

  renderProfile() {
    const profile = this.state.profile;
    if (!profile) return;

    // Karena di instruksi diwajibkan Dynamic CSR untuk kartu dan modal,
    // kita juga bisa merender nama atau lainnya jika ada id container yang disiapkan.
    // Untuk saat ini kita biarkan fungsi ini jika ingin dikembangkan lebih jauh,
    // karena modul utamanya meminta dekomposisi data ke JSON.
  }

  // Universal Dynamic Modal (Meminjam fungsi dari Modul)
  openProjectModal(projectId) {
    const proj = this.state.projects.find(p => p.id === projectId);
    if (!proj) return;

    document.getElementById('projectModalTitle').textContent = proj.title;
    
    const tagsHtml = (proj.tags || []).map(tag => 
      `<span class="badge bg-light text-dark border me-1">${this.escapeHTML(tag)}</span>`
    ).join('');

    document.getElementById('projectModalBody').innerHTML = `
      <img src="${this.escapeHTML(proj.thumbnail)}" class="img-fluid rounded mb-3 w-100 shadow-sm" alt="${this.escapeHTML(proj.title)}">
      <div class="mb-3">
         <span class="badge bg-primary px-3 py-2 me-2">${this.escapeHTML(proj.category)}</span>
      </div>
      <p class="text-secondary">${this.escapeHTML(proj.description)}</p>
      <div class="mt-4">
        <h6 class="fw-bold">Teknologi Terkait:</h6>
        <div>${tagsHtml}</div>
      </div>
    `;
    
    document.getElementById('projectModalFooterLink').href = proj.link;

    const modalEl = document.getElementById('universalProjectModal');
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
  }

  // Form Submit Asinkron dengan Toast Feedback
  initFormHandler() {
    const form = this.ui.form;
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault(); 
      
      // Jika form invalid secara HTML5
      if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add('was-validated');
        return;
      }

      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Mengirim...';
      
      try {
        const result = await window.ApiService.submitServiceOrder(payload);
        
        // Simpan ke local storage
        this.saveOrderToLocalStorage(payload);
        
        // Munculkan Toast
        this.showToastNotification('Sukses!', 'Permintaan layanan berhasil diproses oleh API.', 'success');
        
        form.reset();
        form.classList.remove('was-validated');
      } catch (error) {
        this.showToastNotification('Gagal!', 'Terjadi kesalahan jaringan.', 'danger');
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    });
  }

  saveOrderToLocalStorage(payload) {
    this.state.orders.push({
      ...payload,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('user_orders', JSON.stringify(this.state.orders));
    this.updateOrderBadge();
  }

  updateOrderBadge() {
    if (this.ui.orderBadge) {
      this.ui.orderBadge.textContent = this.state.orders.length;
      if (this.state.orders.length > 0) {
         this.ui.orderBadge.classList.remove('d-none');
      }
    }
  }

  showToastNotification(title, message, type = 'success') {
    const toastHtml = `
      <div class="toast align-items-center text-bg-${type} border-0 mb-2" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
          <div class="toast-body">
            <strong>${this.escapeHTML(title)}</strong> ${this.escapeHTML(message)}
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
    `;
    
    if(!this.ui.toastContainer) {
       // Buat container jika belum ada
       const container = document.createElement('div');
       container.id = 'toastContainer';
       container.className = 'toast-container position-fixed bottom-0 end-0 p-3';
       document.body.appendChild(container);
       this.ui.toastContainer = container;
    }

    this.ui.toastContainer.insertAdjacentHTML('beforeend', toastHtml);
    const toastEl = this.ui.toastContainer.lastElementChild;
    const toast = new bootstrap.Toast(toastEl, { delay: 5000 });
    toast.show();
    
    // Hapus dari DOM setelah selesai
    toastEl.addEventListener('hidden.bs.toast', () => {
      toastEl.remove();
    });
  }
}

// Inisialisasi App setelah DOM termuat
document.addEventListener('DOMContentLoaded', () => {
  window.appInstance = new App();
});
