import React, { useState } from 'react';

const TaxCalculator = () => {
  const [transactionType, setTransactionType] = useState('');
  const [amount, setAmount] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [holdingPeriod, setHoldingPeriod] = useState('');
  const [taxLiability, setTaxLiability] = useState(null);

  const calculateTax = () => {
    const amountNum = parseFloat(amount);
    const purchasePriceNum = parseFloat(purchasePrice);
    const sellingPriceNum = parseFloat(sellingPrice);
    const holdingPeriodNum = parseInt(holdingPeriod, 10);

    if (isNaN(amountNum) || isNaN(purchasePriceNum) || isNaN(sellingPriceNum) || isNaN(holdingPeriodNum)) {
      alert('Please enter valid numbers');
      return;
    }

    let taxRate;
    if (transactionType === 'Buy' || transactionType === 'Sell') {
      if (holdingPeriodNum < 36) {
        taxRate = 0.3; // Example short-term capital gains tax rate (30%)
      } else {
        taxRate = 0.2; // Example long-term capital gains tax rate (20%)
      }
    } else if (transactionType === 'Mining' || transactionType === 'Staking') {
      taxRate = 0.3; // Example tax rate for mining/staking income
    } else {
      alert('Please select a valid transaction type');
      return;
    }

    const gain = sellingPriceNum - purchasePriceNum;
    const estimatedTax = gain * taxRate;
    setTaxLiability(estimatedTax);
  };

  return (
    <div className="max-w-lg w-[90%] mx-auto p-6 m-5 bg-zinc-800 text-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Tax Calculator</h2>
      <form onSubmit={(e) => { e.preventDefault(); calculateTax(); }}>
        <div className="mb-4">
          <label className="block text-gray-300">Transaction Type:</label>
          <select
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
            className="w-full p-2 border border-gray-600 bg-zinc-700 text-white rounded mt-1"
          >
            <option value="">Select</option>
            <option value="Buy">Buy</option>
            <option value="Sell">Sell</option>
            <option value="Mining">Mining</option>
            <option value="Staking">Staking</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-600 bg-zinc-700 text-white rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Purchase Price:</label>
          <input
            type="number"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(e.target.value)}
            className="w-full p-2 border border-gray-600 bg-zinc-700 text-white rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Selling Price:</label>
          <input
            type="number"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
            className="w-full p-2 border border-gray-600 bg-zinc-700 text-white rounded mt-1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Holding Period (months):</label>
          <input
            type="number"
            value={holdingPeriod}
            onChange={(e) => setHoldingPeriod(e.target.value)}
            className="w-full p-2 border border-gray-600 bg-zinc-700 text-white rounded mt-1"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Calculate Tax
        </button>
      </form>
      {taxLiability !== null && (
        <div className="mt-6 p-4 bg-green-900 border border-green-700 text-green-300 rounded">
          <h3 className="text-lg font-bold">Estimated Tax Liability: ₹{taxLiability.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default TaxCalculator;
