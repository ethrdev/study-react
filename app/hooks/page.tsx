import EffectWithoutDependencies from "@/components/EffectWithoutDependencies";
import EffectWithDependencies from "@/components/EffectWithDependencies";

export default function Hooks() {
  return (
    <>
    <div className="flex gap-8">
    <div>
        <p>useEffect without dependencies</p>
        <EffectWithoutDependencies></EffectWithoutDependencies>
        
    </div>
    <div>
        <p>useEffect with dependencies</p>
        <EffectWithDependencies></EffectWithDependencies>
    </div>
    </div>
    </>
  )
}
