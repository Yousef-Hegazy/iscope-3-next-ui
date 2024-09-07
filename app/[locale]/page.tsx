import ChartsContainer from "@/components/HeroSection/ChartsContainer";
import LoginModal from "@/components/HeroSection/LoginModal";
import ThemeSettings from "@/components/Topbar/ThemeSettings";
import { Button, Chip } from "@nextui-org/react";
import Image from "next/image";

const LandingPage = ({ params: { locale } }: { params: { locale: string } }) => {
  return (
    <main className="flex-1">
      <section id="hero" className="h-[75vh] w-full bg-zahid-blue-bg relative flex flex-col items-center">
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
            {/* <ThemeModeSwitch className="bg-white text-black" variant="solid" /> */}
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

          <h1 className="text-white text-2xl lg:text-5xl text-wrap text-center mb-4">
            Startup payroll and compliance simplified
          </h1>

          <p className="text-wrap text-center text-white/75 text-sm">
            Increase savings, automate busy work, and make better decisions by managing payroll, HR, IT & spend in one
            place
          </p>
        </div>

        <Button className="bg-zahid-yellow-btn text-black mt-8" radius="full">
          Start a Free Trial
        </Button>

        <ChartsContainer />
      </section>
    </main>
  );
};

export default LandingPage;
