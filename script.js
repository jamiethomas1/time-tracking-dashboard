fetch('./data.json').then((request) => {  
  if(!request.ok) {
    console.log('Oops! Something went wrong.');
    return null;
  }
  
  return request.json();
}).then(data => processData(data))

const processData = data => {
    let viewLinks = document.getElementById('view-links')
    const cards = document.querySelectorAll('.card')

    cards.forEach(card => addCard(card, data))
}

const addCard = (card, data) => {
    const title = card.querySelector('.card__title').innerText

    const cardData = data.find(item => item.title === title)

    const hours = card.querySelector('.card__hours')
    hours.innerText = `${cardData.timeframes.weekly.current}hrs`

    const lwHours = card.querySelector('.card__text')
    lwHours.innerText = `Last Week - ${cardData.timeframes.weekly.previous}hrs`
}

