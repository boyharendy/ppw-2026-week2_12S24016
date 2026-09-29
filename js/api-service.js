// api-service.js: Data Access Layer
class ApiService {
  /**
   * Mengambil data secara asinkron dari URL tertentu dengan penanganan error.
   * @param {string} url - URL path dari data JSON
   * @returns {Promise<any>}
   */
  static async fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
      }
      return await response.json();
    } catch (err) {
      console.error(`[API Network Error] saat memuat ${url}:`, err);
      throw err;
    }
  }

  static async getProjects() {
    return this.fetchData('./data/projects.json');
  }

  static async getServices() {
    return this.fetchData('./data/services.json');
  }

  static async getProfile() {
    return this.fetchData('./data/profile.json');
  }

  /**
   * Mensimulasikan pengiriman data form (Decoupled Form REST Dispatch)
   * @param {Object} payload - Data form
   */
  static async submitServiceOrder(payload) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: 'success',
          message: 'Data berhasil diproses',
          data: payload
        });
      }, 1500); // Simulasi delay jaringan
    });
  }
}

// Export jika menggunakan module (walaupun di browser biasa kita load via script tag, 
// namun demi keamanan kita asumsikan sebagai global object)
window.ApiService = ApiService;
