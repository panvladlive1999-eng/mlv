// Данные публикаций
const publications = [
  {
    journal: "MALVIE",
    date: "Сентябрь 2024",
    pages: 6,
    soldPrint: 750,
    soldDigital: 750,
    printPrice: 34.99,
    digitalPrice: 14.99,
    authorSharePercent: 5 // 5%
  },
  {
    journal: "Artego",
    date: "Октябрь 2025",
    pages: 6,
    soldPrint: 500,
    soldDigital: 500,
    printPrice: 15,
    digitalPrice: 10,
    authorSharePercent: 5 // 5%
  }
];

// Заполнение таблицы публикаций
const tableBody = document.getElementById("publications-table");
let totalRevenue = 0;

publications.forEach(pub => {
  const revenue = pub.soldPrint * pub.printPrice + pub.soldDigital * pub.digitalPrice;
  const authorShare = revenue * (pub.authorSharePercent / 100);
  totalRevenue += revenue;

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${pub.journal}</td>
    <td>${pub.date}</td>
    <td>${pub.pages}</td>
    <td>${pub.soldPrint}/${pub.soldDigital}</td>
    <td>${pub.authorSharePercent}%</td>
    <td>$${authorShare.toFixed(2)}</td>
  `;
  tableBody.appendChild(row);
});

// Заполнение общей статистики
document.getElementById("total-publications").textContent = publications.length;
document.getElementById("total-revenue").textContent = totalRevenue.toFixed(2);
document.getElementById("average-share").textContent = (totalRevenue * 0.05 / publications.length).toFixed(2);
document.getElementById("copies-sold").textContent = publications.reduce((sum, p) => sum + p.soldPrint + p.soldDigital, 0);
