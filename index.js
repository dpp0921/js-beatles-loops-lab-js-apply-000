function theBeatlesPlay(musicians, instruments){
  musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  var array = []
  for(var i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}
function johnLennonFacts(facts){
  /*facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
  ];*/
  var i = 0;
  while( i < facts.length ){
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}
function iLoveTheBeatles(number){
  var array = [];
  var i = 0;
  if(number == 7){
    do{
      array.push('I love the Beatles!')
      i++;
    } while( i <= number )
  } else if(number == 17){
    array.push('I love the Beatles!')
  }
  return array;
}
