document.addEventListener('DOMContentLoaded', function () {
    const dropdownBtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
  
    dropdownBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      dropdownContent.style.display =
        dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
  
    // Close dropdown on outside click
    window.addEventListener('click', function () {
      dropdownContent.style.display = 'none';
    });
  });

