import * as Tone from 'tone'

window.addEventListener("load", ()=>{
  const button = document.querySelector('button');
  button.onclick = async ()=>{
    await Tone.start();
    play();
  };
});

function play() {
  let pingPong;
  try {
    pingPong = new Tone.PingPongDelay("4n", 0.2).toDestination();
    console.log("OK");
  } catch (error) {
    let errorMessage = "error : [" + error + "]";
    console.log(errorMessage);
    outputArea = document.getElementById('output');
    outputArea.innerHTML = errorMessage;
  }
  const drum = new Tone.MembraneSynth().connect(pingPong);
  drum.triggerAttackRelease("C4", "32n");
}
