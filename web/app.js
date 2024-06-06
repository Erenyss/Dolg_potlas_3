document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = '/api/countries.json';

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Hiba');
        }
        return response.json();
    })
    .then(data => {
        const tableBody = document.querySelector('#countBody');
        data.forEach(country => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${country.id}</td>
                <td>${country.name}</td>
                <td>${country.capital}</td>
                <td>${country.population}</td>
                <td>${country.area}</td>
            `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Api error', error));
});
