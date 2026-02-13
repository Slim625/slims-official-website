document.addEventListener('DOMContentLoaded', () => {
    // Get the current year dynamically
    const currentYear = new Date().getFullYear();
    const copyright = `© ${currentYear} SlimExtraterrestrial. All rights reserved. Licensed under Apache 2.0.`;

    // Update all elements with id="copyright"
    const updateCopyrightYear = document.querySelectorAll('#copyright');
    updateCopyrightYear.forEach(paragraph => {
        paragraph.textContent = copyright;
    });

    // Get the current date (month/day/year)
    const now = new Date();
    const formattedDate = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
    const updated = `Last Updated ${formattedDate}`;

    // Update all elements with id="updated"
    const lastUpdatedDate = document.querySelectorAll('#updated');
    lastUpdatedDate.forEach(paragraph => {
        paragraph.textContent = updated;
    });
});