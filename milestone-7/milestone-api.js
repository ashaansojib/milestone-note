// fetch data as api from my local json file
fetch('milestone-7/milestone-7.json')
.then(res => res.json())
.then(data => loadData(data.mileStoneSeven))

// load that data on a button
const loadData = data =>{
    const container = document.getElementById("sidebar-toggle");
    data.forEach(singleData =>{
        // console.log(singleData)
        const div = document.createElement('div');
        div.classList.add('hover-bordered', 'my-1')
        div.innerHTML = `
        <li onclick="loadDisplayData('${singleData.id}')" data-bs-toggle="modal" data-bs-target="#staticBackdrop">${singleData.name}</li>
        `;
        container.appendChild(div);
    });
}
// fetch data by passing id to display details on modal ui
const loadDisplayData = id =>{
    const url = `milestone-7/mSeven${id}.json`
    fetch(url)
    .then(res => res.json())
    .then(data => displayModal(data))
}
// modal details
const displayModal = data =>{
    console.log(data.milestoneSeven.name)
    const container = document.getElementById("modal-content");
    const createDiv = document.createElement("div");
    createDiv.innerHTML  = `
    <h2>${data.name}</h2>
    `;
    container.appendChild(createDiv);
}