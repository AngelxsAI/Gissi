// Datos de preguntas y respuestas con links reales
const data={
"Como me llamo":{answer:"Mi nombre es Ángel, o YOUR BOYFRIEND ❤️<br>Soy tu novio Gissi 💖", background:"linear-gradient(120deg,#ff7eb3,#ff758c)", music:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", gif:"https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"},
"Edad de Ángel":{answer:"Tengo 14 años 🎉", background:"linear-gradient(120deg,#43cea2,#185a9d)", music:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"},
"Apodo de Ángel":{answer:"Me llaman Ferchis o Angelito", background:"linear-gradient(120deg,#f7971e,#ffd200)", music:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"},
"Pareja de Ángel":{answer:"Mi pareja es Gissela ❤️", background:"linear-gradient(120deg,#f953c6,#b91d73)", music:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"},
"Apodo de mi pareja":{answer:"La llamo Gissi o Mi niña", background:"linear-gradient(120deg,#ff6a00,#ee0979)", music:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"},
"Canciones favoritas":{answer:"Mis canciones favoritas son:<br><a href='https://www.youtube.com/watch?v=EgqUJOudrcM' target='_blank'>Die for You - The Weeknd</a><br><a href='https://www.youtube.com/watch?v=pok8H_KF1FA' target='_blank'>As It Was - Harry Styles</a>", background:"linear-gradient(120deg,#1f4037,#99f2c8)", music:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"},
"Películas favoritas":{answer:"Jurassic Park, Jurassic Park 2, Jurassic Park 3, Jurassic World, Exterminio 1,2,3, Camino hacia el terror", background:"linear-gradient(120deg,#8e0e00,#1f1c18)", music:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"},
"Series favoritas":{answer:"Stranger Things, The Walking Dead, Gravity Falls", background:"linear-gradient(120deg,#2980b9,#6dd5fa)", music:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"},
"Animales favoritos":{answer:"Perros 🐶 y gatos 🐱<br><img class='gif' src='https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif'><br>Nyan Cat 🐱🌈", background:"linear-gradient(120deg,#f46b45,#eea849)", music:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"},
"Color favorito de Ángel":{answer:"Rosa, amarillo, azul, negro y morado 🎨", background:"linear-gradient(120deg,#7b4397,#dc2430)"},
"Comida favorita de Ángel":{answer:"Pizza, pupusas, tortas, burritos, tacos, carne de soya, pollo, sopas 🍕🌮", background:"linear-gradient(120deg,#f7971e,#ffd200)"},
"Persona favorita en el mundo":{answer:"Mi novia (Gissi) y nuestros bebés ❤️", background:"linear-gradient(120deg,#ff7eb3,#ff758c)"},
"Hobby de Ángel":{answer:"Escuchar música y hablar con mi niña 🎧💬", background:"linear-gradient(120deg,#43cea2,#185a9d)"},
"Como Ángel imagina a sus hijos en 10 años":{answer:"Ehh, no habrán nacido o serán bebés 🍼", background:"linear-gradient(120deg,#f953c6,#b91d73)"},
};

// Historial
let recientes=[];
const input=document.getElementById("search");
const suggestionsBox=document.getElementById("suggestions");
const recentBox=document.getElementById("recent");
const resultBox=document.getElementById("result");
const music=document.getElementById("bgMusic");

// Autocompletado
input.addEventListener("input",()=>{
  const query=input.value.toLowerCase();
  suggestionsBox.innerHTML="";
  if(query){
    const suggestions=Object.keys(data).filter(q=>q.toLowerCase().includes(query));
    suggestions.forEach(s=>{
      const div=document.createElement("div");
      div.textContent=s;
      div.onclick=()=>selectSearch(s);
      suggestionsBox.appendChild(div);
    });
  }
});

// Seleccionar pregunta
function selectSearch(query){
  input.value=query;
  const item=data[query];
  if(item){
    document.body.classList.add("transition");
    document.body.style.background=item.background;
    typeWriter(item.answer);
    // Música
    if(item.music){music.src=item.music; music.play();}
    // Historial
    if(!recientes.includes(query)){recientes.unshift(query); if(recientes.length>5) recientes.pop(); renderRecientes();}
  }else{resultBox.textContent="No tengo respuesta para eso 😅";}
  suggestionsBox.innerHTML="";
}

// Historial
function renderRecientes(){
  recentBox.innerHTML="<b>Búsquedas recientes:</b>";
  recientes.forEach(r=>{
    const div=document.createElement("div");
    div.textContent=r;
    div.onclick=()=>selectSearch(r);
    recentBox.appendChild(div);
  });
}

// Máquina de escribir
function typeWriter(text){
  resultBox.innerHTML="";
  let i=0;
  function type(){ 
    if(i<text.length){
      resultBox.innerHTML+=text.charAt(i);
      i++;
      setTimeout(type,20);
    }
  }
  type();
}

// Corazones flotando
setInterval(()=>{
  const heart=document.createElement("div");
  heart.className="heart";
  heart.style.left=Math.random()*window.innerWidth+"px";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),5000);
},500);

// Nyan Cat flotando
const nyan=document.createElement("img");
nyan.src="https://media.giphy.com/media/sIIhZliB2McAo/giphy.gif";
nyan.style.position="fixed"; nyan.style.bottom="0"; nyan.style.left="0"; nyan.style.width="100px"; nyan.style.zIndex="1000";
document.body.appendChild(nyan);