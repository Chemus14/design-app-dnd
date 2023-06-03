const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    openTab(target);
  });
});

// Show 'personal-info' content by default
openTab('personal-info');

function openTab(tabName) {
  tabContents.forEach((tabContent) => {
    tabContent.style.display = 'none';
  });

  tabs.forEach((tab) => {
    tab.classList.remove('active');
  });

  const selectedTab = document.getElementById(tabName);
  selectedTab.style.display = 'block';
  selectedTab.scrollIntoView({ behavior: 'smooth' });

  const selectedTabButton = document.querySelector(
    `.tab[data-tab="${tabName}"]`
  );
  selectedTabButton.classList.add('active');
}
