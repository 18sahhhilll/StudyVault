import React from 'react';

// ==========================================
// 1. ATM Use Case Diagram
// ==========================================
export const ATMUseCaseDiagram: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 sm:p-6 text-white shadow-xl">
      <div className="text-center mb-4">
        <h4 className="text-sm sm:text-base font-bold text-sky-400">Use Case Diagram for ATM System</h4>
        <p className="text-xs text-slate-400">Actors, Use Cases, &lt;&lt;include&gt;&gt; and &lt;&lt;extend&gt;&gt; Relationships</p>
      </div>
      <svg viewBox="0 0 850 480" className="w-full h-auto select-none font-sans">
        <defs>
          <marker id="arrow-oomd" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M 0 0 L 8 4 L 0 8 z" fill="#94a3b8" />
          </marker>
          <marker id="open-arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
            <path d="M 0 0 L 8 5 L 0 10" fill="none" stroke="#38bdf8" strokeWidth="1.5" />
          </marker>
        </defs>

        {/* System Boundary Box */}
        <rect x="180" y="30" width="480" height="420" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="2" strokeDasharray="6 4" />
        <rect x="180" y="30" width="160" height="28" rx="6" fill="#1e293b" />
        <text x="190" y="49" fill="#94a3b8" fontSize="12" fontWeight="bold">System: ATM Machine</text>

        {/* Actor 1: Customer (Left) */}
        <g transform="translate(70, 180)">
          <circle cx="20" cy="15" r="14" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <line x1="20" y1="29" x2="20" y2="70" stroke="#38bdf8" strokeWidth="2" />
          <line x1="-5" y1="45" x2="45" y2="45" stroke="#38bdf8" strokeWidth="2" />
          <line x1="20" y1="70" x2="-2" y2="105" stroke="#38bdf8" strokeWidth="2" />
          <line x1="20" y1="70" x2="42" y2="105" stroke="#38bdf8" strokeWidth="2" />
          <text x="20" y="125" textAnchor="middle" fill="#e2e8f0" fontSize="13" fontWeight="bold">Customer</text>
          <text x="20" y="140" textAnchor="middle" fill="#64748b" fontSize="10">(Primary Actor)</text>
        </g>

        {/* Actor 2: Central Bank Host (Right) */}
        <g transform="translate(720, 180)">
          <circle cx="20" cy="15" r="14" fill="#1e293b" stroke="#a855f7" strokeWidth="2" />
          <line x1="20" y1="29" x2="20" y2="70" stroke="#a855f7" strokeWidth="2" />
          <line x1="-5" y1="45" x2="45" y2="45" stroke="#a855f7" strokeWidth="2" />
          <line x1="20" y1="70" x2="-2" y2="105" stroke="#a855f7" strokeWidth="2" />
          <line x1="20" y1="70" x2="42" y2="105" stroke="#a855f7" strokeWidth="2" />
          <text x="20" y="125" textAnchor="middle" fill="#e2e8f0" fontSize="13" fontWeight="bold">Bank Host</text>
          <text x="20" y="140" textAnchor="middle" fill="#64748b" fontSize="10">(Secondary Actor)</text>
        </g>

        {/* Core Use Cases */}
        {/* Withdraw Cash */}
        <g transform="translate(300, 80)">
          <ellipse cx="75" cy="24" rx="75" ry="24" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <text x="75" y="28" textAnchor="middle" fill="#f1f5f9" fontSize="12" fontWeight="600">Withdraw Cash</text>
        </g>

        {/* Check Balance */}
        <g transform="translate(300, 150)">
          <ellipse cx="75" cy="24" rx="75" ry="24" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <text x="75" y="28" textAnchor="middle" fill="#f1f5f9" fontSize="12" fontWeight="600">Check Balance</text>
        </g>

        {/* Transfer Funds */}
        <g transform="translate(300, 220)">
          <ellipse cx="75" cy="24" rx="75" ry="24" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <text x="75" y="28" textAnchor="middle" fill="#f1f5f9" fontSize="12" fontWeight="600">Transfer Funds</text>
        </g>

        {/* Deposit Cash */}
        <g transform="translate(300, 290)">
          <ellipse cx="75" cy="24" rx="75" ry="24" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <text x="75" y="28" textAnchor="middle" fill="#f1f5f9" fontSize="12" fontWeight="600">Deposit Cash</text>
        </g>

        {/* Included Use Case: Authenticate PIN */}
        <g transform="translate(500, 185)">
          <ellipse cx="75" cy="24" rx="75" ry="24" fill="#0f2b38" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="4 3" />
          <text x="75" y="28" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">Authenticate PIN</text>
        </g>

        {/* Extended Use Case: Print Receipt */}
        <g transform="translate(500, 80)">
          <ellipse cx="75" cy="24" rx="75" ry="24" fill="#2d1b4e" stroke="#c084fc" strokeWidth="2" strokeDasharray="4 3" />
          <text x="75" y="28" textAnchor="middle" fill="#e9d5ff" fontSize="11" fontWeight="bold">Print Receipt</text>
        </g>

        {/* Association Lines from Customer */}
        <line x1="110" y1="220" x2="300" y2="104" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="110" y1="220" x2="300" y2="174" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="110" y1="220" x2="300" y2="244" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="110" y1="220" x2="300" y2="314" stroke="#94a3b8" strokeWidth="1.5" />

        {/* Association Lines to Bank Host */}
        <line x1="450" y1="104" x2="720" y2="220" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="450" y1="174" x2="720" y2="220" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="450" y1="244" x2="720" y2="220" stroke="#94a3b8" strokeWidth="1.5" />
        <line x1="650" y1="209" x2="720" y2="220" stroke="#94a3b8" strokeWidth="1.5" />

        {/* <<include>> Dependency Arrows */}
        <g>
          <line x1="435" y1="118" x2="515" y2="185" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#open-arrow)" />
          <text x="495" y="148" fill="#38bdf8" fontSize="10" fontWeight="bold">&lt;&lt;include&gt;&gt;</text>
        </g>
        <g>
          <line x1="450" y1="174" x2="500" y2="195" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#open-arrow)" />
          <text x="460" y="180" fill="#38bdf8" fontSize="10" fontWeight="bold">&lt;&lt;include&gt;&gt;</text>
        </g>

        {/* <<extend>> Dependency Arrow */}
        <g>
          <line x1="500" y1="104" x2="450" y2="104" stroke="#c084fc" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#open-arrow)" />
          <text x="480" y="95" textAnchor="middle" fill="#c084fc" fontSize="10" fontWeight="bold">&lt;&lt;extend&gt;&gt;</text>
        </g>

        {/* Legend */}
        <g transform="translate(200, 380)">
          <rect x="0" y="0" width="440" height="50" rx="6" fill="#1e293b" stroke="#475569" strokeWidth="1" />
          <text x="15" y="20" fill="#cbd5e1" fontSize="11" fontWeight="bold">Key UML Notations:</text>
          <circle cx="20" cy="35" r="4" fill="#38bdf8" />
          <text x="30" y="38" fill="#94a3b8" fontSize="10">Solid line: Direct association</text>
          <line x1="170" y1="35" x2="195" y2="35" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="3 2" />
          <text x="200" y="38" fill="#38bdf8" fontSize="10">&lt;&lt;include&gt;&gt; Mandatory sub-flow</text>
          <line x1="320" y1="35" x2="345" y2="35" stroke="#c084fc" strokeWidth="1.5" strokeDasharray="3 2" />
          <text x="350" y="38" fill="#c084fc" fontSize="10">&lt;&lt;extend&gt;&gt; Optional addition</text>
        </g>
      </svg>
    </div>
  );
};

