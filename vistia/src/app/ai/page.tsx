import PredictList from "@/src/components/PredictList/PredictList";

function AIPredict() {
  return (
    <div className="AI absolute inset-0">
      <div className="relative w-full h-full  bg-black">
        <div className="absolute inset-0 size-full bg-fixed bg-[radial-gradient(ellipse_70%_30%_at_left_center,#3D002F,rgba(255,255,255,0)),radial-gradient(ellipse_70%_30%_at_right_center,#39007A,rgba(255,255,255,0)),radial-gradient(ellipse_70%_30%_at_bottom_center,#002153,rgba(255,255,255,0))]"></div>
          <PredictList/>
      </div>
    </div>
  );
}

export default AIPredict;