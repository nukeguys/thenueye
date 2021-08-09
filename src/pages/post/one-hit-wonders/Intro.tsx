import React from 'react';

import { useRouter } from 'next/router';

export default function Intro() {
  const router = useRouter();

  return (
    <div className="max-w-screen-sm mx-auto py-6 ">
      <h1 className="font-serif text-3xl font-bold text-center">
        The Greates Single-Season
      </h1>
      <img
        className="w-full max-w-xl mx-auto mt-4"
        src={`${router.basePath}/assets/one-hit-wonders/intro.png`}
        alt="intro"
      />
      <h1 className="font-serif text-3xl font-bold text-center p-4">
        in the Last 30 Years of Sports
      </h1>
      <p className="p-6 text-sm text-center">
        By&nbsp;
        <a className="font-bold underline">Russell Goldenberg</a>
        &nbsp;and&nbsp;
        <a className="font-bold underline">Jan Diehm</a>
      </p>
      <div className="font-serif text-lg leading-7">
        <p className="my-5">
          Everyone knows the one-hit wonders in music: classic jams such as{' '}
          <u className="underline">“Who Let the Dogs Out?”</u> by Baha Men, a
          group that charted once in their career. But what do we get when we
          apply this concept to the world of sports?
        </p>
        <p className="my-5">
          Answers often include heroic performances, such as Buster Douglas{' '}
          <u>knocking out Mike Tyson</u>, or brief runs (e.g., <u>Linsanity</u>
          ). Yet capturing lightning in a bottle is much easier to do in a
          single game compared to an entire season. Let’s look at which athletes
          made it to the top of their sport just once— unable to reproduce their
          success.
        </p>
      </div>
    </div>
  );
}
