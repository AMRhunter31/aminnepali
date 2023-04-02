fetch('./files/')
  .then(response => response.text())
  .then(data => {
    const files = data.split('\n').filter(file => file.trim() !== '');
    const list = document.getElementById('file-list');

    files.forEach(file => {
      const div = document.createElement('div');
      div.classList.add('file');

      const link = document.createElement('a');
      link.href = `./files/${file}`;
      link.setAttribute('download', '');
      
      const icon = document.createElement('span');
      icon.classList.add('file-icon');
      icon.textContent = '📎';

      const name = document.createElement('span');
      name.classList.add('file-name');
      name.textContent = file;

      const button = document.createElement('button');
      button.textContent = 'Download';

      link.appendChild(icon);
      link.appendChild(name);
      div.appendChild(link);
      div.appendChild(button);
      list.appendChild(div);

      button.addEventListener('click', (event) => {
        event.stopPropagation();
        button.disabled = true;
        fetch(`./files/${file}`)
          .then(response => response.blob())
          .then(blob => {
            const objectUrl = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = objectUrl;
            a.download = file;
            a.click();
            URL.revokeObjectURL(objectUrl);
            button.disabled = false;
          })
          .catch(error => {
            console.error(error);
            button.disabled = false;
          });
      });
    });
  })
  .catch(error => {
    console.error(error);
  });
