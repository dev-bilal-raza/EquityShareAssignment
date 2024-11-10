import React from 'react'
import { useState } from 'react'

const Disclaimer = () => {
    const [allowDisclaimer, setDisclaimerAllow] = useState(false);
    const disclaimerHandler = () => {
        setDisclaimerAllow(!allowDisclaimer);
    }
    return (
        <div className='w-full'>
            <div className='flex justify-between'>
                <h3 className='text-[#7F8385] font-semibold text-base font-display'>
                    Disclaimer
                </h3>
                <div className='rounded-full border font-medium p-1 cursor-pointer border-[#7F8385] text-[#7F8385]' onClick={disclaimerHandler}>
                    <svg
                        className={`w-5 transform transition-transform duration-300 ease-in-out ${allowDisclaimer ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </div>
            </div>
            <div>
                {
                    allowDisclaimer && (
                        <p className={`font-medium text-sm text-[#7F8385] my-4 transition-all duration-1000 ease-in-out ${allowDisclaimer ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
                            EquityShare Portal, LLC. (&quot;EquityShare&quot;), as a manager of EquityShare Portal, LLC, EquityShare STR, LLC, EquityCoin, LLC, EquityReport, LLC and EquityHaus, LLC, (together the &quot;EquityShare Issuers&quot;) operates the equityshare.ai website (the &quot;Site&quot;) and is not a broker-dealer or investment advisor. All securities related activity is conducted through Dalmore Group LLC, a registered broker-dealer and member of <span className='text-[#007BC7]'>FINRA</span>/SIPC, located at 525 Green Place, Woodmere, NY 11598. You can review the <span className='text-[#007BC7]'>brokercheck for Dalmore.</span> An up-to-date <span className='text-[#007BC7]'>Dalmore Form CRS</span> is available. You should speak with your financial advisor, accountant and/or attorney when evaluating any offering. Neither Arrived, any of the Arrived Issuers, nor Dalmore makes any recommendations or provides advice about investments, and no communication, through this website or in any other medium, should be construed as a recommendation for any security offered on or off this investment platform. The Site may make forward-looking statements. You should not rely on these statements but should carefully evaluate the offering materials in assessing any investment opportunity, including the complete set of risk factors that are provided as part of the offering circular for your consideration. The Arrived Issuers are conducting public offerings pursuant to Regulation A, as amended, through the Site. The offering circulars and periodic reports for each of the Arrived Issuers are available on our <span className='text-[#007BC7]'>Filings Page.</span> Past performance is no guarantee of future results. Investments such as those on the Arrived platform are speculative and involve substantial risks to consider before investing, outlined in the respective offering materials and including, but not limited to, illiquidity, lack of diversification and complete loss of capital. Key risks include, but are not limited to, limited operating history, limited diversification, risk of asset damage or theft and lack of voting rights. Also, the adverse economic effects of the COVID-19 pandemic remain unknown and could materially impact this investment. An investment in an offering constitutes only an investment in a particular series and not in any of the Arrived Issuers or the underlying asset(s). Investors should carefully review the risks located in the respective offering materials for a more comprehensive discussion of risk. From time to time, any of the Arrived Issuers will seek to qualify additional series offerings of securities under regulation A. For offerings that have not yet been qualified, no money or other consideration is being solicited and, if sent in response, will not be accepted. No offer to buy securities of a particular offering can be accepted, and no part of the purchase price can be received, until an offering statement filed with the Securities and Exchange Commission (the &quot;SEC&quot;) relating to that series has been qualified by the SEC. Any such offer may be withdrawn or revoked, without obligation or commitment of any kind, at any time before notice of acceptance given after the date of qualification by the SEC. An indication of interest involves no obligation or commitment of any kind. Investment overviews contained herein contain summaries of the purpose and the principal business terms of the investment opportunities. Such summaries are intended for informational purposes only and do not purport to be complete, and each is qualified in its entirety by reference to the more-detailed discussions contained in the respective offering circular filed with the SEC. None of the Arrived Issuers offer refunds after an investment has been made. Please review the relevant offering materials and subscription documentation for more information. An active trading market for any series of any of the Arrived Issuers membership interests may not develop or be sustained. If an active public trading market for such series interests does not develop or is not sustained, it may be difficult or impossible for you to resell your interests at any price. Even if an active market does develop, the market price could decline below the amount you paid for your interests. There is no assurance that the Arrived platform will provide an active market for resales of such series interests. Further, without the Arrived platform, it may be difficult or impossible for you to dispose of your interests. If the market develops for any series of interests offered on the Arrived Platform, the market price of such interests could fluctuate significantly for many reasons, including reasons unrelated to performance, the underlying assets or any series, such as reports by industry analysts, investor perceptions or announcements by competitors regarding their own performance, as well as general economic and industry conditions. For additional risk factors and disclaimer information, you can review our <span className='text-[#007BC7]'>disclosure.</span>
                        </p>
                    )
                }
            </div>

        </div>
    )
}

export default Disclaimer