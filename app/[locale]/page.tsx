import AdvantageCard from "@/components/LandingPage/AdvantagesSection/AdvantageCard";
import SectionContainer from "@/components/LandingPage/Common/SectionContainer";
import SectionDescription from "@/components/LandingPage/Common/SectionDescription";
import SectionH1 from "@/components/LandingPage/Common/SectionH1";
import ChartsContainer from "@/components/LandingPage/HeroSection/ChartsContainer";
import Navigation from "@/components/LandingPage/HeroSection/Navigation";
import ScrollToTopButton from "@/components/LandingPage/HeroSection/ScrollToTopButton";
import CarouselContainer from "@/components/LandingPage/ImagesSection/CarouselContainer";
import QAAccordions from "@/components/LandingPage/QuestionsSection/QAAccordions";
import AppScrollShadow from "@/components/ui/AppScrollShadow";
import { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/Carousel";
import Icon from "@/components/ui/Icon";
import { cn } from "@/lib/utils";
import { Button, Chip, Divider } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const carouselImags = [
  {
    src: "/images/iScopeMobileApp.jpg",
    title: "mobileApps",
    fill: true,
  },
  {
    src: "/images/portfolio-2.jpg",
    title: "projectGeoData",
    fill: true,
  },
  {
    src: "/images/portfolio-3.jpg",
    title: "projectProcedures",
    fill: true,
  },
  {
    src: "/images/portfolio-4.jpg",
    title: "projectsUnderStudy",
    fill: true,
  },
  {
    src: "/images/portfolio-5.jpg",
    title: "projectsKPI",
    fill: true,
  },
  {
    src: "/images/portfolio-6.jpg",
    title: "finishedProjects",
    fill: true,
  },
  {
    src: "/images/portfolio-7.jpg",
    title: "nationalProduct",
    fill: false,
  },
];

const LandingPage = ({ params: { locale } }: { params: { locale: string } }) => {
  // unstable_setRequestLocale(locale);
  const t = useTranslations("landingPage");

  return (
    <AppScrollShadow id="main" as="main" size={5} hideScrollBar className="flex-1 overflow-x-hidden max-w-full">
      <ScrollToTopButton />
      <SectionContainer id="hero">
        <div className="h-[75vh] w-full bg-zahid-blue-bg relative flex flex-col items-center">
          <Navigation />

          <div className="mx-auto w-full max-w-lg mt-8 flex flex-col items-center px-4 lg:px-0">
            <Chip color="default" size="lg" radius="md" className="text-sm bg-white/10 text-white mb-6">
              {t("trusted")}
            </Chip>

            <SectionH1>{t("subtitle")}</SectionH1>

            <SectionDescription className="mt-2 text-base text-wrap text-white/75">
              {t("platformDesc")}
            </SectionDescription>
          </div>

          <ChartsContainer />
        </div>
      </SectionContainer>

      <SectionContainer id="advantages" className="min-h-fit mt-10 p-4 xl:p-20 flex flex-col items-center">
        <div className="max-w-lg flex flex-col items-center">
          <p className="text-xs px-4 py-2 ring-4 ring-default-200 rounded-full mb-4">{t("advantages.title")}</p>

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

      <SectionContainer id="qa" className="bg-zahid-blue-bg">
        <div className="w-full h-full flex flex-col items-center p-4 xl:p-20">
          <div className="max-w-lg w-full text-center">
            <SectionH1>{t("qa.title")}</SectionH1>
            <SectionDescription className="text-base text-white/70 mt-4">{t("howCanWeHelp")}</SectionDescription>

            <QAAccordions />
          </div>
        </div>
      </SectionContainer>

      <SectionContainer id="images" className="mt-10">
        <div className="w-full h-full flex flex-col items-center p-4 xl:p-20">
          <SectionH1 className="text-center text-foreground">{t("images.title")}</SectionH1>

          <CarouselContainer>
            <CarouselContent className="w-full max-w-full ps-4">
              {carouselImags.map((image, index) => (
                <CarouselItem key={image.src} className="basis-full py-2 flex flex-col items-center justify-center">
                  <div className="relative w-full h-max min-h-[350px] group transition-all duration-300">
                    <Image
                      src={image.src}
                      alt="Carousel Image"
                      fill
                      sizes="600px"
                      className={cn(
                        "w-full h-full rounded-xl shadow-lg ring-1 ring-zahid-blue-bg group-hover:scale-95 transition-all duration-300 aspect-square",
                        {
                          "object-fill": image.fill,
                          "object-contain": !image.fill,
                        }
                      )}
                    />

                    <div className="absolute bottom-0 left-0 right-0 w-full opacity-0 translate-y-full pointer-events-none p-4 text-center bg-gray-900/60 backdrop-blur-xl rounded-t-xl group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                      <p className="text-white text-lg">{t(`images.${image.title}`)}</p>
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
              <SectionH1 className="text-black text-2xl lg:text-3xl font-semibold">{t("footer.title")}</SectionH1>

              <SectionDescription className="text-black mt-4">{t("footer.subtitle")}</SectionDescription>
              <SectionDescription className="flex flex-row items-center gap-x-2 mt-4">
                <span>{t("footer.contactUs")}:</span>
                <Button
                  size="sm"
                  title="Linkedin"
                  variant="bordered"
                  isIconOnly
                  as={Link}
                  target="_blank"
                  className="text-zahid-blue-bg hover:bg-zahid-blue-bg hover:text-white border-0 transition-all duration-150 hover:shadow hover:scale-110"
                  href="https://www.linkedin.com/company/syadtech/posts/?feedView=all"
                >
                  <Icon icon="linkedin" className="w-6 h-6" />
                </Button>

                <Button
                  size="sm"
                  variant="bordered"
                  title="Youtube"
                  className="text-rose-500 hover:bg-rose-500 hover:text-rose-50 border-0 transition-all duration-150 hover:shadow hover:scale-110"
                  isIconOnly
                  as={Link}
                  target="_blank"
                  href="https://www.youtube.com/channel/UCKOhF4EG7baI1ruRaAMpkDQ"
                >
                  <Icon icon="youtube" className="w-6 h-6" />
                </Button>

                <Button
                  size="sm"
                  title="Twitter (X)"
                  variant="bordered"
                  isIconOnly
                  as={Link}
                  className="text-cyan-500 hover:bg-cyan-500 hover:text-cyan-50 border-0 transition-all duration-150 hover:shadow hover:scale-110"
                  target="_blank"
                  href="https://x.com/Syadtech"
                >
                  <Icon icon="twitter" className="w-6 h-6" />
                </Button>

                <Button
                  size="sm"
                  title="Website"
                  variant="bordered"
                  isIconOnly
                  as={Link}
                  className="text-blue-500 hover:bg-blue-500 hover:text-blue-50 border-0 transition-all duration-150 hover:shadow hover:scale-110"
                  target="_blank"
                  href="https://www.syadtech.com/"
                >
                  <Icon icon="website" className="w-6 h-6" />
                </Button>
              </SectionDescription>
            </div>
          </div>

          <div className="w-full mt-10 flex flex-col items-center justify-center">
            <div className="absolute bottom-0 w-full">
              <Divider className="bg-white/20 mb-4" />

              <div className="flex flex-row items-center justify-between w-full mb-4 px-2 lg:px-4 xl:px:0">
                <p className="text-white text-xs">
                  &copy; {new Date().getFullYear()} {t("footer.copyRight")}
                </p>

                <div className="flex flex-row items-center gap-x-0 lg:gap-x-3">
                  <Button
                    variant="light"
                    className="text-white/80 font-semibold text-[0.65rem] lg:text-xs px-2 lg:px-inherit"
                  >
                    {t("footer.privacy")}
                  </Button>
                  <Button
                    variant="light"
                    className="text-white/80 font-semibold text-[0.65rem] lg:text-xs px-2 lg:px-inherit"
                  >
                    {t("footer.terms")}
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
