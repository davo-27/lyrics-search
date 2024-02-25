const artistInput = document.getElementById("artistName");
const songInput = document.getElementById("songName");
const form = document.getElementById("lyricsForm");
const output = document.querySelector('.lyrics-output pre');
const btn = document.querySelector('.fetchBtn');
const loading = document.querySelector('.loading');

btn.addEventListener('click', ()=>{

    if(artistInput.value !== "" && songInput.value !== ""){
      loading.style.opacity = "1"
     fetch(`https://api.lyrics.ovh/v1/${artistInput.value}/${songInput.value}`)
     .then(response => response.json())
     .then(data => {
        if(data.lyrics !== undefined){
            output.innerHTML = data.lyrics
        }else{
            output.innerHTML = `NO lyrics found for the enterde data`
        }
        loading.style.opacity = '0'

        document.querySelector('.lyrics-output').style.opacity = '1'
     })
    }
   

})
