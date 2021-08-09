import React, { useEffect, useRef, useState } from 'react';

import Chart from './Chart';
import allData from './data.json';
import Hero from './Hero';
import Nav from './Nav';

const Leagues = [
  'nba',
  'wnba',
  'pga',
  'lpga',
  'mlb',
  'atp',
  'wta',
  'nhl',
] as const;

type LeagueType = typeof Leagues[number];

const SPORTS_LEAGURE: {
  [league in LeagueType]: {
    sports: string;
    league: string;
    img: string;
    color: string;
    hero: {
      id: string;
      heroName: string;
      heroImage: string;
      years: string;
      highestRank: string;
      median: number;
    };
  };
} = {
  nba: {
    sports: 'basketball',
    league: 'nba',
    img: 'nba@2x.png',
    color: '#f28a22',
    hero: {
      id: 'barroda01',
      heroName: 'Dana Barros',
      heroImage: 'barroda01@2x.png',
      years: '1990-2004',
      highestRank: '8th',
      median: 153,
    },
  },
  wnba: {
    sports: 'basketball',
    league: 'wnba',
    img: 'wnba@2x.png',
    color: '#f28a22',
    hero: {
      id: 'reidtr01w',
      heroName: 'Tracy Reids',
      heroImage: 'reidtr01w@2x.png',
      years: '1998-2003',
      highestRank: '15th',
      median: 160,
    },
  },
  pga: {
    sports: 'golf',
    league: 'pga',
    img: 'pga@2x.png',
    color: '#adc156',
    hero: {
      id: '23614',
      heroName: 'Rich Beem',
      heroImage: '23614@2x.png',
      years: '1988-2017',
      highestRank: '7th',
      median: 134,
    },
  },
  lpga: {
    sports: 'golf',
    league: 'lpga',
    img: 'lpga@2x.png',
    color: '#adc156',
    hero: {
      id: 'hilary-lunke-0',
      heroName: 'Hilary Lunke',
      heroImage: 'hilary-lunke-0@2x.png',
      years: '2003-2007',
      highestRank: '16th',
      median: 113,
    },
  },
  mlb: {
    sports: 'baseball',
    league: 'mlb',
    img: 'mlb@2x.png',
    color: '#4758D8',
    hero: {
      id: '1703',
      heroName: 'Dontrelle Willis',
      heroImage: '1703@2x.png',
      years: '2003-2011',
      highestRank: '8th',
      median: 385,
    },
  },
  atp: {
    sports: 'tennis',
    league: 'atp',
    img: 'atp@2x.png',
    color: '#d64107',
    hero: {
      id: 'v232',
      heroName: 'Martin Verkerk',
      heroImage: 'v232@2x.png',
      years: '1996-2008',
      highestRank: '19th',
      median: 263,
    },
  },
  wta: {
    sports: 'tennis',
    league: 'wta',
    img: 'wta@2x.png',
    color: '#d64107',
    hero: {
      id: '201368',
      heroName: 'Karolina Sprem',
      heroImage: '201368@2x.png',
      years: '2002-2011',
      highestRank: '18th',
      median: 94,
    },
  },
  nhl: {
    sports: 'hockey',
    league: 'nhl',
    img: 'nhl@2x.png',
    color: '#48ccd3',
    hero: {
      id: 'hudleji01',
      heroName: 'Jiri Hudler',
      heroImage: 'hudleji01@2x.png',
      years: '2004-2017',
      highestRank: '13th',
      median: 220,
    },
  },
};