// ==========================================
// 2. ATM Nested State Diagram (Fig 3.1.1)
// ==========================================
export const ATMNestedStateDiagram: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 sm:p-6 text-white shadow-xl">
      <div className="text-center mb-4">
        <h4 className="text-sm sm:text-base font-bold text-emerald-400">ATM Machine: Nested State Diagram (Fig. 3.1.1)</h4>
        <p className="text-xs text-slate-400">Superstate &quot;Active&quot; Encapsulating Sequential Sub-States</p>
      </div>
      <svg viewBox="0 0 820 400" className="w-full h-auto select-none font-sans">
        <defs>
          <marker id="arrow-nested" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M 0 0 L 8 4 L 0 8 z" fill="#10b981" />
          </marker>
        </defs>

        {/* External State: Idle */}
        <g transform="translate(40, 150)">
          <rect x="0" y="0" width="100" height="44" rx="8" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
          <text x="50" y="27" textAnchor="middle" fill="#f8fafc" fontSize="13" fontWeight="bold">Idle</text>
        </g>

        {/* Superstate: Active */}
        <g transform="translate(200, 30)">
          <rect x="0" y="0" width="580" height="340" rx="16" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
          <rect x="0" y="0" width="100" height="26" rx="6" fill="#064e3b" />
          <text x="12" y="18" fill="#34d399" fontSize="12" fontWeight="bold">Active State</text>

          {/* Initial node inside Active */}
          <circle cx="50" cy="50" r="8" fill="#10b981" />
          <line x1="58" y1="50" x2="100" y2="50" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow-nested)" />

          {/* Sub-State 1: Display */}
          <g transform="translate(100, 30)">
            <rect x="0" y="0" width="110" height="40" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="55" y="25" textAnchor="middle" fill="#f1f5f9" fontSize="12" fontWeight="600">Display</text>
          </g>

          {/* Sub-State 2: Reading Card */}
          <g transform="translate(100, 110)">
            <rect x="0" y="0" width="110" height="40" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="55" y="25" textAnchor="middle" fill="#f1f5f9" fontSize="12" fontWeight="600">Reading card</text>
          </g>

          {/* Sub-State 3: Requesting PIN */}
          <g transform="translate(100, 190)">
            <rect x="0" y="0" width="110" height="40" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="55" y="25" textAnchor="middle" fill="#f1f5f9" fontSize="12" fontWeight="600">Requesting PIN</text>
          </g>

          {/* Sub-State 4: Validating PIN */}
          <g transform="translate(300, 190)">
            <rect x="0" y="0" width="110" height="40" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="55" y="25" textAnchor="middle" fill="#f1f5f9" fontSize="12" fontWeight="600">Validating PIN</text>
          </g>

          {/* Sub-State 5: Performing Transaction */}
          <g transform="translate(300, 30)">
            <rect x="0" y="0" width="150" height="40" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="75" y="25" textAnchor="middle" fill="#f1f5f9" fontSize="12" fontWeight="600">Performing Transaction</text>
          </g>

          {/* Internal Transitions */}
          {/* Display -> Reading Card */}
          <line x1="155" y1="70" x2="155" y2="110" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow-nested)" />
          <text x="162" y="95" fill="#94a3b8" fontSize="10">insert card</text>

          {/* Reading Card -> Requesting PIN */}
          <line x1="155" y1="150" x2="155" y2="190" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow-nested)" />
          <text x="162" y="175" fill="#94a3b8" fontSize="10">complete</text>

          {/* Requesting PIN -> Validating PIN */}
          <line x1="210" y1="210" x2="300" y2="210" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow-nested)" />
          <text x="250" y="202" textAnchor="middle" fill="#94a3b8" fontSize="10">enter PIN</text>

          {/* Validating PIN self loop (retry) */}
          <path d="M 370 230 C 370 260, 420 260, 410 230" fill="none" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrow-nested)" />
          <text x="420" y="260" fill="#f59e0b" fontSize="10">validating [invalid &lt; 3]</text>

          {/* Validating PIN -> Performing Transaction */}
          <line x1="355" y1="190" x2="355" y2="70" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow-nested)" />
          <text x="362" y="130" fill="#94a3b8" fontSize="10">PIN OK</text>

          {/* Performing Transaction -> Display */}
          <line x1="300" y1="50" x2="210" y2="50" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow-nested)" />
          <text x="255" y="42" textAnchor="middle" fill="#94a3b8" fontSize="10">transaction complete</text>
        </g>

        {/* Transition: Idle -> Active */}
        <path d="M 90 150 C 90 90, 140 70, 200 70" fill="none" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-nested)" />
        <text x="120" y="80" fill="#34d399" fontSize="11" fontWeight="bold">perform startup</text>

        {/* Transition: Active -> Idle */}
        <path d="M 200 240 C 140 240, 100 210, 90 194" fill="none" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrow-nested)" />
        <text x="110" y="250" fill="#f87171" fontSize="11" fontWeight="bold">perform shutdown</text>
      </svg>
    </div>
  );
};

