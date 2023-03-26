const ELEMENT_TEXT_INPUT = document.getElementById("textInput");
const ELEMENT_TEXT_OUTPUT = document.getElementById("textOutput");
const ELEMENT_A_URL_PUZZLINK = document.getElementById("aURLpuzzlink");

function ConvertToURL() {
  const INPUT_TEXT = ELEMENT_TEXT_INPUT.value.replaceAll(/\s+/g, '');
  const INTERVAL = 3;

  const DEVIDED_INPUT_TEXT = DevideText(INPUT_TEXT, INTERVAL);

  const OUTPUT_TEXT = DataToString(DEVIDED_INPUT_TEXT, INTERVAL);

  ELEMENT_TEXT_OUTPUT.value = OUTPUT_TEXT;
  ELEMENT_A_URL_PUZZLINK.href = "https://puzz.link/p?mashu/6/8/" + OUTPUT_TEXT;
  ELEMENT_A_URL_PUZZLINK.innerHTML = "https://puzz.link/p?mashu/6/8/" + OUTPUT_TEXT;
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
            temp += "1";
        break;

        case "W":
            temp += "2";
        break;

        default:
          temp += "0";
      }
    }

    result += parseInt(temp, 3).toString(27);

    temp = "";
  }

  return result;
}