import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2019-2025",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-light text-gray-900 mb-2">Grosvenor Casinos - London</h4>
            <p className="text-base text-gray-500">Cashier/Dealer</p>
          </div>
          <ul className="space-y-3">
            <li className="text-gray-700 text-base font-light">Making sure to track all customer movements and payouts</li>
            <li className="text-gray-700 text-base font-light">Dealing most casino games including roulette and BlackJack</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2016-2019",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-light text-gray-900 mb-2">Genting Casinos - Portsmouth</h4>
            <p className="text-base text-gray-500">Cashier/Key holder</p>
          </div>
          <ul className="space-y-3">
            <li className="text-gray-700 text-base font-light">Tracking customer movements and generating reports</li>
            <li className="text-gray-700 text-base font-light">Design of marketing posters and onsite promotion</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2016",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-light text-gray-900 mb-2">Bellavita - London</h4>
            <p className="text-base text-gray-500">IT Manager</p>
          </div>
          <ul className="space-y-3">
            <li className="text-gray-700 text-base font-light">Website development using HTML, CSS, PHP, Javascript, jQuery, MySQL</li>
            <li className="text-gray-700 text-base font-light">Working with Bootstrap and Laravel framework</li>
            <li className="text-gray-700 text-base font-light">WordPress theme development</li>
            <li className="text-gray-700 text-base font-light">Technical support and issue resolution</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2015-2016",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-light text-gray-900 mb-2">WMW - London</h4>
            <p className="text-base text-gray-500">Web Developer</p>
          </div>
          <ul className="space-y-3">
            <li className="text-gray-700 text-base font-light">Full-stack development with HTML, CSS, PHP, Javascript, jQuery, MySQL</li>
            <li className="text-gray-700 text-base font-light">Experience with Bootstrap and Laravel framework</li>
            <li className="text-gray-700 text-base font-light">WordPress and Joomla development</li>
            <li className="text-gray-700 text-base font-light">Basic Angular JS and Compass</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2014-2015",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-light text-gray-900 mb-2">Dijitalmedia - London</h4>
            <p className="text-base text-gray-500">Web Developer</p>
          </div>
          <ul className="space-y-3">
            <li className="text-gray-700 text-base font-light">Website development using modern technologies</li>
            <li className="text-gray-700 text-base font-light">Working with Bootstrap and Laravel framework</li>
            <li className="text-gray-700 text-base font-light">CMS development (WordPress and Joomla)</li>
            <li className="text-gray-700 text-base font-light">Basic Angular JS implementation</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2012-2014",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-light text-gray-900 mb-2">Casino Experience</h4>
            <p className="text-base text-gray-500">Casino Dealer at Various Locations</p>
          </div>
          <ul className="space-y-3">
            <li className="text-gray-700 text-base font-light">Barracuda Casino London (2014)</li>
            <li className="text-gray-700 text-base font-light">MK Casino Milton Keynes (2013)</li>
            <li className="text-gray-700 text-base font-light">Genting Casino Luton (2012-2013)</li>
            <li className="text-gray-700 text-base font-light">Dealing on gaming tables and customer service</li>
            <li className="text-gray-700 text-base font-light">Cash handling and staff management</li>
          </ul>
        </div>
      ),
    },
    {
      title: "2011-2012",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-light text-gray-900 mb-2">Olomedia PA - Italy</h4>
            <p className="text-base text-gray-500">Front and Back Developer</p>
          </div>
          <ul className="space-y-3">
            <li className="text-gray-700 text-base font-light">Full-stack development with HTML, CSS, PHP, Javascript, jQuery, MySQL</li>
            <li className="text-gray-700 text-base font-light">Working with Bootstrap and CodeIgniter framework</li>
          </ul>
        </div>
      ),
    },
  ];
  
  return <Timeline data={data} />;
} 