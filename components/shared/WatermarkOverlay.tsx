// SVG-паттерн с водяным знаком — диагональный повтор "armada-cnc.ru"
const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='170' height='170'>
  <text x='85' y='85' transform='rotate(-35 85 85)' fill='rgba(255,255,255,0.25)' font-size='13' font-family='Arial,sans-serif' font-weight='700' text-anchor='middle' dominant-baseline='middle' letter-spacing='1'>armada-cnc.ru</text>
</svg>`;

const WATERMARK_BG = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;

export default function WatermarkOverlay() {
  return (
    <div
      className="absolute inset-0 pointer-events-none select-none"
      style={{
        backgroundImage: WATERMARK_BG,
        backgroundRepeat: 'repeat',
        backgroundSize: '170px 170px',
        zIndex: 5,
      }}
      aria-hidden="true"
    />
  );
}
