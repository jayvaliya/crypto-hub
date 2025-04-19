import React from 'react';

const ResourceCenter = () => {
  return (
    <div className='max-w-7xl mx-auto p-8 my-16 text-white rounded-lg shadow-md'>
      <h2 className='text-4xl font-bold mb-10'>Resource Center {'(2025)'}</h2>

      {/* Educational Articles Section */}
      <section className='mb-16'>
        <h3 className='text-3xl font-semibold mb-8'>Educational Articles</h3>
        <p className='text-lg mb-4'>
          Explore in-depth articles on various cryptocurrency and blockchain
          topics. Our educational articles are designed to help both beginners
          and experienced users understand the intricacies of the crypto world.
        </p>
        <a
          href='https://www.coindesk.com/learn/'
          className='bg-teal-500 text-black px-4 font-semibold py-2 rounded mb-8 inline-block hover:bg-teal-600 transition-colors'
          target='_blank'
          rel='noopener noreferrer'>
          Read Articles
        </a>
        <div className='space-y-4'>
          <div className='bg-neutral-800 p-4 rounded hover:bg-neutral-700 transition-colors'>
            <h4 className='text-2xl font-semibold'>
              Understanding Web3 and the Decentralized Internet
            </h4>
            <p className='text-lg'>
              Learn how Web3 technologies are transforming the internet through
              blockchain, decentralized applications, and tokenization. Explore
              the shift from centralized platforms to user-owned digital
              infrastructure.
            </p>
            <a
              href='https://ethereum.org/en/web3/'
              className='text-teal-400 hover:text-teal-300 transition-colors'
              target='_blank'
              rel='noopener noreferrer'>
              Read more
            </a>
          </div>
          <div className='bg-neutral-800 p-4 rounded hover:bg-neutral-700 transition-colors'>
            <h4 className='text-2xl font-semibold'>
              Advanced Trading Strategies for Crypto Markets
            </h4>
            <p className='text-lg'>
              Discover sophisticated trading techniques for cryptocurrency
              markets, including technical analysis patterns, on-chain metrics,
              and market sentiment indicators. Learn how professional traders
              navigate volatile market conditions.
            </p>
            <a
              href='https://www.binance.com/en/blog/markets/advanced-trading-strategies-to-navigate-the-crypto-markets-421499824684903899'
              className='text-teal-400 hover:text-teal-300 transition-colors'
              target='_blank'
              rel='noopener noreferrer'>
              Read more
            </a>
          </div>
          <div className='bg-neutral-800 p-4 rounded hover:bg-neutral-700 transition-colors'>
            <h4 className='text-2xl font-semibold'>
              Zero-Knowledge Proofs Explained
            </h4>
            <p className='text-lg'>
              An introduction to zero-knowledge proofs, the cryptographic method
              enabling private transactions on blockchain networks. Understand
              how ZK-rollups and ZK-SNARKs are revolutionizing blockchain
              scalability and privacy.
            </p>
            <a
              href='https://ethereum.org/en/zero-knowledge-proofs/'
              className='text-teal-400 hover:text-teal-300 transition-colors'
              target='_blank'
              rel='noopener noreferrer'>
              Read more
            </a>
          </div>
          <div className='bg-neutral-800 p-4 rounded hover:bg-neutral-700 transition-colors'>
            <h4 className='text-2xl font-semibold'>
              The Evolution of Central Bank Digital Currencies (CBDCs)
            </h4>
            <p className='text-lg'>
              Explore how central banks worldwide are developing digital
              currencies and their potential impact on the global financial
              system. Learn about the differences between CBDCs and
              cryptocurrencies, and what they mean for the future of money.
            </p>
            <a
              href='https://www.imf.org/en/Publications/fintech-notes/Issues/2022/02/07/Behind-the-Scenes-of-Central-Bank-Digital-Currency-512174'
              className='text-teal-400 hover:text-teal-300 transition-colors'
              target='_blank'
              rel='noopener noreferrer'>
              Read more
            </a>
          </div>
          <div className='bg-neutral-800 p-4 rounded hover:bg-neutral-700 transition-colors'>
            <h4 className='text-2xl font-semibold'>
              Real-world Blockchain Applications Beyond Finance
            </h4>
            <p className='text-lg'>
              Discover how blockchain technology is transforming industries
              beyond financial services, including supply chain management,
              healthcare, identity verification, and intellectual property.
            </p>
            <a
              href='https://hbr.org/2023/01/how-blockchain-can-help-companies-deliver-real-world-value'
              className='text-teal-400 hover:text-teal-300 transition-colors'
              target='_blank'
              rel='noopener noreferrer'>
              Read more
            </a>
          </div>
        </div>
      </section>

      {/* Tutorials and Guides Section */}
      <section className='mb-16'>
        <h3 className='text-3xl font-semibold mb-8'>Tutorials and Guides</h3>
        <p className='text-lg mb-4'>
          Step-by-step guides to help you navigate the world of
          cryptocurrencies. Whether you're setting up your first wallet or
          learning advanced trading techniques, our tutorials will guide you
          every step of the way.
        </p>
        <a
          href='https://www.bitdegree.org/tutorials/'
          className='bg-teal-500 text-black px-4 font-semibold py-2 rounded mb-8 inline-block hover:bg-teal-600 transition-colors'
          target='_blank'
          rel='noopener noreferrer'>
          View Tutorials
        </a>
        <div className='space-y-4'>
          <div className='bg-neutral-800 p-4 rounded hover:bg-neutral-700 transition-colors'>
            <h4 className='text-2xl font-semibold'>
              How to Use Hardware Wallets Securely
            </h4>
            <p className='text-lg'>
              A comprehensive guide to setting up and securely using hardware
              wallets like Ledger and Trezor. Learn best practices for backup
              procedures, firmware updates, and connection methods.
            </p>
            <a
              href='https://www.ledger.com/academy/security/the-safest-way-to-use-hardware-wallets'
              className='text-teal-400 hover:text-teal-300 transition-colors'
              target='_blank'
              rel='noopener noreferrer'>
              Read more
            </a>
          </div>
          <div className='bg-neutral-800 p-4 rounded hover:bg-neutral-700 transition-colors'>
            <h4 className='text-2xl font-semibold'>
              Setting Up and Using Decentralized Exchanges (DEXs)
            </h4>
            <p className='text-lg'>
              Learn how to trade cryptocurrencies on decentralized exchanges,
              including connecting your wallet, understanding liquidity pools,
              managing slippage, and avoiding common pitfalls.
            </p>
            <a
              href='https://academy.binance.com/en/articles/what-is-a-decentralized-exchange-dex'
              className='text-teal-400 hover:text-teal-300 transition-colors'
              target='_blank'
              rel='noopener noreferrer'>
              Read more
            </a>
          </div>
          <div className='bg-neutral-800 p-4 rounded hover:bg-neutral-700 transition-colors'>
            <h4 className='text-2xl font-semibold'>
              Complete Guide to NFT Creation and Trading
            </h4>
            <p className='text-lg'>
              Step-by-step instructions for creating, buying, and selling NFTs
              across different blockchains. Learn about minting processes,
              marketplace fees, and strategies for NFT collectors and creators.
            </p>
            <a
              href='https://nft-now.com/guides/nft-guide'
              className='text-teal-400 hover:text-teal-300 transition-colors'
              target='_blank'
              rel='noopener noreferrer'>
              Read more
            </a>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className='mb-16'>
        <h3 className='text-3xl font-semibold mb-8'>FAQs</h3>
        <p className='text-lg mb-4'>
          Find answers to the most frequently asked questions about
          cryptocurrencies. Our FAQ section provides quick and reliable
          information to help you understand the essentials.
        </p>
        <a
          href='https://www.coinbase.com/learn/crypto-basics'
          className='bg-teal-500 text-black px-4 font-semibold py-2 rounded mb-8 inline-block hover:bg-teal-600 transition-colors'
          target='_blank'
          rel='noopener noreferrer'>
          View FAQs
        </a>
        <div className='space-y-4'>
          <div className='bg-neutral-800 p-4 rounded hover:bg-neutral-700 transition-colors'>
            <h4 className='text-2xl font-semibold'>
              How do layer 2 scaling solutions work?
            </h4>
            <p className='text-lg'>
              Learn about layer 2 solutions like Optimistic Rollups, ZK-Rollups,
              and State Channels that help blockchain networks process more
              transactions with lower fees while maintaining security.
            </p>
            <a
              href='https://ethereum.org/en/layer-2/'
              className='text-teal-400 hover:text-teal-300 transition-colors'
              target='_blank'
              rel='noopener noreferrer'>
              Read more
            </a>
          </div>
          <div className='bg-neutral-800 p-4 rounded hover:bg-neutral-700 transition-colors'>
            <h4 className='text-2xl font-semibold'>
              What are the latest crypto tax regulations globally?
            </h4>
            <p className='text-lg'>
              A comprehensive overview of cryptocurrency taxation rules across
              major jurisdictions, including recent changes to reporting
              requirements, capital gains treatment, and international tax
              compliance.
            </p>
            <a
              href='https://cryptotax.io/global-crypto-tax-report-2025/'
              className='text-teal-400 hover:text-teal-300 transition-colors'
              target='_blank'
              rel='noopener noreferrer'>
              Read more
            </a>
          </div>
          <div className='bg-neutral-800 p-4 rounded hover:bg-neutral-700 transition-colors'>
            <h4 className='text-2xl font-semibold'>
              How do I protect myself from crypto scams?
            </h4>
            <p className='text-lg'>
              Essential security practices to avoid common cryptocurrency scams,
              including phishing attempts, fake exchanges, compromised smart
              contracts, and social engineering tactics.
            </p>
            <a
              href='https://www.consumer.ftc.gov/articles/what-know-about-cryptocurrency-and-scams'
              className='text-teal-400 hover:text-teal-300 transition-colors'
              target='_blank'
              rel='noopener noreferrer'>
              Read more
            </a>
          </div>
        </div>
      </section>

      {/* E-Books and Whitepapers Section */}
      <section className='mb-16'>
        <h3 className='text-3xl font-semibold mb-8'>E-Books and Whitepapers</h3>
        <p className='text-lg mb-4'>
          Download e-books and whitepapers for comprehensive information on
          various topics. These resources are designed to provide deep insights
          and detailed analyses.
        </p>
        <a
          href='https://blockgeeks.com/guides/'
          className='bg-teal-500 text-black px-4 font-semibold py-2 rounded mb-8 inline-block hover:bg-teal-600 transition-colors'
          target='_blank'
          rel='noopener noreferrer'>
          Download Now
        </a>
        <div className='space-y-4'>
          <div className='bg-neutral-800 p-4 rounded hover:bg-neutral-700 transition-colors'>
            <h4 className='text-2xl font-semibold'>
              The Future of Digital Assets: Trends and Predictions for 2025-2030
            </h4>
            <p className='text-lg'>
              An in-depth research report on emerging trends in the digital
              asset space, including institutional adoption patterns, regulatory
              developments, and technological innovations.
            </p>
            <a
              href='https://www.blockchain-council.org/blockchain/blockchain-trends/'
              className='text-teal-400 hover:text-teal-300 transition-colors'
              target='_blank'
              rel='noopener noreferrer'>
              Read more
            </a>
          </div>
          <div className='bg-neutral-800 p-4 rounded hover:bg-neutral-700 transition-colors'>
            <h4 className='text-2xl font-semibold'>
              Decentralized Identity Systems
            </h4>
            <p className='text-lg'>
              A comprehensive whitepaper on blockchain-based identity solutions,
              self-sovereign identity, and their applications in digital
              authentication, privacy protection, and credential verification.
            </p>
            <a
              href='https://www.w3.org/TR/did-core/'
              className='text-teal-400 hover:text-teal-300 transition-colors'
              target='_blank'
              rel='noopener noreferrer'>
              Read more
            </a>
          </div>
          <div className='bg-neutral-800 p-4 rounded hover:bg-neutral-700 transition-colors'>
            <h4 className='text-2xl font-semibold'>
              Global Regulatory Framework for Digital Assets
            </h4>
            <p className='text-lg'>
              A detailed analysis of cryptocurrency regulations worldwide,
              including licensing requirements, compliance standards, and
              emerging regulatory trends across major financial markets.
            </p>
            <a
              href='https://www.weforum.org/whitepapers/navigating-cryptocurrency-regulation-the-evolving-global-regulatory-landscape/'
              className='text-teal-400 hover:text-teal-300 transition-colors'
              target='_blank'
              rel='noopener noreferrer'>
              Read more
            </a>
          </div>
        </div>
      </section>

      {/* Community and Support Section */}
      <section>
        <h3 className='text-3xl font-semibold mb-8'>Community and Support</h3>
        <p className='text-lg mb-4'>
          Join our community and access support for any questions or issues you
          may have. Participate in forums, attend events, and get help from our
          support center.
        </p>
        <a
          href='https://www.reddit.com/r/cryptocurrency/'
          className='bg-teal-500 text-black px-4 font-semibold py-2 rounded mb-8 inline-block hover:bg-teal-600 transition-colors'
          target='_blank'
          rel='noopener noreferrer'>
          Join Community
        </a>
        <div className='space-y-4'>
          <div className='bg-neutral-800 p-4 rounded hover:bg-neutral-700 transition-colors'>
            <h4 className='text-2xl font-semibold'>Developer Communities</h4>
            <p className='text-lg'>
              Connect with blockchain developers, participate in hackathons, and
              access technical resources for building decentralized applications
              and smart contracts.
            </p>
            <a
              href='https://ethereum.org/en/developers/'
              className='text-teal-400 hover:text-teal-300 transition-colors'
              target='_blank'
              rel='noopener noreferrer'>
              Join Developer Community
            </a>
          </div>
          <div className='bg-neutral-800 p-4 rounded hover:bg-neutral-700 transition-colors'>
            <h4 className='text-2xl font-semibold'>Crypto Research Groups</h4>
            <p className='text-lg'>
              Access academic and industry research on blockchain technology,
              tokenomics, and cryptography. Connect with researchers advancing
              the theoretical foundations of the crypto ecosystem.
            </p>
            <a
              href='https://nakamoto.com/'
              className='text-teal-400 hover:text-teal-300 transition-colors'
              target='_blank'
              rel='noopener noreferrer'>
              Explore Research
            </a>
          </div>
          <div className='bg-neutral-800 p-4 rounded hover:bg-neutral-700 transition-colors'>
            <h4 className='text-2xl font-semibold'>
              Global Conferences and Meetups
            </h4>
            <p className='text-lg'>
              Discover upcoming blockchain and cryptocurrency conferences,
              workshops, and networking events happening in your region and
              around the world.
            </p>
            <a
              href='https://www.coindesk.com/events'
              className='text-teal-400 hover:text-teal-300 transition-colors'
              target='_blank'
              rel='noopener noreferrer'>
              Find Events
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourceCenter;