// ==========================================
// 3. Telephone Connection State Diagram
// ==========================================
export const TelephoneStateDiagram: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 sm:p-6 text-white shadow-xl">
      <div className="text-center mb-4">
        <h4 className="text-sm sm:text-base font-bold text-amber-400">Telephone Line Connection: State Transition Diagram</h4>
        <p className="text-xs text-slate-400">States, Events, Guard Conditions &amp; Action Sequences</p>
      </div>
      <svg viewBox="0 0 860 360" className="w-full h-auto select-none font-sans">
        <defs>
          <marker id="arrow-amber" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M 0 0 L 8 4 L 0 8 z" fill="#f59e0b" />
          </marker>
        </defs>

        {/* States in linear layout with transitions */}
        {/* State 1: Idle (On-Hook) */}
        <g transform="translate(30, 80)">
          <circle cx="-15" cy="22" r="7" fill="#f59e0b" />
          <line x1="-8" y1="22" x2="0" y2="22" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrow-amber)" />
          <rect x="0" y="0" width="100" height="44" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <text x="50" y="27" textAnchor="middle" fill="#f1f5f9" fontSize="12" fontWeight="bold">Idle (On-Hook)</text>
        </g>

        {/* State 2: Dial Tone */}
        <g transform="translate(180, 80)">
          <rect x="0" y="0" width="100" height="44" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <text x="50" y="27" textAnchor="middle" fill="#f1f5f9" fontSize="12" fontWeight="bold">Dial Tone</text>
        </g>

        {/* State 3: Dialing */}
        <g transform="translate(330, 80)">
          <rect x="0" y="0" width="100" height="44" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <text x="50" y="27" textAnchor="middle" fill="#f1f5f9" fontSize="12" fontWeight="bold">Dialing Digits</text>
        </g>

        {/* State 4: Connecting */}
        <g transform="translate(480, 80)">
          <rect x="0" y="0" width="100" height="44" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <text x="50" y="27" textAnchor="middle" fill="#f1f5f9" fontSize="12" fontWeight="bold">Connecting</text>
        </g>

        {/* State 5: Ringing (Upper) / Busy (Lower) */}
        <g transform="translate(630, 30)">
          <rect x="0" y="0" width="100" height="44" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
          <text x="50" y="27" textAnchor="middle" fill="#f1f5f9" fontSize="12" fontWeight="bold">Ringing</text>
        </g>
        <g transform="translate(630, 130)">
          <rect x="0" y="0" width="100" height="44" rx="8" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
          <text x="50" y="27" textAnchor="middle" fill="#f1f5f9" fontSize="12" fontWeight="bold">Busy Tone</text>
        </g>

        {/* State 6: Connected (Talking) */}
        <g transform="translate(740, 80)">
          <rect x="0" y="0" width="105" height="44" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
          <text x="52" y="22" textAnchor="middle" fill="#a7f3d0" fontSize="11" fontWeight="bold">Connected</text>
          <text x="52" y="36" textAnchor="middle" fill="#6ee7b7" fontSize="10">(Conversation)</text>
        </g>

        {/* Transitions */}
        {/* Idle -> Dial Tone */}
        <line x1="130" y1="102" x2="180" y2="102" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrow-amber)" />
        <text x="155" y="93" textAnchor="middle" fill="#94a3b8" fontSize="10">off hook</text>

        {/* Dial Tone -> Dialing */}
        <line x1="280" y1="102" x2="330" y2="102" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrow-amber)" />
        <text x="305" y="93" textAnchor="middle" fill="#94a3b8" fontSize="10">dial(digit)</text>

        {/* Dialing self-loop */}
        <path d="M 360 80 C 360 55, 400 55, 400 80" fill="none" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrow-amber)" />
        <text x="380" y="50" textAnchor="middle" fill="#f59e0b" fontSize="10">dial(next digit)</text>

        {/* Dialing -> Connecting */}
        <line x1="430" y1="102" x2="480" y2="102" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrow-amber)" />
        <text x="455" y="93" textAnchor="middle" fill="#94a3b8" fontSize="10">timeout / 10 digits</text>

        {/* Connecting -> Ringing / Busy */}
        <path d="M 580 95 L 630 55" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow-amber)" />
        <text x="600" y="65" fill="#34d399" fontSize="10">[callee free]</text>

        <path d="M 580 110 L 630 150" stroke="#ef4444" strokeWidth="1.5" markerEnd="url(#arrow-amber)" />
        <text x="600" y="145" fill="#f87171" fontSize="10">[callee busy]</text>

        {/* Ringing -> Connected */}
        <path d="M 730 55 L 755 80" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow-amber)" />
        <text x="755" y="60" fill="#34d399" fontSize="10">callee answers</text>

        {/* Return to Idle (On-Hook hang up) */}
        <path d="M 790 124 C 790 280, 80 280, 80 124" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arrow-amber)" />
        <text x="430" y="270" textAnchor="middle" fill="#cbd5e1" fontSize="11" fontWeight="bold">Hang up (On-Hook at any moment resets to Idle)</text>
      </svg>
    </div>
  );
};

// ==========================================
// 4. Car Rental Sequence Diagram
// ==========================================
export const CarRentalSequenceDiagram: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 sm:p-6 text-white shadow-xl">
      <div className="text-center mb-4">
        <h4 className="text-sm sm:text-base font-bold text-cyan-400">Sequence Diagram: &apos;Rent a Car&apos; Online Booking Flow</h4>
        <p className="text-xs text-slate-400">Lifelines, Synchronous Calls, Asynchronous Notifications &amp; Activation Boxes</p>
      </div>
      <svg viewBox="0 0 840 440" className="w-full h-auto select-none font-sans">
        <defs>
          <marker id="arrow-seq" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M 0 0 L 8 4 L 0 8 z" fill="#38bdf8" />
          </marker>
        </defs>

        {/* Lifeline Headers */}
        {[
          { name: ':Customer', x: 80 },
          { name: ':WebUI', x: 230 },
          { name: ':CarController', x: 390 },
          { name: ':CarDatabase', x: 550 },
          { name: ':BookingService', x: 710 },
        ].map((actor, i) => (
          <g key={i}>
            <rect x={actor.x - 55} y="20" width="110" height="34" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
            <text x={actor.x} y="42" textAnchor="middle" fill="#f8fafc" fontSize="12" fontWeight="bold">{actor.name}</text>
            <line x1={actor.x} y1="54" x2={actor.x} y2="400" stroke="#475569" strokeWidth="1.5" strokeDasharray="4 4" />
          </g>
        ))}

        {/* Activation Bars */}
        <rect x="75" y="75" width="10" height="300" fill="#334155" />
        <rect x="225" y="80" width="10" height="290" fill="#0284c7" />
        <rect x="385" y="100" width="10" height="260" fill="#0369a1" />
        <rect x="545" y="120" width="10" height="60" fill="#1e3a8a" />
        <rect x="705" y="230" width="10" height="120" fill="#4c1d95" />

        {/* Messages */}
        {/* 1: Select car type */}
        <line x1="85" y1="85" x2="225" y2="85" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#arrow-seq)" />
        <text x="155" y="78" textAnchor="middle" fill="#e2e8f0" fontSize="10">1: selectCarType(Family/Sports)</text>

        {/* 2: Query availability */}
        <line x1="235" y1="105" x2="385" y2="105" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#arrow-seq)" />
        <text x="310" y="98" textAnchor="middle" fill="#e2e8f0" fontSize="10">2: getAvailableCars(type)</text>

        {/* 3: Query DB */}
        <line x1="395" y1="125" x2="545" y2="125" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#arrow-seq)" />
        <text x="470" y="118" textAnchor="middle" fill="#e2e8f0" fontSize="10">3: findByCarType(type)</text>

        {/* 4: Return list & rates */}
        <line x1="545" y1="165" x2="395" y2="165" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrow-seq)" />
        <text x="470" y="158" textAnchor="middle" fill="#94a3b8" fontSize="10">4: carListAndRates</text>

        {/* 5: Display available options */}
        <line x1="385" y1="185" x2="235" y2="185" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrow-seq)" />
        <text x="310" y="178" textAnchor="middle" fill="#94a3b8" fontSize="10">5: displayCarOptions()</text>

        {/* 6: Confirm booking */}
        <line x1="85" y1="220" x2="225" y2="220" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#arrow-seq)" />
        <text x="155" y="213" textAnchor="middle" fill="#e2e8f0" fontSize="10">6: confirmBooking(details)</text>

        {/* 7: Create booking */}
        <line x1="235" y1="235" x2="705" y2="235" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#arrow-seq)" />
        <text x="470" y="228" textAnchor="middle" fill="#e2e8f0" fontSize="10">7: processRentalBooking(carId, dates)</text>

        {/* 8: Save to DB */}
        <line x1="705" y1="270" x2="555" y2="270" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#arrow-seq)" />
        <text x="630" y="263" textAnchor="middle" fill="#e2e8f0" fontSize="10">8: saveBookingRecord()</text>

        {/* 9: Return confirmation */}
        <line x1="705" y1="310" x2="235" y2="310" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrow-seq)" />
        <text x="470" y="303" textAnchor="middle" fill="#94a3b8" fontSize="10">9: bookingConfirmed(token)</text>

        {/* 10: Electronic receipt issued to customer */}
        <line x1="225" y1="350" x2="85" y2="350" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-seq)" />
        <text x="155" y="343" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">10: issueElectronicConfirmation()</text>
      </svg>
    </div>
  );
};

