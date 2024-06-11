import React from 'react';

const CryptoTaxInfo = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 my-10 text-white rounded-lg shadow-md">
      <h2 className="text-4xl font-bold mb-10">Key Information About Crypto Taxes in India</h2>

      <section className="mb-16">
        <h3 className="text-3xl font-semibold mb-8">Types of Crypto Taxes</h3>
        <div className="mb-10">
          <h4 className="text-2xl font-semibold mb-4">Short-Term Capital Gains (STCG)</h4>
          <p className="text-lg">If the crypto asset is held for less than 36 months, it is considered a short-term capital gain. The gains are taxed according to the individual's income tax slab rates, which range from 5% to 30% based on total taxable income.</p>
        </div>
        <div>
          <h4 className="text-2xl font-semibold mb-4">Long-Term Capital Gains (LTCG)</h4>
          <p className="text-lg">If the crypto asset is held for 36 months or more, it is considered a long-term capital gain. The gains are taxed at a flat rate of 20% with the benefit of indexation, which allows the investor to adjust the purchase price of the asset for inflation.</p>
        </div>
      </section>

      <section className="mb-16">
        <h3 className="text-3xl font-semibold mb-8">Income from Crypto Activities</h3>
        <div className="mb-10">
          <h4 className="text-2xl font-semibold mb-4">Mining and Staking</h4>
          <p className="text-lg">Income earned from mining and staking cryptocurrencies is treated as income from other sources. It is taxed at the individual's applicable income tax slab rates, which can range from 5% to 30% based on total taxable income.</p>
        </div>
        <div>
          <h4 className="text-2xl font-semibold mb-4">Airdrops and Hard Forks</h4>
          <p className="text-lg">The value received from airdrops and hard forks is considered as income and is taxed at the applicable slab rates, which can vary from 5% to 30% depending on the individual's total income.</p>
        </div>
      </section>

      <section className="mb-16">
        <h3 className="text-3xl font-semibold mb-8">GST on Crypto Transactions</h3>
        <p className="text-lg">Goods and Services Tax (GST) might be applicable on certain crypto transactions, especially for traders classified as service providers. The GST rate can vary, but it generally ranges between 18% and 28%. It is important to consult with a tax advisor for specific cases to ensure compliance.</p>
      </section>

      <section className="mb-16">
        <h3 className="text-3xl font-semibold mb-8">Reporting Requirements</h3>
        <p className="text-lg">All crypto transactions and gains must be reported in the annual Income Tax Return (ITR). Accurate reporting is crucial as failure to report can lead to penalties and legal consequences. Keep detailed records of all transactions, including purchase prices, sale prices, transaction dates, and types of transactions.</p>
      </section>

      <section className="mb-16">
        <h3 className="text-3xl font-semibold mb-8">Setoff and Carry Forward of Losses</h3>
        <p className="text-lg">Losses from crypto trading can be set off against other capital gains in the same financial year. Any unused losses can be carried forward for up to 8 years to offset future capital gains. This allows investors to minimize their tax liability over time.</p>
      </section>

      <section className="mb-16">
        <h3 className="text-3xl font-semibold mb-8">Tax Deducted at Source (TDS)</h3>
        <p className="text-lg">Recent regulations require a 1% TDS on crypto transactions above a certain threshold. This means that 1% of the transaction value will be deducted and remitted to the tax authorities. It's essential to check the latest threshold limits and TDS provisions to stay compliant.</p>
      </section>

      <section>
        <h3 className="text-3xl font-semibold mb-8">Penalties for Non-Compliance</h3>
        <p className="text-lg">Non-reporting or under-reporting of crypto income can result in severe penalties. Penalties can range from fines to imprisonment, depending on the severity of the non-compliance. It's crucial to ensure all crypto-related income is accurately reported to avoid legal issues.</p>
      </section>
    </div>
  );
};

export default CryptoTaxInfo;
