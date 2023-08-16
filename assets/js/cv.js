document.getElementById("downloadCV").addEventListener("click", function() {
    // Replace 'your-cv-url.pdf' with the actual URL of your CV PDF file
    const cvUrl = 'myCV.pdf';
    
    // Create a temporary link element to trigger the download
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'myCV.pdf'; // Change the filename if needed
    link.target = '_blank'; // Open the link in a new tab
    link.style.display = 'none';
    
    // Append the link to the document and simulate a click
    document.body.appendChild(link);
    link.click();
    
    // Clean up by removing the link element
    document.body.removeChild(link);
});