const announcements = [
  { tag: "NEW", text: "JEE Advanced 2025 Result - AIR 156 by Arjun Sharma" },
  { tag: "NEW", text: "Maharashtra Rank 1 in NSEJS 2024 - Sneha Kumar" },
  { tag: "HOT", text: "99.8 Percentile in JEE Main 2025 - Priya Patel" },
  { tag: "NEW", text: "5 Students in Top 500 AIR in JEE Advanced 2025" },
  { tag: "HOT", text: "85% Selection Rate in Competitive Exams" },
  { tag: "NEW", text: "BITSAT 2025 - 386/450 by Rohan Deshmukh" },
];

export const AnnouncementBar = () => (
  <div className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] text-white py-2 overflow-hidden">
    <div className="flex animate-marquee whitespace-nowrap">
      {/* First set of announcements */}
      {announcements.map((item, idx) => (
        <div key={idx} className="flex items-center mx-8">
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold mr-2 ${item.tag === 'NEW' ? 'bg-[#EF4444]' : 'bg-orange-500'
            }`}>
            {item.tag}
          </span>
          <span className="text-sm font-medium">{item.text}</span>
        </div>
      ))}
      {/* Duplicate for seamless loop */}
      {announcements.map((item, idx) => (
        <div key={`dup-${idx}`} className="flex items-center mx-8">
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold mr-2 ${item.tag === 'NEW' ? 'bg-[#EF4444]' : 'bg-orange-500'
            }`}>
            {item.tag}
          </span>
          <span className="text-sm font-medium">{item.text}</span>
        </div>
      ))}
    </div>
  </div>
);