// ==========================================
// 5. Activity Diagram for Two-Wheeler Sale
// ==========================================
export const TwoWheelerActivityDiagram: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 sm:p-6 text-white shadow-xl">
      <div className="text-center mb-4">
        <h4 className="text-sm sm:text-base font-bold text-violet-400">Activity Diagram: Selling Two-Wheeler at Dealership</h4>
        <p className="text-xs text-slate-400">Swimlane Partitions: Customer, Salesperson, and Billing / Inventory</p>
      </div>
      <svg viewBox="0 0 840 440" className="w-full h-auto select-none font-sans">
        <defs>
          <marker id="arrow-act" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M 0 0 L 8 4 L 0 8 z" fill="#a855f7" />
          </marker>
        </defs>

        {/* Swimlanes */}
        {/* Lane 1: Customer */}
        <rect x="20" y="20" width="260" height="400" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
        <rect x="20" y="20" width="260" height="30" fill="#1e293b" />
        <text x="150" y="40" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">Customer Lane</text>

        {/* Lane 2: Salesperson */}
        <rect x="280" y="20" width="280" height="400" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
        <rect x="280" y="20" width="280" height="30" fill="#1e293b" />
        <text x="420" y="40" textAnchor="middle" fill="#a855f7" fontSize="12" fontWeight="bold">Salesperson Lane</text>

        {/* Lane 3: Inventory / Accounts */}
        <rect x="560" y="20" width="260" height="400" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
        <rect x="560" y="20" width="260" height="30" fill="#1e293b" />
        <text x="690" y="40" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="bold">Billing &amp; Delivery</text>

        {/* Start node */}
        <circle cx="150" cy="70" r="8" fill="#a855f7" />

        {/* Action 1: Enquire models */}
        <g transform="translate(80, 95)">
          <rect x="0" y="0" width="140" height="36" rx="14" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="70" y="22" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="600">Enquire Models</text>
        </g>
        <line x1="150" y1="78" x2="150" y2="95" stroke="#a855f7" strokeWidth="1.5" markerEnd="url(#arrow-act)" />

        {/* Action 2: Show vehicles (Salesperson) */}
        <g transform="translate(350, 95)">
          <rect x="0" y="0" width="140" height="36" rx="14" fill="#1e293b" stroke="#a855f7" strokeWidth="1.5" />
          <text x="70" y="22" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="600">Show Vehicles</text>
        </g>
        <line x1="220" y1="113" x2="350" y2="113" stroke="#a855f7" strokeWidth="1.5" markerEnd="url(#arrow-act)" />

        {/* Action 3: Choose model (Customer) */}
        <g transform="translate(80, 160)">
          <rect x="0" y="0" width="140" height="36" rx="14" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="70" y="22" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="600">Choose Model</text>
        </g>
        <path d="M 420 131 L 420 178 L 220 178" stroke="#a855f7" strokeWidth="1.5" markerEnd="url(#arrow-act)" fill="none" />

        {/* Decision Diamond: Add Accessories? */}
        <g transform="translate(130, 225)">
          <polygon points="20,0 40,20 20,40 0,20" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
        </g>
        <line x1="150" y1="196" x2="150" y2="225" stroke="#a855f7" strokeWidth="1.5" markerEnd="url(#arrow-act)" />

        {/* Optional Action: Select Accessories */}
        <g transform="translate(80, 285)">
          <rect x="0" y="0" width="140" height="34" rx="14" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="70" y="21" textAnchor="middle" fill="#fde68a" fontSize="10">Add Accessories</text>
        </g>
        <line x1="150" y1="265" x2="150" y2="285" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrow-act)" />
        <text x="160" y="278" fill="#f59e0b" fontSize="9">[Yes]</text>

        {/* Merge Diamond */}
        <g transform="translate(130, 340)">
          <polygon points="20,0 40,20 20,40 0,20" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
        </g>
        <line x1="150" y1="319" x2="150" y2="340" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrow-act)" />
        {/* Bypass path [No] */}
        <path d="M 170 245 C 240 245, 240 360, 170 360" fill="none" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#arrow-act)" />
        <text x="215" y="240" fill="#f59e0b" fontSize="9">[No]</text>

        {/* Action 4: Prepare Quotation (Salesperson) */}
        <g transform="translate(350, 342)">
          <rect x="0" y="0" width="140" height="36" rx="14" fill="#1e293b" stroke="#a855f7" strokeWidth="1.5" />
          <text x="70" y="22" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="600">Provide Quotation</text>
        </g>
        <line x1="170" y1="360" x2="350" y2="360" stroke="#a855f7" strokeWidth="1.5" markerEnd="url(#arrow-act)" />

        {/* Action 5: Billing & Vehicle Handover (Lane 3) */}
        <g transform="translate(620, 342)">
          <rect x="0" y="0" width="150" height="36" rx="14" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
          <text x="75" y="22" textAnchor="middle" fill="#a7f3d0" fontSize="11" fontWeight="600">Payment &amp; Delivery</text>
        </g>
        <line x1="490" y1="360" x2="620" y2="360" stroke="#10b981" strokeWidth="1.5" markerEnd="url(#arrow-act)" />

        {/* End Node */}
        <g transform="translate(695, 395)">
          <circle cx="0" cy="0" r="10" fill="none" stroke="#10b981" strokeWidth="2" />
          <circle cx="0" cy="0" r="6" fill="#10b981" />
        </g>
      </svg>
    </div>
  );
};

