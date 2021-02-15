let roomContainer = document.querySelector(".room-pics");

roomPics.forEach(image => {
  let pic = image.img;
  let desc = image.desc;

  roomContainer.innerHTML += `
  <div class="image">
          <img src="Assets/Images/Renderi/${pic}.jpg" alt="Brainster" />
          <p>${desc}</p>
        </div>
  `;
});
