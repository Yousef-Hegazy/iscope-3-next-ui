import ChartsContainer from "@/components/LandingPage/HeroSection/ChartsContainer";
import SectionContainer from "@/components/LandingPage/Common/SectionContainer";
import LoginModal from "@/components/LandingPage/HeroSection/LoginModal";
import SectionH1 from "@/components/LandingPage/Common/SectionH1";
import ThemeSettings from "@/components/Topbar/ThemeSettings";
import { Button, Chip } from "@nextui-org/react";
import Image from "next/image";
import SectionDescription from "@/components/LandingPage/Common/SectionDescription";
import CTABtn from "@/components/LandingPage/Common/CTABtn";
import AdvantageCard from "@/components/LandingPage/AdvantagesSection/AdvantageCard";
import AppScrollShadow from "@/components/ui/AppScrollShadow";
import { cn } from "@/lib/utils";
import AdvantageCard1 from "@/components/LandingPage/AdvantagesSection/AdvantageCard1";

const LandingPage = ({ params: { locale } }: { params: { locale: string } }) => {
  return (
    <AppScrollShadow as="main" size={5} hideScrollBar className="flex-1 overflow-x-hidden">
      <SectionContainer id="hero">
        <div className="h-[75vh] w-full bg-zahid-blue-bg relative flex flex-col items-center">
          <nav className="w-full p-4 bg-transparent flex flex-row items-center justify-between">
            <div className=" flex-1">
              <Button variant="solid" className="bg-white">
                <Image src="/logoiScope.svg" alt="Logo" width={10} height={10} className="w-20 h-20" />
              </Button>
            </div>

            <ul className="flex flex-row items-center gap-x-2.5 justify-center flex-[2]">
              <li className="inline">
                <Button variant="light" className="text-white/80 font-semibold">
                  Product
                </Button>
              </li>
              <li className="inline">
                <Button variant="light" className="text-white/80 font-semibold">
                  Pricing
                </Button>
              </li>
              <li className="inline">
                <Button variant="light" className="text-white/80 font-semibold">
                  Integration
                </Button>
              </li>
              <li className="inline">
                <Button variant="light" className="text-white/80 font-semibold">
                  Resources
                </Button>
              </li>
            </ul>

            <div className="flex flex-row items-center justify-end gap-x-2.5 flex-1">
              <ThemeSettings className="bg-white/20 text-white rounded-full" />

              <LoginModal />

              <Button radius="full" variant="solid" className="bg-zahid-yellow-btn text-black">
                Get Access
              </Button>
            </div>
          </nav>

          <div className="mx-auto w-max max-w-lg mt-8 flex flex-col items-center">
            <Chip color="default" size="lg" className="text-sm bg-white/10 text-white mb-6">
              Trusted by multiple governments
            </Chip>

            <SectionH1>Startup payroll and compliance simplified</SectionH1>

            <SectionDescription className="text-wrap text-white/75">
              Increase savings, automate busy work, and make better decisions by managing payroll, HR, IT & spend in one
              place
            </SectionDescription>
          </div>

          <CTABtn className="mt-8">Start a Free Trial</CTABtn>

          <ChartsContainer />
        </div>
      </SectionContainer>

      <SectionContainer id="advantages" className="mt-10 flex flex-col items-center h-screen">
        <div className="max-w-lg flex flex-col items-center">
          {/* <Chip title="Advantages" variant="bordered"> */}
          <p className="text-xs px-4 py-2 ring-2 ring-default-500 rounded-full mb-4">Advantages</p>
          {/* </Chip> */}

          <SectionH1 className="text-xl lg:text-3xl text-center font-semibold text-foreground">
            Transform project management with our software solution
          </SectionH1>

          <SectionDescription className="text-default-500 mt-3">
            Revolutionize your HR Operations with our Comprehensive Software Appplication, Designed to Streamline Tasks,
            and Enhance Efficiency.
          </SectionDescription>
        </div>

        <div className="mt-6 flex flex-row gap-4 justify-evenly max-w-6xl">
          <AdvantageCard1 />
          <AdvantageCard1 />
          <AdvantageCard1 />
        </div>
      </SectionContainer>
    </AppScrollShadow>
  );
};

export default LandingPage;
