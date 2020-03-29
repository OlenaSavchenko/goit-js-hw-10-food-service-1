class Theme {
  LIGHT = 'light-theme';
  DARK = 'dark-theme';
  classList = document.body.classList;
  control = document.querySelector('#theme-switch-control');

  addListener() {
    this.control.addEventListener('change', this.onControlClick.bind(this));
  }
  saveTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.className = savedTheme;
    }
    if (document.body.className.indexOf(this.DARK) > -1) {
      this.control.setAttribute('checked', 'true');
    }
  }
  handleTheme(currentTheme) {
    localStorage.setItem('theme', currentTheme);
  }

  onControlClick() {
    if (document.body.className.indexOf(this.LIGHT) > -1) {
      this.classList.remove(this.LIGHT) & this.classList.add(this.DARK);
    } else {
      this.classList.remove(this.DARK) & this.classList.add(this.LIGHT);
    }
    this.handleTheme(this.classList.value);
  }
}
const themeClass = new Theme();

themeClass.addListener();
themeClass.saveTheme();
