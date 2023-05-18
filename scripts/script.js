// IMDb API'sinden veri çekme işlemi
async function fetchData() {
    try {
      const response = await axios.get('https://imdb-api.com/{API_ENDPOINT}');
      const data = response.data;
      showResults(data); // Alınan verileri işle ve göster fonksiyonuna gönder
    } catch (error) {
      console.error(error);
    }
  }
  
  // Alınan verileri işle ve göster
  function showResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
  
    const groupedData = groupData(data); // Verileri grupla
  
    for (const [category, items] of Object.entries(groupedData)) {
      const categoryHeading = document.createElement('h2');
      categoryHeading.textContent = category;
      resultsDiv.appendChild(categoryHeading);
  
      const categoryList = document.createElement('ul');
  
      for (const item of items) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <img src="${item.image}" alt="${item.title}">
        `;
        categoryList.appendChild(listItem);
      }
  
      resultsDiv.appendChild(categoryList);
    }
  }
  
  // Verileri kategoriye göre grupla
  function groupData(data) {
    const groupedData = {};
  
    for (const item of data) {
      const category = item.category;
      if (!groupedData[category]) {
        groupedData[category] = [];
      }
      groupedData[category].push(item);
    }
  
    return groupedData;
  }
  
  // Sayfa yüklendiğinde verileri çek
  window.addEventListener('load', () => {
    fetchData();
  });
  