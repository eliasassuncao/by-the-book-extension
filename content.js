setTimeout(() => {
  const columnListCards = document.querySelectorAll('.list-cards')
  var result = ''
  
  const valueByLetter = function (nameCard) {
    const hours = {
      PP: 2,
      P: 4,
      M: 8,
      G: 12
    }
    const valueCard = nameCard.split(" ")[0].replace(/[^a-zA-Z ]/g, "")
  
    return hours[valueCard] ? hours[valueCard] : 0
  }
  
  columnListCards.forEach((itemDiv, index) => {
    const card = itemDiv.querySelectorAll('.list-card-title')
    let totalHours = 0
  
    card.forEach(item => totalHours += valueByLetter(item.innerText))
    result = result + `\nColuna ${index + 1} = ${totalHours} horas.`
  })
  
  alert(result)
  
}, 5000)
