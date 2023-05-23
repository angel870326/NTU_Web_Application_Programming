import './style.css';
import React from 'react';
import me from "./img/me.jpg"
import WorkComponent from './components/WorkComponent';


function About() {

  return (
    <main id="main">

      {/* Education */}
      <div id="about" class="paddsection">
        <div class="container">
          <div class="row justify-content-between">
            {/* Photo */}
            <div class="col-lg-4 ">
              <div class="div-img-bg">
                <div class="about-img">
                  <img src={me} class="img-responsive" alt="me"/>
                </div>
              </div>
            </div>
            {/* Education */}
            <div class="col-lg-7">
              <div class="about-descr">
                <p class="p-heading">Education</p>
                <p class="separator">
                  I am pursuing my master's degree in <strong><em>Business Intelligence and Data Analytics</em></strong> (Department of Accounting) at National Taiwan University (NTU).
                </p>
                <p class="p-heading"><i class="bi bi-mortarboard-fill"></i></p>
                <p class="separator">
                  I earned my bachelor's degree in <strong><em>Accounting</em></strong> with minors in <strong><em>Management Information Systems</em></strong> and <strong><em>Finance</em></strong> at National Chengchi University (NCCU).
                </p>             
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Work Experience */}
      <div id="work" class="work">

        {/* Header */}
        <div class="container">
          <div class="section-title text-center">
            <h2>Work Experience</h2>
          </div>
        </div>

        {/* Works */}
        <div class="container">
          <div class="row">
            {/* Work 1 */}
            <WorkComponent 
              date = "2021.1.28 - 2021.4.27" 
              title="Part-time Software Engineer at Ricecurry Inc."
              details={
                <ul>
                  <li>Front-end web development and design for “原宿CLASS” project</li>
                  <li>Great communication skills to work with a global team remotely</li>
                  <li>TypeScript + Next.js + Material-UI</li>
                </ul>
              }
              />
            {/* Work 2 */}
            <WorkComponent 
              date = "2020.1.13 - 2020.2.7" 
              title="Audit & Assurance Intern at Deloitte Taiwan"
              details={
                <ul>
                  <li>Audited classes including cash, non-operating income and expenses payable</li>
                  <li>Substantive tests of sales revenue</li>
                  <li>Walkthrough tests of sales and collection cycle</li>
                  <li>Industry: electronic components</li>
                </ul>
              }
              />
            {/* Work 3 */}
            <WorkComponent 
              date = "2019.7.2 - 2019.7.30" 
              title="Audit & Assurance Intern at Deloitte Taiwan"
              details={
                <ul>
                  <li>DWW Program - Accounts Receivable Risk Assessment (Industry: electronic components)</li>
                  <li>Reviewed assets classes including cash, PPE and non-operating income in working papers (Industry: semiconductor and cloud computing)</li>
                </ul>
              }
              />
          </div>
        </div>
      </div>
    </main>

  );
}

export default About;
