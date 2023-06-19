const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('a[href^="#"]');

const inView = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
};

const updateActiveLink = () => {
  let activeLink = null;

  sections.forEach((section) => {
    const link = document.querySelector(`a[href='#${section.id}']`);

    if (inView(section) && !activeLink) {
      activeLink = link;
    }

    link.classList.remove('active');
  });

  if (activeLink) {
    activeLink.classList.add('active');
  }
};

window.addEventListener('scroll', updateActiveLink);
