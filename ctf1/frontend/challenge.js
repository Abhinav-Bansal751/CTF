document.getElementById('viewFile').addEventListener('click', async () => {
    const fileName = document.getElementById('fileInput').value;

    if (!fileName) {
        alert('Please enter a filename');
        return;
    }

    try {
        const response = await fetch(`/view?file=${encodeURIComponent(fileName)}`);
        const text = await response.text();

        if (response.ok) {
            document.getElementById('fileOutput').textContent = text;
        } else {
            document.getElementById('fileOutput').textContent = 'Error: ' + text;
        }
    } catch (error) {
        document.getElementById('fileOutput').textContent = 'Failed to fetch file.';
    }
});
