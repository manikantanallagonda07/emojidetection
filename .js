/**
* Amapthatholdspredefinedemojisbasedondifferentemotionsor phrases.
* Thekeyrepresentstheemotionorphrase,andthevalueisanarrayofrelated emojis.
*/
constemojiMap={
happy:["●v-¨˙","v-^●","●^v-","●•^-","^-v●","●˙v-","●^v-'","—v●","&˙•-●","●v^·`´•"],
sad:["~●","●¨´`·.", ●]ˆ.","´`·●•","●•˙-","●•·","-_`●’","●˙^","●´`-•","●´˜ˇ`-"],
love:["●v-˘","●.^·`´•","³ˇ£","ˇ¿","Y.ˇ×^●","˙×","♥Y","`ˇ,(","˜`´",""],
angry:["·•`´●","·´`•●","ı.,z·´`•● ","•’.z-`●","•⁄·●","·±‹,.,’†","`´·●","●•˙","●¯−","˙_–—•●"],
surprised:["●.˙•","•-`·´●","•−`´·●",".•ˆ","ˆ˙¯'-.¨•",".×●","·r•.¡,’†","·´`.•●","ˆ•´`·","●.•´·`"],
cool:["&˙•-●","●c`´·","●∞·•-","L0o›⬛","’‘","","`<’","","kz","˙’ˇr't(J"],
confused:["•˙^●","~•●","`·´•●","●×.","^¨•●","","●•˙","●›‹s","−ˇ·•●^","●•˙—–_"],
excited:["^●´,˙·´.›","³-v*●","●-v˙","˙·ª.‘˛3","●v—","●^v-","(˙’ˇr'tJ","˙+x","’",""],
hello:["5\s³‘`","†˙ˆ^-'µ.·˙","·˙-˜•'µ.’-
","\`‘³s5","`‘s³5\","`‘³s\5"],hi:["`‘s\5³","●^v-","","•˙&●-
","●•^×"],
"goodmorning":["_¿◆"•","●","◆●*","n*•", "*"],
"goodafternoon":["'◆•Luτ˛-_y","●*◆","τy_-u˛uL'","ı'’_ "],
"goodevening":["F","uy_-τ'L˛","÷C","y_-uτ˛L•◆'"],
"goodnight":["F","C÷","`-’●.",".τ|-–","³,7","'y¯u_-u˛τ'L"],
"howareyou":["•˙^●","˙ºı^●!.","●-•&˙","●^v-'","`•´·● ","●^v-"],
"i'mfine":["●-`´","●•¨×","●^v-","","*z˛","'˙’ˇrtJ("],
"i'mgood":["^-•●","●˙&•-","●×^•","¯●^v˘","●•´`.c"],
"i'mokay":["˙−•●","●•˙","●×¨•","˙˜^'±•· ","'·˙ˆ*‘³±’","·´˜'˙^*±•³·'‘˙"],
"i'mnotokay":["●~","`·•´●","●¨´`·.","●_`-’","‹›'●`","●^˙"],
"i'mfeelinggreat":["●^v-","*-v³●","·›.˙^,´●","~·ª.˙‘˛3","’"],
"i'mtired":[".`’-●","τ|-–.","³7,","´˜`-ˇ●","●-.’`"],
"i'msick":["⁄●·¨˘·´","J,çs➜³●","`.•˜● ","●<¿.","●•v–"],
thank:["'* ","•●^×","×˙","•●^-","5`s›’˙³"],
"you'rewelcome":["^●•-","(Jt'˙’rˇ'","^×•●","","˙×"],
sorry:["`’●-_","●~","'*",".·`´●¨","●^˙","•.●m"],
"excuseme":["'µ.·†˙ˆ^-","•'µ.·-˙-·˜’","‘’),"v^'-●","●•´`−·"],
please:["'*","●´-`",".c`´•●","●·´`•","˙×"],
goodbye:["`‘³s\5","·.¨´●`","µ.·†˙^ˆ'-","µ.·’-˙-·˜•'","`5\³s‘"],
"takecare":["*z˛","\`s³‘5","×^•●•","˙×","(7‘ "],
great:["³`s~5›’˙³","","’´±'ç_","'`-","3˛.‘·~ª"],
awesome:["●&˙•-","-`'","’","●","●³*v-"],
"welldone":["~5³s`›’˙","`●o´","˛.‘~·ª3","`´●ro","t'rˇ’˙J("],
congratulations:["˙˛3‘.ª·","´ç±_'’","●,^·.›˙´","³`s~5›’˙","'’).,‘],
"nicetomeetyou":["’˛×‘¸~","\s³‘`5","v●-^","●-•&˙","˙×"],
"goodjob":["5`s~³›’˙","‘˛.˙ª·3","´'ç_±’","Jt'r’˙(ˇ","<`’"],bad:
["~●","●¨´`·.","●·•","´·`•●","-`_’●"],
"notgood":["•~●","●·´`","●•´·`,"●`›‹'","’`_-●"],
"idon’tknow":["˙‘·’±³'ˆ*","'·³*±˙^˜´·•‘" ,"•^●˙","•˙−●","●!^.˙ıº"],
help:["⬛o‹","rJ›t¹+ı","⬛o‹","'µ.·†˙^-ˆ'","-’·.µ'-˙˜•"],
stop:["●","‘7(","●—","","●"],
"what’sup":["^●•˙","-•˙&●","•^¨●","`‘³s\5","•´`.c●"],
"what’snew":["●•^˙","v—●","^●.ı˙º!","●◆}).·","³*-v●"],
"seeyoulater":["\s5‘³`","5³\`s‘","*˛z","-v^●","^•●×"],
"haveagoodday":["◆●*","*•n","*•","●","˙×"],
"how’sitgoing":["˙^•●","●×^•","•´`.c●","&-•●˙","˙’ˇrtJ('"]
};
/**
* Generatesemojioptionsbasedontheemotionenteredbythe user.
*/
functiongenerateEmojis(){
constemotion=document.getElementById('emotion').value.toLowerCase();
constoptions=emojiMap[emotion]||["●•^˙","³.","˜˙^·'±•˙"];
constemojiOptionsDiv=document.getElementById('emojiOptions');
emojiOptionsDiv.innerHTML = '';
options.forEach(emoji=>{
constspan=document.createElement('span');
span.textContent = emoji;
span.onclick=()=>selectEmoji(emoji);
emojiOptionsDiv.appendChild(span);
});
}
/**
* Displaystheselectedemojiinthe"Youselected"section.
*/
functionselectEmoji(emoji){
constselectedEmojiDiv=document.getElementById('selectedEmoji');
selectedEmojiDiv.textContent = `You selected: ${emoji}`;
}
