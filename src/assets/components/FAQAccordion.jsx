const FAQAccordion = () => {
  return (
    <div>
      <main>
        <div className="wrapper">
          <section>
            <div className="layout-flex">
              <div className="section-heading">
                <h1 dataIcon="star">FAQs</h1>
              </div>
              <div className="faq-wrapper">
                <article>
                  <div className="faq1-wrapper">
                    <div>
                      <h2>What is Frontend Mentor, and how will it help me?</h2>
                      <img src="/images/icon-plus.svg" alt="Plus Icon" />
                    </div>
                    <p>
                      Frontend Mentor offers realistic coding challenges to help
                      developers improve their frontend coding skills with
                      projects in HTML, CSS, and JavaScript. It's suitable for
                      all levels and ideal for portfolio building.
                    </p>
                  </div>
                </article>
                <article>
                  <div className="faq2-wrapper">
                    <div>
                      <h2>Is Frontend Mentor free?</h2>
                      <img src="/images/icon-plus.svg" alt="Plus Icon" />
                    </div>
                    <p>
                      Yes, Frontend Mentor offers both free and premium coding
                      challenges, with the free option providing access to a
                      range of projects suitable for all skill levels.
                    </p>
                  </div>
                </article>
                <article>
                  <div className="faq3-wrapper">
                    <div>
                      <h2>
                        Can I use Frontend Mentor projects in my portfolio?
                      </h2>
                      <img src="/images/icon-plus.svg" alt="Plus Icon" />
                    </div>
                    <p>
                      Yes, you can use projects completed on Frontend Mentor in
                      your portfolio. It's an excellent way to showcase your
                      skills to potential employers!
                    </p>
                  </div>
                </article>
                <article>
                  <div className="faq4-wrapper">
                    <div>
                      <h2>How can I get help if I'm stuck on a challenge?</h2>
                      <img src="/images/icon-plus.svg" alt="Plus Icon" />
                    </div>
                    <p>
                      The best place to get help is inside Frontend Mentor's
                      Discord community. There's a help channel where you can
                      ask questions and seek support from other community
                      members.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
export default FAQAccordion
