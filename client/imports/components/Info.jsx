import React from 'react';
import { Link } from 'param-store';

const Info = ({}) => (
      <div className="body-color">
        <div className="container" style={{ 'overflowY': 'auto' }}>
          <nav className="nav-padding">
            <img alt="triangle" src="images/triangle-icon.svg" className="back-arrow" />
            <Link href="index.html" className="nav-text" params={{ path: 'index' }}> Back
            </Link>
          </nav>
          <section className="details-section">
            <p className="service-paragraph">
              Ronald McDonald Care Mobile
              <br/>
              <span className="bold-text">FREE </span>
              capabilities and pediatric primary care services provided will
              vary by each community’s needs and may include:
            </p>
            <ul>
              <li>
                Immunizations
              </li>
              <li>
                Well-child visits
              </li>
              <li>
                Ill or urgent care visits
              </li>
              <li>
                Body Mass Index calculations and nutrition counseling
              </li>
              <li>
                Developmental screenings
              </li>
              <li>
                Vision and hearing screening
              </li>
              <li>
                Free medicine for uninsured children through on-site TCH pharmacy
              </li>
              <li>
                School physicals – general and sports related
              </li>
              <li>
                Blood collection and point of care testing
              </li>
              <li>
                Childhood health education and injury prevention education
              </li>
              <li>
                Specialty care referrals including mental health and social service referrals
              </li>
            </ul>
          </section>
        </div>
      </div>
);
export default Info;
