import React from 'react';
import { Link } from 'param-store';

const Info = () => (
  <div className="body-color">
    <div className="container" style={{ overflowY: 'auto' }}>
      <nav className="nav-padding">
        <img alt="triangle" src="images/triangle-icon.svg" className="back-arrow" />
        <Link href="index.html" className="nav-text" params={{ path: 'index' }}> Back
        </Link>
      </nav>
      <section className="details-section">
        <p className="service-paragraph">
          The Ronald McDonald Care Mobile
          <br />
          provides <span className="bold-text">FREE</span>, comprehensive pediatric
          primary health care to children in the Houston area. This mobile clinic
          is operated in your community by Texas Children’s Hospital. The services offered will
          vary by each community’s needs and may include: capabilities and pediatric
          primary care services provided will vary by each community’s needs and may include:
        </p>

        <ul>
          <li>Well-child, sports and school physicals</li>
          <li>Illness examinations</li>
          <li>Vaccinations/immunizations</li>
          <li>Non-emergency care</li>
          <li>Hearing and vision screening</li>
          <li>Laboratory evaluations</li>
          <li>
            Assistance applying for public health insurance, such as Medicaid,
            CHIP and Harris Health Eligibility Card
          </li>
          <li>Referrals to medical and social services as needed</li>
          <li>Referrals to permanent and trusted medical homes</li>
          <li>
            Anticipatory guidance, injury prevention and nutrition education
            for children and families
          </li>
        </ul>
        <p className="service-paragraph">© RMHC&nbsp;</p>
        <p className="service-paragraph">
          The following trademarks used herein are owned by McDonald&apos;s
          Corporation and its affiliates; McDonald&apos;s, Ronald McDonald House Charities,
          Ronald McDonald House Charities Logo, RMHC, Ronald McDonald House,
          Ronald McDonald Family Room, and Ronald McDonald Care Mobile.
        </p>
      </section>
    </div>
  </div>
);
export default Info;
