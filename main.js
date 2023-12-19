$(document).ready(function(){
    const endpoint = 'https://api.github.com/users/ViniciuMota';
    
    fetch(endpoint)
    .then(function(resp){
        return resp.json();
    })
    .then(function(json){
        $('.profile-avatar').attr('src',json.avatar_url);
        $('.profile-name').text(json.name);
        $('.profile-username').text(`@${json.login}`);
        $('.repositorios-item').text(json.public_repos)
        $('.seguidores-item').text(json.followers)
        $('.seguindo-item').text(json.following)
        $('.profile-link').attr('href', json.html_url);
    })
    .catch(function(error){
        alert("Ocorreu um erro ao buscar o endereço")
    })
})