function loadBooks() {
  fetch("http://localhost:5007/swagger/index.html")
    .then(r => r.json())
    .then(data => {
      const list = document.getElementById("list");
      list.innerHTML = "";
      data.forEach(b => {
        const li = document.createElement("li");
        li.textContent = b.title;
        list.appendChild(li);
      });
    });
}