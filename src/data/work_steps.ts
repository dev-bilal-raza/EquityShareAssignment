
import { IWorkStep } from "@/types/workStep.type";

export const work_steps: IWorkStep[] = [
    {
        id: 1,
        title: 'Sign Up',
        description: 'Securely create an account on EquityShare.',
        isActive: true
    },
    {
        id: 2,
        title: 'Explore Investments',
        description: 'Review our community development opportunities available for investment',
        isActive: false

    },
    {
        id: 3,
        title: 'Invest',
        description: 'Review the terms, sign electronically, and fund your investment',
        isActive: false

    },
    {
        id: 4,
        title: 'Hold or Sell',
        description: 'You can continue to invest in future rounds, hold on to your investment, or sell eligible securities on EquityShare\'s trading platform',
        isActive: false
    }
]