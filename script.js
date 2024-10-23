document.getElementById("yesterday1").addEventListener("click", Yesterday);
function Yesterday() {
  let pluralNoun = document.getElementById("plural-noun1").value;
  let adjective = document.getElementById("adjective1").value;
  let presentTenseVerb = document.getElementById("present-tense-verb1").value;
  let noun = document.getElementById("noun1").value;
  let output = `Yesterday evening when i arrived from ${noun}at my ${adjective}${noun}, i saw my ${pluralNoun} on the ${adjective} carpet i just bought and was so angry. I said ${presentTenseVerb} and take them to their room`;
  document.getElementById("alert-output").innerHTML = output;
}
