import AdvantageCard1 from "@/components/LandingPage/AdvantagesSection/AdvantageCard1";
import CTABtn from "@/components/LandingPage/Common/CTABtn";
import SectionContainer from "@/components/LandingPage/Common/SectionContainer";
import SectionDescription from "@/components/LandingPage/Common/SectionDescription";
import SectionH1 from "@/components/LandingPage/Common/SectionH1";
import FeatureImageContainer from "@/components/LandingPage/FeaturesSection/FeatureImageContainer";
import ChartsContainer from "@/components/LandingPage/HeroSection/ChartsContainer";
import LoginModal from "@/components/LandingPage/HeroSection/LoginModal";
import PricingBar from "@/components/LandingPage/PricingSection/PricingBar";
import PricingTag from "@/components/LandingPage/PricingSection/PricingTag";
import TestimonyCard, { TestimonyCardsContainer } from "@/components/LandingPage/TestimonySection/TestimonyCard";
import ThemeSettings from "@/components/Topbar/ThemeSettings";
import AppScrollShadow from "@/components/ui/AppScrollShadow";
import AppSwitch from "@/components/ui/AppSwitch";
import { Button, Chip, Divider } from "@nextui-org/react";
import Image from "next/image";

const LandingPage = ({ params: { locale } }: { params: { locale: string } }) => {
  return (
    <AppScrollShadow as="main" size={5} hideScrollBar className="flex-1 overflow-x-hidden">
      <SectionContainer id="hero">
        <div className="h-[75vh] w-full bg-zahid-blue-bg relative flex flex-col items-center">
          <nav className="w-full p-4 bg-transparent flex flex-row items-center justify-between">
            <div className="flex-1">
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
          <p className="text-xs px-4 py-2 ring-4 ring-default-200 rounded-full mb-4">Advantages</p>
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

      <SectionContainer id="features-1" className="mt-6">
        <div className="mx-auto flex flex-row items-center justify-between gap-x-4 lg:gap-x-10 max-w-6xl h-full w-full">
          <div className="flex-1">
            <SectionH1 className="text-foreground text-start">Seamless solutions for every project you have</SectionH1>

            <SectionDescription className="mt-4 text-start text-default-500">
              A comprehensive solution for managing all your projects, tasks, and teams. With iScope, you will take your
              project management to the next level.
            </SectionDescription>
          </div>

          <FeatureImageContainer>
            <Image src="/features-1.png" alt="Features 1" fill className="py-10 lg:py-20 rounded-lg" />
          </FeatureImageContainer>
        </div>
      </SectionContainer>

      <SectionContainer id="pricing" className="bg-zahid-blue-bg">
        <div className="w-full h-full flex flex-col items-center py-4 px-4 lg:px-20 lg:py-20">
          <div className="max-w-xl space-y-4 mb-12">
            <p className="mx-auto w-max px-4 py-2 bg-white/10 text-white text-xs rounded-full ">Pricings</p>

            <SectionH1 className="mx-auto text-center mb-6">Affordable HR services, predictable pricing</SectionH1>

            <SectionDescription className="text-white/75 text-center text-sm font-light">
              Over 27,000 companies have enlisted 1.5 million candidates through Workable. Streamline your entire HR
              process, from discovering top talents to overseeing their management
            </SectionDescription>
          </div>

          <div className="flex flex-row items-center justify-between w-full mb-14 text-white">
            <div className="flex flex-row items-center gap-x-4">
              <p>Currency</p>
              <p>-</p>
              <p className="px-4 py-2 bg-white/10 text-xs rounded-full">EUR €</p>
              <p className="px-4 py-2 bg-black/30 text-zahid-yellow-btn text-xs rounded-full">USD $</p>
            </div>

            <div className="flex flex-row items-center gap-x-2 text-sm">
              <p>Yearly</p>
              <AppSwitch defaultChecked defaultSelected color="primary" />
              <p className="text-zahid-yellow-btn -ms-2">Monthly</p>
            </div>
          </div>

          <PricingBar>
            <PricingTag className="start-[10%]" title="Starter" description="Up to 50 employees" />

            <PricingTag className="start-[25%]" title="Basic" description="Up to 200 employees" />

            <PricingTag
              className="start-[calc(50%-6rem)]"
              customContent={
                <div className="w-48 mt-6 h-fit rounded-xl bg-white p-2 text-black text-start">
                  <h3 className="mt-2">Business</h3>
                  <p className="text-xs text-slate-500 mt-1">Up to 500 employees</p>

                  <div className="flex flex-col gap-y-2 mt-4">
                    <div className="flex flex-row items-center gap-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-zahid-blue-bg w-4 h-4"
                        width="1em"
                        height="1em"
                        viewBox="0 0 48 48"
                      >
                        <defs>
                          <mask id="ipSCheckOne0">
                            <g fill="none" stroke-linejoin="round" stroke-width="4">
                              <path
                                fill="#fff"
                                stroke="#fff"
                                d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z"
                              />
                              <path stroke="#000" stroke-linecap="round" d="m16 24l6 6l12-12" />
                            </g>
                          </mask>
                        </defs>
                        <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCheckOne0)" />
                      </svg>

                      <p className="text-xs font-semibold">4 Free Features</p>
                    </div>

                    <div className="flex flex-row items-center gap-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-zahid-blue-bg w-4 h-4"
                        width="1em"
                        height="1em"
                        viewBox="0 0 48 48"
                      >
                        <defs>
                          <mask id="ipSCheckOne0">
                            <g fill="none" stroke-linejoin="round" stroke-width="4">
                              <path
                                fill="#fff"
                                stroke="#fff"
                                d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z"
                              />
                              <path stroke="#000" stroke-linecap="round" d="m16 24l6 6l12-12" />
                            </g>
                          </mask>
                        </defs>
                        <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCheckOne0)" />
                      </svg>

                      <p className="text-xs font-semibold">6 HR</p>
                    </div>

                    <div className="flex flex-row items-center gap-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-zahid-blue-bg w-4 h-4"
                        width="1em"
                        height="1em"
                        viewBox="0 0 48 48"
                      >
                        <defs>
                          <mask id="ipSCheckOne0">
                            <g fill="none" stroke-linejoin="round" stroke-width="4">
                              <path
                                fill="#fff"
                                stroke="#fff"
                                d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z"
                              />
                              <path stroke="#000" stroke-linecap="round" d="m16 24l6 6l12-12" />
                            </g>
                          </mask>
                        </defs>
                        <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCheckOne0)" />
                      </svg>

                      <p className="text-xs font-semibold">8 Recruiting</p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-zahid-blue-bg p-4 flex flex-row items-center  justify-between w-full text-xs text-white mt-4">
                    <p>Only</p>

                    <p className="text-zahid-yellow-btn text-xs">SAR 3,193</p>
                  </div>
                </div>
              }
              icon={
                <div className="flex flex-row items-center text-zahid-blue-bg py-2 px-0 rounded-full bg-zahid-yellow-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 20 20"
                    className="-rotate-90 w-4 h-4 translate-x-1"
                  >
                    <path
                      fill="currentColor"
                      d="M11.199 4.6c-.6-.8-1.801-.8-2.401 0l-4.496 6.002c-.74.989-.035 2.4 1.2 2.4h8.995c1.236 0 1.941-1.412 1.2-2.4zM4 15a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 20 20"
                    className="rotate-90 w-4 h-4 -translate-x-1"
                  >
                    <path
                      fill="currentColor"
                      d="M11.199 4.6c-.6-.8-1.801-.8-2.401 0l-4.496 6.002c-.74.989-.035 2.4 1.2 2.4h8.995c1.236 0 1.941-1.412 1.2-2.4zM4 15a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1z"
                    />
                  </svg>
                </div>
              }
            />

            <PricingTag className="start-[65%]" title="Optimal" description="Up to 2K employees" />

            <PricingTag className="start-[80%]" title="Premier" description="Unlimited employees" />
          </PricingBar>
        </div>
      </SectionContainer>

      <SectionContainer id="testimonies" className="mt-10">
        <div className="w-full h-full flex flex-col items-center py-4 px-4 lg:px-20 lg:py-20">
          <div className="max-w-lg">
            <p className="w-max mx-auto text-xs px-4 py-2 ring-4 ring-default-200 rounded-full mb-4">Testimony</p>
            <SectionH1 className="text-center text-foreground">Users love us</SectionH1>

            <SectionDescription className="text-default-500 mt-8">
              Revolutionize your HR Operations wiht our Comprehensive Software Application, Designed to Streamline
              Tasks, and Enhance Efficiency.
            </SectionDescription>
          </div>

          <TestimonyCardsContainer>
            <TestimonyCard>
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1683740128931-8bdefe553f95?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Avatar"
                  fill
                  sizes="40px"
                />
              </div>

              <p>
                By using iScope, we’re now attracting a new generation of candidates and building a richer and more
                robust workforce
              </p>

              <div>
                <p className="text-sm">Norma Benson</p>
                <p className="text-xs text-default-500">www.finoptis.com</p>
              </div>
            </TestimonyCard>

            <TestimonyCard>
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1683740128931-8bdefe553f95?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Avatar"
                  fill
                  sizes="40px"
                />
              </div>

              <p>
                By using iScope, we’re now attracting a new generation of candidates and building a richer and more
                robust workforce
              </p>

              <div>
                <p className="text-sm">Norma Benson</p>
                <p className="text-xs text-default-500">www.finoptis.com</p>
              </div>
            </TestimonyCard>

            <TestimonyCard>
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="https://plus.unsplash.com/premium_photo-1683740128931-8bdefe553f95?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Avatar"
                  fill
                  sizes="40px"
                />
              </div>

              <p>
                By using iScope, we’re now attracting a new generation of candidates and building a richer and more
                robust workforce
              </p>

              <div>
                <p className="text-sm">Norma Benson</p>
                <p className="text-xs text-default-500">www.finoptis.com</p>
              </div>
            </TestimonyCard>
          </TestimonyCardsContainer>
        </div>
      </SectionContainer>

      <footer id="footer" className="h-screen bg-zahid-blue-bg flex justify-center items-center">
        <SectionContainer
          id="footer"
          className="max-w-5xl w-full h-full relative flex flex-col items-center justify-center"
        >
          <div className="w-full h-[350px] flex flex-col justify-center bg-zahid-yellow-btn rounded-3xl items-center shadow-lg">
            <div className="max-w-lg w-full flex flex-col items-center justify-center">
              <SectionH1 className="text-black text-2xl lg:text-3xl font-semibold">
                Revamp your project management with iScope Software
              </SectionH1>

              <Button variant="solid" radius="full" className="mt-6 text-sm bg-zahid-blue-bg text-white">
                Start a Free Trial
              </Button>

              <SectionDescription className="text-black mt-4">It only takes 2 minutes to complete</SectionDescription>
            </div>
          </div>

          <div className="w-full mt-10 flex flex-col items-center justify-center">
            <Button variant="solid" className="bg-white">
              <Image src="/logoiScope.svg" alt="Logo" width={10} height={10} className="w-20 h-20" />
            </Button>

            <ul className="flex flex-row items-center gap-x-2.5 justify-center mt-6">
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

            <div className="absolute bottom-0 w-full">
              <Divider className="bg-white/20 mb-4" />

              <div className="flex flex-row items-center justify-between w-full mb-4">
                <p className="text-white text-xs">&copy; {new Date().getFullYear()} iScope. All rights reserved.</p>

                <div className="flex flex-row items-center gap-x-3">
                  <Button variant="light" className="text-white/80 font-semibold text-xs">
                    Privacy Policy
                  </Button>
                  <Button variant="light" className="text-white/80 font-semibold text-xs">
                    Terms & Conditions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </footer>
    </AppScrollShadow>
  );
};

export default LandingPage;