export default function Content() {
  const [curLeagueIndex, setCurLeagueIndex] = useState(0);
  const leaguesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const leagues = leaguesRef.current;
    if (!leagues) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurLeagueIndex(
              Array.from(leagues.children).indexOf(entry.target)
            );
          }
        });
      },
      {
        rootMargin: '-50% 0%',
      }
    );

    Array.from(leagues.children).map((child) => observer.observe(child));
  }, []);

  const onClickNav = (index: number) => {
    const leagues = leaguesRef.current;
    if (!leagues) return;

    const child = leagues.children[index] as HTMLElement;
    if (child) window.scrollTo(0, child.offsetTop - 120);
  };

  return (
    <main className="font-serif">
      <Nav
        curIndex={curLeagueIndex}
        items={Leagues.map((league) => SPORTS_LEAGURE[league])}
        onClick={onClickNav}
      />
      <div className="max-w-screen-sm mx-auto mb-8">
        <h3 className="text-2xl font-bold my-10">
          How do you define a one-hit wonder?
        </h3>
        <p className="text-lg">
          To keep things simple, there are just two rules: 1. have{' '}
          <span className="bg-gray-200 rounded px-1 hover:text-gray-700">
            one amazing year
          </span>
          , finishing as a top 20 athlete and 2.{' '}
          <span className="bg-gray-200 rounded px-1 hover:text-gray-700">
            never come close to duplicating that success
          </span>{' '}
          (no top 50 finishes outside of their peak season).
        </p>
      </div>
      <div ref={leaguesRef} className="leagues max-w-[70rem] mx-auto">
        <div className="mb-16 pb-8 border-b border-gray-400">
          <Hero {...SPORTS_LEAGURE.nba} {...SPORTS_LEAGURE.nba.hero}>
            <Chart
              data={allData
                .filter((data) => data.id === SPORTS_LEAGURE.nba.hero.id)
                .sort((a, b) => a.year - b.year)}
              median={SPORTS_LEAGURE.nba.hero.median}
              color={SPORTS_LEAGURE.nba.color}
            />
          </Hero>
          <div className="max-w-screen-sm mx-auto">
            <p className="text-lg">
              Dana Barros is the epitome of a one-hit wonder. His breakout
              1994-95 season on the Sixers sent him to the All-Star game and
              earned him the Most Improved Player award. He put up 20 ppg, seven
              points higher than his next best season. He signed with the
              Celtics the following year, but his minutes (and numbers) dropped
              for good. In the last 30 years, the NBA produced just a few
              one-hit wonders that fit our criteria. The results include
              surprises such as Jerry Stackhouse, who was once billed as the
              “next Jordan”, and Ryan Anderson, who like Barros, was named the
              league’s Most Improved Player in his breakout 2011–12 season.
            </p>
          </div>
        </div>
        <div className="mb-16 pb-8 border-b border-gray-400">
          <Hero {...SPORTS_LEAGURE.wnba} {...SPORTS_LEAGURE.wnba.hero}>
            <Chart
              data={allData
                .filter((data) => data.id === SPORTS_LEAGURE.wnba.hero.id)
                .sort((a, b) => a.year - b.year)}
              median={SPORTS_LEAGURE.wnba.hero.median}
              color={SPORTS_LEAGURE.wnba.color}
            />
          </Hero>
          <div className="max-w-screen-sm mx-auto">
            <p className="text-lg">
              Tracy Reid was drafted 7th overall in the 1998 by the now defunct
              Charlotte Sting, and was named Rookie of the Year in her first
              season—the lowest pick ever to earn that honor. Injuries limited
              her playing time the following season, and she was traded twice
              during the remaining four years of her career. During her last
              season in 2002, she appeared in Juwanna Mann. Since the WNBA began
              in 1997, with an average player career of three seasons, Reid was
              the only one-hit wonder to make our list.
            </p>
          </div>
        </div>
        <div className="mb-16 pb-8 border-b border-gray-400">
          <Hero {...SPORTS_LEAGURE.pga} {...SPORTS_LEAGURE.pga.hero}>
            <Chart
              data={allData
                .filter((data) => data.id === SPORTS_LEAGURE.pga.hero.id)
                .sort((a, b) => a.year - b.year)}
              median={SPORTS_LEAGURE.pga.hero.median}
              color={SPORTS_LEAGURE.pga.color}
            />
          </Hero>
          <div className="max-w-screen-sm mx-auto">
            <p className="text-lg">
              Not many players have gone toe-to-toe with (pre-incident) Tiger
              Woods and come out on top. Rich Beem finished one stroke ahead of
              Woods at the 2002 PGA Championship to record his first and only
              major title. Until this win, Beem was best known for his rowdy
              tour lifestyle, chronicled in the book Bud, Sweat, And Tees. Beem
              dropped out of the top 100 in 2004 and never returned. But in
              2007, Beem’s flashy antics threw him back in the spotlight. He
              sunk a hole-in-one at the Nissan Open to win a new Altima, climbed
              on top of the car in celebration, and became part of a Nissan
              commercial.
            </p>
          </div>
        </div>
        <div className="mb-16 pb-8 border-b border-gray-400">
          <Hero {...SPORTS_LEAGURE.lpga} {...SPORTS_LEAGURE.lpga.hero}>
            <Chart
              data={allData
                .filter((data) => data.id === SPORTS_LEAGURE.lpga.hero.id)
                .sort((a, b) => a.year - b.year)}
              median={SPORTS_LEAGURE.lpga.hero.median}
              color={SPORTS_LEAGURE.lpga.color}
            />
          </Hero>
          <div className="max-w-screen-sm mx-auto">
            <p className="text-lg">
              Hilary Lunke had never won an LPGA event before winning the 2003
              U.S. Women’s Open in an 18-hole playoff. And she never won again.
              Lunke’s Cinderella story began by advancing through local and
              sectional qualifying. She was the first woman to win a
              championship from the qualifying rounds. Lunke gave birth to her
              first of three daughters in November 2007 and retired at the end
              of the 2008 season.
            </p>
          </div>
        </div>
        <div className="mb-16 pb-8 border-b border-gray-400">
          <Hero {...SPORTS_LEAGURE.mlb} {...SPORTS_LEAGURE.mlb.hero}>
            <Chart
              data={allData
                .filter((data) => data.id === SPORTS_LEAGURE.mlb.hero.id)
                .sort((a, b) => a.year - b.year)}
              median={SPORTS_LEAGURE.mlb.hero.median}
              color={SPORTS_LEAGURE.mlb.color}
            />
          </Hero>
          <div className="max-w-screen-sm mx-auto">
            <p className="text-lg">
              Dontrelle Willis, the “D-Train,” earned National League Rookie of
              the Year honors in his first season with the Florida Marlins. He
              continued his climb, and in 2005 finished second in the National
              League Cy Young Award voting behind Chris Carpenter of the St.
              Louis Cardinals. But by 2007, Willis’ consistency dropped and he
              bounced around the league. His last season in the majors was 2011,
              but the “D-Train” continued chugging in the minors until his
              retirement in 2015. Willis is joined by 31 other MLBers who made
              our one-hit wonder list including: pitcher Mark Prior, shortstop
              Edgar Renteria, and outfielders Yasiel Puig and Yoenis Cespedes.
            </p>
          </div>
        </div>
        <div className="mb-16 pb-8 border-b border-gray-400">
          <Hero {...SPORTS_LEAGURE.atp} {...SPORTS_LEAGURE.atp.hero}>
            <Chart
              data={allData
                .filter((data) => data.id === SPORTS_LEAGURE.atp.hero.id)
                .sort((a, b) => a.year - b.year)}
              median={SPORTS_LEAGURE.atp.hero.median}
              color={SPORTS_LEAGURE.atp.color}
            />
          </Hero>
          <div className="max-w-screen-sm mx-auto">
            <p className="text-lg">
              Martin Verkerk was relatively unknown before he made it to the
              French Open finals in 2003. The unseeded Dutchman, playing in only
              his third Grand Slam and first time at Roland Garros, fell to Juan
              Carlos Ferrero in straight sets. Five months later, he had another
              impressive performance at the Paris Masters, losing to Roger
              Federer in three tiebreak sets. Ankle injuries and mononucleosis
              kept him off the court for two seasons. When he returned, he
              qualified for the 2007 French Open, but wasn’t able to duplicate
              his magical run. Like Verkerk, the other two ATP one-hit wonders,
              Joachim Johansson and Franco Squillari, each had a single run deep
              into a major tournament that elevated their ranking.
            </p>
          </div>
        </div>
        <div className="mb-16 pb-8 border-b border-gray-400">
          <Hero {...SPORTS_LEAGURE.wta} {...SPORTS_LEAGURE.wta.hero}>
            <Chart
              data={allData
                .filter((data) => data.id === SPORTS_LEAGURE.wta.hero.id)
                .sort((a, b) => a.year - b.year)}
              median={SPORTS_LEAGURE.wta.hero.median}
              color={SPORTS_LEAGURE.wta.color}
            />
          </Hero>
          <div className="max-w-screen-sm mx-auto">
            <p className="text-lg">
              At 19 years old, Croatian Karolina Sprem broke into the top 20
              after defeating then-two-time champion Venus Williams in route to
              the 2004 Wimbledon quarterfinals—a match that might be more
              remembered by an error that awarded Sprem an extra point during
              the second-set tie-break. She was never able to duplicate that
              success and failed to win a WTA tournament during her
              career—earning only three runner-up finishes. Sprem hasn’t played
              since suffering a wrist injury in 2011. She married fellow tennis
              player Marcos Baghdatis in 2012.
            </p>
          </div>
        </div>
        <div className="mb-16 pb-8 border-b border-gray-400">
          <Hero {...SPORTS_LEAGURE.nhl} {...SPORTS_LEAGURE.nhl.hero}>
            <Chart
              data={allData
                .filter((data) => data.id === SPORTS_LEAGURE.nhl.hero.id)
                .sort((a, b) => a.year - b.year)}
              median={SPORTS_LEAGURE.nhl.hero.median}
              color={SPORTS_LEAGURE.nhl.color}
            />
          </Hero>
          <div className="max-w-screen-sm mx-auto">
            <p className="text-lg">
              Despite winning the Stanley Cup with the Detroit Red Wings in
              2008, Jiri Hudler didn’t break into the top 20 until 2015 with the
              Calgary Flames. The Czech forward was also awarded the Lady Byng
              Trophy for the NHL&apos;s most sportsmanlike player that same
              year. After not securing a contract for the 2017-18 season,
              Hudler’s reputation and playing career took a dive when a Czech
              newspaper reported that Hudler was accused of having a belligerent
              outburst on a Delta Airlines flight. He allegedly threatened a
              flight attendant, demanded cocaine, and tried to pee in a food
              cart.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
