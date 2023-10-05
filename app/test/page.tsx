"use client";

import { Button, Popover } from "~/src";

const Test = () => {
  return (
    <div className="container py-20">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laborum
        adipisci veritatis vitae, earum in laboriosam atque consequatur eum
        assumenda voluptatem! Fuga eius laboriosam ea sapiente fugiat, aut
        doloremque laborum voluptatem, nobis labore ducimus aliquam deserunt
        accusantium minima minus debitis nam quidem magnam. Enim sint possimus
        itaque ducimus nesciunt laudantium amet libero ex nostrum dolorum,
        doloribus provident sed. Iure minima error doloremque ipsam doloribus
        inventore sit. Eligendi cupiditate excepturi doloremque, labore nulla
        ducimus reprehenderit ab deserunt eveniet quia ipsa quibusdam quis.
        Repudiandae sequi minima excepturi fugit quidem. Iste corporis rerum
        impedit eaque accusantium ut ipsum temporibus autem distinctio!
      </p>
      <Popover
        title="Popover title here"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quia possimus voluptatum accusantium quibusdam earum animi omnis, excepturi molestiae delectus."
        additinalContent={
          <div className="flex items-center gap-3 mt-3">
            <Button type="outlinePrimary" size="xs">
              Learn More
            </Button>
            <Button size="xs" href="#">
              Skip
            </Button>
          </div>
        }
      >
        <button className="px-3.5 py-2.5 bg-slate-900 text-white text-sm rounded">
          Popover
        </button>
      </Popover>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laborum
        adipisci veritatis vitae, earum in laboriosam atque consequatur eum
        assumenda voluptatem! Fuga eius laboriosam ea sapiente fugiat, aut
        doloremque laborum voluptatem, nobis labore ducimus aliquam deserunt
        accusantium minima minus debitis nam quidem magnam. Enim sint possimus
        itaque ducimus nesciunt laudantium amet libero ex nostrum dolorum,
        doloribus provident sed. Iure minima error doloremque ipsam doloribus
        inventore sit. Eligendi cupiditate excepturi doloremque, nam maiores
        labore nulla ducimus reprehenderit ab deserunt eveniet quia ipsa
        quibusdam quis. Repudiandae sequi minima excepturi fugit quidem. Iste
        corporis rerum impedit eaque accusantium ut ipsum temporibus autem
        distinctio!
      </p>
    </div>
  );
};

export default Test;
