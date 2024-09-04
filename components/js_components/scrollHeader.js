// ---------------------------------------------------------------------------------------------------------------
// Для коректної роботи хедер має мати клас .header, position: fixed, і решту стилів які прописані в темі 
// саме для хедера
// ---------------------------------------------------------------------------------------------------------------
export function initScrollControlledHeader() {
    let lastScrollTop = 0;
  
    window.addEventListener('scroll', () => {
      const { scrollTop } = document.documentElement;
      document.querySelector('.header').style.top = (scrollTop > lastScrollTop) ? '-80px' : '0';
      lastScrollTop = scrollTop;
    });
  }
// ---------------------------------------------------------------------------------------------------------------
