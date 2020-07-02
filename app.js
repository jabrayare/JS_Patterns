const github = new Github;
const ui = new UI;
const userInput = document.getElementById('searchUser');
userInput.addEventListener('keyup', (e) =>{
  const userText = e.target.value;
  if(userText !== ''){
  github.getUser(userText)
  .then(data => {
    if(data.profile.message === 'Not Found'){
      // show alert
      ui.showAlert('The user is not found','alert alert-danger');
    }
    else{
      // show profile
      ui.clearAlert();
      ui.showProfile(data.profile);
      ui.showRepos(data.repos);
    }
  })
}
else{
  // clear profile
  document.getElementById('profile').remove();
}
})