import blackPlay from './assets/blackPlay.png';
import whitePlay from './assets/whitePlay.png';
import "./about.css";
const About = () => {
  const steps = [
    {
      step: "Step 1: Resume Screening",
      description: "",
    },
    {
      step: "Step 2: Video Interview",
      description:
        "Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.",
    },
    {
      step: "Step 3: Technical Evaluation",
      description: "",
    },
    {
      step: "Step 4: Application Review",
      description: "",
    },
    {
      step: "Step 5: Let's get to work",
      description: "",
    },
  ];

  return (
      <div className="Acontainer">
        <h1 className="aboutH1">How we ensure you’re in good hands.</h1>
        <p className="aboutP">
          With our comprehensive screening process, we hand-pick highly skilled
          candidates so you can onboard them in a matter of days.
        </p>
        <div className="Asteps">
          {steps.map((item, index) => (
            <div key={index} className="Astep">
              <div className="Astep-title">
                <span className="Aicon"><div className='blackPlay'><img src={blackPlay} alt="blackPlay" /></div></span>
                <span>{item.step}</span>
              </div>
              {item.description && (
                <div className="Astep-description"> <div className='whitePlay'><img src={whitePlay} alt="whitePlay" className='w' /></div>{item.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
  );
  // return(
  //     <div>
  //         <div>How we ensure you’re in good hands.</div>
  //         <div>With our comprehensive screening process, we hand-pick highly skilled candidates so you can onboard them in a matter of days.</div>
  //         <div>
  //             <div><img src={blackPlay} alt="" /></div>
  //             Step 1: Resume Screening</div>
  //         <div>
  //             <div>Step 2: Video Interview</div>
  //             <p>Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.</p>
  //         </div>
  //         <div>Step 3: Technical Evaluation</div>
  //         <div>Step 4: Application Review</div>
  //         <div>Step 5: Lets get to work</div>
  //     </div>
  // )
};

export default About;
