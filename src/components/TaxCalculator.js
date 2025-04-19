import React, { useState } from 'react';

const TaxCalculator = () => {
  const [transactionType, setTransactionType] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [holdingPeriod, setHoldingPeriod] = useState('');
  const [incomeCategory, setIncomeCategory] = useState('');
  const [taxLiability, setTaxLiability] = useState(null);
  const [taxBreakdown, setTaxBreakdown] = useState(null);

  const calculateTax = () => {
    try {
      const purchasePriceNum = parseFloat(purchasePrice);
      const sellingPriceNum = parseFloat(sellingPrice);
      const quantityNum = parseFloat(quantity);

      if (
        isNaN(purchasePriceNum) ||
        isNaN(sellingPriceNum) ||
        isNaN(quantityNum)
      ) {
        throw new Error('Please enter valid numeric values');
      }

      if (quantityNum <= 0) {
        throw new Error('Quantity must be greater than zero');
      }

      const totalPurchaseValue = purchasePriceNum * quantityNum;
      const totalSaleValue = sellingPriceNum * quantityNum;
      const gain = totalSaleValue - totalPurchaseValue;

      let taxRate = 0.3; // Flat 30% tax as per current regulations
      let tdsRate = 0.01; // 1% TDS on transfer value

      // Different tax calculations based on transaction type
      let calculatedTax = 0;
      let tdsAmount = 0;

      if (transactionType === 'Transfer' || transactionType === 'Sale') {
        calculatedTax = gain > 0 ? gain * taxRate : 0;
        tdsAmount = totalSaleValue * tdsRate;
      } else if (transactionType === 'Mining') {
        // Mining itself isn't taxable until sold
        if (incomeCategory === 'Business') {
          calculatedTax = gain > 0 ? gain * taxRate : 0;
        }
      } else if (
        transactionType === 'Staking' ||
        transactionType === 'Airdrop'
      ) {
        // Staking rewards and airdrops are taxable at receipt
        calculatedTax = totalSaleValue * taxRate;
        tdsAmount = totalSaleValue * tdsRate;
      }

      setTaxLiability({
        totalTax: calculatedTax,
        tdsAmount: tdsAmount,
        netTaxPayable:
          calculatedTax - tdsAmount > 0 ? calculatedTax - tdsAmount : 0,
      });

      setTaxBreakdown({
        purchaseValue: totalPurchaseValue,
        saleValue: totalSaleValue,
        gainOrLoss: gain,
        taxRate: taxRate * 100,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='max-w-lg w-[90%] mx-auto p-6 m-5 bg-neutral-800 text-white rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-4'>
        India Crypto Tax Calculator (2025)
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateTax();
        }}>
        <div className='mb-4'>
          <label className='block text-gray-300'>Transaction Type:</label>
          <select
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
            className='w-full p-2 border border-gray-600 bg-neutral-700 text-white rounded mt-1'>
            <option value=''>Select</option>
            <option value='Sale'>Sale</option>
            <option value='Transfer'>Transfer to Another Wallet</option>
            <option value='Mining'>Mining</option>
            <option value='Staking'>Staking Rewards</option>
            <option value='Airdrop'>Airdrop/Free Token</option>
          </select>
        </div>

        {transactionType === 'Mining' && (
          <div className='mb-4'>
            <label className='block text-gray-300'>Income Category:</label>
            <select
              value={incomeCategory}
              onChange={(e) => setIncomeCategory(e.target.value)}
              className='w-full p-2 border border-gray-600 bg-neutral-700 text-white rounded mt-1'>
              <option value=''>Select</option>
              <option value='Business'>Business Income</option>
              <option value='Other'>Income from Other Sources</option>
            </select>
          </div>
        )}

        <div className='mb-4'>
          <label className='block text-gray-300'>Quantity:</label>
          <input
            type='number'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder='Number of tokens/coins'
            className='w-full p-2 border border-gray-600 bg-neutral-700 text-white rounded mt-1'
          />
        </div>

        {(transactionType === 'Sale' ||
          transactionType === 'Transfer' ||
          transactionType === 'Mining') && (
          <div className='mb-4'>
            <label className='block text-gray-300'>Purchase Price (₹):</label>
            <input
              type='number'
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(e.target.value)}
              placeholder='Price per unit when acquired'
              className='w-full p-2 border border-gray-600 bg-neutral-700 text-white rounded mt-1'
            />
          </div>
        )}

        <div className='mb-4'>
          <label className='block text-gray-300'>
            {transactionType === 'Staking' || transactionType === 'Airdrop'
              ? 'Market Value at Receipt (₹):'
              : 'Selling Price (₹):'}
          </label>
          <input
            type='number'
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
            placeholder='Price per unit'
            className='w-full p-2 border border-gray-600 bg-neutral-700 text-white rounded mt-1'
          />
        </div>

        {(transactionType === 'Sale' || transactionType === 'Transfer') && (
          <div className='mb-4'>
            <label className='block text-gray-300'>
              Holding Period (months):
            </label>
            <input
              type='number'
              value={holdingPeriod}
              onChange={(e) => setHoldingPeriod(e.target.value)}
              placeholder='Number of months held'
              className='w-full p-2 border border-gray-600 bg-neutral-700 text-white rounded mt-1'
            />
          </div>
        )}

        <button
          type='submit'
          className='w-full bg-teal-600 font-semibold p-2 rounded hover:bg-teal-700 transition-colors text-black'>
          Calculate Tax
        </button>
      </form>

      {taxLiability !== null && taxBreakdown !== null && (
        <div className='mt-6'>
          <h3 className='text-xl font-bold mb-3 text-teal-400'>
            Tax Calculation Results
          </h3>

          <div className='bg-neutral-700 p-4 rounded-lg mb-4'>
            <div className='flex justify-between mb-2'>
              <span>Total Purchase Value:</span>
              <span>₹{taxBreakdown.purchaseValue.toFixed(2)}</span>
            </div>
            <div className='flex justify-between mb-2'>
              <span>Total Sale Value:</span>
              <span>₹{taxBreakdown.saleValue.toFixed(2)}</span>
            </div>
            <div className='flex justify-between mb-2'>
              <span>Total Gain/Loss:</span>
              <span
                className={
                  taxBreakdown.gainOrLoss >= 0
                    ? 'text-green-400'
                    : 'text-red-400'
                }>
                ₹{taxBreakdown.gainOrLoss.toFixed(2)}
              </span>
            </div>
            <div className='flex justify-between'>
              <span>Applicable Tax Rate:</span>
              <span>{taxBreakdown.taxRate}%</span>
            </div>
          </div>

          <div className='bg-teal-900/30 p-4 rounded-lg'>
            <div className='flex justify-between mb-2'>
              <span>Income Tax (30%):</span>
              <span>₹{taxLiability.totalTax.toFixed(2)}</span>
            </div>
            <div className='flex justify-between mb-2'>
              <span>TDS Amount (1%):</span>
              <span>₹{taxLiability.tdsAmount.toFixed(2)}</span>
            </div>
            <div className='h-px bg-gray-600 my-2'></div>
            <div className='flex justify-between font-bold'>
              <span>Net Tax Payable:</span>
              <span>₹{taxLiability.netTaxPayable.toFixed(2)}</span>
            </div>
          </div>

          <p className='mt-4 text-sm text-gray-400'>
            Note: This is an estimate only. Actual tax liability may vary. TDS
            credit can be claimed against your total tax liability.
          </p>
        </div>
      )}
    </div>
  );
};

export default TaxCalculator;
