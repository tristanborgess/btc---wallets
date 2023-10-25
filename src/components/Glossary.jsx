import React from 'react';
import styled from 'styled-components';

const glossaryData = {
    '#': [
        { term: '2FA', definition: 'Two-Factor Authentication support.' }
    ],
    'A': [
        { term: 'Altcoin Exchange', definition: 'Capability to exchange Bitcoin for other cryptocurrencies.' },
        { term: 'Android', definition: 'Support for the Android platform.' },
        { term: 'API, SPV or a Node', definition: 'Connection type to the Bitcoin network.' },
        { term: 'Autopilot', definition: 'Automatic channel management in the Lightning Network.' }
    ],
    'B': [
        { term: 'Backup Forced', definition: 'Whether the backup process is mandatory.' },
        { term: 'Backup import', definition: 'Capability to import backups.' },
        { term: 'Backup Method if Custodial', definition: 'Method used for backup if the wallet is custodial.' },
        { term: 'Batch spending', definition: 'Capability to send multiple transactions simultaneously.' },
        { term: 'Bech32', definition: 'Support for the \'bc1\' address format.' },
        { term: 'Bech32 addresses (bc1)', definition: 'Support for the \'bc1\' address format.' },
        { term: 'Bitcoin Network Connection', definition: 'Connection specifics to the Bitcoin network.' },
        { term: 'Bitcoin-only', definition: 'Support exclusively for Bitcoin.' }
    ],
    'C': [
        { term: 'Can a Service Provider be a Co-signer', definition: 'Allows a third party to co-sign transactions.' },
        { term: 'Can a user connect to their Node', definition: 'Capability for users to connect to their Bitcoin node.' },
        { term: 'Can Connect Own Bitcoin Node?', definition: 'Capability to connect to a personal Bitcoin node.' },
        { term: 'Can Connect to Own Server?', definition: 'Capability to connect to a personal server.' },
        { term: 'Can You Lock the App', definition: 'Security feature to lock the app.' },
        { term: 'Category', definition: 'Classification of the wallet.' },
        { term: 'Channel Backup', definition: 'Lightning Network channel backup feature.' },
        { term: 'Channel Funding Fees Selection', definition: 'Control over fees for channel funding in Lightning Network.' },
        { term: 'Channel Management', definition: 'Ability to manage Lightning Network channels.' },
        { term: 'Coin Control', definition: 'Allows specific Bitcoin selection for transactions.' },
        { term: 'CoinJoin or similar', definition: 'Privacy feature combining multiple transactions.' },
        { term: 'Connects to a Backend Server', definition: 'Connects to a centralized server.' },
        { term: 'Credit or Gift cards', definition: 'Supports purchasing via credit or gift cards.' },
        { term: 'Customizable UI', definition: 'User interface customization features.' },
        { term: 'Custodial', definition: 'Wallet provider retains control of private keys.' }
    ],
    'D': [
        { term: 'Desktop App', definition: 'Support for desktop platforms.' }
    ],
    'E': [
        { term: 'Email required', definition: 'Requirement of an email for setup.' },
        { term: 'Exchange Rate API', definition: 'Current Bitcoin exchange rate source.' }
    ],
    'F': [
        { term: 'Fiat Denominations', definition: 'Values displayed in traditional currency.' },
        { term: 'Fiat Exchange', definition: 'Ability to exchange Bitcoin with fiat.' },
        { term: 'Fiat Ramps', definition: 'Buy/sell Bitcoin with traditional currency.' },
        { term: 'Force Close', definition: 'Feature to close Lightning Network channels forcefully.' },
        { term: 'Free', definition: 'Wallet\'s availability for free.' },
        { term: 'Fully Open Source', definition: 'All wallet software components are open-source.' },
        { term: 'Full Bitcoin On Chain Wallet', definition: 'Complete on-chain Bitcoin wallet support.' }
    ],
    'H': [
        { term: 'Hardware Wallet integration', definition: 'Integration with physical hardware wallets.' }
    ],
    'I': [
        { term: 'If Yes, Can Connect Own Node?', definition: 'If an external node is needed, capability to connect a personal node.' },
        { term: 'iOS', definition: 'Support for the iOS platform.' },
        { term: 'Is the Backend Open-Source', definition: 'Backend server code\'s openness.' }
    ],
    'K': [
        { term: 'Key Send', definition: 'Send payments without a specific invoice.' }
    ],
    'L': [
        { term: 'Latest Github Commit', definition: 'Most recent update on Github.' },
        { term: 'Latest Known Vulnerability', definition: 'Most recent identified security flaw.' },
        { term: 'Latest Release Date', definition: 'Date of the most recent official version release.' },
        { term: 'Legal Policy', definition: 'Existence of a legal and compliance framework.' },
        { term: 'Lightning Network Implementation', definition: 'Specifics of the Lightning Network implementation.' },
        { term: 'LNURL Support', definition: 'Support for LNURL, a standard for Lightning Network QR codes and URLs.' }
    ],
    'M': [
        { term: 'Maximum Lightning Fee', definition: 'Setting a maximum fee for Lightning Network transactions.' },
        { term: 'Message Signing / Verification of Signature', definition: 'Feature to sign and verify messages with Bitcoin keys.' },
        { term: 'Merchant Connection', definition: 'Connection capabilities with merchants.' },
        { term: 'Multi-Signature', definition: 'Feature allowing multiple transaction signatures.' },
        { term: 'Multiple wallets', definition: 'Managing multiple Bitcoin wallets in-app.' }
    ],
    'N': [
        { term: 'Name', definition: 'Wallet\'s official name.' }
    ],
    'O': [
        { term: 'On-boarding', definition: 'Onboarding features and processes.' },
        { term: 'Other BTC Features', definition: 'Additional Bitcoin-related functionalities.' }
    ],
    'P': [
        { term: 'P2SH Address (3) (Segwit nested or other)', definition: 'Support for the \'3\' address format.' },
        { term: 'PSBT (Partially Signed Bitcoin Transactions)', definition: 'Multi-party transaction signature format.' },
        { term: 'Patched?', definition: 'Whether a known vulnerability is fixed.' }
    ],
    'R': [
        { term: 'RBF (Replace by Fee)', definition: 'Replacing unconfirmed transactions by increasing their fee.' }
    ],
    'S': [
        { term: 'Segwit2x Support', definition: 'Support for the Segwit2x proposal.' },
        { term: 'Software Language', definition: 'Wallet\'s programming language.' },
        { term: 'Swaps (Submarine or Not)', definition: 'Support for swaps, either submarine or other types.' },
        { term: 'Support type', definition: 'User support medium.' }
    ],
    'T': [
        { term: 'Trampoline Payments', definition: 'Indirect routing feature in Lightning Network.' },
        { term: 'Tor Support', definition: 'Support for the Tor network for added privacy.' },
        { term: 'Touch ID/Face ID support', definition: 'Support for biometric security on devices.' },
        { term: 'Transaction Notes', definition: 'Feature to add notes to transactions.' },
        { term: 'Trusted Setup', definition: 'Setup requiring trust in external entities.' }
    ],
    'U': [
        { term: 'URL', definition: 'Official website or platform link.' }
    ],
    'V': [
        { term: 'Verified by BTC Peers?', definition: 'Validation by the BTC Peers community.' },
        { term: 'Virtual Card', definition: 'Support for virtual payment cards.' }
    ],
    'W': [
        { term: 'Watchtower integration', definition: 'Integration with services that monitor Lightning Network channels for fraud.' },
        { term: 'Web App', definition: 'Support for web browser platforms.' },
        { term: 'Wallet Identity and Scoring', definition: 'Features related to wallet identification and reputation.' }
    ],
    'Y': [
        { term: 'Year Released', definition: 'Year of initial release.' }
    ]
};

