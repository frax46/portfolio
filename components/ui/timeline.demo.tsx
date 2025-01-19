import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2019-Present",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-white font-outfit">Grosvenor Casinos - London</h4>
            <p className="text-sm font-medium text-[#f97316]">Cashier/Dealer</p>
          </div>
          <ul className="list-disc pl-4 text-sm text-white/70 space-y-2 font-inter">
            <li>Making sure to track all customer movements and payouts</li>
            <li>Dealing most casino games including roulette and BlackJack</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2016-2019",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-white font-outfit">Genting Casinos - Portsmouth</h4>
            <p className="text-sm font-medium text-[#f97316]">Cashier/Key holder</p>
          </div>
          <ul className="list-disc pl-4 text-sm text-white/70 space-y-2 font-inter">
            <li>Tracking customer movements and generating reports</li>
            <li>Design of marketing posters and onsite promotion</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2016",
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-white font-outfit">Bellavita - London</h4>
            <p className="text-sm font-medium text-[#f97316]">IT Manager</p>
          </div>
          <ul className="list-disc pl-4 text-sm text-white/70 space-y-2 font-inter">
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
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-white font-outfit">WMW - London</h4>
            <p className="text-sm font-medium text-[#f97316]">Web Developer</p>
          </div>
          <ul className="list-disc pl-4 text-sm text-white/70 space-y-2 font-inter">
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
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-white font-outfit">Dijitalmedia - London</h4>
            <p className="text-sm font-medium text-[#f97316]">Web Developer</p>
          </div>
          <ul className="list-disc pl-4 text-sm text-white/70 space-y-2 font-inter">
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
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-white font-outfit">Casino Experience</h4>
            <p className="text-sm font-medium text-[#f97316]">Casino Dealer at Various Locations</p>
          </div>
          <ul className="list-disc pl-4 text-sm text-white/70 space-y-2 font-inter">
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
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-white font-outfit">Olomedia PA - Italy</h4>
            <p className="text-sm font-medium text-[#f97316]">Front and Back Developer</p>
          </div>
          <ul className="list-disc pl-4 text-sm text-white/70 space-y-2 font-inter">
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