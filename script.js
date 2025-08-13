document.addEventListener("DOMContentLoaded", () => {
  const icecreamSection = document.getElementById("icecream-section");

  const icecreams = [
    { name: "Strawberry Bliss",price: "$4.50", img: "https://images.unsplash.com/photo-1618485476424-7dc9cd512c08?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Chocolate Heaven",price: "$5.00", img: "https://images.unsplash.com/photo-1560252116-0c0d45fffdf3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Vanilla Dream",price: "$4.00", img: "https://images.unsplash.com/photo-1560008581-09826d1de69e?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Minty Fresh",price: "$4.75", img: "https://images.unsplash.com/photo-1558586538-5d88218be34c?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Mango Tango",price: "$4.25", img: "https://images.unsplash.com/photo-1591677445539-840cc64705f3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ];

  function renderIcecreams() {
      icecreamSection.innerHTML = "";
      icecreams.forEach(icecream => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <img src="${icecream.img}" alt="${icecream.name}">
          <h3>${icecream.name}</h3>
          <p>${icecream.price}</p>
          <button>Buy</button>
        `;

        icecreamSection.appendChild(card);
      });
    }

    document.getElementById("explore-btn").addEventListener("click", () => {
      window.scrollTo({ top: icecreamSection.offsetTop, behavior: "smooth" });
    });

    renderIcecreams();
  
});