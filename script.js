const navLinks = document.querySelectorAll('.nav-item:not(.dropdown)')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.hide() })
})

window.onscroll = function() {
  // Select the collapsible part of your navbar
  var navCollapse = document.querySelector('.navbar-collapse');

  // Check if the navbar is currently shown (expanded)
  if (navCollapse.classList.contains('show')) {
    // Use Bootstrap's built-in Collapse constructor to hide it
    var bootstrapCollapse = new bootstrap.Collapse(navCollapse, {
      toggle: false
    });
    bootstrapCollapse.hide();
  }
};
