"use client";

import { Button, Divider, Input, Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";

const LoginModal = () => {
  const [formOpen, setFormOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: { email: string; password: string }) => {};

  return (
    <>
      <Button onClick={() => setFormOpen(true)} radius="full" variant="solid" className="bg-white text-black">
        Sign In
      </Button>

      <Modal isOpen={formOpen} onOpenChange={setFormOpen}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Sign In</ModalHeader>

              <Divider />

              <ModalBody className="py-4">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-3 justify-start">
                  <Input
                    label="Email"
                    size="md"
                    variant="faded"
                    labelPlacement="outside"
                    title="Email"
                    placeholder="Enter 'admin'"
                    radius="sm"
                    // color={errors.email ? "danger" : "default"}
                    {...register("email", { required: true, validate: (value) => value === "admin" })}
                    isInvalid={!!errors.email}
                    autoComplete="none"
                  />

                  <Input
                    label="Password"
                    variant="faded"
                    size="md"
                    labelPlacement="outside"
                    title="Password"
                    placeholder="Enter 'admin'"
                    type="password"
                    radius="sm"
                    // color={errors.password ? "danger" : "default"}
                    {...register("password", { required: true, validate: (value) => value === "admin" })}
                    isInvalid={!!errors.password}
                  />

                  <Divider />

                  <div className="flex flex-row items-stretch justify-evenly gap-x-3">
                    <Button type="submit" variant="solid" className="bg-zahid-blue-bg text-white flex-1">
                      Sign In
                    </Button>

                    <Button onClick={onClose} variant="bordered" color="default" className="flex-1">
                      Cancel
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
