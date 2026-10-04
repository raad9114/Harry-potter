"use strict";

/* 1. Data sources */
const houses = [
  {id:"gryffindor",name:"Gryffindor",founder:"Godric Gryffindor",values:["Courage","Bravery","Nerve","Chivalry"],colors:"Scarlet and gold",animal:"Lion",symbol:"♌",crest:"assets/images/House of Lion.webp",element:"Fire",commonRoom:"Gryffindor Tower",ghost:"Nearly Headless Nick",description:"A house for those who meet uncertainty with heart, courage, and daring.",history:"Founded by Godric Gryffindor, the house prizes bold action tempered by honour. Its tower common room looks across the school grounds.",members:["Harry Potter","Hermione Granger","Ron Weasley","Minerva McGonagall"],color:"#c4433e"},
  {id:"slytherin",name:"Slytherin",founder:"Salazar Slytherin",values:["Ambition","Resourcefulness","Determination","Leadership"],colors:"Green and silver",animal:"Serpent",symbol:"♐",crest:"assets/images/House of Serpent.webp",element:"Water",commonRoom:"The dungeons beneath the Black Lake",ghost:"The Bloody Baron",description:"A house of focused minds, self-mastery, adaptability, and far-reaching ambition.",history:"Salazar Slytherin established a tradition of cunning and determination. Its submerged-windowed common room has a cool, mysterious calm.",members:["Severus Snape","Draco Malfoy","Horace Slughorn","Regulus Black"],color:"#2e9b69"},
  {id:"ravenclaw",name:"Ravenclaw",founder:"Rowena Ravenclaw",values:["Intelligence","Creativity","Wisdom","Curiosity"],colors:"Blue and bronze",animal:"Eagle",symbol:"♒",crest:"assets/images/House of Eagle.webp",element:"Air",commonRoom:"Ravenclaw Tower",ghost:"The Grey Lady",description:"A house where original thought, learning, wit, and wonder find a home.",history:"Founded by Rowena Ravenclaw, the house celebrates minds that travel beyond the obvious. Its airy tower rewards those who can answer a riddle.",members:["Luna Lovegood","Cho Chang","Filius Flitwick","Padma Patil"],color:"#5685cb"},
  {id:"hufflepuff",name:"Hufflepuff",founder:"Helga Hufflepuff",values:["Loyalty","Patience","Fairness","Dedication"],colors:"Yellow and black",animal:"Badger",symbol:"♉",crest:"assets/images/House of Badger.webp",element:"Earth",commonRoom:"Near the Hogwarts kitchens",ghost:"The Fat Friar",description:"A warm-hearted house built on steadfastness, fair play, and faithful work.",history:"Helga Hufflepuff welcomed students others overlooked and valued honest effort. Its round, sunlit common room feels close to the earth.",members:["Cedric Diggory","Nymphadora Tonks","Pomona Sprout","Newt Scamander"],color:"#dda936"}
];

const characters = [
  ["harry","Harry Potter","Gryffindor","The Boy Who Lived","Human","Stag","Holly, phoenix feather","A courageous young wizard whose choices and friendships shape the struggle against Voldemort.","alive","HP"],
  ["hermione","Hermione Granger","Gryffindor","Brightest Witch of Her Age","Human","Otter","Vine, dragon heartstring","A brilliant and principled witch whose preparation is matched by fierce loyalty.","alive","HG"],
  ["ron","Ron Weasley","Gryffindor","Keeper and loyal friend","Human","Jack Russell terrier","Willow, unicorn hair","A quick-witted friend who repeatedly finds courage when it matters most.","alive","RW"],
  ["dumbledore","Albus Dumbledore","Staff","Headmaster of Hogwarts","Human","Phoenix","Elder, thestral tail hair","A renowned headmaster, teacher, and strategist with a complicated history.","deceased","AD"],
  ["mcgonagall","Minerva McGonagall","Staff","Professor of Transfiguration","Human","Cat","Fir, dragon heartstring","A formidable teacher known for precision, bravery, and dry wit.","alive","MM"],
  ["snape","Severus Snape","Staff","Potions Master","Human","Doe","Unknown","A gifted, guarded professor whose loyalties are revealed only gradually.","deceased","SS"],
  ["hagrid","Rubeus Hagrid","Staff","Keeper of Keys and Grounds","Half-giant","Unknown","Oak, core unknown","A gentle half-giant with an immense affection for unusual creatures.","alive","RH"],
  ["sirius","Sirius Black","Gryffindor","Member of the Order","Human","Unknown","Unknown","Harry's godfather, remembered for rebellion, loyalty, and a love of freedom.","deceased","SB"],
  ["lupin","Remus Lupin","Staff","Professor of Defence","Werewolf","Wolf","Cypress, unicorn hair","A thoughtful teacher whose empathy grew from a life lived with stigma.","deceased","RL"],
  ["luna","Luna Lovegood","Ravenclaw","Dumbledore's Army member","Human","Hare","Unknown","An imaginative witch whose unusual perspective often reveals quiet truths.","alive","LL"],
  ["neville","Neville Longbottom","Gryffindor","Herbologist","Human","Unknown","Cherry, unicorn hair","A persistent student who grows into a courageous leader.","alive","NL"],
  ["ginny","Ginny Weasley","Gryffindor","Chaser and writer","Human","Horse","Yew, core unknown","A talented, resilient witch and accomplished Quidditch player.","alive","GW"],
  ["draco","Draco Malfoy","Slytherin","Student of Slytherin","Human","Unknown","Hawthorn, unicorn hair","A conflicted student shaped by family expectations and difficult choices.","alive","DM"],
  ["bellatrix","Bellatrix Lestrange","Slytherin","Death Eater","Human","Unknown","Walnut, dragon heartstring","A dangerous and fanatically devoted follower of Voldemort.","deceased","BL"],
  ["voldemort","Lord Voldemort","Other","Dark wizard","Human","Unknown","Yew, phoenix feather","A dark wizard who pursues immortality and power through terror.","deceased","LV"],
  ["cedric","Cedric Diggory","Hufflepuff","Triwizard champion","Human","Unknown","Ash, unicorn hair","A skilled and fair-minded Hogwarts champion remembered for decency.","deceased","CD"]
].map(([id,name,house,title,species,patronus,wand,bio,status,initials])=>({id,name,house,title,species,patronus,wand,bio,status,initials,affiliation:house==="Staff"?"Hogwarts staff":house}));

