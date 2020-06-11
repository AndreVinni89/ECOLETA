function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((res) => {return res.json()})
    .then( states => {
        for(const state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }

    })
}

populateUFs()

function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState.text]

    const ufValue = event.target.value

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    citySelect.innerHTML = "<option value>Selecione a Cidade</option>" 
    fetch(url)
    .then((res) => {return res.json()})
    .then( cities => {
        
        for(const city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false

    })

}
    document.querySelector("select[name=uf]").addEventListener("change", getCities)

//Items de coleta

//pegar os LIs
const itemToCollect = document.querySelectorAll(".items-grid li")

for(const item of itemToCollect){
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[id=items]")

let selectedItems = []

function handleSelectedItem(){
    const itemLi = event.target

    //Alternar a cassle de selecionado Visualmente
    itemLi.classList.toggle("selected")


    //Pegando o valor do elemento
    const itemId = itemLi.dataset.id

    // console.log('Item ID: ', itemId)

    //Verificar e pegar os itens ja selecionados
    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId
        return itemFound
    })

    //Se ja estiver selecionado
    if(alreadySelected >= 0){
        //DESelecionar
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })
        selectedItems = filteredItems
    }
    //Se não estiver selecionado
    else{
        //Selecionar
        selectedItems.push(itemId)
    }
    // console.log('Selected Items: ', selectedItems)

    collectedItems.value = selectedItems

}

//testando o 