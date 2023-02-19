import React from "react";

// import scss
import "./pages.scss";

function About() {
  return (
    <section className="mr-top">
      <div className=" about container">
        <h2 className="About-title">About</h2>
        <div className="row">
          <div className="about-titles col-md-6">
            <p>
              Safia's pastry shop chain is a family business whose history began
              <br />
              with amateur pastry chef Muhayo Ayupova. Her hard work and love of
              <br />
              home baking prompted her to go beyond the family kitchen in 2001
              <br />
              and start baking for sale, first for relatives, friends, and
              <br />
              neighbors. Her husband, Akmal Ayupov, supports Muhayo's creative
              <br />
              endeavors and organizes the finished products' delivery.
              <br />
            </p>
            <p>
              In 2007, Mukhayo Ayupova's daughter, Madina Akmalovna, opened her
              <br />
              first home bakery shop. She inspires by the family's successful
              <br />
              experience and implements her ideas, recipes, and taste. Thanks to
              <br />
              her culinary experience and pastry skills, the pastry shop's
              <br />
              products have become what they are loved and known for: tasty,
              <br />
              beautiful, and high quality.
            </p>
            <p>
              Over time, Shahzod Alisherovich, one of Madina Akmalovna's sons,
              <br />
              joins the work on developing the bakery network chain. He
              organizes
              <br /> the bar's work in the branches and performs as a material
              and
              <br /> settlement accountant's duties. At the moment, Shakhzod is
              a<br /> company's financial director, who has created an efficient
              <br />
              economic model and automated the company's accounting.
            </p>
            <p>
              Madina Akmalona’s husband, Alisher Samikjonovich, is in charge of
              all
              <br /> construction and repair works of branches and workshops.
              Thanks to
              <br /> his golden hands and ingenuity, the units became so elegant
              and cozy.
            </p>
            <p>
              In 2015, Madina Akmalona’s son Bekzod Alisherovich joined the
              family
              <br /> business. After completing his studies in Europe, he
              introduced new
              <br /> ideas and concepts to confectionery. The brand «Safia»,
              named in
              <br /> honor of the youngest niece, is transformed into a network
              of coffeehouses with a wide variety of
              <br /> hot and cold dishes, in addition to
              <br /> the famous pastry.
            </p>
            <p>
              Thanks to a shared contribution to development, the company begins
              <br />
              to grow, and the first pastry shop opened. Pastry chefs with
              European
              <br /> experience recruit and local pastry chefs are sent abroad
              for training.
              <br /> Thanks to this, the range of baked goods expands to 450
              products.
            </p>
            <p>
              Soon, a bespoke service will launch to create exclusive cakes with
              <br />
              unique decorations.
            </p>
            <p>
              In 2018-2019 - 12 branches open in different parts of the city. A
              <br />
              catering service is being launched.
            </p>
            <p>
              We are proud that only 7 years have passed since the
              <br /> opening of the Safia brand and in this short period of time
              more than 50 branches
              <br /> have already been opened in the city, including 3 of the
              largest
              <br /> confectionery houses in Uzbekistan: Andijan, Fergana and in
              <br />
              Kazakhstan. And the number of employees exceeds 2,000 people -
              <br />
              professionals in their field.
            </p>
          </div>
          <div className="about-img col-md-6">
            <img
              className="history-img"
              src="https://safiabakery.uz/img/about_img.jpg"
              alt=""
            />
            <div className="text-right">
              <h3>
                Welcome to Safia
                <br />
                and bon appetit!
              </h3>
              <img src="https://safiabakery.uz/img/sign-in.png" alt="" />
              <h2 className="ceo-safia">Mukhayo Ayupova</h2>
              <i>
                CEO at
                <br />
                Safia
              </i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
