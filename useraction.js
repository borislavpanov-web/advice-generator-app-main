const userAction = async () => {
    const response = await fetch('https://api.adviceslip.com/advice', {cache: "no-cache"});
    const myJson = await response.json();
    document.getElementById("title").innerHTML = `Advice #${myJson.slip.id}`
    document.getElementById("text").innerHTML = `"${myJson.slip.advice}"`
  }
userAction();