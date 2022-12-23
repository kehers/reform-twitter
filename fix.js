function removeViews () {
  const views = document.querySelectorAll('div[role=group] a[aria-label*=analytics]')
  views.forEach((view) => {
    view.parentNode.style.display = 'none'
  })
}
const observer = new window.MutationObserver((mutations) => {
  removeViews()
})
observer.observe(document.body, {
  subtree: true,
  childList: true
})

removeViews()
