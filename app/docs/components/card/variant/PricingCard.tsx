'use client'
import Image from 'next/image'
import { CheckCircle } from 'phosphor-react'
import { Button, Card } from '~/src'

const PricingCard = () => {
  return (
    <Card className="max-w-xs p-6">
      <Card.Container>
        <Card.Container className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-primary-25 md:h-[60px] md:w-[60px]">
          <Image src="/images/icon/pricing.png" height={24} width={24} alt="card" />
        </Card.Container>
        <Card.Container>
          <Card.Title className="text-base font-medium text-primary-500 md:text-xl">Business</Card.Title>
          <Card.Title className="my-3 flex items-center">
            <span className="text-5xl font-bold text-slate-800 md:text-9xl">$79</span>
            <span className="ml-1 text-base font-medium text-slate-400">/ mth</span>
          </Card.Title>
          <Card.Description className="text-sm text-slate-700 md:text-base">
            Until recently, the prevailing view assumed.
          </Card.Description>
        </Card.Container>
        <Card.Container tag="ul" className="my-4 space-y-5">
          <Card.List className="flex items-center gap-1.5">
            <CheckCircle size={24} color="#1B4DFF" />
            <span className="text-sm text-slate-700 md:text-base">One Month Free Access</span>
          </Card.List>
          <Card.List className="flex items-center gap-1.5">
            <CheckCircle size={24} color="#1B4DFF" />
            <span className="text-sm text-slate-700 md:text-base">All The Component Access</span>
          </Card.List>
          <Card.List className="flex items-center gap-1.5">
            <CheckCircle size={24} color="#1B4DFF" />
            <span className="text-sm text-slate-700 md:text-base">Access Html Component</span>
          </Card.List>
          <Card.List className="flex items-center gap-1.5">
            <CheckCircle size={24} color="#1B4DFF" />
            <span className="text-sm text-slate-700 md:text-base">Access React Component</span>
          </Card.List>
        </Card.Container>
        <Card.Container>
          <Button type="primary" width="full">
            Pro Access
          </Button>
        </Card.Container>
      </Card.Container>
    </Card>
  )
}

const PricingCardCode = `
"use client";
import Image from "next/image";
import { Button,Card } from "keep-react";
import { CheckCircle } from "phosphor-react";

export const CardComponent = () => {
  return (
    <Card className="max-w-xs p-6">
      <Card.Container>
        <Card.Container className="h-[60px] w-[60px] bg-primary-25 flex items-center justify-center rounded-full">
          <Image
            src="/images/icon/pricing.png"
            height={24}
            width={24}
            alt="card"
          />
        </Card.Container>
        <Card.Container>
          <Card.Title className="text-xl font-medium text-primary-500">
            Business
          </Card.Title>
          <Card.Title className="flex items-center my-3">
            <span className="text-9xl font-bold text-slate-800">$79</span>
            <span className="ml-1 text-base font-medium text-slate-400">
              / mth
            </span>
          </Card.Title>
          <Card.Description className="text-base text-slate-700">
            Until recently, the prevailing view assumed.
          </Card.Description>
        </Card.Container>
        <Card.Container tag="ul" className="my-4 space-y-5">
          <Card.List className="flex items-center gap-1.5">
            <CheckCircle size={24} color="#1B4DFF" />
            <span className="text-base text-slate-700">
              One Month Free Access
            </span>
          </Card.List>
          <Card.List className="flex items-center gap-1.5">
            <CheckCircle size={24} color="#1B4DFF" />
            <span className="text-base text-slate-700">
              All The Component Access
            </span>
          </Card.List>
          <Card.List className="flex items-center gap-1.5">
            <CheckCircle size={24} color="#1B4DFF" />
            <span className="text-base text-slate-700">
              Access Html Component
            </span>
          </Card.List>
          <Card.List className="flex items-center gap-1.5">
            <CheckCircle size={24} color="#1B4DFF" />
            <span className="text-base text-slate-700">
              Access React Component
            </span>
          </Card.List>
        </Card.Container>
        <Card.Container>
          <Button type="primary" width="full">
            Pro Access
          </Button>
        </Card.Container>
      </Card.Container>
    </Card>
  );
};
`

export { PricingCard, PricingCardCode }
