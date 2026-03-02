import AnimatedContent from "../src/components/AnimatedContent";
import Threads from "../src/components/Threads";
import { useForm } from "react-hook-form";
import PdfViewer from "./PdfViewer";
import sendEmail from "../services/mailServices";
import cv from "/CVPortfolio.pdf";

const wait = function (duration = 1000) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration);
  });
};

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (formData) => {
    try {
      await wait(2000);
      await sendEmail(formData);
    } catch (error) {
      console.error(
        "Erreur lors de l'envoi :",
        error.response?.data || error.message,
      );
    }
  };

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <div className="fixed inset-0 min-h-screen w-full pb-15">
          <Threads
            color={[
              0.30980392156862746, 0.49019607843137253, 0.3176470588235294,
            ]}
            amplitude={1}
            distance={0.6}
            enableMouseInteraction={false}
          />
        </div>
        <main className="mt-16 flex grow items-center justify-center pb-30">
          <AnimatedContent
            className="mx-auto flex w-full max-w-screen items-center justify-center p-4 pt-15 pb-15 text-center text-xl font-bold md:pb-0 md:text-3xl/12"
            distance={0}
            direction="vertical"
            reverse
            duration={2}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.1}
            delay={0.3}
          >
            <div className="flex flex-col md:gap-15 lg:flex-row">
              <section className="mt-6 flex flex-col items-center justify-center">
                <h2>Mon Cv</h2>
                <a
                  href="/LhermitteOphelieCVDevFS.pdf"
                  download="LhermitteOphelieCVDevFS.pdf"
                  className="button mb-6 text-base md:text-xl"
                >
                  Télécharger le CV
                </a>
                <PdfViewer file={cv}></PdfViewer>
              </section>

              <section className="mt-6 flex flex-col items-center justify-center">
                <h2 className="mb-6">Contactez-moi</h2>
                <form
                  className="rounded-lg border-2 border-(--color-evergreen-600) p-4 text-base inset-shadow-[0_0_12px_1px_var(--color-evergreen-600)] backdrop-blur-md md:p-6 lg:text-xl xl:w-2/3"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="mx-3 mb-6 flex flex-wrap">
                    <input
                      className="hidden"
                      type="text"
                      id="honeypot"
                      autoComplete="off"
                      {...register("honeypot")}
                    />
                    <div className="mb-6 w-full px-3 lg:w-1/2">
                      <label
                        className="mb-2 block text-base font-bold uppercase"
                        htmlFor="firstName"
                      >
                        Prénom
                      </label>
                      <input
                        className="mb-3 block w-full rounded border bg-gray-200 px-4 py-3 text-base leading-tight text-gray-700 focus:bg-white focus:outline-none"
                        type="text"
                        id="firstName"
                        placeholder="Votre prénom"
                        {...register("firstName", {
                          required: "Veuillez renseigner un prénom valide",
                          maxLength: {
                            value: 50,
                            message: "Maximum 50 caractères",
                          },
                        })}
                        aria-invalid={errors.firstName ? "true" : "false"}
                      />
                      {errors.firstName && (
                        <p className="text-sm text-red-600">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div className="mb-6 w-full px-3 lg:w-1/2">
                      <label
                        className="mb-2 block text-base font-bold uppercase"
                        htmlFor="lastName"
                      >
                        Nom
                      </label>
                      <input
                        className="mb-3 block w-full rounded border bg-gray-200 px-4 py-3 text-base leading-tight text-gray-700 focus:bg-white focus:outline-none"
                        type="text"
                        id="lastName"
                        placeholder="Votre Nom"
                        {...register("lastName", {
                          required: "Veuillez renseigner un nom valide",
                          maxLength: 100,
                        })}
                        aria-invalid={errors.lastName ? "true" : "false"}
                      />
                      {errors.lastName?.type === "required" && (
                        <p className="text-sm text-red-600">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                    <div className="mb-6 flex w-full flex-col items-center justify-center px-3 md:mb-0">
                      <label
                        className="mb-2 block text-base font-bold uppercase"
                        htmlFor="email"
                      >
                        Votre adresse e-mail
                      </label>
                      <input
                        className="mb-3 block w-full rounded border bg-gray-200 px-4 py-3 text-base leading-tight text-gray-700 focus:bg-white focus:outline-none"
                        type="email"
                        id="email"
                        placeholder="Email@email.com"
                        {...register("email", {
                          required: "L'email est requis",
                          maxLength: {
                            value: 320,
                            message: "Email trop long",
                          },
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Veuillez entrer un email valide",
                          },
                        })}
                        aria-invalid={errors.email ? "true" : "false"}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-600">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="mb-6 flex w-full flex-col items-center justify-center px-3 md:mb-0">
                      <label
                        className="mb-2 block text-base font-bold uppercase"
                        htmlFor="message"
                      >
                        Votre message :
                      </label>
                      <textarea
                        className="mb-3 block w-full rounded border bg-gray-200 px-4 py-3 text-base leading-tight text-gray-700 focus:bg-white focus:outline-none"
                        id="message"
                        type="text"
                        placeholder="Ecrivez votre message ici..."
                        {...register("message", {
                          required: "Veuillez écrire un message",
                          maxLength: 2000,
                        })}
                        aria-invalid={errors.message ? "true" : "false"}
                      />
                      {errors.message?.type === "required" && (
                        <p className="text-sm text-red-600">
                          Veuillez écrire un message
                        </p>
                      )}
                      <input
                        type="submit"
                        className="button text-base md:text-xl"
                        value={isSubmitting ? "Envoi en cours..." : "Envoyer"}
                        disabled={isSubmitting}
                      />
                      {isSubmitSuccessful && (
                        <div className="mb-4 rounded bg-green-100 p-3 text-center text-base text-green-800">
                          Message envoyé avec succès !
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </section>
            </div>
          </AnimatedContent>
        </main>
      </div>
    </>
  );
};

export default ContactPage;