// ==========================================
// 6. Subsystem Layers vs Partitions (Fig 4.8.1)
// ==========================================
export const LayersPartitionsDiagram: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 sm:p-6 text-white shadow-xl">
      <div className="text-center mb-4">
        <h4 className="text-sm sm:text-base font-bold text-indigo-400">Subsystem Decomposition: Layers and Partitions (Fig. 4.8.1)</h4>
        <p className="text-xs text-slate-400">Horizontal Layers (Abstraction Levels) vs Vertical Partitions (Functional Independence)</p>
      </div>
      <svg viewBox="0 0 820 380" className="w-full h-auto select-none font-sans">
        {/* Layer Backgrounds (Horizontal) */}
        <g transform="translate(60, 40)">
          {/* Layer 3: Presentation */}
          <rect x="0" y="0" width="700" height="70" rx="8" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" />
          <text x="20" y="40" fill="#a5b4fc" fontSize="13" fontWeight="bold">Layer 3: User Interface &amp; Presentation Tier</text>

          {/* Layer 2: Business Logic */}
          <rect x="0" y="85" width="700" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="20" y="110" fill="#38bdf8" fontSize="13" fontWeight="bold">Layer 2: Application / Domain Logic Tier</text>

          {/* Vertical Partitions inside Layer 2 */}
          <rect x="200" y="120" width="140" height="45" rx="6" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="3 3" />
          <text x="270" y="147" textAnchor="middle" fill="#e2e8f0" fontSize="11">Partition A: Account</text>

          <rect x="360" y="120" width="150" height="45" rx="6" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="3 3" />
          <text x="435" y="147" textAnchor="middle" fill="#e2e8f0" fontSize="11">Partition B: Transaction</text>

          <rect x="530" y="120" width="140" height="45" rx="6" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="3 3" />
          <text x="600" y="147" textAnchor="middle" fill="#e2e8f0" fontSize="11">Partition C: Security</text>

          {/* Layer 1: Data Access */}
          <rect x="0" y="190" width="700" height="60" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
          <text x="20" y="225" fill="#34d399" fontSize="13" fontWeight="bold">Layer 1: Persistence &amp; Database Access Tier</text>

          {/* Layer 0: Hardware / OS */}
          <rect x="0" y="265" width="700" height="50" rx="8" fill="#0f172a" stroke="#64748b" strokeWidth="1.5" />
          <text x="20" y="295" fill="#94a3b8" fontSize="13" fontWeight="bold">Layer 0: Operating System, Network &amp; Hardware</text>
        </g>

        {/* Callout Arrows */}
        {/* Horizontal Arrow for Layers */}
        <g transform="translate(10, 40)">
          <line x1="20" y1="315" x2="20" y2="0" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow-oomd)" />
          <text x="-160" y="10" transform="rotate(-90)" fill="#f59e0b" fontSize="12" fontWeight="bold">LAYERS: Varying Abstraction Levels</text>
        </g>

        {/* Horizontal Arrow for Partitions */}
        <g transform="translate(260, 350)">
          <line x1="0" y1="0" x2="410" y2="0" stroke="#0ea5e9" strokeWidth="2" markerEnd="url(#arrow-oomd)" />
          <text x="205" y="18" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">PARTITIONS: Functional Separation (Same Abstraction)</text>
        </g>
      </svg>
    </div>
  );
};

// ==========================================
// 7. ATM Distributed Architecture (Fig 4.17.1)
// ==========================================
export const ATMDistributedArchitectureDiagram: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 sm:p-6 text-white shadow-xl">
      <div className="text-center mb-4">
        <h4 className="text-sm sm:text-base font-bold text-sky-400">Architecture of the ATM System: Distributed Architecture (Fig. 4.17.1)</h4>
        <p className="text-xs text-slate-400">Deployment Topology: ATM Nodes, WAN/Internet Cloud, Regional Servers, State Server &amp; Backup</p>
      </div>
      <svg viewBox="0 0 840 400" className="w-full h-auto select-none font-sans">
        <defs>
          <radialGradient id="cloud-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0369a1" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.9" />
          </radialGradient>
        </defs>

        {/* ATM Client Nodes (Left) */}
        <g transform="translate(50, 40)">
          <rect x="0" y="0" width="120" height="54" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <rect x="10" y="8" width="100" height="24" rx="4" fill="#0f172a" />
          <text x="60" y="24" textAnchor="middle" fill="#38bdf8" fontSize="10">🖥️ Screen</text>
          <text x="60" y="46" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold">:ATM Node 1</text>
        </g>

        <g transform="translate(50, 150)">
          <rect x="0" y="0" width="120" height="54" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <rect x="10" y="8" width="100" height="24" rx="4" fill="#0f172a" />
          <text x="60" y="24" textAnchor="middle" fill="#38bdf8" fontSize="10">🖥️ Screen</text>
          <text x="60" y="46" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold">:ATM Node 2</text>
        </g>

        <g transform="translate(50, 260)">
          <rect x="0" y="0" width="120" height="54" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <rect x="10" y="8" width="100" height="24" rx="4" fill="#0f172a" />
          <text x="60" y="24" textAnchor="middle" fill="#38bdf8" fontSize="10">🖥️ Screen</text>
          <text x="60" y="46" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold">:ATM Node n</text>
        </g>

        {/* Internet / Communication Cloud (Middle) */}
        <g transform="translate(240, 120)">
          <ellipse cx="90" cy="65" rx="90" ry="65" fill="url(#cloud-grad)" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="5 3" />
          <text x="90" y="60" textAnchor="middle" fill="#38bdf8" fontSize="14" fontWeight="bold">Internet /</text>
          <text x="90" y="78" textAnchor="middle" fill="#cbd5e1" fontSize="12">WAN Backbone</text>
        </g>

        {/* Connections from Nodes to Cloud */}
        <line x1="170" y1="67" x2="250" y2="150" stroke="#38bdf8" strokeWidth="2" />
        <line x1="170" y1="177" x2="240" y2="185" stroke="#38bdf8" strokeWidth="2" />
        <line x1="170" y1="287" x2="250" y2="220" stroke="#38bdf8" strokeWidth="2" />

        {/* Regional Servers (Tier 2) */}
        <g transform="translate(480, 70)">
          <rect x="0" y="0" width="140" height="70" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
          <text x="70" y="32" textAnchor="middle" fill="#34d399" fontSize="12" fontWeight="bold">:Regional Server</text>
          <text x="70" y="52" textAnchor="middle" fill="#94a3b8" fontSize="10">(West Region Host)</text>
        </g>

        <g transform="translate(480, 220)">
          <rect x="0" y="0" width="140" height="70" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
          <text x="70" y="32" textAnchor="middle" fill="#34d399" fontSize="12" fontWeight="bold">:Regional Server</text>
          <text x="70" y="52" textAnchor="middle" fill="#94a3b8" fontSize="10">(South Region Host)</text>
        </g>

        {/* Connections from Cloud to Regional Servers */}
        <line x1="410" y1="165" x2="480" y2="105" stroke="#10b981" strokeWidth="2" />
        <line x1="410" y1="195" x2="480" y2="255" stroke="#10b981" strokeWidth="2" />

        {/* Central State Server (Tier 3) */}
        <g transform="translate(680, 70)">
          <rect x="0" y="0" width="130" height="75" rx="8" fill="#311042" stroke="#c084fc" strokeWidth="2" />
          <text x="65" y="35" textAnchor="middle" fill="#e9d5ff" fontSize="12" fontWeight="bold">:State Server</text>
          <text x="65" y="54" textAnchor="middle" fill="#c084fc" fontSize="10">(Consortium Switch)</text>
        </g>

        {/* Backup Server (Tier 3) */}
        <g transform="translate(680, 220)">
          <rect x="0" y="0" width="130" height="75" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 3" />
          <text x="65" y="35" textAnchor="middle" fill="#fde68a" fontSize="12" fontWeight="bold">:Backup Server</text>
          <text x="65" y="54" textAnchor="middle" fill="#f59e0b" fontSize="10">(Disaster Recovery)</text>
        </g>

        {/* Connections between Regional Servers and State/Backup Servers */}
        <line x1="620" y1="105" x2="680" y2="105" stroke="#c084fc" strokeWidth="2" />
        <line x1="620" y1="105" x2="680" y2="255" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="620" y1="255" x2="680" y2="105" stroke="#c084fc" strokeWidth="2" />
        <line x1="620" y1="255" x2="680" y2="255" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 3" />

        {/* Architecture Note */}
        <g transform="translate(640, 10)">
          <path d="M 0 0 L 140 0 L 160 20 L 160 45 L 0 45 Z" fill="#1e293b" stroke="#64748b" strokeWidth="1" />
          <text x="10" y="16" fill="#cbd5e1" fontSize="9" fontWeight="bold">Note: State&apos;s server</text>
          <text x="10" y="30" fill="#94a3b8" fontSize="9">attached to National Switch</text>
        </g>
      </svg>
    </div>
  );
};

