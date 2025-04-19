import React from 'react';

const CryptoTaxInfo = () => {
  return (
    <div className='max-w-4xl mx-auto p-8 my-10 text-white rounded-lg shadow-md'>
      <h2 className='text-4xl font-bold mb-10'>
        Latest Crypto Tax Regulations in India (2025)
      </h2>

      <div className='mb-8 p-4 bg-teal-900/30 rounded-lg'>
        <p className='text-lg'>
          <span className='font-bold'>Last Updated:</span> April 2025
        </p>
        <p className='text-lg'>
          The following information reflects the most recent changes to India's
          cryptocurrency tax laws. Always consult with a qualified tax
          professional before making financial decisions.
        </p>
      </div>

      <section className='mb-16'>
        <h3 className='text-3xl font-semibold mb-8'>
          Income Tax on Crypto Gains
        </h3>
        <div className='mb-10'>
          <h4 className='text-2xl font-semibold mb-4'>
            Virtual Digital Asset (VDA) Tax Rate
          </h4>
          <p className='text-lg'>
            Income from transfer of cryptocurrencies and other virtual digital
            assets is taxed at a flat rate of{' '}
            <span className='font-bold text-teal-400'>30%</span>, regardless of
            your income tax slab. This tax is applicable without any deductions
            for acquisition costs except the cost of acquisition.
          </p>
        </div>
        <div className='mb-10'>
          <h4 className='text-2xl font-semibold mb-4'>No Loss Offset</h4>
          <p className='text-lg'>
            Losses from crypto trading cannot be offset against gains from other
            crypto assets or any other income. Additionally, crypto losses
            cannot be carried forward to subsequent years.
          </p>
        </div>
      </section>

      <section className='mb-16'>
        <h3 className='text-3xl font-semibold mb-8'>
          TDS on Crypto Transactions
        </h3>
        <p className='text-lg'>
          A Tax Deducted at Source (TDS) of{' '}
          <span className='font-bold text-teal-400'>1%</span> is applicable on
          the transfer of Virtual Digital Assets. This applies to all
          transactions above ₹10,000 in a financial year. The TDS obligation
          falls on the person responsible for paying consideration to the
          resident seller.
        </p>
        <div className='mt-6 p-4 bg-neutral-800 rounded-lg'>
          <h4 className='text-xl font-semibold mb-2'>
            Important TDS Exemptions
          </h4>
          <ul className='list-disc pl-6 space-y-2'>
            <li>
              Transactions where both buyer and seller are individuals and
              transaction value is below ₹50,000 in a financial year
            </li>
            <li>For specified individuals, the threshold is ₹10,000</li>
            <li>
              For transactions through exchanges, the exchange is responsible
              for deducting TDS
            </li>
          </ul>
        </div>
      </section>

      <section className='mb-16'>
        <h3 className='text-3xl font-semibold mb-8'>GST Implications</h3>
        <p className='text-lg mb-4'>
          The GST Council has clarified that cryptocurrency transactions will
          attract 18% GST. The transactions are treated as supply of goods or
          services, depending on the nature of the transaction.
        </p>
        <div className='bg-neutral-800 p-4 rounded'>
          <h4 className='text-xl font-semibold mb-2'>GST Categorization</h4>
          <ul className='list-disc pl-6 space-y-2'>
            <li>
              Trading platforms that facilitate buying and selling are treated
              as intermediaries and are subject to GST
            </li>
            <li>
              Mining operations may be subject to GST when they involve a supply
              of services
            </li>
            <li>
              International transactions follow specific place of supply rules
              under GST
            </li>
          </ul>
        </div>
      </section>

      <section className='mb-16'>
        <h3 className='text-3xl font-semibold mb-8'>
          Tax on Other Crypto Activities
        </h3>
        <div className='mb-10'>
          <h4 className='text-2xl font-semibold mb-4'>Mining Income</h4>
          <p className='text-lg'>
            Income from mining cryptocurrencies is considered as income from
            other sources and is taxable at your applicable income tax slab rate
            when the mined coins are sold.
          </p>
        </div>
        <div className='mb-10'>
          <h4 className='text-2xl font-semibold mb-4'>
            Staking and DeFi Returns
          </h4>
          <p className='text-lg'>
            Income from staking and DeFi platforms is subject to the same 30%
            flat tax rate as other crypto gains. The income is taxable when
            received.
          </p>
        </div>
        <div>
          <h4 className='text-2xl font-semibold mb-4'>
            NFTs and Token Airdrops
          </h4>
          <p className='text-lg'>
            NFTs (Non-Fungible Tokens) are classified as VDAs and are subject to
            the same 30% tax. Airdrops are also taxable at 30% on the fair
            market value at the time of receipt.
          </p>
        </div>
      </section>

      <section className='mb-16'>
        <h3 className='text-3xl font-semibold mb-8'>Reporting Requirements</h3>
        <p className='text-lg'>
          All crypto transactions must be reported in your Income Tax Return
          (ITR). For FY 2024-25, a new schedule has been introduced in the ITR
          forms specifically for crypto transactions. Failure to report can
          result in penalties up to 200% of the tax amount, depending on the
          severity of the evasion.
        </p>
      </section>

      <section>
        <h3 className='text-3xl font-semibold mb-8'>
          Penalties for Non-Compliance
        </h3>
        <div className='bg-red-900/30 p-6 rounded-lg'>
          <p className='text-lg mb-4'>
            Non-reporting or under-reporting of crypto income can result in
            severe penalties:
          </p>
          <ul className='list-disc pl-6 space-y-2'>
            <li>Penalty of 50% for under-reporting</li>
            <li>Penalty of 200% for misreporting</li>
            <li>Interest on delayed payment at 1% per month</li>
            <li>Prosecution proceedings in cases of willful tax evasion</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CryptoTaxInfo;
