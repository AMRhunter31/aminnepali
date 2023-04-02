fetch("./files/")
  .then(response => response.text())
  .then(data => {
    const files = data.split("\n").filter(file => file.trim() !== "");
    const list = document.getElementById("file-list");

    files.forEach(file => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = `./files/${file}`;
      const icon = document.createElement("span");
      icon.classList.add("file-icon");
      icon.textContent = "📂";
      const name = document.createElement("span");
      name.textContent = file;
      const size = document.createElement("span");
      size.classList.add("file-size");
      fetch(`./files/${file}`)
        .then(response => response.headers.get('content-length'))
        .then(sizeInBytes => {
          size.textContent = `${(sizeInBytes/1024).toFixed(2)} KB`;
        })
        .catch(error => {
          console.error(error);
          size.textContent = "unknown";
        });
      link.appendChild(icon);
      link.appendChild(name);
      li.appendChild(link);
      li.appendChild(size);
      list.appendChild(li);
    });
  })
  .catch(error => {
    console.error(error);
  });