const castSourceUrl = "https://www.imdb.com/list/ls505063769/";
const castCredits = [
  ["Harry Potter","Daniel Radcliffe","nm0705356"],["Hermione Granger","Emma Watson","nm0914612"],["Ron Weasley","Rupert Grint","nm0342488"],["Ginny Weasley","Bonnie Wright","nm0942247"],
  ["George Weasley","Oliver Phelps","nm0962360"],["Fred Weasley","James Phelps","nm0962359"],["Bill Weasley","Domhnall Gleeson","nm1727304"],["Arthur Weasley","Mark Williams","nm0931247"],
  ["Molly Weasley","Julie Walters","nm0910278"],["Draco Malfoy","Tom Felton","nm0271657"],["Luna Lovegood","Evanna Lynch","nm2121541"],["Percy Weasley","Chris Rankin","nm0710242"],
  ["Neville Longbottom","Matthew Lewis","nm0507535"],["Vincent Crabbe","Jamie Waylett","nm0915488"],["Gregory Goyle","Josh Herdman","nm0378830"],["Dean Thomas","Alfred Enoch","nm0257917"],
  ["Oliver Wood","Sean Biggerstaff","nm0081801"],["Petunia Dursley","Fiona Shaw","nm0789716"],["Seamus Finnigan","Devon Murray","nm0614912"],["Susan Bones","Eleanor Columbus","nm0173384"],
  ["Angelina Johnson","Performer not specified in the source list",null],["Katie Bell","Performer not specified in the source list",null],["Albus Dumbledore","Michael Gambon","nm0002091"],["Minerva McGonagall","Maggie Smith","nm0001749"],
  ["Severus Snape","Alan Rickman","nm0000614"],["Filius Flitwick","Warwick Davis","nm0001116"]
].map(([character,actor,imdbId],index)=>({character,actor,imdbId,order:index+1}));

const castHouse = {"George Weasley":"Gryffindor","Fred Weasley":"Gryffindor","Bill Weasley":"Gryffindor","Arthur Weasley":"Gryffindor","Molly Weasley":"Gryffindor","Percy Weasley":"Gryffindor","Vincent Crabbe":"Slytherin","Gregory Goyle":"Slytherin","Dean Thomas":"Gryffindor","Oliver Wood":"Gryffindor","Petunia Dursley":"Other","Seamus Finnigan":"Gryffindor","Susan Bones":"Hufflepuff","Angelina Johnson":"Gryffindor","Katie Bell":"Gryffindor","Filius Flitwick":"Staff"};
castCredits.forEach(credit=>{
  let record=characters.find(character=>character.name===credit.character);
  if(!record){const house=castHouse[credit.character]||"Other";record={id:credit.character.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,""),name:credit.character,house,title:"Harry Potter film-series character",species:credit.character==="Petunia Dursley"?"Muggle":"Human",patronus:"Unknown",wand:"Unknown",bio:`${credit.character} appears in the Harry Potter film series${credit.actor.startsWith("Performer")?"; the supplied IMDb list does not identify a performer for this entry":`, portrayed by ${credit.actor}`}.`,status:"Unknown",initials:credit.character.split(" ").map(part=>part[0]).join("").slice(0,2),affiliation:house==="Staff"?"Hogwarts staff":house};characters.push(record)}
  Object.assign(record,{actor:credit.actor,imdbId:credit.imdbId,portrait:credit.imdbId?`assets/images/characters/${credit.imdbId}.jpg`:null,castOrder:credit.order,castSource:castSourceUrl});
});

const locations = [
  ["hogwarts","Hogwarts Castle","Castle Areas",470,235,"An ancient school of witchcraft and wizardry with moving staircases and countless secrets.","Students, professors, and generations of magical history","♜"],
  ["great-hall","Great Hall","Castle Areas",450,315,"The ceremonial heart of Hogwarts, lit by floating candles beneath an enchanted ceiling.","Feasts, Sorting Ceremony, school gatherings","♛"],
  ["gryffindor-tower","Gryffindor Tower","Castle Areas",385,160,"A high tower reached through a guarded portrait entrance.","Gryffindor students","▲"],
  ["slytherin-room","Slytherin Common Room","Hidden Locations",520,390,"A cool dungeon chamber whose windows look into the Black Lake.","Slytherin students","◆"],
  ["ravenclaw-tower","Ravenclaw Tower","Castle Areas",555,135,"An airy tower entered by answering a bronze eagle's riddle.","Ravenclaw students","△"],
  ["hufflepuff-basement","Hufflepuff Basement","Hidden Locations",390,395,"A warm, round-doored common room near the kitchens.","Hufflepuff students","●"],
  ["library","Hogwarts Library","Castle Areas",530,285,"A vast collection of magical knowledge, including a restricted section.","Hermione Granger, Madam Pince","▤"],
  ["astronomy","Astronomy Tower","Classrooms",620,195,"One of the castle's highest towers, used for observing the night sky.","Astronomy lessons","✦"],
  ["forest","Forbidden Forest","Grounds",180,295,"A dense and dangerous woodland bordering the school grounds.","Centaurs, unicorns, Acromantulas","♣"],
  ["hagrid-hut","Hagrid's Hut","Grounds",260,410,"A small stone hut at the forest edge, home to Hogwarts' gamekeeper.","Rubeus Hagrid and Fang","⌂"],
  ["quidditch","Quidditch Pitch","Grounds",675,395,"A stadium with tall goal hoops where house teams compete.","Hogwarts house teams","○"],
  ["lake","Black Lake","Grounds",470,520,"A vast lake containing merpeople, a giant squid, and other mysteries.","First-year boat crossing, Triwizard task","≈"],
  ["willow","Whomping Willow","Grounds",315,505,"An aggressive magical tree concealing the entrance to a secret passage.","Remus Lupin, the Marauders","♧"],
  ["hogsmeade","Hogsmeade","Villages",820,265,"A magical village of crooked lanes, sweet shops, and snowy rooftops.","Hogwarts weekend visits","⌂"],
  ["diagon","Diagon Alley","Villages",850,470,"A hidden London shopping street where witches and wizards find supplies.","Ollivanders, Gringotts, Flourish and Blotts","◈"],
  ["ministry","Ministry of Magic","Government",730,545,"The administrative centre of Britain's magical community.","Aurors and Ministry officials","⚖"],
  ["platform","Platform Nine and Three-Quarters","Hidden Locations",710,105,"A concealed station platform used by the Hogwarts Express.","Hogwarts students and families","≋"],
  ["azkaban","Azkaban","Government",900,95,"A remote wizarding prison represented here only as a distant map landmark.","Ministry of Magic","▦"]
].map(([id,name,type,x,y,description,related,symbol])=>({id,name,type,x,y,description,related,symbol}));

