import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2019-Present",
      content: (
        <div className="space-y-5">
          <div>
            <h4 className="text-2xl font-bold text-white mb-2">Grosvenor Casinos - London</h4>
            <p className="text-lg font-medium text-orange-400">Cashier/Dealer</p>
          </div>
          <ul className="list-disc pl-6 text-base md:text-lg text-white/80 space-y-3">
            <li>Making sure to track all customer movements and payouts</li>
            <li>Dealing most casino games including roulette and BlackJack</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2016-2019",
      content: (
        <div className="space-y-5">
          <div>
            <h4 className="text-2xl font-bold text-white mb-2">Genting Casinos - Portsmouth</h4>
            <p className="text-lg font-medium text-orange-400">Cashier/Key holder</p>
          </div>
          <ul className="list-disc pl-6 text-base md:text-lg text-white/80 space-y-3">
            <li>Tracking customer movements and generating reports</li>
            <li>Design of marketing posters and onsite promotion</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2016",
      content: (
        <div className="space-y-5">
          <div>
            <h4 className="text-2xl font-bold text-white mb-2">Bellavita - London</h4>
            <p className="text-lg font-medium text-orange-400">IT Manager</p>
          </div>
          <ul className="list-disc pl-6 text-base md:text-lg text-white/80 space-y-3">
            <li>Website development using HTML, CSS, PHP, Javascript, jQuery, MySQL</li>
            <li>Working with Bootstrap and Laravel framework</li>
            <li>WordPress theme development</li>
            <li>Technical support and issue resolution</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2015-2016",
      content: (
        <div className="space-y-5">
          <div>
            <h4 className="text-2xl font-bold text-white mb-2">WMW - London</h4>
            <p className="text-lg font-medium text-orange-400">Web Developer</p>
          </div>
          <ul className="list-disc pl-6 text-base md:text-lg text-white/80 space-y-3">
            <li>Full-stack development with HTML, CSS, PHP, Javascript, jQuery, MySQL</li>
            <li>Experience with Bootstrap and Laravel framework</li>
            <li>WordPress and Joomla development</li>
            <li>Basic Angular JS and Compass</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2014-2015",
      content: (
        <div className="space-y-5">
          <div>
            <h4 className="text-2xl font-bold text-white mb-2">Dijitalmedia - London</h4>
            <p className="text-lg font-medium text-orange-400">Web Developer</p>
          </div>
          <ul className="list-disc pl-6 text-base md:text-lg text-white/80 space-y-3">
            <li>Website development using modern technologies</li>
            <li>Working with Bootstrap and Laravel framework</li>
            <li>CMS development (WordPress and Joomla)</li>
            <li>Basic Angular JS implementation</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2012-2014",
      content: (
        <div className="space-y-5">
          <div>
            <h4 className="text-2xl font-bold text-white mb-2">Casino Experience</h4>
            <p className="text-lg font-medium text-orange-400">Casino Dealer at Various Locations</p>
          </div>
          <ul className="list-disc pl-6 text-base md:text-lg text-white/80 space-y-3">
            <li>Barracuda Casino London (2014)</li>
            <li>MK Casino Milton Keynes (2013)</li>
            <li>Genting Casino Luton (2012-2013)</li>
            <li>Dealing on gaming tables and customer service</li>
            <li>Cash handling and staff management</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2011-2012",
      content: (
        <div className="space-y-5">
          <div>
            <h4 className="text-2xl font-bold text-white mb-2">Olomedia PA - Italy</h4>
            <p className="text-lg font-medium text-orange-400">Front and Back Developer</p>
          </div>
          <ul className="list-disc pl-6 text-base md:text-lg text-white/80 space-y-3">
            <li>Full-stack development with HTML, CSS, PHP, Javascript, jQuery, MySQL</li>
            <li>Working with Bootstrap and CodeIgniter framework</li>
          </ul>
        </div>
      ),
    },
  ];
  
  return (
    <div className="min-h-screen w-full">
      <Timeline data={data} />
    </div>
  );
} 