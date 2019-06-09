var lovs = [
    'you have the cutest nose, stop FUCKING hating it',
    'im just testing the button rn and wondering if im gonna delete this entry when im done...i guess not',
    'morning are bettr when u talk to god frist',
    'damn the generated content is really going downhill at this point',
    'i literally cannot stop smiling when i see you',
    'i could be having the shittiest day and one notification from you would make me happy again',
    'before we continue i have to make sure that youre not a \'MAN\' with a \'HOOK\'',
    'its now 6:24 am and i still cant sleep cause im so excited to show you this terrible project',
    'dont worry, this will receive more lov updates.....once i fix the responsivity problems',
    'i actually stopped calling sixth form a waste because if i didnt go i definitely woudlnt have met you',
    'genuinely dont know why everything you do is cute.'
]

function moreLovs() 
{
    var randomNum = Math.floor(Math.random() * lovs.length);
    document.getElementById('displayLovs').innerHTML = lovs[randomNum];
}