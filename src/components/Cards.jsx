import React from 'react'
import card1 from '../images/card1.jpg'
import card2 from '../images/card2.jpg'
import card3 from '../images/card3.jpg'


export default function Cards() {
    return (
        <div className='container'>
            <div className="card-deck col-md-12 d-flex">
                <div className="card">
                    <img className="card-img-top" src={card1} alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">Survey Cost</h5>
                        <p className="card-text">Surveys are relatively inexpensive. Online surveys and mobile surveys, in particular, have a very small cost per respondent. Even if incentives are given to respondents, the cost per response is often far less than the cost of administering a paper survey or phone survey, and the number of potential responses can be in the thousands.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={card2} alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">Extensive</h5>
                        <p className="card-text">Surveys are useful in describing the characteristics of a large population. No other research method can provide this broad capability, which ensures a more accurate sample to gather targeted results in which to draw conclusions and make important decisions.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={card3} alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">Flexible</h5>
                        <p className="card-text">Surveys can be administered in many modes, including: online surveys, email surveys, social media surveys, paper surveys, mobile surveys, telephone surveys, and face-to-face interview surveys.  For remote or hard-to-reach respondents, using a mixed mode of survey research may be necessary (e.g. administer both online surveys and paper surveys to collect responses and compile survey results into one data set, ready for analysis).</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
        </div>
    )
}
