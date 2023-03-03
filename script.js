const ELEMENT_TEXT_INPUT = document.getElementById("textInput");
const ELEMENT_TEXT_OUTPUT = document.getElementById("textOutput");
const ELEMENT_CHECKBOX_URA = document.getElementById("checkboxUra");
const ELEMENT_A_URL_PUZZLINK = document.getElementById("aURLpuzzlink");
const ELEMENT_A_URL_PZPRRT = document.getElementById("aURLpzprrt");

function ConvertToURL() {
  const INPUT_TEXT = ELEMENT_TEXT_INPUT.value.replaceAll(/\s+/g, '');
  const INTERVAL = 3;

  const DEVIDED_INPUT_TEXT = DevideText(INPUT_TEXT, INTERVAL);

  //console.log(DEVIDED_INPUT_TEXT);

  const OUTPUT_TEXT = DataToString(DEVIDED_INPUT_TEXT, INTERVAL);

  //console.log(OUTPUT_TEXT);

  ELEMENT_TEXT_OUTPUT.value = OUTPUT_TEXT;
  ELEMENT_A_URL_PUZZLINK.href = "https://puzz.link/p?mashu/6/8/" + OUTPUT_TEXT;
  ELEMENT_A_URL_PUZZLINK.innerHTML = "https://puzz.link/p?mashu/6/8/" + OUTPUT_TEXT;
  ELEMENT_A_URL_PZPRRT.href = "https://semiexp.net/pzprrt/p.html?mashu/6/8/" + OUTPUT_TEXT;
  ELEMENT_A_URL_PZPRRT.innerHTML = "https://semiexp.net/pzprrt/p.html?mashu/6/8/" + OUTPUT_TEXT;
}

function DevideText(INPUT_TEXT, INTERVAL) {
  const regExp = new RegExp(".{" + INTERVAL + "}", "g");
  return INPUT_TEXT.match(regExp);
}

function DataToString(DEVIDED_INPUT_TEXT, INTERVAL) {
  let result = "";
  let temp = "";

  for(const ELEM of DEVIDED_INPUT_TEXT) {
    for(const STR of ELEM) {
      switch(STR){
        case "K":
          if(ELEMENT_CHECKBOX_URA.checked){
            temp += "1";
          }
          else {
            temp += "2";
          }
        break;

        case "W":
          if(ELEMENT_CHECKBOX_URA.checked){
            temp += "2";
          }
          else {
            temp += "1";
          }
        break;

        default:
          temp += "0";
      }
    }

    //console.log(temp);

    result += parseInt(temp, 3).toString(27);

    temp = "";
  }

  return result;
}