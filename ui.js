class UI{
  constructor(){
    this.profile = document.getElementById('profile');
  }
  // Display user profile in UI.
  showProfile(user){
    this.profile.innerHTML = `
    <div class = "card card-body mb-3">
      <div class = "row">
        <div class = "col-md-3">
        <img class = "img-fluid mb-2" src = "${user.avatar_url}">
        <a href = "${user.html_url}" target = "_blank" class = "btn btn-primary btn-block mb-4"> View Profile </a>
        </div>
      <div class = "col-md-9">
      <span class = "badge badge-primary"> Public Repos: ${user.public_repos}</span>
      <span class = "badge badge-secondary"> Public Gists: ${user.public_gists}</span>
      <span class = "badge badge-success"> Flowers: ${user.followers}</span>
      <span class = "badge badge-info"> Flowing: ${user.following}</span>
      <br><br>
      <ul class = "list-group">
        <li class = "list-group-item">company: ${user.company}</li>
        <li class = "list-group-item">Blog: ${user.blog}</li>
        <li class = "list-group-item">Location: ${user.location}</li>
        <li class = "list-group-item">Member Since: ${user.created_at}</li>
      </div>
      </div>
    </div>
    <h3 class = "page-heading mb-3"> Lastest Repos</h3>
    <div id = "repos"></div>
    `
  }
  // show repos.
  showRepos(user){
    let output = '';
    user.forEach(element => {
      output += `
        <div class = "card card-body mb-2">
          <div class = "row">
            <div class = "col-md-6">
              <a href = "${element.html_url}" target = "_blank"> ${element.name}</a>
            </div>
            <div class = "col-md-6">
              <span class = "badge badge-primary"> stars: ${element.stargazers_count}</span>
              <span class = "badge badge-secondary"> Watchers: ${element.watchers_count}</span>
              <span class = "badge badge-success"> forks: ${element.forks_count}</span>
              </div>
          </div>
        </div>
      `
    });
    document.getElementById('repos').innerHTML = output;
  }
  // Displays alert message.
  showAlert(msg,className){
    //clear remaining alerts.
    this.clearAlert();
    const container = document.querySelector('.searchContainer');
    console.log(container);
    const div = document.createElement('div');
    div.className = `${className}`
    div.appendChild(document.createTextNode(msg));
    const search = document.querySelector('.search')
    container.insertBefore(div,search);

    //Time out after 3 seconds.
   setTimeout(()=>{
      this.clearAlert();
   },2000)
  }

  //Clear alert message.
  clearAlert(){
    const currentAlert = document.querySelector('.alert');
    if(currentAlert){
      currentAlert.remove();
    }
  }
  
}