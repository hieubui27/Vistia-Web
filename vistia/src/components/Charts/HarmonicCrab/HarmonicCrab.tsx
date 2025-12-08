import React, { useMemo } from 'react';
import { format } from 'date-fns';
import { HarmonicPoint, mapDataToSvgCoordinates } from '@/src/utils/harmonicChartHelper';
import Image from 'next/image';

interface PatternResponse {
  points: HarmonicPoint[];
}

const HarmonicCrab = ({ data }: { data: PatternResponse }) => {
  const svgPoints = useMemo(() => {
    return mapDataToSvgCoordinates(data?.points, {
      width: 400,
      height: 300,
      paddingY: 30,
      paddingX: 40
    });
  }, [data]);

  if (!svgPoints.X || !svgPoints.D) return <div>Loading chart...</div>;
  const onConfirm = () => {
    console.log("Swap Now clicked");
  }

  return (
    <div className="bg-black border-[#353535] border rounded-[15px] text-white p-6 mx-auto">
      <div className="text-center font-bold text-[14px] space-y-2 mb-4">
        <h2>
          <span className="text-[#01B792]">Bullish </span>
          Harmonic Crab
        </h2>
        <p className="font-normal">
          Price Movement Probability
        </p>
        <div className='border border-[#595959] rounded-[5px] p-2 w-fit m-auto text-[8px]'>
          <span className='text-[#01B792] pr-2 border-r border-[#595959] '>
            Bull: 60%
          </span>
          <span className='text-[#FF4349] pl-2 pr-2 border-r border-[#595959] '>
            Beer: 30%
          </span>
          <span className='text-[#FFFFFF] pl-2 pr-2 border-r border-[#595959] '>
            Other: 10%
          </span>
        </div>
      </div>
      <svg viewBox="0 0 400 300" className="w-full h-64 mb-4">
        <g className="opacity-50">
          <line
            x1={svgPoints.X.x} y1={svgPoints.X.y}
            x2={svgPoints.B.x} y2={svgPoints.B.y}
            stroke="#C5C5C5"
            strokeWidth="1"
            strokeDasharray="4 4"
          />

          <line
            x1={svgPoints.X.x} y1={svgPoints.X.y}
            x2={svgPoints.D.x} y2={svgPoints.D.y}
            stroke="#C5C5C5"
            strokeWidth="1"
            strokeDasharray="4 4"
          />

          <line
            x1={svgPoints.B.x} y1={svgPoints.B.y}
            x2={svgPoints.D.x} y2={svgPoints.D.y}
            stroke="#C5C5C5"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </g>

        <path
          d={`M ${svgPoints.X.x} ${svgPoints.X.y} 
        L ${svgPoints.A.x} ${svgPoints.A.y} 
        L ${svgPoints.B.x} ${svgPoints.B.y} 
        L ${svgPoints.C.x} ${svgPoints.C.y} 
        L ${svgPoints.D.x} ${svgPoints.D.y}`}
          fill="none"
          stroke="#FF4349"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <line
          x1={svgPoints.D.x}
          y1={svgPoints.D.y}
          x2={svgPoints.D.x + 20}
          y2={svgPoints.D.y + 60}
          stroke="#FF4349"
          strokeWidth="2"
          strokeDasharray="4 2"
          markerEnd="url(#arrowhead)"
        />
        <line
          x1="0"
          y1={svgPoints.B.y}
          x2="400"
          y2={svgPoints.B.y}
          stroke="#C5C5C5"
          strokeWidth="1"
          opacity="0.5"
        />
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#FF4349" />
          </marker>
        </defs>

        {Object.values(svgPoints).map((p) => (
          <g key={p.label}>
            <circle cx={p.x} cy={p.y} r="2" fill="#FF4349" />
            <text
              x={p.x}
              y={p.y - 10}
              fill="white"
              fontSize="12"
              fontWeight="bold"
              textAnchor="middle"
              fontFamily="monospace"
            >
              {p.label}
            </text>
          </g>
        ))}
      </svg>


      <div className="space-y-2">
        {data.points.map((point) => (
          <div key={point.label} className="flex items-center justify-between rounded border border-[#426BFF] bg-[#0E0E0E] p-2 pl-0 text-[8px] font-bold hover:bg-gray-800 transition">
            <div className="flex items-center gap-3 w-16">
              <span className="border-r pr-4 pl-4">{point.label}</span>
            </div>
            <div className="flex-1 text-center">
              {point.price.toLocaleString()}
            </div>
            <div className="text-right">
              <span className="border-r pr-2 pl-2 mr-2">18.03</span>
              {format(new Date(point.timestamp), 'HH:mm')}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={onConfirm}
        className="w-full py-1.5 mt-4 bg-[#426BFF] text-black overflow-hidden font-bold rounded-[5px] text-[16px] flex items-center justify-center border border-[#353535]">
        <span className="mr-4">Save</span>
      </button>
    </div>
  );
};

export default HarmonicCrab;