const spells = [
  ["lumos","Lumos","Charm","Creates light at the wand tip","Beginner","A gentle upward curve","#f6dc86","Useful for illumination; keep the light controlled."],
  ["nox","Nox","Charm","Extinguishes wand light","Beginner","A short downward stroke","#8ba6d1","The counter-charm to Lumos."],
  ["accio","Accio","Charm","Summons an object","Intermediate","A firm hook toward the caster","#d8b35c","Practise only with harmless, unobstructed objects."],
  ["alohomora","Alohomora","Utility","Unlocks ordinary locks","Beginner","A small counter-clockwise turn","#d9bb7b","Respect privacy and property."],
  ["expelliarmus","Expelliarmus","Defensive Spell","Disarms an opponent","Intermediate","A decisive outward slash","#df665d","For fictional defensive practice only."],
  ["patronum","Expecto Patronum","Defensive Spell","Conjures a protective Patronus","Advanced","A rising spiral and forward point","#b9e8ff","Requires focus on a strong positive memory."],
  ["leviosa","Wingardium Leviosa","Charm","Levitates an object","Beginner","Swish and flick","#c6a5ed","Use care around fragile objects."],
  ["protego","Protego","Defensive Spell","Creates a magical shield","Intermediate","A sharp upward barrier stroke","#75b6ed","A protective spell in the fictional setting."],
  ["riddikulus","Riddikulus","Defensive Spell","Transforms a Boggart comically","Intermediate","A confident looping point","#e393cf","Humour and composure are central."],
  ["reparo","Reparo","Utility","Repairs certain broken objects","Intermediate","A neat clockwise loop","#7fd2bb","Some magical damage cannot be repaired this way."],
  ["stupefy","Stupefy","Defensive Spell","Stuns an opponent","Advanced","A direct forward thrust","#e24848","Fictional only; never imitate harm."],
  ["petrificus","Petrificus Totalus","Other","Temporarily binds the body","Advanced","A straight vertical line","#a9aadf","Fictional only; presented as archive information."]
].map(([id,name,type,purpose,difficulty,movement,color,safety])=>({id,name,incantation:name,type,purpose,difficulty,movement,color,safety}));

const creatures = [
  ["phoenix","Phoenix","Magical bird","Remote mountain regions","Rebirth and healing","A brilliant bird associated with flame, renewal, healing tears, and faithful companionship.","Fawkes aided Dumbledore and Harry at crucial moments.","Respectful observation","♨","#e36c35","assets/images/phoenix.jpg"],
  ["hippogriff","Hippogriff","Proud winged creature","Forests and open grounds","Proud; demands respect","A creature with the forequarters of an eagle and hindquarters of a horse.","Buckbeak formed a bond with Hagrid and Harry.","Approach only with trained supervision","♞","#8caac7","assets/images/Proud winged creature.jpg"],
  ["thestral","Thestral","Winged horse","Forbidden Forest","Visible after witnessing death","A quiet, skeletal-looking winged horse with keen direction and a gentle social nature.","A Hogwarts herd pulls the school carriages.","Experienced handlers advised","♘","#9074b9","assets/images/Thestral.jpg"],
  ["niffler","Niffler","Treasure-seeking creature","Burrows in rural areas","Attracted to shiny objects","A small burrowing creature whose pouch and love of treasure invite delightful chaos.","Newt Scamander cared for a particularly enterprising Niffler.","Secure valuables","◆","#d4a44e","assets/images/Niffler.jpg"],
  ["basilisk","Basilisk","Serpentine creature","Deep, concealed chambers","Extremely dangerous","An immense magical serpent whose gaze is deadly within the fictional lore.","One was hidden beneath Hogwarts in the Chamber of Secrets.","XXXXX — Known wizard killer","∿","#3d9064","assets/images/Basilisk.avif"],
  ["house-elf","House-Elf","Magical being","Wizarding households and institutions","Powerful domestic magic","An intelligent magical being capable of wandless magic and deserving dignity and freedom.","Dobby's choices demonstrate extraordinary loyalty and courage.","Sentient being—treat with respect","☙","#d2aa72","assets/images/House-Elf.webp"]
].map(([id,name,classification,habitat,traits,description,connection,safety,symbol,color,image])=>({id,name,classification,habitat,traits,description,connection,safety,symbol,color,image}));

const timelineEvents = [
  ["990s","Founding of Hogwarts","Hogwarts is traditionally said to have been founded in the late tenth century by Godric Gryffindor, Helga Hufflepuff, Rowena Ravenclaw, and Salazar Slytherin."],
  ["1294","The Triwizard Tournament begins","Traditional accounts place the first inter-school competition around this year; records within the fictional world are not always exact."],
  ["1943","The Chamber is opened","The Chamber of Secrets is opened during Tom Riddle's years at Hogwarts."],
  ["1970","The First Wizarding War begins","Voldemort's first rise brings a prolonged period of fear and conflict."],
  ["1981","The fall of Lord Voldemort","An attack in Godric's Hollow ends with Voldemort's disappearance and Harry Potter's survival."],
  ["1991","Harry arrives at Hogwarts","Harry Potter begins his first year and enters the wider magical world."],
  ["1992","The Chamber reopens","A series of attacks reveals that the ancient chamber has been opened again."],
  ["1994","The Tournament returns","Hogwarts hosts the restored Triwizard Tournament after a long absence."],
  ["1995","Dumbledore's Army is formed","Students secretly organise to learn practical defensive magic."],
  ["1997","The Ministry falls","Voldemort's forces seize control of Britain's magical government."],
  ["1998","The Battle of Hogwarts","Students, teachers, allies, and defenders unite in the decisive battle at the castle."],
  ["2017","The next generation departs","A new generation boards the Hogwarts Express, nineteen years after the battle."]
].map(([year,title,description])=>({year,title,description}));

const quotes = [
  {text:"It does not do to dwell on dreams and forget to live.",speaker:"Albus Dumbledore"},
  {text:"Books! And cleverness! There are more important things—friendship and bravery.",speaker:"Hermione Granger"},
  {text:"I solemnly swear that I am up to no good.",speaker:"The Marauder's Map"},
  {text:"Wit beyond measure is man's greatest treasure.",speaker:"Rowena Ravenclaw"},
  {text:"The ones that love us never really leave us.",speaker:"Sirius Black"}
];

