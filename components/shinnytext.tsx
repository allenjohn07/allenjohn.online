import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaCube } from "react-icons/fa6";


import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { ArrowUpRight } from "lucide-react";

export function AnimatedShinyTextComponent({ name }: { name: string }) {
  return (
    <div>
      <div
        className={cn(
          "group rounded-full text-base transition-all ease-in hover:cursor-pointer",
        )}
      >
        <AnimatedShinyText className="inline-flex border border-neutral-700 rounded-full px-3 py-1 items-center text-neutral-200 justify-center transition ease-out hover:text-blue-300 hover:duration-300">
            <span className="text-xs font-semibold flex items-center gap-1">
              {
                name.includes("Website") ? (
                  <CiGlobe/>
                ) :
                name.includes("Source")?
                (
                  <FaGithub/>
                ) : name.includes("World Cube Association Profile") ? (
                  <FaCube/> ) : null
              }
              {name}
            </span>
            <ArrowUpRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:-translate-y-[1px] group-hover:translate-x-[1px]" />
        </AnimatedShinyText>
      </div>
    </div>
  );
}
