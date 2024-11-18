import "./case-sty.css";
import Rightarrow from '../../../assets/Vector.png'
import CardImage from '../../../assets/114.png'
import WhiteNwArrow from '../../../assets/white-nw-arrow.png'

const CaseStyCont = () => {
  return (
    <div className="case-sty-main-cont">
      <div className="case-sty-cont">
        <div className="case-sty-heading">Case Study</div>
        <br />
        <div className="case-sty-title">
          We guide global businesses through the challenges of developing
          purposeful technology that addresses their needs and advances their
          growth. We have established offices in India, the UAE, and the USA.
        </div>
        <br />
        <button className="view-btn">
          View All
          <span className="right-arrow">
            <img src={Rightarrow} alt="" />
          </span>
        </button>
        <br /><br />
        <div className="case-cards-cont">
            <div className="case-card">
                <img src={CardImage} alt="" className="case-card-img" />
                <br />
                <div className="case-card-description-cont">
                    <div className="case-card-title">
                        What is Ad Exposure and Why It Matters?
                    </div>
                    <br />
                    <div className="case-card-para">
                        Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                        ipsum.
                    </div>
                    <br />
                    <div className="case-visit-part">
                        Read Full Article
                        <span className="right-arrow">
                            <img src={WhiteNwArrow} alt="" />
                        </span>
                    </div>
                </div>
            </div>
            <div className="case-card">
                <img src={CardImage} alt="" className="case-card-img" />
                <br />
                <div className="case-card-description-cont">
                    <div className="case-card-title">
                        What is Ad Exposure and Why It Matters?
                    </div>
                    <br />
                    <div className="case-card-para">
                        Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                        ipsum.
                    </div>
                    <br />
                    <div className="case-visit-part">
                        Read Full Article
                        <span className="right-arrow">
                            <img src={WhiteNwArrow} alt="" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStyCont;
