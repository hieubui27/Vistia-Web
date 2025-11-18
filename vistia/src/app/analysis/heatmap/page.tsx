'use client'
import TechnicalIndicator from '@/src/components/Heatmap/TechnicalIndicators'
import dynamic from 'next/dynamic'
const Heatmap = dynamic(
  () => import('../../../components/Charts/AnalysisCharts/Heatmap'),
  { 
    ssr: false,
    loading: () => <div className="text-white p-4">Loading Chart...</div>
  }
)

export default function HeatmapPage() {
  return (
    <div>
      <Heatmap/>
      <TechnicalIndicator/>
    </div>
    )
}