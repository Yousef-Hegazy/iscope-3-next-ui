import AdvantageCard from "@/components/LandingPage/AdvantagesSection/AdvantageCard";
import SectionContainer from "@/components/LandingPage/Common/SectionContainer";
import SectionDescription from "@/components/LandingPage/Common/SectionDescription";
import SectionH1 from "@/components/LandingPage/Common/SectionH1";
import ChartsContainer from "@/components/LandingPage/HeroSection/ChartsContainer";
import LoginModal from "@/components/LandingPage/HeroSection/LoginModal";
import CarouselContainer from "@/components/LandingPage/ImagesSection/CarouselContainer";
import QAAccordions from "@/components/LandingPage/QuestionsSection/QAAccordions";
import ThemeSettings from "@/components/Topbar/ThemeSettings";
import AppScrollShadow from "@/components/ui/AppScrollShadow";
import { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/Carousel";
import { Button, Chip, Divider } from "@nextui-org/react";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";

const carouselImags = [
  {
    src: "/images/iScopeMobileApp.jpg",
    title: "mobileApps",
  },
  {
    src: "/images/portfolio-2.jpg",
    title: "projectGeoData",
  },
  {
    src: "/images/portfolio-3.jpg",
    title: "projectProcedures",
  },
  {
    src: "/images/portfolio-4.jpg",
    title: "projectsUnderStudy",
  },
  {
    src: "/images/portfolio-5.jpg",
    title: "projectsKPI",
  },
  {
    src: "/images/portfolio-6.jpg",
    title: "finishedProjects",
  },
];

const LandingPage = async ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  const t = await getTranslations("landingPage");

  return (
    <AppScrollShadow as="main" size={5} hideScrollBar className="flex-1 overflow-x-hidden max-w-full">
      <SectionContainer id="hero">
        <div className="h-[75vh] w-full bg-zahid-blue-bg relative flex flex-col items-center">
          <nav className="w-full p-4 bg-transparent flex flex-row items-center justify-between">
            <div className="flex-1">
              <Button variant="solid" className="bg-white">
                <Image src="/logoiScope.svg" alt="Logo" width={10} height={10} className="w-20 h-20" />
              </Button>
            </div>

            <ul className="hidden lg:flex flex-row items-center gap-x-2.5 justify-center flex-[2]">
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

              {/* <Button radius="full" variant="solid" className="bg-zahid-yellow-btn text-black">
                Get Access
              </Button> */}
            </div>
          </nav>

          <div className="mx-auto w-full max-w-lg mt-8 flex flex-col items-center px-4 lg:px-0">
            <Chip color="default" size="lg" className="text-sm bg-white/10 text-white mb-6">
              {t("trusted")}
            </Chip>

            <SectionH1>{t("subtitle")}</SectionH1>

            <SectionDescription className="mt-2 text-wrap text-white/75">{t("platformDesc")}</SectionDescription>
          </div>

          {/* <CTABtn className="mt-4">{t("login")}</CTABtn> */}

          <ChartsContainer />
        </div>
      </SectionContainer>

      <SectionContainer id="advantages" className="min-h-fit mt-10 pb-4 lg:pb-10 flex flex-col items-center">
        <div className="max-w-lg flex flex-col items-center">
          {/* <Chip title="Advantages" variant="bordered"> */}
          <p className="text-xs px-4 py-2 ring-4 ring-default-200 rounded-full mb-4">{t("advantages.title")}</p>
          {/* </Chip> */}

          <SectionH1 className="text-xl lg:text-3xl text-center font-semibold text-foreground">
            {t("advantages.main")}
          </SectionH1>

          <SectionDescription className="text-default-500 mt-3">{t("advantages.subtitle")}</SectionDescription>
        </div>

        <div className="px-4 mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:p-0 w-full max-w-6xl">
          <AdvantageCard
            title={t("advantages.firstTitle")}
            description={t("advantages.firstDesc")}
            image="/images/features-1.png"
            number="01"
          />

          <AdvantageCard
            title={t("advantages.secondTitle")}
            description={t("advantages.secondDesc")}
            image="/images/features-2.png"
            number="02"
          />

          <AdvantageCard
            title={t("advantages.thirdTitle")}
            description={t("advantages.thirdDesc")}
            image="/images/features-3.png"
            number="03"
          />

          <AdvantageCard
            title={t("advantages.fourthTitle")}
            description={t("advantages.fourthDesc")}
            image="/images/features-4.png"
            number="04"
          />
        </div>
      </SectionContainer>

      <SectionContainer id="pricing" className="bg-zahid-blue-bg">
        <div className="w-full h-full flex flex-col items-center p-4 xl:p-20">
          <div className="max-w-lg w-full text-center">
            <SectionH1>{t("qa.title")}</SectionH1>
            <SectionDescription className="text-base text-white/70 mt-4">{t("howCanWeHelp")}</SectionDescription>

            <QAAccordions />
          </div>
        </div>
      </SectionContainer>

      <SectionContainer id="testimonies" className="mt-10">
        <div className="w-full h-full flex flex-col items-center p-4 xl:p-20">
          {/* <div className="max-w-lg">
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
          </TestimonyCardsContainer> */}

          <CarouselContainer>
            <CarouselContent className="w-full max-w-full ps-4">
              {carouselImags.map((image, index) => (
                <CarouselItem key={image.src} className="basis-full py-4">
                  <div className="relative w-full h-[400px] group transition-all duration-300">
                    <Image
                      src={image.src}
                      alt="Carousel Image"
                      fill
                      sizes="600px"
                      className="w-full h-full rounded-xl shadow-lg ring-1 ring-zahid-blue-bg group-hover:scale-95 transition-all duration-300 object-cover"
                    />

                    <div className="absolute bottom-0 left-0 right-0 w-full opacity-0 translate-y-full pointer-events-none p-4 text-start bg-gray-900/60 backdrop-blur-xl rounded-t-xl group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                      <p className="text-white">{t(`images.${image.title}`)}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </CarouselContainer>
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

            <ul className="hidden xl:flex xl:flex-row items-center gap-x-2.5 justify-center mt-6">
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

              <div className="flex flex-row items-center justify-between w-full mb-4 px-2 lg:px-4 xl:px:0">
                <p className="text-white text-xs">&copy; {new Date().getFullYear()} iScope. All rights reserved.</p>

                <div className="flex flex-row items-center gap-x-0 lg:gap-x-3">
                  <Button
                    variant="light"
                    className="text-white/80 font-semibold text-[0.65rem] lg:text-xs px-2 lg:px-inherit"
                  >
                    Privacy Policy
                  </Button>
                  <Button
                    variant="light"
                    className="text-white/80 font-semibold text-[0.65rem] lg:text-xs px-2 lg:px-inherit"
                  >
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