const Glossary = () => {
    const letters = Object.keys(glossaryData);

  return (
    <>
    <GlossaryContainer id="top">
    <FilterContainer>
      <TopNav>
        {letters.map(letter => (
          <FilterLink href={`#${letter}`} key={letter}>
            {letter}
          </FilterLink>
        ))}
      </TopNav>
      </FilterContainer>
      
      {letters.map(letter => (
        <DefinitionContainer>
        <LetterSection key={letter} id={letter}>
          <LetterContainer>
            {letter}{' '}
            <LetterLink href="#top">(back to top)</LetterLink>
          </LetterContainer>
          {glossaryData[letter].map(item => (
            <TermContainer key={item.term}>
                <Term>
                    {item.term}:
                </Term> 
                <Definition>
                    {item.definition}
                </Definition>
            </TermContainer>
          ))}
        </LetterSection>
        </DefinitionContainer>
      ))}
    </GlossaryContainer>
    </>
  );
};

const GlossaryContainer = styled.div`
    padding-bottom: 2vw;
    max-width: 60rem;
    border-right: 1px solid rgba(199, 164, 255, 0.30);
    border-bottom: 1px solid rgba(199, 164, 255, 0.30);
    background: linear-gradient(140deg, rgba(26, 8, 54, 0.98) 14.07%, rgba(24, 3, 56, 0.44) 93.47%);
    box-shadow: 8px 8px 3px 0px rgba(199, 164, 255, 0.15);
    backdrop-filter: blur(25px);
    margin-left: auto;
    margin-right: auto;    
`;

const FilterContainer = styled.div`
    padding: 2.3rem 2rem 2rem 2rem;
    align-items: center;
    align-content: center;
    background: #260C4F;
`;

const FilterLink = styled.a`
    text-decoration: none;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: rgba(255, 255, 255, 0.80);
    &:hover {
        text-decoration: underline;
        color: #8c4aff;
    }
`;

const TopNav = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 1.3rem;
    width: 100%;
    position: relative;
`;

const DefinitionContainer = styled.div`
    padding: 3rem 0 0 5rem;
`;

const LetterContainer = styled.div`
    text-align: left;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-bottom: 2rem;
    color:rgba(255, 255, 255, 0.80);
`;

const LetterLink = styled.a`
    text-decoration: none;
    margin-left: 1rem;
    font-size: 1rem;
    color: #aaa;
    &:hover {
        color: #8c4aff;
    }
`;

const LetterSection = styled.div`
    margin-top: 2rem;
    position: relative;
    &:before {
        content: "";
        display: block;
        height: 3rem;  
        margin-top: -3rem; 
        visibility: hidden;
        pointer-events: none;
    }
`;

const TermContainer = styled.div`
    padding: 0.4rem 2.5rem 0 0.8rem;
    margin-bottom: 1rem;
`;

const Term = styled.b`
    margin-right: 0.3rem;
    font-size: 1.5rem;
    font-weight: 400;
    color: #F5F5F5;
`;

const Definition = styled.b`
    margin-right: 0.3rem;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: rgba(255, 255, 255, 0.80);
`;

export default Glossary;
