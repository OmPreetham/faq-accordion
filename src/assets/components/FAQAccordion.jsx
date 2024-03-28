import { useState } from 'react'
import data from '../data/data.json'

const FAQAccordion = () => {
  const [visibleItems, setVisibleItems] = useState(
    Array(data.length).fill(false)
  )

  const toggleFAQ = (index) => {
    setVisibleItems((prevVisibleItems) => {
      const updatedVisibleItems = [...prevVisibleItems]
      updatedVisibleItems[index] = !updatedVisibleItems[index]
      return updatedVisibleItems
    })
  }

  return (
    <main>
      <div className="wrapper">
        <section>
          <div className="layout-flex">
            <div className="section-heading">
              <h1 dataIcon="star">FAQs</h1>
            </div>
            <div className="faq-wrapper">
              {data.map((faq, index) => {
                return (
                  <article key={index}>
                    <div className={`faq${faq.id}-wrapper`}>
                      <div>
                        <h2>{faq.question}</h2>
                        <img
                          onClick={() => toggleFAQ(index)}
                          src={`/images/${
                            visibleItems[index] ? 'icon-minus' : 'icon-plus'
                          }.svg`}
                          alt="Plus Icon"
                        />
                      </div>
                      <p className={visibleItems[index] ? 'visible' : 'hidden'}>
                        {faq.answer}
                      </p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
export default FAQAccordion
