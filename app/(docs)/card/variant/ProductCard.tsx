"use client";
import { Badge } from "@/src/components/Badge";
import { Button } from "@/src/components/Button";
import { Card } from "@/src/components/Card";
import {
  ArrowsOutSimple,
  Bed,
  Heart,
  MapPinLine,
  Play,
  Rows,
  ShoppingCart,
  Shower,
  SkipBack,
  SkipForward,
  SpeakerHigh,
  Users,
} from "phosphor-react";

const ProductCard = () => {
  return (
    <div className="flex flex-wrap gap-5">
      {/* === PRODUCT CARD ONE === */}
      <Card
        className="max-w-xs overflow-hidden rounded-md"
        imgSrc="/images/banner/product-1.avif"
        imgSize="md"
      >
        <Card.Container className="absolute top-3.5 right-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-50/50">
          <Heart size={20} weight="bold" color="white" />
        </Card.Container>
        <Card.Container className="p-6">
          <Card.Container className="flex items-center justify-between">
            <Badge size="sm" colorType="light" color="gray">
              For Sale
            </Badge>
            <Card.Title>$9.99</Card.Title>
          </Card.Container>
          <Card.Container className="my-3">
            <Card.Title>NIKE FREE SHOE</Card.Title>
            <Card.Description>
              This can save time and effort, and it can also help to reduce the
              risk of errors.
            </Card.Description>
          </Card.Container>
          <Card.Container className="flex items-center justify-start gap-5">
            <Button size="sm" type="outlineGray">
              <span className="pr-2">
                <ShoppingCart size={24} />
              </span>
              Add To Cart
            </Button>
          </Card.Container>
        </Card.Container>
      </Card>
      {/* === PRODUCT CARD TWO === */}
      <Card
        className="max-w-xs overflow-hidden rounded-md"
        imgSrc="/images/banner/product-2.avif"
        imgSize="md"
      >
        <Card.Container className="absolute top-3.5 right-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-50/50">
          <Heart size={20} weight="bold" color="white" />
        </Card.Container>
        <Card.Container className="space-y-4 p-6">
          <Card.Title className="flex items-center gap-2 text-xl font-medium text-slate-700">
            <MapPinLine size={20} color="#5E718D" />
            <span>Garden Street,Ring Road</span>
          </Card.Title>
          <Card.Container className="flex items-center justify-between">
            <Card.Title className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <Bed size={20} color="#5E718D" />
              <span>3 Bed Room</span>
            </Card.Title>
            <Card.Title className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <Shower size={20} color="#5E718D" />
              <span>1 Bath</span>
            </Card.Title>
          </Card.Container>
          <Card.Container className="flex items-center justify-between">
            <Card.Title className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <ArrowsOutSimple size={20} color="#5E718D" />
              <span>1,032 sqft</span>
            </Card.Title>
            <Card.Title className="flex items-center gap-1 text-sm font-medium text-slate-500">
              <Users size={20} color="#5E718D" />
              <span>Family</span>
            </Card.Title>
          </Card.Container>
          <Card.Container className="my-3 flex items-center justify-between">
            <Button type="primary">Check Out</Button>
            <Card.Title className="text-2xl font-semibold text-slate-700">
              $649,00
            </Card.Title>
          </Card.Container>
        </Card.Container>
      </Card>
      {/* === PRODUCT CARD THREE === */}
      {/* <Card
        className="max-w-xs overflow-hidden rounded-md"
        imgSrc="https://images.unsplash.com/photo-1590602846989-e99596d2a6ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        imgSize="md"
      >
        <Card.Container className="space-y-3 p-6">
          <Card.Container>
            <Card.Title className="text-xl font-semibold text-slate-700">
              Keep design podcast
            </Card.Title>
            <Card.Description className="text-sm font-medium text-slate-500">
              By Static Mania
            </Card.Description>
          </Card.Container>
          <Card.Container className="flex items-center justify-between">
            <Card.Title className="text-xs font-medium text-slate-500">
              4:05
            </Card.Title>
            <Card.Title className="text-xs font-medium text-slate-500">
              10:05
            </Card.Title>
          </Card.Container>
          <Progress progress={45} color="info" rounded={true} />
          <Card.Container className="flex items-center justify-between">
            <Button type="text" circle={true}>
              <Rows size={20} color="#5E718D" />
            </Button>
            <Card.Container className="flex items-center justify-between py-2">
              <Button type="text" circle={true}>
                <SkipBack size={24} color="#5E718D" weight="bold" />
              </Button>
              <PlayButton
                type="primary"
                circle={true}
                size="lg"
                icon={<Play size="21" />}
              />
              <Button type="text" circle={true}>
                <SkipForward size={24} color="#5E718D" weight="bold" />
              </Button>
            </Card.Container>
            <Button type="text" circle={true}>
              <SpeakerHigh size={20} color="#5E718D" />
            </Button>
          </Card.Container>
        </Card.Container>
      </Card> */}
    </div>
  );
};

const ProductCardCode = `
"use client";
import { Badge,Button,Card } from "keep-design";
import { Heart, ShoppingCart } from "phosphor-react";

const ProductCard = () => {
  return (
    <div className="flex flex-wrap gap-5">
      <Card
        className="max-w-xs overflow-hidden rounded-md"
        imgSrc="https://images.unsplash.com/photo-1584590069631-1c180f90a54c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        imgSize="md"
      >
        <Card.Container className="absolute top-3.5 right-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-50/50">
          <Heart size={20} weight="bold" color="white" />
        </Card.Container>
        <Card.Container className="p-6">
          <Card.Container className="flex items-center justify-between">
            <Badge size="sm" colorType="light" color="gray">
              For Sale
            </Badge>
            <Card.Title>$9.99</Card.Title>
          </Card.Container>
          <Card.Container className="my-3">
            <Card.Title>NIKE FREE SHOE</Card.Title>
            <Card.Description>
              This can save time and effort, and it can also help to reduce the
              risk of errors.
            </Card.Description>
          </Card.Container>
          <Card.Container className="flex items-center justify-start gap-5">
            <Button size="sm" type="outlineGray">
              <span className="pr-2">
                <ShoppingCart size={24} />
              </span>
              Add To Cart
            </Button>
          </Card.Container>
        </Card.Container>
      </Card>
    </div>
  );
};

export default ProductCard;


`;

export { ProductCard, ProductCardCode };
