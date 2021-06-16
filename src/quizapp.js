import {React,useState} from "react";
import {Badge,Button} from "react-bootstrap"


function QuizApp() {
  const [score, setScore] = useState(0);
  const [selectedAns, setSelectedAns] = useState("opt3");
  let correctAns="opt3"
  const handleClick =()=>{
    if (correctAns === selectedAns) {
      setScore((prevScore) => prevScore + 10);
      console.log("Done");
    } else {
      setScore((prevScore) => prevScore - 5);
      console.log("Undone");
    }
  }
  var timeleft = 20;
  var timeleftstr = "";
  function timer(){
    document.getElementById("startbtn").setAttribute("disabled","")
  var timerid=setInterval(function(){
    if (timeleft<=0){
      clearInterval(timerid)
    }else{
      timeleft-=1
      var minutes=Math.floor(timeleft/60);
      var seconds=timeleft%60;
      var secondsstr="" 
      if(seconds<10){
        secondsstr="0"+JSON.stringify(seconds)
      }
      else{
        secondsstr=JSON.stringify(seconds)
      }
      timeleftstr=JSON.stringify(minutes)+":"+secondsstr
    }
    console.log(timeleftstr)
    document.getElementById("timer").innerHTML="Time Left-"+timeleftstr
  },1000)
  }



  return (
    <div
      style={{ backgroundColor: "aqua", height: "fit-content" }}
      className="container"
    >
      <div style={{ textAlign: "right" }}>
        <h1>
          <Badge style={{ width: "250px" }} id="timer" variant="secondary">
            Timer
          </Badge>
        </h1>
        <h1>
          <Badge style={{ width: "250px" }} variant="secondary">
            Score-{score}
          </Badge>
        </h1>
      </div>
      <div style={{ textAlign: "center" }}>
        <img
          style={{
            border: "1px solid black",
            borderRadius: "4px",
            padding: "5px",
            width: "320px",
            marginTop: "30px",
          }}
          src="https://i.pinimg.com/600x315/89/c3/ec/89c3ec21ef6ca277d9108db0c3339f77.jpg"
          alt="gus"
        ></img>
        <h1 id="img-title">Gus Dancing</h1>
      </div>
      <Button id="startbtn" onClick={timer}>
        Start
      </Button>
      {/* <Button id="endbtn" onClick={ () =>{clearInterval(timerid)}}>
        End
      </Button> */}
      <div style={{ textAlign: "center" }}>
        <Button
          onClick={handleClick}
          className="choicebtn"
          id="primarybtn"
          size="lg"
          variant="light"
        >
          Primary
        </Button>
        <Button
          onClick={handleClick}
          className="choicebtn"
          size="lg"
          variant="light"
        >
          Secondary
        </Button>
        <Button
          onClick={handleClick}
          className="choicebtn"
          size="lg"
          variant="light"
        >
          Tertiary
        </Button>
      </div>
      <div style={{ marginTop: "5%" }}>
        <h1>Explanation</h1>
        <p>
          Burton "Gus" Guster is a fictional character on the USA Network
          television comedy Psych played by American actor Dulé Hill. He
          functions as the "straight man" for Shawn Spencer's antics, and
          provides sobering advice, helpful knowledge, steady support, and
          friendship. Over the course of the show, Gus evolves from nothing more
          than a conventional, uptight pharmaceutical representative to a strong
          support system through all Shawn Spencer's crazy antics. He frequently
          tries to pass himself off as "fearless" although in reality the
          opposite is true, and often cries, sometimes due to "sympathy" and
          other times when Shawn is insensitive to his feelings. It is believed
          that Gus was named after a relative of Steve Franks, the technical
          producer of the show, Burton Franks.
        </p>
      </div>
    </div>
  );
}

export default QuizApp;
