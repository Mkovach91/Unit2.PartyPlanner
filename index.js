const eventLi = document.querySelector(`ul`)

document.addEventListener(`DOMContentLoaded` , async () => {
  const eventURL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-ftb-et-web-ft/events`;
  
  const eventData = async () => {
    try{
      const response = await fetch(eventURL);
      const result = await response.json();
        if (result.success) {
          renderEvent(result.data); 
        } else {
          alert(`Error: ${result.error.name} - ${result.error.message}`);
        }
      } catch (error) {
        alert(`Error retrieving event information` , error);
      }
    };

 eventData();
})

const renderEvent = (events) => {
  events.forEach(event => {
    const eventListLi = document.createElement(`li`);

    eventListLi.innerHTML = `
      <h3>${event.name}</h3>
      <p>ID: ${event.id}</p>
      <p>Date: ${event.date}</p>
      <p>Time: ${event.time}</p>
      <p>Location: ${event.location}</p>
      <p>Description: ${event.description}</p>
    `;
    
    eventLi.appendChild(eventListLi);
  }); 
  
}