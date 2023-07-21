import React from 'react'
import '../styles/Services.css'

function Services() {
  return (
    <div className="services">
      <div className="head">
        <h1>Our Services</h1>
        <p>
          Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi
          accumsan <br /> ipsum velit. Nam nec tellus a odio tincidunt auctor a
          ornare odio.
        </p>
      </div>
      <div className="headDiv">
        <div>
          <i class="bi bi-rocket-takeoff"></i>
          <h3>Fast Operation</h3>
          <p>
            Cobuild impress you with fully <br /> responsiveness and highly{" "}
            <br /> customization.
          </p>
        </div>
        <div>
          <i class="bi bi-cone-striped"></i>
          <h3>Renovation</h3>
          <p>
            Cobuild impress you with fully <br /> responsiveness and highly{" "}
            <br /> customization.
          </p>
        </div>
        <div>
          <i class="bi bi-door-open"></i>
          <h3>Consultation</h3>
          <p>
            Cobuild impress you with fully <br /> responsiveness and highly{" "}
            <br /> customization.
          </p>
        </div>
        <div>
          <i class="bi bi-buildings"></i>
          <h3>Architecture</h3>
          <p>
            Cobuild impress you with fully <br /> responsiveness and highly{" "}
            <br /> customization.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services