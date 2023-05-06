const getAdvice = () => {
  console.log("clicked");
  const adviceID = document.getElementById("adviceID");
  const advice = document.getElementById("advice");
  const newAdvice = fetchAdvice();

  adviceID.innerText = newAdvice.id;
  advice.innerText = newAdvice.advice;
};

const fetchAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  console.log(data.slip);
  return data;
};
