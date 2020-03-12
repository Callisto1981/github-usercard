/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];
followersArray.forEach(element => {
  axios
    .get(`https://api.github.com/users/${element}`)
    .then(response => {
      console.log(response.data);
      mainCard.append(cardData(response.data));
    })
    .catch(error => {
      console.log("error", error);
    });
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
const mainCard = document.querySelector(".cards");

axios
  .get("https://api.github.com/users/Callisto1981")
  .then(response => {
    mainCard.append(cardData(response.data));
  })
  .catch(error => {
    //console.log("The data was not returned", error);
  });

function cardData(obj) {
  const card = document.createElement("div"),
    image = document.createElement("img"),
    info = document.createElement("div"),
    name = document.createElement("h3"),
    username = document.createElement("p"),
    location = document.createElement("p"),
    profile = document.createElement("p"),
    address = document.createElement("a"),
    followers = document.createElement("p"),
    following = document.createElement("p"),
    bio = document.createElement("p");

  image.src = obj.avatar_url;
  name.textContent = obj.name;
  username.textContent = obj.login;
  location.textContent = "Location: " + obj.location;
  profile.textContent = obj.profile;
  address.textContent = "Location: " + obj.html_url;
  followers.textContent = "Followers: " + obj.followers;
  following.textContent = "Following: " + obj.following;
  bio.textContent = "Bio: " + obj.bio;

  card.classList.add("card");
  image.classList.add("image");
  info.classList.add("card-info");
  name.classList.add("name");
  username.classList.add("username");
  location.classList.add("location");
  profile.classList.add("profile");
  address.classList.add("address");
  followers.classList.add("followers");
  following.classList.add("following");
  bio.classList.add("bio");

  card.append(image);
  card.append(info);

  info.append(name);
  info.append(username);
  info.append(location);
  info.append(profile);

  profile.append(address);

  info.append(followers);
  info.append(following);
  info.append(bio);

  return card;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