const sortingQuestions = [
  {q:"You discover a sealed door no one else has noticed. What guides your next move?",a:[["Open it before fear can answer","gryffindor"],["Research its markings first","ravenclaw"],["Find someone trustworthy to help","hufflepuff"],["Consider what advantage lies beyond","slytherin"]]},
  {q:"A friend is blamed for something they did not do. You…",a:[["Stand beside them publicly","gryffindor"],["Gather proof that clears their name","ravenclaw"],["Stay with them through the consequences","hufflepuff"],["Find the person who can reverse the decision","slytherin"]]},
  {q:"Which achievement would satisfy you most?",a:[["Doing what others were afraid to attempt","gryffindor"],["Discovering an idea no one has considered","ravenclaw"],["Building something that helps everyone","hufflepuff"],["Turning a distant goal into reality","slytherin"]]},
  {q:"Your group loses its way in a dark forest. What role do you take?",a:[["Walk at the front","gryffindor"],["Read every clue in the surroundings","ravenclaw"],["Keep the group calm and together","hufflepuff"],["Choose a route and organise the plan","slytherin"]]},
  {q:"A rule prevents a clearly fair outcome. You are most likely to…",a:[["Break it openly and accept the cost","gryffindor"],["Challenge its logic with a better solution","ravenclaw"],["Work patiently to change it for everyone","hufflepuff"],["Use the system's own loophole","slytherin"]]},
  {q:"What do you hope people remember about you?",a:[["I acted when it mattered","gryffindor"],["I expanded what was possible","ravenclaw"],["I never abandoned my people","hufflepuff"],["I shaped my own destiny","slytherin"]]}
];

/* 2. Utilities */
const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
const escapeHTML = value => String(value).replace(/[&<>'"]/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[char]);
const debounce = (fn,wait=180)=>{let timer;return(...args)=>{clearTimeout(timer);timer=setTimeout(()=>fn(...args),wait)}};
const motionReduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
const houseById = id => houses.find(h=>h.id===id);
const houseColor = name => houses.find(h=>h.name===name)?.color || "#c5a25d";
const wireImageFallback = (root=document) => {$$('img',root).forEach(img=>{if(img.dataset.fallbackReady)return;img.dataset.fallbackReady="true";const fail=()=>img.parentElement?.classList.add("image-error");img.addEventListener("error",fail,{once:true});if(img.complete&&!img.naturalWidth)fail()})};

/* 3. Preloader */
function initPreloader(){
  const loader=$("#preloader"),bar=$("#loading-bar"),label=$("#loading-percent"); let value=0,done=false;
  const finish=()=>{if(done)return;done=true;value=100;bar.style.width="100%";label.textContent="100";setTimeout(()=>{loader.classList.add("is-hidden");document.body.classList.remove("is-loading");setTimeout(()=>loader.remove(),900)},motionReduced()?0:350)};
  const timer=setInterval(()=>{value=Math.min(94,value+Math.ceil(Math.random()*8));bar.style.width=`${value}%`;label.textContent=value;if(value>=94)clearInterval(timer)},90);
  addEventListener("load",finish,{once:true}); setTimeout(finish,3500);
}

/* 4. Custom cursor */
function initCursor(){
  if(motionReduced()||!matchMedia("(hover: hover) and (pointer: fine)").matches)return;
  const cursor=$("#wand-cursor");document.body.classList.add("custom-cursor");
  addEventListener("pointermove",e=>{cursor.style.left=`${e.clientX}px`;cursor.style.top=`${e.clientY}px`;cursor.classList.add("visible")},{passive:true});
  document.addEventListener("pointerover",e=>cursor.classList.toggle("hover",!!e.target.closest("a,button,input,textarea,select,[tabindex='0'],.map-marker")));
  document.addEventListener("pointerout",e=>{if(!e.relatedTarget)cursor.classList.remove("hover")});
  window.clearCursorHover=()=>cursor.classList.remove("hover");
}

/* 5. Navigation and scroll progress */
function initNavigation(){
  const header=$("#site-header"),menu=$("#menu-toggle"),links=$("#nav-links"),anchors=$$(".nav-links a");let previousFocus=null;
  const closeMenu=(restore=false)=>{links.classList.remove("open");menu.setAttribute("aria-expanded","false");menu.setAttribute("aria-label","Open navigation menu");document.body.classList.remove("menu-open");window.clearCursorHover?.();if(restore)previousFocus?.focus()};
  menu.addEventListener("click",()=>{const open=menu.getAttribute("aria-expanded")==="true";if(open){closeMenu()}else{previousFocus=document.activeElement;links.classList.add("open");menu.setAttribute("aria-expanded","true");menu.setAttribute("aria-label","Close navigation menu");document.body.classList.add("menu-open");anchors[0].focus();window.clearCursorHover?.()}});
  anchors.forEach(a=>a.addEventListener("click",()=>closeMenu()));
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&links.classList.contains("open"))closeMenu(true)});
  const update=()=>{const top=scrollY;header.classList.toggle("scrolled",top>35);const max=document.documentElement.scrollHeight-innerHeight;$("#scroll-progress-bar").style.width=`${max?top/max*100:0}%`};
  addEventListener("scroll",update,{passive:true});update();
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){anchors.forEach(a=>a.classList.toggle("active",a.hash===`#${entry.target.id}`))}}),{rootMargin:"-35% 0px -60%",threshold:0});
  anchors.forEach(a=>{const target=$(a.hash);if(target)observer.observe(target)});
}

