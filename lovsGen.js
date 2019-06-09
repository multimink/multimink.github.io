var lovs = [
    'you have the cutest nose...so uk....stop FUCKING hating it ya numpt',
    'most of the time i think about you when listening to music in the car',
    'testing the button and wondering if im gonna delete this entry when im done...no',
    'morning are better when u talk to god frist',
    'damn the generated content is really going downhill at this point',
    'yeahhhh i literally cant stop myself from smiling when i see you',
    'i could be having the shittiest day and one notification from you would make me happy again',
    'before we continue i have to make sure that youre not a \'MAN\' with a \'HOOK\'',
    'its now 6:24 am and i cant sleep because im so excited to show you this terrible project',
    'its now 7:41 am and i still cant sleep because im still excited to show you this terrible project',
    'im not sleeping because i love you and want to finish this terrible project',
    'dont worry, this will receive more lov updates.....once i fix all the ui problems',
    'stopped calling sixth form a waste because it led me to you',
    'ever just looked at someone and thought "damn i wanna be with them forever"....yeah same!',
    'kith?',
    'kith kith kith kith kith',
    'pets?',
    'pet pet pet pet pet',
    'oh damn, forgot that this repository is public....hope nobody finds it'

]

function moreLovs() 
{
    var randomNum = Math.floor(Math.random() * lovs.length);
    document.getElementById('displayLovs').innerHTML = lovs[randomNum];
}