// ==========================================
// 8. Conversion: Inheritance to Delegation (Fig 5.9.2)
// ==========================================
export const InheritanceToDelegationDiagram: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 sm:p-6 text-white shadow-xl">
      <div className="text-center mb-4">
        <h4 className="text-sm sm:text-base font-bold text-emerald-400">Adjustment of Inheritance: Converting to Aggregation / Delegation (Fig. 5.9.2)</h4>
        <p className="text-xs text-slate-400">Avoiding Flawed Implementation Inheritance of Matrix from TwoDArray</p>
      </div>
      <svg viewBox="0 0 840 340" className="w-full h-auto select-none font-sans">
        <defs>
          <marker id="gen-arrow" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
            <polygon points="0,0 12,6 0,12" fill="#1e293b" stroke="#ef4444" strokeWidth="1.5" />
          </marker>
        </defs>

        {/* LEFT: Flawed Inheritance Design */}
        <g transform="translate(50, 40)">
          <rect x="0" y="0" width="280" height="260" rx="8" fill="#0f172a" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 4" />
          <text x="140" y="24" textAnchor="middle" fill="#f87171" fontSize="12" fontWeight="bold">❌ Flawed: Implementation Inheritance</text>

          {/* Superclass: TwoDArray */}
          <g transform="translate(60, 40)">
            <rect x="0" y="0" width="160" height="60" rx="4" fill="#1e293b" stroke="#94a3b8" strokeWidth="1.5" />
            <rect x="0" y="0" width="160" height="24" rx="4" fill="#334155" />
            <text x="80" y="17" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold">TwoDArray</text>
            <text x="10" y="38" fill="#94a3b8" fontSize="10">+read_array()</text>
            <text x="10" y="52" fill="#94a3b8" fontSize="10">+print_array()</text>
          </g>

          {/* Generalization Arrow */}
          <line x1="140" y1="160" x2="140" y2="100" stroke="#ef4444" strokeWidth="2" markerEnd="url(#gen-arrow)" />

          {/* Subclass: Matrix */}
          <g transform="translate(60, 160)">
            <rect x="0" y="0" width="160" height="80" rx="4" fill="#1e293b" stroke="#94a3b8" strokeWidth="1.5" />
            <rect x="0" y="0" width="160" height="24" rx="4" fill="#334155" />
            <text x="80" y="17" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold">Matrix</text>
            <text x="10" y="40" fill="#94a3b8" fontSize="10">+mat_mul()</text>
            <text x="10" y="55" fill="#94a3b8" fontSize="10">+mat_add()</text>
            <text x="10" y="70" fill="#94a3b8" fontSize="10">+mat_transpose()</text>
          </g>
        </g>

        {/* Big Transition Arrow */}
        <g transform="translate(360, 160)">
          <line x1="0" y1="0" x2="50" y2="0" stroke="#10b981" strokeWidth="4" />
          <polygon points="50,-8 65,0 50,8" fill="#10b981" />
          <text x="30" y="24" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">Refactor</text>
        </g>

        {/* RIGHT: Correct Aggregation / Delegation Design */}
        <g transform="translate(450, 40)">
          <rect x="0" y="0" width="340" height="260" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
          <text x="170" y="24" textAnchor="middle" fill="#34d399" fontSize="12" fontWeight="bold">✅ Recommended: Delegation / Aggregation</text>

          {/* Class: TwoDArray */}
          <g transform="translate(20, 70)">
            <rect x="0" y="0" width="130" height="80" rx="4" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
            <rect x="0" y="0" width="130" height="24" rx="4" fill="#0369a1" />
            <text x="65" y="17" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold">TwoDArray</text>
            <text x="10" y="42" fill="#cbd5e1" fontSize="10">+read_array()</text>
            <text x="10" y="58" fill="#cbd5e1" fontSize="10">+print_array()</text>
          </g>

          {/* Aggregation Association Line with Diamond */}
          <g transform="translate(150, 110)">
            <line x1="0" y1="0" x2="40" y2="0" stroke="#10b981" strokeWidth="2" />
            {/* Open aggregation diamond on Matrix end */}
            <polygon points="40,0 48,-6 56,0 48,6" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
            <text x="5" y="-6" fill="#94a3b8" fontSize="10">1</text>
            <text x="35" y="-6" fill="#94a3b8" fontSize="10">1</text>
          </g>

          {/* Class: Matrix */}
          <g transform="translate(206, 60)">
            <rect x="0" y="0" width="120" height="110" rx="4" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
            <rect x="0" y="0" width="120" height="24" rx="4" fill="#064e3b" />
            <text x="60" y="17" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold">Matrix</text>
            <text x="10" y="40" fill="#a7f3d0" fontSize="9">-arr: TwoDArray</text>
            <line x1="0" y1="46" x2="120" y2="46" stroke="#475569" strokeWidth="1" />
            <text x="10" y="60" fill="#cbd5e1" fontSize="9">+mat_mul()</text>
            <text x="10" y="75" fill="#cbd5e1" fontSize="9">+mat_add()</text>
            <text x="10" y="90" fill="#cbd5e1" fontSize="9">+mat_transpose()</text>
          </g>

          <text x="170" y="210" textAnchor="middle" fill="#94a3b8" fontSize="11">Matrix holds a private TwoDArray instance.</text>
          <text x="170" y="230" textAnchor="middle" fill="#a7f3d0" fontSize="10">Allows alternate sparse matrix representation safely!</text>
        </g>
      </svg>
    </div>
  );
};