/* 6. Theme management */
function createParticles(){
  const box=$("#global-particles");if(!box)return;box.replaceChildren();const count=motionReduced()?0:(innerWidth<600?16:34);
  for(let i=0;i<count;i++){const p=document.createElement("i");p.className="particle";p.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;--duration:${10+Math.random()*18}s;--opacity:${.2+Math.random()*.6};animation-delay:${-Math.random()*18}s`;box.append(p)}
}
function initTheme(){
  const button=$("#theme-toggle");let theme;try{theme=localStorage.getItem("wizard-theme")}catch{}theme=theme==="candle"?"candle":"night";
  const apply=next=>{document.documentElement.dataset.theme=next;const toCandle=next==="night";button.querySelector("span").textContent=toCandle?"☼":"☾";const label=toCandle?"Switch to candlelit theme":"Switch to night theme";button.setAttribute("aria-label",label);button.title=label;try{localStorage.setItem("wizard-theme",next)}catch{}createParticles()};
  apply(theme);button.addEventListener("click",()=>apply(document.documentElement.dataset.theme==="night"?"candle":"night"));
}

/* 7. Audio */
function initAudio(){
  const audio=$("#ambient-audio"),button=$("#sound-toggle"),live=$("#audio-live");let unavailable=false,attempts=0;
  if(!audio.querySelector("source")){unavailable=true;button.disabled=true;button.title="Optional ambient audio is not installed";button.setAttribute("aria-label","Ambient audio unavailable");live.textContent="Optional ambient audio is not installed; all other features remain ready.";return}
  audio.volume=.28; audio.addEventListener("error",()=>{unavailable=true;button.disabled=true;button.title="Ambient audio file unavailable";button.setAttribute("aria-label","Ambient audio unavailable");live.textContent="Ambient audio is unavailable; all other features remain ready."},{once:true});
  let muted=false;try{muted=localStorage.getItem("wizard-muted")==="true"}catch{}audio.muted=muted;
  const sync=()=>{const playing=!audio.paused&&!audio.muted;button.setAttribute("aria-pressed",String(playing));button.querySelector("span").textContent=playing?"♫":"♪";const label=playing?"Mute ambient sound":"Play ambient sound";button.setAttribute("aria-label",label);button.title=label};sync();
  const play=async(explicit=false)=>{if(unavailable||audio.muted||attempts>=2&&!explicit)return;attempts++;try{await audio.play();live.textContent="Ambient sound playing."}catch{if(explicit)live.textContent="Your browser blocked audio. Try the sound control again."}sync()};
  button.addEventListener("click",async()=>{if(unavailable)return;if(!audio.paused&&!audio.muted){audio.muted=true;try{localStorage.setItem("wizard-muted","true")}catch{}live.textContent="Ambient sound muted."}else{audio.muted=false;try{localStorage.setItem("wizard-muted","false")}catch{}await play(true)}sync()});
  const first=()=>{if(!muted)play();removeEventListener("pointerdown",first);removeEventListener("keydown",first)};addEventListener("pointerdown",first,{once:true});addEventListener("keydown",first,{once:true});
}

/* 8. Sorting Ceremony */
function initSorting(){
  const intro=$("#sorting-intro"),quiz=$("#sorting-quiz"),result=$("#sorting-result"),answers=$("#answer-list");let index=0,selections=[];
  const showQuestion=()=>{const item=sortingQuestions[index];$("#question-count").textContent=`Question ${index+1} of ${sortingQuestions.length}`;$("#quiz-progress-bar").style.width=`${(index/sortingQuestions.length)*100}%`;$("#question-text").textContent=item.q;answers.replaceChildren();item.a.forEach(([text,house])=>{const b=document.createElement("button");b.type="button";b.className="answer-choice";b.textContent=text;b.dataset.house=house;b.addEventListener("click",()=>{selections[index]=house;if(index<sortingQuestions.length-1){index++;showQuestion()}else showResult()});answers.append(b)});$("#sorting-previous").hidden=index===0;answers.firstElementChild?.focus()};
  const showResult=()=>{const scores=houses.reduce((o,h)=>(o[h.id]=0,o),{});selections.forEach(id=>scores[id]++);/* Tie-break: the most recent answer among tied houses wins, reflecting the user's latest deliberate choice. */const high=Math.max(...Object.values(scores));const tied=Object.keys(scores).filter(k=>scores[k]===high);const id=[...selections].reverse().find(choice=>tied.includes(choice))||tied[0];const h=houseById(id);quiz.hidden=true;result.hidden=false;result.style.setProperty("--house",h.color);result.innerHTML=`<div class="result-crest"><img src="${h.crest}" width="900" height="600" alt="${h.name} ${h.animal.toLowerCase()} crest artwork"></div><p class="eyebrow">The Sorting Hat has spoken</p><h3>${h.name}</h3><p>${personalized(h,scores)}</p><div class="result-facts"><span>${h.values.join(" · ")}</span><span>Founder: ${h.founder}</span><span>Ghost: ${h.ghost}</span></div><div class="result-actions"><button class="button button-primary" data-explore-house="${h.id}" type="button">Explore This House</button><button class="button" id="sorting-restart" type="button">Take the Ceremony Again</button></div><p class="fine-print">This playful fan-made result is not an official sorting experience.</p>`;try{localStorage.setItem("wizard-house",h.id)}catch{}$("#sorting-live").textContent=`You have been sorted into ${h.name}.`;$("#sorting-restart").addEventListener("click",restart);result.querySelector("[data-explore-house]").addEventListener("click",()=>openHouseModal(h.id,result.querySelector("[data-explore-house]")));result.focus?.()};
  const personalized=(h,scores)=>{const runner=Object.entries(scores).sort((a,b)=>b[1]-a[1])[1];const quality=houseById(runner?.[0])?.values[0]?.toLowerCase();return `Your choices consistently favoured ${h.values[0].toLowerCase()} and ${h.values[1].toLowerCase()}${quality?`, with a current of ${quality}`:""}. ${h.description}`};
  const restart=()=>{index=0;selections=[];result.hidden=true;quiz.hidden=false;showQuestion()};
  $("#sorting-start").addEventListener("click",()=>{intro.hidden=true;quiz.hidden=false;showQuestion()});$("#sorting-previous").addEventListener("click",()=>{if(index>0){index--;showQuestion()}});
  let saved;try{saved=localStorage.getItem("wizard-house")}catch{}if(houseById(saved)){const note=document.createElement("p");note.className="fine-print";note.textContent=`Your most recent result: ${houseById(saved).name}. You may take the ceremony again.`;intro.append(note)}
}

/* 9. Dynamic house rendering */
function initHouses(){
  const grid=$("#houses-grid");houses.forEach(h=>{const card=document.createElement("article");card.className="magic-card house-card reveal tilt";card.style.setProperty("--accent",h.color);card.innerHTML=`<div class="house-crest"><img src="${h.crest}" width="900" height="600" loading="lazy" alt="${h.name} ${h.animal.toLowerCase()} crest artwork"><span class="image-fallback" aria-hidden="true">${h.symbol}</span></div><p class="eyebrow">House of ${h.animal}</p><h3>${h.name}</h3><p>${h.description}</p><div class="traits">${h.values.map(v=>`<span>${v}</span>`).join("")}</div><button class="button" type="button">Explore House</button>`;card.querySelector("button").addEventListener("click",e=>openHouseModal(h.id,e.currentTarget));grid.append(card)});wireImageFallback(grid)
}
function openHouseModal(id,trigger){const h=houseById(id);openModal(`<div style="--accent:${h.color}"><div class="modal-hero"><div class="modal-symbol modal-crest"><img src="${h.crest}" width="900" height="600" alt="${h.name} ${h.animal.toLowerCase()} crest artwork"></div><div><p class="eyebrow">Hogwarts House</p><h2 id="modal-title">${h.name}</h2><p>${h.description}</p></div></div><p>${h.history}</p><div class="modal-details"><div><strong>Founder</strong>${h.founder}</div><div><strong>Values</strong>${h.values.join(", ")}</div><div><strong>Colours</strong>${h.colors}</div><div><strong>Element</strong>${h.element}</div><div><strong>Common room</strong>${h.commonRoom}</div><div><strong>House ghost</strong>${h.ghost}</div></div><h3>Notable members</h3><p>${h.members.join(" · ")}</p></div>`,trigger)}

/* 10. Character archive */
function initCharacters(){
  const grid=$("#character-grid"),search=$("#character-search"),filters=$("#character-filters");let active="All";const names=["All","Gryffindor","Slytherin","Ravenclaw","Hufflepuff","Staff","Other"];
  names.forEach(name=>{const b=document.createElement("button");b.type="button";b.className=`filter-chip${name==="All"?" active":""}`;b.textContent=name;b.setAttribute("aria-pressed",String(name==="All"));b.addEventListener("click",()=>{active=name;$$('button',filters).forEach(x=>{const on=x===b;x.classList.toggle("active",on);x.setAttribute("aria-pressed",String(on))});render()});filters.append(b)});
  const render=()=>{const query=search.value.trim().toLowerCase();const shown=characters.filter(c=>(active==="All"||c.house===active)&&[c.name,c.actor,c.title,c.house,c.species,c.affiliation].join(" ").toLowerCase().includes(query));grid.replaceChildren();shown.forEach(c=>{const card=document.createElement("article");card.className="magic-card character-card reveal tilt";card.style.setProperty("--accent",houseColor(c.house));card.tabIndex=0;card.setAttribute("role","button");card.setAttribute("aria-label",`View ${c.name}${c.actor?`, portrayed by ${c.actor}`:""}`);card.innerHTML=`<div class="portrait">${c.portrait?`<img src="${c.portrait}" width="600" height="800" loading="lazy" alt="${escapeHTML(c.actor)}"><span class="image-fallback" aria-hidden="true">${c.initials}</span>`:`<span aria-hidden="true">${c.initials}</span>`}</div><div class="card-body"><p class="eyebrow">${escapeHTML(c.house)}</p><h3>${escapeHTML(c.name)}</h3><p>${escapeHTML(c.title)}</p>${c.actor?`<p class="cast-credit">Portrayed by ${escapeHTML(c.actor)}</p>`:""}</div>`;const open=()=>openCharacter(c,card);card.addEventListener("click",open);card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open()}});grid.append(card)});$("#character-visible").textContent=shown.length;$("#character-total").textContent=characters.length;$("#character-empty").hidden=shown.length>0;$("#character-status").innerHTML='Local archive with cast credits and portraits from the <a class="source-link" href="https://www.imdb.com/list/ls505063769/" target="_blank" rel="noopener noreferrer">supplied IMDb community list</a>.';wireImageFallback(grid);revealNew(grid);initTilt(grid)};
  search.addEventListener("input",debounce(render));render();
}
function openCharacter(c,trigger){const castDetail=c.actor?`<div><strong>Film performer</strong>${escapeHTML(c.actor)}</div>`:"";const imdbLink=c.imdbId?`<p><a class="button" href="https://www.imdb.com/name/${c.imdbId}/" target="_blank" rel="noopener noreferrer" aria-label="View ${escapeHTML(c.actor)} on IMDb">View actor on IMDb ↗</a></p>`:"";const portrait=c.portrait?`<div class="modal-symbol modal-portrait"><img src="${c.portrait}" width="600" height="800" alt="${escapeHTML(c.actor)}"><span class="image-fallback" aria-hidden="true">${escapeHTML(c.initials)}</span></div>`:`<div class="modal-symbol" aria-hidden="true">${escapeHTML(c.initials)}</div>`;openModal(`<div style="--accent:${houseColor(c.house)}"><div class="modal-hero">${portrait}<div><p class="eyebrow">${escapeHTML(c.house)}</p><h2 id="modal-title">${escapeHTML(c.name)}</h2><p>${escapeHTML(c.title)}</p></div></div><p>${escapeHTML(c.bio)}</p><div class="modal-details">${castDetail}<div><strong>House / affiliation</strong>${escapeHTML(c.affiliation)}</div><div><strong>Species</strong>${escapeHTML(c.species||"Unknown")}</div><div><strong>Patronus</strong>${escapeHTML(c.patronus||"Unknown")}</div><div><strong>Wand</strong>${escapeHTML(c.wand||"Unknown")}</div><div><strong>Status</strong>${escapeHTML(c.status||"Unknown")}</div></div>${imdbLink}</div>`,trigger)}

/* 11. Map */
function initMap(){
  const svg=$("#map-svg"),group=$("#map-markers"),filter=$("#map-filter"),search=$("#map-search"),info=$("#map-info");let selected=null;const types=["All Places","Castle Areas","Classrooms","Grounds","Villages","Government","Hidden Locations"];
  types.forEach(t=>{const o=document.createElement("option");o.value=t;o.textContent=t;filter.append(o)});locations.forEach(l=>{const o=document.createElement("option");o.value=l.name;$("#map-suggestions").append(o)});
  locations.forEach(l=>{const g=document.createElementNS("http://www.w3.org/2000/svg","g");g.classList.add("map-marker");g.dataset.id=l.id;g.setAttribute("transform",`translate(${l.x} ${l.y})`);g.setAttribute("tabindex","0");g.setAttribute("role","button");g.setAttribute("aria-label",`${l.name}, ${l.type}`);g.innerHTML=`<circle r="8"></circle><text y="-17">${escapeHTML(l.name)}</text>`;const choose=()=>selectLocation(l,g);g.addEventListener("click",choose);g.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();choose()}});group.append(g)});
  const apply=()=>{const q=search.value.trim().toLowerCase(),type=filter.value;locations.forEach(l=>{const visible=(type==="All Places"||l.type===type)&&(!q||l.name.toLowerCase().includes(q)||l.description.toLowerCase().includes(q));group.querySelector(`[data-id="${l.id}"]`).hidden=!visible});const exact=locations.find(l=>l.name.toLowerCase()===q);if(exact&&!group.querySelector(`[data-id="${exact.id}"]`).hidden)selectLocation(exact,group.querySelector(`[data-id="${exact.id}"]`))};
  const selectLocation=(l,marker)=>{selected=l.id;$$(`.map-marker`,group).forEach(m=>m.classList.toggle("selected",m===marker));info.innerHTML=`<button class="map-info-close" id="map-info-close" type="button" aria-label="Close location details">×</button><div class="location-icon" aria-hidden="true">${l.symbol}</div><p class="eyebrow">${escapeHTML(l.type)}</p><h3>${escapeHTML(l.name)}</h3><p>${escapeHTML(l.description)}</p><p><strong>Connected stories:</strong> ${escapeHTML(l.related)}</p>`;$("#map-info-close").addEventListener("click",clear);info.scrollIntoView({behavior:motionReduced()?"auto":"smooth",block:"nearest"})};
  const clear=()=>{selected=null;$$(`.map-marker`,group).forEach(m=>m.classList.remove("selected"));info.innerHTML='<div class="map-placeholder"><span aria-hidden="true">⌖</span><h3>Select a location</h3><p>Choose a marker or search the map to reveal its story.</p></div>'};
  const reset=()=>{search.value="";filter.value="All Places";$$(`.map-marker`,group).forEach(m=>m.hidden=false);clear()};
  search.addEventListener("input",debounce(apply));filter.addEventListener("change",apply);$("#map-reset").addEventListener("click",reset);
  requestAnimationFrame(()=>{$("#map-loading").hidden=true;svg.hidden=false});
}

/* 12. Spellbook */
function initSpells(){
  const grid=$("#spell-grid"),search=$("#spell-search"),filter=$("#spell-filter"),stage=$("#spell-stage");const types=["All classifications",...new Set(spells.map(s=>s.type))];types.forEach(t=>{const o=document.createElement("option");o.value=t;o.textContent=t;filter.append(o)});
  const render=()=>{const q=search.value.toLowerCase(),type=filter.value;const shown=spells.filter(s=>(type==="All classifications"||s.type===type)&&`${s.name} ${s.purpose}`.toLowerCase().includes(q));grid.replaceChildren();shown.forEach(s=>{const card=document.createElement("article");card.className="magic-card spell-card reveal tilt";card.style.setProperty("--accent",s.color);card.innerHTML=`<span class="spell-rune" aria-hidden="true">✧</span><p class="eyebrow">${escapeHTML(s.type)} · ${escapeHTML(s.difficulty)}</p><h3>${escapeHTML(s.name)}</h3><p class="incantation">“${escapeHTML(s.incantation)}”</p><p>${escapeHTML(s.purpose)}</p><button class="button" type="button">Practice Spell</button>`;card.querySelector("button").addEventListener("click",()=>practiceSpell(s));grid.append(card)});$("#spell-count").textContent=shown.length;$("#spell-empty").hidden=shown.length>0;revealNew(grid);initTilt(grid)};
  const practiceSpell=s=>{stage.classList.remove("active","lumos");stage.style.setProperty("--spell-color",s.color);void stage.offsetWidth;stage.classList.add("active");if(s.id==="lumos")stage.classList.add("lumos");if(s.id==="nox")stage.classList.remove("lumos");stage.querySelector(".spell-stage-rune").textContent=s.id==="lumos"?"☼":s.id==="nox"?"☾":"✦";$("#spell-stage-message").textContent=`${s.incantation}! ${s.purpose}. Wand movement: ${s.movement}. ${s.safety}`;if(!motionReduced())setTimeout(()=>stage.classList.remove("active"),1400)};
  search.addEventListener("input",debounce(render));filter.addEventListener("change",render);render();
}

/* 13–15. Creatures, timeline, carousel */
function initCreatures(){const list=$("#creature-list");creatures.forEach(c=>{const card=document.createElement("article");card.className="magic-card creature-card reveal tilt";card.style.setProperty("--accent",c.color);card.innerHTML=`<div class="creature-art"><img src="${c.image}" width="1920" height="1080" loading="lazy" alt="${escapeHTML(c.name)}"><span class="image-fallback" aria-hidden="true">${c.symbol}</span></div><div class="creature-copy"><p class="eyebrow">${escapeHTML(c.classification)}</p><h3>${escapeHTML(c.name)}</h3><p>${escapeHTML(c.description)}</p><div class="creature-facts"><span><strong>Habitat:</strong> ${escapeHTML(c.habitat)}</span><span><strong>Key trait:</strong> ${escapeHTML(c.traits)}</span><span><strong>Connection:</strong> ${escapeHTML(c.connection)}</span><span><strong>Safety:</strong> ${escapeHTML(c.safety)}</span></div><button class="button" type="button">Open Field Note</button></div>`;card.querySelector("button").addEventListener("click",e=>openCreature(c,e.currentTarget));list.append(card)});wireImageFallback(list)}
function openCreature(c,trigger){openModal(`<div style="--accent:${c.color}"><div class="modal-hero"><div class="modal-symbol modal-creature"><img src="${c.image}" width="1920" height="1080" alt="${escapeHTML(c.name)}"><span class="image-fallback" aria-hidden="true">${c.symbol}</span></div><div><p class="eyebrow">${escapeHTML(c.classification)}</p><h2 id="modal-title">${escapeHTML(c.name)}</h2><p>${escapeHTML(c.traits)}</p></div></div><p>${escapeHTML(c.description)}</p><div class="modal-details"><div><strong>Habitat</strong>${escapeHTML(c.habitat)}</div><div><strong>Safety</strong>${escapeHTML(c.safety)}</div><div><strong>Wizarding connection</strong>${escapeHTML(c.connection)}</div></div></div>`,trigger)}
function initTimeline(){const line=$("#timeline");timelineEvents.forEach(e=>{const item=document.createElement("article");item.className="timeline-item reveal";item.innerHTML=`<span class="timeline-marker" aria-hidden="true"></span><div class="timeline-card"><p class="timeline-year">${escapeHTML(e.year)}</p><h3>${escapeHTML(e.title)}</h3><p>${escapeHTML(e.description)}</p></div>`;line.append(item)})}
function initCarousel(){
  const viewport=$("#quote-viewport"),dots=$("#quote-dots"),carousel=$("#quote-carousel");let index=0,timer=null,paused=false;
  quotes.forEach((_,i)=>{const b=document.createElement("button");b.className=`carousel-dot${i===0?" active":""}`;b.type="button";b.setAttribute("aria-label",`Show quotation ${i+1}`);b.addEventListener("click",()=>show(i,true));dots.append(b)});
  const show=(next,manual=false)=>{index=(next+quotes.length)%quotes.length;const q=quotes[index];viewport.innerHTML=`<figure class="carousel-quote"><blockquote>“${escapeHTML(q.text)}”</blockquote><figcaption><cite>${escapeHTML(q.speaker)}</cite></figcaption></figure>`;$$('.carousel-dot',dots).forEach((d,i)=>d.classList.toggle("active",i===index));carousel.setAttribute("aria-label",`Quotation ${index+1} of ${quotes.length}`);if(manual)restart()};
  const stop=()=>{clearInterval(timer);timer=null};const start=()=>{if(motionReduced()||paused||document.hidden)return;stop();timer=setInterval(()=>show(index+1),6500)};const restart=()=>{stop();start()};
  $("#quote-prev").addEventListener("click",()=>show(index-1,true));$("#quote-next").addEventListener("click",()=>show(index+1,true));carousel.addEventListener("mouseenter",()=>{paused=true;stop()});carousel.addEventListener("mouseleave",()=>{paused=false;start()});carousel.addEventListener("focusin",()=>{paused=true;stop()});carousel.addEventListener("focusout",e=>{if(!carousel.contains(e.relatedTarget)){paused=false;start()}});document.addEventListener("visibilitychange",()=>document.hidden?stop():start());let touchX=0;carousel.addEventListener("touchstart",e=>touchX=e.changedTouches[0].clientX,{passive:true});carousel.addEventListener("touchend",e=>{const dx=e.changedTouches[0].clientX-touchX;if(Math.abs(dx)>50)show(index+(dx<0?1:-1),true)},{passive:true});show(0);start();
}

/* 16. Form */
function initForm(){
  const form=$("#owl-form"),status=$("#form-status");const fields=[{id:"owl-name",message:"Please write your name."},{id:"owl-email",message:"Please enter a valid email address."},{id:"owl-subject",message:"Please add a subject."},{id:"owl-message",message:"Please write a message."}];
  const validate=f=>{const input=$(`#${f.id}`),empty=!input.value.trim(),invalid=f.id==="owl-email"&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);const bad=empty||invalid;input.setAttribute("aria-invalid",String(bad));input.setAttribute("aria-describedby",`${f.id}-error`);$(`#${f.id}-error`).textContent=bad?f.message:"";return !bad};
  fields.forEach(f=>$(`#${f.id}`).addEventListener("blur",()=>validate(f)));form.addEventListener("submit",e=>{e.preventDefault();const validity=fields.map(validate);if(validity.includes(false)){status.textContent="Please correct the marked fields before sealing your letter.";fields[validity.indexOf(false)]&&$(`#${fields[validity.indexOf(false)].id}`).focus();return}form.classList.add("sent");status.textContent="Your letter has been sealed for this demonstration. No real message was sent.";status.focus();setTimeout(()=>form.classList.remove("sent"),800)});
}

/* 17. Global modal */
let modalTrigger=null,lockedScroll=0;
function openModal(html,trigger){const modal=$("#global-modal"),panel=modal.querySelector(".modal-panel");modalTrigger=trigger;lockedScroll=scrollY;$("#modal-content").innerHTML=html;wireImageFallback($("#modal-content"));modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.classList.add("modal-open");document.body.style.top=`-${lockedScroll}px`;document.body.style.position="fixed";document.body.style.width="100%";window.clearCursorHover?.();panel.focus()}
function closeModal(){const modal=$("#global-modal");if(!modal.classList.contains("open"))return;modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.classList.remove("modal-open");document.body.style.position="";document.body.style.top="";document.body.style.width="";scrollTo(0,lockedScroll);window.clearCursorHover?.();modalTrigger?.focus();modalTrigger=null}
function initModal(){const modal=$("#global-modal"),panel=modal.querySelector(".modal-panel");modal.addEventListener("click",e=>{if(e.target.closest("[data-modal-close]"))closeModal()});document.addEventListener("keydown",e=>{if(!modal.classList.contains("open"))return;if(e.key==="Escape")closeModal();if(e.key==="Tab"){const focusable=$$('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])',panel).filter(el=>!el.disabled);if(!focusable.length){e.preventDefault();panel.focus();return}const first=focusable[0],last=focusable.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}})}

/* 18–20. Reveal, tilt, media, initialization */
let revealObserver;
function revealNew(root=document){if(motionReduced()){$$(".reveal",root).forEach(el=>el.classList.add("visible"));return}if(!revealObserver)revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");revealObserver.unobserve(entry.target)}}),{threshold:.1,rootMargin:"0px 0px -40px"});$$('.reveal:not(.visible)',root).forEach(el=>revealObserver.observe(el))}
function initTilt(root=document){if(motionReduced()||!matchMedia("(hover:hover) and (pointer:fine)").matches)return;$$('.tilt:not([data-tilt-ready])',root).forEach(card=>{card.dataset.tiltReady="true";card.addEventListener("pointermove",e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateX(${-y*4}deg) rotateY(${x*5}deg) translateY(-5px)`});card.addEventListener("pointerleave",()=>card.style.transform="")})}
function initHeroMedia(){const video=$("#hero-video");if(!video.querySelector("source")){video.remove();return}video.addEventListener("canplay",()=>{video.classList.add("can-play");if(!motionReduced())video.play().catch(()=>{})},{once:true});video.addEventListener("error",()=>video.remove(),{once:true})}
function init(){initPreloader();initTheme();initCursor();initNavigation();initAudio();initSorting();initHouses();initCharacters();initMap();initSpells();initCreatures();initTimeline();initCarousel();initForm();initModal();initHeroMedia();revealNew();initTilt();$("#year").textContent=new Date().getFullYear()}
document.addEventListener("DOMContentLoaded",init,{once:true});
