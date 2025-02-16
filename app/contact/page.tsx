"use client";
import React, { useEffect, useRef, useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
import { Loader2, Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import z from "zod";
import { fork } from "child_process";
import Image from "next/image";
import landing_photo from "@/public/asset/waste-water-treatment-plant 2.png";
import { motion } from "framer-motion";
import { GoLocation } from "react-icons/go";

const Page = () => {
  const nameRegex = new RegExp(/^[a-zA-Z]+([a-zA-Z\s'-])*$/);
  const formDataSchema = z.object({
    name: z.string().min(1).max(100).regex(nameRegex, {
      message: "Invalid Name Input",
    }),
    email: z.string().email({ message: "Invalid email address" }),
    subject: z.string().min(1).max(100),
    message: z
      .string()
      .min(10, { message: "Message should have at least 10 characters" })
      .max(20000, {
        message: "Message should not have more than 20000 characters",
      }),
  });
  // const recaptcha = useRef<ReCAPTCHA>(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  // console.log("recaptcha===", recaptcha.current?.getValue());

  useEffect(() => {
    setIsSubmitting(false);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center mt-[5.5rem] mb-16">
      <div className="w-full h-full relative flex flex-col justify-center items-center">
        <Image
          src={landing_photo}
          alt=""
          className="h-[80vh] object-cover brightness-[65%] w-full"
        />
        <motion.div className="absolute flex-col top-[50%] translate-y-[-50%] font-titilium text-white font-semibold w-[85%]">
          <div className="w-full space-y-6">
            <p className="smTablet:text-[min(5.5vh,5.5vw)] xsPhone:text-[min(8vh,8vw)] ">
              Contact Desire Energy
            </p>
            <p className="smLaptop:w-[50%] smTablet:w-[80%] xsPhone:w-full font-light smLaptop:text-[min(2.5vh,2.5vw)] smTablet:text-[min(3vh,3vw)] xsPhone:text-[min(4vh,4vw)]">
              We&apos;d love to hear from you. Feel free to reach out to us for
              any queries or information. We&apos;ll get back to you at the
              earliest.
            </p>
            <div
              className={
                "gap-2 grid smTablet:grid-cols-2 w-full smLaptop:max-w-[50%] xsPhone:max-w-full xsPhone:grid-cols-1"
              }
            >
              <div
                className={
                  "flex justify-start items-center smTablet:col-span-2 gap-4 font-normal bg-white  text-[#045824]  p-4 text-md"
                }
              >
                <GoLocation className={"min-w-5 h-auto"} />
                <p>
                  401, Manupasana Tower, Near Chomu House Circle, C–Scheme,
                  Jaipur (Raj.) INDIA
                </p>
              </div>
              <div
                className={
                  "flex justify-start items-center gap-4 font-normal bg-white  text-[#045824]  p-4 text-md"
                }
              >
                <Phone className={"w-5 h-auto"} />
                <p>0141-4050855</p>
              </div>
              <div
                className={
                  "flex justify-start items-center gap-4 font-normal bg-white  text-[#045824]  p-4 text-md"
                }
              >
                <Mail className={"w-5 h-auto"} />
                <p>info@desireenergy.com</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div
        className={
          "w-[90%] grid smLaptop:grid-cols-1 xsPhone:grid-cols-1  mt-4"
        }
      >
        <section
          className={" relative w-full flex justify-center items-center"}
        ></section>
        <section className="relative flex h-full w-full items-center justify-center bg-white dark:bg-gray-900">
          <div
            id="contact-form-div"
            className="flex flex-col items-center justify-center px-4 py-8 phone:w-[95%] lg:py-16 smLaptop:w-[95%]"
          >
            <h2 className="mb-4 text-center font-titilium text-[min(6.5vh,6.5vw)] font-bold tracking-wide text-neutral-900">
              Contact Us
            </h2>

            <div className="flex items-center justify-center phone:w-[95%] tablet:w-[80%]">
              <form
                action="POST"
                id="contact-form"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form: HTMLFormElement = document.getElementById(
                    "contact-form",
                  ) as HTMLFormElement;

                  setIsSubmitting(true);

                  //* CAPTCHA VERIFICATION

                  // const captchaValue = recaptcha?.current?.getValue();

                  // if (!captchaValue) {
                  //   alert("Please verify the reCAPTCHA!");
                  //   setIsSubmitting(false);
                  // } else {
                  //   const res = await fetch("/api/verify", {
                  //     method: "POST",
                  //     body: JSON.stringify(captchaValue),
                  //     headers: {
                  //       "content-type": "application/json",
                  //     },
                  //   });
                  //   const data = await res.json();

                    // console.log("data===", data);
                    // if (data.success) {
                      //* SEND EMAIL IF VERIFIED
                      const formDataToSend = formDataSchema.safeParse({
                        name: nameRef.current?.value,
                        email: emailRef.current?.value,
                        subject: subjectRef.current?.value,
                        message: messageRef.current?.value,
                      });
                      formDataToSend.error?.errors &&
                        console.log(
                          "formDataToSend",
                          formDataToSend.error?.errors,
                        );

                      if (formDataToSend.success) {
                        const response = await fetch("/api/resend-email", {
                          method: "POST",
                          body: JSON.stringify({
                            name: formDataToSend.data.name,
                            email: formDataToSend.data.email,
                            subject: formDataToSend.data.subject,
                            message: formDataToSend.data.message,
                          }),
                        });

                        const status = await response.json();

                        form.reset();
                        // recaptcha.current?.reset();
                        // alert("Form submission successful!");

                        setIsSubmitting(false);
                        if (status.success === true) {
                          toast.success(
                            "We'll get back to you at the earliest. Have a good day!",
                          );

                          setIsSubmitting(false);
                        } else {
                          toast.error(
                            "Something went wrong. Please try again later",
                          );
                          setIsSubmitting(false);
                        }
                      } else {
                        setIsSubmitting(false);

                        if (formDataToSend.error.format().email?._errors) {
                          toast.error(
                            formDataToSend.error.format().email?._errors,
                          );
                        }
                        if (formDataToSend.error.format().name?._errors) {
                          toast.error(
                            formDataToSend.error.format().name?._errors,
                          );
                        }
                        if (formDataToSend.error.format().subject?._errors) {
                          toast.error(
                            formDataToSend.error.format().subject?._errors,
                          );
                        }
                        if (formDataToSend.error.format().message?._errors) {
                          toast.error(
                            formDataToSend.error.format().message?._errors,
                          );
                        }
                        // recaptcha.current?.reset();
                      }
                  //   } else {
                  //     alert("reCAPTCHA validation failed!");
                  //     setIsSubmitting(false);
                  //   }
                  // }
                }}
                className="w-full space-y-8 font-poppins"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-neutral-700"
                  >
                    Name*
                  </label>
                  <input
                    ref={nameRef}
                    type="text"
                    id="name"
                    className="block w-full border border-white/20 bg-[#F3F4F6] p-4 font-titilium text-sm text-[#000121] shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-neutral-700"
                  >
                    E-mail*
                  </label>
                  <input
                    ref={emailRef}
                    required={true}
                    type="email"
                    id="email"
                    className="block w-full border border-white/20 bg-[#F3F4F6] p-4 font-titilium text-sm text-[#000121] shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                    placeholder="name@desireenergy.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-neutral-700"
                  >
                    Subject*
                  </label>
                  <input
                    ref={subjectRef}
                    type="text"
                    id="subject"
                    className="block w-full border border-white/20 bg-[#F3F4F6] p-4 font-titilium text-sm text-[#000121] shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                    placeholder="eg. Information about..."
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-neutral-700"
                  >
                    Your message*
                  </label>
                  <textarea
                    ref={messageRef}
                    id="message"
                    className="block w-full border border-white/20 bg-[#F3F4F6] p-4 font-titilium text-sm text-[#000121] shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
                    placeholder="Write Your Message..."
                    required
                  ></textarea>
                </div>
                {/*<ReCAPTCHA*/}
                {/*  ref={recaptcha}*/}
                {/*  sitekey={process.env.NEXT_PUBLIC_SITE_KEY as string}*/}
                {/*/>*/}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center bg-[#045824] hover:bg-[#045824]/90 p-4 text-center text-md font-medium  transition"
                >
                  {isSubmitting ? (
                    <Loader2 className="h-auto w-8 animate-spin" />
                  ) : (
                    <span className="font-titilium text-white">
                      Send message
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
