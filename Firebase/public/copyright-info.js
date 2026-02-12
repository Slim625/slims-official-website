document.addEventListener('DOMContentLoaded', () => {
    const copyright = "© 2026 SlimExtraterrestrial. All rights reserved. Licenced under Apache 2.0.";
    const updateCopyrightYear = document.querySelectorAll('#copyright');

    const updated = "Last Updated 2/8/26, 12:11 PM CDT";
    const lastUpdatedDate = document.querySelectorAll('#updated');

    updateCopyrightYear.forEach(paragraph => {
        paragraph.textContent = copyright;
    });

    lastUpdatedDate.forEach(paragraph => {
        paragraph.textContent = updated;
    });

});
