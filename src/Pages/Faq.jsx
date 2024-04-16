const Faq = () => {
  return (
    <div className="my-24">
      <h3 data-aos='fade-left' data-aos-duration='600' className="px-4 py-8 text-black text-2xl uppercase font-bold">
        Frequently Asked Questions
      </h3>
      <div data-aos='fade-left' data-aos-duration='800' className="collapse rounded-none mb-2 collapse-plus bg-indigo-200 hover:bg-indigo-400">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium ">
          Why is it considered necessary to register Agreement for Sale?
        </div>
        <div className="collapse-content">
          <p>
            The Registration Act, 1908, the Transfer of Property Act, 1882 and
            the Real Estate (Regulation and Development) Act, 2016 mandates the
            registration of an agreement for sale of an immovable property. By
            registering the agreement for sale of an immovable property, it
            becomes a permanent public record. Further, a person is considered
            as the legal owner of an immovable property only after he gets such
            property registered in his name.
          </p>
        </div>
      </div>
      <div data-aos='fade-left' data-aos-delay='400' className="collapse rounded-none mb-2 collapse-plus bg-yellow-200 hover:bg-yellow-400">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium ">
          What are the documents a buyer would need from me?
        </div>
        <div className="collapse-content ">
          <p>
            Invoice, Confirms payment, Contract, Product Specs, Certificates,
            Shipping Docs, Insurance, Customs Forms, Payment Confirmation,
            Additional Docs
          </p>
        </div>
      </div>
      <div data-aos='fade-left' data-aos-delay='600' className="collapse rounded-none bg-pink-200	hover:bg-pink-400 mb-2 collapse-plus">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How soon would I receive a call from you after writing?
        </div>
        <div className="collapse-content">
          <p>
            After you submit a message, our response time varies depending on
            the current queue and complexity of inquiries. However, we strive to
            provide prompt assistance. Typically, you can expect a response
            within minutes to a few hours during our operating hours. If its
            urgent or you need immediate help, feel free to indicate so, and we
            will prioritize your query.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
