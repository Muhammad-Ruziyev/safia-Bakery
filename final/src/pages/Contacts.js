import React from "react";

function Contacts() {
  return (
    <section className="contact mr-top">
      <div className="contacts main-container container">
        <h2 className="Main-title">Contacts</h2>
        <div className="row">
          <div className="contacts-title col-md-6">
            <p>
              Do you have any questions ?! <br /> My friends-operators always
              have the answers! <br /> Call us every day from 08:00 to 23:00{" "}
              <br /> Call: 78 113 4040
            </p>
            <p>
              We will be happy to help you place an order for takeaway or
              delivery.
            </p>
            <p>
              Delivery is carried out throughout the city of Tashkent. The cost
              depends on <br /> the distance. The first 3 kilometers - 9,000
              soums, after, each subsequent one <br /> - 1,500 soums. <br />
              Delivery hours: 09:00 - 22:00.
            </p>
          </div>
          <div className="contact-img col-md-6">
            <img src="https://safiabakery.uz/img/contacts.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
