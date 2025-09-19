async function getCountries() {
    try {
        const response = await fetch('http://localhost:5000/countries')

        if (!response.ok) {
            throw new Error('sizda malumot kelishida xatolik', response.status)
        }
        const result = await response.json()
        renderList(result)
        searchCounties(result)
        AsiaFilter(result)
        EVroFiltered(result)

    } catch (error) {
        console.error(error);
        
    }
    
}
getCountries()

const wrapper = document.getElementById('wrapper')

function renderList(item){
item.map( davlat => {
    const div = document.createElement('div')
    div.innerHTML= `

    <div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
    class="objecfit-cover"      src="${davlat.img}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${davlat.name}</h2>
    <h2 class="card-title">${davlat.capital}</h2>
    <p class="card-title">${davlat.population}</p>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
  </div>
</div>
    
    
    
    `
wrapper.appendChild(div)
})
}

const input = document.getElementById('input')
const asia = document.getElementById('asia')
const europa = document.getElementById('europa')
function searchCounties(item) {
  //wrapper.innerhtml = ''
  input.addEventListener('input', (e) =>{
  const qwerty = e.target.value.toLowerCase()
  const filtered = item.filter(dav => dav.name.toLowerCase().includes(qwerty))  
  console.log(filtered);
  wrapper.innerHTML = ``
  renderList(filtered)
  


  })
}
function EVroFiltered(item) {
    europa.addEventListener('click', () => {
        const evroDav = item.filter(dav => dav.evro === true); 
        wrapper.innerHTML = ``;
        renderList(evroDav);
    });
}

function AsiaFilter(item) {
  asia.addEventListener('click', () => {
    const evroDav = item.filter(dav => dav.evro != true)
    wrapper.innerHTML = ``
    renderList(evroDav)
  })
}