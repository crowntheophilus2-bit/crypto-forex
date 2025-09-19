import React, { useEffect, useRef } from 'react';
import { createChart, CrosshairMode } from 'lightweight-charts';

const sampleData = [
  { time: '2025-09-10', open: 27000, high: 27500, low: 26800, close: 27300 },
  { time: '2025-09-11', open: 27300, high: 27800, low: 27200, close: 27600 },
  { time: '2025-09-12', open: 27600, high: 27900, low: 27400, close: 27750 },
  { time: '2025-09-13', open: 27750, high: 28000, low: 27600, close: 27800 },
  { time: '2025-09-14', open: 27800, high: 28200, low: 27700, close: 28100 },
  { time: '2025-09-15', open: 28100, high: 28500, low: 28000, close: 28400 },
  { time: '2025-09-16', open: 28400, high: 28700, low: 28300, close: 28600 },
];

export default function CandlestickChart() {
  const chartContainerRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;
    if (chartRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.offsetWidth,
      height: 350,
      layout: {
        background: { type: 'solid', color: '#181A20' },
        textColor: '#D1D4DC',
      },
      grid: {
        vertLines: { color: '#222' },
        horzLines: { color: '#222' },
      },
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      timeScale: {
        borderColor: '#333',
        timeVisible: true,
        secondsVisible: false,
      },
      rightPriceScale: {
        borderColor: '#333',
      },
    });
    chartRef.current = chart;

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: '#26a69a',
      downColor: '#ef5350',
      borderUpColor: '#26a69a',
      borderDownColor: '#ef5350',
      wickUpColor: '#26a69a',
      wickDownColor: '#ef5350',
    });
    candlestickSeries.setData(sampleData);

    // Responsive resize
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.offsetWidth });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
      chartRef.current = null;
    };
  }, []);

  return (
    <div style={{ width: '100%', minHeight: 350 }} ref={chartContainerRef} />
  );
}
