import React from 'react';
import "./index.css"

function About() {
    return(
        <div style={{padding:"50px"}}>
            <h1><div style={{ backgroundColor:'orange'}}>About us</div></h1>
            <table>
                <tbody>
                    <tr>
                        <td>
                        <p1>As digital content and media evolves, we are finding the best ways to tell brand stories and captivate audiences. Through visual storytelling and the use of technology, we are dedicated to providing the best value for the consumers and brands we work with.

                            We are not AD men; We are adopters of the digital age--film makers, creators, technologists, writers, animators, photographers, marketers, storytellers--in the business of influencing culture and fostering progress for our clients and consumers.

                            We create tailor-made content for brands and spread the word! Consider our partnership as an extension of your marketing department: From conceiving the idea, to creating the story, and ultimately, fueling the conversation.</p1>

                        </td>
                        <td> <img src='https://res.cloudinary.com/tovia212/image/upload/v1599332085/alexander-jawfox-RX-AEDpg6yM-unsplash_jxkzck.jpg' alt='' style={{width:'600px', height:'700px'}} /> </td>
                    </tr>
                </tbody>
            </table>
            

            
        </div>
    )
}

export default About;
