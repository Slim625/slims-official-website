document.addEventListener('DOMContentLoaded', () => {
    const copyright = "Copyright © 2026 SlimExtraterrestrial. Licensed under Apache 2.0.";
    const updateCopyrightYear = document.querySelectorAll('#copyright');

    const lastUpdatedDate = "Last Updated 2/13/2026"; // <-- manually set the upload date
    const lastUpdatedElements = document.querySelectorAll('#updated');

    updateCopyrightYear.forEach(el => el.textContent = copyright);
    lastUpdatedElements.forEach(el => el.textContent = lastUpdatedDate);

});
