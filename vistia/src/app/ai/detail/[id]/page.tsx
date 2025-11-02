

import AIPredictChart from "@/src/components/Charts/PredictedCharts/AIPredictChart";
import ai_data from "../../../../../public/mock/ai_data.json"




const AIDetail = async  ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const dataPredict = ai_data.find(coin => coin.id===id) || {chartData:[]};
  const chart_data = dataPredict?.chartData || [];
  return (
    <>
      <AIPredictChart data={chart_data}/>
    </>
  )
}

export default AIDetail;