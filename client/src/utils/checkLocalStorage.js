export default function checkLocalStorage() {
  const currentLanguage = localStorage.getItem('language');

  if (!currentLanguage) {
    localStorage.setItem('language', 'en');
  }

  return currentLanguage;
}