// ==========================================
// 9. Legacy System Layers & Wrapping (Fig 5.17.1)
// ==========================================
export const LegacyWrappingDiagram: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 sm:p-6 text-white shadow-xl">
      <div className="text-center mb-4">
        <h4 className="text-sm sm:text-base font-bold text-amber-400">Legacy System: 4-Layer Architecture and Wrapping (Fig. 5.17.1)</h4>
        <p className="text-xs text-slate-400">Encapsulating Complex Legacy Code via Object-Oriented Boundary Classes</p>
      </div>
      <svg viewBox="0 0 820 340" className="w-full h-auto select-none font-sans">
        {/* Outer Modern Application Client */}
        <g transform="translate(40, 110)">
          <rect x="0" y="0" width="140" height="80" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <text x="70" y="35" textAnchor="middle" fill="#38bdf8" fontSize="12" fontWeight="bold">Modern Web /</text>
          <text x="70" y="55" textAnchor="middle" fill="#e2e8f0" fontSize="11">Mobile App Client</text>
        </g>

        {/* Invocation Arrow */}
        <line x1="180" y1="150" x2="250" y2="150" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow-oomd)" />
        <text x="215" y="142" textAnchor="middle" fill="#38bdf8" fontSize="10">API Call</text>

        {/* Wrapper Enclosure */}
        <g transform="translate(250, 40)">
          <rect x="0" y="0" width="530" height="260" rx="12" fill="#0f2b38" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="5 4" />
          <rect x="0" y="0" width="170" height="26" rx="6" fill="#0284c7" />
          <text x="12" y="18" fill="#f8fafc" fontSize="11" fontWeight="bold">Object-Oriented Wrapper</text>

          {/* Wrapper Boundary Class */}
          <g transform="translate(20, 80)">
            <rect x="0" y="0" width="120" height="70" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="60" y="28" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">&lt;&lt;Boundary&gt;&gt;</text>
            <text x="60" y="46" textAnchor="middle" fill="#f8fafc" fontSize="11">LegacyService</text>
            <text x="60" y="60" textAnchor="middle" fill="#94a3b8" fontSize="9">Wrapper Class</text>
          </g>

          {/* Internal Legacy 4 Layers */}
          <g transform="translate(180, 40)">
            {/* Layer 1: Business Process */}
            <rect x="0" y="0" width="310" height="42" rx="4" fill="#334155" stroke="#94a3b8" strokeWidth="1" />
            <text x="155" y="26" textAnchor="middle" fill="#f8fafc" fontSize="12" fontWeight="bold">1. Business Process (Policies &amp; Workflows)</text>

            {/* Layer 2: Application Software */}
            <rect x="0" y="48" width="310" height="42" rx="4" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" />
            <text x="155" y="74" textAnchor="middle" fill="#fde68a" fontSize="12" fontWeight="bold">2. Application Software (e.g. COBOL / Fortran)</text>

            {/* Layer 3: Support Software */}
            <rect x="0" y="96" width="310" height="42" rx="4" fill="#1e293b" stroke="#94a3b8" strokeWidth="1" />
            <text x="155" y="122" textAnchor="middle" fill="#cbd5e1" fontSize="12" fontWeight="bold">3. Support Software (Legacy DB &amp; OS)</text>

            {/* Layer 4: Hardware */}
            <rect x="0" y="144" width="310" height="42" rx="4" fill="#0f172a" stroke="#64748b" strokeWidth="1" />
            <text x="155" y="170" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="bold">4. System Hardware (Mainframe / Obsolete Servers)</text>
          </g>

          {/* Delegation Arrow inside Wrapper */}
          <line x1="140" y1="115" x2="180" y2="115" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-oomd)" />
        </g>
      </svg>
    </div>
  );
};

// ==========================================
// 10. Client-Dispatcher-Server Pattern
// ==========================================
export const ClientDispatcherServerDiagram: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 sm:p-6 text-white shadow-xl">
      <div className="text-center mb-4">
        <h4 className="text-sm sm:text-base font-bold text-sky-400">Client-Dispatcher-Server Architectural Design Pattern</h4>
        <p className="text-xs text-slate-400">Decoupling Clients and Servers via Dynamic Location Registration and Routing</p>
      </div>
      <svg viewBox="0 0 820 340" className="w-full h-auto select-none font-sans">
        <defs>
          <marker id="arrow-cds" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M 0 0 L 8 4 L 0 8 z" fill="#38bdf8" />
          </marker>
        </defs>

        {/* 1. Client Node (Left) */}
        <g transform="translate(50, 110)">
          <rect x="0" y="0" width="150" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <text x="75" y="35" textAnchor="middle" fill="#38bdf8" fontSize="13" fontWeight="bold">Client</text>
          <text x="75" y="55" textAnchor="middle" fill="#94a3b8" fontSize="10">+requestService()</text>
          <text x="75" y="72" textAnchor="middle" fill="#94a3b8" fontSize="10">+invokeServer()</text>
        </g>

        {/* 2. Dispatcher Node (Top Center) */}
        <g transform="translate(330, 30)">
          <rect x="0" y="0" width="170" height="90" rx="8" fill="#2e1065" stroke="#a855f7" strokeWidth="2" />
          <text x="85" y="32" textAnchor="middle" fill="#c084fc" fontSize="13" fontWeight="bold">Dispatcher</text>
          <text x="85" y="52" textAnchor="middle" fill="#e9d5ff" fontSize="10">+registerService()</text>
          <text x="85" y="68" textAnchor="middle" fill="#e9d5ff" fontSize="10">+getServiceLocator()</text>
        </g>

        {/* 3. Server Node (Right) */}
        <g transform="translate(610, 110)">
          <rect x="0" y="0" width="160" height="90" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
          <text x="80" y="35" textAnchor="middle" fill="#34d399" fontSize="13" fontWeight="bold">Server</text>
          <text x="80" y="55" textAnchor="middle" fill="#a7f3d0" fontSize="10">+runService()</text>
          <text x="80" y="72" textAnchor="middle" fill="#a7f3d0" fontSize="10">+registerWithDispatcher()</text>
        </g>

        {/* Step 1: Server registers service */}
        <path d="M 610 135 L 500 85" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow-cds)" />
        <text x="575" y="95" textAnchor="middle" fill="#34d399" fontSize="10" fontWeight="bold">1: registerService(name, IP)</text>

        {/* Step 2: Client queries Dispatcher */}
        <path d="M 190 120 L 330 75" stroke="#38bdf8" strokeWidth="2" markerEnd="url(#arrow-cds)" />
        <text x="240" y="85" textAnchor="middle" fill="#38bdf8" fontSize="10" fontWeight="bold">2: getLocator(serviceName)</text>

        {/* Step 3: Dispatcher returns Server locator */}
        <path d="M 330 95 L 200 140" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrow-cds)" />
        <text x="250" y="145" textAnchor="middle" fill="#c084fc" fontSize="10">3: return ServerLocator</text>

        {/* Step 4: Direct Client to Server Communication */}
        <line x1="200" y1="165" x2="610" y2="165" stroke="#f59e0b" strokeWidth="2.5" markerEnd="url(#arrow-cds)" />
        <text x="405" y="185" textAnchor="middle" fill="#fde68a" fontSize="11" fontWeight="bold">4: directExecuteService(params) / Communication Link</text>
      </svg>
    </div>
  );
};

