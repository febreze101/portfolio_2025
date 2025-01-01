import CircularText from "@/Components/CircularText";
import ModelViewer from "@/Components/3d_camera";
import IntroSection from "@/Components/TypewriterText";

function LandingPage() {
  return (
    <>
      <div className="h-full flex flex-col justify-between">

        {/* "Title card" */}
        <div className="flex flex-row h-full justify-between p-12 ">
          <div className="flex items-center">
            <IntroSection />
          </div>

          {/* Side elements (3d) */}
          <div className="scroll-m-20 text-4xl font-extrabold tracking-tight w-1/2  flex justify-center items-center">
            <ModelViewer 
              // modelUrl="src/assets/models/camera.glb"
              modelUrl="src/assets/models/camera.glb"
              backgroundColor={'white'}
              cameraPosition={[0, 0, 5]}
              autoRotate={true}
            />
          </div>
        </div>

        {/* Bottom elements */}
        <div>
          <div className="flex flex-row justify-between px-12 items-center">
            <div className="flex flex-col">
              <h1 className="scroll-m-20 text-xl font-medium font-serif tracking-tight first:mt-0">
                Currently Software Engineer at Virtual Incision.
              </h1>
              <h1 className="scroll-m-20 pb-4 text-xl font-medium font-serif tracking-tight first:mt-0">
                Omaha, Ne
              </h1>
            </div>
            <CircularText />
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
