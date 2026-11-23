(function(){
var r=document.documentElement;try{var t=localStorage.getItem("theme");if(t)r.dataset.theme=t}catch(e){}
document.getElementById("theme-btn").onclick=function(){var n=r.dataset.theme==="dark"?"light":"dark";r.dataset.theme=n;try{localStorage.setItem("theme",n)}catch(e){}};
var m=document.getElementById("menu-btn"),nav=document.getElementById("nav");
m.onclick=function(){var o=nav.classList.toggle("open");m.setAttribute("aria-expanded",o)};
var fb=document.querySelectorAll(".filters button");fb.forEach(function(b){b.onclick=function(){fb.forEach(function(x){x.classList.toggle("on",x===b)});document.querySelectorAll(".mod[data-cat]").forEach(function(c){c.hidden=b.dataset.f!=="all"&&c.dataset.cat!==b.dataset.f})}});
var QZ={
python:[["Quel mot-clé définit une fonction en Python ?",["def","function","func"],0],["Que renvoie 7 // 2 ?",["3.5","3","4"],1],["En Python, qu'est-ce qui délimite un bloc de code ?",["L'indentation","Des accolades { }","Un point-virgule"],0],["Quelle boucle parcourt les éléments d'une liste ?",["for","repeat","loop"],0]],
c:[["Quelle fonction affiche du texte en C ?",["print()","printf()","echo()"],1],["Que désigne &x ?",["La valeur de x","L'adresse de x","Le type de x"],1],["Un tableau de 5 éléments a pour indices…",["1 à 5","0 à 4","0 à 5"],1],["Une instruction C se termine par…",["un point","un point-virgule","rien"],1]],
algo:[["La recherche dichotomique exige un tableau…",["trié","de nombres pairs","de taille 10"],0],["Sa complexité est de l'ordre de…",["O(n)","O(log n)","O(n²)"],1],["Le tri à bulles…",["échange des voisins mal ordonnés","coupe le tableau en deux","cherche le maximum seulement"],0],["Pour trouver le maximum, on…",["trie puis prend le milieu","parcourt le tableau en gardant le plus grand","prend le premier élément"],1]],
os:[["Le noyau (kernel) sert à…",["dessiner les icônes","gérer les ressources matérielles","écrire des documents"],1],["Quelle commande Linux liste les fichiers ?",["ls","cd","rm"],0],["pwd affiche…",["le mot de passe","le répertoire courant","les processus"],1],["Un processus est…",["un programme en cours d'exécution","un fichier sur le disque","une carte mère"],0]],
archi:[["Combien de bits dans un octet ?",["4","8","16"],1],["Que vaut F en hexadécimal ?",["10","15","16"],1],["Une porte ET donne 1 quand…",["une entrée vaut 1","les deux entrées valent 1","aucune entrée ne vaut 1"],1],["Que vaut 101 en binaire ?",["3","5","7"],1]]};
var q=document.getElementById("quiz");if(!q)return;
var Q=QZ[q.dataset.q]||[["Un mot de passe solide est…",["court et facile à retenir","long, unique, dans un gestionnaire"],1],
["Un message urgent de votre « banque » avec un lien : que faire ?",["Cliquer vite","Ne pas cliquer, aller sur le site officiel"],1],
["La double authentification sert à…",["Ajouter une 2e preuve d'identité","Accélérer la connexion"],0],
["Un ransomware…",["chiffre vos fichiers contre rançon","ralentit seulement le Wi-Fi"],0],
["Les mises à jour…",["corrigent des failles de sécurité","sont inutiles"],0]];
var i=0,s=0;function show(){if(i>=Q.length){q.innerHTML="<h3>Score : "+s+" / "+Q.length+"</h3><button id=rs>Recommencer</button>";document.getElementById("rs").onclick=function(){i=0;s=0;show()};return}
var d=Q[i];q.innerHTML="<p><b>"+(i+1)+". "+d[0]+"</b></p>";
d[1].forEach(function(o,k){var b=document.createElement("button");b.className="opt";b.textContent=o;b.onclick=function(){
if(k===d[2]){s++;b.classList.add("ok")}else b.classList.add("ko");
q.querySelectorAll(".opt").forEach(function(x){x.disabled=true});setTimeout(function(){i++;show()},900)};q.appendChild(b)})}
show()})();