// ==========================================
// 11. Strategy Design Pattern Diagram
// ==========================================
export const StrategyPatternDiagram: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 sm:p-6 text-white shadow-xl">
      <div className="text-center mb-4">
        <h4 className="text-sm sm:text-base font-bold text-amber-400">Strategy Design Pattern: UML Class Architecture</h4>
        <p className="text-xs text-slate-400">Encapsulating Interchangeable Family of Algorithms</p>
      </div>
      <svg viewBox="0 0 820 320" className="w-full h-auto select-none font-sans">
        <defs>
          <marker id="arrow-strat" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
            <polygon points="0,0 8,5 0,10" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
          </marker>
        </defs>

        {/* Context Class */}
        <g transform="translate(60, 40)">
          <rect x="0" y="0" width="190" height="95" rx="6" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
          <rect x="0" y="0" width="190" height="26" rx="6" fill="#78350f" />
          <text x="95" y="18" textAnchor="middle" fill="#fef3c7" fontSize="12" fontWeight="bold">Context</text>
          <text x="12" y="44" fill="#cbd5e1" fontSize="10">-strategy: Strategy</text>
          <line x1="0" y1="52" x2="190" y2="52" stroke="#475569" strokeWidth="1" />
          <text x="12" y="70" fill="#cbd5e1" fontSize="10">+setStrategy(Strategy)</text>
          <text x="12" y="86" fill="#cbd5e1" fontSize="10">+executeAlgorithm()</text>
        </g>

        {/* Association Line */}
        <line x1="250" y1="87" x2="450" y2="87" stroke="#94a3b8" strokeWidth="2" />
        <polygon points="450,87 435,82 435,92" fill="#94a3b8" />
        <text x="350" y="78" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">has-a strategy</text>

        {/* Strategy Interface */}
        <g transform="translate(450, 40)">
          <rect x="0" y="0" width="220" height="75" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <rect x="0" y="0" width="220" height="26" rx="6" fill="#0369a1" />
          <text x="110" y="18" textAnchor="middle" fill="#f8fafc" fontSize="12" fontWeight="bold">&lt;&lt;interface&gt;&gt; Strategy</text>
          <line x1="0" y1="46" x2="220" y2="46" stroke="#475569" strokeWidth="1" />
          <text x="12" y="62" fill="#38bdf8" fontSize="11" fontStyle="italic">+algorithmInterface()</text>
        </g>

        {/* Concrete Strategy Classes (Bottom) */}
        {/* Strategy A */}
        <g transform="translate(320, 180)">
          <rect x="0" y="0" width="150" height="70" rx="6" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
          <text x="75" y="24" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">ConcreteStrategyA</text>
          <line x1="0" y1="36" x2="150" y2="36" stroke="#475569" strokeWidth="1" />
          <text x="10" y="55" fill="#cbd5e1" fontSize="10">+algorithmInterface()</text>
        </g>

        {/* Strategy B */}
        <g transform="translate(490, 180)">
          <rect x="0" y="0" width="150" height="70" rx="6" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
          <text x="75" y="24" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">ConcreteStrategyB</text>
          <line x1="0" y1="36" x2="150" y2="36" stroke="#475569" strokeWidth="1" />
          <text x="10" y="55" fill="#cbd5e1" fontSize="10">+algorithmInterface()</text>
        </g>

        {/* Strategy C */}
        <g transform="translate(660, 180)">
          <rect x="0" y="0" width="140" height="70" rx="6" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
          <text x="70" y="24" textAnchor="middle" fill="#34d399" fontSize="11" fontWeight="bold">ConcreteStrategyC</text>
          <line x1="0" y1="36" x2="140" y2="36" stroke="#475569" strokeWidth="1" />
          <text x="10" y="55" fill="#cbd5e1" fontSize="10">+algorithmInterface()</text>
        </g>

        {/* Implementation arrows (dashed with triangle) */}
        <path d="M 395 180 L 395 145 L 560 145 L 560 115" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrow-strat)" />
        <path d="M 565 180 L 565 115" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrow-strat)" />
        <path d="M 730 180 L 730 145 L 570 145" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 3" />
      </svg>
    </div>
  );
};

// ==========================================
// 12. Observer Design Pattern Diagram
// ==========================================
export const ObserverPatternDiagram: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 sm:p-6 text-white shadow-xl">
      <div className="text-center mb-4">
        <h4 className="text-sm sm:text-base font-bold text-sky-400">Observer Design Pattern: Publish-Subscribe Architecture</h4>
        <p className="text-xs text-slate-400">One-to-Many Dependency Where State Changes Automatically Notify All Observers</p>
      </div>
      <svg viewBox="0 0 820 320" className="w-full h-auto select-none font-sans">
        <defs>
          <marker id="arrow-obs" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
            <polygon points="0,0 8,5 0,10" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
          </marker>
        </defs>

        {/* Subject (Interface/Abstract) */}
        <g transform="translate(60, 30)">
          <rect x="0" y="0" width="190" height="90" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <rect x="0" y="0" width="190" height="26" rx="6" fill="#0369a1" />
          <text x="95" y="18" textAnchor="middle" fill="#f8fafc" fontSize="12" fontWeight="bold">Subject</text>
          <text x="12" y="44" fill="#cbd5e1" fontSize="10">+attach(Observer)</text>
          <text x="12" y="60" fill="#cbd5e1" fontSize="10">+detach(Observer)</text>
          <text x="12" y="76" fill="#cbd5e1" fontSize="10">+notify()</text>
        </g>

        {/* Association to Observer */}
        <line x1="250" y1="75" x2="490" y2="75" stroke="#94a3b8" strokeWidth="2" />
        <polygon points="490,75 475,70 475,80" fill="#94a3b8" />
        <text x="370" y="65" textAnchor="middle" fill="#38bdf8" fontSize="11" fontWeight="bold">notifies *</text>

        {/* Observer Interface */}
        <g transform="translate(490, 30)">
          <rect x="0" y="0" width="200" height="70" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <rect x="0" y="0" width="200" height="26" rx="6" fill="#0369a1" />
          <text x="100" y="18" textAnchor="middle" fill="#f8fafc" fontSize="12" fontWeight="bold">&lt;&lt;interface&gt;&gt; Observer</text>
          <line x1="0" y1="42" x2="200" y2="42" stroke="#475569" strokeWidth="1" />
          <text x="12" y="58" fill="#38bdf8" fontSize="11" fontStyle="italic">+update()</text>
        </g>

        {/* ConcreteSubject */}
        <g transform="translate(60, 180)">
          <rect x="0" y="0" width="190" height="95" rx="6" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
          <text x="95" y="24" textAnchor="middle" fill="#34d399" fontSize="12" fontWeight="bold">ConcreteSubject</text>
          <text x="12" y="46" fill="#a7f3d0" fontSize="10">-subjectState</text>
          <line x1="0" y1="54" x2="190" y2="54" stroke="#475569" strokeWidth="1" />
          <text x="12" y="72" fill="#cbd5e1" fontSize="10">+getState()</text>
          <text x="12" y="88" fill="#cbd5e1" fontSize="10">+setState()</text>
        </g>
        <line x1="155" y1="180" x2="155" y2="120" stroke="#38bdf8" strokeWidth="1.5" markerEnd="url(#arrow-obs)" />

        {/* ConcreteObserver */}
        <g transform="translate(490, 180)">
          <rect x="0" y="0" width="200" height="95" rx="6" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
          <text x="100" y="24" textAnchor="middle" fill="#34d399" fontSize="12" fontWeight="bold">ConcreteObserver</text>
          <text x="12" y="46" fill="#a7f3d0" fontSize="10">-observerState</text>
          <line x1="0" y1="54" x2="200" y2="54" stroke="#475569" strokeWidth="1" />
          <text x="12" y="74" fill="#cbd5e1" fontSize="10">+update()</text>
        </g>
        <line x1="590" y1="180" x2="590" y2="100" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrow-obs)" />

        {/* Pull state query */}
        <path d="M 490 230 L 250 230" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" markerEnd="url(#arrow-obs)" />
        <text x="370" y="222" textAnchor="middle" fill="#fde68a" fontSize="10">queries getState()</text>
      </svg>
    </div>
  );
};
