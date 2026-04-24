export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offsetTop = element.offsetTop - 80; // Account for fixed header
    
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
};