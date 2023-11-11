'use client'
import { useState } from 'react'
import { CheckboxGroup } from '~/src'

const CheckboxGroupWithLogo = () => {
  const [selected, setSelected] = useState('')
  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value)
  }
  return (
    <form className="space-y-4 p-5">
      <CheckboxGroup
        title="Paypal"
        description="Payment with paypal and get 10% discount"
        checkboxType="circle"
        img="/images/company/paypal.png"
        imgShape="circle"
        value="paypal"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Stripe"
        description="Payment with stripe and get 10% discount"
        checkboxType="circle"
        img="/images/company/stripe.png"
        imgShape="circle"
        value="stripe"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Visa"
        description="Payment with Visa and get 10% discount"
        checkboxType="circle"
        img="/images/company/Visa.png"
        imgShape="circle"
        value="Visa"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Master Card"
        description="Payment with master card and get 10% discount"
        checkboxType="circle"
        img="/images/company/mastercard.png"
        imgShape="circle"
        value="mastercard"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
    </form>
  )
}
const CheckboxGroupWithLogoCode = `
"use client";
import { useState } from "react";
import { CheckboxGroup } from "keep-react";

export const CheckboxGroupComponent = () => {
  const [selected, setSelected] = useState("");
  const handleOptionChange = (event) => {
    setSelected(event.target.value);
  };
  return (
    <form className="space-y-4 p-5">
      <CheckboxGroup
        title="Paypal"
        description="Payment with paypal and get 10% discount"
        checkboxType="circle"
        img="/images/company/paypal.png"
        imgShape="circle"
        value="paypal"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Stripe"
        description="Payment with stripe and get 10% discount"
        checkboxType="circle"
        img="/images/company/stripe.png"
        imgShape="circle"
        value="stripe"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Visa"
        description="Payment with Visa and get 10% discount"
        checkboxType="circle"
        img="/images/company/Visa.png"
        imgShape="circle"
        value="Visa"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
      <CheckboxGroup
        title="Master Card"
        description="Payment with master card and get 10% discount"
        checkboxType="circle"
        img="/images/company/mastercard.png"
        imgShape="circle"
        value="mastercard"
        selected={selected}
        onOptionChange={handleOptionChange}
      />
    </form>
  );
}
`

export { CheckboxGroupWithLogo, CheckboxGroupWithLogoCode }
