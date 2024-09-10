"use client";

import useRoutesStore from "@/stores/routesStore";
import { Button, Divider, Input, Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const LoginModal = () => {
  const [formOpen, setFormOpen] = useState(false);
  const router = useRouter();
  const locale = useLocale();
  const { setMainRoute } = useRoutesStore();
  const t = useTranslations("landingPage");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: { email: string; password: string }) => {
    setMainRoute();
    router.push(`/${locale}/dashboard`);
  };

  return (
    <>
      <Button onClick={() => setFormOpen(true)} radius="full" variant="solid" className="bg-white text-black">
        {t("login")}
      </Button>

      <Modal placement="top-center" isOpen={formOpen} onOpenChange={setFormOpen}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>{t("login")}</ModalHeader>

              <Divider />

              <ModalBody className="py-4">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-3 justify-start">
                  <Input
                    label={t("email")}
                    size="md"
                    variant="faded"
                    labelPlacement="outside"
                    title="Email"
                    placeholder="admin"
                    radius="sm"
                    // color={errors.email ? "danger" : "default"}
                    {...register("email", { required: true, validate: (value) => value === "admin" })}
                    isInvalid={!!errors.email}
                    autoComplete="none"
                  />

                  <Input
                    label={t("password")}
                    variant="faded"
                    size="md"
                    labelPlacement="outside"
                    title="Password"
                    placeholder="admin"
                    type="password"
                    radius="sm"
                    // color={errors.password ? "danger" : "default"}
                    {...register("password", { required: true, validate: (value) => value === "admin" })}
                    isInvalid={!!errors.password}
                  />

                  <Divider />

                  <div className="flex flex-row items-stretch justify-evenly gap-x-3">
                    <Button type="submit" variant="solid" className="bg-zahid-blue-bg text-white flex-1">
                      {t("login")}
                    </Button>

                    <Button onClick={onClose} type="reset" variant="bordered" color="default" className="flex-1">
                      {t("cancel")}
                    </Button>
                  </div>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
