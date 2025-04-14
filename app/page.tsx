"use client";

import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Heart, Mail, MapPin, Phone, Utensils } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DonationForm } from "@/components/donation-form"
import { ContactForm } from "@/components/contact-form"
import { ImageGallery } from "@/components/image-gallery"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { useTranslation } from "@/components/theme-provider";

export default function Home() {
  const t = useTranslation();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <MainNav />
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://ik.imagekit.io/os33grffu/Sunny%20Day%20At%20A%20Nursing%20Home%20With%20Vibrant%20Interaction.png?updatedAt=1744568200053" // Replaced with a placeholder image URL
              alt="Elderly person from Malakand"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center space-y-6 py-16 text-center sm:space-y-8 sm:py-24 md:py-32 lg:py-40">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl font-bold tracking-tighter text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                {t.heroTitle}
              </h1>
              <p className="mx-auto max-w-[700px] text-base text-white/90 sm:text-lg md:text-xl">
                {t.heroDescription}
              </p>
            </div>
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              <Link href="#donate">{t.donateButton}</Link>
            </Button>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="bg-stone-100 py-16 md:py-24">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">{t.missionLabel}</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-stone-800">
                  {t.missionTitle}
                </h2>
                <p className="text-stone-600 text-lg">
                  {t.missionDescription1}
                </p>
                <p className="text-stone-600 text-lg">
                  {t.missionDescription2}
                </p>
                <div className="pt-4">
                  <Button variant="outline" className="border-amber-600 text-amber-700 hover:bg-amber-50">
                    {t.learnMoreButton} <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] overflow-hidden rounded-xl sm:h-[400px] md:h-full">
                <Image
                  src="https://ik.imagekit.io/os33grffu/7f4877da-3a27-4332-af2e-291ddd0b90f4.png?updatedAt=1744567437181" // Replaced with a placeholder image URL
                  alt="Elderly care at Malakand Rahat Ghar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">{t.servicesLabel}</div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl text-stone-800">
                {t.servicesTitle}
              </h2>
              <p className="mx-auto max-w-[700px] text-base sm:text-lg text-stone-600">
                {t.servicesDescription}
              </p>
            </div>
            <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
              <Card className="border-2 border-amber-100 bg-white">
                <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6 text-center">
                  <div className="mb-3 sm:mb-4 rounded-full bg-amber-100 p-3">
                    <Utensils className="h-6 w-6 sm:h-8 sm:w-8 text-amber-700" />
                  </div>
                  <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl font-bold">{t.serviceShelterTitle}</h3>
                  <p className="text-sm sm:text-base text-stone-600">
                    {t.serviceShelterDescription}
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-amber-100 bg-white">
                <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6 text-center">
                  <div className="mb-3 sm:mb-4 rounded-full bg-amber-100 p-3">
                    <Utensils className="h-6 w-6 sm:h-8 sm:w-8 text-amber-700" />
                  </div>
                  <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl font-bold">{t.serviceFoodTitle}</h3>
                  <p className="text-sm sm:text-base text-stone-600">
                    {t.serviceFoodDescription}
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-amber-100 bg-white">
                <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6 text-center">
                  <div className="mb-3 sm:mb-4 rounded-full bg-amber-100 p-3">
                    <svg
                      className="h-6 w-6 sm:h-8 sm:w-8 text-amber-700"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 9C2 8.44772 2.44772 8 3 8H21C21.5523 8 22 8.44772 22 9V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V9Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M16 8V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V8"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl font-bold">{t.serviceClothingTitle}</h3>
                  <p className="text-sm sm:text-base text-stone-600">
                    {t.serviceClothingDescription}
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-amber-100 bg-white">
                <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6 text-center">
                  <div className="mb-3 sm:mb-4 rounded-full bg-amber-100 p-3">
                    <svg
                      className="h-6 w-6 sm:h-8 sm:w-8 text-amber-700"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 14C19 17.866 15.866 21 12 21C8.13401 21 5 17.866 5 14C5 10.134 8.13401 7 12 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 7V3M12 3L9 6M12 3L15 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl font-bold">{t.serviceMedicalTitle}</h3>
                  <p className="text-sm sm:text-base text-stone-600">
                    {t.serviceMedicalDescription}
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-amber-100 bg-white">
                <CardContent className="flex flex-col items-center justify-center p-4 sm:p-6 text-center">
                  <div className="mb-3 sm:mb-4 rounded-full bg-amber-100 p-3">
                    <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-amber-700" />
                  </div>
                  <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl font-bold">{t.serviceEmotionalTitle}</h3>
                  <p className="text-sm sm:text-base text-stone-600">
                    {t.serviceEmotionalDescription}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="bg-stone-100 py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">{t.galleryLabel}</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-stone-800">
                {t.galleryTitle}
              </h2>
              <p className="mx-auto max-w-[700px] text-lg text-stone-600">
                {t.galleryDescription}
              </p>
            </div>
            <div className="mt-12">
              <ImageGallery />
            </div>
          </div>
        </section>

        {/* Donate Section */}
        <section id="donate" className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">
                {t.donateLabel}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-stone-800">
                {t.donateTitle}
              </h2>
              <p className="mx-auto max-w-[700px] text-lg text-stone-600">
                {t.donateDescription}
              </p>
            </div>
            <div className="mt-12">
              <Tabs defaultValue="donate" className="mx-auto max-w-3xl">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="donate">{t.donateTab}</TabsTrigger>
                  <TabsTrigger value="methods">{t.paymentMethodsTab}</TabsTrigger>
                </TabsList>
                <TabsContent value="donate" className="p-4">
                  <DonationForm />
                </TabsContent>
                <TabsContent value="methods" className="p-4">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="mb-4 text-xl font-bold">{t.bankTransferTitle}</h3>
                        <div className="space-y-2 text-stone-600">
                          <p>
                            <strong>{t.bank1Name}</strong>
                          </p>
                          <p>{t.bank1AccountTitle}</p>
                          <p>{t.bank1AccountNumber}</p>
                          <p>{t.bank1BranchCode}</p>
                          <div className="h-4"></div>
                          <p>
                            <strong>{t.bank2Name}</strong>
                          </p>
                          <p>{t.bank2AccountTitle}</p>
                          <p>{t.bank2AccountNumber}</p>
                          <p>{t.bank2BranchCode}</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="mb-4 text-xl font-bold">{t.mobilePaymentTitle}</h3>
                        <div className="space-y-6 text-stone-600">
                          <div className="flex items-center space-x-4">
                            <div className="h-12 w-12 relative">
                              <Image
                                src="https://via.placeholder.com/100x100" // Replaced with a placeholder image URL
                                alt="Easypaisa"
                                fill
                                className="object-contain"
                              />
                            </div>
                            <div>
                              <p>
                                <strong>{t.easypaisaName}</strong>
                              </p>
                              <p>{t.easypaisaAccount}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="h-12 w-12 relative">
                              <Image
                                src="https://via.placeholder.com/100x100" // Replaced with a placeholder image URL
                                alt="JazzCash"
                                fill
                                className="object-contain"
                              />
                            </div>
                            <div>
                              <p>
                                <strong>{t.jazzcashName}</strong>
                              </p>
                              <p>{t.jazzcashAccount}</p>
                            </div>
                          </div>
                        </div>
                        <p className="mt-6 text-center font-medium text-amber-700">
                          {t.donationNote}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-stone-100 py-12 md:py-24">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-amber-100 px-3 py-1 text-sm text-amber-800">{t.contactLabel}</div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl text-stone-800">
                {t.contactTitle}
              </h2>
              <p className="mx-auto max-w-[700px] text-base sm:text-lg text-stone-600">
                {t.contactDescription}
              </p>
            </div>
            <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 md:grid-cols-2">
              <div>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <MapPin className="mt-1 h-5 w-5 text-amber-700" />
                        <div>
                          <h3 className="font-bold">{t.addressTitle}</h3>
                          <p className="text-stone-600">
                            {t.addressDescription}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <Phone className="mt-1 h-5 w-5 text-amber-700" />
                        <div>
                          <h3 className="font-bold">{t.phoneTitle}</h3>
                          <p className="text-stone-600">{t.phone1}</p>
                          <p className="text-stone-600">{t.phone2}</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <Mail className="mt-1 h-5 w-5 text-amber-700" />
                        <div>
                          <h3 className="font-bold">{t.emailTitle}</h3>
                          <p className="text-stone-600">{t.email1}</p>
                          <p className="text-stone-600">{t.email2}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 h-[300px] w-full overflow-hidden rounded-lg">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106013.11079809644!2d71.8069599!3d34.5590704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dc2f3a1b4e0f41%3A0x9e461c1bdc0c4f47!2sMalakand%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1713129296!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-xl font-bold">{t.contactFormTitle}</h3>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
