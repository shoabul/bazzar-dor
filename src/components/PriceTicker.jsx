
const UNIT_BN = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

function normalize(p) {
  return {
    id: p.id,
    icon: p.image,
    name: p.nameBn,
    unit: UNIT_BN[p.unit] || p.unit,
    price: Number(p.today),
    change: Number(p.change?.pct ?? 0),
  };
}

const bn = (n, d = 0) =>
  Number(n).toLocaleString("bn-BD", { minimumFractionDigits: d, maximumFractionDigits: d });

export default function PriceTicker({ products = [] }) {
  if (!products.length) return null;

  const items = products.map(normalize);

  const renderItems = (suffix) =>
    items.map((p) => {
      const up = p.change > 0;
      const down = p.change < 0;
      return (
        <span
          key={`${p.id}-${suffix}`}
          className="flex shrink-0 items-center gap-2 border-r border-gray-200 px-5 text-sm"
        >
          <span>{p.icon}</span>
          <span className="font-medium text-gray-800">{p.name}</span>
          <span className="text-xs text-gray-500">
            {bn(p.price)} টাকা/{p.unit}
          </span>
          <span
            className={`text-xs font-bold ${
              up ? "text-red-600" : down ? "text-green-600" : "text-gray-500"
            }`}
          >
            {up ? "▲" : down ? "▼" : "—"} {bn(Math.abs(p.change), 1)}%
          </span>
        </span>
      );
    });

  return (
    <div className="ticker-wrap overflow-hidden border-b border-gray-200 bg-white py-2">
      <div className="ticker-track flex w-max">

        <div className="flex">{renderItems("a")}</div>
        <div className="flex" aria-hidden="true">{renderItems("b")}</div>
      </div>

      <style>{`
        .ticker-track { animation: ticker-scroll 60s linear infinite; }
        .ticker-wrap:hover .ticker-track { animation-play-state: paused; }
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}